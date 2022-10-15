package com.dbsummerschool.dbsports.controller;

import com.dbsummerschool.dbsports.dtos.TeamAuxDTO;
import com.dbsummerschool.dbsports.dtos.TeamDTO;
import com.dbsummerschool.dbsports.model.Team;
import com.dbsummerschool.dbsports.model.User;
import com.dbsummerschool.dbsports.service.TeamService;
import com.dbsummerschool.dbsports.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.HashSet;
import java.util.Set;

@Controller
@RequestMapping("/teams")
public class TeamController {
    TeamService teamService;
    UserService userService;

    @Autowired
    public TeamController(TeamService teamService, UserService userService) {
        this.teamService = teamService;
        this.userService = userService;
    }

    @PostMapping("/add-team")
    public ResponseEntity addTeam(@RequestBody TeamDTO teamDTO) {
        Set<User> usersList = new HashSet<>();
        if(teamDTO.getUsersEmails().size() == 0) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Users list is null!");
        } else for (String userEmail : teamDTO.getUsersEmails()) {
            if (userService.getUsersByEmail(userEmail).size() == 0) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User " + userEmail + " not found.");
            }
            User user = userService.getUsersByEmail(userEmail).get(0);
            usersList.add(user);
        }
        teamService.addTeam(teamDTO, usersList);
        return ResponseEntity.status(HttpStatus.CREATED).body("Team created!");
    }

    @PostMapping("/add-user")
    public ResponseEntity addUser(@RequestBody TeamAuxDTO teamDTO) {
        String email = teamDTO.getEmail();
        String nameTeam = teamDTO.getName();
        System.out.println(email);
        User user = userService.getUsersByEmail(email).get(0);
        Team team = teamService.getAllByName(nameTeam).get(0);
        team.getUsers().add(user);
        teamService.updateUserList(team);
        return ResponseEntity.status(HttpStatus.OK).body("User added successfully!");

    }
}

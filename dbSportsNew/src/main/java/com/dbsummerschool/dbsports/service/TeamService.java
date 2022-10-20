package com.dbsummerschool.dbsports.service;

import com.dbsummerschool.dbsports.dtos.TeamDTO;
import com.dbsummerschool.dbsports.model.Team;
import com.dbsummerschool.dbsports.model.User;
import com.dbsummerschool.dbsports.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class TeamService {
    TeamRepository teamRepository;


    @Autowired
    public TeamService(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    public List<TeamDTO> findAllTeams() {

        List<TeamDTO> teamDTOS = teamRepository.findAll().stream().map(
                team -> TeamDTO.builder()
                        .name(team.getName())
                        .typeOfSport(team.getTypeOfSport())
                        .usersEmails(
                                team.getUsers().stream().map(User::getEmail).toList()).build()
        ).toList();
        System.out.println("idk");
        return teamDTOS;
    }

    public Team addTeam(TeamDTO teamDTO, Set<User> users) {
        Team team = new Team();
        team.setName(teamDTO.getName());
        team.setTypeOfSport(teamDTO.getTypeOfSport());
        team.setUsers(new HashSet());
        return teamRepository.save(team);
    }

    public List<Team> getAllByName(String name) {
        return teamRepository.findAllByName(name);
    }

    public void updateUserList(Team team) {
        teamRepository.save(team);
    }
}

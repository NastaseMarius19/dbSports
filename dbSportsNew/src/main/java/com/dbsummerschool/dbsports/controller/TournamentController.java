package com.dbsummerschool.dbsports.controller;

import com.dbsummerschool.dbsports.model.Sport;
import com.dbsummerschool.dbsports.model.Tournament;
import com.dbsummerschool.dbsports.model.User;
import com.dbsummerschool.dbsports.service.SportService;
import com.dbsummerschool.dbsports.service.TournamentService;
import com.dbsummerschool.dbsports.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Controller
@RequestMapping("/tournaments")
public class TournamentController {
    TournamentService tournamentService;
    SportService sportService;
    UserService userService;

    @Autowired
    public TournamentController(TournamentService tournamentService, SportService sportService, UserService userService) {
        this.tournamentService = tournamentService;
        this.sportService = sportService;
        this.userService = userService;
    }

    @GetMapping("/{nameSport}")
    @ResponseBody
    public List<Tournament> getAllBySport(@PathVariable(name = "nameSport") String nameSport) {
        Sport sport = sportService.getSportsByName(nameSport).get(0);
        return tournamentService.getAllBySport(sport);
    }

    @GetMapping("/filtrate-by/{email}")
    @ResponseBody
    public List<Tournament> getTournaments(@PathVariable(name = "email") String email) {
        User user = userService.getUsersByEmail(email).get(0);
        Set<Sport> sportSet = user.getSportList();
        List<Sport> sportList = new ArrayList<Sport>(sportSet);
        List<Tournament> tournamentList = new ArrayList<>();
        for(int i = 0; i < sportList.size(); i++)
            tournamentList.addAll(tournamentService.getAllBySport(sportList.get(i)));
        return tournamentList;
    }
}

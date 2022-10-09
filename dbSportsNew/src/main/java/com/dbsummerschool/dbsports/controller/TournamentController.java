package com.dbsummerschool.dbsports.controller;

import com.dbsummerschool.dbsports.model.Sport;
import com.dbsummerschool.dbsports.model.Tournament;
import com.dbsummerschool.dbsports.service.SportService;
import com.dbsummerschool.dbsports.service.TournamentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;


@Controller
@RequestMapping("/tournaments")
public class TournamentController {
    TournamentService tournamentService;
    SportService sportService;

    @Autowired
    public TournamentController(TournamentService tournamentService, SportService sportService) {
        this.tournamentService = tournamentService;
        this.sportService=sportService;
    }

    @GetMapping("/{nameSport}")
    @ResponseBody
    public List<Tournament> getAllBySport(@PathVariable(name="nameSport") String nameSport) {
        Sport sport = sportService.getSportsByName(nameSport).get(0);
        return tournamentService.getAllBySport(sport);
    }
}

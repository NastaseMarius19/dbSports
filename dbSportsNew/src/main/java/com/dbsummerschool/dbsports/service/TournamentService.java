package com.dbsummerschool.dbsports.service;

import com.dbsummerschool.dbsports.model.Sport;
import com.dbsummerschool.dbsports.model.Tournament;
import com.dbsummerschool.dbsports.repository.TournamentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TournamentService {
    TournamentRepository tournamentRepository;

    @Autowired
    public TournamentService(TournamentRepository tournamentRepository) {
        this.tournamentRepository = tournamentRepository;
    }

    public List<Tournament> getAllBySport(Sport sport) {
        return tournamentRepository.findAllBySport(sport);
    }
}

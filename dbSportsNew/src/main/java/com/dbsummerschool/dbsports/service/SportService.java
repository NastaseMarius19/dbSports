package com.dbsummerschool.dbsports.service;

import com.dbsummerschool.dbsports.model.Sport;
import com.dbsummerschool.dbsports.repository.SportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SportService {
    SportRepository sportRepository;

    @Autowired
    public SportService(SportRepository sportRepository) {
        this.sportRepository = sportRepository;
    }

    public Sport getFirst() {
        return sportRepository.findAll().get(0);
    }

    public List<Sport> getSportsByName(String name) {
        return sportRepository.findSportByName(name);
    }
    public Sport addSport(String sportName){
        Sport sport = new Sport();
        sport.setName(sportName);
        return sportRepository.save(sport);
    }

}

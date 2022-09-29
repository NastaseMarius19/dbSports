package com.dbsummerschool.dbsports.service;

import com.dbsummerschool.dbsports.model.Sport;
import com.dbsummerschool.dbsports.repository.SportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}

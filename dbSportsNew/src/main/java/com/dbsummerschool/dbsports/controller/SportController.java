package com.dbsummerschool.dbsports.controller;

import com.dbsummerschool.dbsports.model.Sport;
import com.dbsummerschool.dbsports.service.SportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SportController {
    SportService sportService;

    @Autowired
    public SportController(SportService sportService) {
        this.sportService = sportService;
    }

    @GetMapping("/test")
    public Sport getFirstSport() {
        return sportService.getFirst();
    }
}
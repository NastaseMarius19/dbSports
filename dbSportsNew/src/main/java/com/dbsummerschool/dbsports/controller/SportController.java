package com.dbsummerschool.dbsports.controller;

import com.dbsummerschool.dbsports.dtos.SportDTO;
import com.dbsummerschool.dbsports.model.Sport;
import com.dbsummerschool.dbsports.service.SportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/sports")
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

    @PostMapping("/add")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity addSport(@RequestBody SportDTO sportDTO){
        return ResponseEntity.ok().body(sportService.addSport(sportDTO.getName()));
    }
}

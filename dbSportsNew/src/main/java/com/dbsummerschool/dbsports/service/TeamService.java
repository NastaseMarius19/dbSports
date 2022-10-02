package com.dbsummerschool.dbsports.service;

import com.dbsummerschool.dbsports.model.Team;
import com.dbsummerschool.dbsports.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeamService {
    TeamRepository teamRepository;

    @Autowired
    public TeamService(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }
}

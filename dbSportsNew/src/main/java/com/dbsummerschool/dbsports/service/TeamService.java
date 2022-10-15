package com.dbsummerschool.dbsports.service;

import com.dbsummerschool.dbsports.dtos.TeamDTO;
import com.dbsummerschool.dbsports.model.Team;
import com.dbsummerschool.dbsports.model.User;
import com.dbsummerschool.dbsports.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class TeamService {
    TeamRepository teamRepository;

    @Autowired
    public TeamService(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    public Team addTeam(TeamDTO teamDTO, Set<User> users) {
        Team team = new Team();
        team.setName(teamDTO.getName());
        team.setTypeOfSport(teamDTO.getTypeOfSport());
        team.setUsers(users);
        return teamRepository.save(team);
    }
}

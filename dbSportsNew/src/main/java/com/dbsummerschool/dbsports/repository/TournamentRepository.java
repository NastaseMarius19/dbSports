package com.dbsummerschool.dbsports.repository;

import com.dbsummerschool.dbsports.model.Sport;
import com.dbsummerschool.dbsports.model.Tournament;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TournamentRepository extends JpaRepository<Tournament, Integer> {

    public List<Tournament> findAllBySport(Sport sport);
}

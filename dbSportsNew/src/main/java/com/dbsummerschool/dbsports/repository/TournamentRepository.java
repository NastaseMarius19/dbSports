package com.dbsummerschool.dbsports.repository;

import com.dbsummerschool.dbsports.model.Tournament;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TournamentRepository extends JpaRepository<Tournament, Integer> {
}

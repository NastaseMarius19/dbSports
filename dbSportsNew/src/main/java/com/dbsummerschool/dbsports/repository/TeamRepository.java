package com.dbsummerschool.dbsports.repository;

import com.dbsummerschool.dbsports.model.Team;
import com.dbsummerschool.dbsports.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeamRepository extends JpaRepository<Team, Integer> {
    List<Team> findAllByName(String name);
}

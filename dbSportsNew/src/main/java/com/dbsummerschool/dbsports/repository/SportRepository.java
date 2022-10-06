package com.dbsummerschool.dbsports.repository;

import com.dbsummerschool.dbsports.model.Sport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SportRepository extends JpaRepository<Sport, Integer> {
    Sport findSportByName(String name);
}

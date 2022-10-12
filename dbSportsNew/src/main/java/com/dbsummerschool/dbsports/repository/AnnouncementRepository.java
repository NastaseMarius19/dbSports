package com.dbsummerschool.dbsports.repository;

import com.dbsummerschool.dbsports.model.Announcement;
import com.dbsummerschool.dbsports.model.Sport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnnouncementRepository extends JpaRepository<Announcement, Integer> {
    List<Announcement> getAllBySport(Sport sport);
}

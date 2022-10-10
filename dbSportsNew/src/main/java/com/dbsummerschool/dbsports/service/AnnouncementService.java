package com.dbsummerschool.dbsports.service;

import com.dbsummerschool.dbsports.dtos.AnnouncementDTO;
import com.dbsummerschool.dbsports.model.Announcement;
import com.dbsummerschool.dbsports.model.Sport;
import com.dbsummerschool.dbsports.repository.AnnouncementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;

@Service
public class AnnouncementService {
    AnnouncementRepository announcementRepository;

    @Autowired
    public AnnouncementService(AnnouncementRepository announcementRepository) {
        this.announcementRepository = announcementRepository;
    }

    public Announcement addAnnouncement(AnnouncementDTO announcementDTO, Sport sport) throws ParseException {
        Announcement announcement = new Announcement();
        announcement.setTitle(announcementDTO.getTitle());
        announcement.setDescription(announcementDTO.getDescription());
        announcement.setPicture(announcementDTO.getPicture());
        announcement.setPostingUser(announcementDTO.getNameUser());
        SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MMM-yyyy", Locale.ENGLISH);
        Date dateOfPost = dateFormat.parse(announcementDTO.getTimeOfPost());
        announcement.setTimeOfPost(dateOfPost);
        announcement.setSport(sport);
        return announcementRepository.save(announcement);
    }

    public List<Announcement> getAllBySport(Sport sport) {
        return announcementRepository.getAllBySport(sport);
    }
}

package com.dbsummerschool.dbsports.controller;

import com.dbsummerschool.dbsports.model.Announcement;
import com.dbsummerschool.dbsports.model.AnnouncementDTO;
import com.dbsummerschool.dbsports.model.Sport;
import com.dbsummerschool.dbsports.service.AnnouncementService;
import com.dbsummerschool.dbsports.service.SportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.logging.SimpleFormatter;

@Controller
@RequestMapping("/announcements")
public class AnnouncementController {
    AnnouncementService announcementService;
    SportService sportService;

    @Autowired
    public AnnouncementController(AnnouncementService announcementService, SportService sportService) {
        this.announcementService = announcementService;
        this.sportService = sportService;
    }

    @PostMapping("/add-announcement")
    public ResponseEntity addAnnouncement(@RequestBody AnnouncementDTO announcementDTO) throws ParseException {
        Announcement announcement = new Announcement();
        announcement.setTitle(announcementDTO.getTitle());
        announcement.setDescription(announcementDTO.getDescription());
        announcement.setPicture(announcementDTO.getPicture());
        announcement.setPostingUser(announcementDTO.getNameUser());
        SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MMM-YYYY", Locale.ENGLISH);
        Date dateOfPost = dateFormat.parse(announcementDTO.getTimeOfPost());
        announcement.setTimeOfPost(dateOfPost);
        Sport sport = sportService.getSportsByName(announcementDTO.getSportName()).get(0);
        announcement.setSport(sport);
        announcementService.addAnnouncement(announcement);
        return ResponseEntity.status(HttpStatus.CREATED).body("Posted!");
    }
}

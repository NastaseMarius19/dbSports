package com.dbsummerschool.dbsports.controller;

import com.dbsummerschool.dbsports.model.Announcement;
import com.dbsummerschool.dbsports.dtos.AnnouncementDTO;
import com.dbsummerschool.dbsports.model.Sport;
import com.dbsummerschool.dbsports.model.User;
import com.dbsummerschool.dbsports.service.AnnouncementService;
import com.dbsummerschool.dbsports.service.SportService;
import com.dbsummerschool.dbsports.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.*;

@Controller
@RequestMapping(value = "/announcements", method = {RequestMethod.GET, RequestMethod.POST})
public class AnnouncementController {
    AnnouncementService announcementService;
    SportService sportService;
    UserService userService;

    @Autowired
    public AnnouncementController(AnnouncementService announcementService, SportService sportService, UserService userService) {
        this.announcementService = announcementService;
        this.sportService = sportService;
        this.userService = userService;
    }

    @PostMapping("/add-announcement")
    public ResponseEntity addAnnouncement(@RequestBody AnnouncementDTO announcementDTO) throws ParseException {
        Sport sport = sportService.getSportsByName(announcementDTO.getSportName()).get(0);
        announcementService.addAnnouncement(announcementDTO, sport);
        return ResponseEntity.status(HttpStatus.CREATED).body("Posted!");
    }

    @GetMapping("/{nameSport}")
    @ResponseBody
    public List<Announcement> getAnnouncementsBySport(@PathVariable(name = "nameSport") String nameSport) {
        Sport sport = sportService.getSportsByName(nameSport).get(0);
        return announcementService.getAllBySport(sport);
    }

    @GetMapping("/filtrate-by/{email}")
    @ResponseBody
    public List<Announcement> getAnnouncements(@PathVariable(name = "email") String email) {
        User user = userService.getUsersByEmail(email).get(0);
        Set<Sport> sportSet = user.getSportList();
        List<Sport> sportList = new ArrayList<>(sportSet);
        List<Announcement> announcementList = new ArrayList<>();
        for(int i = 0; i < sportList.size(); i++)
            announcementList.addAll(announcementService.getAllBySport(sportList.get(i)));
        return announcementList;
    }
}

package com.dbsummerschool.dbsports.controller;

import com.dbsummerschool.dbsports.exception.AlreadyExistException;
import com.dbsummerschool.dbsports.exception.InvalidEmailFormatException;
import com.dbsummerschool.dbsports.model.Sport;
import com.dbsummerschool.dbsports.model.User;
import com.dbsummerschool.dbsports.service.SportService;
import com.dbsummerschool.dbsports.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
    UserService userService;
    SportService sportService;

    @Autowired
    public UserController(UserService userService, SportService sportService) {
        this.userService = userService;
        this.sportService = sportService;
    }

    @PostMapping("/register")
    public User register(@RequestBody User user){
        try {
            return userService.registerNewUser(user);
        } catch (InvalidEmailFormatException e) {
            e.printStackTrace();
        } catch (AlreadyExistException e) {
            e.printStackTrace();
        }
        return null;
    }
}

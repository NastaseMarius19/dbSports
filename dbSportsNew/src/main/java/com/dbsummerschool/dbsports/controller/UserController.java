package com.dbsummerschool.dbsports.controller;

import com.dbsummerschool.dbsports.dtos.LoginDTO;
import com.dbsummerschool.dbsports.dtos.SportDTO;
import com.dbsummerschool.dbsports.dtos.UserDTO;
import com.dbsummerschool.dbsports.exception.*;
import com.dbsummerschool.dbsports.model.*;
import com.dbsummerschool.dbsports.model.User;
import com.dbsummerschool.dbsports.service.SportService;
import com.dbsummerschool.dbsports.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.io.UnsupportedEncodingException;

@Controller
@RequestMapping("/users")
@CrossOrigin(origins="*")
public class UserController {
    UserService userService;
    SportService sportService;
    ExceptionHandlerAdvice exceptionHandlerAdvice;

    @Autowired
    public UserController(UserService userService, SportService sportService) {
        this.userService = userService;
        this.sportService = sportService;
        exceptionHandlerAdvice = new ExceptionHandlerAdvice();
    }

    @PostMapping("/register")


    public ResponseEntity register(@RequestBody UserDTO userDTO){

        try {
            User newUser = new User();
            newUser.setName(userDTO.getName());
            newUser.setSurname(userDTO.getSurname());
            newUser.setPassword(userDTO.getPassword());
            newUser.setEmail(userDTO.getEmail());
            userService.registerNewUser(newUser);
        } catch (AlreadyExistException e) {
            e.printStackTrace();
            return exceptionHandlerAdvice.alreadyExistException();
        } catch (InvalidEmailFormatException e) {
            return exceptionHandlerAdvice.invalidEmailFormatException();
        } catch (MessagingException e) {
            e.printStackTrace();
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return ResponseEntity.status(HttpStatus.CREATED).body("Verify your email!");

    }

    @GetMapping("/verify/{code}")
    public ResponseEntity verifyUser(@PathVariable("code") String code) {
        System.out.println(code);
        if (userService.verify(code)) {
            return ResponseEntity.status(HttpStatus.CREATED).body("Account created!");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid registration code!");
        }
    }

    @GetMapping("/login")
    public ResponseEntity login(@RequestBody LoginDTO loginDTO) {
        String email = loginDTO.getEmail();
        if(userService.getUsersByEmail(email).size() != 0) {
            User user = userService.getUsersByEmail(email).get(0);
            Argon2PasswordEncoder encoder = new Argon2PasswordEncoder(32,64,1,15*1024,2);
            if(encoder.matches(loginDTO.getPassword(), user.getPassword()) && user.isEnabled()){
                return ResponseEntity.accepted().body(user);
            } else if(!user.isEnabled()) {
                return exceptionHandlerAdvice.invalidEmailConfirmationException();
            }
            else {
                return exceptionHandlerAdvice.invalidCredentialsException();
            }
        }
        return exceptionHandlerAdvice.invalidEmailException();
    }

    @PostMapping("/add-sport")
    public ResponseEntity addSport(@RequestBody SportDTO sportDTO) {
        String email=sportDTO.getEmail();
        String nameSport=sportDTO.getName();
        User user = userService.getUsersByEmail(email).get(0);
        Sport sport= sportService.getSportsByName(nameSport).get(0);
        user.getSportList().add(sport);
        userService.updateSportList(user);
        return ResponseEntity.status(HttpStatus.OK).body("Sport added successfully!");
    }


}

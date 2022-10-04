package com.dbsummerschool.dbsports.controller;

import com.dbsummerschool.dbsports.exception.*;
import com.dbsummerschool.dbsports.model.User;
import com.dbsummerschool.dbsports.model.UserDTO;
import com.dbsummerschool.dbsports.service.SportService;
import com.dbsummerschool.dbsports.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
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
    public ResponseEntity register(@RequestBody User user){
        try {
            userService.registerNewUser(user);
        } catch (AlreadyExistException e) {
            e.printStackTrace();
            return exceptionHandlerAdvice.alreadyExistException();
        } catch (InvalidEmailFormatException e) {
            return exceptionHandlerAdvice.invalidEmailFormatException();
        }
        return ResponseEntity.status(HttpStatus.CREATED).body("Account created!");
    }

    @GetMapping("/login")
    public ResponseEntity login(@RequestBody UserDTO userDTO) {
        String email = userDTO.getEmail();
        if(userService.getUsersByEmail(email).size() != 0) {
            User user = userService.getUsersByEmail(email).get(0);
            Argon2PasswordEncoder encoder = new Argon2PasswordEncoder(32,64,1,15*1024,2);
            if(encoder.matches(userDTO.getPassword(), user.getPassword())){
                return ResponseEntity.status(HttpStatus.OK).body("Login successfully!");
            }
            else {
                return exceptionHandlerAdvice.invalidCredentialsException();
            }
        }
        return exceptionHandlerAdvice.invalidEmailException();
    }
}

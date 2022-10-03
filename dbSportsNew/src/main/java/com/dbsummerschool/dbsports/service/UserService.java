package com.dbsummerschool.dbsports.service;

import com.dbsummerschool.dbsports.exception.AlreadyExistException;
import com.dbsummerschool.dbsports.exception.InvalidEmailFormatException;
import com.dbsummerschool.dbsports.model.Sport;
import com.dbsummerschool.dbsports.model.User;
import com.dbsummerschool.dbsports.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.regex.Pattern;

@Service
public class UserService {
    UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public User registerNewUser(User user) throws InvalidEmailFormatException, AlreadyExistException {
        if(userRepository.findAllByEmail(user.getEmail()).size() == 0) {
            String email = user.getEmail();
            if(!verifyEmailFormat(email))
            {
                System.out.println(verifyEmailFormat(email));
                throw new InvalidEmailFormatException("Email format invalid!");
            }
            Argon2PasswordEncoder encoder = new Argon2PasswordEncoder(32,64,1,15*1024,2);
            String encodedPassword = encoder.encode(user.getPassword());
            user.setPassword(encodedPassword);
            return userRepository.save(user);
        }
        throw new AlreadyExistException("Email already exists!");
    }

    public static boolean verifyEmailFormat(String email) {
        return Pattern.compile("^(.+)@(\\S+)$")
                .matcher(email)
                .matches();
    }
}

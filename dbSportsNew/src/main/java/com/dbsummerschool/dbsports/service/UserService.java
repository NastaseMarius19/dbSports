package com.dbsummerschool.dbsports.service;

import com.dbsummerschool.dbsports.exception.AlreadyExistException;
import com.dbsummerschool.dbsports.exception.InvalidEmailFormatException;
import com.dbsummerschool.dbsports.model.User;
import com.dbsummerschool.dbsports.repository.UserRepository;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.regex.Pattern;

@Service
public class UserService {
    UserRepository userRepository;

    JavaMailSender javaMailSender;

    @Autowired
    public UserService(UserRepository userRepository, JavaMailSender javaMailSender) {
        this.userRepository = userRepository;
        this.javaMailSender = javaMailSender;
    }


    public User registerNewUser(User user) throws AlreadyExistException, InvalidEmailFormatException, MessagingException, UnsupportedEncodingException {
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
            String randomCode = RandomString.make(64);
            user.setVerificationCode(randomCode);
            user.setEnabled(false);
            sendVerificationEmail(user);
            return userRepository.save(user);
        }
        throw new AlreadyExistException("Email already exists!");
    }

    public boolean verify(String verificationCode) {
        User userVerification  = userRepository.findByVerificationCode(verificationCode);
        if(userVerification == null || userVerification.isEnabled()) {
            return false;
        } else {
            userVerification.setVerificationCode(null);
            userVerification.setEnabled(true);
            userRepository.save(userVerification);
            return true;
        }
    }

    private void sendVerificationEmail(User user) throws MessagingException, UnsupportedEncodingException {
        String toAddress = user.getEmail();
        String fromAddress = "nmarius.DBSports@gmail.com";
        String senderName = "DBSports";
        String subject = "Please verify your registration";
        String content = "Dear " + user.getName() + " " +user.getSurname() + ",<br>"
                + "Your verification code is:<br>"
                + user.getVerificationCode() + "<br>"
                + "Thank you,<br>"
                + "DBSports";

        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom(fromAddress, senderName);
        helper.setTo(toAddress);
        helper.setSubject(subject);

        helper.setText(content, true);

        javaMailSender.send(message);
    }

    public static boolean verifyEmailFormat(String email) {
        return Pattern.compile("^(.+)@(\\S+)$")
                .matcher(email)
                .matches();
    }

    public List<User> getUsersByEmail(String email) {
        return userRepository.findAllByEmail(email);
    }

    public void updateSportList(User user){
        userRepository.save(user);
    }
}

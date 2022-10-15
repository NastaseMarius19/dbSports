package com.dbsummerschool.dbsports.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

public class ExceptionHandlerAdvice extends ResponseEntityExceptionHandler {
    @ExceptionHandler(Exception.class)
    public ResponseEntity handleConflict() {
        return new ResponseEntity("Another exception", HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(InvalidEmailFormatException.class)
    public ResponseEntity invalidEmailFormatException() {
        return new ResponseEntity("Invalid email format", HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(AlreadyExistException.class)
    public ResponseEntity alreadyExistException() {
        return new ResponseEntity("Already exist!", HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(InvalidEmailException.class)
    public ResponseEntity invalidEmailException() {
        return new ResponseEntity("Invalid email!",HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(InvalidCredentialsException.class)
    public ResponseEntity invalidCredentialsException() {
        return new ResponseEntity("Password incorect!",HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(InvalidEmailConfirmationException.class)
    public ResponseEntity invalidEmailConfirmationException() {
        return new ResponseEntity("The email has not been confirmed!!",HttpStatus.UNAUTHORIZED);
    }
}

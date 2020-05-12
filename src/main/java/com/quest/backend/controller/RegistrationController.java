package com.quest.backend.controller;

import com.quest.backend.entity.User;
import com.quest.backend.service.UserRepositoryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.validation.Valid;

@Controller
@Slf4j
public class RegistrationController {

    @Autowired
    private UserRepositoryService userService;

    @CrossOrigin(origins = "*", maxAge = 4800, methods = {RequestMethod.POST, RequestMethod.GET, RequestMethod.PUT},
            allowedHeaders = "*")
    @PostMapping(path = "/api/v/n/1/registration")
    public ResponseEntity<User> addPerson(@Valid @RequestBody User user) {

        userService.saveUser(user);

        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}

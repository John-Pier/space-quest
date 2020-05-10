package com.quest.backend.controller;

import com.quest.backend.entity.User;
import com.quest.backend.service.UserRepositoryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;

@Controller
@Slf4j
public class RegistrationController {

    @Autowired
    private UserRepositoryService userService;

    @PostMapping(path = "/registration")
    public ResponseEntity<User> addPerson(@Valid @RequestBody User user) {

        userService.saveUser(user);

        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
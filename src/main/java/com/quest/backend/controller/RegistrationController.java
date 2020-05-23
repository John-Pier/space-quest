package com.quest.backend.controller;

import com.quest.backend.entity.User;
import com.quest.backend.service.UserDetailsServiceImpl;
import com.quest.backend.service.UserRepositoryService;
import com.quest.backend.token.JwtResponse;
import com.quest.backend.token.JwtTokenUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Controller
@Slf4j
@RequestMapping("/")
@CrossOrigin(origins = "*", maxAge = 4800, methods = {RequestMethod.POST, RequestMethod.GET, RequestMethod.PUT}, allowedHeaders = "*")
public class RegistrationController {

    @Autowired
    private UserRepositoryService userService;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @Autowired
    private UserDetailsServiceImpl userDetailsService;


    @PostMapping(path = "/api/v/n/1/registration")
    public ResponseEntity<?> addPerson(@RequestBody User user) {
        userService.saveUser(user);
        final UserDetails userDetails = userDetailsService
                .loadUserByUsername(user.getLogin());
        final String token = jwtTokenUtil.generateToken(userDetails);
        log.warn(token);
        return ResponseEntity.ok(new JwtResponse(token));
    }

}

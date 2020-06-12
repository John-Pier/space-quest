package com.quest.backend.controller;

import com.quest.backend.config.Constants;
import com.quest.backend.entity.User;
import com.quest.backend.entity.models.UserProfile;
import com.quest.backend.service.UserRepositoryService;
import com.quest.backend.token.JwtTokenUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@CrossOrigin
@RequestMapping(Constants.API_VERSION)
public class UserController {
    private UserRepositoryService userRepositoryService;

    public UserController(UserRepositoryService userRepositoryService) {
        this.userRepositoryService = userRepositoryService;
    }

    @GetMapping("/user")
    public UserProfile getUserByLogin(@RequestHeader("Authorization") String token) {
        JwtTokenUtil jwtTokenUtil = new JwtTokenUtil();
        String login = jwtTokenUtil.getUsernameFromToken(token.substring(7));
        log.info("Get user: "+ login);
        return userRepositoryService.getUserProfileByLogin(login);
    }
}

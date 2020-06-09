package com.quest.backend.controller;

import com.quest.backend.config.Constants;
import com.quest.backend.entity.User;
import com.quest.backend.service.UserRepositoryService;
import com.quest.backend.token.JwtTokenUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@Slf4j
@RequestMapping(Constants.API_VERSION)
@CrossOrigin(origins = "*", maxAge = 4800, methods = {RequestMethod.POST, RequestMethod.GET, RequestMethod.PUT}, allowedHeaders = "*")
public class UserController {
    @Autowired
    private UserRepositoryService userRepositoryService;

    @GetMapping("/user")
    public User getUserByLogin(@RequestHeader("Authorization") String token) {
        JwtTokenUtil jwtTokenUtil = new JwtTokenUtil();
        String login = jwtTokenUtil.getUsernameFromToken(token.substring(7));
        log.info("Get user: "+ login);
        return userRepositoryService.getUserByLogin(login);
    }
}

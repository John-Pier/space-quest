package com.quest.backend.controller;
import com.quest.backend.entity.User;
import com.quest.backend.service.UserRepositoryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/test")
public class MainController {

    private UserRepositoryService userService;

    public MainController(UserRepositoryService userService) {
        this.userService = userService;
    }

    @GetMapping()
    public List<User> findAll() throws Exception{
        return userService.getAll();
    }

    @GetMapping(path = "/{login}")
    public List<User> findByLogin(@PathVariable("login") String login) throws Exception{
        return userService.findAllByLogin(login);
    }
}

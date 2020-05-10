package com.quest.backend.controller;
import com.quest.backend.entity.User;
import com.quest.backend.service.UserRepositoryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class MainController {

    private UserRepositoryService userService;

    public MainController(UserRepositoryService userService) {
        this.userService = userService;
    }

    @GetMapping("/test/admin")
    public List<User> findAll() throws Exception{
        return userService.getAll();
    }

    @GetMapping()
    public String message() {
        return "NICE BALLS";
    }

    @GetMapping("/test")
    public User findByLogin() throws Exception{
        return userService.findAllByLogin("test");
    }
}

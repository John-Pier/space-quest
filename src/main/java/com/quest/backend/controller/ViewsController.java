package com.quest.backend.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@Controller
public class ViewsController {

    @RequestMapping({"/main/**", "/auth"})
    public String toIndex() {
        log.info("Forward to index.html");
        return "forward:/index.html";
    }
}

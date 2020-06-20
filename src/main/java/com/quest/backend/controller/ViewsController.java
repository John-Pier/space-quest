package com.quest.backend.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Slf4j
@Controller
public class ViewsController {

    @RequestMapping({"/main/**", "/auth","/main"})
    public String toIndex() {
        log.info("Forward to index.html");
        return "forward:/index.html";
    }
}

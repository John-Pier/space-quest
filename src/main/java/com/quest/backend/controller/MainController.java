package com.quest.backend.controller;
import com.quest.backend.entity.User;
import com.quest.backend.service.UserRepositoryService;
import org.apache.commons.io.IOUtils;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletContext;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@RestController
@RequestMapping("/")
public class MainController {

    private UserRepositoryService userService;

    public MainController(UserRepositoryService userService, ServletContext servletContext) {
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
        return userService.getUserByLogin("test");
    }
    @GetMapping(value = "/image", produces = MediaType.IMAGE_JPEG_VALUE)
    public @ResponseBody byte[] getImageAsByteArray(@RequestBody String url) throws IOException {
        InputStream in = getClass().getResourceAsStream("/images/" + url);
        return IOUtils.toByteArray(in);
    }
}

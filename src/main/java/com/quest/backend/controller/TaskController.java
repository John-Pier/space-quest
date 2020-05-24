package com.quest.backend.controller;

import com.quest.backend.config.Constants;
import com.quest.backend.entity.Task;
import com.quest.backend.service.TaskRepositoryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@Slf4j
@RequestMapping(Constants.API_VERSION)
public class TaskController {
    private TaskRepositoryService taskService;

    public TaskController(TaskRepositoryService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/task/section")
    public List<Task>  getAllBySectionUUID(@RequestBody String sectionUUID) throws Exception{
        return taskService.getAllBySectionUUID(sectionUUID);
    }
}

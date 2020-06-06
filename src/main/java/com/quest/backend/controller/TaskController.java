package com.quest.backend.controller;

import com.quest.backend.config.Constants;
import com.quest.backend.entity.Task;
import com.quest.backend.entity.Tooltip;
import com.quest.backend.entity.models.QuestTaskBrief;
import com.quest.backend.entity.models.TooltipByLvl;
import com.quest.backend.service.TaskRepositoryService;
import com.quest.backend.service.UserRepositoryService;
import com.quest.backend.token.JwtTokenUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Lazy;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@Slf4j
@RequestMapping(Constants.API_VERSION)
public class TaskController {
    private TaskRepositoryService taskService;
    private UserRepositoryService userRepositoryService;

    public TaskController(TaskRepositoryService taskService, @Lazy UserRepositoryService userRepositoryService) {
        this.taskService = taskService;
        this.userRepositoryService = userRepositoryService;
    }

    @GetMapping("/task/section")
    public List<Task>  getAllBySectionUUID(@RequestBody String sectionUUID) throws Exception{
        return taskService.getAllBySectionUUID(sectionUUID);
    }

    @GetMapping("/task/tooltip/lvl")
    public Tooltip  getTooltipByLvl(@RequestBody TooltipByLvl model) throws Exception{
        return taskService.getTooltipByLvl(model.getTaskUUID(), model.getLvl());
    }

    @GetMapping("/task/tooltip/count")
    public Integer  getCountOfTooltipsByTaskUUID(@RequestBody String taskUUID) throws Exception{
        System.out.println(taskUUID);
        log.info("text");
        return taskService.getCountOfTooltipsByTaskUUID(taskUUID);
    }

    @GetMapping("/task/quest_cube/section")
    public List<QuestTaskBrief> getAllQuestCube(@RequestBody String sectionUUID, @RequestHeader("Authorization") String token) throws Exception{
        log.info("Get login from token");
        JwtTokenUtil jwtTokenUtil = new JwtTokenUtil();
        String login = jwtTokenUtil.getUsernameFromToken(token.substring(7));
        return taskService.getTasksBriefBySectionUUIDandUserUUID(sectionUUID, userRepositoryService.getUserByLogin(login).getUuid());
    }
}

package com.quest.backend.controller;

import com.quest.backend.config.Constants;
import com.quest.backend.entity.Section;
import com.quest.backend.entity.models.QuestFlow;
import com.quest.backend.entity.models.QuestFlowBrief;
import com.quest.backend.service.SectionRepositoryService;
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
public class SectionController {
    private SectionRepositoryService sectionService;
    private UserRepositoryService userRepositoryService;

    public SectionController(SectionRepositoryService sectionService, @Lazy UserRepositoryService userRepositoryService) {
        this.sectionService = sectionService;
        this.userRepositoryService = userRepositoryService;
    }

    @GetMapping("/section/all")
    public List<Section> getAll() throws Exception{
        return sectionService.getAll();
    }

    @GetMapping("/section/quest_flow_brief/all")
    public List<QuestFlowBrief> getAllQuestFlowsBrief(@RequestHeader("Authorization") String token) throws Exception {
        log.info("Get login from token");
        JwtTokenUtil jwtTokenUtil = new JwtTokenUtil();
        String login = jwtTokenUtil.getUsernameFromToken(token.substring(7));
        return sectionService.getAllQuestFlowsBriefByUserUUID(userRepositoryService.getUserByLogin(login).getUuid());
    }

    @GetMapping("/section/quest_flow/all")
    public List<QuestFlow> getAllQuestFlow(@RequestHeader("Authorization") String token) throws Exception {
        log.info("Get login from token");
        JwtTokenUtil jwtTokenUtil = new JwtTokenUtil();
        String login = jwtTokenUtil.getUsernameFromToken(token.substring(7));
        return sectionService.getAllQuestFlowByUserUUID(userRepositoryService.getUserByLogin(login).getUuid());
    }
}

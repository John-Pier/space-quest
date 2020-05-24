package com.quest.backend.controller;

import com.quest.backend.config.Constants;
import com.quest.backend.entity.Section;
import com.quest.backend.service.SectionRepositoryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@Slf4j
@RequestMapping(Constants.API_VERSION)
public class SectionController {
    private SectionRepositoryService sectionService;

    public SectionController(SectionRepositoryService sectionService) {
        this.sectionService = sectionService;
    }

    @GetMapping("/section")
    public List<Section> getAll() throws Exception{
        return sectionService.getAll();
    }
}

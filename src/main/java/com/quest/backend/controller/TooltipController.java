package com.quest.backend.controller;

import com.quest.backend.config.Constants;
import com.quest.backend.entity.Tooltip;
import com.quest.backend.service.TooltipRepositoryService;
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
public class TooltipController {
    private TooltipRepositoryService tooltipService;

    public TooltipController(TooltipRepositoryService tooltipService) {
        this.tooltipService = tooltipService;
    }

    @GetMapping("/tooltip")
    public List<Tooltip> getAll() throws Exception{
        return tooltipService.getAll();
    }
}

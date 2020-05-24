package com.quest.backend.service;

import com.quest.backend.entity.Section;
import com.quest.backend.entity.Tooltip;
import com.quest.backend.repository.TooltipRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class TooltipRepositoryService {

    private final TooltipRepository repository;
    @Autowired
    public  TooltipRepositoryService( TooltipRepository repository) {
        this.repository = repository;
    }

    public List<Tooltip> getAll() {
        log.info("Get all tooltips");
        return repository.findAll();
    }
}

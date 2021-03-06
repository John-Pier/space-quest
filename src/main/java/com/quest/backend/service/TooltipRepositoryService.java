package com.quest.backend.service;

import com.quest.backend.entity.Tooltip;
import com.quest.backend.repository.TooltipRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.UUID;

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
        List<Tooltip> tooltips = repository.findAll();
        tooltips.sort(Comparator.comparingInt(Tooltip::getLevel));
        return tooltips;
    }

    Tooltip getByUUID(String tooltipUUID) {
        log.info("Get tooltip by uuid");
        return repository.getByUuid(tooltipUUID);
    }
}

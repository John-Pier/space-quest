package com.quest.backend.service;

import com.quest.backend.entity.Section;
import com.quest.backend.entity.Task;
import com.quest.backend.entity.models.QuestFlow;
import com.quest.backend.repository.SectionRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class SectionRepositoryService {

    private final SectionRepository repository;
    private final TaskRepositoryService taskRepositoryService;
    @Autowired
    public SectionRepositoryService(SectionRepository repository, TaskRepositoryService taskRepositoryService) {
        this.repository = repository;
        this.taskRepositoryService = taskRepositoryService;
    }

    public List<Section> getAll() {
        log.info("Get all sections");
        return repository.findAll();
    }

    public List<String> getAllId() {
        log.info("Get all id of sections");
        return  repository.getAllId();
    }

    public List<QuestFlow> getAllQuestFlow() {
        List<Section> sections = getAll();
        for (Section section : sections) {
            List<Task> tasks = taskRepositoryService.getAllBySectionUUID(section.getUuid());
        }
        return null;
    }
}

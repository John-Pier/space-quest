package com.quest.backend.service;

import com.quest.backend.entity.Task;
import com.quest.backend.repository.TaskRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class TaskRepositoryService {

    private final TaskRepository repository;
    @Autowired
    public TaskRepositoryService(TaskRepository repository) {
        this.repository = repository;
    }

    public Task getAllBysectionUUID(String sectionUUID) {
        log.info("Get all tasks by section UUID");
        return repository.getAllBysectionUUID(sectionUUID);
    }
}

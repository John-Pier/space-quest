package com.quest.backend.service;

import com.quest.backend.entity.Task;
import com.quest.backend.repository.TaskRepository;
import com.quest.backend.repository.UserRepository;
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
        return repository.getAllBysectionUUID(sectionUUID);
    }
}

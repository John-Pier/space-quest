package com.quest.backend.service;

import com.quest.backend.entity.TaskTooltip;
import com.quest.backend.repository.TaskTooltipRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class TaskTooltipRepositoryService {
    private final TaskTooltipRepository repository;
    @Autowired
    public TaskTooltipRepositoryService(TaskTooltipRepository repository) {
        this.repository = repository;
    }

    public List<TaskTooltip> getAllByTaskUUID(String taskUUID) {
        log.info("Get taskTooltip by task UUID");
        return repository.getAllByTaskUUID(taskUUID);
    }
}

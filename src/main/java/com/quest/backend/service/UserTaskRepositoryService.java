package com.quest.backend.service;

import com.quest.backend.entity.Task;
import com.quest.backend.entity.UserTask;
import com.quest.backend.repository.UserTaskRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
@Slf4j
public class UserTaskRepositoryService {
    private final UserTaskRepository repository;
    private final TaskRepositoryService taskRepositoryService;
    private final SectionRepositoryService sectionRepositoryService;

    @Autowired
    public UserTaskRepositoryService(UserTaskRepository repository, @Lazy TaskRepositoryService taskRepositoryService, SectionRepositoryService sectionRepositoryService) {
        this.repository = repository;
        this.taskRepositoryService = taskRepositoryService;
        this.sectionRepositoryService = sectionRepositoryService;
    }

    public void initUserTask(String userUUID) {
        List<String> sections = sectionRepositoryService.getAllId();
        UserTask record;
        for (String sectionId : sections) {
            List<String> tasks = taskRepositoryService.getAllIdBySectionId(sectionId);
            int i = 0;
            for (String taskId : tasks) {
                if (i == 0) {
                    record = new UserTask(userUUID, taskId, false);
                }
                else {
                    record = new UserTask(userUUID, taskId, true);
                }
                log.info("Save map user_task");
                repository.saveRecord(record.getUserUUID(), record.getTaskUUID(), record.getLock());
                i++;
            }
        }
    }

    public UserTask getUserTaskByTaskUUID (String taskUUID) {
        log.info("Get userTask by taskUUID");
        return repository.getByTaskUUID(taskUUID);
    }

    public Boolean taskIsSelected(String taskUUID) {
        log.info("Task is selected?");
        return !repository.isLockByTaskUUID(taskUUID);
    }

    public Boolean taskIsPassed(String taskUUID) {
        log.info("Task is passed?");
        return repository.isPassedByTaskUUID(taskUUID);
    }
}

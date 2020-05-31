package com.quest.backend.service;

import com.quest.backend.entity.Task;
import com.quest.backend.entity.TaskTooltip;
import com.quest.backend.entity.Tooltip;
import com.quest.backend.repository.TaskRepository;
import com.quest.backend.repository.TaskTooltipRepository;
import com.quest.backend.repository.TooltipRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Slf4j
@Service
public class TaskRepositoryService {

    private final TaskRepository repository;
    private final TaskTooltipRepository taskTooltipRepository;
    private final TooltipRepository tooltipRepository;
    @Autowired
    public TaskRepositoryService(TaskRepository repository, TaskTooltipRepository taskTooltipRepository, TooltipRepository tooltipRepository) {
        this.repository = repository;
        this.taskTooltipRepository = taskTooltipRepository;
        this.tooltipRepository = tooltipRepository;
    }

    public List<Task> getAllBySectionUUID(String sectionUUID) {
        log.info("Get all tasks by section UUID");
        return repository.getAllBySectionUUID(sectionUUID);
    }

    public Tooltip getTooltipByLvl(String taskUUID, Integer lvl) {
        log.info("Find tooltips by taskUUID");
        List<TaskTooltip> taskTooltips = taskTooltipRepository.findByTaskTooltipIdTaskUUID(taskUUID);
        Tooltip tooltip = null;
        for (TaskTooltip temp : taskTooltips) {
            log.info("Find tooltip by UUID");
            tooltip = tooltipRepository.getOne(UUID.fromString(temp.getTaskTooltipId().getTooltipUUID()));
            if (tooltip.getLevel() == lvl) {
                break;
            }
        }
        return tooltip;
    }

    public int getCountOfTooltipsByTaskUUID(String taskUUID) {
        log.info("Find tooltips by taskUUID");
        return taskTooltipRepository.findByTaskTooltipIdTaskUUID(taskUUID).size();

    }
}

package com.quest.backend.service;

import com.quest.backend.entity.Task;
import com.quest.backend.entity.TaskTooltip;
import com.quest.backend.entity.Tooltip;
import com.quest.backend.repository.TaskRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class TaskRepositoryService {

    private final TaskRepository repository;
    private final TaskTooltipRepositoryService taskTooltipRepositoryService;
    private final TooltipRepositoryService tooltipRepositoryService;
    @Autowired
    public TaskRepositoryService(TaskRepository repository, TaskTooltipRepositoryService taskTooltipRepositoryService, TooltipRepositoryService tooltipRepositoryService) {
        this.repository = repository;
        this.taskTooltipRepositoryService = taskTooltipRepositoryService;
        this.tooltipRepositoryService = tooltipRepositoryService;
    }

    public List<Task> getAllBySectionUUID(String sectionUUID) {
        log.info("Get all tasks by section UUID");
        return repository.getAllBySectionUUID(sectionUUID);
    }

    public Tooltip getTooltipByLvl(String taskUUID, Integer lvl) {
        log.info("Find tooltips by taskUUID");
        List<TaskTooltip> taskTooltips = taskTooltipRepositoryService.getAllByTaskUUID(taskUUID);
        Tooltip tooltip = null;
        for (TaskTooltip temp : taskTooltips) {
            log.info("Find tooltip by UUID");
            tooltip = tooltipRepositoryService.getByUUID(temp.getTooltipUUID());
            if (tooltip.getLevel() == lvl) {
                break;
            }
        }
        return tooltip;
    }

    public Integer getCountOfTooltipsByTaskUUID(String taskUUID) {
        log.info("Find tooltips by taskUUID");
        return taskTooltipRepositoryService.getAllByTaskUUID(taskUUID).size();
    }

    public List<String> getAllId() {
        return repository.getAllId();
    }

    public List<String> getAllIdBySectionId(String sectionUUID) {
        log.info("Get all task id by sectionUUID");
        return repository.getAllIdBySectionId(sectionUUID);
    }
}

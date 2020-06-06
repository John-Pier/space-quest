package com.quest.backend.service;

import com.quest.backend.entity.Task;
import com.quest.backend.entity.TaskTooltip;
import com.quest.backend.entity.Tooltip;
import com.quest.backend.entity.models.QuestTaskBrief;
import com.quest.backend.repository.TaskRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
public class TaskRepositoryService {

    private final TaskRepository repository;
    private final TaskTooltipRepositoryService taskTooltipRepositoryService;
    private final TooltipRepositoryService tooltipRepositoryService;
    private final UserTaskRepositoryService userTaskRepositoryService;
    @Autowired
    public TaskRepositoryService(TaskRepository repository, TaskTooltipRepositoryService taskTooltipRepositoryService, TooltipRepositoryService tooltipRepositoryService, @Lazy UserTaskRepositoryService userTaskRepositoryService) {
        this.repository = repository;
        this.taskTooltipRepositoryService = taskTooltipRepositoryService;
        this.tooltipRepositoryService = tooltipRepositoryService;
        this.userTaskRepositoryService = userTaskRepositoryService;
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

    public List<QuestTaskBrief> getTasksBriefBySectionUUID(String sectionUUID) {
        log.info("Get tasks brief by sectionUUID");
        List<QuestTaskBrief> questCubes = new ArrayList<QuestTaskBrief>();
        List<Task> tasks = getAllBySectionUUID(sectionUUID);

        for (Task task : tasks) {
            log.info("Map model task brief");
            QuestTaskBrief questCube = new QuestTaskBrief();
            questCube.setId(task.getUuid());
            questCube.setTitle(task.getTitle());
            questCube.setSubtitle(task.getSubtitle());
            questCube.setSerialNumber(task.getSerialNumber());
            questCube.setSelected(userTaskRepositoryService.taskIsSelected(task.getUuid()));
            questCube.setPassed(userTaskRepositoryService.taskIsPassed(task.getUuid()));
            questCubes.add(questCube);
        }

        return questCubes;
    }
}

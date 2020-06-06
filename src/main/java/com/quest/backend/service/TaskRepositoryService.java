package com.quest.backend.service;

import com.quest.backend.entity.Task;
import com.quest.backend.entity.TaskTooltip;
import com.quest.backend.entity.Tooltip;
import com.quest.backend.entity.UserTask;
import com.quest.backend.entity.models.AnswerResponse;
import com.quest.backend.entity.models.QuestTaskBrief;
import com.quest.backend.repository.TaskRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.UUID;

@Slf4j
@Service
public class TaskRepositoryService {

    private final TaskRepository repository;
    private final TaskTooltipRepositoryService taskTooltipRepositoryService;
    private final TooltipRepositoryService tooltipRepositoryService;
    private final UserTaskRepositoryService userTaskRepositoryService;

    @Autowired
    private EntityManager entityManager;

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

    public List<QuestTaskBrief> getTasksBriefBySectionUUIDandUserUUID(String sectionUUID, String userUUID) {
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
            questCube.setSelected(userTaskRepositoryService.taskIsSelected(task.getUuid(), userUUID));
            questCube.setPassed(userTaskRepositoryService.taskIsPassed(task.getUuid(), userUUID));
            questCubes.add(questCube);
        }

        return questCubes;
    }
    public Boolean taskIsSelected(String taskUUID, String userUUID) {
        return userTaskRepositoryService.taskIsSelected(taskUUID, userUUID);
    }

    public AnswerResponse checkAnswer(String taskUUID, String userUUID, String answer) {
        log.info("Check answer");
        AnswerResponse answerResponse = new AnswerResponse();
        Task task = repository.findByUUID(taskUUID).orElse(null);
        assert task != null;
        Boolean isPassed = userTaskRepositoryService.getUserTaskByTaskUUID_And_UserUUID(taskUUID, userUUID).getIsPassed();
        if (answer.toLowerCase().equals(task.getAnswer().toLowerCase()) || isPassed) {
            userTaskRepositoryService.saveAnswer(userUUID, taskUUID, true);
            List<Task> tasks = repository.getAllBySectionUUID(task.getSectionUUID());
            tasks.sort(Comparator.comparingInt(Task::getSerialNumber));
            UserTask userTask = new UserTask();
            for(Task temp : tasks) {
                userTask = userTaskRepositoryService.getUserTaskByTaskUUID_And_UserUUID(temp.getUuid(), userUUID);
                if (userTask.getLock()) {
                    userTaskRepositoryService.updateCurrentTask(userUUID, temp.getUuid());
                    answerResponse.setIsAllPassed(false);
                    answerResponse.setCurrentTaskId(temp.getUuid());
                    break;
                }
                this.entityManager.detach(userTask);
            }
            if (answerResponse.getCurrentTaskId() == null) {
                log.info("All tasks of sections passed");
                answerResponse.setIsAllPassed(true);
            }
            answerResponse.setIsPassed(true);
        }
        else {
            userTaskRepositoryService.saveAnswer(userUUID, taskUUID, false);
            answerResponse.setCurrentTaskId(taskUUID);
            answerResponse.setIsPassed(false);
            answerResponse.setIsAllPassed(false);
            return answerResponse;
        }
        if (!answer.toLowerCase().equals(task.getAnswer().toLowerCase()) && isPassed) {
            answerResponse.setIsPassed(false);
        }
        return answerResponse;
    }

    public Task getTaskByUUID(String taskUUID) {
        log.info("Get task by id");
        Task task = repository.findByUUID(taskUUID).orElse(null);
        assert task != null;
        task.setAnswer("");
        return task;
    }

    public QuestTaskBrief getTaskBriefByTaskUUIDandUserUUID(String taskUUID, String userUUID) {
        log.info("Get tasks brief by sectionUUID");
        QuestTaskBrief questCube = new QuestTaskBrief();
        Task task = getTaskByUUID(taskUUID);
            log.info("Map model task brief");
            questCube.setId(task.getUuid());
            questCube.setTitle(task.getTitle());
            questCube.setSubtitle(task.getSubtitle());
            questCube.setSerialNumber(task.getSerialNumber());
            questCube.setSelected(userTaskRepositoryService.taskIsSelected(task.getUuid(), userUUID));
            questCube.setPassed(userTaskRepositoryService.taskIsPassed(task.getUuid(), userUUID));
        return questCube;
    }
}

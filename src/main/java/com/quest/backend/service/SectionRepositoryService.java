package com.quest.backend.service;

import com.quest.backend.entity.Section;
import com.quest.backend.entity.Task;
import com.quest.backend.entity.models.QuestFlow;
import com.quest.backend.entity.models.QuestFlowBrief;
import com.quest.backend.entity.models.QuestTaskBrief;
import com.quest.backend.repository.SectionRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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

    public List<QuestFlowBrief> getAllQuestFlowsBriefByUserUUID(String userUUID) {
        log.info("Get all quest flows");
        List<Section> sections = repository.findAll();
        List<QuestFlowBrief> questFlowBriefs = new ArrayList<>();
        for (Section section : sections) {
            QuestFlowBrief questFlowBrief = new QuestFlowBrief();
            questFlowBrief.setId(section.getUuid());
            questFlowBrief.setName(section.getName());
            questFlowBrief.setText(section.getText());
            questFlowBrief.setUrl(section.getUrl());
            List<String> tasksId = taskRepositoryService.getAllIdBySectionId(section.getUuid());
            for (String id : tasksId) {
                if (taskRepositoryService.taskIsSelected(id, userUUID)) {
                    questFlowBrief.setCurrentTaskId(id);
                    break;
                }
            }
            questFlowBriefs.add(questFlowBrief);
        }
        return questFlowBriefs;
    }

    public List<Section> getAll() {
        log.info("Get all sections");
        return repository.findAll();
    }

    public List<String> getAllId() {
        log.info("Get all id of sections");
        return  repository.getAllId();
    }

    public List<QuestFlow> getAllQuestFlowByUserUUID(String userUUID) {
        log.info("Get quest flows");
        List<Section> sections = getAll();
        List<QuestFlow> questFlows = new ArrayList<QuestFlow>();
        for (Section section : sections) {
            log.info("Map model quest flow");
            QuestFlow questFlow = new QuestFlow();
            questFlow.setId(section.getUuid());
            questFlow.setNodes(taskRepositoryService.getTasksBriefBySectionUUIDandUserUUID(section.getUuid(), userUUID));
            for (QuestTaskBrief task : questFlow.getNodes()) {
                if (task.isSelected()) {
                    questFlow.setCurrentTaskId(task.getId());
                    break;
                }
            }
            questFlows.add(questFlow);
        }
        return questFlows;
    }
}

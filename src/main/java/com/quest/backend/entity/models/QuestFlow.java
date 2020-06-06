package com.quest.backend.entity.models;

import lombok.Data;

import java.util.List;

@Data
public class QuestFlow {
    private String id;
    private List<QuestTaskBrief> nodes;
    private String currentTaskId;
}

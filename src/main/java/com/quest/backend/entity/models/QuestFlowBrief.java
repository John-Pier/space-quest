package com.quest.backend.entity.models;

import lombok.Data;

@Data
public class QuestFlowBrief {
    private String id;
    private String name;
    private String text;
    private String url;
    private String currentTaskId;
}

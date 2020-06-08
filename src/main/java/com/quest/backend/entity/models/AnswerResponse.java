package com.quest.backend.entity.models;

import lombok.Data;

@Data
public class AnswerResponse {
    private String currentTaskId; //TODO NOT NULL IF REPEAT
    private Boolean isPassed;
    private Boolean isAllPassed;
}

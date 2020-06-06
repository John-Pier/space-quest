package com.quest.backend.entity.models;

import lombok.Data;

@Data
public class AnswerResponse {
    private String currentTaskId;
    private Boolean isPassed;
    private Boolean isAllPassed;
}

package com.quest.backend.entity.models;

import lombok.Data;

@Data
public class AnswerBody {
    private String taskUUID;
    private String answer;
}

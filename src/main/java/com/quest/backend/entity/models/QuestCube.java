package com.quest.backend.entity.models;

import lombok.Data;

@Data
public class QuestCube {
    private String id;
    private String title;
    private String subtitle;
    private Integer serialNumber;
    private boolean isSelected;
}

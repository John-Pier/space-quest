package com.quest.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "task_tooltip")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TaskTooltip {

    @Column(name = "task_uuid", nullable = false)
    private String taskUUID;

    @Column(name = "tooltip_uuid", nullable = false)
    private String tooltipUUID;
}

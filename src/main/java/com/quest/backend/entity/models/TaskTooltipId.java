package com.quest.backend.entity.models;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
@EqualsAndHashCode
@Getter
@Setter
@AllArgsConstructor
public class TaskTooltipId {

    /*@Column(name = "tooltip_uuid", nullable = false)
    private String tooltipUUID;

    @Column(name = "task_uuid", nullable = false)
    private String taskUUID;*/
}

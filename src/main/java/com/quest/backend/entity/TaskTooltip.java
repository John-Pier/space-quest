package com.quest.backend.entity;

import com.quest.backend.entity.models.TaskTooltipId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "task_tooltip")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TaskTooltip {

    @Id
    @Column(name = "tooltip_uuid", nullable = false)
    private String tooltipUUID;

    @Column(name = "task_uuid", nullable = false)
    private String taskUUID;

}

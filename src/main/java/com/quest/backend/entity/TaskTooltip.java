package com.quest.backend.entity;

import com.quest.backend.entity.models.TaskTooltipId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "task_tooltip")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TaskTooltip {

    @EmbeddedId
    private TaskTooltipId taskTooltipId;

}

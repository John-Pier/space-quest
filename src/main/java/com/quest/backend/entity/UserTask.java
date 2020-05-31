package com.quest.backend.entity;

import com.quest.backend.entity.models.UserTaskId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "user_task")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserTask {
    @EmbeddedId
    private UserTaskId userTaskId;

    @Column(name = "lock", nullable = false)
    private Boolean lock = true;

    @Column(name = "is_passed", nullable = false)
    private Boolean isPassed = false;
}

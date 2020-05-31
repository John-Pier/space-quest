package com.quest.backend.entity;

import com.quest.backend.entity.models.UserTaskId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "user_task")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserTask {
    @Id
    @Column(name = "user_uuid", nullable = false)
    private String userUUID;

    @Column(name = "task_uuid", nullable = false)
    private String taskUUID;

    @Column(name = "lock", nullable = false)
    private Boolean lock = true;

    @Column(name = "is_passed", nullable = false)
    private Boolean isPassed = false;
}

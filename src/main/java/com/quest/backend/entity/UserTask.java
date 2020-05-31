package com.quest.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "user_task")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserTask {

    @Column(name = "user_uuid", nullable = false)
    private String userUUID;

    @Column(name = "task_uuid", nullable = false)
    private String taskUUID;

    @Column(name = "lock", nullable = false)
    private Boolean lock = true;

    @Column(name = "is_passed", nullable = false)
    private Boolean isPassed = false;
}

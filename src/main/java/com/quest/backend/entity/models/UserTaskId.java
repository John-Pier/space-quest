package com.quest.backend.entity.models;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@EqualsAndHashCode
@Getter
@Setter
@AllArgsConstructor
public class UserTaskId implements Serializable {

    /*@Column(name = "user_uuid", nullable = false)
    private String userUUID;

    @Column(name = "task_uuid", nullable = false)
    private String taskUUID;*/

}
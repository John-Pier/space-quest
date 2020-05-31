package com.quest.backend.repository;

import com.quest.backend.entity.TaskTooltip;
import com.quest.backend.entity.UserTask;
import com.quest.backend.entity.models.UserTaskId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface UserTaskRepository extends JpaRepository<UserTask, UserTaskId> {
}

package com.quest.backend.repository;

import com.quest.backend.entity.TaskTooltip;
import com.quest.backend.entity.models.TaskTooltipId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskTooltipRepository extends JpaRepository<TaskTooltip, TaskTooltipId> {
    List<TaskTooltip> findByTaskTooltipIdTaskUUID(String taskUUID);
}

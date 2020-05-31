package com.quest.backend.repository;

import com.quest.backend.entity.TaskTooltip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface TaskTooltipRepository extends JpaRepository<TaskTooltip, UUID> {
    List<TaskTooltip> getAllByTaskUUID(String taskUUID);
}

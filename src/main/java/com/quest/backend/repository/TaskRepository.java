package com.quest.backend.repository;

import com.quest.backend.entity.Task;
import com.quest.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface TaskRepository extends JpaRepository<Task, UUID> {
    Task getAllBysectionUUID(String sectionUUID);
}

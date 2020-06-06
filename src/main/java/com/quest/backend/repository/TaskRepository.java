package com.quest.backend.repository;

import com.quest.backend.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface TaskRepository extends JpaRepository<Task, UUID> {
    List<Task> getAllBySectionUUID(String sectionUUID);

    @Query(value = "SELECT UUID FROM task ORDER BY serial_number", nativeQuery = true)
    List<String> getAllId();

    @Query(value = "SELECT UUID FROM task WHERE section_uuid = :sectionUUID ORDER BY serial_number", nativeQuery = true)
    List<String> getAllIdBySectionId(@Param("sectionUUID")String sectionUUID);

    @Query(value = "SELECT * FROM task WHERE uuid = :taskUUID", nativeQuery = true)
    Optional<Task> findByUUID(@Param("taskUUID")String taskUUID);
}

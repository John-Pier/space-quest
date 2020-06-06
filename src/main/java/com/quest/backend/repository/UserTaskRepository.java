package com.quest.backend.repository;

import com.quest.backend.entity.UserTask;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Repository
public interface UserTaskRepository extends JpaRepository<UserTask, UUID> {
    @Modifying
    @Query(value = "INSERT INTO user_task(user_uuid, task_uuid, lock) values(:userUUID, :taskUUID, :lock) ", nativeQuery = true)
    @Transactional
    void saveRecord(@Param("userUUID")String userUUID,
                    @Param("taskUUID")String taskUUID,
                    @Param("lock")Boolean lock);

    UserTask getByTaskUUID(String taskUUID);

    @Query(value = "SELECT lock FROM user_task WHERE task_uuid = :taskUUID", nativeQuery = true)
    Boolean isLockByTaskUUID(@Param("taskUUID") String taskUUID);
}

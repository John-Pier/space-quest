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

    @Query(value = "SELECT * FROM user_task WHERE task_uuid = :taskUUID and user_uuid = :userUUID", nativeQuery = true)
    @Transactional
    UserTask getByTaskUUID_And_UserUUID(@Param("taskUUID")String taskUUID,
                                        @Param("userUUID")String userUUID);

    @Query(value = "SELECT lock FROM user_task WHERE task_uuid = :taskUUID and user_uuid = :userUUID", nativeQuery = true)
    Boolean isLockByTaskUUID(@Param("taskUUID") String taskUUID,
                             @Param("userUUID") String userUUID);

    @Query(value = "SELECT is_passed FROM user_task WHERE task_uuid = :taskUUID and user_uuid = :userUUID", nativeQuery = true)
    @Transactional
    Boolean isPassedByTaskUUID(@Param("taskUUID") String taskUUID,
                               @Param("userUUID") String userUUID);

    @Modifying
    @Query(value = "UPDATE user_task SET counter = counter + 1, is_passed = :isPassed WHERE task_uuid = :taskUUID and user_uuid = :userUUID", nativeQuery = true)
    @Transactional
    void saveAnswer(@Param("userUUID")String userUUID,
                    @Param("taskUUID")String taskUUID,
                    @Param("isPassed")Boolean isPassed);

    @Modifying
    @Query(value = "UPDATE user_task SET lock = false WHERE task_uuid = :taskUUID and user_uuid = :userUUID", nativeQuery = true)
    @Transactional
    void updateCurrentTask(@Param("userUUID")String userUUID,
                           @Param("taskUUID")String taskUUID);
}

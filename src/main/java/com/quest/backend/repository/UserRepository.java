package com.quest.backend.repository;

import com.quest.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, UUID> {
    User getUserByLogin(String login);
    User findAllByEmail(String email);
}

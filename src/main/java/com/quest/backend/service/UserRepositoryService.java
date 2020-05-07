package com.quest.backend.service;

import com.quest.backend.entity.User;
import com.quest.backend.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class UserRepositoryService{
    private final UserRepository repository;
    @Autowired
    public UserRepositoryService(UserRepository repository) {
        this.repository = repository;
    }

    public User findAllByLogin(String login) {
        return repository.findAllByLogin(login);
    }

    public List<User> getAll() {
        log.info("get all users");
        return repository.findAll();
    }

    public User getUser(String login) {
        return this.repository.findAllByEmail(login);
    }
}

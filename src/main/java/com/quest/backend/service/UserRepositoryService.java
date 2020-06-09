package com.quest.backend.service;

import com.quest.backend.entity.User;
import com.quest.backend.entity.models.UserProfile;
import com.quest.backend.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;

@Slf4j
@Service
public class UserRepositoryService{

    private BCryptPasswordEncoder bCryptPasswordEncoder;

    private final UserRepository repository;
    @Autowired
    public UserRepositoryService(UserRepository repository) {
        this.repository = repository;
    }

    public User getUserByLogin(String login) {
        User user = repository.getUserByLogin(login);
        System.out.println(user.getLogin());
        return user;
    }

    public List<User> getAll() {
        log.info("get all users");
        return repository.findAll();
    }

    public User getUser(String login) {
        return this.repository.findAllByEmail(login);
    }

    public boolean saveUser(User user) {
        User userFromDB = repository.getUserByLogin(user.getLogin());

        if (userFromDB != null) {
            return false;
        }
        if (user.getLogin().equals("admin")) {
            user.setAdmin(true);
        }
        else {
            user.setAdmin(false);
        }
        log.info(user.getPassword());
        log.info(new BCryptPasswordEncoder().encode(user.getPassword()));
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        repository.save(user);
        return true;
    }

    public String getFirstNameByLogin(String login) {
        return this.getUserByLogin(login).getFirstName();
    }

    public UserProfile getUserProfileByLogin(String login) {
        User user = repository.getUserByLogin(login);
        log.info("Map userProfile model");
        UserProfile userProfile = new UserProfile();
        if(user.getAge() == null) {
            userProfile.setAge(0);
        }
        else {
            userProfile.setAge(user.getAge());
        }
        userProfile.setCity(user.getCity());
        userProfile.setEmail(user.getEmail());
        userProfile.setCountry(user.getCountry());
        userProfile.setFirstName(user.getFirstName());
        userProfile.setSecondName(user.getSecondName());
        userProfile.setGender(user.getGender());
        return userProfile;
    }
}

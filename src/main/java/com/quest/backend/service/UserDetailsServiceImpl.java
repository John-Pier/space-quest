package com.quest.backend.service;

import com.quest.backend.entity.User;
import com.quest.backend.entity.enums.UserRoleEnum;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@Slf4j
public class UserDetailsServiceImpl implements UserDetailsService {
    private final UserRepositoryService userRepositoryService;

    @Autowired
    public UserDetailsServiceImpl(UserRepositoryService userRepositoryService) {
        this.userRepositoryService = userRepositoryService;
    }

    @Override
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
        User user = userRepositoryService.findAllByLogin(login);
        log.info("agashs", user.getPassword());
        if (user == null) {
            throw new UsernameNotFoundException("User or password invalid");
        }

        // указываем роли для этого пользователя
        Set<GrantedAuthority> roles = new HashSet();
        if (user.getAdmin()) {
            roles.add(new SimpleGrantedAuthority(UserRoleEnum.ADMIN.name()));
            roles.add(new SimpleGrantedAuthority(UserRoleEnum.USER.name()));
        }
        else {
            roles.add(new SimpleGrantedAuthority(UserRoleEnum.USER.name()));
        }

        // на основании полученных данных формируем объект UserDetails
        // который позволит проверить введенный пользователем логин и пароль
        // и уже потом аутентифицировать пользователя

        return new org.springframework.security.core.userdetails.User(user.getLogin(),
                user.getPassword(),
                roles);
    }
}

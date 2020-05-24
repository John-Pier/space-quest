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

    @Autowired
    private UserRepositoryService userRepositoryService;

    @Override
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
        User user = userRepositoryService.getUserByLogin(login);
        log.info("agashs", user.getPassword());
        if (user == null) {
            throw new UsernameNotFoundException("User or password invalid");
        }

        Set<GrantedAuthority> roles = new HashSet();
        if (user.getAdmin()) {
            roles.add(new SimpleGrantedAuthority(UserRoleEnum.ROLE_ADMIN.name()));
            roles.add(new SimpleGrantedAuthority(UserRoleEnum.ROLE_USER.name()));
            log.info("1");
        }
        else {
            roles.add(new SimpleGrantedAuthority(UserRoleEnum.ROLE_USER.name()));
            log.info("2");
        }


        return new org.springframework.security.core.userdetails.User(user.getLogin(),
                user.getPassword(),
                roles);
    }

}

package com.quest.backend.entity;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;
import java.util.UUID;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid")
    @Column(name = "UUID")
    @Size(max = 32)
    private String uuid;

    @Column(name = "login", nullable = false)
    private String login;

    @Email
    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "admin", nullable = false)
    private Boolean admin;

    @Column(name = "country")
    private String country;

    @Column(name = "city")
    private String city;

    @Column(name = "gender")
    private String gender;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "second_name")
    private String secondName;

    @Column(name = "age")
    private Integer age;

}

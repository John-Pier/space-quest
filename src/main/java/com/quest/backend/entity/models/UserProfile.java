package com.quest.backend.entity.models;

import lombok.Data;

@Data
public class UserProfile {
    private String firstName;
    private String secondName;
    private int age;
    private String email;
    private String gender;
    private String country;
    private String city;
}

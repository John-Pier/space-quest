package com.quest.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
@Table(name = "section")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Section {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid")
    @Column(name = "UUID")
    @Size(max = 32)
    private String uuid;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "text")
    private String text;

    @Column(name = "url")
    private String url;
}

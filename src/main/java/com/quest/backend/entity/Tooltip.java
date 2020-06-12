package com.quest.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tooltip")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Tooltip {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid")
    @Column(name = "UUID")
    @Size(max = 32)
    private String uuid;

    @Column(name = "level", nullable = false)
    private int level;

    @Column(name = "text")
    private String text;

    @Column(name = "url")
    private String url;
}

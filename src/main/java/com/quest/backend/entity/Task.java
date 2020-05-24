package com.quest.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
@Table(name = "task")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Task {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid")
    @Column(name = "UUID")
    @Size(max = 32)
    private String uuid;

    @Column(name = "answer", nullable = false)
    private String answer;

    //@ManyToOne(optional=false, targetEntity = Section.class)
    //@JoinColumn(name="section_uuid", referencedColumnName="UUID")
    @Column(name = "section_uuid", nullable = false)
    private String sectionUUID;

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "serial_number")
    private int serialNumber;

    @Column(name = "text")
    private String text;

    @Column(name = "url")
    private String url;
}

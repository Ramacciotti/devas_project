package com.ramacciotti.devas.model;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Entity
@With
@AllArgsConstructor
@NoArgsConstructor
@Table(name= "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String email;

    @NotNull
    private Long image;

    @NotNull
    private String name;

    @NotNull
    private String city;

    @NotNull
    private String age;

    @Enumerated(EnumType.STRING)
    private Area area;

    @Enumerated(EnumType.STRING)
    private Level level;

    @Enumerated(EnumType.STRING)
    private Objective objective;

    @NotNull
    private String languages;

    @NotNull
    @Column(columnDefinition = "LONGTEXT")
    private String description;

    @NotNull
    private String linkedin;

    @NotNull
    private String github;
}
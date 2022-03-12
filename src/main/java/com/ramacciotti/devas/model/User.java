package com.ramacciotti.devas.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

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

    @NotNull @NotBlank
    private String email;

    @NotNull @NotBlank
    private String password;

    @OneToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "about_id")
    @NotNull
    private About about;

    @OneToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "social_id")
    private Social social;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "job_id")
    private Job job;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "technology_id")
    private Technology technology;

    @OneToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "status_id")
    @NotNull
    private Status status;

    public User(String email, String password, About about, Social social, Job job, Technology technology) {
        this.email = email;
        this.password = password;
        this.about = about;
        this.social = social;
        this.job = job;
        this.technology = technology;
    }
}

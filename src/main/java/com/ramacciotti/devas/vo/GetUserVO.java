package com.ramacciotti.devas.vo;

import com.ramacciotti.devas.model.*;
import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Data
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class GetUserVO {

    @NotNull
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

    @NotNull
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

    public GetUserVO(User user) {
        this.id = user.getId();
        this.email = user.getEmail();
        this.image = user.getImage();
        this.name = user.getName();
        this.city = user.getCity();
        this.age = user.getAge();
        this.area = user.getArea();
        this.level = user.getLevel();
        this.objective = user.getObjective();
        this.languages = user.getLanguages();
        this.description = user.getDescription();
        this.linkedin = user.getLinkedin();
        this.github = user.getGithub();
    }

    public static List<GetUserVO> convertToVO(List<User> user) {
        return user.stream().map(GetUserVO::new).collect(Collectors.toList());
    }
}


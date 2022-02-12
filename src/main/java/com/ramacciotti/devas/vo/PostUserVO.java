package com.ramacciotti.devas.vo;

import com.ramacciotti.devas.model.*;
import com.sun.istack.NotNull;
import lombok.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Data
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class PostUserVO {

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

    @NotNull
    private Level level;

    @NotNull
    private Objective objective;

    @NotNull
    private String description;

    @NotNull
    private String languages;

    @NotNull
    private String linkedin;

    @NotNull
    private String github;

    public PostUserVO(User user) {
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

    public static List<PostUserVO> convertToVO(List<User> user) {
        return user.stream().map(PostUserVO::new).collect(Collectors.toList());
    }
}

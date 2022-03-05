package com.ramacciotti.devas.vo;

import com.ramacciotti.devas.model.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.stream.Collectors;

@Data
@EqualsAndHashCode
@NoArgsConstructor
@ToString
public class UserVO {

    @NotNull @NotBlank
    private String email;

    @NotNull @NotBlank
    private String password;

    @NotNull @NotBlank
    private About about;

    @NotNull @NotBlank
    private Social social;

    @NotNull @NotBlank
    private Job job;

    @NotNull @NotBlank
    private List<Technology> technologies;

    @NotNull @NotBlank
    private Status status;

    public UserVO(User user) {
        this.email = user.getEmail();
        this.password = user.getPassword();
        this.about = user.getAbout();
        this.job = user.getJob();
        this.status = user.getStatus();
        this.social = user.getSocial();
        this.technologies = user.getTechnologies();
    }

    public static List<UserVO> convertToVO(List<User> user) {
        return user.stream().map(UserVO::new).collect(Collectors.toList());
    }
}

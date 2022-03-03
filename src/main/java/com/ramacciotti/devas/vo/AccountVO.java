package com.ramacciotti.devas.vo;

import com.ramacciotti.devas.model.*;
import com.sun.istack.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Data
@EqualsAndHashCode
@NoArgsConstructor
@ToString
public class AccountVO {

    @NotNull
    private String email;

    @NotNull
    private String password;

    private LocalDateTime createdAt;

    private boolean logged;

    private Profile profile;

    private Status status;

    private Social social;

    private List<Technology> technologies;

    public AccountVO(Account account) {
        this.email = account.getEmail();
        this.password = account.getPassword();
        this.createdAt = account.getCreatedAt();
        this.logged = account.isLogged();
        this.profile = account.getProfile();
        this.status = account.getStatus();
        this.social = account.getSocial();
        this.technologies = account.getTechnologies();
    }

    public static List<AccountVO> convertToVO(List<Account> account) {
        return account.stream().map(AccountVO::new).collect(Collectors.toList());
    }
}

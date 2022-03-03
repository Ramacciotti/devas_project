package com.ramacciotti.devas.service.validation;

import com.ramacciotti.devas.model.Account;
import org.springframework.http.HttpStatus;

import java.util.Optional;

public interface AccountValidationInterface {

    Optional<Account> checkIfAccountExists(Long id);

    boolean checkIfEmailAndPasswordMatch(String email, String password);

}

package com.ramacciotti.devas.service.validation;

import com.ramacciotti.devas.model.Account;
import com.ramacciotti.devas.repository.AccountRepository;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AccountValidationService implements AccountValidationInterface {

    private final AccountRepository accountRepository;
    private final PasswordEncoder encoder;

    public AccountValidationService(AccountRepository accountRepository, PasswordEncoder encoder) {
        this.accountRepository = accountRepository;
        this.encoder = encoder;
    }

    @Override
    public Optional<Account> checkIfAccountExists(Long id){
        var account = accountRepository.findById(id);
        if(account.isEmpty()){
            throw new IllegalArgumentException("account_not_found");
        } else {
            return account;
        }
    }

    @Override
    public boolean checkIfEmailAndPasswordMatch(String email, String password) {

        Optional<Account> accountExists = accountRepository.findByEmail(email);

        if(accountExists.isEmpty()){
            throw new IllegalArgumentException("account_not_found");
        }

        Account account = accountExists.get();

        boolean valid = encoder.matches(password, account.getPassword());

        HttpStatus status = (valid) ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;

        return status.is2xxSuccessful();

    }

}

package com.ramacciotti.devas.service.login;

import com.ramacciotti.devas.model.Account;
import com.ramacciotti.devas.repository.AccountRepository;
import com.ramacciotti.devas.service.validation.AccountValidationService;
import com.ramacciotti.devas.vo.AccountVO;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AccountLoginService implements AccountLoginInterface{

    public final AccountValidationService validationService;
    public final AccountRepository accountRepository;

    public AccountLoginService(AccountValidationService validationService, AccountRepository accountRepository) {
        this.validationService = validationService;
        this.accountRepository = accountRepository;
    }

    @Override
    public AccountVO loginAccount(String email, String password) {

        Optional<Account> accountExists = accountRepository.findByEmail(email);

        Account account = accountExists.get();

        if(validationService.checkIfEmailAndPasswordMatch(email, password)){
            account.setLogged(true);
        } else {
            account.setLogged(false);
        }
        accountRepository.save(account);

        return new AccountVO(account);

    }

}

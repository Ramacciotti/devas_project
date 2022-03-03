package com.ramacciotti.devas.service.filter;

import com.ramacciotti.devas.repository.AccountRepository;
import com.ramacciotti.devas.vo.AccountVO;
import org.springframework.stereotype.Service;

@Service
public class AccountFilterService {

    private final AccountRepository accountRepository;

    public AccountFilterService(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    public AccountVO findAccountByEmail(String email) {
        var account = accountRepository.findByEmail(email);
        if(account.isEmpty()){
            throw new IllegalArgumentException("account_not_found");
        }
        return new AccountVO(account.get());
    }

}

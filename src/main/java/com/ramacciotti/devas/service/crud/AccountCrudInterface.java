package com.ramacciotti.devas.service.crud;

import com.ramacciotti.devas.vo.AccountVO;

import javax.transaction.Transactional;
import java.util.List;

public interface AccountCrudInterface {

    @Transactional
    AccountVO createAccount(AccountVO AccountVO);

    @Transactional
    List<AccountVO> readAccounts();

    @Transactional
    AccountVO updateAccount(Long id, AccountVO accountVO);

    @Transactional
   void deleteAccount(Long id);

}

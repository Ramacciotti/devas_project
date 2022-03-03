package com.ramacciotti.devas.service.sections.status;

import com.ramacciotti.devas.model.Account;
import com.ramacciotti.devas.vo.AccountVO;

import java.util.Optional;

public interface StatusCrudInterface {

    AccountVO updateStatus(Optional<Account> account, AccountVO accountVO);

}

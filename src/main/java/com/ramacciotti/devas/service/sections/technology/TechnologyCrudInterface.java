package com.ramacciotti.devas.service.sections.technology;

import com.ramacciotti.devas.model.Account;
import com.ramacciotti.devas.vo.AccountVO;

import java.util.Optional;

public interface TechnologyCrudInterface {

    AccountVO updateTechnology(Optional<Account> account, AccountVO accountVO);

}

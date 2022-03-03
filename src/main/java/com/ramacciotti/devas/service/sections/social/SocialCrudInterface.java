package com.ramacciotti.devas.service.sections.social;

import com.ramacciotti.devas.model.Account;
import com.ramacciotti.devas.vo.AccountVO;

import java.util.Optional;

public interface SocialCrudInterface {

    AccountVO updateSocial(Optional<Account> account, AccountVO accountVO);

}

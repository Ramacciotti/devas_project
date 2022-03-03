package com.ramacciotti.devas.service.sections.profile;

import com.ramacciotti.devas.model.Account;
import com.ramacciotti.devas.vo.AccountVO;

import java.util.Optional;

public interface ProfileCrudInterface {

    AccountVO updateProfile(Optional<Account> account, AccountVO accountVO);

}

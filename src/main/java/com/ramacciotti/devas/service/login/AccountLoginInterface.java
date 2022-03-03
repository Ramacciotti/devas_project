package com.ramacciotti.devas.service.login;

import com.ramacciotti.devas.vo.AccountVO;

public interface AccountLoginInterface {

    AccountVO loginAccount(String email, String password);

}

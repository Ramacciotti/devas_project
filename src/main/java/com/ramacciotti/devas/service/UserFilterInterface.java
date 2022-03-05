package com.ramacciotti.devas.service;

import com.ramacciotti.devas.vo.UserVO;

public interface UserFilterInterface {

    UserVO findUserById(Long id);

}

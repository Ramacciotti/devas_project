package com.ramacciotti.devas.service;

import com.ramacciotti.devas.vo.UserVO;

public interface UserLoginInterface {

    UserVO loginUser(String email, String password);

    UserVO logoutUser(UserVO userVO);

}

package com.ramacciotti.devas.service;

import com.ramacciotti.devas.model.User;
import com.ramacciotti.devas.vo.UserVO;

public interface UserLoginInterface {

    UserVO loginUser(UserVO userVO);

    UserVO logoutUser(UserVO userVO);

}

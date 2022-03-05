package com.ramacciotti.devas.service;

import com.ramacciotti.devas.vo.UserVO;

import javax.transaction.Transactional;
import java.util.List;

public interface UserCrudInterface {

    @Transactional
    UserVO createUser(UserVO UserVO);

    @Transactional
    List<UserVO> readUsers();

    @Transactional
    UserVO updateUser(UserVO userVO);

    @Transactional
    void deleteUser(UserVO userVO);

}

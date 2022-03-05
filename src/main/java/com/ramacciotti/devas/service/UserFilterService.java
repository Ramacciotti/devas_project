package com.ramacciotti.devas.service;

import com.ramacciotti.devas.repository.UserRepository;
import com.ramacciotti.devas.vo.UserVO;
import org.springframework.stereotype.Service;

@Service
public class UserFilterService implements UserFilterInterface {

    private final UserRepository userRepository;

    public UserFilterService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserVO findUserById(Long id) {

        var user = userRepository.findById(id);

        if(user.isEmpty()){
            throw new IllegalArgumentException("user_not_found");
        } else {
            return new UserVO(user.get());
        }

    }

}

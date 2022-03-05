package com.ramacciotti.devas.service;

import com.ramacciotti.devas.model.User;
import com.ramacciotti.devas.repository.UserRepository;
import com.ramacciotti.devas.vo.UserVO;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserFilterService implements UserFilterInterface {

    private final UserRepository userRepository;

    public UserFilterService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public Optional<User> findUserById(Long id) {

        var user = userRepository.findById(id);

        if(user.isEmpty()){
            throw new IllegalArgumentException("user_not_found");
        } else {
            return user;
        }

    }

    @Override
    public Optional<User> findUserByEmail(String email) {

        var user = userRepository.findByEmail(email);

        if(!user.isEmpty()){
            return user;
        } else {
            throw new IllegalArgumentException("user_not_found");
        }

    }

}

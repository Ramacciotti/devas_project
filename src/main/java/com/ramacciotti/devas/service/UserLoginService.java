package com.ramacciotti.devas.service;

import com.ramacciotti.devas.model.User;
import com.ramacciotti.devas.repository.UserRepository;
import com.ramacciotti.devas.vo.UserVO;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserLoginService implements UserLoginInterface {

    public final UserValidationService validationService;
    public final UserRepository userRepository;

    public UserLoginService(UserValidationService validationService, UserRepository userRepository) {
        this.validationService = validationService;
        this.userRepository = userRepository;
    }

    @Override
    public UserVO loginUser(String email, String password) {

        Optional<User> accountExists = userRepository.findByEmail(email);

        User user = accountExists.get();

        if(validationService.checkIfEmailAndPasswordMatch(email, password)){
            user.getStatus().setLogged(true);
        } else {
            user.getStatus().setLogged(false);
        }
        userRepository.save(user);

        return new UserVO(user);

    }

}

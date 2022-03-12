package com.ramacciotti.devas.service;

import com.ramacciotti.devas.model.User;
import com.ramacciotti.devas.repository.UserRepository;
import com.ramacciotti.devas.vo.UserVO;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserLoginService implements UserLoginInterface {

    public final UserFilterService service;
    public final UserValidationService validationService;
    public final UserRepository userRepository;

    public UserLoginService(UserFilterService service, UserValidationService validationService, UserRepository userRepository) {
        this.service = service;
        this.validationService = validationService;
        this.userRepository = userRepository;
    }

    @Override
    public UserVO loginUser(String email, String password) {

        var user = service.findUserByEmail(email);

        if(validationService.validateLogin(email, password)){
            user.get().getStatus().setLogged(true);
        } else {
            user.get().getStatus().setLogged(false);
        }

        userRepository.save(user.get());

        return new UserVO(user.get());

    }

    @Override
    public UserVO logoutUser(UserVO userVO) {

        var user = service.findUserByEmail(userVO.getEmail());

        if(!user.isEmpty()){
            user.get().getStatus().setLogged(false);
        }

        userRepository.save(user.get());

        return new UserVO(user.get());

    }

}

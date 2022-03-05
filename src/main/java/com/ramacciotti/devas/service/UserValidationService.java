package com.ramacciotti.devas.service;

import com.ramacciotti.devas.model.User;
import com.ramacciotti.devas.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserValidationService implements UserValidationInterface {

    private final UserRepository userRepository;
    private final PasswordEncoder encoder;

    public UserValidationService(UserRepository userRepository, PasswordEncoder encoder) {
        this.userRepository = userRepository;
        this.encoder = encoder;
    }

    @Override
    public Optional<User> checkIfUserExists(Long id){

        var user = userRepository.findById(id);

        if(user.isEmpty()){
            throw new IllegalArgumentException("user_not_found");
        } else {
            return user;
        }

    }

    @Override
    public boolean checkIfEmailAndPasswordMatch(String email, String password) {

        Optional<User> userExists = userRepository.findByEmail(email);

        if(userExists.isEmpty()){
            throw new IllegalArgumentException("user_not_found");
        }

        User user = userExists.get();

        boolean valid = encoder.matches(password, user.getPassword());

        HttpStatus status = (valid) ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;

        return status.is2xxSuccessful();

    }

}

package com.ramacciotti.devas.service;

import com.ramacciotti.devas.model.User;
import com.ramacciotti.devas.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserValidationService implements UserValidationInterface {

    public final UserFilterService service;
    private final UserRepository userRepository;
    private final PasswordEncoder encoder;

    public UserValidationService(UserFilterService service, UserRepository userRepository, PasswordEncoder encoder) {
        this.service = service;
        this.userRepository = userRepository;
        this.encoder = encoder;
    }

    @Override
    public boolean validateLogin(String email, String password) {

        Optional<User> user = service.findUserByEmail(email);

        boolean valid = encoder.matches(password, user.get().getPassword());

        HttpStatus status = (valid) ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;

        return status.is2xxSuccessful();

    }

}

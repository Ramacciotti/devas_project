package com.ramacciotti.devas.service;

import com.ramacciotti.devas.model.User;

import java.util.Optional;

public interface UserValidationInterface {

    Optional<User> checkIfUserExists(Long id);

    boolean checkIfEmailAndPasswordMatch(String email, String password);

}

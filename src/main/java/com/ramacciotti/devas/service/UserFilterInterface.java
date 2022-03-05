package com.ramacciotti.devas.service;

import com.ramacciotti.devas.model.User;

import java.util.Optional;

public interface UserFilterInterface {

    Optional<User> findUserById(Long id);

    Object findUserByEmail(String email);

}

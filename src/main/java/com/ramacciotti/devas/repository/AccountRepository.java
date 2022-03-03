package com.ramacciotti.devas.repository;

import com.ramacciotti.devas.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository(value = "account")
public interface AccountRepository extends JpaRepository<Account,Long> {

    Optional<Account> findByEmail(String email);

}

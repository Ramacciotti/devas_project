package com.ramacciotti.devas.controller;

import com.ramacciotti.devas.service.crud.AccountCrudService;
import com.ramacciotti.devas.service.filter.AccountFilterService;
import com.ramacciotti.devas.service.login.AccountLoginService;
import com.ramacciotti.devas.vo.AccountVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
@Slf4j
@RequestMapping("/account")
public class AccountController {

    private final AccountCrudService crudService;
    private final AccountLoginService loginService;
    private final AccountFilterService filterService;

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public AccountVO createAccount(@RequestBody AccountVO accountVO){
        return crudService.createAccount(accountVO);
    }

    @GetMapping("/read")
    @ResponseStatus(HttpStatus.OK)
    public List<AccountVO> readAccounts(){
        return crudService.readAccounts();
    }

    @PutMapping("/update/{id}")
    @ResponseStatus(HttpStatus.OK)
    public AccountVO updateAccount(@PathVariable Long id, @RequestBody AccountVO accountVO){
        return crudService.updateAccount(id, accountVO);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteAccount(@PathVariable Long id){
        crudService.deleteAccount(id);
    }


    @GetMapping("/login")
    public AccountVO loginAccount(@RequestParam String email, @RequestParam String password){
        return loginService.loginAccount(email, password);
    }

    @GetMapping("/filter/{email}")
    @ResponseStatus(HttpStatus.OK)
    public AccountVO filterAccountByEmail(@PathVariable String email){
        return filterService.findAccountByEmail(email);
    }


/*
    @GetMapping("/login")
    public AccountVO loginAccount(@RequestParam String email, @RequestParam String password){
        return accountService.loginAccount(email, password);
    }

    @GetMapping("/all")
    @ResponseStatus(HttpStatus.OK)
    public List<AccountVO> getAccounts(){
        return accountService.findAccounts();
    }

    @GetMapping("/{email}")
    @ResponseStatus(HttpStatus.OK)
    public AccountVO getAccountByEmail(@PathVariable String email){
        return accountService.findAccountByEmail(email);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public AccountVO updateAccountById(@PathVariable Long id, @RequestBody AccountVO accountVO){
        return accountService.updateAccount(id, accountVO);
    }

 */

}

package com.ramacciotti.devas.controller;

import com.ramacciotti.devas.service.UserCrudService;
import com.ramacciotti.devas.service.UserFilterService;
import com.ramacciotti.devas.service.UserLoginService;
import com.ramacciotti.devas.vo.UserVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
@Slf4j
@RequestMapping("/user")
public class UserController {

    private final UserCrudService crudService;
    private final UserLoginService loginService;
    private final UserFilterService filterService;

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public UserVO createUser(@RequestBody UserVO userVO){
        return crudService.createUser(userVO);
    }

    @GetMapping("/read")
    @ResponseStatus(HttpStatus.OK)
    public List<UserVO> readUsers(){
        return crudService.readUsers();
    }

    @PutMapping("/update/{id}")
    @ResponseStatus(HttpStatus.OK)
    public UserVO updateUser(@PathVariable Long id, @RequestBody UserVO userVO){
        return crudService.updateUser(id, userVO);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteUser(@PathVariable Long id){
        crudService.deleteUser(id);
    }



    @GetMapping("/login")
    public UserVO loginUser(@RequestParam String email, @RequestParam String password){
        return loginService.loginUser(email, password);
    }

    @GetMapping("/filter/{id}")
    @ResponseStatus(HttpStatus.OK)
    public UserVO filterUserById(@PathVariable Long id){
        return filterService.findUserById(id);
    }


/*
    @GetMapping("/login")
    public UserVO loginUser(@RequestParam String email, @RequestParam String password){
        return accountService.loginUser(email, password);
    }

    @GetMapping("/all")
    @ResponseStatus(HttpStatus.OK)
    public List<UserVO> getUsers(){
        return accountService.findUsers();
    }

    @GetMapping("/{email}")
    @ResponseStatus(HttpStatus.OK)
    public UserVO getUserByEmail(@PathVariable String email){
        return accountService.findUserByEmail(email);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public UserVO updateUserById(@PathVariable Long id, @RequestBody UserVO accountVO){
        return accountService.updateUser(id, accountVO);
    }

 */

}

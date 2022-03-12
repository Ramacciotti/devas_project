package com.ramacciotti.devas.controller;

import com.ramacciotti.devas.model.User;
import com.ramacciotti.devas.service.UserCrudService;
import com.ramacciotti.devas.service.UserFilterService;
import com.ramacciotti.devas.service.UserLoginService;
import com.ramacciotti.devas.vo.UserVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.OK)
    public UserVO updateUser(@RequestBody UserVO userVO){
        return crudService.updateUser(userVO);
    }

    @DeleteMapping("/delete/{email}/{password}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteUser(@PathVariable String email, @PathVariable String password){
        crudService.deleteUser(email, password);
    }



    @PostMapping("/login/{email}/{password}")
    public UserVO loginUser(@PathVariable String email, @PathVariable String password){
        return loginService.loginUser(email, password);
    }

    @GetMapping("/logout")
    public UserVO logoutUser(@RequestBody UserVO userVO){
        return loginService.logoutUser(userVO);
    }



    @GetMapping("/filter/id/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Optional<User> filterUserById(@PathVariable Long id){
        return filterService.findUserById(id);
    }

    @GetMapping("/filter/email/{email}")
    @ResponseStatus(HttpStatus.OK)
    public Object filterUserByEmail(@PathVariable String email){
        return filterService.findUserByEmail(email);
    }

}

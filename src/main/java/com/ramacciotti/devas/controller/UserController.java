package com.ramacciotti.devas.controller;

import com.ramacciotti.devas.service.UserService;
import com.ramacciotti.devas.vo.GetUserVO;
import com.ramacciotti.devas.vo.PostUserVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/controller")
@CrossOrigin("*")
@Slf4j
public class UserController {

    private final UserService userService;

    @PostMapping("/user")
    @ResponseStatus(HttpStatus.CREATED)
    public PostUserVO postUser(@RequestBody PostUserVO postUserVO){
        return userService.createUser(postUserVO);
    }

    @PutMapping("/user/{id}")
    @ResponseStatus(HttpStatus.OK)
    public PostUserVO putUserById(@PathVariable Long id, @RequestBody PostUserVO postUserVO){
        return userService.updateUser(id, postUserVO);
    }

    @DeleteMapping("/user/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteUserById(@PathVariable Long id){
        userService.deleteUser(id);
    }

    @GetMapping("/users")
    @ResponseStatus(HttpStatus.OK)
    public List<GetUserVO> getUsers(){
        return userService.findUsers();
    }

    @GetMapping("/user/{id}")
    @ResponseStatus(HttpStatus.OK)
    public GetUserVO getNewsById(@PathVariable String email){
        return userService.findUserByEmail(email);
    }


}

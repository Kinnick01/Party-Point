package com.partypoint.controller;

import com.partypoint.database.UserEntity;
import com.partypoint.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public UserEntity getUser() {
        return null;
    }

    @PostMapping("/register")
    public UserEntity postUser(@RequestBody UserEntity user) {
        return userService.registerUser(user);
    }
}

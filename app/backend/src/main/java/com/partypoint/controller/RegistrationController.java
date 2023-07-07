package com.partypoint.controller;

import com.partypoint.database.UserEntity;
import com.partypoint.database.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/registration")
public class RegistrationController {
    private final UserRepository userRepository;

    @Autowired
    public RegistrationController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping
    public UserEntity registerUser(@RequestBody UserEntity user) {
        // Perform any necessary validation on the user object

        // Save the user to the database
        return userRepository.save(user);
    }
}


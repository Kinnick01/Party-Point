package com.partypoint.controller;

import com.partypoint.database.UserEntity;
import com.partypoint.database.repository.UserRepository;
import com.partypoint.service.login.LoginRequest;
import com.partypoint.service.login.LoginResponse;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public LoginController(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest loginRequest) {
        UserEntity user = userRepository.findByUsername(loginRequest.getUsername());
        if (user == null) {
            // User not found
            return new LoginResponse("Invalid username or password", null);
        }

        if (!passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
            // Incorrect password
            return new LoginResponse("Invalid username or password", null);
        }

        // Generate and return a token (you can use a library like JWT for this)
        String token = generateToken(user.getId());

        return new LoginResponse("Login successful", token);
    }

    // Helper method to generate a token
    private String generateToken(Long userId) {
        // Implement your token generation logic here
        return "your_generated_token";
    }
}


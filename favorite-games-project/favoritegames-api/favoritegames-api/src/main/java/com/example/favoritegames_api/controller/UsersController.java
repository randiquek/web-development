package com.example.favoritegames_api.controller;

import com.example.favoritegames_api.data.model.Game;
import com.example.favoritegames_api.data.model.User;
import com.example.favoritegames_api.data.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.Serializable;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UsersController implements Serializable {
    @Autowired
    UserRepository userRepository;

    @GetMapping()
    public List<User> getResource() {
        return userRepository.findAll();
    }

    @PostMapping("/login")
    public User loginUser(@RequestBody User loginRequest) {
        User user = userRepository.findByUsername(loginRequest.getUsername());
        if (user != null && user.getPassword().equals(loginRequest.getPassword())) { // Use hashed passwords in production
            return user;
        } else {
            throw new RuntimeException("Invalid username or password");
        }
    }
}

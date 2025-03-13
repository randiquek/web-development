package com.example.favoritegames_api.controller;

import com.example.favoritegames_api.data.model.Game;
import com.example.favoritegames_api.data.model.User;
import com.example.favoritegames_api.data.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.Serializable;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class UsersController implements Serializable {
    @Autowired
    UserRepository userRepository;

    @GetMapping()
    public List<User> getResource() {
        return userRepository.findAll();
    }
}

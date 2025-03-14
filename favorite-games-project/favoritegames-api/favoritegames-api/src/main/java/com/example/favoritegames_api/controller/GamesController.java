package com.example.favoritegames_api.controller;

import com.example.favoritegames_api.data.model.Game;
import com.example.favoritegames_api.data.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.awt.*;
import java.io.Serializable;
import java.util.List;

@RestController
@RequestMapping("/games")
public class GamesController implements Serializable {
    @Autowired
    GameRepository gameRepository;


    @GetMapping()
    public List<Game> getResource() {
        return gameRepository.findAll();
    }

}

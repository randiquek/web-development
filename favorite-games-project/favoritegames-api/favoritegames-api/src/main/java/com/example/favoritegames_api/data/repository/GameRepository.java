package com.example.favoritegames_api.data.repository;

import com.example.favoritegames_api.data.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository <Game, Integer> {
}

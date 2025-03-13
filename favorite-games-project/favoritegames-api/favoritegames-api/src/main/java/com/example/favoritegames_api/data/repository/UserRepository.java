package com.example.favoritegames_api.data.repository;

import com.example.favoritegames_api.data.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
}

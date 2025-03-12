package com.example.favoritegames_api.data.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Game")
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String name;
    int releaseYear;
    String developer;
    String genre;
    int ranking;

    public Game() {

    }

    public Game(int id, String name, int releaseYear, String developer, String genre, int ranking) {
        this.id = id;
        this.name = name;
        this.releaseYear = releaseYear;
        this.developer = developer;
        this.genre = genre;
        this.ranking = ranking;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getReleaseYear() {
        return releaseYear;
    }

    public void setReleaseYear(int releaseYear) {
        this.releaseYear = releaseYear;
    }

    public String getDeveloper() {
        return developer;
    }

    public void setDeveloper(String developer) {
        this.developer = developer;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public int getRanking() {
        return ranking;
    }

    public void setRanking(int ranking) {
        this.ranking = ranking;
    }

    @Override
    public String toString() {
        return "Game{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", releaseYear=" + releaseYear +
                ", developer='" + developer + '\'' +
                ", genre='" + genre + '\'' +
                ", ranking=" + ranking +
                '}';
    }
}

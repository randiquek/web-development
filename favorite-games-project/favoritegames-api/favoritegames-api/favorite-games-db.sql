drop database if exists favoritegames;
create database favoritegames;
use favoritegames;

create table game (
	id int primary key auto_increment,
    name varchar(128) not null,
    release_year int not null,
    developer varchar(128) not null,    
	genre varchar(128) not null,
    ranking int not null
);

INSERT INTO game (id, name, release_year, developer, genre, ranking) VALUES
(1, "World of Warcraft", 2021, "Blizzard Entertainment", "MMORPG", 1),
(2, "Gauntlet Legends", 1998, "Atari Games", "Hack and Slash", 4),
(3, "Heroes of the Storm", 2015, "Blizzard Entertainment", "MOBA", 3),
(4, "Assassin's Creed Origins", 2017, "Ubisoft Montreal", "RPG", 2),
(5, "Super Metroid", 1994, "Nintendo", "Metroidvania", 5);



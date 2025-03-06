import React, { useState, useEffect } from 'react'
import Game from './Game'
import '../App.css'

export default function Body() {

    const [games, setGames] = useState([]);  

    useEffect(() => {setGames([
            {
              "name": "World of Warcraft",
              "releaseYear": 2021,
              "developer": "Blizzard Entertainment",
              "genre": "MMORPG"  
            },
            {
              "name": "Gauntlet Legends",
              "releaseYear": 1998,
              "developer": "Atari Games",
              "genre": "Hack and Slash",
            },
            {
              "name": "Heroes of the Storm",
              "releaseYear": 2015,
              "developer": "Blizzard Entertainment",
              "genre": "MOBA"
            },  
            {
              "name": "Assassin's Creed Origins",
              "releaseYear": 2017,
              "developer": "Ubisoft Montreal",
              "genre": "RPG"   
            },
            {
              "name": "Super Metroid",
              "releaseYear": 1994,
              "developer": "Nintendo", 
              "genre": "Metroidvania"  
            }
        ]);
    }, [])

    return (
        <div>
            <p>Here's a list of my top favorite games</p>

            <ol>
                {games.map((game) => (
                    <Game name={game.name} developer={game.developer}/>
                    ))};
            </ol>
        </div>

    )
}
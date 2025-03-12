import React, { useState, useEffect } from 'react'
import Game from './Game'
import '../App.css'

export default function Body() {
  const [games, setGames] = useState([]);

  useEffect(() => {

    fetch("http://localhost:8080/games",
        {
          method: "GET",
          headers: {"Content-Type": "application/json"},
        }).then(response => response.json())
        .then((data) => {
          console.log(data);
          setGames(data);
        })


}, []);

    return (
        <div>
            <p>Here's a list of my top favorite games</p>

            <ol>
                {games.map((game) => (
                    <Game key={game.id} name={game.name} developer={game.developer}/>
                    ))}
            </ol>
        </div>

    )
}
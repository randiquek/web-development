import React, { useState } from "react";
import Board from "./Board";


export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [xIsNext, setXIsNext] = useState(true);



    function handlePlay(nextSquares) {
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }

    function jumpTo(nextMove) {
        console.log("jumpTo", nextMove);
    }
    
    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description ="Go to move #" + move;
        }
        else {
            description = "Go to game start";
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={history[history.length-1]} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>
                   {moves} 
                </ol>
            </div>
        </div>
    )
}
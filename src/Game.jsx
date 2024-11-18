import React, { useState } from "react"
import GameGrid from "./GameGrid"

function Game() {
   // Use useState to manage moves and turn
   const [moves, setMoves] = useState(new Array(9).fill(""))
   const [turn, setTurn] = useState("X")
  
   function gridClick(whichSquare) {
      if (moves[whichSquare] === "") {
         // Create a copy of the moves array
         const movesCopy = [...moves]
         // Set the clicked square to the current player's turn
         movesCopy[whichSquare] = turn
         // Update the moves state
         setMoves(movesCopy);
         // Alternate the turn between "X" and "O"
         setTurn(turn === "X" ? "O" : "X")
      }
   }

   // Add newGame function to reset the game state
   function newGame() {
      setMoves(new Array(9).fill(""))
      setTurn("X")
   }

   return (
      <>
         <h1>Tic-Tac-Toe</h1>        
         <GameGrid moves={moves} click={gridClick} />
         <p>
            Turn: <strong className={turn}>{turn}</strong>
         </p>
         <p>
            <button onClick={newGame}>New Game</button>
         </p>
      </>
   )
}

export default Game
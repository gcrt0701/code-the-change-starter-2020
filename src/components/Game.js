import React, { useState } from "react";
import { calculateWinner } from "../calculate_win";
import Board from "./Board";


const Game = () => {
  // TODO: Set up states and functions: position of Xs and Os on board,
  // step number, whether X is next, is there a win or tie, etc.
  //Initiatlizes states [variableName, function] = useState(initialState)
  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const [className, setClassName] = useState(["squares", "squares", "squares", "squares", "squares", "squares", "squares", "squares", "squares"]);

  //Variables
  const winner = calculateWinner(board);
  const play = xIsNext ? "X" : "O";

  //onClick function
  const handleClick = (i) => {
    if (winner == null && board[i] == null) {
      board[i] = play;
      className[i] = "clicked squares";
      setXisNext(!xIsNext);
      setStepNumber(stepNumber + 1);
      return ;
    }
  };

  //Resets the game
  const jumpToStart = () => {
    setBoard([null, null, null, null, null, null, null, null, null]);
    setStepNumber(0);
    setXisNext(true);
    setClassName(["squares", "squares", "squares", "squares", "squares", "squares", "squares", "squares", "squares"])
  };

  //Concludes game
  const result = () => {
    if (winner != null) {
      return "Winner: " + winner;
    }

    if (board.indexOf(null) === -1) {
      return "Tie Game";
    }

    return xIsNext ? "Next Player: X" : "Next Player: O";

  };


  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Board className={className} squares={board} onClick={i => handleClick(i)} />
      <div className='info-wrapper'>
        <div>
          <button onClick={() => jumpToStart()}>Go to Start</button>
        </div>
        <h3>{result()}</h3>
      </div>
    </>
  );
};

export default Game;

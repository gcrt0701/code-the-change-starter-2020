import React, { useState } from "react";
import { calculateWinner } from "../calculate_win";
import Board from "./Board";


const Game = () => {
  // TODO: Set up states and functions: position of Xs and Os on board,
  // step number, whether X is next, is there a win or tie, etc.
  //Initiatlizes states [variableName, function] = useState(initialState)
  //const [board, setBoard] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const [className, setClassName] = useState(Array(9).fill("squares"));

  //Variables
  const winner = calculateWinner(history[stepNumber]);
  const play = xIsNext ? "X" : "O";

  //onClick function
  const handleClick = (i) => {
    if (winner == null && history[stepNumber][i] == null) {
      let temp = history[stepNumber].map((x) => x);
      temp[i] = play;

      if (stepNumber === history.length - 1) {
        setHistory(history.concat([temp]));
      } else {
        let trim = history.slice(0,stepNumber + 1);
        setHistory(trim.concat([temp]));
      }

      setStepNumber(stepNumber + 1);
      
      className[i] = "clicked squares";
      setXisNext(!xIsNext);
      return ;
    }
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    if (step % 2 === 0) {
      setXisNext(true);
    } else {
      setXisNext(false);
    }
    setClassName(Array(9).fill("squares"));
  }

  //Concludes game
  const result = () => {
    if (winner != null) {
      return "Winner: " + winner;
    }

    if (history[stepNumber].indexOf(null) === -1) {
      return "Tie Game";
    }

    return xIsNext ? "Next Player: X" : "Next Player: O";

  };

  const renderMoves = () => {
    return history.map((value, i) => (<button className="history-button" step={i} value={value} onClick={() => jumpTo(i)}>Go to {i === 0 ? "Start" : "Move #" + i}</button>));
  }


  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Board className={className} squares={history[stepNumber]} onClick={i => handleClick(i)} />
      <div className='info-wrapper'>
        <div>
          <h3>History</h3>
          {renderMoves()}
        </div>
        <h3>{result()}</h3>
      </div>
    </>
  );
};

export default Game;

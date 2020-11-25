import React from "react";
import Square from "./Square";

const Board = ({squares, onClick, className}) => {
  // TODO: Populate the board with squares
console.log(squares);
  const board = squares.map((value, i) => (<Square className={className[i]} key={i} value={value} onClick={() => onClick(i)}></Square>));


  return (
    <div className="board">{board}</div>
  );
};

export default Board;

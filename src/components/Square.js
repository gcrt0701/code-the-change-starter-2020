import React from "react";

const Square = ({className, value, onClick}) => {
  //value corresponds to the current value of the square {"X", "O", or null}
  //onClick is the function that determines what the program should do
  return (
    <button className={className} onClick={onClick}> {value} </button>
  );
};

export default Square;

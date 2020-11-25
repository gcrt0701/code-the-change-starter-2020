export function calculateWinner(squares) {
  for (let i = 0; i < 7; i++) {
    if (squares[i] != null && i % 3 === 0) {
      if (squares[i] === squares[i + 1] && squares[i] === squares[i + 2]) {
        return squares[i];
      }
    }

    if(squares[i] != null && i < 3) {
      if (squares[i] === squares[i + 3] && squares[i] === squares[i + 6]) {
        return squares[i];
      }
    }
  }

  if (squares[0] === squares[4] && squares[0] === squares[8]) {
    return squares[0];
  }

  if (squares[2] === squares[4] && squares[2] === squares[6]) {
    return squares[2];
  }

  return null;
}

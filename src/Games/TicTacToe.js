import React, { useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [bombs, setBombs] = useState([]);

  const winner = calculateWinner(board);

  function calculateWinner(b) {
    const combos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let [a, b1, c] of combos) {
      if (b[a] && b[a] === b[b1] && b[a] === b[c]) return b[a];
    }
    return null;
  }

  const handleClick = (i) => {
    if (board[i] || winner) return;
    const newBoard = [...board];
    newBoard[i] = isX ? "X" : "O";
    setBoard(newBoard);
    setIsX(!isX);
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setIsX(true);
    setBombs([]);
  };

  // 🎇 Trigger colorful bombs when someone wins
  if (winner && bombs.length === 0) {
    const newBombs = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 25 + 10,
      color: `hsl(${Math.random() * 360}, 80%, 60%)`,
      duration: Math.random() * 2 + 2,
    }));
    setBombs(newBombs);
    setTimeout(() => setBombs([]), 4000);
  }

  return (
    <div className="tictactoe-game">
      <div className="board">
        {board.map((cell, i) => (
          <button key={i} onClick={() => handleClick(i)}>
            {cell}
          </button>
        ))}
      </div>

      {winner ? <h3>🏆 {winner} Wins!</h3> : <p>Turn: {isX ? "X" : "O"}</p>}
      <button className="reset-btn" onClick={reset}>Reset</button>

      {/* 🎆 Bomb container */}
      <div className="bomb-container">
        {bombs.map((b) => (
          <div
            key={b.id}
            className="bomb"
            style={{
              left: `${b.left}%`,
              width: b.size,
              height: b.size,
              background: b.color,
              animationDuration: `${b.duration}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./Gameheader.css";

const GameHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="game-header">
      <h2 className="gh-title" onClick={() => navigate("/gamehub")}>
        🎮 Game Hub
      </h2>

      <div className="gh-nav">
        <button onClick={() => navigate("/gamehub")}>GameHub</button>
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    </div>
  );
};

export default GameHeader;

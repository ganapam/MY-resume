import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MoreGames.css";

import GameHeader from "../MoreGames/GameHeader/Gameheader";
import GameFooter from "../MoreGames/GameFotter/GameFotter";

export default function MoreGames() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <GameHeader />

      {/* ALWAYS VISIBLE MENU TOGGLE */}
      <button className="main-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* WHEN menuOpen = true → class 'open' is added */}
      <div className={`moregames-layout ${menuOpen ? "open" : ""}`}>

        {/* SLIDING SIDEBAR */}
        <aside className="sidebar">
          <div className="side-title">📂 Menu</div>

          <button
            className="menu-btn"
            onClick={() => { navigate("/quizgame"); setMenuOpen(false); }}
          >
            ❓ Quiz Game
          </button>
        </aside>

        {/* MAIN SCREEN */}
<div className="content game-screen">
  <h1 className="main-title">🧠 Memory Booster Games</h1>
  <p className="tagline">Play • Train Brain • Relax Mind</p>
  <p className="start-hint">⬅ Open the left panel to begin your journey</p>
</div>

      </div>

      <GameFooter />
    </>
  );
}

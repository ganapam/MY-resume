import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MoreGames.css";
import "./leftsidepaneel.css"
export default function LeftSidepanell({ children }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`layout-wrap ${menuOpen ? "open" : ""}`}> 

      {/* Toggle button */}
      <button className="main-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="side-title">📂 Menu</div>

        <button className="menu-btn" onClick={() => { navigate("/moregames"); setMenuOpen(false); }}>
          🎮 More Games
        </button>

        <button className="menu-btn" onClick={() => { navigate("/quizgame"); setMenuOpen(false); }}>
          ❓ Quiz Game
        </button>
      </aside>

      {/* 🔥 REAL FIX — CHILDREN WILL DISPLAY HERE */}
      <div className="page-area">{children}</div>

    </div>
  );
}

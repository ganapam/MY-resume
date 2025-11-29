import React from "react";
import { useNavigate } from "react-router-dom";
import "./GameFotter.css";

export default function GameFooter() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  return (
    <footer className="game-footer">
      <p>🕹 Game Hub © {year} | GMR — All Rights Reserved ⚡</p>

      <button className="footer-home-btn" onClick={() => navigate("/")}>
        ⬅ Exit to Home
      </button>
    </footer>
  );
}

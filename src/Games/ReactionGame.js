import React, { useState, useEffect } from "react";
import "./ReactionGame.css";

const ReactionGame = () => {
  const [state, setState] = useState("idle"); // idle | waiting | ready | result
  const [message, setMessage] = useState("Click anywhere inside the box to start!");
  const [startTime, setStartTime] = useState(0);
  const [reaction, setReaction] = useState(null);
  const [bestScore, setBestScore] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const [particles, setParticles] = useState([]);

  // handle best score persistence
  useEffect(() => {
    const saved = localStorage.getItem("bestReaction");
    if (saved) setBestScore(Number(saved));
  }, []);

  useEffect(() => {
    if (bestScore) localStorage.setItem("bestReaction", bestScore);
  }, [bestScore]);

  const startGame = () => {
    setState("waiting");
    setMessage("Wait for green...");
    const delay = Math.random() * 2000 + 2000;
    const id = setTimeout(() => {
      setState("ready");
      setMessage("CLICK NOW!");
      setStartTime(Date.now());
    }, delay);
    setTimeoutId(id);
  };

  const triggerParticles = () => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 4,
      color: ["#00e0ff", "#1de9b6", "#ff4081", "#ffea00"][Math.floor(Math.random() * 4)],
    }));
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 800);
  };

  const handleClick = () => {
    if (state === "idle" || state === "result") {
      setReaction(null);
      startGame();
    } else if (state === "waiting") {
      clearTimeout(timeoutId);
      setMessage("❌ Too soon! Try again.");
      setState("idle");
    } else if (state === "ready") {
      const time = Date.now() - startTime;
      setReaction(time);
      setMessage(`⚡ Your reaction: ${time} ms`);
      setState("result");
      triggerParticles();

      if (!bestScore || time < bestScore) {
        setBestScore(time);
      }
    }
  };

  return (
    <div>

      <div className={`reaction-box ${state}`} onClick={handleClick}>
        {message}
        {particles.map((p) => (
          <span
            key={p.id}
            className="particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: p.color,
            }}
          ></span>
        ))}
      </div>

      <div className="reaction-stats">
        {reaction && <p className="reaction-result">Your Time: {reaction} ms</p>}
        {bestScore && <p className="reaction-best">🏆 Best Time: {bestScore} ms</p>}
      </div>
    </div>
  );
};

export default ReactionGame;

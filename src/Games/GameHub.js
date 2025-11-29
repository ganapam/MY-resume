import React, { useState, useEffect, useRef} from "react";
import "./GameHub.css";
import Header from "../Header/Header";
import Fotter from "../Fotter/Fotter";
import ReactionGame from "./ReactionGame";
import TicTacToe from "./TicTacToe";
import MoreGames from './MoreGames/MoreGames';
import { useNavigate } from "react-router-dom"; 



const GameHub = () => {
  const navigate = useNavigate();
  const [activeGame, setActiveGame] = useState(null);
  const [snakeSpeed, setSnakeSpeed] = useState(400); // default speed


  // ========================= BONUS EFFECT =========================
  const [bonusItems, setBonusItems] = useState([]);

  const triggerBonus = () => {
    const newItems = Array.from({ length: 25 }).map((_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      size: Math.random() * 15 + 10,
      color: ["#ff3b3b", "#FFD700", "#00FF7F", "#1E90FF"][Math.floor(Math.random() * 4)],
      duration: Math.random() * 2 + 2,
    }));
    setBonusItems(newItems);
    setTimeout(() => setBonusItems([]), 4000);
  };

  // ========================= SNAKE GAME =========================
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState([
    { x: 8, y: 10 },
    { x: 7, y: 10 },
  ]);
  const [food, setFood] = useState({ x: 12, y: 10 });
  const [dir, setDir] = useState("RIGHT");
  const dirRef = useRef("RIGHT");
  const [snakeRunning, setSnakeRunning] = useState(false);
  const snakeIntervalRef = useRef(null);
  const [snakeGameOver, setSnakeGameOver] = useState(false);
  const [snakeScore, setSnakeScore] = useState(0);
  const boardSize = 20;
  const box = 20;

  useEffect(() => {
    if (activeGame !== "snake") {
      stopSnakeLoop();
      return;
    }
    resetSnake();
  }, [activeGame]);

  const startSnake = () => {
    if (snakeRunning) return;
    setSnakeRunning(true);
    setSnakeGameOver(false);
    snakeIntervalRef.current = setInterval(snakeTick, snakeSpeed);
    window.addEventListener("keydown", handleSnakeKeys);
  };

  const stopSnakeLoop = () => {
    setSnakeRunning(false);
    if (snakeIntervalRef.current) {
      clearInterval(snakeIntervalRef.current);
      snakeIntervalRef.current = null;
    }
    window.removeEventListener("keydown", handleSnakeKeys);
  };

  const resetSnake = () => {
    stopSnakeLoop();
    setSnake([
      { x: 8, y: 10 },
      { x: 7, y: 10 },
    ]);
    setFood({
      x: Math.floor(Math.random() * boardSize),
      y: Math.floor(Math.random() * boardSize),
    });
    setDir("RIGHT");
    dirRef.current = "RIGHT";
    setSnakeGameOver(false);
    setSnakeScore(0);
  };

  const handleSnakeKeys = (e) => {
    const keyMap = {
      ArrowUp: "UP",
      ArrowDown: "DOWN",
      ArrowLeft: "LEFT",
      ArrowRight: "RIGHT",
    };
    const newDir = keyMap[e.key];
    if (!newDir) return;
    updateDirection(newDir);
  };

  const updateDirection = (newDir) => {
    if (
      (newDir === "UP" && dirRef.current !== "DOWN") ||
      (newDir === "DOWN" && dirRef.current !== "UP") ||
      (newDir === "LEFT" && dirRef.current !== "RIGHT") ||
      (newDir === "RIGHT" && dirRef.current !== "LEFT")
    ) {
      dirRef.current = newDir;
      setDir(newDir);
    }
  };

  const snakeTick = () => {
  setSnake(prevSnake => {
    let head = { ...prevSnake[0] };

    if (dirRef.current === "UP") head.y--;
    if (dirRef.current === "DOWN") head.y++;
    if (dirRef.current === "LEFT") head.x--;
    if (dirRef.current === "RIGHT") head.x++;

    if (head.x < 0 || head.x >= boardSize || head.y < 0 || head.y >= boardSize) {
      stopSnakeLoop(); setSnakeGameOver(true); return prevSnake;
    }
    if (prevSnake.some(seg => seg.x === head.x && seg.y === head.y)) {
      stopSnakeLoop(); setSnakeGameOver(true); return prevSnake;
    }

    let newSnake = [head, ...prevSnake];

    // 🟢 check against latest foodRef, not stale state
    if (head.x === foodRef.current.x && head.y === foodRef.current.y) {
      generateNewFood(newSnake);
      setSnakeScore(s => {
        const sc = s + 1;
        if(sc % 5 === 0) triggerBonus();
        return sc;
      });
    } else newSnake.pop();

    return newSnake;
  });
};


const lastFoodPositions = useRef([]); 
const foodRef = useRef(food);
useEffect(() => { foodRef.current = food; }, [food]);
const generateNewFood = (snakeBody) => {
  let newFood;
  let tries = 0;
  
  do {
    newFood = {
      x: Math.floor(Math.random() * boardSize),
      y: Math.floor(Math.random() * boardSize),
    };
    tries++;
  } while (
    snakeBody.some(s => s.x === newFood.x && s.y === newFood.y) ||
    lastFoodPositions.current.some(p => p.x === newFood.x && p.y === newFood.y)  // ⛔ avoid repeat place
  );

  // 🔥 remember last 3 positions
  lastFoodPositions.current.push(newFood);
  if(lastFoodPositions.current.length > 3) lastFoodPositions.current.shift();

  setFood(newFood);
};


useEffect(() => {
  drawSnake(snake);
}, [snake, food]);



  const drawSnake = (snakeToDraw) => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    ctx.fillStyle = "#061018";
    ctx.fillRect(0, 0, boardSize * box, boardSize * box);

    ctx.fillStyle = "#ff3b3b";
    ctx.fillRect(food.x * box, food.y * box, box - 2, box - 2);

    ctx.fillStyle = "#7CFC00";
    snakeToDraw.forEach((s) => {
      ctx.fillRect(s.x * box, s.y * box, box - 2, box - 2);
    });
  };
  useEffect(() => {
  if (snakeRunning) {
    clearInterval(snakeIntervalRef.current);
    snakeIntervalRef.current = setInterval(snakeTick, snakeSpeed);
  }
}, [snakeSpeed]);
  // ========================= MEMORY GAME =========================
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [memoryAttempts, setMemoryAttempts] = useState(0);
  const [memoryMatchedCount, setMemoryMatchedCount] = useState(0);
  const emojis = ["🐶", "🐱", "🐼", "🐸", "🐧", "🦊"];

  useEffect(() => {
    if (activeGame === "memory") initMemory();
  }, [activeGame]);

  const initMemory = () => {
    const deck = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({ id: index, emoji, flipped: false, matched: false }));
    setCards(deck);
    setFlipped([]);
    setMemoryAttempts(0);
    setMemoryMatchedCount(0);
  };

  const handleFlip = (id) => {
    if (flipped.length === 2) return;
    const card = cards.find((c) => c.id === id);
    if (!card || card.flipped || card.matched) return;

    const updated = cards.map((c) => (c.id === id ? { ...c, flipped: true } : c));
    setCards(updated);
    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMemoryAttempts((a) => a + 1);
      const [first, second] = newFlipped.map((fid) => updated.find((c) => c.id === fid));
      if (first.emoji === second.emoji) {
        const matched = updated.map((c) =>
          c.emoji === first.emoji ? { ...c, matched: true } : c
        );
        setTimeout(() => {
          setCards(matched);
          setMemoryMatchedCount((m) => {
            const total = m + 2;
            if (total === emojis.length * 2) triggerBonus();
            return total;
          });
          setFlipped([]);
        }, 500);
      } else {
        setTimeout(() => {
          const reset = updated.map((c) =>
            newFlipped.includes(c.id) ? { ...c, flipped: false } : c
          );
          setCards(reset);
          setFlipped([]);
        }, 800);
      }
    }
  };

  const resetMemory = () => {
    initMemory();
  };

  // ========================= RENDER =========================
  return (
    <div>
      <Header />
      <div className="gamehub">
        <h1 className="gamehub-title">🎮 AI Game Hub</h1>

        <div className="game-buttons">
          <button onClick={() => setActiveGame("snake")}>🐍 Snake</button>
          <button onClick={() => setActiveGame("memory")}>🧩 Memory</button>
          <button onClick={() => setActiveGame("reaction")}>⚡ Reaction</button>
         <button onClick={() => setActiveGame("tictactoe")}>⭕ Tic Tac Toe</button>
         <button onClick={() => navigate("/moregames")}>More Games</button>
        </div>

        <div className="game-area">
            {/* ---------------- REACTION ---------------- */}
{activeGame === "reaction" && (
  <div className="reaction-wrapper">
    <h2>⚡ Reaction Time Test</h2>
    <ReactionGame />
  </div>
)}

{/* ---------------- TIC TAC TOE ---------------- */}
{activeGame === "tictactoe" && (
  <div className="tictactoe-wrapper">
    <h2>⭕ Tic Tac Toe❌</h2>
    <TicTacToe />
  </div>
)}

          {!activeGame && <p>Select a game to start!</p>}


          {/* ---------------- SNAKE ---------------- */}
          {activeGame === "snake" && (
            <div className="snake-game">
              <h2>🐍 Snake Game</h2>
              <div className="snake-controls">
                <button onClick={startSnake} disabled={snakeRunning && !snakeGameOver}>Start</button>
                <button onClick={stopSnakeLoop}>Pause</button>
                <button onClick={resetSnake}>Reset</button>
              </div>
              <div className="speed-controls">
  <p>Speed:</p>
  <button
    onClick={() => setSnakeSpeed(400)}
    className={snakeSpeed === 400 ? "active-speed" : ""}
  >
    🐢 Slow
  </button>
  <button
    onClick={() => setSnakeSpeed(250)}
    className={snakeSpeed === 250 ? "active-speed" : ""}
  >
    ⚙️ Normal
  </button>
  <button
    onClick={() => setSnakeSpeed(150)}
    className={snakeSpeed === 150 ? "active-speed" : ""}
  >
    ⚡ Fast
  </button>
</div>

              <canvas
                ref={canvasRef}
                width={boardSize * box}
                height={boardSize * box}
                style={{
                  border: "1px solid #222",
                  background: "#061018",
                  marginTop: 10,
                }}
              ></canvas>

              <p>Score: {snakeScore}</p>
              {snakeGameOver && (
                <div className="game-over">
                  <p>Game Over — you collided. Score: {snakeScore}</p>
                  <button onClick={resetSnake}>Try Again</button>
                </div>
              )}

              {/* 🎮 On-Screen Arrow Controls */}
              <div className="arrow-controls">
                <button className="up" onClick={() => updateDirection("UP")}>⬆️</button>
                <div className="arrow-middle">
                  <button className="left" onClick={() => updateDirection("LEFT")}>⬅️</button>
                  <button className="right" onClick={() => updateDirection("RIGHT")}>➡️</button>
                </div>
                <button className="down" onClick={() => updateDirection("DOWN")}>⬇️</button>
              </div>
            </div>
          )}

          {/* ---------------- MEMORY ---------------- */}
          {activeGame === "memory" && (
            <div className="memory-game">
              <h2>🧩 Memory Match Game</h2>
              <div className="memory-stats">
                <p>Attempts: {memoryAttempts} | Matched: {memoryMatchedCount} / {emojis.length * 2}</p>
                <button onClick={resetMemory}>Reset</button>
              </div>

              <div className="memory-grid">
                {cards.map((card) => (
                  <button
                    key={card.id}
                    className={`memory-card ${card.flipped || card.matched ? "flipped" : ""}`}
                    onClick={() => handleFlip(card.id)}
                    disabled={card.flipped || card.matched}
                  >
                    {card.flipped || card.matched ? card.emoji : "❓"}
                  </button>
                ))}
              </div>

              {memoryMatchedCount === emojis.length * 2 && (
                <div className="memory-complete">
                  <h3>🎉 You matched all pairs!</h3>
                  <p>Attempts: {memoryAttempts}</p>
                  <button onClick={resetMemory}>Play Again</button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ======= Bonus Animation ======= */}
        <div className="bonus-container">
          {bonusItems.map((item) => (
            <div
              key={item.id}
              className="bonus-item"
              style={{
                left: `${item.left}%`,
                width: `${item.size}px`,
                height: `${item.size}px`,
                backgroundColor: item.color,
                animationDuration: `${item.duration}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
      <Fotter />
    </div>
  );
};

export default GameHub;

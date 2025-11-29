import React, { useEffect, useState } from "react";
import "./QuizGame.css";
import LeftSidepanell from "../leftsidepanell";
import GameHeader from "../GameHeader/Gameheader";
import GameFooter from "../GameFotter/GameFotter";

export default function Quizgames() {

  const API = "https://script.google.com/macros/s/AKfycbzxZ_vuzAoPfFDEQb5SLl-AbiI6ElfZi-t9o4crOGtwrbht8qjTQVmfoYjNy1bqRQ7wvw/exec";

  const [sheetList, setSheetList] = useState([]);  
  const [sheetName, setSheetName] = useState("");  
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finish, setFinish] = useState(false);

  // Load sheet names automatically
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setSheetList(data.sheets || []));
  }, []);

  // Load questions when selected
  useEffect(() => {
    if (!sheetName) return;

    setQuestions([]); 
    setIndex(0); 
    setScore(0);
    setFinish(false);
    setSelected(null);

    fetch(`${API}?sheet=${sheetName}`)
      .then(r => r.json())
      .then(q => setQuestions(q || []));
  }, [sheetName]);

  function choose(opt){
  setSelected(opt);

  if (!current?.Answer) return;  // prevent crash if no Answer exists

  if(opt.trim().toLowerCase() === current.Answer.trim().toLowerCase()){
    setScore(prev => prev + 1);
  }
}


  function next() {
    if (index === questions.length - 1) return setFinish(true);
    setIndex(i => i + 1);
    setSelected(null);
  }

  const current = questions[index];

  return (
    <>
      <GameHeader />
      <LeftSidepanell>

        <div className="quiz-wrapper">

          {!sheetName && (
            <div className="select-box">
              <h2>Select Quiz Category</h2>

              <select onChange={(e)=>setSheetName(e.target.value)}>
                <option value="">-- Choose Quiz --</option>
                {sheetList.map(name => (
                  <option key={name} value={name}>{name}</option>
                ))}
              </select>
            </div>
          )}

          {sheetName && questions.length === 0 && <h2>Loading Questions...</h2>}

          {sheetName && questions.length > 0 && !finish && (
            <div className="quiz-box">

              <h2 className="q-title">
                Q{index+1}. {current.Question}
              </h2>

              <div className="options">
                {[current.Option1, current.Option2, current.Option3, current.Option4].map(op => (
                  <button
                    key={op}
                    onClick={() => choose(op)}
                    className={
                      selected ?
                        (op === current.Answer ? "correct" : op === selected ? "wrong" : "") 
                        : ""
                    }
                  >
                    {op}
                  </button>
                ))}
              </div>

              {selected && <p className="reveal">Correct Answer → {current.Answer}</p>}
              {selected && <button className="next-btn" onClick={next}>Next ➜</button>}

              <h3>Score: {score}</h3>
            </div>
          )}

          {finish && (
            <div className="result-box">
              <h1>🎉 Completed!</h1>
              <h2>Your Score: {score}/{questions.length}</h2>
              <button className="restart" onClick={()=>setSheetName("")}>Play Again 🔁</button>
            </div>
          )}

        </div>

      </LeftSidepanell>

      <GameFooter />
    </>
  );
}

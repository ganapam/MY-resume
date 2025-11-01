import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About/About';
import Education from './Education/Education'
import Skill from './Skiil/Skill'
import Project from './Projects/Project'
import Contact from './Contact/Contact';
import Fotter from './Fotter/Fotter';
import Experience from './Experience/Experience';
import GameHub from './Games/GameHub';
import ReactionGame from "./Games/ReactionGame";
import TicTacToe from "./Games/TicTacToe";


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fotter" element={<Fotter />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/gamehub" element={<GameHub />} />
           <Route path="/reactiongame" element={<ReactionGame />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

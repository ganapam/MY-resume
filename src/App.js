import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About/About';
import Education from './Education/Education'
import Skill from './Skiil/Skill'
import Project from './Projects/Project'
import Contact from './Contact/Contact';
import Fotter from './Fotter/Fotter';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;

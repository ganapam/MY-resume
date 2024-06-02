import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="header-container">
        <h1 className="link-style"><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>RESUME</Link></h1>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <ul>
            <li className={isActive("/")}><Link to="/" onClick={toggleMenu}>About</Link></li>
            <li className={isActive("/education")}><Link to="/education" onClick={toggleMenu}>Education</Link></li>
            <li className={isActive("/skill")}><Link to="/skill" onClick={toggleMenu}>Skill</Link></li>
            <li className={isActive("/project")}><Link to="/project" onClick={toggleMenu}>Projects</Link></li>
            <li className={isActive("/contact")}><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

function isActive(linkName) {
  const currentPage = window.location.pathname;
  return currentPage === linkName ? "active" : "";
}

export default Header;

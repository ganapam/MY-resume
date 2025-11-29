import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // ✅ Close menu if user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="header-container" ref={menuRef}>
      <div className="logo-container">
        <h1 className="logo-text">
          <Link to="/" className="glow-link">RESUME</Link>
        </h1>
        <div className="light-sweep"></div>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>

      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}><Link to="/" onClick={toggleMenu}>About</Link></li>
          <li className={location.pathname === "/education" ? "active" : ""}><Link to="/education" onClick={toggleMenu}>Education</Link></li>
          <li className={location.pathname === "/skill" ? "active" : ""}><Link to="/skill" onClick={toggleMenu}>Skill</Link></li>
          <li className={location.pathname === "/project" ? "active" : ""}><Link to="/project" onClick={toggleMenu}>Projects</Link></li>
          <li className={location.pathname === "/contact" ? "active" : ""}><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          <li className={location.pathname === "/experience" ? "active" : ""}><Link to="/experience" onClick={toggleMenu}>Experience</Link></li>
          <li className={location.pathname === "/gamehub" ? "active" : ""}><Link to="/gamehub" onClick={toggleMenu}>GameHub</Link></li>
          <li className={location.pathname === "/feedback" ? "active" : ""}><Link to="/feedback" onClick={toggleMenu}>Feedback</Link></li>
        
        </ul>
      </nav>
    </header>
  );
};

export default Header;

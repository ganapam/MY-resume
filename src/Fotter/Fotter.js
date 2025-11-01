import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import './Fotter.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation(); // detect current page

  return (
    <div className="top">
      <footer className="footer">
        <div className="socialIcons">
          <a
            href="https://www.facebook.com/ganapammahendra28/"
            className="iconsLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="icons" />
          </a>
          <a
            href="https://twitter.com/Ganapammahendra"
            className="iconsLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="icons" />
          </a>
          <a
            href="https://www.instagram.com/ganapam_mahendra_reddy/?hl=en"
            className="iconsLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/mahendra-reddy-ganapam-4778a519a/"
            className="iconsLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icons" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCccdkWvJWp7TDLfkNN97Krg"
            className="iconsLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="icons" />
          </a>
        </div>

        <ul className="navLinks">
          <li className="navLinkItem">
            <Link to="/" className={`navLink ${location.pathname === '/' ? 'active' : ''}`}>
              About
            </Link>
          </li>
          <li className="navLinkItem">
            <Link to="/education" className={`navLink ${location.pathname === '/education' ? 'active' : ''}`}>
              Education
            </Link>
          </li>
          <li className="navLinkItem">
            <Link to="/skill" className={`navLink ${location.pathname === '/skill' ? 'active' : ''}`}>
              Skill
            </Link>
          </li>
          <li className="navLinkItem">
            <Link to="/project" className={`navLink ${location.pathname === '/project' ? 'active' : ''}`}>
              Project
            </Link>
          </li>
          <li className="navLinkItem">
            <Link to="/contact" className={`navLink ${location.pathname === '/contact' ? 'active' : ''}`}>
              Contact
            </Link>
          </li>
          <li className="navLinkItem">
            <Link to="/experience" className={`navLink ${location.pathname === '/experience' ? 'active' : ''}`}>
              Experience
            </Link>
          </li>
          <li className="navLinkItem">
            <Link to="/gamehub" className={`navLink ${location.pathname === '/gamehub' ? 'active' : ''}`}>
              GameHub
            </Link>
          </li>
        </ul>

        {/* 🦁🐘🦒🐆🦓 Animal animation */}
        <div className="animal">🦁</div>
        <div className="animal">🐘</div>
        <div className="animal">🦒</div>
        <div className="animal">🐆</div>
        <div className="animal">🐅</div>
        <div className="animal">🦓</div>
        <div className="animal">🐊</div>
        <div className="animal">🐃</div>
        <div className="animal">🦜</div>
        <div className="animal">🐒</div>

        <div className="copyright">
          © {currentYear} GMR. All Rights Reserved.
        </div>

        {/* 🌌 Firefly animation elements */}
        <div className="firefly" style={{ top: '20%', left: '10%', animationDelay: '1s' }}></div>
        <div className="firefly" style={{ top: '40%', left: '60%', animationDelay: '3s' }}></div>
        <div className="firefly" style={{ top: '70%', left: '30%', animationDelay: '5s' }}></div>
        <div className="firefly" style={{ top: '50%', left: '80%', animationDelay: '2s' }}></div>
      </footer>
    </div>
  );
};

export default Footer;

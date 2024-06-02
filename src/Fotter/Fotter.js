import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Fotter.css'; // Import the external CSS file

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className='top'>
    <footer className="footer">
      <div className="socialiconss">
        <a href="https://www.facebook.com/ganapammahendra28/" className="iconsLink"  target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icons" />
        </a>
        <a href="https://twitter.com/Ganapammahendra" className="iconsLink"  target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icons" />
        </a>
        <a href="https://www.instagram.com/ganapam_mahendra_reddy/?hl=en" className="iconsLink"  target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icons" />
        </a>
        <a href="https://www.linkedin.com/in/mahendra-reddy-ganapam-4778a519a/" className="iconsLink"  target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icons" />
        </a>
      </div>
      <ul className="navLinks">
        <li className="navLinkItem">
          <a href="/" className="navLink">About</a>
        </li>
        <li className="navLinkItem">
          <a href="/education" className="navLink">Education</a>
        </li>
        <li className="navLinkItem">
          <a href="/skill" className="navLink">Skill</a>
        </li>
        <li className="navLinkItem">
          <a href="/project" className="navLink">Project</a>
        </li>
        <li className="navLinkItem">
          <a href="/contact" className="navLink">Contact</a>
        </li>
      </ul>
      <div className="copyright">
          <p>&copy; {currentYear} GMR. All Rights Reserved.</p>
        </div>
    </footer>
    </div>
  );
}

export default Footer;

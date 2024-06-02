import React from 'react';
import Header from '../Header/Header';
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin, FaHackerrank, FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import './Contact.css'; // Import your CSS file
import Fotter from '../Fotter/Fotter'

const Contact = () => {
  return (
    <div>
    <div>
      <Header />
      <div className="contact-container">
        <h1>Social Media Accounts</h1>
        <div className="contact-cards">
          <a href="https://github.com/ganapam" className="contact-card" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icons" />
            <div className="contact-info">
              <h2>Github</h2>
              <p>github.com/ganapam</p>
            </div>
          </a>
          <a href="https://www.facebook.com/ganapammahendra28/" className="contact-card" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icons" />
            <div className="contact-info">
              <h2>Facebook</h2>
              <p>www.facebook.com/ganapammahendra28/</p>
            </div>
          </a>
          <a href="https://www.instagram.com/ganapam_mahendra_reddy/?hl=en" className="contact-card" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icons" />
            <div className="contact-info">
              <h2>Instagram</h2>
              <p>www.instagram.com/ganapam_mahendra_reddy/?hl=en</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/mahendra-reddy-ganapam-4778a519a/" className="contact-card" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icons" />
            <div className="contact-info">
              <h2>LinkedIn</h2>
              <p>www.linkedin.com/in/mahendra-reddy-ganapam-4778a519a/</p>
            </div>
          </a>
          <a href="https://www.hackerrank.com/profile/ganapammahendra1" className="contact-card" target="_blank" rel="noopener noreferrer">
            <FaHackerrank className="icons" />
            <div className="contact-info">
              <h2>Hackerrank</h2>
              <p>www.hackerrank.com/profile/ganapammahendra1</p>
            </div>
          </a>
          <a href="mailto:ganapammahendra28@gmail.com" className="contact-card">
            <MdEmail className="icons" />
            <div className="contact-info">
              <h2>Email</h2>
              <p>ganapammahendra28@gmail.com</p>
            </div>
          </a>
          <a href="tel:+917095863146" className="contact-card">
            <MdPhone className="icons" />
            <div className="contact-info">
              <h2>Phone</h2>
              <p>+91 7095863146</p>
            </div>
          </a>
          <div className="contact-card">
            <FaMapMarkerAlt className="icons" />
            <div className="contact-info">
              <h2>Address</h2>
              <p>Country :- India</p>
              <p>State:- Andhra Pradesh </p>
              <p>City:- Nellore </p>
              <p>Zip Code:- 524228 </p>
              <p>Town:- Vinjamur </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Fotter/>
    </div>
  );
}

export default Contact;

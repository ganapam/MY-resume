import React from 'react';
import Header from '../Header/Header';
import './About.css'; // Import the CSS file
import Fotter from '../Fotter/Fotter'
const About = () => {
  const handleNameClick = () => {
    const aboutContainer = document.querySelector('.about-container');
    aboutContainer.classList.toggle('party-mode');
  };
 
  return (
    <div>
      <Header />
      <div className="about-container">
        <div className="profile-container">
          {/* <h1>Profile Photo:</h1> */}
          <div className="profile-wrapper">
          <img className="profile-photo" src="/profile.JPG" alt="Profile" />
            <div className="profile-overlay"></div>
          </div>
        </div>
        <div className="card-container">
        <div className="card centered-card" onClick={handleNameClick}>
  <div className="card-body">
    <h1>Name</h1>
    <p>MAHENDRA REDDY GANAPAM</p>
  </div>
</div>
          <div className="card centered-card"> {/* Centered card */}
            <div className="card-body">
              <h1>Role</h1>
              <p>FRONTEND DEVELOPER</p>
            </div>
          </div>
          {/* Add other cards for different sections */}
          <div className="card summary-card"> {/* Summary card */}
            <div className="card-body">
              <h1>Summary</h1>
              <p>Highly skilled and motivated Software Engineer with extensive expertise in Python programming language, MySQL database management, HTML, CSS, and network concepts. Seeking a challenging position where I can leverage my proficiency in these areas to design and develop innovative web applications that deliver exceptional user experiences. Committed to delivering high-quality, efficient, and secure solutions while continuously expanding my knowledge and staying abreast of emerging technologies in the field. Eager to contribute to a dynamic team and make a meaningful impact in the realm of software development.</p>
            </div>
          </div>
          {/* Add other cards for different sections */}
          <div className="card">
            <div className="card-body">
              <h1>Languages </h1>
              <p>Telugu</p>
              <p>English</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h1>Hobbies</h1>
              <p>Online Games (clash of clans)</p>
              <p>Movies</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h1>Strength</h1>
              <p>NA</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h1>Weakness</h1>
              <p>NA</p>
            </div>
          </div>
        </div>
      </div>
      <Fotter/>
    </div>
  );
}

export default About;

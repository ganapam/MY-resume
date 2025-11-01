import React, { useState } from 'react';
import Header from '../Header/Header';
import Fotter from '../Fotter/Fotter';
import './Experience.css'; // CSS File

  const About = () => {
    const [selectedCard, setSelectedCard] = useState(null);
  
    const experiences = [
      {
        id: 1,
        logo: 'tcslogo.png', // Replace with the actual logo URL
        companyName: 'Tata Consultancy Services',
        role: 'RPA Developer',
        startDate: 'May 2024',
        endDate: new Date().toLocaleString('default', { month: 'long', year: 'numeric' }),
        projectName: 'Robotic Process Automation',
        description: 'Experienced RPA Developer with expertise in Power Automate and UiPath, skilled in analysis, development, testing, deployment, and error handling. Proficient in Python and VBScript, I specialize in creating efficient automation solutions to streamline processes and enhance business efficiency.',
        client: 'Mercedes-Benz',
        getDuration: function () {
          const start = new Date(this.startDate);
          const end = new Date();
          const months =
            (end.getFullYear() - start.getFullYear()) * 12 +
            (end.getMonth() - start.getMonth()) +
            1; // Add 1 to include the current month
          return months;
        }
      },
      // {
      //   id: 2,
      //   logo: 'tcslogo.png', // Replace with the actual logo URL
      //   companyName: 'Tata Consultancy Services',
      //   role: 'RPA Developer',
      //   startDate: 'October 2024',
      //   endDate: new Date().toLocaleString('default', { month: 'long', year: 'numeric' }),
      //   projectName: 'Robotic Process Automation',
      //   description: 'I bring strong expertise in RPA development with Power Automate and UiPath, specializing in the full RPA lifecycle—from analysis and development to testing and deployment—enabling businesses to optimize their processes and achieve operational efficiency',
      //   client: 'Mercedes-Benz',
      //   getDuration: function () {
      //     const start = new Date(this.startDate);
      //     const end = new Date();
      //     const months =
      //       (end.getFullYear() - start.getFullYear()) * 12 +
      //       (end.getMonth() - start.getMonth()) +
      //       1; // Add 1 to include the current month
      //     return months;
      //   }
      // },
    ];
  
    const toggleCard = (id) => {
      setSelectedCard((prev) => (prev === id ? null : id));
    };
  
    const getTotalDuration = () => {
      const totalMonths = experiences.reduce((sum, exp) => sum + exp.getDuration(), 0);
      const years = Math.floor(totalMonths / 12);
      const months = totalMonths % 12;
      return `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`;
    };
  
    return (
      <div>
        <Header />
        <div className="about-container">
          <h1>Experience</h1>
          <div className="total-duration">
            <strong>Total Duration:</strong> <span>{getTotalDuration()}</span>
          </div>
          <div className="experience-cards">
            {experiences.map((exp) => (
              <div key={exp.id} className="card" onClick={() => toggleCard(exp.id)}>
                <img src={exp.logo} alt={`${exp.companyName} logo`} className="card-logo" />
                <div className="card-details">
                  <h3>{exp.companyName}</h3>
                  <div className="card-row">
                    <strong>Role:</strong>
                    <span>{exp.role}</span>
                  </div>
                  <div className="card-row">
                    <strong>Client:</strong>
                    <span>{exp.client}</span>
                  </div>
                  <div className="card-row">
                    <strong>Duration:</strong>
                    <span>{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <div className="card-row">
                    <strong>Project:</strong>
                    <span>{exp.projectName}</span>
                  </div>
                  <div className="card-row">
                    <strong>Duration:</strong>
                    <span>{exp.getDuration()} months</span>
                  </div>
                </div>
                {selectedCard === exp.id && (
  <div className="card-extra">
    <strong className="description-title">Description</strong>
    <p>{exp.description}</p>
  </div>
)}
              </div>
            ))}
          </div>
        </div>
        <Fotter />
      </div>
    );
  };
  
  export default About;
  
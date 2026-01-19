import React, { useState } from 'react';
import Header from '../Header/Header';
import Fotter from '../Fotter/Fotter';
import './Experience.css';

/* ---------- UTIL FUNCTIONS ---------- */

// Convert date to readable format: 12 Jan 2026
const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

// Accurate month calculation using day difference
const getDurationInMonths = (startDate, endDate, isCurrent) => {
  const start = new Date(startDate);
  const end = isCurrent ? new Date() : new Date(endDate);

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1; // ✅ current month included

  return months < 0 ? 0 : months;
};



const monthsToYearsMonths = (totalMonths) => {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return `${years} year${years !== 1 ? 's' : ''} ${months} month${
    months !== 1 ? 's' : ''
  }`;
};

/* ---------- MAIN COMPONENT ---------- */

const About = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const experiences = [
    {
      id: 1,
      logo: 'tcslogo.png',
      companyName: 'Tata Consultancy Services',
      role: 'RPA Developer',
      startDate: '2024-05-23',
      endDate: '2026-01-12', // ✅ 12 Jan 2026
      isCurrent: false,
      projectName: 'Robotic Process Automation',
      description:
        'RPA Developer with hands-on experience in Power Automate and UiPath. Worked on migration and new bot development.',
      client: 'Mercedes-Benz',
    },
    {
      id: 2,
      logo: 'canarys-logo.jpg',
      companyName: 'Canarys Automation Pvt Ltd',
      role: 'RPA Developer',
      startDate: '2026-01-14', // ✅ 14 Jan 2026
      endDate: null,
      isCurrent: true,
      projectName: 'Robotic Process Automation',
      description:
        'Currently working as an RPA Developer focusing on Power Automate and UiPath solutions.',
      client: 'Gallagher',
    },
  ];

  const toggleCard = (id) => {
    setSelectedCard(selectedCard === id ? null : id);
  };

  const getTotalDuration = () => {
    const totalMonths = experiences.reduce(
      (sum, exp) =>
        sum +
        getDurationInMonths(exp.startDate, exp.endDate, exp.isCurrent),
      0
    );

    return monthsToYearsMonths(totalMonths);
  };

  return (
    <div>
      <Header />

      <div className="about-container">
        <h1>Experience</h1>

        <div className="total-duration">
          <strong>Total Experience:</strong> {getTotalDuration()}
        </div>

        <div className="experience-cards">
          {experiences.map((exp) => {
            const months = getDurationInMonths(
              exp.startDate,
              exp.endDate,
              exp.isCurrent
            );

            return (
              <div
                key={exp.id}
                className="card"
                onClick={() => toggleCard(exp.id)}
              >
                <img
                  src={exp.logo}
                  alt={`${exp.companyName} logo`}
                  className="card-logo"
                />

                <div className="card-details">
                  <h3>{exp.companyName}</h3>

                  <div className="card-row">
                    <strong>Role:</strong> {exp.role}
                  </div>

                  <div className="card-row">
                    <strong>Client:</strong> {exp.client}
                  </div>

                  <div className="card-row">
                    <strong>Duration:</strong>{' '}
                    {formatDate(exp.startDate)} –{' '}
                    {exp.isCurrent ? 'Present' : formatDate(exp.endDate)}
                  </div>

                  <div className="card-row">
                    <strong>Project:</strong> {exp.projectName}
                  </div>

                  <div className="card-row">
                    <strong>Total:</strong> {monthsToYearsMonths(months)}
                  </div>
                </div>

                {selectedCard === exp.id && (
                  <div className="card-extra">
                    <strong>Description</strong>
                    <p>{exp.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <Fotter />
    </div>
  );
};

export default About;

import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState(null);
  const [address, setAddress] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  /* ⏱ Live Time */
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  /* 📍 Location + Weather */
  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=11330e75a8a83a647bc1232948121be8`
      )
        .then(res => res.json())
        .then(data => {
          setWeather({
            temp: Math.round(data.main.temp),
            condition: data.weather[0].main
          });
        });

      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      )
        .then(res => res.json())
        .then(data => {
          const a = data.address;
          setAddress({
            area: a.suburb || a.neighbourhood || '',
            city: a.city || a.town || a.village || '',
            state: a.state || ''
          });
        });
    });
  }, []);

  /* 🌤 Greeting */
  const hour = time.getHours();
  const greeting =
    hour < 12 ? 'Good Morning ☀️' :
    hour < 16 ? 'Good Afternoon 🌤️' :
    hour < 19 ? 'Good Evening 🌆' :
    'Good Night 🌙';

  const weatherMap = {
    Clear: '☀️ Clear',
    Clouds: '☁️ Cloudy',
    Rain: '🌧 Rainy',
    Drizzle: '🌦 Light Rain',
    Thunderstorm: '⛈ Storm',
    Haze: '🌫 Dusty',
    Mist: '🌫 Foggy'
  };

  let rainStatus = '';
  if (weather) {
    if (['Rain', 'Drizzle', 'Thunderstorm'].includes(weather.condition))
      rainStatus = '☔ Rain is falling';
    else if (['Clouds', 'Haze', 'Mist'].includes(weather.condition))
      rainStatus = '🌦 Chances of rain';
    else
      rainStatus = '☀️ No rain expected';
  }

  return (
    <header className="header-container" ref={menuRef}>

      {/* LEFT BLOCK */}
      <div className="left-block">
        <h1 className="logo-text">
          <Link to="/" className="glow-link">RESUME</Link>
        </h1>

        <div className="header-info">
  <span className="greeting">{greeting}</span>
  <span className="datetime">{time.toLocaleString('en-IN')}</span>

  {weather && (
    <>
      <span className="weather">
        🌡 {weather.temp}°C · {weatherMap[weather.condition]}
      </span>
      <span className="rain">{rainStatus}</span>
    </>
  )}

  {address && (
    <div className="location-mobile">
      📍 {address.area}, {address.city}, {address.state}
    </div>
  )}
</div>
      </div>

      {/* LOCATION (DESKTOP ONLY) */}
      {address && (
<div className="location-side">
📍 {address.area}, {address.city}, {address.state}
</div>
)}

      {/* HAMBURGER */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* NAV */}
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <ul>
          {[
            ['/', 'About'],
            ['/education', 'Education'],
            ['/skill', 'Skill'],
            ['/project', 'Projects'],
            ['/experience', 'Experience'],
            ['/gamehub', 'GameHub'],
            ['/feedback', 'Feedback'],
            ['/contact', 'Contact']
          ].map(([path, label]) => (
            <li key={path} className={location.pathname === path ? 'active' : ''}>
              <Link to={path} onClick={() => setIsOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

    </header>
  );
};

export default Header;
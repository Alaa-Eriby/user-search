import React, { useState, createContext } from 'react';
import './App.css';
import darkModeImage from './../public/imag/icon-moon.svg';
import lightModeImage from './../public/imag/icon-sun.svg';
import Card from './components/card/Card';

export const DarkModeContext = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <div className={isDarkMode ? 'dark-mode' : 'app-container'}>
        <header className="header">
          <h1>devfinder</h1>
          <div className="mode-toggle" onClick={toggleDarkMode}>
            <span>{isDarkMode ? 'LIGHT' : 'DARK'}</span>
            <img
              src={isDarkMode ? lightModeImage : darkModeImage}
              alt={isDarkMode ? 'Light Mode' : 'Dark Mode'}
              className="mode-image"
            />
          </div>
        </header>
        <Card />
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;

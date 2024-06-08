import React, { useState, useEffect } from 'react';
import './DarkModeToggle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const bodyClass = document.body.classList;
    darkMode ? bodyClass.add('dark-mode') : bodyClass.remove('dark-mode');
  }, [darkMode]);

  return (
    <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
      
    </button>
  );
}

export default DarkModeToggle;

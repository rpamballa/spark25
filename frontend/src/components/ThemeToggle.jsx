import React, {useState, useEffect} from "react";
import {DarkModeSwitch} from "react-toggle-dark-mode";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const toggleDarkMode = (value) => {
    setIsDarkMode(value);
    localStorage.setItem('theme', value ? 'dark' : 'light');
  }

  useEffect(() => {
    const rootElement = document.getElementById('root');
    if(rootElement) {
      rootElement.className = isDarkMode ? 'dark' : 'light';
    }
  },[isDarkMode]);
 
  return (
    <DarkModeSwitch
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={30}
      className="toggle-button"
    />
  );
};

export default ThemeToggle;

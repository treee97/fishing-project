"use client";
import React, { useState } from "react";

const ThemeToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  const themeClass = isDarkMode
    ? "dark-background dark-text"
    : "light-background light-text";

  return (
    <button
      onClick={toggleTheme}
      className={`fixed bottom-4 right-4 p-2 rounded-full bg-gray-800 text-white ${themeClass}`}
    >
      {isDarkMode ? "Light" : "Dark"} Mode
    </button>
  );
};

export default ThemeToggleButton;

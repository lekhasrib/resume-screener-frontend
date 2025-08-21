import React from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="navbar">
      <h1>Resume Screener</h1>
      <button className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;

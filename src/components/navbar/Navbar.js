import React, { useEffect, useState } from "react";

import "./Navbar.css";
import NavbarLargeScreen from "./NavbarLargeScreen";
import NavbarSmallScreen from "./NavbarSmallScreen";

const Navbar = ({ isLargeScreen, setIsLargeScreen }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="absolute top-0 left-0 right-0">
      {isLargeScreen ? (
        <NavbarLargeScreen darkMode={darkMode} toggleTheme={toggleTheme} />
      ) : (
        <NavbarSmallScreen darkMode={darkMode} toggleTheme={toggleTheme} />
      )}
    </div>
  );
};

export default Navbar;

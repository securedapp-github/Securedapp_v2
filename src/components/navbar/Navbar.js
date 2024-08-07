import React, { useEffect, useState } from "react";

import "./Navbar.css";
import NavbarLargeScreen from "./NavbarLargeScreen";
import NavbarSmallScreen from "./NavbarSmallScreen";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ isLargeScreen, setIsLargeScreen }) => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  let nextPath;

  const currentPath = location.pathname;

  switch (currentPath) {
    case "/product":
    case "/service":
      nextPath = "/login";
      break;
    default:
      nextPath = null;
  }

  const handleNavigation = () => {
    if (nextPath) navigate(nextPath);
    else {
      // TODO: Add Callback for Request Quote button
    }
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="absolute top-0 left-0 right-0">
      {isLargeScreen ? (
        <NavbarLargeScreen
          handleNavigation={handleNavigation}
          nextPath={nextPath}
          darkMode={darkMode}
          toggleTheme={toggleTheme}
        />
      ) : (
        <NavbarSmallScreen
          handleNavigation={handleNavigation}
          nextPath={nextPath}
          darkMode={darkMode}
          toggleTheme={toggleTheme}
        />
      )}
    </div>
  );
};

export default Navbar;

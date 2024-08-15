import React, { useEffect, useState } from "react";

import "./Navbar.css";
import NavbarLargeScreen from "./NavbarLargeScreen";
import NavbarSmallScreen from "./NavbarSmallScreen";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ isLargeScreen, setIsLargeScreen, openRequestModal }) => {
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
    if (darkMode) {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.body.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0">
      {isLargeScreen ? (
        <NavbarLargeScreen
          handleNavigation={handleNavigation}
          nextPath={nextPath}
          darkMode={darkMode}
          toggleTheme={toggleTheme}
          openRequestModal={openRequestModal}
        />
      ) : (
        <NavbarSmallScreen
          handleNavigation={handleNavigation}
          nextPath={nextPath}
          darkMode={darkMode}
          toggleTheme={toggleTheme}
          openRequestModal={openRequestModal}
        />
      )}
    </div>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";

import "./Navbar.css";
import NavbarLargeScreen from "./NavbarLargeScreen";
import NavbarSmallScreen from "./NavbarSmallScreen";
import { useLocation } from "react-router-dom";

const Navbar = ({ isLargeScreen, setIsLargeScreen }) => {
  const [darkMode, setDarkMode] = useState(false);
  const currenLocation = useLocation();
  const path = currenLocation.pathname;
  let location = null;

  const dataset = [
    {
      path: "/product",
      to: "/hello", // TODO: Add Login Link
    },
    {
      path: "/service",
      to: "/hello", // TODO: Add Login Link
    },
  ];

  dataset.forEach((item) => {
    if (item.path === path) {
      console.log(item.path, path);
      location = item.to;
      console.log(location);
    }
  });

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="absolute top-0 left-0 right-0">
      {isLargeScreen ? (
        <NavbarLargeScreen
          location={location}
          darkMode={darkMode}
          toggleTheme={toggleTheme}
        />
      ) : (
        <NavbarSmallScreen
          location={location}
          darkMode={darkMode}
          toggleTheme={toggleTheme}
        />
      )}
    </div>
  );
};

export default Navbar;

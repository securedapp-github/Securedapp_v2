import React, { useEffect, useState } from "react";

import "./Navbar.css";
import NavbarLargeScreen from "./NavbarLargeScreen";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isLargeScreen ? (
    <NavbarLargeScreen darkMode={darkMode} toggleTheme={toggleTheme} />
  ) : (
    <div></div>
  );
};

export default Navbar;

import React, { useEffect } from "react";

import "./Navbar.css";
import NavbarLargeScreen from "./NavbarLargeScreen";
import NavbarSmallScreen from "./NavbarSmallScreen";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  getHomeSelector,
  setIsRequestModalOpen,
  setDarkMode,
} from "../../redux/slices/main/homeSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { darkMode, isLargeScreen } = useSelector(getHomeSelector);

  const location = useLocation();
  const navigate = useNavigate();
  let nextPath;

  const currentPath = location.pathname;

  switch (currentPath) {
    case "/solidity-shield":
      nextPath = "/solidity-shield-scan";
      break;
    case "/secure-watch":
      nextPath = "https://securewatch.securedapp.io/";
      break;
    case "/secure-pad":
      nextPath = "https://securepad.xyz/";
      break;
    default:
      nextPath = null;
  }

  const handleNavigation = () => {
    if (nextPath) window.open(nextPath);
    else {
      dispatch(setIsRequestModalOpen(true));
    }
  };

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    dispatch(setDarkMode(!darkMode));
    // if (darkMode === true) {
    //   localStorage.theme = "light";
    //   dispatch(setDarkMode(false));
    //   document.body.classList.toggle("light");
    // } else {
    //   localStorage.theme = "dark";
    //   dispatch(setDarkMode(true));
    //   document.body.classList.toggle("dark");
    // }
  };

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.body.classList.add("dark");
      dispatch(setDarkMode(true));
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

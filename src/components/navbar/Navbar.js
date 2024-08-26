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

  const setModeDark = () => {
    document.body.classList.add("dark");
    dispatch(setDarkMode(true));
    localStorage.theme = "dark";
  };

  const setModeLight = () => {
    document.body.classList.remove("dark");
    dispatch(setDarkMode(false));
    localStorage.theme = "light";
  };

  const toggleTheme = () => {
    if (darkMode === true) {
      setModeLight();
    } else {
      setModeDark();
    }
  };

  useEffect(() => {
    if (localStorage.theme) {
      if (localStorage.theme === "dark") {
        setModeDark();
      } else if (localStorage.theme === "light") {
        setModeLight();
      }
    } else {
      if (darkMode) {
        setModeDark();
      } else {
        setModeLight();
      }
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

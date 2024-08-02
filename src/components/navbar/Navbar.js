import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { navItems } from "./navItems";
import NavbarItem from "./NavbarItem";
import Button from "../common/Button";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  const [dropDown, setDropDown] = useState("");

  return (
    <nav className="py-6 px-10 font-nunito font-light text-base text-secondary dark:text-primary flex justify-between items-center">
      <div>
        <Link to="/">
          <img src="/assets/images/securedapp_logo.svg" alt="logo" />
        </Link>
      </div>
      <div className="bg-cardBackgroundLight dark:bg-cardBackgroundDark px-4  rounded-full border-2 border-cardBorderColorLight dark:border-cardBorderColorDark flex items-center space-x-6">
        {navItems.map((item) => {
          return (
            <NavbarItem
              to={item["to"]}
              items={item["items"]}
              dropDown={dropDown}
              setDropDown={setDropDown}
              darkMode={darkMode}>
              {item["label"]}
            </NavbarItem>
          );
        })}
      </div>
      <div className="flex space-x-4 items-center">
        <button onClick={toggleTheme}>
          <FontAwesomeIcon
            icon={darkMode ? faMoon : faSun}
            color={darkMode ? "white" : "black"}
            size="lg"
          />
        </button>
        <Button text="Request Quota" onClick={{}}></Button>
      </div>
    </nav>
  );
};

export default Navbar;

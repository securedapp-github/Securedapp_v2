import NavbarItem from "./NavbarItem";
import { navItems } from "./navItems";
import { useState } from "react";
import Button from "../common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Logo from "../common/Logo";

const NavbarLargeScreen = ({ darkMode, toggleTheme }) => {
  const [dropDown, setDropDown] = useState("");

  return (
    <nav className="lg:py-6 lg:px-10 py-4 px-8 font-nunito font-light text-base text-secondary dark:text-primary flex justify-between items-center">
      <div>
        <Logo />
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

export default NavbarLargeScreen;

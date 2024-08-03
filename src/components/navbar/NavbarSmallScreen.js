import {
  faBars,
  faChevronDown,
  faChevronUp,
  faClose,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import { navItems } from "./navItems";
import Button from "../common/Button";

const NavbarSmallScreen = ({ darkMode, toggleTheme }) => {
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const [dropDown, setDropDown] = useState("");

  const showSideBar = () => setSideBarOpen(true);
  const closeSideBar = () => setSideBarOpen(false);

  const selectNestedNavItem = (label) => {
    if (label === dropDown) {
      setDropDown("");
    } else {
      setDropDown(label);
    }
  };

  return (
    <div className="navbar-small-screen">
      <div className="flex items-center justify-between">
        <div className="absolute left-3 cursor-pointer" onClick={showSideBar}>
          <FontAwesomeIcon
            icon={faBars}
            color={darkMode ? "white" : "black"}
            size="lg"
          />
        </div>
        <div className="mx-auto">
          <Logo />
        </div>
      </div>
      {isSideBarOpen && (
        <div className="sidebar-background">
          <div className="sidebar">
            <div className="sidebar-header">
              <Logo />
              <div className="flex space-x-3 items-center">
                <button onClick={toggleTheme}>
                  <FontAwesomeIcon
                    icon={darkMode ? faMoon : faSun}
                    color={darkMode ? "white" : "black"}
                    size="sm"
                  />
                </button>
                <FontAwesomeIcon
                  icon={faClose}
                  color={darkMode ? "white" : "black"}
                  size="md"
                  className="cursor-pointer"
                  onClick={closeSideBar}
                />
              </div>
            </div>
            <nav className="sidebar-items">
              {navItems.map((item) => {
                return (
                  <div>
                    <div
                      className="sidebar-item"
                      onClick={() => selectNestedNavItem(item["label"])}>
                      <p className="sidebar-item-label">{item["label"]}</p>
                      {item["items"].length > 0 && (
                        <div>
                          <FontAwesomeIcon
                            icon={
                              dropDown === item["label"]
                                ? faChevronUp
                                : faChevronDown
                            }
                            color={darkMode ? "white" : "primary"}
                            size="xs"
                          />
                        </div>
                      )}
                    </div>
                    {dropDown === item["label"] && (
                      <div className="nested-sidebar-items">
                        {item["items"].map((nestedItem) => {
                          return (
                            <Link
                              className="nested-sidebar-item"
                              to={nestedItem["to"]}>
                              {nestedItem["name"]}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
            <div className="w-full text-center py-3 px-2">
              <Button
                className="w-full"
                text="Request Quota"
                onClick={{}}></Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarSmallScreen;

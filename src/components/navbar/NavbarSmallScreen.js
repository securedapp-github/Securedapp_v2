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

const NavbarSmallScreen = ({
  handleNavigation,
  nextPath,
  darkMode,
  toggleTheme,
}) => {
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const [dropDown, setDropDown] = useState("");
  const [servicesDropDown, setServicesDropDown] = useState("");

  const showSideBar = () => setSideBarOpen(true);
  const closeSideBar = () => setSideBarOpen(false);

  const selectNestedNavItem = (label) => {
    if (label === dropDown) {
      setDropDown("");
    } else {
      setDropDown(label);
    }
  };

  const selectServicesDropDown = (label) => {
    if (label === servicesDropDown) {
      setServicesDropDown("");
    } else {
      setServicesDropDown(label);
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
              <Logo isLeft={true} />
              <div className="flex space-x-3 items-center">
                <button onClick={toggleTheme}>
                  {darkMode ? (
                    <i class="fa-regular fa-brightness"></i>
                  ) : (
                    <i class="fa-regular fa-moon"></i>
                  )}
                </button>
                <FontAwesomeIcon
                  icon={faClose}
                  color={darkMode ? "white" : "black"}
                  size="lg"
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
                          return nestedItem["title"] ? (
                            <div
                              onClick={() =>
                                selectServicesDropDown(nestedItem["title"])
                              }
                              className="services-nested-sidebar-item">
                              <div className="services-nested-sidebar-item-header">
                                {nestedItem["title"]}
                                <FontAwesomeIcon
                                  icon={
                                    servicesDropDown === nestedItem["title"]
                                      ? faChevronUp
                                      : faChevronDown
                                  }
                                  color={darkMode ? "white" : "primary"}
                                  size="xs"
                                />
                              </div>
                              {servicesDropDown === nestedItem["title"] && (
                                <div className="services-nested-sidebar-body-items">
                                  {nestedItem["children"].map(
                                    (servicesItem) => {
                                      return (
                                        <Link
                                          to={servicesItem.to}
                                          className="services-nested-sidebar-body-item">
                                          {servicesItem.name}
                                        </Link>
                                      );
                                    }
                                  )}
                                </div>
                              )}
                            </div>
                          ) : (
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
              {nextPath ? (
                <Button text={"Login"} onClick={handleNavigation} />
              ) : (
                <Button
                  text="Request Quote"
                  onClick={handleNavigation}></Button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarSmallScreen;

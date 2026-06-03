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
import Link from "next/link";
import Logo from "../common/Logo";
import { navItems } from "./navItems";
import Button from "../common/Button";
import ThemeToggle from "../common/ThemeToggle";

const NavbarSmallScreen = ({
  handleNavigation,
  nextPath,
  darkMode,
  toggleTheme,
  buttonText = "Login",
  isMainPage
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
    <div className="navbar-small-screen relative pb-2 pt-2">
      <div className="flex items-center justify-between relative px-2 mb-2">
        <button
          className="absolute left-3 cursor-pointer mt-1"
          onClick={showSideBar}
          aria-label="Open menu"
        >
          <FontAwesomeIcon
            icon={faBars}
            color={darkMode ? "white" : "black"}
            size="lg"
          />
        </button>
        <div className="mx-auto">
          <Logo />
        </div>
        {isMainPage && (
          <div className="absolute right-3 cursor-pointer">
            <ThemeToggle toggleTheme={toggleTheme} darkMode={darkMode} />
          </div>
        )}
      </div>
      {isSideBarOpen && (
        <div className="sidebar-background">
          <div className="sidebar">
            <div className="sidebar-header">
              <Logo isLeft={true} />
              <div className="flex space-x-3 items-center">
                <button
                  onClick={closeSideBar}
                  aria-label="Close menu"
                  className="cursor-pointer"
                >
                  <FontAwesomeIcon
                    icon={faClose}
                    color={darkMode ? "white" : "black"}
                    size="lg"
                  />
                </button>
              </div>
            </div>
            <nav className="sidebar-items" style={{ overflowY: "auto", maxHeight: "calc(100vh - 140px)", WebkitOverflowScrolling: "touch" }}>
              {navItems.map((item) => {
                return (
                  <div>
                    {item["items"].length > 0 ? (
                      <div
                        className="sidebar-item"
                        onClick={() => selectNestedNavItem(item["label"])}
                      >
                        <p className="sidebar-item-label">{item["label"]}</p>
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
                      </div>
                    ) : (
                      <Link
                        href={item["to"]}
                        className="sidebar-item"
                        onClick={closeSideBar}
                      >
                        <p className="sidebar-item-label">{item["label"]}</p>
                      </Link>
                    )}
                    {dropDown === item["label"] && (
                      <div className="nested-sidebar-items">
                        {item["items"].map((nestedItem) => {
                          return nestedItem["title"] ? (
                            <div
                              onClick={() =>
                                selectServicesDropDown(nestedItem["title"])
                              }
                              className="services-nested-sidebar-item"
                            >
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
                                        servicesItem.to && (
                                          <Link
                                            href={servicesItem.to}
                                            className="services-nested-sidebar-body-item"
                                          >
                                            {servicesItem.name}
                                          </Link>
                                        )
                                      );
                                    }
                                  )}
                                </div>
                              )}
                            </div>
                          ) : (
                            nestedItem["to"] &&
                            (nestedItem.external ? (
                              <a
                                className="nested-sidebar-item"
                                href={nestedItem["to"]}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {nestedItem["name"]}
                              </a>
                            ) : (
                              <Link
                                className="nested-sidebar-item"
                                href={nestedItem["to"]}
                              >
                                {nestedItem["name"]}
                              </Link>
                            ))
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
                text={buttonText} 
                onClick={handleNavigation} 
                filled={buttonText === "Request Quote"}
                className={buttonText === "Request Quote" ? "font-semibold px-4" : ""}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarSmallScreen;

"use client";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const NavbarItem = ({
  to,
  children,
  darkMode,
  dropDown,
  setDropDown,
  items = [],
}) => {
  const handleMouseEnter = () => setDropDown(children);
  const handleMouseLeave = () => setDropDown("");

  return (
    <div
      className="navbar-item"
      onMouseOver={handleMouseEnter}
      onMouseOut={handleMouseLeave}
    >
      <a href={to}>
        <div className="navbar-item-primary">
          <p
            onClick={() =>
              children === "Pricing" &&
              typeof window !== "undefined" &&
              window.open("/solidity-shield-scan/pricing")
            }
          >
            {children}
          </p>
          {items.length > 0 && (
            <FontAwesomeIcon
              icon={faChevronDown}
              color={darkMode ? "white" : "primary"}
              size="xs"
            />
          )}
        </div>
      </a>
      {items.length > 0 && dropDown === children && (
        <div
          className={`nested-navbar ${
            children === "Services" && "left-1/2 transform -translate-x-1/2"
          }`}
        >
          {/* <div className="nested-navbar-header">{children}</div> */}
          {/* <hr className="border my-2 border-cardBorderColorLight dark:border-cardBorderColorDark"></hr> */}
          {children !== "Services" ? (
            <div className="nested-navbar-items">
              {items.map((item) => {
                return (
                  <a className="nested-navbar-item" href={item["to"]}>
                    <p>{item["name"]}</p>
                  </a>
                );
              })}
            </div>
          ) : (
            <div className="nested-navbar-items-services">
              {items.map((item) => {
                return (
                  <div className="nested-navbar-items-services-card-col">
                    <div className="nested-navbar-items-services-card-col-header">
                      {item.title}
                    </div>
                    <div className="nested-navbar-items-services-card-col-items">
                      {item.children.map((child) => {
                        return (
                          <a
                            href={child.to}
                            className="nested-navbar-items-services-card-col-item"
                          >
                            <p>{child.name}</p>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NavbarItem;

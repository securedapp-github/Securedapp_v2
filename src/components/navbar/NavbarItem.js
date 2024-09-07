import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

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
      <Link to={to}>
        <div className="navbar-item-primary">
          <p
            onClick={() =>
              children === "Pricing" &&
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
      </Link>
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
                  <Link className="nested-navbar-item" to={item["to"]}>
                    <p>{item["name"]}</p>
                  </Link>
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
                          <Link
                            to={child.to}
                            className="nested-navbar-items-services-card-col-item"
                          >
                            <p>{child.name}</p>
                          </Link>
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

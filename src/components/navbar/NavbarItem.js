import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import CustomHr from "../common/CustomHr";

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
      onMouseOut={handleMouseLeave}>
      <Link to={to}>
        <div className="navbar-item-primary">
          <p>{children}</p>
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
        <div className="nested-navbar">
          <div className="nested-navbar-header">{children}</div>
          <hr className="border my-2 border-cardBorderColorLight dark:border-cardBorderColorDark"></hr>
          <div className="nested-navbar-items">
            {items.map((item) => {
              return (
                <Link className="nested-navbar-item" to={item["to"]}>
                  <p>{item["name"]}</p>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarItem;

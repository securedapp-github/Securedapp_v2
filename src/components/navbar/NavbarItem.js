import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const NavbarItem = ({ to, children, darkMode, showIcon = true }) => {
  return (
    <Link to={to}>
      <div className="navbar-item">
        <p>{children}</p>
        {showIcon && (
          <FontAwesomeIcon
            icon={faChevronDown}
            color={darkMode ? "white" : "primary"}
            size="xs"
          />
        )}
      </div>
    </Link>
  );
};

export default NavbarItem;

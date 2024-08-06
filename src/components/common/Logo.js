import { Link } from "react-router-dom";

const Logo = ({ isLeft = false, className = "" }) => {
  return (
    <Link
      className={`flex ${
        isLeft ? "justify-start" : "justify-center"
      } ${className}`}
      to="/">
      <img
        src="/assets/images/securedapp_logo.svg"
        alt="logo"
        className="w-2/3 lg:w-3/4 h-auto"
      />
    </Link>
  );
};

export default Logo;

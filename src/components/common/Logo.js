import { Link } from "react-router-dom";

const Logo = ({ isLeft = false, className = "" }) => {
  return (
    <Link
      className={`flex ${
        isLeft ? "justify-start" : "justify-center"
      } ${className}`}
      to="/">
      <img
        src="/assets/images/securedapp-logo-light.svg"
        alt="logo"
        className="w-[120px] lg:w-[150px] h-auto dark:hidden"
      />
      <img
        src="/assets/images/securedapp-logo-dark.svg"
        alt="logo"
        className="w-[120px] lg:w-[150px] h-auto hidden dark:block"
      />
    </Link>
  );
};

export default Logo;

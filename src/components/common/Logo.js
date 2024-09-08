import Link from "next/link";
import Image from "next/image";

const Logo = ({ isLeft = false, className = "" }) => {
  return (
    <a
      className={`flex ${
        isLeft ? "justify-start" : "justify-center"
      } ${className}`}
      href="/"
    >
      <img
        layout="intrinsic"
        src="/assets/images/securedapp-logo-light.svg"
        alt="logo"
        className="w-[120px] lg:w-[150px] h-auto dark:hidden"
      />
      <img
        layout="intrinsic"
        src="/assets/images/securedapp-logo-dark.svg"
        alt="logo"
        className="w-[120px] lg:w-[150px] h-auto hidden dark:block"
      />
    </a>
  );
};

export default Logo;

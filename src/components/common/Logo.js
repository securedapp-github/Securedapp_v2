import Link from "next/link";
import Image from "next/image";

const Logo = ({ isLeft = false, className = "", forceDark = false }) => {
  return (
    <Link
      className={`flex ${
        isLeft ? "justify-start" : "justify-center"
      } ${className}`}
      href="/"
    >
      <Image
        src="/assets/images/securedapp-logo-light.svg"
        alt="logo"
        width={150}
        height={40}
        priority
        className={`w-[120px] lg:w-[150px] h-auto ${forceDark ? "hidden" : "dark:hidden"}`}
      />
      <Image
        src="/assets/images/securedapp-logo-dark.svg"
        alt="logo"
        width={150}
        height={40}
        priority
        className={`w-[120px] lg:w-[150px] h-auto ${forceDark ? "block" : "hidden dark:block"}`}
      />
    </Link>
  );
};

export default Logo;

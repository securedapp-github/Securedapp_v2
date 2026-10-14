
import Link from "next/link";
import Image from "next/image";

const AuthScrenHeader = ({ title, description, showLogo = true }) => {
  return (
    <div className="auth-screen-header flex flex-col items-center justify-center text-center gap-y-3 mb-2">
      {showLogo && (
        <Link
          href="/"
          className="mb-1 group inline-flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105"
        >
          <div className="px-5 py-2.5 rounded-2xl bg-white/[0.04] dark:bg-white/[0.03] border border-white/10 shadow-[0_0_25px_rgba(18,213,118,0.15)] flex items-center justify-center backdrop-blur-md">
            <Image
              src="/assets/images/securedapp-logo-dark.svg"
              alt="SecureDApp"
              width={160}
              height={40}
              priority
              className="h-8 w-auto object-contain"
            />
          </div>
        </Link>
      )}
      <div className="auth-screen-header-title text-2xl sm:text-3xl font-bold text-white font-outfit">
        {title}
      </div>
      {description && (
        <div className="auth-screen-header-description text-xs sm:text-sm text-gray-400 font-nunitoSans max-w-md">
          {description}
        </div>
      )}
    </div>
  );
};

export default AuthScrenHeader;

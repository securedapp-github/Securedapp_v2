import React from "react";
import Link from "next/link";
import Image from "next/image";
import AuthButton from "../../components/auth/AuthButton";
import AuthCard from "../../components/auth/AuthCard";
import AuthInputField from "../../components/auth/AuthInputField";
import AuthLogos from "../../components/auth/AuthLogos";
import AuthScrenHeader from "../../components/auth/AuthScreenHeader";

const RegisterScreen = () => {
  return (
    <div className="auth-screen-container py-10 px-4 min-h-screen flex items-center justify-center font-outfit">
      <div className="auth-screen w-full max-w-lg">
        {/* Top Return Navigation Bar */}
        <div className="w-full mb-4 flex items-center justify-between text-xs font-nunitoSans px-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors py-1.5 px-3 rounded-lg hover:bg-white/5"
          >
            <span className="text-base">&larr;</span> Back to Homepage
          </Link>
          <Link
            href="/"
            title="SecureDApp Home"
            className="group inline-flex items-center transition-all duration-200 hover:opacity-90"
          >
            <Image
              src="/assets/images/securedapp-logo-dark.svg"
              alt="SecureDApp"
              width={140}
              height={36}
              priority
              className="h-7 sm:h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>
        </div>

        <AuthScrenHeader
          title={"Create your account"}
          description={"Get started with Solidity Shield to secure and audit your smart contracts."}
          showLogo={false}
        />
        <div className="auth-screen-body mt-4 w-full">
          <AuthCard footer={true} isLogin={false}>
            <AuthInputField
              authInputType={"text"}
              placeholder={"First & Last Name"}
            />
            <AuthInputField
              authInputType={"email"}
              placeholder={"Email Address"}
            />
            <AuthInputField
              authInputType={"password"}
              placeholder={"Create Password"}
            />
            <div className="login-screen-body-options">
              <div className="login-screen-remember-me">
                <input type="checkbox" />
                <div>
                  I agree with the{" "}
                  <span className="text-[#2563EB] cursor-pointer">
                    Terms & Conditions
                  </span>{" "}
                  of SecureDApp
                </div>
              </div>
            </div>
            <AuthButton children={"Sign Up"} onClick={() => {}} />
            {/* <AuthButton filled={false}>
              <div className="auth-screen-google">
                <img   
                  src="/assets/images/solidity-shield-scan/google-logo.svg"
                  alt="Google Logo"
                />
                <div>Sign in With Google</div>
              </div>
            </AuthButton> */}
            <div className="auth-logos-cards">
              <AuthLogos imagePath="/assets/images/solidity-shield-scan/google-logo.svg" />
              <AuthLogos imagePath="/assets/images/solidity-shield-scan/metamask.svg" />
              <AuthLogos imagePath="/assets/images/solidity-shield-scan/github-icon.svg" />
            </div>
          </AuthCard>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;

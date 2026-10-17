import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AuthButton from "../../components/auth/AuthButton";
import AuthCard from "../../components/auth/AuthCard";
import AuthInputField from "../../components/auth/AuthInputField";
import AuthLogos from "../../components/auth/AuthLogos";
import AuthScrenHeader from "../../components/auth/AuthScreenHeader";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

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
          title={"Sign in to your account"}
          description={"Enter your credentials to access smart contract security audits, vulnerability reports, and AI scanning."}
          showLogo={false}
        />

        <div className="auth-screen-body mt-4 w-full">
          <AuthCard footer={true} isLogin={true}>

            {/* Email & Password Input Fields */}
            <div className="space-y-4 pt-1">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  Email Address
                </label>
                <AuthInputField
                  authInputType={"email"}
                  placeholder={"name@company.com"}
                  value={email}
                  onChange={setEmail}
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  Password
                </label>
                <AuthInputField
                  authInputType={"password"}
                  placeholder={"••••••••"}
                  value={password}
                  onChange={setPassword}
                  required
                />
              </div>
            </div>

            <div className="login-screen-body-options text-xs text-gray-400 font-nunitoSans pt-1">
              <label className="login-screen-remember-me flex items-center gap-2 cursor-pointer hover:text-gray-200 transition-colors">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-gray-600 text-tertiary focus:ring-tertiary/50 bg-[#071317] cursor-pointer"
                />
                <span>Remember Me</span>
              </label>
              <Link href="/solidity-shield-scan/contact" className="hover:text-tertiary transition-colors">
                Forgot Password?
              </Link>
            </div>

            <AuthButton onClick={() => {}}>
              Sign In
            </AuthButton>

            <div className="relative flex items-center justify-center my-1">
              <div className="border-t border-[#1E293B] w-full" />
              <span className="bg-[#0F1729] px-3 text-[11px] font-mono text-gray-400 uppercase tracking-widest absolute">
                Or Connect With
              </span>
            </div>

            <div className="auth-logos-cards pt-1">
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

export default LoginScreen;

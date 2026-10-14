import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import AuthButton from "../../components/auth/AuthButton";
import AuthCard from "../../components/auth/AuthCard";
import AuthInputField from "../../components/auth/AuthInputField";
import AuthScrenHeader from "../../components/auth/AuthScreenHeader";
import { sendOTP, verifyOTP, getUser } from "../../functions";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, login } from "../../redux/auth/authSlice";

const AuthScreen = () => {
  const dispatch = useDispatch();
  const auth = useSelector(getUserData);
  const user = auth.user;
  const navigate = useRouter();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [button, setButton] = useState("Send OTP");
  const [isLoading, setIsLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [lockoutUntil, setLockoutUntil] = useState(0);

  // Auto-redirect if already authenticated
  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("UserJwtToken")) {
      navigate.push("/solidity-shield-scan/overview");
    }
  }, [navigate]);

  // Handle countdown timer for OTP resend cooldown
  useEffect(() => {
    let timer;
    if (cooldown > 0) {
      timer = setInterval(() => {
        setCooldown((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [cooldown]);

  const handleSendOtp = async () => {
    if (Date.now() < lockoutUntil) {
      const waitSeconds = Math.ceil((lockoutUntil - Date.now()) / 1000);
      toast.error(`Too many attempts. Please wait ${waitSeconds}s before retrying.`);
      return;
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (cooldown > 0) {
      toast.info(`Please wait ${cooldown}s before requesting a new OTP`);
      return;
    }

    setIsLoading(true);
    try {
      await sendOTP({
        email,
        dispatch,
        selector: user,
      });
      setButton("Log In");
      setCooldown(60); // 60s cooldown to prevent spamming
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (Date.now() < lockoutUntil) {
      const waitSeconds = Math.ceil((lockoutUntil - Date.now()) / 1000);
      toast.error(`Too many attempts. Please wait ${waitSeconds}s before retrying.`);
      return;
    }

    if (!otp || String(otp).trim().length === 0) {
      toast.error("Please enter the verification OTP");
      return;
    }

    setIsLoading(true);
    try {
      const result = await verifyOTP({ email, otp: String(otp).trim(), dispatch });
      if (!result) {
        const nextFailed = failedAttempts + 1;
        setFailedAttempts(nextFailed);
        if (nextFailed >= 5) {
          const lockTime = Date.now() + 120000; // 2 minute lockout
          setLockoutUntil(lockTime);
          toast.error("Too many failed attempts. Temporary lockout for 2 minutes.");
        }
      } else {
        setFailedAttempts(0);
      }
    } catch (err) {
      console.error(err);
      const nextFailed = failedAttempts + 1;
      setFailedAttempts(nextFailed);
      if (nextFailed >= 5) {
        setLockoutUntil(Date.now() + 120000);
        toast.error("Too many failed attempts. Temporary lockout for 2 minutes.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-screen-container py-10 px-4">
      <div className="auth-screen">
        {/* Navigation Back to Homepage (Fixes Finding 3) */}
        <div className="w-full max-w-lg mx-auto mb-4 flex items-center justify-between text-xs font-nunitoSans">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors py-1.5 px-3 rounded-lg hover:bg-white/5"
          >
            <span className="text-base">&larr;</span> Back to Homepage
          </Link>
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <img
              src="/assets/images/securedapp_logo.svg"
              alt="SecureDApp"
              className="h-6 object-contain"
            />
          </Link>
        </div>

        <AuthScrenHeader
          title={"Sign in to your account"}
          description={
            "Solidity Shield: Instantly scan your smart contracts, uncover vulnerabilities with fixes, get a safety score, and download a full audit report—all in under a minute!"
          }
          showLogo={false}
        />

        <div className="auth-screen-body">
          <AuthCard>
            {/* Brand Logo inside the login menu */}
            <div className="flex flex-col items-center justify-center pb-5 pt-1 border-b border-[#1E293B]">
              <Link href="/" className="group inline-flex flex-col items-center transition-transform hover:scale-105 duration-200 cursor-pointer">
                <div className="px-4 py-2.5 rounded-xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 shadow-[0_0_25px_rgba(18,213,118,0.18)] flex items-center justify-center backdrop-blur-md">
                  <Image
                    src="/assets/images/securedapp-logo-dark.svg"
                    alt="SecureDApp Logo"
                    width={150}
                    height={38}
                    priority
                    className="h-7 sm:h-8 w-auto object-contain"
                  />
                </div>
              </Link>
              <div className="flex items-center gap-2 mt-3 font-mono text-[11px] text-tertiary">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
                <span className="tracking-wider uppercase font-semibold">Solidity Shield // Secure Login</span>
              </div>
            </div>

            <AuthInputField
              authInputType={"email"}
              placeholder={"Email Address"}
              onChange={setEmail}
              regexCheck={/^\S+@\S+\.\S+$/}
              message={"Invalid Email"}
              disabled={button === "Log In" && cooldown > 0}
            />

            {/* OTP Field - Defer length validation to prevent disclosure (Fixes Finding 1) */}
            {button === "Log In" && (
              <div className="space-y-2">
                <AuthInputField
                  authInputType={"text"}
                  placeholder={"Enter verification code"}
                  onChange={setOtp}
                  maxLength={8}
                  autoComplete="one-time-code"
                />
                <div className="flex items-center justify-between text-xs px-1 text-gray-400">
                  <button
                    type="button"
                    onClick={() => {
                      setButton("Send OTP");
                      setOtp("");
                    }}
                    className="hover:text-tertiary transition-colors"
                  >
                    Change email
                  </button>
                  {cooldown > 0 ? (
                    <span className="font-mono text-[11px] text-gray-400">
                      Resend in {cooldown}s
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      className="text-tertiary hover:underline font-semibold"
                    >
                      Resend OTP
                    </button>
                  )}
                </div>
              </div>
            )}

            <AuthButton
              disabled={isLoading}
              onClick={button === "Send OTP" ? handleSendOtp : handleVerifyOtp}
            >
              {isLoading ? "Processing..." : button}
            </AuthButton>

            {/* Return Link Footer */}
            <div className="text-center pt-2 text-xs text-gray-400">
              Need help?{" "}
              <Link
                href="/solidity-shield-scan/contact"
                className="text-tertiary hover:underline"
              >
                Contact Support
              </Link>
            </div>
          </AuthCard>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;

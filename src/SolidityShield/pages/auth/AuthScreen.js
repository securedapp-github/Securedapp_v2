import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { sendOTP, verifyOTP } from "../../functions";
import { getUserData } from "../../redux/auth/authSlice";

const AuthScreen = () => {
  const dispatch = useDispatch();
  const auth = useSelector(getUserData);
  const user = auth?.user;
  const router = useRouter();

  // Screen state: 1 = Email entry, 2 = OTP entry
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  // 4-digit OTP
  const [otp, setOtp] = useState(["", "", "", ""]);

  const [isLoading, setIsLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [isError, setIsError] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const inputRefs = useRef([]);
  const isVerifyingRef = useRef(false);
  const autoSubmitTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (autoSubmitTimeoutRef.current) {
        clearTimeout(autoSubmitTimeoutRef.current);
      }
    };
  }, []);

  // Auto-redirect if already authenticated
  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("UserJwtToken")) {
      const storedRedirect = localStorage.getItem("redirectAfterAuth");
      const targetUrl = storedRedirect || "/solidity-shield-scan/overview";
      if (storedRedirect) {
        localStorage.removeItem("redirectAfterAuth");
      }
      router.push(targetUrl);
    }
  }, [router]);

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

  // Auto-focus first digit input when transitioning to Screen 2
  useEffect(() => {
    if (step === 2) {
      setTimeout(() => {
        inputRefs.current[0]?.focus();
      }, 100);
    }
  }, [step]);

  // Format countdown timer as m:ss (e.g., 0:28)
  const formatTimer = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Valid email regex check
  const isValidEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(val).trim());

  // Screen 1: Send OTP handler
  const handleSendOtp = async (e) => {
    if (e) e.preventDefault();

    const cleanEmail = email.trim();
    if (!isValidEmail(cleanEmail)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setIsError(false);
    setErrorMessage("");

    try {
      const success = await sendOTP({
        email: cleanEmail,
        dispatch,
        selector: user,
      });

      if (success !== false) {
        setStep(2);
        setOtp(["", "", "", ""]);
        setCooldown(30); // 30s countdown as specified ("Resend code in 0:28")
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to send verification code. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Screen 2: Resend code handler
  const handleResendOtp = async () => {
    if (cooldown > 0 || isLoading) return;

    setIsLoading(true);
    setIsError(false);
    setErrorMessage("");

    try {
      const success = await sendOTP({
        email: email.trim(),
        dispatch,
        selector: user,
      });

      if (success !== false) {
        setCooldown(30);
        setOtp(["", "", "", ""]);
        inputRefs.current[0]?.focus();
      }
    } catch (err) {
      console.error(err);
      toast.error("Error resending code. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Screen 2: Trigger OTP verification
  const handleVerifyOtp = async (e) => {
    if (e) e.preventDefault();

    // Prevent duplicate clicks if already verifying
    if (isLoading || isVerifyingRef.current) return;

    if (autoSubmitTimeoutRef.current) {
      clearTimeout(autoSubmitTimeoutRef.current);
      autoSubmitTimeoutRef.current = null;
    }

    const fullOtp = otp.join("").trim();
    if (fullOtp.length < 4) {
      setIsError(true);
      triggerShake("Please enter all 4 digits of your verification code.");
      return;
    }

    isVerifyingRef.current = true;
    setIsLoading(true);
    setIsError(false);
    setErrorMessage("");

    try {
      const success = await verifyOTP({
        email: email.trim(),
        otp: fullOtp,
        dispatch,
      });

      if (!success) {
        isVerifyingRef.current = false;
        setIsLoading(false);
        setIsError(true);
        triggerShake("Incorrect code. Please try again or resend.");
      }
      // If success is true, do NOT reset isLoading or isVerifyingRef to false!
      // This keeps the button locked and prevents any further clicks during the redirect.
    } catch (err) {
      console.error(err);
      isVerifyingRef.current = false;
      setIsLoading(false);
      setIsError(true);
      triggerShake("Failed to verify code. Please try again.");
    }
  };

  // Trigger shake animation and error message
  const triggerShake = (msg = "") => {
    setErrorMessage(msg);
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
    }, 450);
  };

  // Return from Screen 2 to Screen 1
  const handleBackToEmail = () => {
    if (autoSubmitTimeoutRef.current) {
      clearTimeout(autoSubmitTimeoutRef.current);
      autoSubmitTimeoutRef.current = null;
    }
    isVerifyingRef.current = false;
    setIsLoading(false);
    setStep(1);
    setIsError(false);
    setIsShaking(false);
    setErrorMessage("");
  };

  // Handle single digit changes & auto-advance for 4 digits
  const handleDigitChange = (index, value) => {
    if (isLoading || isVerifyingRef.current) return;
    setIsError(false);
    setErrorMessage("");

    const digitsOnly = value.replace(/\D/g, "");

    if (!digitsOnly) {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      return;
    }

    // If user pasted or typed multiple digits
    if (digitsOnly.length > 1) {
      const newOtp = [...otp];
      for (let i = 0; i < digitsOnly.length && index + i < 4; i++) {
        newOtp[index + i] = digitsOnly[i];
      }
      setOtp(newOtp);
      const nextFocus = Math.min(index + digitsOnly.length, 3);
      inputRefs.current[nextFocus]?.focus();

      // Auto-submit if all 4 filled
      if (newOtp.join("").length === 4 && !isLoading && !isVerifyingRef.current) {
        if (autoSubmitTimeoutRef.current) {
          clearTimeout(autoSubmitTimeoutRef.current);
        }
        autoSubmitTimeoutRef.current = setTimeout(() => {
          verifyOtpDirect(newOtp.join(""));
        }, 50);
      }
      return;
    }

    // Single digit typed
    const newOtp = [...otp];
    newOtp[index] = digitsOnly[digitsOnly.length - 1];
    setOtp(newOtp);

    // Auto-focus next box
    if (index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit if all 4 filled
    if (newOtp.join("").length === 4 && !isLoading && !isVerifyingRef.current) {
      if (autoSubmitTimeoutRef.current) {
        clearTimeout(autoSubmitTimeoutRef.current);
      }
      autoSubmitTimeoutRef.current = setTimeout(() => {
        verifyOtpDirect(newOtp.join(""));
      }, 50);
    }
  };

  // Helper for auto-submit
  const verifyOtpDirect = async (code) => {
    if (code.length === 4 && !isLoading && !isVerifyingRef.current) {
      isVerifyingRef.current = true;
      setIsLoading(true);
      setIsError(false);
      setErrorMessage("");
      try {
        const success = await verifyOTP({
          email: email.trim(),
          otp: code,
          dispatch,
        });
        if (!success) {
          isVerifyingRef.current = false;
          setIsLoading(false);
          setIsError(true);
          triggerShake("Incorrect code. Please try again or resend.");
        }
        // If success is true, do NOT reset isLoading or isVerifyingRef to false!
      } catch (err) {
        console.error(err);
        isVerifyingRef.current = false;
        setIsLoading(false);
        setIsError(true);
        triggerShake("Failed to verify code. Please try again.");
      }
    }
  };

  // Handle backspace navigation and arrows for 4 digits
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      setIsError(false);
      setErrorMessage("");
      if (!otp[index] && index > 0) {
        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
        inputRefs.current[index - 1]?.focus();
      } else {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle paste across all 4 boxes
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 4);
    if (!pasteData) return;

    const newOtp = [...otp];
    for (let i = 0; i < pasteData.length; i++) {
      newOtp[i] = pasteData[i];
    }
    setOtp(newOtp);
    setIsError(false);
    setErrorMessage("");

    const targetIdx = Math.min(pasteData.length, 3);
    inputRefs.current[targetIdx]?.focus();

    if (newOtp.join("").length === 4) {
      setTimeout(() => {
        verifyOtpDirect(newOtp.join(""));
      }, 50);
    }
  };

  const isEmailValid = isValidEmail(email);
  const isOtpComplete = otp.join("").length === 4;

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center py-12 px-4 bg-[#0A1120] text-white selection:bg-[#12D576]/30 font-nunitoSans relative">
      {/* Top Left Navigation Back to Home */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-xs sm:text-sm text-[#8B93A7] hover:text-white transition-all duration-200 py-1.5 px-3 rounded-xl hover:bg-[#131B2E] border border-transparent hover:border-[#1E293B] group"
        title="Back to Homepage"
      >
        <svg
          className="w-4 h-4 transition-transform duration-150 group-hover:-translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>Back to Home</span>
      </Link>

      {/* Background Cyber Emerald Glow (design.md 5.2) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[360px] bg-[#12D576]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Centered Authentication Card (design.md 2.2 #0F1729 with #1E293B border) */}
      <div className="w-full max-w-md bg-[#0F1729] border border-[#1E293B] rounded-2xl p-8 sm:p-9 shadow-2xl backdrop-blur-xl relative z-10">
        
        {step === 1 ? (
          /* ======================================================= */
          /* SCREEN 1 — EMAIL ENTRY                                  */
          /* ======================================================= */
          <div className="flex flex-col">
            {/* Top Logo */}
            <div className="flex justify-center mb-6">
              <Link
                href="/"
                title="SecureDApp Home"
                className="inline-block transition-transform duration-200 hover:scale-105"
              >
                <Image
                  src="/assets/images/securedapp-logo-dark.svg"
                  alt="SecureDApp Logo"
                  width={150}
                  height={38}
                  priority
                  className="h-8 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl font-bold text-white text-center tracking-tight mb-6 font-outfit">
              Welcome back
            </h1>

            {/* Form */}
            <form onSubmit={handleSendOtp} className="space-y-4">
              <div>
                <label htmlFor="auth-email" className="sr-only">
                  Email Address
                </label>
                <input
                  id="auth-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  autoComplete="email"
                  autoFocus
                  required
                  className="w-full h-12 px-4 rounded-xl bg-[#131B2E] text-white placeholder-[#5B6478] border border-[#2A3548] focus:outline-none focus:border-[#12D576] focus:ring-2 focus:ring-[#12D576]/30 focus:shadow-[0_0_20px_rgba(18,213,118,0.25)] transition-all duration-200 text-sm sm:text-base font-nunitoSans"
                />
              </div>

              {/* Full-width primary button "Continue" (design.md 6.2 #12D576 + #001938 text) */}
              <button
                type="submit"
                disabled={!isEmailValid || isLoading}
                className={`w-full h-12 rounded-xl font-bold font-outfit text-sm sm:text-base transition-all duration-200 flex items-center justify-center ${
                  isEmailValid && !isLoading
                    ? "bg-[#12D576] hover:brightness-110 text-[#001938] shadow-[0_0_20px_rgba(18,213,118,0.35)] active:scale-[0.99] cursor-pointer"
                    : "bg-[#131B2E] text-[#5B6478] border border-[#1E293B] cursor-not-allowed shadow-none"
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-[#001938]" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    <span>Sending code...</span>
                  </span>
                ) : (
                  "Continue"
                )}
              </button>
            </form>

            {/* Small helper text below button */}
            <p className="text-xs text-[#8B93A7] text-center mt-3 font-nunitoSans">
              We’ll send a code, no password needed
            </p>

            {/* Minimal footer with terms link */}
            <div className="mt-8 pt-5 border-t border-[#1E293B] text-center text-[11px] text-[#8B93A7] leading-relaxed font-nunitoSans">
              By continuing, you agree to our{" "}
              <a
                href="https://securedapp.gitbook.io/securedapp-launchpad/privacy-policy-securedapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#12D576] underline underline-offset-2 transition-colors"
              >
                Terms & Privacy Policy
              </a>
            </div>
          </div>
        ) : (
          /* ======================================================= */
          /* SCREEN 2 — OTP ENTRY (4 DIGITS)                         */
          /* ======================================================= */
          <div className="flex flex-col relative">
            {/* Back arrow top-left */}
            <button
              type="button"
              onClick={handleBackToEmail}
              className="absolute -top-3 -left-3 p-2 rounded-lg text-[#8B93A7] hover:text-white hover:bg-[#131B2E] transition-colors cursor-pointer group"
              title="Back to email"
              aria-label="Back to email"
            >
              <svg
                className="w-5 h-5 transition-transform duration-150 group-hover:-translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>

            {/* Top Logo */}
            <div className="flex justify-center mb-5">
              <Link
                href="/"
                title="SecureDApp Home"
                className="inline-block transition-transform duration-200 hover:scale-105"
              >
                <Image
                  src="/assets/images/securedapp-logo-dark.svg"
                  alt="SecureDApp Logo"
                  width={140}
                  height={36}
                  priority
                  className="h-8 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center tracking-tight mb-1 font-outfit">
              Enter code
            </h2>

            {/* Entered email with small "Edit" link beside it */}
            <div className="flex items-center justify-center gap-2 mb-6 text-xs sm:text-sm text-[#8B93A7] font-nunitoSans">
              <span className="truncate max-w-[210px] sm:max-w-[260px] text-gray-300 font-medium">
                {email}
              </span>
              <button
                type="button"
                onClick={handleBackToEmail}
                className="text-[#12D576] hover:underline font-medium cursor-pointer transition-colors text-xs"
              >
                Edit
              </button>
            </div>

            {/* Four individual digit input boxes (square 48x48px+) with auto-focus & error shake */}
            <form onSubmit={handleVerifyOtp}>
              <div
                className={`flex items-center justify-center gap-3 sm:gap-4 mb-2 ${
                  isShaking ? "animate-auth-shake" : ""
                }`}
                onPaste={handlePaste}
              >
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    ref={(el) => (inputRefs.current[idx] = el)}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    value={digit}
                    disabled={isLoading}
                    onChange={(e) => handleDigitChange(idx, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(idx, e)}
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl text-center text-2xl font-bold font-mono transition-all duration-200 ${
                      isLoading ? "opacity-50 cursor-not-allowed pointer-events-none " : ""
                    }${
                      isError
                        ? "border-2 border-[#EF4444] bg-[#EF4444]/15 text-red-300 focus:outline-none focus:border-[#EF4444] focus:ring-2 focus:ring-[#EF4444]/40 shadow-[0_0_15px_rgba(239,68,68,0.35)]"
                        : "border border-[#2A3548] bg-[#131B2E] text-white focus:outline-none focus:border-[#12D576] focus:ring-2 focus:ring-[#12D576]/30 focus:shadow-[0_0_20px_rgba(18,213,118,0.25)]"
                    }`}
                  />
                ))}
              </div>

              {/* Error feedback text if incorrect code */}
              {errorMessage && (
                <p className="text-xs text-[#EF4444] text-center font-nunitoSans mb-3 animate-fadeIn">
                  {errorMessage}
                </p>
              )}

              {/* Resend link with countdown timer */}
              <div className="text-center my-5 font-nunitoSans">
                {cooldown > 0 ? (
                  <span className="text-xs text-[#8B93A7] font-mono">
                    Resend code in {formatTimer(cooldown)}
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    disabled={isLoading}
                    className="text-xs text-[#12D576] hover:underline font-semibold cursor-pointer transition-colors disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Resend code
                  </button>
                )}
              </div>

              {/* Full-width "Verify" button (design.md 6.2 #12D576 + #001938 text) */}
              <button
                type="submit"
                disabled={!isOtpComplete || isLoading}
                className={`w-full h-12 rounded-xl font-bold font-outfit text-sm sm:text-base transition-all duration-200 flex items-center justify-center ${
                  isOtpComplete && !isLoading
                    ? "bg-[#12D576] hover:brightness-110 text-[#001938] shadow-[0_0_20px_rgba(18,213,118,0.35)] active:scale-[0.99] cursor-pointer"
                    : "bg-[#131B2E] text-[#5B6478] border border-[#1E293B] cursor-not-allowed pointer-events-none shadow-none"
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-[#001938]" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    <span>Verifying...</span>
                  </span>
                ) : (
                  "Verify"
                )}
              </button>
            </form>

            {/* Minimal footer */}
            <div className="mt-8 pt-5 border-t border-[#1E293B] text-center text-[11px] text-[#8B93A7] leading-relaxed font-nunitoSans">
              Need assistance?{" "}
              <Link
                href="/solidity-shield-scan/contact"
                className="text-gray-300 hover:text-[#12D576] underline underline-offset-2 transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AuthScreen;

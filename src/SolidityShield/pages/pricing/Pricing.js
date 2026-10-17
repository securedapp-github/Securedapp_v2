"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  setPaymentModal,
  setPlan,
} from "../../redux/dashboard/paymentSlice";
import { getUserData } from "../../redux/auth/authSlice";
import MetaTags from "../../../components/common/MetaTags";
import Footer from "../../components/common/Footer";
import { setLoader } from "../../redux/commonSlice";
import { getUser } from "../../functions";

// Curated SaaS tier data (/gpt-taste: clean, modern, sweet aesthetic)
const planConfigs = [
  {
    id: 0,
    planType: "Free",
    price: "₹0",
    badge: "Starter",
    tagline: "Essential security scanning for individual builders and hobbyists.",
    subtext: "Free forever • No credit card required",
    bullets: [
      { text: "1 Contract scan credit", included: true },
      { text: "AST Core Vulnerability spotters", included: true },
      { text: "Instant audit security score", included: true },
      { text: "Basic vulnerability summary", included: true },
      { text: "Detailed fix recommendations", included: false },
      { text: "Official PDF audit report", included: false },
      { text: "GitHub 3rd-party auditor certification", included: false },
    ],
  },
  {
    id: 1,
    planType: "Plus",
    price: "₹14,999",
    badge: "Most Popular",
    isPopular: true,
    tagline: "Continuous automated audits for active dApps, DEXes, and teams.",
    subtext: "Billed monthly • Instant credit allocation",
    bullets: [
      { text: "6 Comprehensive scans / month", included: true },
      { text: "Full vulnerability severity breakdown", included: true },
      { text: "Detailed fix & code specifications", included: true },
      { text: "Official PDF audit report download", included: true },
      { text: "Priority cloud scan queue", included: true },
      { text: "Email security support", included: true },
      { text: "GitHub 3rd-party auditor certification", included: false },
    ],
  },
  {
    id: 2,
    planType: "Premium",
    price: "₹29,999",
    badge: "Enterprise",
    tagline: "Protocol certification and dedicated auditor publishing for production.",
    subtext: "Billed monthly • Dedicated team pipeline",
    bullets: [
      { text: "24 Enterprise scans / month", included: true },
      { text: "Everything included in Plus tier", included: true },
      { text: "Detailed fix & code specifications", included: true },
      { text: "Official PDF audit report download", included: true },
      { text: "Public audit certification link", included: true },
      { text: "GitHub 3rd-party auditor publishing", included: true },
      { text: "24/7 Priority security support", included: true },
    ],
  },
];

const CheckIcon = () => (
  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </span>
);

const DashIcon = () => (
  <span className="w-5 h-5 rounded-full bg-white/5 text-gray-500 flex items-center justify-center shrink-0">
    <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M4 10a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>
  </span>
);

const PricingPlanCard = ({ planConfig, userPlan, onAction, isLoggedIn }) => {
  const { id, planType, price, badge, isPopular, tagline, subtext, bullets } = planConfig;

  // Determine button state and label based on user current tier
  let buttonLabel = "";
  let isButtonDisabled = false;
  let buttonClass = "";

  if (!isLoggedIn) {
    if (id === 0) {
      buttonLabel = "Get started free";
      buttonClass = "bg-white/10 hover:bg-white/15 text-white border border-white/15";
    } else if (id === 1) {
      buttonLabel = "Upgrade to Plus";
      buttonClass = "bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-bold shadow-[0_0_25px_rgba(16,185,129,0.35)]";
    } else {
      buttonLabel = "Upgrade to Premium";
      buttonClass = "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold shadow-[0_0_25px_rgba(59,130,246,0.35)]";
    }
  } else {
    if (id === 0) {
      if (userPlan === 0) {
        buttonLabel = "Current plan";
        isButtonDisabled = true;
        buttonClass = "bg-white/5 text-gray-400 border border-white/10 cursor-not-allowed";
      } else {
        buttonLabel = "Included in your tier";
        isButtonDisabled = true;
        buttonClass = "bg-white/5 text-gray-500 border border-white/5 cursor-not-allowed";
      }
    } else if (id === 1) {
      if (userPlan === 0) {
        buttonLabel = "Upgrade to Plus";
        buttonClass = "bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-bold shadow-[0_0_25px_rgba(16,185,129,0.35)]";
      } else if (userPlan === 1) {
        buttonLabel = "Current plan";
        isButtonDisabled = true;
        buttonClass = "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 cursor-not-allowed";
      } else {
        buttonLabel = "Included in your tier";
        isButtonDisabled = true;
        buttonClass = "bg-white/5 text-gray-500 border border-white/5 cursor-not-allowed";
      }
    } else if (id === 2) {
      if (userPlan === 2) {
        buttonLabel = "Current plan";
        isButtonDisabled = true;
        buttonClass = "bg-blue-500/10 text-blue-400 border border-blue-500/30 cursor-not-allowed";
      } else {
        buttonLabel = "Upgrade to Premium";
        buttonClass = "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold shadow-[0_0_25px_rgba(59,130,246,0.35)]";
      }
    }
  }

  return (
    <div
      className={`relative h-full flex flex-col justify-between rounded-3xl p-7 sm:p-8 transition-all duration-300 ${
        isPopular
          ? "bg-gradient-to-b from-[#0F2922] via-[#0B1A1E] to-[#09131C] border-2 border-emerald-500/50 shadow-[0_0_40px_rgba(16,185,129,0.18)] hover:shadow-[0_0_55px_rgba(16,185,129,0.28)]"
          : id === 2
          ? "bg-gradient-to-b from-[#111E38] via-[#0B1528] to-[#070D18] border border-blue-500/30 hover:border-blue-500/50 shadow-xl"
          : "bg-[#0E1726]/80 backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-xl"
      }`}
    >
      {/* Floating Popular Badge */}
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Most Popular
          </span>
        </div>
      )}

      <div>
        {/* Tier Header: Name + Badge */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-outfit tracking-tight">
            {planType}
          </h3>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              isPopular
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                : id === 2
                ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                : "bg-white/10 text-gray-300 border border-white/10"
            }`}
          >
            {badge}
          </span>
        </div>

        {/* Tagline */}
        <p className="text-xs sm:text-sm text-gray-400 font-nunitoSans leading-relaxed mb-6">
          {tagline}
        </p>

        {/* Price Block */}
        <div className="pb-6 mb-6 border-b border-white/10">
          <div className="flex items-baseline gap-1.5">
            <span className="text-4xl sm:text-5xl font-black text-white font-outfit tracking-tight">
              {price}
            </span>
            <span className="text-sm font-medium text-gray-400">/month</span>
          </div>
          <p className="text-xs text-gray-500 font-nunitoSans mt-1.5">
            {subtext}
          </p>
        </div>

        {/* Feature List */}
        <div className="space-y-3.5 mb-8">
          <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 font-nunitoSans">
            What's included:
          </div>
          {bullets.map((b, idx) => (
            <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-nunitoSans">
              {b.included ? <CheckIcon /> : <DashIcon />}
              <span
                className={`leading-snug ${
                  b.included
                    ? "text-gray-200 font-medium"
                    : "text-gray-500 line-through opacity-60"
                }`}
              >
                {b.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div>
        <button
          onClick={() => !isButtonDisabled && onAction(id)}
          disabled={isButtonDisabled}
          className={`w-full h-12 rounded-2xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${buttonClass} ${
            !isButtonDisabled ? "cursor-pointer hover:scale-[1.02] active:scale-[0.98]" : ""
          }`}
        >
          <span>{buttonLabel}</span>
          {!isButtonDisabled && (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [activeTab, setActiveTab] = useState(1); // Default to Plus tier on mobile
  const auth = useSelector(getUserData);
  const user = auth?.user;
  const userPlan = user?.plan != null ? user.plan : 0;
  const isLoggedIn = !!(typeof window !== "undefined" && localStorage.getItem("UserEmail"));

  const navigate = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchUserData() {
      const jwt = typeof window !== "undefined" ? localStorage.getItem("UserJwtToken") : null;
      if (!jwt) return;
      dispatch(setLoader(true));
      try {
        await getUser({ dispatch });
      } catch (error) {
        console.warn("Pricing: getUser network error:", error.message);
      } finally {
        dispatch(setLoader(false));
      }
    }
    if (!user || Object.keys(user).length === 0) {
      fetchUserData();
    }
  }, [user, dispatch]);

  const handlePlanAction = (planId) => {
    if (!isLoggedIn) {
      navigate.push("/solidity-shield-scan/auth");
      return;
    }

    if (planId > 0) {
      dispatch(setPaymentModal(true));
      dispatch(setPlan(planId));
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#070D18] text-white selection:bg-emerald-500/30 font-nunitoSans relative overflow-x-hidden">
      <MetaTags
        data={{
          title: "Solidity Shield Pricing — Smart Contract Audit Plans | SecureDApp",
          desc: "Compare Solidity Shield's security audit tiers. Instant activation, no hidden fees, cancel anytime.",
          keywords: "solidity shield pricing, smart contract audit cost, blockchain security plans, SecureDApp",
          url: "https://securedapp.io/solidity-shield-scan/pricing",
        }}
      />

      {/* Sweet Ambient Glow Orbs */}
      <div className="absolute top-20 left-1/4 w-[480px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-40 right-1/4 w-[480px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Navigation Bar */}
      <header className="w-full border-b border-white/10 bg-[#070D18]/80 backdrop-blur-md px-4 sm:px-8 py-3.5 flex items-center justify-between sticky top-0 z-50">
        <button
          onClick={() => navigate.push(isLoggedIn ? "/solidity-shield-scan/overview" : "/")}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-400 hover:text-white transition-colors cursor-pointer py-1 px-2.5 rounded-lg hover:bg-white/5"
        >
          <span>&larr;</span>
          <span>{isLoggedIn ? "Back to Dashboard" : "Back to Homepage"}</span>
        </button>

        <div className="flex items-center gap-3">
          <Link href="/" title="SecureDApp Home" className="hover:opacity-90 transition-opacity">
            <Image
              src="/assets/images/securedapp-logo-dark.svg"
              alt="SecureDApp Logo"
              width={130}
              height={32}
              priority
              className="h-7 w-auto object-contain"
            />
          </Link>
          {!isLoggedIn && (
            <button
              onClick={() => navigate.push("/solidity-shield-scan/auth")}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors cursor-pointer ml-2"
            >
              Sign In
            </button>
          )}
        </div>
      </header>

      {/* Main Container - Designed to fit seamlessly without scrolling */}
      <main className="max-w-6xl mx-auto px-4 pt-8 pb-14 flex flex-col items-center relative z-10">
        {/* Sweet Title & Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Solidity Shield Audit Plans</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-outfit tracking-tight leading-tight">
            Simple, transparent plans for every builder
          </h1>
          <p className="text-sm sm:text-base text-gray-400 mt-3 font-nunitoSans leading-relaxed">
            Instant credit activation • Automated AST & AI detection • Cancel anytime
          </p>
        </div>

        {/* Mobile 3-Tab Switcher (Claude-style sweet segmented pill) */}
        <div className="flex md:hidden items-center justify-center p-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-6 w-full max-w-xs">
          {planConfigs.map((p, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex-1 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                activeTab === idx
                  ? "bg-white text-slate-950 shadow-md font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {p.planType}
            </button>
          ))}
        </div>

        {/* 3 Plan Cards Container */}
        <div className="w-full">
          {/* Desktop 3-Column Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch w-full">
            {planConfigs.map((plan) => (
              <PricingPlanCard
                key={plan.id}
                planConfig={plan}
                userPlan={userPlan}
                onAction={handlePlanAction}
                isLoggedIn={isLoggedIn}
              />
            ))}
          </div>

          {/* Mobile Single Tab Card */}
          <div className="block md:hidden w-full max-w-sm mx-auto">
            <PricingPlanCard
              planConfig={planConfigs[activeTab]}
              userPlan={userPlan}
              onAction={handlePlanAction}
              isLoggedIn={isLoggedIn}
            />
          </div>
        </div>

        {/* Sweet Custom Enterprise Banner */}
        <div className="w-full mt-10">
          <div className="rounded-3xl p-6 sm:p-7 bg-[#0E1726]/70 backdrop-blur-xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl">
            <div>
              <div className="text-base sm:text-lg font-bold text-white font-outfit">
                Need custom protocol audits or dedicated retainer volume?
              </div>
              <p className="text-xs sm:text-sm text-gray-400 font-nunitoSans mt-1">
                Multi-contract pools, private CI/CD runners, and 1-on-1 auditor consultations.
              </p>
            </div>
            <button
              onClick={() => navigate.push("/solidity-shield-scan/support")}
              className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/15 transition-all hover:scale-105 active:scale-95 cursor-pointer flex-shrink-0"
            >
              Contact security team &rarr;
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;

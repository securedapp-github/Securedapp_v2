"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  setPaymentModal,
  setPlan,
} from "../../redux/dashboard/paymentSlice";
import { getUserData } from "../../redux/auth/authSlice";
import MetaTags from "../../../components/common/MetaTags";
import Footer from "../../components/common/Footer";
import { setLoader } from "../../redux/commonSlice";
import { getUser } from "../../functions";

// High-converting tier value framing (Claude-style / Industrial Brutalist)
const planConfigs = {
  0: {
    id: 0,
    planType: "Free",
    price: "₹ 0",
    specCode: "SPEC // TIER_01",
    badge: "STARTER",
    status: "SYS_ACTIVE",
    sku: "SKU-8849-01",
    tagline: "Essential AST scanner for single contracts & hobbyists.",
    subtext: "[ NO_CARD_REQ // FOREVER_FREE ]",
    bullets: [
      { text: "01 Contract Scan Credit", included: true, highlight: false },
      { text: "AST Core Super Spotters", included: true, highlight: false },
      { text: "Instant Audit Security Score", included: true, highlight: false },
      { text: "Basic Vulnerability Flags", included: true, highlight: false },
      { text: "Vulnerability Severity Breakdown", included: false, highlight: false },
      { text: "Official PDF Audit Report", included: false, highlight: false },
      { text: "GitHub 3rd-Party Auditor Publish", included: false, highlight: false },
    ],
  },
  1: {
    id: 1,
    planType: "Plus",
    price: "₹ 14,999",
    specCode: "SPEC // TIER_02",
    badge: "MOST POPULAR",
    recommended: "RECOMMENDED TIER // MAXIMUM VALUE",
    status: "SYS_OPTIMAL",
    sku: "SKU-8849-02",
    tagline: "Continuous automated audit pipeline for dApps & builders.",
    subtext: "[ BILLED_MONTHLY // INSTANT_DISPATCH ]",
    bullets: [
      { text: "06 Comprehensive Scans / Month", included: true, highlight: true },
      { text: "Full Vulnerability Severity Mapping", included: true, highlight: true },
      { text: "Detailed Fix Specifications", included: true, highlight: false },
      { text: "Official PDF Audit Report", included: true, highlight: true },
      { text: "Priority Cloud Scan Queue", included: true, highlight: false },
      { text: "Email Security Support", included: true, highlight: false },
      { text: "GitHub 3rd-Party Auditor Publish", included: false, highlight: false },
    ],
  },
  2: {
    id: 2,
    planType: "Premium",
    price: "₹ 29,999",
    specCode: "SPEC // TIER_03",
    badge: "MIL-SPEC",
    status: "MAX_SECURITY",
    sku: "SKU-8849-03",
    tagline: "Protocol certification & external auditor publishing.",
    subtext: "[ ENTERPRISE_SUITE // 24/7_SUPPORT ]",
    bullets: [
      { text: "24 Enterprise Scans / Month", included: true, highlight: true },
      { text: "Everything in Plus Tier Included", included: true, highlight: true },
      { text: "Full Vulnerability Severity Mapping", included: true, highlight: false },
      { text: "Official PDF Audit Report", included: true, highlight: false },
      { text: "Public Audit Certification URL", included: true, highlight: true },
      { text: "GitHub 3rd-Party Auditor Publish", included: true, highlight: true },
      { text: "24/7 Dedicated Security Support", included: true, highlight: false },
    ],
  },
};

const PricingPlanCard = ({ planConfig, userPlan, onAction, isLoggedIn }) => {
  const { id, planType, price, specCode, badge, recommended, status, sku, tagline, subtext, bullets } = planConfig;
  const isPopular = id === 1;

  // Determine button label, disabled status, and action based on user current tier
  let buttonLabel = "";
  let isButtonDisabled = false;
  let buttonStyle = "industrial-btn-primary";

  if (!isLoggedIn) {
    if (id === 0) {
      buttonLabel = "START FREE [->]";
      buttonStyle = "industrial-btn-disabled";
    } else if (id === 1) {
      buttonLabel = "DEPLOY WITH PLUS [->]";
      buttonStyle = "industrial-btn-primary";
    } else {
      buttonLabel = "UPGRADE TO PREMIUM [->]";
      buttonStyle = "industrial-btn-secondary";
    }
  } else {
    if (id === 0) {
      if (userPlan === 0) {
        buttonLabel = "CURRENT PLAN [ACTIVE]";
        isButtonDisabled = true;
        buttonStyle = "industrial-btn-disabled";
      } else {
        buttonLabel = "INCLUDED IN YOUR TIER";
        isButtonDisabled = true;
        buttonStyle = "industrial-btn-disabled";
      }
    } else if (id === 1) {
      if (userPlan === 0) {
        buttonLabel = "UPGRADE TO PLUS [->]";
        buttonStyle = "industrial-btn-primary";
      } else if (userPlan === 1) {
        buttonLabel = "ACTIVE PLAN [CURRENT]";
        isButtonDisabled = true;
        buttonStyle = "industrial-btn-disabled";
      } else {
        // Premium user viewing Plus
        buttonLabel = "INCLUDED IN YOUR TIER";
        isButtonDisabled = true;
        buttonStyle = "industrial-btn-disabled";
      }
    } else if (id === 2) {
      if (userPlan === 2) {
        buttonLabel = "ACTIVE PLAN [MAX_SECURITY]";
        isButtonDisabled = true;
        buttonStyle = "industrial-btn-disabled";
      } else {
        // Free or Plus user upgrading to Premium
        buttonLabel = "UPGRADE TO PREMIUM [->]";
        buttonStyle = "industrial-btn-secondary";
      }
    }
  }

  return (
    <div className="sss-pricing-plan-card-container h-full relative flex flex-col">
      <div
        className={`industrial-card h-full flex flex-col justify-between p-6 sm:p-7 relative select-none ${
          isPopular
            ? "industrial-card-hero"
            : id === 2
            ? "industrial-card-premium"
            : ""
        }`}
      >
        {/* Hardware Rivets in 4 Corners */}
        <span className="industrial-rivet top-2 left-2" />
        <span className="industrial-rivet top-2 right-2" />
        <span className="industrial-rivet bottom-2 left-2" />
        <span className="industrial-rivet bottom-2 right-2" />

        {/* Industrial Corner Crosshair Accents */}
        <span className="crosshair-tl text-slate-400 dark:text-slate-600">+</span>
        <span className="crosshair-tr text-slate-400 dark:text-slate-600">+</span>
        <span className="crosshair-bl text-slate-400 dark:text-slate-600">+</span>
        <span className="crosshair-br text-slate-400 dark:text-slate-600">+</span>

        <div>
          {/* Top Chassis Technical Telemetry Header */}
          <div className="flex items-center justify-between font-mono text-[10px] tracking-widest uppercase border-b-2 border-slate-200 dark:border-slate-800 pb-2 mb-3 text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 bg-emerald-500 inline-block animate-pulse" />
              <span>{specCode}</span>
            </div>
            <div className="font-extrabold text-[#16A34A] dark:text-[#22C55E]">
              {userPlan === id && isLoggedIn ? "[SYS_ACTIVE]" : `[${status}]`}
            </div>
          </div>

          {/* Recommended Banner on Plus Tier */}
          {recommended && (
            <div className="mb-3">
              <div className="inline-block px-2.5 py-1 font-mono text-[10px] font-black tracking-widest uppercase bg-[#22C55E] text-slate-950 border border-slate-950 shadow-[2px_2px_0px_#000]">
                ★ {recommended}
              </div>
            </div>
          )}

          {/* Plan Identifier */}
          <div className="flex items-center justify-between gap-3 mt-1">
            <div>
              <div className="text-3xl font-black font-mono tracking-tight uppercase text-slate-950 dark:text-white">
                {planType}
              </div>
              <div className="font-mono text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                {tagline}
              </div>
            </div>

            {/* Hardware Status Badge */}
            <span
              className={`font-mono text-[10px] font-black uppercase px-2.5 py-1 border ${
                userPlan === id && isLoggedIn
                  ? "bg-emerald-500/20 text-[#16A34A] dark:text-[#22C55E] border-emerald-500/50"
                  : id === 2
                  ? "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border-cyan-500/50"
                  : "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700"
              }`}
            >
              {badge}
            </span>
          </div>

          {/* Monospace Price Readout */}
          <div className="mt-4 pb-4 border-b-2 border-slate-200 dark:border-slate-800">
            <div className="flex items-baseline gap-1.5 font-mono">
              <span className="text-4xl lg:text-5xl font-black text-[#16A34A] dark:text-[#22C55E] tracking-tight">
                {price}
              </span>
              <span className="text-xs font-black text-slate-500 dark:text-slate-400">
                /MONTH
              </span>
            </div>
            <div className="font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
              {subtext}
            </div>
          </div>

          {/* System Capabilities / Included Features List */}
          <div className="mt-4 space-y-2.5">
            <div className="font-mono text-[10px] font-black uppercase tracking-widest text-[#16A34A] dark:text-[#22C55E] mb-2">
              [ SYSTEM_CAPABILITIES ]
            </div>
            {bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs font-mono">
                <span
                  className={`font-black flex-shrink-0 text-sm leading-none mt-0.5 ${
                    bullet.included
                      ? "text-[#16A34A] dark:text-[#22C55E]"
                      : "text-slate-400 dark:text-slate-600"
                  }`}
                >
                  {bullet.included ? "[✓]" : "[—]"}
                </span>
                <span
                  className={`leading-tight text-[11px] sm:text-xs ${
                    bullet.included
                      ? bullet.highlight
                        ? "text-slate-950 dark:text-white font-extrabold"
                        : "text-slate-700 dark:text-slate-200 font-medium"
                      : "text-slate-400 dark:text-slate-600 line-through opacity-60"
                  }`}
                >
                  {bullet.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6 pt-3">
          <button
            onClick={() => !isButtonDisabled && onAction(id)}
            disabled={isButtonDisabled}
            className={`industrial-btn w-full py-3.5 px-4 text-xs font-black flex justify-center items-center gap-x-2 ${buttonStyle} ${
              isButtonDisabled ? "cursor-not-allowed opacity-75" : "cursor-pointer"
            }`}
          >
            <span>{buttonLabel}</span>
            {!isButtonDisabled && <FontAwesomeIcon icon={faArrowRight} className="text-xs ml-1" />}
          </button>

          {/* Barcode & Telemetry SKU Footer */}
          <div className="mt-3 pt-2 border-t border-dashed border-slate-200 dark:border-slate-800 flex items-center justify-between font-mono text-[9px] text-slate-400 dark:text-slate-500">
            <span>// {sku}</span>
            <span>CLEARANCE: LVL-0{id + 1}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [activeTab, setActiveTab] = useState(1); // Default to Plus tier (index 1) on mobile
  const [darkMode, setDarkMode] = useState(true);
  const auth = useSelector(getUserData);
  const user = auth?.user;
  const userPlan = user?.plan != null ? user.plan : 0;
  const isLoggedIn = !!(typeof window !== "undefined" && localStorage.getItem("UserEmail"));

  const navigate = useRouter();
  const dispatch = useDispatch();

  // Sync theme with localStorage and body
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const isDark = savedTheme ? savedTheme === "dark" : true;
      setDarkMode(isDark);
      if (isDark) {
        document.documentElement.classList.add("dark");
        document.body.classList.add("dark");
        document.documentElement.classList.remove("light");
        document.body.classList.remove("light");
      } else {
        document.documentElement.classList.remove("dark");
        document.body.classList.remove("dark");
        document.documentElement.classList.add("light");
        document.body.classList.add("light");
      }
    }
  }, []);

  const toggleTheme = (isDark) => {
    setDarkMode(isDark);
    const themeStr = isDark ? "dark" : "light";
    localStorage.setItem("theme", themeStr);
    window.dispatchEvent(new Event("storage"));
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
      document.documentElement.classList.remove("light");
      document.body.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
      document.documentElement.classList.add("light");
      document.body.classList.add("light");
    }
  };

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

  const plans = [planConfigs[0], planConfigs[1], planConfigs[2]];

  return (
    <div className={`sss-pricing-container ${darkMode ? "dark text-white" : "light text-slate-900"}`}>
      <MetaTags
        data={{
          title: "Solidity Shield Pricing — Smart Contract Audit Plans | SecureDApp",
          desc: "Compare Solidity Shield's security audit tiers. Instant activation, no hidden fees, cancel anytime.",
          keywords: "solidity shield pricing, smart contract audit cost, blockchain security plans, SecureDApp",
          url: "https://securedapp.io/solidity-shield-scan/pricing",
        }}
      />

      {/* Top Header Bar */}
      <header className="w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md px-4 sm:px-8 py-3 flex items-center justify-between sticky top-0 z-50">
        <button
          onClick={() => navigate.push(isLoggedIn ? "/solidity-shield-scan/overview" : "/")}
          className="flex items-center gap-2 text-xs font-mono font-bold text-slate-700 dark:text-slate-300 hover:text-emerald-500 transition-colors cursor-pointer"
        >
          <span>&larr; {isLoggedIn ? "Back to Dashboard" : "Back to SecureDApp"}</span>
        </button>

        <div className="flex items-center gap-3">
          {/* Mechanical Mode Switcher Pill */}
          <div className="inline-flex items-center p-0.5 border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900">
            <button
              onClick={() => toggleTheme(false)}
              className={`px-2.5 py-1 text-[10px] font-mono font-bold uppercase transition-all cursor-pointer ${
                !darkMode ? "bg-[#22C55E] text-slate-950" : "text-slate-500 hover:text-white"
              }`}
            >
              Light
            </button>
            <button
              onClick={() => toggleTheme(true)}
              className={`px-2.5 py-1 text-[10px] font-mono font-bold uppercase transition-all cursor-pointer ${
                darkMode ? "bg-[#22C55E] text-slate-950" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Dark
            </button>
          </div>

          {!isLoggedIn && (
            <button
              onClick={() => navigate.push("/solidity-shield-scan/auth")}
              className="px-3 py-1 font-mono text-xs font-bold bg-[#16A34A] hover:bg-[#15803d] text-white transition-all shadow-[2px_2px_0px_#000] cursor-pointer"
            >
              Sign In &rarr;
            </button>
          )}
        </div>
      </header>

      {/* Main Container Fitting Single Screen View */}
      <main className="max-w-6xl mx-auto px-4 pt-6 pb-12 flex flex-col items-center">
        {/* Title & Badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 font-mono text-[10px] font-black uppercase tracking-widest text-[#16A34A] dark:text-[#22C55E] border border-[#16A34A]/40 dark:border-[#22C55E]/40 mb-2 bg-emerald-500/10">
            <span>// HARDWARE_SECURITY_TIERS</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black font-mono text-slate-950 dark:text-white tracking-tight uppercase">
            SOLIDITY_SHIELD // SUBSCRIPTION_PLANS
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto mt-1.5 font-mono">
            Full capabilities included in each tier • Instant activation • 1-click cancel anytime
          </p>
        </div>

        {/* Mobile 3-Tab Switcher (Claude-Style for mobile) */}
        <div className="flex md:hidden items-center justify-center p-1 rounded-xl bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 mb-6 w-full max-w-sm">
          {plans.map((p, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex-1 py-2 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === idx
                  ? "bg-[#22C55E] text-slate-950 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-white"
              }`}
            >
              {p.planType} {idx === 1 && "★"}
            </button>
          ))}
        </div>

        {/* Pricing Cards Grid (All 3 side-by-side on desktop, single tab on mobile) */}
        <div className="w-full">
          {/* Desktop 3-Column Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 items-stretch w-full">
            {plans.map((plan) => (
              <PricingPlanCard
                key={plan.id}
                planConfig={plan}
                userPlan={userPlan}
                onAction={handlePlanAction}
                isLoggedIn={isLoggedIn}
              />
            ))}
          </div>

          {/* Mobile Active Tab Card */}
          <div className="block md:hidden w-full max-w-sm mx-auto">
            <PricingPlanCard
              planConfig={plans[activeTab]}
              userPlan={userPlan}
              onAction={handlePlanAction}
              isLoggedIn={isLoggedIn}
            />
          </div>
        </div>

        {/* Enterprise Bottom Strip */}
        <div className="w-full mt-10">
          <div className="industrial-card p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 relative">
            <span className="crosshair-tl text-slate-400 dark:text-slate-600">+</span>
            <span className="crosshair-tr text-slate-400 dark:text-slate-600">+</span>
            <span className="crosshair-bl text-slate-400 dark:text-slate-600">+</span>
            <span className="crosshair-br text-slate-400 dark:text-slate-600">+</span>
            <div>
              <div className="font-mono text-xs sm:text-sm font-black text-slate-950 dark:text-white uppercase tracking-tight">
                NEED CUSTOM PROTOCOL AUDIT VOLUME?
              </div>
              <div className="font-mono text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                Multi-contract pools, custom CI/CD runners, and dedicated security retainers.
              </div>
            </div>
            <button
              onClick={() => navigate.push("/solidity-shield-scan/support")}
              className="industrial-btn industrial-btn-primary px-6 py-2.5 text-xs font-black cursor-pointer flex-shrink-0"
            >
              CONTACT_SECURITY_TEAM [-&gt;]
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;

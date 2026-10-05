"use client";

import { useDispatch, useSelector } from "react-redux";
import { pricingDetails } from "./pricing.data";
import CustomButton from "../../components/common/CustomButton";
import {
  faChevronLeft,
  faChevronRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  getPaymentSelector,
  setPaymentModal,
  setPlan,
} from "../../redux/dashboard/paymentSlice";
import { getUserData } from "../../redux/auth/authSlice";
import { useRouter } from "next/router";
import MetaTags from "../../../components/common/MetaTags";
import Footer from "../../components/common/Footer";
import { setLoader } from "../../redux/commonSlice";
import { getUser } from "../../functions";

// High-converting tier value framing (/gpt-taste)
const planConfigs = {
  0: {
    badge: "STARTER",
    tagline: "Essential security testing for single contracts",
    subtext: "No credit card required • Forever free",
    bullets: [
      { text: "1 Contract Scan Credit", included: true, highlight: false },
      { text: "All Super Spotters AST Engine", included: true, highlight: false },
      { text: "Instant Security Audit Score", included: true, highlight: false },
      { text: "Vulnerability Severity Breakdown", included: false, highlight: false },
      { text: "Official Downloadable PDF Report", included: false, highlight: false },
      { text: "GitHub 3rd-Party Auditor Publish", included: false, highlight: false },
    ],
  },
  1: {
    badge: "MOST POPULAR",
    tagline: "Built for active Web3 devs & shipping teams",
    subtext: "Billed monthly • Instant cloud activation",
    bullets: [
      { text: "6 Comprehensive Contract Scans/mo", included: true, highlight: true },
      { text: "Full Vulnerability Severity Breakdown", included: true, highlight: true },
      { text: "Detailed Fix Guidance & Descriptions", included: true, highlight: false },
      { text: "Official Downloadable PDF Audit Report", included: true, highlight: true },
      { text: "Priority Cloud Scanning Queue", included: true, highlight: false },
      { text: "GitHub 3rd-Party Auditor Publish", included: false, highlight: false },
    ],
  },
  2: {
    badge: "MAXIMUM SECURITY",
    tagline: "Production protocols & enterprise dApps",
    subtext: "Billed monthly • Full security suite",
    bullets: [
      { text: "24 Enterprise Contract Scans/mo", included: true, highlight: true },
      { text: "Full Vulnerability Severity Breakdown", included: true, highlight: false },
      { text: "Official Downloadable PDF Audit Report", included: true, highlight: false },
      { text: "Public Audit Certification URL", included: true, highlight: true },
      { text: "GitHub 3rd-Party Auditor Publish", included: true, highlight: true },
      { text: "24/7 Dedicated Support & Review", included: true, highlight: false },
    ],
  },
};

const PricingPlanCard = ({
  icon,
  planType,
  price,
  description,
  onClick,
  id,
}) => {
  const auth = useSelector(getUserData);
  const userPlan = auth?.user?.plan != null ? auth.user.plan : 0;
  const isCurrentPlan = userPlan === id;
  const config = planConfigs[id] || planConfigs[0];
  const isPopular = id === 1;

  // Format numbers neatly (e.g., ₹ 29999 -> ₹ 29,999)
  const displayPrice = price ? price.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : price;

  return (
    <div className="sss-pricing-plan-card-container h-full relative">
      {/* Liquid Glass Card Surface */}
      <div
        className={`liquid-glass-card h-full flex flex-col justify-between p-6 sm:p-7 ${
          isPopular
            ? "liquid-glass-popular relative"
            : isCurrentPlan
            ? "border-2 border-[#22C55E]/70 shadow-lg shadow-[#22C55E]/10"
            : ""
        }`}
      >
        {/* Floating conversion badge for Most Popular tier */}
        {isPopular && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase bg-gradient-to-r from-[#22C55E] via-[#10B981] to-[#16A34A] text-[#0A1120] shadow-md shadow-[#22C55E]/30 flex items-center gap-1.5 whitespace-nowrap z-20">
            <span className="text-xs">★</span> MOST POPULAR • BEST VALUE
          </div>
        )}

        <div>
          {/* Card Header: Icon + Plan Name + Badges */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white/80 dark:bg-white/10 border border-slate-200/80 dark:border-white/15 flex items-center justify-center p-2 backdrop-blur-md shadow-sm">
                <Image src={icon} alt={planType} width={26} height={26} className="object-contain" />
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {planType}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  {config.tagline}
                </div>
              </div>
            </div>

            {/* Status / Tier Badge */}
            {isCurrentPlan ? (
              <span className="px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-[#22C55E]/15 text-[#16A34A] dark:text-[#22C55E] border border-[#22C55E]/30 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse"></span>
                ACTIVE
              </span>
            ) : id === 2 ? (
              <span className="px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 rounded-full">
                ENTERPRISE
              </span>
            ) : (
              <span className="px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-slate-500/10 text-slate-500 dark:text-slate-400 border border-slate-400/20 rounded-full">
                {config.badge}
              </span>
            )}
          </div>

          {/* Pricing Row */}
          <div className="mt-5 pb-5 border-b border-slate-200/80 dark:border-white/10">
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl sm:text-4xl font-black text-[#16A34A] dark:text-[#22C55E] tracking-tight">
                {displayPrice}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
                {"/month"}
              </span>
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-medium">
              {config.subtext}
            </div>
          </div>

          {/* Key Value Checklist (/gpt-taste) */}
          <div className="mt-5 space-y-2.5">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Key Features:
            </div>
            {config.bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] leading-snug">
                {bullet.included ? (
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mt-0.5">
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                ) : (
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-slate-300/40 dark:bg-slate-800 text-slate-400 dark:text-slate-600 flex items-center justify-center mt-0.5">
                    <svg className="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                )}
                <span
                  className={`${
                    bullet.included
                      ? bullet.highlight
                        ? "text-slate-900 dark:text-white font-bold"
                        : "text-slate-700 dark:text-slate-200 font-medium"
                      : "text-slate-400 dark:text-slate-500 line-through opacity-65"
                  }`}
                >
                  {bullet.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* High-Converting CTA Button */}
        <div onClick={onClick} className="mt-7 pt-4">
          <button
            className={`group w-full py-3 px-4 text-xs sm:text-sm font-bold rounded-xl flex justify-center items-center gap-x-2 transition-all cursor-pointer ${
              id === 1
                ? "bg-gradient-to-r from-[#22C55E] via-[#10B981] to-[#16A34A] text-slate-950 shadow-lg shadow-[#22C55E]/25 hover:shadow-[#22C55E]/40 hover:scale-[1.02] active:scale-[0.98] border border-emerald-400/50"
                : id === 2
                ? "bg-slate-900 hover:bg-slate-800 text-white dark:bg-gradient-to-r dark:from-[#22C55E] dark:to-[#16A34A] dark:text-slate-950 shadow-md hover:scale-[1.02] active:scale-[0.98] border border-slate-700 dark:border-emerald-400/30"
                : isCurrentPlan
                ? "bg-slate-200/80 dark:bg-white/10 text-slate-500 dark:text-slate-400 border border-slate-300/70 dark:border-white/10 cursor-default"
                : "bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 border border-emerald-500/50 hover:bg-emerald-50 dark:hover:bg-emerald-950/20"
            }`}
          >
            <span>
              {isCurrentPlan && id > 0
                ? "Renew Plan"
                : isCurrentPlan && id === 0
                ? "Current Plan (Free)"
                : id === 1
                ? "Get Started Now"
                : id === 2
                ? "Upgrade to Premium"
                : "Get Started Free"}
            </span>
            {isCurrentPlan && id === 0 ? null : (
              <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [currentVisible, setCurrentVisible] = useState(1);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const auth = useSelector(getUserData);
  const navigate = useRouter();
  const dispatch = useDispatch();

  // Sync theme with localStorage and document body
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

    const handleStorage = () => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setDarkMode(savedTheme === "dark");
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
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
    const handleResize = () => {
      setIsLargeScreen(
        typeof window !== "undefined" && window.innerWidth >= 768
      );
    };
    handleResize();
    typeof window !== "undefined" &&
      window.addEventListener("resize", handleResize);

    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextPricingCard = () => {
    if (currentVisible < 3) setCurrentVisible(currentVisible + 1);
  };

  const previousPricingCard = () => {
    if (currentVisible > 1) setCurrentVisible(currentVisible - 1);
  };

  const openModal = (plan) => {
    if (localStorage.getItem("UserEmail")) {
      dispatch(setPaymentModal(true));
      dispatch(setPlan(plan));
    } else {
      navigate.push("/solidity-shield-scan/auth");
    }
  };

  const [user, setUser] = useState(auth?.user);

  useEffect(() => {
    async function fetchUserData() {
      const jwt = typeof window !== "undefined" ? localStorage.getItem("UserJwtToken") : null;
      if (!jwt) {
        return; // Allow viewing pricing without login
      }
      dispatch(setLoader(true));
      try {
        const data = await getUser({ dispatch });
        if (data) setUser(data);
      } catch (error) {
        console.warn("Pricing: getUser network error, using cached data:", error.message);
      } finally {
        dispatch(setLoader(false));
      }
    }
    if (!user || Object.keys(user).length === 0) {
      fetchUserData();
    }
  }, [user, dispatch]);

  return (
    <div className={`sss-pricing-container ${darkMode ? "dark text-white" : "light text-slate-900"}`}>
      <MetaTags
        data={{
          title: "Solidity Shield Pricing — Smart Contract Audit Plans | SecureDApp",
          desc: "Explore Solidity Shield’s pricing for blockchain security. Compare features and choose the plan that fits your needs with SecureDApp’s solutions.",
          keywords:
            "solidity shield pricing, smart contract audit cost, blockchain security plans, SecureDApp",
          url: "https://securedapp.io/solidity-shield-scan/pricing",
        }}
      />

      {/* Header Section with Title, Subheading, and Light/Dark Switcher */}
      <div className="flex flex-col items-center text-center pt-8 pb-4 px-4 max-w-5xl mx-auto">
        {/* Light & Dark Mode Interactive Switcher Pill */}
        <div className="inline-flex items-center p-1 rounded-full border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl shadow-sm mb-5 transition-colors">
          <button
            onClick={() => toggleTheme(false)}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              !darkMode
                ? "bg-white text-slate-900 shadow-sm border border-slate-200/80"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <svg className="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
            <span>Light Glass</span>
          </button>
          <button
            onClick={() => toggleTheme(true)}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              darkMode
                ? "bg-slate-800 text-white shadow-sm border border-slate-700/60"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <svg className="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
            <span>Obsidian Glass</span>
          </button>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-3">
          <span>🛡️</span> SMART CONTRACT AUDIT TIERS
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Solidity Shield — Plans & Pricing
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-[#8B93A7] max-w-2xl mt-3 leading-relaxed">
          Continuous smart contract security from solo devs to audited enterprise protocols. Choose the tier engineered for your release pipeline.
        </p>

        {/* High-Converting Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-5 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-500 font-bold">✓</span> Instant automated scan activation
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-500 font-bold">✓</span> Change or cancel anytime
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-500 font-bold">✓</span> 100% Non-custodial code privacy
          </div>
        </div>
      </div>

      <div className="sss-pricing-plans-scrollable w-full">
        <div className="sss-pricing-plans">
          <div className="sss-pricing-plan-headers">
            <div className="sss-pricing-plan-headers-cards">
              {/* Feature Briefing Card (Desktop Column 1) */}
              <div className="sss-pricing-plan-headers-card-container hidden md:flex flex-col justify-between p-6 rounded-2xl liquid-glass-card">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
                    <span>⚡</span> TIER SELECTION
                  </div>
                  <div className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Feature Comparison
                  </div>
                  <div className="text-xs text-slate-500 dark:text-[#8B93A7] mt-2 leading-relaxed">
                    Compare automated spotters, vulnerability analysis, and public audit publishing across all three tiers.
                  </div>
                  <div className="mt-6 p-4 rounded-xl bg-slate-100/70 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-xs space-y-2">
                    <div className="font-semibold text-slate-800 dark:text-slate-200">Why Solidity Shield?</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                      Proprietary AST + AI vulnerability detection built specifically for EVM smart contracts.
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-slate-200/80 dark:border-white/10 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
                  <span>Compare full matrix</span>
                  <span className="text-emerald-500 font-bold text-sm">↓</span>
                </div>
              </div>

              {/* The Three Liquid Glass Pricing Cards */}
              {pricingDetails.map((detail, cardIndex) => {
                return (
                  detail.pricingCard.planType &&
                  (isLargeScreen || currentVisible === cardIndex) && (
                    <div key={cardIndex} className="sss-pricing-plan-headers-card-container">
                      <PricingPlanCard
                        icon={detail.pricingCard.icon}
                        planType={detail.pricingCard.planType}
                        price={detail.pricingCard.price}
                        description={detail.pricingCard.description}
                        details={detail.details}
                        onClick={() =>
                          detail.id > 0
                            ? openModal(detail.id)
                            : navigate.push("/solidity-shield-scan/auth")
                        }
                        id={detail.id}
                      />
                      <div className="sss-pricing-card-changer-buttons text-slate-500 dark:text-[#8B93A7]">
                        <div
                          onClick={previousPricingCard}
                          className="sss-pricing-card-changer-button-container cursor-pointer"
                        >
                          <FontAwesomeIcon
                            className="sss-pricing-card-changer-button"
                            icon={faChevronLeft}
                          />
                        </div>
                        <div
                          onClick={nextPricingCard}
                          className="sss-pricing-card-changer-button-container cursor-pointer"
                        >
                          <FontAwesomeIcon
                            className="sss-pricing-card-changer-button"
                            icon={faChevronRight}
                          />
                        </div>
                      </div>
                    </div>
                  )
                );
              })}
            </div>
          </div>

          {/* Feature Matrix / Comparison Table */}
          <div className="sss-pricing-plan-body">
            <div className="sss-pricing-plan-details-container">
              {pricingDetails.map((detail, planIndex) => {
                return (
                  (isLargeScreen ||
                    currentVisible === planIndex ||
                    planIndex === 0) && (
                    <div key={planIndex} className="sss-pricing-plan-detail-row">
                      {Object.keys(detail.details).map((feature) => {
                        return (
                          <div key={feature} className="sss-pricing-plan-detail-row-value-container">
                            <div
                              className={`sss-pricing-plan-detail-row-value ${
                                planIndex === 0 &&
                                "sss-pricing-plan-detail-row-value-first"
                              }`}
                            >
                              {detail.details[feature].value === "TICK" ? (
                                <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                              ) : detail.details[feature].value === "DASH" ? (
                                <span className="text-slate-400 dark:text-slate-600 font-bold text-base">—</span>
                              ) : (
                                <span
                                  className="text-slate-700 dark:text-slate-200"
                                  dangerouslySetInnerHTML={{ __html: detail.details[feature].value }}
                                />
                              )}
                              {detail.details[feature].info && (
                                <div className="sss-pricing-plan-detail-row-info-container group">
                                  <div className="w-4 h-4 rounded-full bg-slate-200/80 dark:bg-white/10 text-slate-500 dark:text-slate-400 flex items-center justify-center text-[10px] font-bold ml-1 cursor-help">
                                    i
                                  </div>
                                  <div className="sss-pricing-plan-detail-row-info">
                                    <div className="font-semibold text-slate-900 dark:text-white">
                                      <span dangerouslySetInnerHTML={{ __html: detail.details[feature].value }} />
                                    </div>
                                    <div className="text-slate-600 dark:text-slate-400 text-[11px] mt-0.5">
                                      {detail.details[feature].info}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Enterprise Custom Solution Banner */}
      <div className="sss-pricing-plan-footer mt-12">
        <div className="liquid-glass-card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto border border-slate-200/80 dark:border-white/10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 mb-2">
              ENTERPRISE & AUDIT FIRMS
            </div>
            <div className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">
              Need a Custom Enterprise Solution?
            </div>
            <div className="text-sm text-slate-600 dark:text-[#8B93A7] mt-1.5 max-w-xl">
              Get tailored scanner integrations, custom CI/CD audit pipelines, dedicated security engineer reviews, and high-volume smart contract discounts.
            </div>
          </div>
          <div className="sas-pricing-plan-footer-button-container flex-shrink-0">
            <CustomButton
              text={"Contact Security Team"}
              className={
                "border border-[#22C55E] text-[#16A34A] dark:text-[#22C55E] bg-emerald-500/10 hover:bg-[#22C55E] hover:text-[#0A1120] font-bold px-8 py-3 rounded-xl transition-all cursor-pointer shadow-sm hover:shadow-md"
              }
              onClick={() => navigate.push("/solidity-shield-scan/support")}
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Pricing;

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

// High-converting tier value framing (/industrial-brutalist-ui)
const planConfigs = {
  0: {
    specCode: "SPEC // TIER_01",
    badge: "STARTER // BASE",
    status: "SYS_ACTIVE",
    sku: "SKU-8849-01",
    tagline: "Essential AST scanner for single contracts",
    subtext: "NO_CARD_REQ // FOREVER_FREE",
    bullets: [
      { text: "01_CONTRACT_SCAN_CREDIT", included: true, highlight: false },
      { text: "AST_CORE_SUPER_SPOTTERS", included: true, highlight: false },
      { text: "INSTANT_AUDIT_SECURITY_SCORE", included: true, highlight: false },
      { text: "VULN_SEVERITY_BREAKDOWN", included: false, highlight: false },
      { text: "OFFICIAL_PDF_AUDIT_REPORT", included: false, highlight: false },
      { text: "GITHUB_3RD_PARTY_AUDITOR_PUBLISH", included: false, highlight: false },
    ],
  },
  1: {
    specCode: "SPEC // TIER_02",
    badge: "★ HERO_BUILD // RECOMMENDED",
    status: "SYS_OPTIMAL",
    sku: "SKU-8849-02",
    tagline: "Continuous audit pipeline for dApps & builders",
    subtext: "BILLED_MONTHLY // INSTANT_DISPATCH",
    bullets: [
      { text: "06_COMPREHENSIVE_SCANS // MO", included: true, highlight: true },
      { text: "FULL_VULN_SEVERITY_MAPPING", included: true, highlight: true },
      { text: "DETAILED_FIX_SPECIFICATIONS", included: true, highlight: false },
      { text: "OFFICIAL_PDF_AUDIT_REPORT", included: true, highlight: true },
      { text: "PRIORITY_CLOUD_SCAN_QUEUE", included: true, highlight: false },
      { text: "GITHUB_3RD_PARTY_AUDITOR_PUBLISH", included: false, highlight: false },
    ],
  },
  2: {
    specCode: "SPEC // TIER_03",
    badge: "ENTERPRISE // MIL-SPEC",
    status: "MAX_SECURITY",
    sku: "SKU-8849-03",
    tagline: "Protocol certification & external auditor publish",
    subtext: "ENTERPRISE_SUITE // 24/7_SUPPORT",
    bullets: [
      { text: "24_ENTERPRISE_SCANS // MO", included: true, highlight: true },
      { text: "FULL_VULN_SEVERITY_MAPPING", included: true, highlight: false },
      { text: "OFFICIAL_PDF_AUDIT_REPORT", included: true, highlight: false },
      { text: "PUBLIC_AUDIT_CERTIFICATION_URL", included: true, highlight: true },
      { text: "GITHUB_3RD_PARTY_AUDITOR_PUBLISH", included: true, highlight: true },
      { text: "24/7_DEDICATED_SECURITY_SUPPORT", included: true, highlight: false },
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
      {/* Industrial Brutalist Machine Chassis */}
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
          <div className="flex items-center justify-between font-mono text-[10px] tracking-widest uppercase border-b-2 border-slate-200 dark:border-slate-800 pb-2 mb-3.5 text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-none bg-emerald-500 inline-block animate-pulse" />
              <span>{config.specCode}</span>
            </div>
            <div className="font-extrabold text-[#16A34A] dark:text-[#22C55E]">
              {isCurrentPlan ? "[SYS_ACTIVE]" : `[${config.status}]`}
            </div>
          </div>

          {/* Hazard Caution Bar on Hero / Plus Tier */}
          {isPopular && (
            <div className="mb-3 -mt-1">
              <div className="hazard-strip mb-2" />
              <div className="inline-block px-2.5 py-0.5 font-mono text-[10px] font-black tracking-widest uppercase bg-[#22C55E] text-slate-950 border border-slate-950 shadow-[2px_2px_0px_#000]">
                ★ RECOMMENDED TIER // MAXIMUM VALUE
              </div>
            </div>
          )}

          {/* Plan Identifier & Mechanical Icon Chassis */}
          <div className="flex items-center justify-between gap-3 mt-1">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-none border-2 border-slate-900 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 shadow-[3px_3px_0px_#0F172A] dark:shadow-[3px_3px_0px_#000000] flex items-center justify-center p-2.5 flex-shrink-0">
                <Image src={icon} alt={planType} width={28} height={28} className="object-contain" />
              </div>
              <div>
                <div className="text-2xl font-black font-mono tracking-tight uppercase text-slate-950 dark:text-white">
                  {planType}
                </div>
                <div className="font-mono text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {config.tagline}
                </div>
              </div>
            </div>

            {/* Industrial Hardware Status Badge */}
            {isCurrentPlan ? (
              <span className="font-mono text-[10px] font-black uppercase px-2 py-0.5 bg-emerald-500/20 text-[#16A34A] dark:text-[#22C55E] border border-emerald-500/50">
                [ACTIVE]
              </span>
            ) : id === 2 ? (
              <span className="font-mono text-[10px] font-black uppercase px-2 py-0.5 bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/50">
                [MIL_SPEC]
              </span>
            ) : (
              <span className="font-mono text-[10px] font-black uppercase px-2 py-0.5 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
                [BASE]
              </span>
            )}
          </div>

          {/* Monospace Price Readout */}
          <div className="mt-5 pb-4 border-b-2 border-slate-200 dark:border-slate-800">
            <div className="flex items-baseline gap-1.5 font-mono">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#16A34A] dark:text-[#22C55E] tracking-tight">
                {displayPrice}
              </span>
              <span className="text-xs font-black text-slate-500 dark:text-slate-400">
                {"/MONTH"}
              </span>
            </div>
            <div className="font-mono text-[10px] font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
              [ {config.subtext} ]
            </div>
          </div>

          {/* Technical Specs Breakdown Checklist */}
          <div className="mt-5 space-y-2 font-mono">
            <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              [ SYSTEM_CAPABILITIES ]
            </div>
            {config.bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs leading-snug">
                <span className={`font-mono font-black text-xs ${bullet.included ? "text-[#16A34A] dark:text-[#22C55E]" : "text-slate-400 dark:text-slate-600"}`}>
                  {bullet.included ? "[✓]" : "[—]"}
                </span>
                <span
                  className={`${
                    bullet.included
                      ? bullet.highlight
                        ? "text-slate-950 dark:text-white font-extrabold"
                        : "text-slate-800 dark:text-slate-200 font-bold"
                      : "text-slate-400 dark:text-slate-600 line-through opacity-60"
                  }`}
                >
                  {bullet.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Industrial Tactile Punch Button */}
        <div>
          <div onClick={onClick} className="mt-7 pt-2">
            <button
              className={`industrial-btn w-full py-3.5 px-4 text-xs sm:text-sm font-black flex justify-center items-center gap-x-2 cursor-pointer ${
                id === 1
                  ? "industrial-btn-primary"
                  : id === 2
                  ? "industrial-btn-secondary"
                  : isCurrentPlan
                  ? "industrial-btn-disabled"
                  : "industrial-btn-primary"
              }`}
            >
              <span>
                {isCurrentPlan && id > 0
                  ? "RENEW_PLAN [->]"
                  : isCurrentPlan && id === 0
                  ? "CURRENT_PLAN [ACTIVE]"
                  : id === 1
                  ? "INITIALIZE PLUS [->]"
                  : id === 2
                  ? "DEPLOY PREMIUM [->]"
                  : "START_FREE [->]"}
              </span>
              <FontAwesomeIcon icon={faArrowRight} className="text-xs ml-1" />
            </button>
          </div>

          {/* Barcode & Telemetry SKU Footer */}
          <div className="mt-4 pt-2 border-t border-dashed border-slate-200 dark:border-slate-800 flex items-center justify-between font-mono text-[9px] text-slate-400 dark:text-slate-500">
            <span>// {config.sku}</span>
            <span>CLEARANCE: LVL-0{id + 1}</span>
          </div>
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

      {/* Industrial Brutalist Header & Terminal Controls */}
      <div className="flex flex-col items-center text-center pt-8 pb-4 px-4 max-w-5xl mx-auto font-mono">
        {/* Mechanical Mode Switcher Pill */}
        <div className="inline-flex items-center p-1 rounded-none border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-[3px_3px_0px_#0F172A] dark:shadow-[3px_3px_0px_#000000] mb-5">
          <button
            onClick={() => toggleTheme(false)}
            className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
              !darkMode
                ? "bg-[#22C55E] text-slate-950 shadow-sm"
                : "text-slate-500 hover:text-white"
            }`}
          >
            <span>[LIGHT_TERMINAL]</span>
          </button>
          <button
            onClick={() => toggleTheme(true)}
            className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
              darkMode
                ? "bg-[#22C55E] text-slate-950 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <span>[DARK_TERMINAL]</span>
          </button>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 font-mono text-[11px] font-black uppercase tracking-widest text-[#16A34A] dark:text-[#22C55E] border border-[#16A34A]/40 dark:border-[#22C55E]/40 mb-3 bg-emerald-500/10">
          <span>// HARDWARE_SECURITY_TIERS</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-mono text-slate-950 dark:text-white tracking-tight uppercase">
          SOLIDITY_SHIELD // PRICING_MATRIX
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-[#8B93A7] max-w-2xl mt-3 font-mono leading-relaxed uppercase tracking-wide">
          // CONTINUOUS_EVM_SMART_CONTRACT_SECURITY // SELECT_TIER_TO_DEPLOY
        </p>

        {/* Industrial System Readouts */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-5 font-mono text-xs text-slate-600 dark:text-slate-400 font-bold uppercase">
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-500">[✓]</span> ZERO_CODE_RETENTION
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-500">[✓]</span> AST_STATIC_ENGINE
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-500">[✓]</span> 1-CLICK_CANCEL_ANYTIME
          </div>
        </div>
      </div>

      <div className="sss-pricing-plans-scrollable w-full">
        <div className="sss-pricing-plans">
          <div className="sss-pricing-plan-headers">
            <div className="sss-pricing-plan-headers-cards">
              {/* Feature Briefing Card (Desktop Column 1) */}
              <div className="sss-pricing-plan-headers-card-container hidden md:flex flex-col justify-between p-6 industrial-card">
                <span className="crosshair-tl text-slate-400 dark:text-slate-600">+</span>
                <span className="crosshair-tr text-slate-400 dark:text-slate-600">+</span>
                <span className="crosshair-bl text-slate-400 dark:text-slate-600">+</span>
                <span className="crosshair-br text-slate-400 dark:text-slate-600">+</span>
                <div>
                  <div className="font-mono text-[10px] font-black uppercase tracking-widest text-[#16A34A] dark:text-[#22C55E] border-b border-slate-200 dark:border-slate-800 pb-2 mb-3">
                    [ SYS // SPECIFICATION_MATRIX ]
                  </div>
                  <div className="text-xl font-black font-mono text-slate-950 dark:text-white tracking-tight uppercase">
                    FEATURE COMPARISON
                  </div>
                  <div className="font-mono text-xs text-slate-500 dark:text-[#8B93A7] mt-2 leading-relaxed">
                    Audit volume, vulnerability depth, and GitHub third-party certification across tiers.
                  </div>
                  <div className="mt-6 p-4 border-2 border-dashed border-slate-300 dark:border-slate-700 font-mono text-xs space-y-2">
                    <div className="font-bold text-slate-950 dark:text-white">[ AUDIT_PRECISION ]</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                      AST + Slither + AI super spotters tailored for high-stakes EVM deployment.
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t-2 border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
                  <span>FULL_MATRIX_BELOW</span>
                  <span className="text-emerald-500 font-bold text-sm">[v]</span>
                </div>
              </div>

              {/* The Three Industrial Brutalist Pricing Cards */}
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
                                "sss-pricing-plan-detail-row-value-first font-mono"
                              }`}
                            >
                              {detail.details[feature].value === "TICK" ? (
                                <span className="font-mono font-black text-sm text-[#16A34A] dark:text-[#22C55E]">
                                  [✓]
                                </span>
                              ) : detail.details[feature].value === "DASH" ? (
                                <span className="font-mono text-slate-400 dark:text-slate-600 font-bold text-sm">
                                  [—]
                                </span>
                              ) : (
                                <span
                                  className="font-mono text-xs text-slate-700 dark:text-slate-200"
                                  dangerouslySetInnerHTML={{ __html: detail.details[feature].value }}
                                />
                              )}
                              {detail.details[feature].info && (
                                <div className="sss-pricing-plan-detail-row-info-container group">
                                  <div className="w-4 h-4 rounded-none border border-slate-400 dark:border-slate-600 bg-slate-200/80 dark:bg-white/10 text-slate-700 dark:text-slate-300 flex items-center justify-center text-[10px] font-mono font-bold ml-1 cursor-help">
                                    ?
                                  </div>
                                  <div className="sss-pricing-plan-detail-row-info font-mono">
                                    <div className="font-bold text-slate-900 dark:text-white">
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
      <div className="sss-pricing-plan-footer mt-14">
        <div className="industrial-card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto relative">
          <span className="crosshair-tl text-slate-400 dark:text-slate-600">+</span>
          <span className="crosshair-tr text-slate-400 dark:text-slate-600">+</span>
          <span className="crosshair-bl text-slate-400 dark:text-slate-600">+</span>
          <span className="crosshair-br text-slate-400 dark:text-slate-600">+</span>
          <div>
            <div className="inline-block px-2 py-0.5 font-mono text-[10px] font-black uppercase tracking-widest bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border border-cyan-500/40 mb-2">
              [ ENTERPRISE // PROTOCOL_LEVEL ]
            </div>
            <div className="text-xl md:text-2xl font-black font-mono text-slate-950 dark:text-white uppercase tracking-tight">
              NEED A CUSTOM SECURITY PIPELINE?
            </div>
            <div className="font-mono text-xs text-slate-600 dark:text-[#8B93A7] mt-1.5 max-w-xl leading-relaxed">
              Custom CI/CD scanning runners, dedicated audit engineer retainers, white-label PDF generation, and multi-contract team volume.
            </div>
          </div>
          <div className="sas-pricing-plan-footer-button-container flex-shrink-0">
            <button
              className="industrial-btn industrial-btn-primary px-8 py-3.5 text-xs sm:text-sm font-black cursor-pointer"
              onClick={() => navigate.push("/solidity-shield-scan/support")}
            >
              CONTACT_SECURITY_TEAM [-&gt;]
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Pricing;

"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { 
  Radio, 
  ShieldCheck, 
  ArrowRight, 
  ChevronDown, 
  Lock, 
  CheckCircle2, 
  Download, 
  Calendar, 
  ExternalLink, 
  Layers, 
  FileText, 
  Sparkles,
  Server,
  Wifi,
  Database,
  RefreshCw,
  Clock,
  Building2,
  Users,
  KeyRound,
  AlertTriangle,
  FileCheck
} from "lucide-react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/footer";
import BookMeetCta from "../../../components/common/bookMeetCta";
import DPDPLiveCountdownTimer from "../../../components/common/DPDPLiveCountdownTimer";
import InteractiveTelecomConsentSimulator from "./InteractiveTelecomConsentSimulator";
import { TelecomDemoModal, TelecomChecklistModal } from "./TelecomModals";
import { 
  telecomConsentSchema, 
  metaData, 
  partnerLogos, 
  jumpNavLinks,
  categoryMatrix,
  licenceVsConsentTable,
  touchpointsTable,
  secureCmsModules,
  securityLayers,
  rolloutSteps,
  faqsData,
  officialSources,
  dpdpResources
} from "./data";

export default function TelecomConsentPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [checklistModalOpen, setChecklistModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [simulatorTab, setSimulatorTab] = useState("licence-vs-consent");
  const [highlightedCategory, setHighlightedCategory] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToSection = (e, href) => {
    if (e && e.preventDefault) e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const offset = 95;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      if (typeof window !== "undefined" && window.history && window.history.pushState) {
        window.history.pushState(null, "", `#${id}`);
      }
    }
  };

  const handleHeroCategoryChip = (catKey) => {
    setHighlightedCategory(catKey);
    const element = document.getElementById("categories");
    if (element) {
      const offset = 95;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleHeroMetricClick = (tabKey) => {
    setSimulatorTab(tabKey);
    const element = document.getElementById("simulator");
    if (element) {
      const offset = 95;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      if (typeof window !== "undefined" && window.history && window.history.pushState) {
        window.history.pushState(null, "", "#simulator");
      }
    }
  };

  return (
    <div className="product-container bg-primary dark:bg-secondary font-outfit text-secondary dark:text-white transition-colors duration-200">
      {/* Head & Schema */}
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <link rel="canonical" href={metaData.canonical} />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:url" content={metaData.canonical} />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(telecomConsentSchema) }}
        />
      </Head>

      {/* Global Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] pt-28 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center overflow-hidden bg-grid dark:bg-secondary">
        {/* Cyber Glow Ambient Backdrop */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-radial from-tertiary/15 via-transparent to-transparent blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs font-mono text-labelGray dark:text-gray-400 mb-6">
            <Link href="/" className="hover:text-tertiary transition-colors">
              Home
            </Link>
            <span>›</span>
            <Link href="/dpdp-compliance-platform" className="hover:text-tertiary transition-colors">
              DPDP Compliance Platform
            </Link>
            <span>›</span>
            <span className="text-secondary dark:text-white font-semibold">Telecom and ISPs</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Copy Column */}
            <div className="lg:col-span-8 space-y-6">
              {/* Live Regulatory Countdown */}
              <div className="w-full max-w-3xl">
                <DPDPLiveCountdownTimer 
                  label="Core DPDP Enforcement: 13 May 2027" 
                  sublabel="DoT Category A, B & C ISPs" 
                />
              </div>

              {/* Regulatory Alignment Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-tertiary/10 border border-tertiary/20 text-xs font-mono font-bold text-tertiary">
                <Radio className="w-3.5 h-3.5" />
                <span>DoT Unified Licence &amp; DPDP Act 2023 · Category A, B &amp; C ISPs</span>
              </div>

              {/* Main Display Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-outfit tracking-tight text-secondary dark:text-white leading-[1.1]">
                Consent Management for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-tertiary via-emerald-400 to-teal-400">
                  Telecom &amp; ISPs
                </span>
              </h1>

              {/* Subheadline / Lead Paragraph */}
              <p className="text-base sm:text-lg font-normal font-nunitoSans text-labelGray dark:text-gray-300 leading-relaxed max-w-3xl">
                SecureCMS, the consent management platform by SecureDApp, helps internet service providers separate what their licence requires from what needs subscriber consent, record that consent across apps, franchisees and support channels, and keep audit-ready proof, built for the DPDP Act 2023 and DPDP Rules 2025.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setDemoModalOpen(true)}
                  className="px-8 py-4 bg-tertiary hover:opacity-95 text-secondary font-bold font-outfit rounded-xl shadow-[0_0_20px_rgba(18,213,118,0.3)] hover:shadow-[0_0_30px_rgba(18,213,118,0.5)] transition-all flex items-center space-x-2 text-base cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book an ISP demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setChecklistModalOpen(true)}
                  className="px-6 py-4 bg-white/80 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 text-secondary dark:text-white font-bold font-outfit rounded-xl border border-gray-200 dark:border-white/10 transition-all flex items-center space-x-2 text-base backdrop-blur-md cursor-pointer"
                >
                  <Download className="w-4 h-4 text-tertiary" />
                  <span>Download the ISP DPDP checklist</span>
                </button>
              </div>

              {/* Pick Your Category Interactive Chips */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-labelGray dark:text-gray-400 mr-1">
                  Pick your category:
                </span>
                <button
                  type="button"
                  onClick={() => handleHeroCategoryChip("Category A – National")}
                  className="px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-semibold transition-colors cursor-pointer"
                >
                  Category A – National
                </button>
                <button
                  type="button"
                  onClick={() => handleHeroCategoryChip("Category B – Circle / Metro")}
                  className="px-3 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-800 dark:text-blue-300 text-xs font-mono font-semibold transition-colors cursor-pointer"
                >
                  Category B – Circle/Metro
                </button>
                <button
                  type="button"
                  onClick={() => handleHeroCategoryChip("Category C – SSA (Local)")}
                  className="px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs font-mono font-semibold transition-colors cursor-pointer"
                >
                  Category C – SSA/Local
                </button>
              </div>

              {/* Quick Answer Banner */}
              <div className="p-4 rounded-2xl bg-amber-500/[0.08] dark:bg-amber-500/[0.12] border border-amber-500/30 text-xs sm:text-sm font-nunitoSans text-amber-900 dark:text-amber-200 flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-300 flex-shrink-0 flex items-center justify-center mt-0.5">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="font-outfit font-bold">Quick answer:</strong> KYC, IPDR logs and lawful interception are licence duties and don&apos;t need consent. Marketing, OTT bundles and usage analytics do.
                </div>
              </div>
            </div>

            {/* Quick Metrics / Interactive Trust Column */}
            <div className="lg:col-span-4 bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-2xl rounded-3xl p-6 sm:p-7 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-mono uppercase tracking-wider text-labelGray dark:text-gray-400">
                  DoT &amp; DPDP Dual Compliance
                </h3>
                <span className="text-[10px] font-mono text-tertiary">Click to Simulate</span>
              </div>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => handleHeroMetricClick("ipdr-erasure")}
                  className="w-full text-left p-3.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-tertiary/40 hover:bg-tertiary/[0.04] transition-all group cursor-pointer block"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans">IPDR Retention Duty</div>
                    <ArrowRight className="w-3.5 h-3.5 text-tertiary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-sm font-bold text-secondary dark:text-white mt-0.5 font-outfit">2-Year DoT Legal Hold</div>
                  <div className="text-[11px] text-tertiary mt-1 font-mono flex items-center justify-between">
                    <span>21 Dec 2021 Circular Aligned</span>
                    <span className="text-[10px] underline">Test Erasure &rarr;</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleHeroMetricClick("franchisee-otp")}
                  className="w-full text-left p-3.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-tertiary/40 hover:bg-tertiary/[0.04] transition-all group cursor-pointer block"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans">Franchisee &amp; LCO Onboarding</div>
                    <ArrowRight className="w-3.5 h-3.5 text-tertiary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-sm font-bold text-secondary dark:text-white mt-0.5 font-outfit">OTP CAF Verification</div>
                  <div className="text-[11px] text-tertiary mt-1 font-mono flex items-center justify-between">
                    <span>Eliminates Paper Signatures</span>
                    <span className="text-[10px] underline">Simulate OTP &rarr;</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleHeroMetricClick("ott-sync")}
                  className="w-full text-left p-3.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-tertiary/20 hover:border-tertiary hover:bg-tertiary/[0.06] transition-all group cursor-pointer block shadow-sm ring-1 ring-tertiary/10"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-tertiary font-semibold font-nunitoSans">OTT Bundle Revocation</div>
                    <ArrowRight className="w-3.5 h-3.5 text-tertiary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-sm font-bold text-secondary dark:text-white mt-0.5 font-outfit">&lt; 80ms Webhook Sync</div>
                  <div className="text-[11px] text-tertiary mt-1 font-mono flex items-center justify-between">
                    <span>Hotstar, SonyLIV &amp; Prime</span>
                    <span className="text-[10px] underline font-bold">Fire Webhook &rarr;</span>
                  </div>
                </button>
              </div>

              {/* Partner Badges */}
              <div className="mt-6 pt-5 border-t border-gray-200 dark:border-white/10 space-y-2">
                <div className="text-[11px] font-mono text-labelGray dark:text-gray-400">
                  Regulatory Alignment Frameworks:
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {partnerLogos.map((p, idx) => (
                    <div key={idx} className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 text-[10px] font-mono text-secondary dark:text-gray-300 truncate">
                      {p.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Quick Nav */}
      <div className="sticky top-16 z-30 bg-white/95 dark:bg-[#001938]/95 backdrop-blur-md border-y border-gray-200 dark:border-white/10 py-2.5 px-4 sm:px-6 lg:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2">
          {jumpNavLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={(e) => scrollToSection(e, `#${link.id}`)}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-gray-100 hover:bg-tertiary/15 hover:border-tertiary/40 hover:text-secondary dark:bg-white/5 dark:hover:bg-tertiary/20 dark:hover:text-tertiary text-secondary dark:text-gray-200 border border-gray-200/80 dark:border-white/10 transition-all duration-150 cursor-pointer shadow-xs active:scale-95"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>

      {/* SECTION 1: What is consent management for telecom and ISPs? */}
      <section id="overview" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-tertiary">
              Regulatory Context
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-outfit mt-2 text-secondary dark:text-white">
              What is consent management for telecom and ISPs?
            </h2>
            <p className="mt-4 text-base font-nunitoSans text-labelGray dark:text-gray-300 leading-relaxed">
              Consent management for telecom and ISPs is how an internet service provider records what each subscriber has agreed to beyond running their connection, such as marketing offers, OTT bundle sharing and usage analytics. SecureCMS, the consent management platform by SecureDApp, keeps these purposes separate from the KYC, log retention and interception duties your licence already requires, checks consent before data is used, and keeps tamper-proof records for DPDP audits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-lg font-bold font-outfit text-secondary dark:text-white">
                The Section 6(10) Proof Mandate
              </h3>
              <p className="text-sm font-nunitoSans text-labelGray dark:text-gray-300 leading-relaxed">
                Under the DPDP Act 2023, if a question ever comes up, the ISP has to prove that notice was given and consent was taken (section 6(10)). A signature on a paper CAF sitting in a franchisee drawer rarely proves consent for marketing or analytics.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-lg font-bold font-outfit text-secondary dark:text-white">
                The Telecom Billing Illustration
              </h3>
              <p className="text-sm font-nunitoSans text-labelGray dark:text-gray-300 leading-relaxed">
                The DPDP Act&apos;s own illustration uses a telecom operator: a customer who switches from emailed bills to app-only bills, after which the operator and its processor must stop emailing. That is consent management in miniature, and it applies to every ISP.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-lg font-bold font-outfit text-secondary dark:text-white">
                Short, High-Speed Operational Flow
              </h3>
              <p className="text-sm font-nunitoSans text-labelGray dark:text-gray-300 leading-relaxed">
                The subscriber deals with your self-care app, a franchisee or support. SecureCMS records the choice in one unified consent repository. Your billing, CRM, marketing tools and OTT partners check or receive that choice in real time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DPDP obligations by ISP licence category */}
      <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-white/[0.02] border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-tertiary">
              Licence Architecture
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-outfit mt-2 text-secondary dark:text-white">
              DPDP obligations by ISP licence category
            </h2>
            <p className="mt-4 text-base font-nunitoSans text-labelGray dark:text-gray-300 leading-relaxed">
              The DPDP Act applies the same way to every ISP, whether it holds a Category A national, Category B circle or Category C SSA authorisation. What changes with category is scale: national ISPs handle more subscribers and partners and are more likely to be notified as Significant Data Fiduciaries, while local ISPs often collect data through franchisees and cable partners.
            </p>
            <p className="mt-2 text-xs font-mono text-gray-500 dark:text-gray-400">
              Note: Under the Unified Licence, Category A is national, Category B covers a telecom circle or metro area, and Category C is an SSA (Secondary Switching Area, roughly district-level).
            </p>
          </div>

          {/* Category Table */}
          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-xl">
            <table className="w-full text-left text-sm font-nunitoSans">
              <thead className="bg-gray-100 dark:bg-white/5 font-outfit text-xs uppercase tracking-wider text-secondary dark:text-white border-b border-gray-200 dark:border-white/10">
                <tr>
                  <th className="p-4 sm:p-5">Licence Category</th>
                  <th className="p-4 sm:p-5">Typical Profile</th>
                  <th className="p-4 sm:p-5">Main Consent Risk</th>
                  <th className="p-4 sm:p-5">SDF Likelihood</th>
                  <th className="p-4 sm:p-5">SecureCMS Fit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-white/10">
                {categoryMatrix.map((item, idx) => {
                  const isHighlighted = highlightedCategory === item.category;
                  return (
                    <tr 
                      key={idx} 
                      className={`transition-colors ${
                        isHighlighted 
                          ? "bg-tertiary/10 dark:bg-tertiary/15 font-semibold" 
                          : "hover:bg-gray-50 dark:hover:bg-white/5"
                      }`}
                    >
                      <td className="p-4 sm:p-5 font-bold font-outfit text-secondary dark:text-white whitespace-nowrap">
                        <div className="flex flex-col">
                          <span>{item.category}</span>
                          <span className="text-[11px] font-mono font-normal text-tertiary mt-0.5">
                            {item.badge}
                          </span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-5 text-gray-600 dark:text-gray-300">
                        {item.typicalProfile}
                      </td>
                      <td className="p-4 sm:p-5 text-gray-600 dark:text-gray-300">
                        {item.mainConsentRisk}
                      </td>
                      <td className="p-4 sm:p-5 whitespace-nowrap">
                        <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                          {item.sdfLikelihood}
                        </span>
                      </td>
                      <td className="p-4 sm:p-5 text-xs text-gray-500 dark:text-gray-400">
                        {item.secureCmsFit}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-blue-500/[0.08] border border-blue-500/20 text-xs font-nunitoSans text-blue-900 dark:text-blue-200">
            <strong>Principal Telecommunication Services Rules 2026:</strong> Under the new PTS Rules 2026, new Internet Service authorisations are granted for a national or telecom circle/metro area. Existing UL-ISP licensees, including Category C, continue under their licence until they migrate. Your DPDP duties stay the same either way.
          </div>
        </div>
      </section>

      {/* SECTION 3: What your licence requires vs what needs subscriber consent */}
      <section id="licence-vs-consent" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-tertiary">
              Statutory Boundary
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-outfit mt-2 text-secondary dark:text-white">
              What your licence requires vs what needs subscriber consent
            </h2>
            <p className="mt-4 text-base font-nunitoSans text-labelGray dark:text-gray-300 leading-relaxed">
              ISPs do not need subscriber consent for processing that their licence or the law requires, such as customer verification (KYC), keeping IPDR and login logs for the required period, lawful interception and keeping data in India. Consent is needed for purposes beyond providing the connection, such as promotional offers, sharing data with OTT partners for bundles and analysing usage for marketing.
            </p>
          </div>

          {/* Full 9-Row Table */}
          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-xl">
            <table className="w-full text-left text-sm font-nunitoSans">
              <thead className="bg-gray-100 dark:bg-white/5 font-outfit text-xs uppercase tracking-wider text-secondary dark:text-white border-b border-gray-200 dark:border-white/10">
                <tr>
                  <th className="p-4 sm:p-5">ISP Purpose</th>
                  <th className="p-4 sm:p-5">Usual Legal Basis</th>
                  <th className="p-4 sm:p-5">What SecureCMS Does</th>
                  <th className="p-4 sm:p-5">Consent Required?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-white/10">
                {licenceVsConsentTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-secondary dark:text-white font-outfit">
                      {row.purpose}
                    </td>
                    <td className="p-4 sm:p-5 text-gray-600 dark:text-gray-300">
                      {row.basis}
                    </td>
                    <td className="p-4 sm:p-5 text-xs text-gray-500 dark:text-gray-400">
                      {row.whatSecureCmsDoes}
                    </td>
                    <td className="p-4 sm:p-5 whitespace-nowrap">
                      {row.isLicenceDuty ? (
                        <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                          <Lock className="w-3 h-3" />
                          <span>No (Licence Duty)</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-tertiary/10 text-tertiary border border-tertiary/20">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Yes (Opt-in)</span>
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 4: IPDR and log retention vs erasure requests */}
      <section id="ipdr-retention" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-white/[0.02] border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-tertiary">
                Statutory Conflict Resolution
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold font-outfit text-secondary dark:text-white">
                IPDR and log retention vs erasure requests
              </h2>
              <p className="text-base font-nunitoSans text-labelGray dark:text-gray-300 leading-relaxed">
                When a subscriber leaves and asks for erasure, an ISP must delete data it no longer needs, but it must keep IPDR and login records for at least the period its licence requires. The Unified Licence sets that at a minimum of two years.
              </p>
              <p className="text-sm font-nunitoSans text-labelGray dark:text-gray-300 leading-relaxed">
                The DPDP Rules 2025 set a one-year floor for security logs and say a longer period under another law prevails, so for IPDR the licence figure is the one to follow. SecureCMS logs which records are held, the licence reason and the release date, and erases the rest.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleHeroMetricClick("ipdr-erasure")}
                  className="px-6 py-3 bg-tertiary hover:opacity-95 text-secondary font-bold font-outfit rounded-xl transition-all flex items-center space-x-2 text-sm cursor-pointer shadow-md"
                >
                  <Clock className="w-4 h-4" />
                  <span>Launch IPDR Legal Hold Simulator</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-7 shadow-xl space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-secondary dark:text-white font-mono flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-tertiary" />
                <span>Statutory Log Retention Hierarchy</span>
              </h3>
              
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs">
                <div className="font-bold text-amber-900 dark:text-amber-200 font-outfit">
                  DoT UL Amendment (21 Dec 2021)
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-1">
                  Mandatory 24 months (2 years) for IPDR, login/logout, AAA RADIUS and NAT allocation records. Prevails over general laws.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs">
                <div className="font-bold text-blue-900 dark:text-blue-200 font-outfit">
                  DPDP Rules 2025 (Rule 11 Security Baseline)
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-1">
                  12 months baseline security log retention. Rule specifies that where sector laws require a longer retention period, the longer period governs.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs">
                <div className="font-bold text-emerald-900 dark:text-emerald-200 font-outfit">
                  SecureCMS Automated Legal Hold
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-1">
                  Automates partial erasure under Section 12: erases marketing &amp; profiling data, locks IPDR under 2-year licence hold with immutable release audit timestamp.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Where ISPs collect subscriber consent */}
      <section id="touchpoints" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-tertiary">
              Field &amp; Digital Vulnerabilities
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-outfit mt-2 text-secondary dark:text-white">
              Where ISPs collect subscriber consent
            </h2>
            <p className="mt-4 text-base font-nunitoSans text-labelGray dark:text-gray-300 leading-relaxed">
              Subscriber consent is collected at many points, and the weak ones are usually the field and franchisee touchpoints rather than the app. Each row below is a place where an ISP typically loses the proof it will later need.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-xl">
            <table className="w-full text-left text-sm font-nunitoSans">
              <thead className="bg-gray-100 dark:bg-white/5 font-outfit text-xs uppercase tracking-wider text-secondary dark:text-white border-b border-gray-200 dark:border-white/10">
                <tr>
                  <th className="p-4 sm:p-5">Touchpoint</th>
                  <th className="p-4 sm:p-5">Common Problem Today</th>
                  <th className="p-4 sm:p-5">SecureCMS Solution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-white/10">
                {touchpointsTable.map((tp, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                    <td className="p-4 sm:p-5 font-bold font-outfit text-secondary dark:text-white whitespace-nowrap">
                      {tp.touchpoint}
                    </td>
                    <td className="p-4 sm:p-5 text-gray-600 dark:text-gray-300">
                      {tp.commonProblem}
                    </td>
                    <td className="p-4 sm:p-5 text-xs text-tertiary font-semibold">
                      {tp.solution}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 6: Interactive Telecom & ISP Simulator */}
      <section id="simulator" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-white/[0.02] border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-tertiary">
              Interactive Testbench
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-outfit mt-2 text-secondary dark:text-white">
              Interactive Telecom &amp; ISP Consent Engine Simulator
            </h2>
            <p className="mt-3 text-base font-nunitoSans text-labelGray dark:text-gray-300">
              Test how SecureCMS locks statutory DoT licence duties, authenticates field franchisee CAF onboarding with OTP, executes partial erasure with 2-year IPDR legal holds, and dispatches sub-80ms OTT bundle webhooks.
            </p>
          </div>

          <InteractiveTelecomConsentSimulator 
            activeTab={simulatorTab}
            setActiveTab={setSimulatorTab}
            onOpenChecklist={() => setChecklistModalOpen(true)}
          />
        </div>
      </section>

      {/* SECTION 7: How SecureCMS manages consent for ISPs */}
      <section id="modules" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-tertiary">
              Platform Architecture
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-outfit mt-2 text-secondary dark:text-white">
              How SecureCMS manages consent for ISPs
            </h2>
            <p className="mt-4 text-base font-nunitoSans text-labelGray dark:text-gray-300 leading-relaxed">
              SecureCMS keeps one consent record per subscriber across field teams, franchisees, apps and support. It separates licence duties from consent-based purposes, collects consent with OTP on email, SMS or WhatsApp, limits what each franchisee can see, passes opt-outs to marketing and partner systems in real time, and handles rights requests and grievances with DPO escalation.
            </p>
          </div>

          {/* Module Table */}
          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-xl mb-12">
            <table className="w-full text-left text-sm font-nunitoSans">
              <thead className="bg-gray-100 dark:bg-white/5 font-outfit text-xs uppercase tracking-wider text-secondary dark:text-white border-b border-gray-200 dark:border-white/10">
                <tr>
                  <th className="p-4 sm:p-5">ISP Problem</th>
                  <th className="p-4 sm:p-5">SecureCMS Module</th>
                  <th className="p-4 sm:p-5">Operational Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-white/10">
                {secureCmsModules.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-secondary dark:text-white font-outfit">
                      {item.problem}
                    </td>
                    <td className="p-4 sm:p-5 text-tertiary font-mono text-xs font-bold">
                      {item.module}
                    </td>
                    <td className="p-4 sm:p-5 text-xs text-gray-600 dark:text-gray-300">
                      {item.result}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Deep Dive Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-3">
              <h3 className="text-base font-bold font-outfit text-secondary dark:text-white">
                Separating Licence Duties from Consent
              </h3>
              <p className="text-xs font-nunitoSans text-gray-600 dark:text-gray-300 leading-relaxed">
                Tag KYC, IPDR and interception as licence-duty processing, and everything else as a consent purpose. Subscribers see notice for the first group and real choice for the second in English or Indian Eighth Schedule languages.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-3">
              <h3 className="text-base font-bold font-outfit text-secondary dark:text-white">
                Franchisee &amp; Cable Partner OTP
              </h3>
              <p className="text-xs font-nunitoSans text-gray-600 dark:text-gray-300 leading-relaxed">
                The franchisee enters the subscriber&apos;s mobile number or email, and the subscriber confirms with an OTP on SMS, email or WhatsApp. The ISP gets a verified record, whoever held the form.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-3">
              <h3 className="text-base font-bold font-outfit text-secondary dark:text-white">
                Marketing &amp; OTT Bundle Consent
              </h3>
              <p className="text-xs font-nunitoSans text-gray-600 dark:text-gray-300 leading-relaxed">
                Promotions, WhatsApp offers and bundle sharing each get their own purpose, and withdrawal is as easy as opting in. Partner webhooks pass revocations to streaming platforms in real-time.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-3">
              <h3 className="text-base font-bold font-outfit text-secondary dark:text-white">
                Evidence Ready for Audits
              </h3>
              <p className="text-xs font-nunitoSans text-gray-600 dark:text-gray-300 leading-relaxed">
                Every consent event goes into tamper-proof logs. Compliance reports can be exported, and an Auditor role gives read-only access without touching live billing or network data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Security and data localisation for ISPs */}
      <section id="security" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-white/[0.02] border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-tertiary">
              Cyber Defense &amp; Localisation
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-outfit mt-2 text-secondary dark:text-white">
              Security and data localisation for ISPs
            </h2>
            <p className="mt-4 text-base font-nunitoSans text-labelGray dark:text-gray-300 leading-relaxed">
              SecureCMS secures consent data in layers, and that matters because the DPDP Act makes the Data Fiduciary responsible for reasonable security safeguards (section 8(5)). Failing that duty carries the Act&apos;s highest penalty, up to ₹250 crore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {securityLayers.map((layer, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center">
                    {layer.icon}
                  </div>
                  <h3 className="text-base font-bold font-outfit text-secondary dark:text-white">
                    {layer.layer} Layer
                  </h3>
                </div>
                <p className="text-xs font-nunitoSans text-gray-600 dark:text-gray-300 leading-relaxed">
                  {layer.control}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-amber-500/[0.08] border border-amber-500/20 text-xs font-nunitoSans text-amber-900 dark:text-amber-200">
            <strong>Licence Data Localisation:</strong> Licence conditions on keeping subscriber data and logs in India still apply to your own billing, CRM and log systems. SecureCMS is a consent layer hosted on encrypted infrastructure within India, not a substitute for the security conditions in your licence.
          </div>
        </div>
      </section>

      {/* SECTION 9: Rollout plan by ISP category */}
      <section id="rollout-plan" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-tertiary">
              Implementation Roadmap
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-outfit mt-2 text-secondary dark:text-white">
              Rollout plan by ISP category
            </h2>
            <p className="mt-4 text-base font-nunitoSans text-labelGray dark:text-gray-300 leading-relaxed">
              A sensible rollout moves from mapping to evidence in six steps, and the order matters more than the speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {rolloutSteps.map((s, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-3 relative overflow-hidden">
                <span className="absolute -top-3 -right-3 text-6xl font-bold font-outfit text-gray-100 dark:text-white/[0.03] select-none pointer-events-none">
                  {s.step}
                </span>
                <div className="w-8 h-8 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center font-bold font-mono text-xs">
                  {s.step}
                </div>
                <h3 className="text-base font-bold font-outfit text-secondary dark:text-white">
                  {s.title}
                </h3>
                <p className="text-xs font-nunitoSans text-gray-600 dark:text-gray-300 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
            <div>
              <div className="font-bold text-sm font-outfit text-secondary dark:text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>Category A Rollout Priority</span>
              </div>
              <p className="text-xs font-nunitoSans text-gray-600 dark:text-gray-300 mt-2">
                Full integration, high-volume API throughput, multi-tenant app segregation, and Significant Data Fiduciary (SDF) audit readiness.
              </p>
            </div>

            <div>
              <div className="font-bold text-sm font-outfit text-secondary dark:text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <span>Category B Rollout Priority</span>
              </div>
              <p className="text-xs font-nunitoSans text-gray-600 dark:text-gray-300 mt-2">
                Franchise controls first, circle-level RBAC segregation, and automated OTP consent on partner and field onboarding journeys.
              </p>
            </div>

            <div>
              <div className="font-bold text-sm font-outfit text-secondary dark:text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span>Category C Rollout Priority</span>
              </div>
              <p className="text-xs font-nunitoSans text-gray-600 dark:text-gray-300 mt-2">
                Quick start with OTP on SMS or WhatsApp and a simple management dashboard, replacing unverified paper forms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: Frequently Asked Questions */}
      <section id="faqs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-white/[0.02] border-t border-gray-200 dark:border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-tertiary">
              Got Questions?
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-outfit mt-2 text-secondary dark:text-white">
              Frequently asked questions: consent management for telecom and ISPs
            </h2>
            <p className="mt-3 text-sm font-nunitoSans text-labelGray dark:text-gray-300">
              Answers to statutory questions regarding DoT licences, IPDR legal holds, franchisee duties, and DPDP Act enforcement.
            </p>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 overflow-hidden transition-all shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-outfit font-bold text-base sm:text-lg text-secondary dark:text-white hover:text-tertiary dark:hover:text-tertiary transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-tertiary" : "text-gray-400"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base font-nunitoSans text-labelGray dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 11: Official Resources & Reference Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-tertiary">
              Statutory Documentation
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-outfit mt-2 text-secondary dark:text-white">
              DPDP resources for ISPs
            </h2>
            <p className="mt-2 text-sm font-nunitoSans text-labelGray dark:text-gray-300">
              Start with the official texts, then use our guides to plan the work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {officialSources.map((src, idx) => (
              <a
                key={idx}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-tertiary/40 transition-all flex items-center justify-between group"
              >
                <div className="text-xs font-semibold text-secondary dark:text-white font-nunitoSans group-hover:text-tertiary transition-colors">
                  {src.name}
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-tertiary transition-colors flex-shrink-0 ml-2" />
              </a>
            ))}
          </div>

          {/* Related Satellite Pages */}
          <div className="pt-8 border-t border-gray-200 dark:border-white/10">
            <div className="text-xs font-mono uppercase tracking-wider text-labelGray dark:text-gray-400 mb-4">
              Explore Related Industry Architecture Pages:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {dpdpResources.map((res, idx) => (
                <Link
                  key={idx}
                  href={res.href}
                  className="p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-tertiary/40 transition-all group block"
                >
                  <div className="text-xs font-bold text-secondary dark:text-white group-hover:text-tertiary font-outfit">
                    {res.title}
                  </div>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                    {res.desc}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Book Meeting Call-to-Action */}
      <BookMeetCta />

      {/* Global Footer */}
      <Footer />

      {/* Modals */}
      <TelecomDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
      <TelecomChecklistModal
        isOpen={checklistModalOpen}
        onClose={() => setChecklistModalOpen(false)}
      />
    </div>
  );
}

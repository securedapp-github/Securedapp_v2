"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/footer";
import MetaTags from "../../../components/common/MetaTags";
import BookMeetCta from "../../../components/common/bookMeetCta";
import DPDPLiveCountdownTimer from "../../../components/common/DPDPLiveCountdownTimer";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  ShoppingCart,
  CheckCircle2,
  Calendar,
  Download,
  ArrowRight,
  RefreshCw,
  Lock,
  Layers,
  FileCheck,
  AlertTriangle,
  Scale,
  Users,
  Smartphone,
  ChevronDown,
  Terminal,
  ExternalLink,
  Languages,
  CheckSquare,
  ShieldAlert,
  Building2,
  Database,
  Cpu,
  Network,
  Activity,
  GitBranch,
  FileCode,
  Globe,
  KeyRound,
  Search,
  HeartHandshake,
  Clock,
  Sparkles,
  Zap,
  Info,
  Gavel,
  Eye,
  Shield,
  Crosshair,
  MessageSquare,
  Mail
} from "lucide-react";

import {
  metaData,
  partnerLogos,
  storeTypes,
  jumpNavLinks,
  dpdpRequirementsData,
  legalBasisMatrix,
  shopperJourneyData,
  modulesData,
  securityLayers,
  rolloutSteps,
  faqsData,
  dpdpResources,
  officialSources
} from "./data";

import InteractiveEcommerceConsentSimulator from "./InteractiveEcommerceConsentSimulator";
import { EcommerceDemoModal, EcommerceChecklistModal } from "./EcommerceModals";

export default function EcommerceConsentPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isChecklistModalOpen, setIsChecklistModalOpen] = useState(false);
  const [simulatorTab, setSimulatorTab] = useState("checkout");

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

  const heroLiveStats = [
    {
      name: "Checkout Unbundling",
      stat: "100% Granular",
      icon: <ShoppingCart className="text-tertiary w-4 h-4" />,
      tab: "checkout",
      targetId: "growth"
    },
    {
      name: "3-Yr Inactivity Rule",
      stat: "48h Notice Engine",
      icon: <Clock className="text-tertiary w-4 h-4" />,
      tab: "inactivity",
      targetId: "growth"
    },
    {
      name: "Webhook Sync Latency",
      stat: "<120ms",
      icon: <Cpu className="text-cyan-400 w-4 h-4" />,
      tab: "webhooks",
      targetId: "growth"
    },
    {
      name: "WhatsApp Opt-in Proof",
      stat: "OTP Cryptographic",
      icon: <MessageSquare className="text-tertiary w-4 h-4" />,
      tab: "preference",
      targetId: "growth"
    }
  ];

  return (
    <div className="product-container bg-primary dark:bg-secondary font-outfit text-secondary dark:text-white transition-colors duration-200">
      <MetaTags data={metaData} />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] pt-28 pb-20 overflow-hidden flex items-center bg-grid dark:bg-secondary border-b border-gray-200 dark:border-white/10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-radial from-tertiary/15 via-transparent to-transparent blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content (7 Cols) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 flex flex-col gap-6"
            >
              {/* Live DPDP 13 May 2027 Countdown Timer */}
              <div className="w-full max-w-3xl">
                <DPDPLiveCountdownTimer 
                  label="Core DPDP Enforcement: 13 May 2027" 
                  sublabel="Mandatory for Ecommerce, D2C & Marketplaces" 
                />
              </div>

              {/* H1 Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] tracking-tight text-secondary dark:text-white font-outfit">
                Consent Management Platform for <span className="text-tertiary">Ecommerce and D2C Brands</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans max-w-2xl">
                <strong>SecureCMS</strong>, the consent management platform by <strong>SecureDApp</strong>, records shopper consent at sign-up, checkout and every marketing channel, and pushes opt-outs to your CRM, WhatsApp and ad tools in real time, built for the <strong>DPDP Act 2023</strong> and <strong>DPDP Rules 2025</strong>.
              </p>

              {/* Quick Answer Banner */}
              <div className="p-4 rounded-xl bg-gray-100 dark:bg-white/5 border-l-4 border-tertiary text-xs sm:text-sm text-secondary dark:text-gray-200 font-nunitoSans">
                <strong className="text-secondary dark:text-white">Quick answer:</strong> Processing an order doesn't need marketing consent. Promotions on email, SMS, WhatsApp and push each do.
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-1">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsDemoModalOpen(true)}
                  className="px-8 py-4 bg-tertiary hover:opacity-95 text-secondary font-bold font-outfit rounded-xl shadow-[0_0_20px_rgba(18,213,118,0.35)] transition-all flex items-center justify-center gap-2 text-base"
                >
                  <span>Book an Ecommerce Demo</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </motion.button>

                <Link
                  href="/cookie-hub"
                  className="px-8 py-4 bg-secondary/5 dark:bg-white/5 border border-secondary/20 dark:border-white/10 text-secondary dark:text-white font-semibold font-outfit rounded-xl hover:border-tertiary transition-all flex items-center justify-center gap-2 backdrop-blur-sm text-base shadow-sm"
                >
                  <Search className="w-5 h-5 text-tertiary" />
                  <span>Scan Cookies with CookieHub</span>
                </Link>
              </div>

              {/* Store Types Strip */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-labelGray dark:text-gray-400">
                <span className="font-semibold text-secondary dark:text-gray-300">Store types we cover:</span>
                {storeTypes.map((st, i) => (
                  <span key={i} className="bg-gray-100 dark:bg-white/5 px-2.5 py-1 rounded-md text-secondary dark:text-gray-300 font-medium">
                    {st}
                  </span>
                ))}
              </div>

              {/* Quick Jump Shortcuts */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-outfit">
                <span className="font-semibold text-secondary dark:text-gray-300 mr-1">Quick jump:</span>
                <button
                  type="button"
                  onClick={(e) => {
                    setSimulatorTab("inactivity");
                    scrollToSection(e, "growth");
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 hover:border-amber-500 hover:bg-amber-500/20 transition-all font-semibold cursor-pointer shadow-sm"
                  title="Jump to 3-Yr Inactivity Rule Simulator"
                >
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  <span>3-Yr Inactivity Rule &rarr;</span>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    setSimulatorTab("checkout");
                    scrollToSection(e, "growth");
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 hover:border-emerald-500 hover:bg-emerald-500/20 transition-all font-semibold cursor-pointer shadow-sm"
                  title="Jump to Checkout Unbundling Simulator"
                >
                  <ShoppingCart className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Checkout Unbundling &rarr;</span>
                </button>
              </div>
            </motion.div>

            {/* Right Telemetry Console */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="bg-white/80 dark:bg-white/5 backdrop-blur-2xl border border-gray-200 dark:border-white/15 rounded-3xl p-6 sm:p-7 shadow-[0_20px_60px_rgba(0,25,56,0.15)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)] flex flex-col gap-5">
                <div className="flex justify-between items-center border-b border-gray-200 dark:border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-tertiary/15 border border-tertiary/30 text-tertiary flex items-center justify-center">
                      <ShoppingCart className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-secondary dark:text-white font-outfit">Ecommerce Consent Engine</div>
                      <div className="text-[10px] text-labelGray dark:text-gray-400">D2C & Marketplace Gateway</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-tertiary bg-tertiary/10 border border-tertiary/25 px-2.5 py-1 rounded-full font-bold">
                    DPDP ACT 2023
                  </span>
                </div>

                <div className="space-y-2.5">
                  {heroLiveStats.map((item, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={(e) => {
                        if (item.tab) setSimulatorTab(item.tab);
                        scrollToSection(e, item.targetId || "growth");
                      }}
                      className="w-full flex justify-between items-center bg-gray-50/80 dark:bg-white/[0.03] hover:bg-tertiary/10 dark:hover:bg-tertiary/10 p-3 rounded-xl border border-gray-200 dark:border-white/10 hover:border-tertiary/60 dark:hover:border-tertiary/60 transition-all text-left cursor-pointer group shadow-sm"
                      title={`Jump to ${item.name} in interactive simulator`}
                    >
                      <div className="flex items-center gap-2.5 text-xs text-secondary/80 dark:text-gray-300 group-hover:text-tertiary font-medium font-outfit transition-colors">
                        {item.icon}
                        <span className="group-hover:underline underline-offset-2">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold font-mono text-secondary dark:text-white bg-gray-200/60 dark:bg-white/10 group-hover:bg-tertiary/20 group-hover:text-tertiary px-2 py-0.5 rounded transition-all">
                          {item.stat}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-labelGray dark:text-gray-400 group-hover:text-tertiary group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </button>
                  ))}
                </div>

                <div className="bg-gray-100/90 dark:bg-black/40 rounded-2xl p-3.5 border border-gray-200 dark:border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-secondary/70 dark:text-gray-400">
                    <span className="flex items-center gap-1.5 text-secondary dark:text-white">
                      <Activity className="w-3.5 h-3.5 text-tertiary" /> Real-Time Opt-Out Propagation
                    </span>
                    <span className="text-tertiary font-mono">100% Operational</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5 text-[10px] text-center font-mono">
                    <span className="p-1 rounded bg-tertiary/15 text-tertiary font-bold">CRM</span>
                    <span className="p-1 rounded bg-tertiary/15 text-tertiary font-bold">WhatsApp</span>
                    <span className="p-1 rounded bg-tertiary/15 text-tertiary font-bold">Meta Ads</span>
                    <span className="p-1 rounded bg-tertiary/15 text-tertiary font-bold">Google Ads</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Logos Strip */}
      <section className="py-6 border-b border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-center">
            {partnerLogos.map((p, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-bold font-outfit text-secondary/70 dark:text-gray-300">
                <ShieldCheck className="w-4 h-4 text-tertiary" />
                <span>{p.name}</span>
                <span className="text-[10px] text-labelGray dark:text-gray-500 font-normal">({p.badge})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jump Navigation Bar */}
      <div className="sticky top-20 z-20 bg-primary/95 dark:bg-secondary/95 backdrop-blur-md border-b border-gray-200 dark:border-white/10 py-2.5 px-4 sm:px-6 lg:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2">
          {jumpNavLinks.map((link, idx) => (
            <button
              key={idx}
              type="button"
              onClick={(e) => scrollToSection(e, link.href)}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-gray-100 hover:bg-tertiary/15 hover:border-tertiary/40 hover:text-secondary dark:bg-white/5 dark:hover:bg-tertiary/20 dark:hover:text-tertiary text-secondary dark:text-gray-200 border border-gray-200/80 dark:border-white/10 transition-all duration-150 cursor-pointer shadow-xs active:scale-95"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={(e) => {
              setSimulatorTab("inactivity");
              scrollToSection(e, "growth");
            }}
            className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-amber-500/10 text-amber-600 dark:text-amber-400 hover:bg-amber-500 hover:text-white border border-amber-500/30 transition-all duration-150 cursor-pointer flex items-center gap-1.5 active:scale-95 shadow-xs"
          >
            <Clock className="w-3.5 h-3.5" />
            <span>3-Yr Inactivity Rule</span>
          </button>
        </div>
      </div>

      {/* Section 1: What is a CMP for Ecommerce */}
      <section id="founders" className="py-20 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-secondary dark:text-white">
              What is a Consent Management Platform for Ecommerce?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-labelGray dark:text-gray-300 font-nunitoSans leading-relaxed">
              A consent management platform for ecommerce is software that records what each shopper has agreed to, such as marketing on WhatsApp, email, SMS or push, personalised recommendations and sharing data with partners. It shows consent screens at the right moment, sends opt-outs to every marketing tool in real time and keeps tamper-proof records for DPDP audits.
            </p>
            <p className="mt-3 text-base text-labelGray dark:text-gray-300 font-nunitoSans leading-relaxed">
              An online store collects personal data in far more places than a brochure website does. A mobile number arrives at sign-up, an address at checkout, a photo in a review and a chat message on WhatsApp. Each use can need its own consent. SecureCMS keeps one record per shopper and answers a single question for every tool you run: <em>is this message, or this use of data, allowed right now?</em>
            </p>
          </div>

          {/* Visual Shopper Consent Architecture Box */}
          <div className="bg-gradient-to-br from-tertiary/10 via-transparent to-cyan-500/10 border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-lg">
            <h3 className="text-lg font-bold font-outfit text-secondary dark:text-white mb-6 flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-tertiary" />
              Shopper Consent Architecture: Store ➔ SecureCMS ➔ Tech Stack
            </h3>
            <div className="grid md:grid-cols-5 gap-4 text-center">
              {[
                { title: "1. Shopper Action", desc: "Browsing, cart checkout, sign-up, or WhatsApp click" },
                { title: "2. Online Store / App", desc: "Shopify, custom Next.js, Android or iOS app" },
                { title: "3. SecureCMS Engine", desc: "Central consent repository & SHA-256 audit ledger" },
                { title: "4. Real-Time Webhooks", desc: "Instant <120ms sync to marketing and ad tools" },
                { title: "5. Downstream Stack", desc: "CRM, CDP, WhatsApp BSP, Meta, Google, 3PL" },
              ].map((step, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex flex-col justify-between">
                  <div className="text-xs font-bold font-mono text-tertiary mb-1">NODE 0{idx + 1}</div>
                  <div className="text-sm font-bold text-secondary dark:text-white">{step.title}</div>
                  <div className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans mt-2">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: DPDP Act Meaning & Statutory Table */}
      <section id="legal" className="py-20 border-b border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-secondary dark:text-white">
              What the DPDP Act Means for Ecommerce & D2C Brands
            </h2>
            <p className="mt-4 text-base sm:text-lg text-labelGray dark:text-gray-300 font-nunitoSans leading-relaxed">
              Your shoppers are <strong>"Data Principals,"</strong> and your store is the <strong>"Data Fiduciary"</strong>, even when a logistics partner or payment gateway handles the data on your behalf. Under the Act's Schedule, failing to keep reasonable security safeguards can attract a penalty of up to <strong>₹250 crore</strong>, and lapses in breach intimation or children's data can reach <strong>₹200 crore</strong>.
            </p>
          </div>

          {/* Statutory Matrix Table */}
          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-secondary shadow-md">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-100 dark:bg-white/5 border-b border-gray-200 dark:border-white/10 font-outfit text-secondary dark:text-white">
                <tr>
                  <th className="p-4 sm:p-5 font-bold">Statutory Requirement</th>
                  <th className="p-4 sm:p-5 font-bold">Source Law</th>
                  <th className="p-4 sm:p-5 font-bold">What SecureCMS Does</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-white/10 font-nunitoSans text-secondary dark:text-gray-300">
                {dpdpRequirementsData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-white/[0.02]">
                    <td className="p-4 sm:p-5 font-semibold text-secondary dark:text-white">{row.req}</td>
                    <td className="p-4 sm:p-5 font-mono text-tertiary font-bold text-xs">{row.source}</td>
                    <td className="p-4 sm:p-5">{row.solution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 3: Interactive Simulator */}
      <section id="growth" className="py-20 border-b border-gray-200 dark:border-white/10 scroll-mt-24">
        <div id="simulator" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-secondary dark:text-white">
              Experience the Live Ecommerce Consent Simulator
            </h2>
            <p className="mt-3 text-base text-labelGray dark:text-gray-300 font-nunitoSans">
              Test zero-drop checkout unbundling, 1-click customer preference changes, and live webhook latency.
            </p>
          </div>
          <InteractiveEcommerceConsentSimulator
            activeTab={simulatorTab}
            setActiveTab={setSimulatorTab}
          />
        </div>
      </section>

      {/* Section 4: What Needs Consent vs What Doesn't */}
      <section className="py-20 border-b border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-secondary dark:text-white">
              What Needs Shopper Consent and What Doesn't
            </h2>
            <p className="mt-4 text-base sm:text-lg text-labelGray dark:text-gray-300 font-nunitoSans leading-relaxed">
              Using a shopper's details to take payment, ship an order, handle a return or send order updates is generally part of the purchase they asked for. Marketing on any channel, personalised recommendations from browsing history, retargeting, and sharing data with partner brands each need separate consent.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-secondary shadow-md">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-100 dark:bg-white/5 border-b border-gray-200 dark:border-white/10 font-outfit text-secondary dark:text-white">
                <tr>
                  <th className="p-4 sm:p-5 font-bold">Store Purpose</th>
                  <th className="p-4 sm:p-5 font-bold">Usual Legal Basis</th>
                  <th className="p-4 sm:p-5 font-bold">SecureCMS Enforcement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-white/10 font-nunitoSans text-secondary dark:text-gray-300">
                {legalBasisMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-white/[0.02]">
                    <td className="p-4 sm:p-5 font-semibold text-secondary dark:text-white">{row.purpose}</td>
                    <td className="p-4 sm:p-5 font-medium text-amber-600 dark:text-amber-400">{row.basis}</td>
                    <td className="p-4 sm:p-5">{row.solution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 5: Shopper Journey Table */}
      <section className="py-20 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-secondary dark:text-white">
              Consent Across the Shopper Journey
            </h2>
            <p className="mt-4 text-base sm:text-lg text-labelGray dark:text-gray-300 font-nunitoSans leading-relaxed">
              Consent in an online store is not one screen. It is a run of small moments, from the first visit to a dormant account years later. Mapping them shows where present tech stacks leave brands exposed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shopperJourneyData.map((item, idx) => (
              <div key={idx} className="p-6 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold font-mono text-tertiary mb-1">STAGE {idx + 1}</div>
                  <div className="text-base font-bold text-secondary dark:text-white">{item.step}</div>
                  <div className="text-xs font-semibold text-tertiary mt-1">{item.moment}</div>
                  <div className="text-xs text-red-600 dark:text-red-400 font-nunitoSans mt-3 bg-red-500/10 p-2.5 rounded-lg border border-red-500/20">
                    <strong>Common gap:</strong> {item.gap}
                  </div>
                </div>
                <div className="text-xs text-emerald-800 dark:text-emerald-300 font-nunitoSans mt-3 bg-emerald-500/10 p-2.5 rounded-lg border border-emerald-500/20">
                  <strong>SecureCMS Fix:</strong> {item.fix}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Modules & Problem Solution Table */}
      <section id="engineering" className="py-20 border-b border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-secondary dark:text-white">
              How SecureCMS Manages Consent for Online Stores
            </h2>
            <p className="mt-4 text-base sm:text-lg text-labelGray dark:text-gray-300 font-nunitoSans leading-relaxed">
              SecureCMS keeps one consent record per shopper across the website, mobile app and every marketing channel. It pushes opt-outs to CRM, CDP and messaging tools in real time, and checks consent before campaigns run.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-secondary shadow-md">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-100 dark:bg-white/5 border-b border-gray-200 dark:border-white/10 font-outfit text-secondary dark:text-white">
                <tr>
                  <th className="p-4 sm:p-5 font-bold">Existing Industry Problem</th>
                  <th className="p-4 sm:p-5 font-bold">SecureCMS Enterprise Module</th>
                  <th className="p-4 sm:p-5 font-bold">Verified Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-white/10 font-nunitoSans text-secondary dark:text-gray-300">
                {modulesData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-white/[0.02]">
                    <td className="p-4 sm:p-5 font-medium text-red-600 dark:text-red-400">{row.problem}</td>
                    <td className="p-4 sm:p-5 font-bold text-secondary dark:text-white">{row.module}</td>
                    <td className="p-4 sm:p-5 text-emerald-700 dark:text-emerald-400 font-medium">{row.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 7: Security Defense Layers */}
      <section className="py-20 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-secondary dark:text-white">
              Security Architecture for Ecommerce Engineering Teams
            </h2>
            <p className="mt-4 text-base sm:text-lg text-labelGray dark:text-gray-300 font-nunitoSans leading-relaxed">
              SecureCMS protects consent records with encrypted channels, signed requests and tamper-proof logs across five mission-critical layers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {securityLayers.map((layer, idx) => (
              <div key={idx} className="p-5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold font-mono text-tertiary mb-1">LAYER 0{idx + 1}</div>
                  <div className="text-base font-bold text-secondary dark:text-white">{layer.layer}</div>
                </div>
                <div className="text-xs text-labelGray dark:text-gray-300 font-nunitoSans mt-4">{layer.control}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Rollout Roadmap */}
      <section className="py-20 border-b border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-secondary dark:text-white">
              6-Phase Rollout Plan for Online Stores
            </h2>
            <p className="mt-4 text-base sm:text-lg text-labelGray dark:text-gray-300 font-nunitoSans leading-relaxed">
              Most online stores can roll out DPDP consent compliance in six structured steps, starting with a data map and ending with automated rights requests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rolloutSteps.map((step, idx) => (
              <div key={idx} className="p-6 bg-white dark:bg-secondary border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center font-mono font-bold text-sm mb-4">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-secondary dark:text-white mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-labelGray dark:text-gray-300 font-nunitoSans leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Official Sources & Resources */}
      <section className="py-16 border-b border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-base font-bold text-secondary dark:text-white font-outfit mb-3">
                Related DPDP Resources
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm font-nunitoSans">
                {dpdpResources.map((res, i) => (
                  <li key={i}>
                    <Link href={res.href} className="text-tertiary hover:underline flex items-center gap-1.5 group">
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      <span>{res.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-bold text-secondary dark:text-white font-outfit mb-3">
                Official Government & Regulatory Sources
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm font-nunitoSans">
                {officialSources.map((src, i) => (
                  <li key={i}>
                    <a href={src.url} target="_blank" rel="noopener noreferrer" className="text-tertiary hover:underline flex items-center gap-1.5 group">
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      <span>{src.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: FAQs (Positioned Directly Above Conversion Banner) */}
      <section id="faqs" className="py-20 lg:py-24 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-secondary dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-base text-labelGray dark:text-gray-300 font-nunitoSans">
              Key legal and operational questions on DPDP consent management for ecommerce.
            </p>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, idx) => (
              <div
                key={idx}
                className="border border-gray-200 dark:border-white/10 rounded-2xl bg-white dark:bg-white/[0.02] overflow-hidden transition-all shadow-sm hover:border-tertiary/30"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 text-left flex justify-between items-center gap-4 hover:bg-gray-50 dark:hover:bg-white/[0.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-tertiary"
                  aria-expanded={openFaq === idx}
                >
                  <span className="font-bold text-sm sm:text-base text-secondary dark:text-white font-outfit">
                    {faq.name}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-tertiary shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-gray-200 dark:border-white/10"
                    >
                      <div className="p-5 text-xs sm:text-sm text-labelGray dark:text-gray-300 font-nunitoSans leading-relaxed">
                        {faq.acceptedAnswer.text}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Banner CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-emerald-500/20 via-tertiary/20 to-cyan-500/20 border border-tertiary/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-secondary dark:text-white">
              Ready to Secure DPDP Compliance for Your Store?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-labelGray dark:text-gray-300 font-nunitoSans max-w-xl mx-auto">
              Schedule a personalized walkthrough with our retail privacy architects or download the complete 18-point compliance checklist.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <button
                type="button"
                onClick={() => setIsDemoModalOpen(true)}
                className="px-8 py-3.5 bg-tertiary text-secondary font-bold font-outfit rounded-xl shadow-lg hover:opacity-95 transition-all text-sm"
              >
                Book an Ecommerce Demo
              </button>
              <button
                type="button"
                onClick={() => setIsChecklistModalOpen(true)}
                className="px-8 py-3.5 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/15 text-secondary dark:text-white font-semibold font-outfit rounded-xl hover:border-tertiary transition-all text-sm"
              >
                Download Ecommerce Checklist (PDF)
              </button>
            </div>
          </div>
        </div>
      </section>

      <BookMeetCta />
      <Footer />

      {/* Modals */}
      <EcommerceDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      <EcommerceChecklistModal isOpen={isChecklistModalOpen} onClose={() => setIsChecklistModalOpen(false)} />
    </div>
  );
}

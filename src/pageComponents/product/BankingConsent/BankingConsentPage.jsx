"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/footer";
import MetaTags from "../../../components/common/MetaTags";
import BookMeetCta from "../../../components/common/bookMeetCta";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Building,
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
  Crosshair
} from "lucide-react";

import {
  metaData,
  partnerLogos,
  jumpNavLinks,
  timelineData,
  dpdpPillars,
  bankingPurposesData,
  touchpointsData,
  modulesData,
  namedIntegrationsData,
  securityLayers,
  roadmapSteps,
  comparisonData,
  faqsData,
  dpdpResources,
  officialSources
} from "./data";

import InteractiveConsentSimulator from "./InteractiveConsentSimulator";
import { BankingDemoModal, LeadMagnetModal } from "./BankingModals";

export default function BankingConsentPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadAssetType, setLeadAssetType] = useState("checklist"); // "checklist" or "security"

  const openChecklistModal = () => {
    setLeadAssetType("checklist");
    setIsLeadModalOpen(true);
  };

  const openSecurityNoteModal = () => {
    setLeadAssetType("security");
    setIsLeadModalOpen(true);
  };

  const scrollToSection = (e, href) => {
    if (e && e.preventDefault) e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const offset = 95; // 80px Navbar + 15px breathing buffer
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
    { name: "Explicit Consent", stat: "100% Unbundled", icon: <ShieldCheck className="text-tertiary w-4 h-4" /> },
    { name: "PMLA Partial Erasure", stat: "Active (5-Yr Lock)", icon: <Lock className="text-tertiary w-4 h-4" /> },
    { name: "CBS & ESB Sync Latency", stat: "<140ms", icon: <Cpu className="text-cyan-400 w-4 h-4" /> },
    { name: "Burden of Proof (Sec 6(10))", stat: "Blockchain SHA-256", icon: <Database className="text-tertiary w-4 h-4" /> }
  ];

  return (
    <div className="product-container bg-primary dark:bg-secondary font-outfit text-secondary dark:text-white transition-colors duration-200">
      <MetaTags data={metaData} />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] pt-28 pb-20 overflow-hidden flex items-center bg-grid dark:bg-secondary border-b border-gray-200 dark:border-white/10">
        
        {/* Ambient glow blobs per design.md */}
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
              {/* Deadline Notification Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 w-fit text-amber-800 dark:text-amber-300 text-xs sm:text-sm font-semibold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
                <span>Core DPDP obligations for banks apply from <strong>13 May 2027</strong></span>
              </div>

              {/* H1 Display Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] tracking-tight text-secondary dark:text-white font-outfit">
                Consent Management Platform for <span className="text-tertiary">Banks</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans max-w-2xl">
                <strong>SecureCMS</strong>, the consent management platform by <strong>SecureDApp</strong>, captures, stores, and enforces customer consent across branches, mobile banking, net banking, and core banking systems, built for the <strong>DPDP Act 2023</strong> and <strong>DPDP Rules 2025</strong>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsDemoModalOpen(true)}
                  className="px-8 py-4 bg-tertiary hover:opacity-95 text-secondary font-bold font-outfit rounded-xl shadow-[0_0_20px_rgba(18,213,118,0.35)] transition-all flex items-center justify-center gap-2 text-base"
                >
                  <span>Book a Banking Demo</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={openChecklistModal}
                  className="px-8 py-4 bg-secondary/5 dark:bg-white/5 border border-secondary/20 dark:border-white/10 text-secondary dark:text-white font-semibold font-outfit rounded-xl hover:border-tertiary transition-all flex items-center justify-center gap-2 backdrop-blur-sm text-base shadow-sm"
                >
                  <Download className="w-5 h-5 text-tertiary" />
                  <span>Download Bank DPDP Consent Checklist</span>
                </motion.button>
              </div>

              {/* Jump to Links from User Brief */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-labelGray dark:text-gray-400">
                <span className="font-semibold text-secondary dark:text-gray-300">Jump to:</span>
                {jumpNavLinks.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="hover:text-tertiary underline underline-offset-4 font-medium transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                    {idx < jumpNavLinks.length - 1 && <span className="no-underline ml-2 text-gray-300 dark:text-white/20">|</span>}
                  </button>
                ))}
              </div>

              {/* Byline */}
              <div className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans pt-1">
                By <span className="font-semibold text-secondary dark:text-gray-200">Kunal Chowdhury</span> • Reviewed by <span className="font-semibold text-secondary dark:text-gray-200">BFSI Privacy & Legal Advisory Board</span>
              </div>
            </motion.div>

            {/* Right 3D Visual Console (5 Cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="bg-white/80 dark:bg-white/5 backdrop-blur-2xl border border-gray-200 dark:border-white/15 rounded-3xl p-6 sm:p-7 shadow-[0_20px_60px_rgba(0,25,56,0.15)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)] flex flex-col gap-5">
                
                {/* Panel Header */}
                <div className="flex justify-between items-center border-b border-gray-200 dark:border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-tertiary/15 border border-tertiary/30 text-tertiary flex items-center justify-center">
                      <Gavel className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-secondary dark:text-white font-outfit">Banking DPDP Shield Console</div>
                      <div className="text-[10px] text-labelGray dark:text-gray-400">Scheduled Commercial Bank Gateway</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-tertiary bg-tertiary/10 border border-tertiary/25 px-2.5 py-1 rounded-full font-bold">
                    SEC 6(10) ACTIVE
                  </span>
                </div>

                {/* Metric List */}
                <div className="space-y-2.5">
                  {heroLiveStats.map((item, i) => (
                    <div 
                      key={i} 
                      className="flex justify-between items-center bg-gray-50/80 dark:bg-white/[0.03] p-3 rounded-xl border border-gray-200 dark:border-white/10"
                    >
                      <div className="flex items-center gap-2.5 text-xs text-secondary/80 dark:text-gray-300 font-medium font-outfit">
                        {item.icon} {item.name}
                      </div>
                      <span className="text-xs font-bold font-mono text-secondary dark:text-white bg-gray-200/60 dark:bg-white/10 px-2 py-0.5 rounded">
                        {item.stat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Live Core Banking Channel Monitor */}
                <div className="bg-gray-100/90 dark:bg-black/40 rounded-2xl p-3.5 border border-gray-200 dark:border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-secondary/70 dark:text-gray-400">
                    <span className="flex items-center gap-1.5 text-secondary dark:text-white">
                      <Activity className="w-3.5 h-3.5 text-tertiary" /> Omnichannel Sync Status
                    </span>
                    <span className="text-tertiary font-mono">100% Operational</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5 text-[10px] text-center font-mono">
                    <span className="p-1 rounded bg-tertiary/15 text-tertiary font-bold">Branch</span>
                    <span className="p-1 rounded bg-tertiary/15 text-tertiary font-bold">App</span>
                    <span className="p-1 rounded bg-tertiary/15 text-tertiary font-bold">NetBank</span>
                    <span className="p-1 rounded bg-tertiary/15 text-tertiary font-bold">CBS</span>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>

          {/* Partner & Regulatory Ecosystem Logos */}
          <div className="mt-16 pt-10 border-t border-gray-200 dark:border-white/10 text-center">
            <p className="text-xs sm:text-sm uppercase tracking-widest text-labelGray dark:text-gray-400 font-bold font-poppins mb-10">
              Supported, Recognized & Incubated by Leading Cybersecurity & Regulatory Ecosystems
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14 md:gap-20 max-w-5xl mx-auto px-4">
              {partnerLogos.map((p, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center py-2 px-3 transition-all duration-300 group cursor-default hover:scale-105"
                  title={`${p.name} — ${p.subtitle} (${p.badge})`}
                >
                  {p.name === "DSCI" && (
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-8 h-8 sm:w-9 sm:h-9 text-blue-600 dark:text-blue-400" />
                      <span className="text-2xl sm:text-3xl font-black tracking-wider text-blue-600 dark:text-blue-400 font-outfit">
                        DSCI
                      </span>
                    </div>
                  )}
                  {p.name === "CySecK" && (
                    <div className="flex items-center gap-2.5">
                      <Lock className="w-8 h-8 sm:w-9 sm:h-9 text-amber-500" />
                      <span className="text-2xl sm:text-3xl font-black tracking-tight font-outfit text-secondary dark:text-white">
                        <span className="text-amber-500">Cy</span>
                        <span className="text-red-500">SecK</span>
                      </span>
                    </div>
                  )}
                  {p.name === "IFSCA" && (
                    <div className="flex items-center gap-2.5">
                      <Building2 className="w-8 h-8 sm:w-9 sm:h-9 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-2xl sm:text-3xl font-black tracking-widest text-emerald-600 dark:text-emerald-400 font-outfit">
                        IFSCA
                      </span>
                    </div>
                  )}
                  {p.name === "C3iHub" && (
                    <div className="flex items-center gap-2.5">
                      <Cpu className="w-8 h-8 sm:w-9 sm:h-9 text-cyan-500" />
                      <span className="text-2xl sm:text-3xl font-black tracking-tight font-outfit text-secondary dark:text-white">
                        <span className="text-amber-500">C3i</span>
                        <span className="text-cyan-400">Hub</span>
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Section 1: What is a Consent Management Platform for Banks? */}
      <section className="py-24 relative overflow-hidden bg-primary dark:bg-secondary border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 flex flex-col gap-6"
            >
              <div className="text-tertiary font-semibold tracking-wider uppercase text-xs sm:text-sm inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 w-fit">
                <Crosshair className="w-4 h-4" /> Definition & Core Burden
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold leading-tight text-secondary dark:text-white font-outfit">
                What is a consent management platform for banks?
              </h2>

              <p className="text-secondary/80 dark:text-gray-300 text-base lg:text-lg leading-relaxed font-nunitoSans">
                A consent management platform for banks is software that records each customer's consent for every purpose the bank uses their data for, such as account servicing, cross-selling, marketing, and partner products. It verifies the consent, stores tamper-proof proof of it, updates every connected system when the customer changes or withdraws it, and produces evidence for DPDP audits.
              </p>

              {/* Callout: Section 6(10) Burden of Proof */}
              <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-amber-700 dark:text-amber-300 font-outfit">
                  <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <span>Section 6(10) of the DPDP Act: The Burden of Proof Sits With You</span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-amber-900 dark:text-amber-200 font-nunitoSans">
                  Why does a bank need one? Because the burden of proof sits with you. If the Data Protection Board or a customer questions processing that rests on consent, <strong>Section 6(10) of the Act obliges the bank to show that a notice was given and consent was taken the way the law asks</strong>. A signed form in a branch cabinet, or a checkbox buried in an app, rarely settles that question.
                </p>
              </div>

              <p className="text-secondary/80 dark:text-gray-300 text-base leading-relaxed font-nunitoSans">
                SecureCMS sits between the customer and the bank's systems. Every consent lands in one repository, and every channel reads from it: <strong>customer → SecureCMS → consent repository → branch, app, net banking, CBS</strong>.
              </p>
            </motion.div>

            {/* Architecture Visual Diagram Flow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="bg-white/80 dark:bg-white/[0.04] backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl">
                <div className="text-xs uppercase font-bold text-tertiary tracking-wider mb-2 flex items-center gap-1.5 font-poppins">
                  <Network className="w-4 h-4" /> Bank Consent Architecture Diagram
                </div>
                <h3 className="text-lg font-bold text-secondary dark:text-white mb-4 font-outfit">
                  SecureCMS Omnichannel Ingestion & Distribution Flow
                </h3>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-between text-secondary dark:text-white">
                    <span className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold">
                      <Users className="w-4 h-4" /> Customer Interaction
                    </span>
                    <span className="text-[10px] text-labelGray dark:text-gray-400">Branch, App, Net Banking</span>
                  </div>

                  <div className="text-center text-tertiary font-bold text-xs">
                    ↓ OTP Authorization (SMS / Email / WhatsApp)
                  </div>

                  <div className="p-4 rounded-xl bg-tertiary/10 border border-tertiary/30 text-secondary dark:text-white">
                    <div className="font-bold flex items-center gap-2 text-tertiary font-outfit">
                      <ShieldCheck className="w-4 h-4" /> SecureCMS Ingestion Gateway
                    </div>
                    <div className="text-[11px] text-labelGray dark:text-gray-300 mt-1 font-nunitoSans">
                      Purpose Separation • 22 Language Notices • Versioning
                    </div>
                  </div>

                  <div className="text-center text-tertiary font-bold text-xs">
                    ↓ Blockchain-Backed Immutability
                  </div>

                  <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-between text-secondary dark:text-white">
                    <span className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold">
                      <Database className="w-4 h-4" /> Consent Repository
                    </span>
                    <span className="text-[10px] text-labelGray dark:text-gray-400">SHA-256 Audit Trail</span>
                  </div>

                  <div className="text-center text-tertiary font-bold text-xs">
                    ↓ Real-time Webhooks & Runtime APIs (&lt;140ms)
                  </div>

                  <div className="p-3.5 rounded-xl bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/15 flex items-center justify-between text-secondary dark:text-white font-bold">
                    <span className="flex items-center gap-2 text-tertiary">
                      <Cpu className="w-4 h-4" /> Core Banking (CBS) & ESB
                    </span>
                    <span className="text-[10px] text-labelGray dark:text-gray-300">Finacle / BaNCS / Marketing</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200 dark:border-white/10 text-[11px] text-labelGray dark:text-gray-400 text-center font-nunitoSans">
                  Alt text: SecureCMS consent flow from bank customer to core banking, app and marketing systems
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Section 2: How a CMP Differs from a Registered Consent Manager */}
      <section className="py-20 bg-gray-50 dark:bg-secondary/60 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-tertiary/10 text-tertiary border border-tertiary/20 mb-4">
              <Scale className="w-4 h-4" /> Regulatory Distinction
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white mb-4 font-outfit">
              How a consent management platform differs from a registered Consent Manager
            </h2>
            <div className="space-y-4 text-secondary/80 dark:text-gray-300 text-base leading-relaxed font-nunitoSans">
              <p>
                A <strong>consent management platform (like SecureCMS)</strong> is a tool the bank runs as a <strong>Data Fiduciary</strong> to collect and prove its own customers' consent across all bank-operated touchpoints.
              </p>
              <p>
                A <strong>Consent Manager</strong> is a separate entity registered with the Data Protection Board of India that lets individuals give, manage, and withdraw consent across many organisations. Consent Manager provisions apply from <strong>13 November 2026</strong>.
              </p>
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm">
                💡 <strong>The Bank's Imperative:</strong> A customer may choose to route consent through one, so the bank's systems should be ready to act on what arrives. SecureCMS incorporates open API adapters to ingest external Consent Manager directives directly into the bank's internal consent repository.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: What the DPDP Act Changes for Banks */}
      <section id="what-the-dpdp-act-changes-for-banks" className="scroll-mt-40 py-24 bg-primary dark:bg-secondary border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="text-tertiary font-semibold tracking-wider uppercase text-xs sm:text-sm inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 mb-3">
              <Scale className="w-4 h-4" /> Statutory Shift
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-secondary dark:text-white font-outfit">
              What the DPDP Act changes for banks
            </h2>
            <p className="mt-4 text-secondary/80 dark:text-gray-300 leading-relaxed text-base lg:text-lg font-nunitoSans">
              The DPDP Act requires banks to take free, specific, informed, unconditional, and unambiguous consent for each purpose that neither a legitimate use nor a legal requirement covers, give notices in English or an Eighth Schedule language, let customers withdraw consent as easily as they gave it, and report personal data breaches, with penalties of up to ₹250 crore.
            </p>
          </div>

          {/* 6 Key Regulatory Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {dpdpPillars.map((pillar) => (
              <div
                key={pillar.id}
                className="p-6 rounded-3xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 flex flex-col justify-between hover:border-tertiary/40 transition-all shadow-sm group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-tertiary uppercase tracking-wider font-mono">
                      {pillar.section}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-200 dark:bg-white/10 text-secondary dark:text-gray-300 font-bold">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-secondary dark:text-white mb-2 group-hover:text-tertiary transition-colors font-outfit">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary/70 dark:text-gray-400 leading-relaxed font-nunitoSans">
                    {pillar.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Table */}
          <div className="bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-secondary dark:text-white font-outfit">DPDP Timeline for Banks</h3>
                <p className="text-xs sm:text-sm text-labelGray dark:text-gray-400 font-nunitoSans">Statutory phased rollout dates under DPDP Act 2023 & DPDP Rules 2025</p>
              </div>
              <span className="self-start md:self-auto text-xs font-mono text-tertiary bg-tertiary/10 px-3 py-1 rounded-full border border-tertiary/30">
                Alt text: DPDP Act timeline for banks: 13 Nov 2025, 13 Nov 2026, 13 May 2027
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-white/10 text-xs uppercase tracking-wider text-labelGray dark:text-gray-400">
                    <th className="py-3 px-4 font-bold font-poppins">Date</th>
                    <th className="py-3 px-4 font-bold font-poppins">What Applies</th>
                    <th className="py-3 px-4 font-bold font-poppins">Statutory Scope</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-white/5 font-normal">
                  {timelineData.map((item, idx) => (
                    <tr 
                      key={idx}
                      className={item.highlight ? "bg-tertiary/5 font-semibold text-secondary dark:text-white" : "text-secondary/80 dark:text-gray-300"}
                    >
                      <td className="py-4 px-4 font-mono font-bold whitespace-nowrap text-tertiary">
                        {item.date}
                      </td>
                      <td className="py-4 px-4 font-semibold font-outfit">
                        {item.title}
                      </td>
                      <td className="py-4 px-4 text-xs sm:text-sm font-nunitoSans">
                        {item.desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Advisory Note */}
            <div className="mt-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong>MeitY Advisory Note (Jan 2026):</strong> MeitY discussed a shorter window for some Significant Data Fiduciaries in January 2026. Check the official notifications before you plan only around 13 May 2027.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 4: When Banks Need Consent and When They Don't (Tables are Same) */}
      <section className="py-24 bg-gray-50 dark:bg-secondary/60 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-tertiary font-semibold tracking-wider uppercase text-xs sm:text-sm inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 mb-3">
              <Scale className="w-4 h-4" /> Legal Basis Matrix
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-secondary dark:text-white font-outfit">
              When banks need consent and when they don't
            </h2>
            <p className="mt-4 text-secondary/80 dark:text-gray-300 leading-relaxed text-base lg:text-lg font-nunitoSans">
              Banks generally do not need a separate consent for processing the law requires, such as KYC checks and record-keeping under the PMLA. The DPDP Act recognises processing that other laws require and lets banks retain records the law demands. Consent is needed for purposes beyond the service or the legal duty: marketing, cross-selling third-party products, personalisation and analytics.
            </p>
            <p className="mt-2 text-xs text-labelGray dark:text-gray-400 italic">
              This table shows the usual position. It is general information, not legal advice, and each row is signed off by a legal reviewer before publication.
            </p>
          </div>

          {/* Banking Purposes Table */}
          <div className="bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-sm mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-100/90 dark:bg-white/5 border-b border-gray-200 dark:border-white/10 text-xs uppercase tracking-wider text-secondary dark:text-gray-300 font-poppins">
                    <th className="py-4 px-6 font-bold">Bank purpose</th>
                    <th className="py-4 px-6 font-bold">Usual basis (legal review required)</th>
                    <th className="py-4 px-6 font-bold">What SecureCMS does</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-white/5">
                  {bankingPurposesData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02]">
                      <td className="py-4 px-6 font-semibold text-secondary dark:text-white font-outfit">
                        {row.purpose}
                      </td>
                      <td className="py-4 px-6 text-xs sm:text-sm text-secondary/80 dark:text-gray-300 font-nunitoSans">
                        {row.basis}
                      </td>
                      <td className="py-4 px-6 text-xs sm:text-sm text-tertiary font-semibold font-outfit">
                        {row.secureCMSAction}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Retention vs Erasure Deep Dive (PMLA vs DPDP) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-poppins">
              <Lock className="w-4 h-4" /> Statutory Retention Conflict Resolution
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-secondary dark:text-white font-outfit">
              Retention vs erasure: when PMLA and RBI rules override a deletion request
            </h3>
            <p className="text-secondary/80 dark:text-gray-300 leading-relaxed text-sm sm:text-base font-nunitoSans">
              When a customer asks a bank to erase their data, the bank must delete data it no longer needs, but it can keep records that a law requires it to retain. PMLA, for example, requires banks to keep certain records for five years after the business relationship ends. SecureCMS logs which fields are retained, why, and until when, and erases the rest.
            </p>
            <p className="text-secondary/80 dark:text-gray-300 leading-relaxed text-sm sm:text-base font-nunitoSans">
              <strong>In practice, this is partial erasure.</strong> Sections 8(7) and 12(3) both carve out retention that law requires, so those fields stay, kept only for that legal purpose, while everything else goes. Rights requests run with SLA tracking, so a closure request does not stall between compliance and operations.
            </p>
          </div>

        </div>
      </section>

      {/* Section 5: Where Banks Collect Customer Consent (Tables are Same) */}
      <section className="py-24 bg-primary dark:bg-secondary border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-tertiary font-semibold tracking-wider uppercase text-xs sm:text-sm inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 mb-3">
              <Users className="w-4 h-4" /> Touchpoint Architecture
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-secondary dark:text-white font-outfit">
              Where banks collect customer consent
            </h2>
            <p className="mt-4 text-secondary/80 dark:text-gray-300 leading-relaxed text-base lg:text-lg font-nunitoSans">
              Consent does not walk into a bank through one door. It arrives at the branch counter, on a business correspondent's device, in the mobile app, over a phone call and on WhatsApp. Each door has its own gap.
            </p>
          </div>

          {/* Touchpoint Table */}
          <div className="bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-sm mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-100/90 dark:bg-white/5 border-b border-gray-200 dark:border-white/10 text-xs uppercase tracking-wider text-secondary dark:text-gray-300 font-poppins">
                    <th className="py-4 px-6 font-bold">Touchpoint</th>
                    <th className="py-4 px-6 font-bold">Common problem today</th>
                    <th className="py-4 px-6 font-bold">SecureCMS Omnichannel Fix</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-white/5">
                  {touchpointsData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-100/50 dark:hover:bg-white/[0.02]">
                      <td className="py-4 px-6 font-semibold text-secondary dark:text-white font-outfit">
                        {row.touchpoint}
                      </td>
                      <td className="py-4 px-6 text-xs sm:text-sm text-red-600 dark:text-red-400 font-nunitoSans">
                        {row.problem}
                      </td>
                      <td className="py-4 px-6 text-xs sm:text-sm text-tertiary font-semibold font-outfit">
                        {row.solution}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-tertiary/10 border border-tertiary/25 text-center text-xs sm:text-sm font-semibold text-secondary dark:text-white">
            SecureCMS treats these as one problem: <strong>one customer, one consent record, whatever the channel</strong>.
            <div className="text-[11px] text-labelGray dark:text-gray-400 font-normal mt-0.5">
              Alt text: Bank consent touchpoints: branch, agents, mobile app, net banking, call centre, WhatsApp
            </div>
          </div>

        </div>
      </section>

      {/* Section 6: How SecureCMS Handles Consent for Banks (Tables are Same) */}
      <section className="py-24 bg-gray-50 dark:bg-secondary/60 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-tertiary font-semibold tracking-wider uppercase text-xs sm:text-sm inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 mb-3">
              <Layers className="w-4 h-4" /> Module Suite
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-secondary dark:text-white font-outfit">
              How SecureCMS handles consent for banks
            </h2>
            <p className="mt-4 text-secondary/80 dark:text-gray-300 leading-relaxed text-base lg:text-lg font-nunitoSans">
              SecureCMS gives a bank one consent record per customer across every channel. It verifies consent with OTP on email, SMS, or WhatsApp, stores it in tamper-proof audit logs, pushes changes to core banking and marketing systems in real time, and runs rights requests and grievances with DPO escalation and SLA tracking.
            </p>
          </div>

          {/* Module Grid Table */}
          <div className="bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-sm mb-16">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-100/90 dark:bg-white/5 border-b border-gray-200 dark:border-white/10 text-xs uppercase tracking-wider text-secondary dark:text-gray-300 font-poppins">
                    <th className="py-4 px-6 font-bold">Problem</th>
                    <th className="py-4 px-6 font-bold">SecureCMS module</th>
                    <th className="py-4 px-6 font-bold">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-white/5">
                  {modulesData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02]">
                      <td className="py-4 px-6 font-semibold text-secondary dark:text-white font-outfit">
                        {row.problem}
                      </td>
                      <td className="py-4 px-6 text-xs sm:text-sm font-bold text-cyan-600 dark:text-cyan-400 font-outfit">
                        {row.module}
                      </td>
                      <td className="py-4 px-6 text-xs sm:text-sm text-tertiary font-semibold font-outfit">
                        {row.result}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Deep Dive Architectural Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-tertiary/15 text-tertiary flex items-center justify-center">
                <KeyRound className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-secondary dark:text-white font-outfit">Verified consent at every channel</h3>
              <p className="text-xs sm:text-sm text-secondary/70 dark:text-gray-400 leading-relaxed font-nunitoSans">
                Consent Collection sends an OTP on email, SMS or WhatsApp, so the record shows that the customer, not a clerk, agreed. Branch staff and business correspondents can start the flow, and app users get it through redirect or embedded screens. Every entry is time-stamped.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-secondary dark:text-white font-outfit">Purpose-level consent per product</h3>
              <p className="text-xs sm:text-sm text-secondary/70 dark:text-gray-400 leading-relaxed font-nunitoSans">
                Purpose Management with a Data Catalogue lets compliance teams define each purpose once and attach consent templates to it. A card, a loan and a wealth product get their own purposes, so one signature no longer covers everything. Policy versions are kept, which shows exactly which notice a customer saw.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-secondary dark:text-white font-outfit">Withdrawal reaching every system</h3>
              <p className="text-xs sm:text-sm text-secondary/70 dark:text-gray-400 leading-relaxed font-nunitoSans">
                When a customer withdraws, SecureCMS enforces the revocation instantly, syncs the change in real time, and fires webhooks to connected systems. Before a campaign or analytics job runs, the API or SDK checks the customer's current consent. A withdrawn customer drops off the send list.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-secondary dark:text-white font-outfit">Rights & grievances with DPO escalation</h3>
              <p className="text-xs sm:text-sm text-secondary/70 dark:text-gray-400 leading-relaxed font-nunitoSans">
                Access, correction, and erasure requests run through DSR automation with SLA tracking, so nothing waits in a shared inbox. Complaints go through grievance management, escalate to the DPO when needed, and end with a feedback step. The bank keeps a documented trail for each one.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 shadow-sm space-y-3 md:col-span-2 lg:col-span-2">
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-secondary dark:text-white font-outfit">Audit evidence your auditors can check</h3>
              <p className="text-xs sm:text-sm text-secondary/70 dark:text-gray-400 leading-relaxed font-nunitoSans">
                Consent events are written to blockchain-backed immutable logs and can be exported as compliance reports. An Auditor role gives read-only access, so internal audit or an external auditor can check evidence without touching live settings. Section 6(10) puts the burden of proof on the bank. This is how you carry it.
              </p>
              <div className="text-[11px] text-labelGray dark:text-gray-400 font-mono pt-1">
                Alt text: SecureCMS consent dashboard showing purpose-level consent for a bank customer
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 7: Integration with Core Banking and Bank Systems */}
      <section id="integration-with-core-banking-and-bank-systems" className="scroll-mt-40 py-24 bg-primary dark:bg-secondary border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-tertiary font-semibold tracking-wider uppercase text-xs sm:text-sm inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 mb-3">
              <Cpu className="w-4 h-4" /> Core Banking Connectors
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-secondary dark:text-white font-outfit">
              Integration with core banking and bank systems
            </h2>
            <p className="mt-4 text-secondary/80 dark:text-gray-300 leading-relaxed text-base lg:text-lg font-nunitoSans">
              SecureCMS connects to a bank's core banking system and enterprise service bus through APIs, webhooks and prebuilt connectors, and to mobile apps through native iOS, Android and Flutter SDKs, so a consent change made in any channel is applied everywhere it is used.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="p-6 rounded-3xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 space-y-2">
              <span className="text-xs font-bold text-tertiary font-mono">SDK LAYER</span>
              <h4 className="font-bold text-secondary dark:text-white font-outfit">Mobile SDKs</h4>
              <p className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans">Native iOS, Android, and Flutter SDKs for seamless zero-leakage mobile client integration.</p>
            </div>

            <div className="p-6 rounded-3xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 space-y-2">
              <span className="text-xs font-bold text-cyan-400 font-mono">CBS / ESB</span>
              <h4 className="font-bold text-secondary dark:text-white font-outfit">Core Banking Systems</h4>
              <p className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans">Pre-built integrations for Finacle, TCS BaNCS, FLEXCUBE, and enterprise message buses.</p>
            </div>

            <div className="p-6 rounded-3xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 space-y-2">
              <span className="text-xs font-bold text-indigo-400 font-mono">REAL-TIME</span>
              <h4 className="font-bold text-secondary dark:text-white font-outfit">APIs & Webhooks</h4>
              <p className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans">Real-time webhook events ensuring downstream marketing tools halt consent-dependent flows in &lt;140ms.</p>
            </div>

            <div className="p-6 rounded-3xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 space-y-2">
              <span className="text-xs font-bold text-amber-400 font-mono">DATA STACK</span>
              <h4 className="font-bold text-secondary dark:text-white font-outfit">CDP & Analytics</h4>
              <p className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans">Direct connectors for customer data platforms, campaign engines, and analytics data lakes.</p>
            </div>
          </div>

          {/* Named Integrations Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 shadow-sm mb-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-tertiary mb-2 font-poppins">
              <Database className="w-4 h-4" /> Subsystem Interoperability
            </div>
            <h3 className="text-xl font-bold text-secondary dark:text-white mb-4 font-outfit">
              Specialized Bank Systems & Named Integration Modules
            </h3>
            <p className="text-xs sm:text-sm text-secondary/80 dark:text-gray-300 mb-6 leading-relaxed font-nunitoSans">
              SecureCMS connects to bank subsystem architectures to ensure cross-departmental privacy synchronization:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {namedIntegrationsData.map((item) => (
                <div key={item.acronym} className="p-4 rounded-2xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 space-y-1">
                  <div className="flex items-center gap-2 font-outfit">
                    <span className="text-sm font-extrabold text-cyan-600 dark:text-cyan-400 font-mono">{item.acronym}</span>
                    <span className="text-[11px] text-labelGray dark:text-gray-400 font-medium">({item.fullName})</span>
                  </div>
                  <p className="text-xs text-secondary/70 dark:text-gray-400 leading-relaxed font-nunitoSans">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-center text-xs sm:text-sm text-secondary dark:text-gray-300 font-nunitoSans">
            So when a customer withdraws marketing consent in net banking, the CBS and the campaign tool both see it in the same flow.
          </div>

        </div>
      </section>

      {/* Section 8: Security and Deployment for Bank IT and Risk Teams (CISO) */}
      <section id="security-and-deployment-for-bank-it-and-risk-teams" className="scroll-mt-40 py-24 bg-gray-50 dark:bg-secondary/60 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-tertiary font-semibold tracking-wider uppercase text-xs sm:text-sm inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 mb-3">
              <ShieldAlert className="w-4 h-4" /> CISO & IT Risk Controls
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-secondary dark:text-white font-outfit">
              Security and deployment for bank IT and risk teams
            </h2>
            <p className="mt-4 text-secondary/80 dark:text-gray-300 leading-relaxed text-base lg:text-lg font-nunitoSans">
              Bank IT and risk teams will want to see the controls before the demo. Here they are, layer by layer.
            </p>
          </div>

          {/* 7-Layer Defense Table */}
          <div className="bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-sm mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-100/90 dark:bg-white/5 border-b border-gray-200 dark:border-white/10 text-xs uppercase tracking-wider text-secondary dark:text-gray-300 font-poppins">
                    <th className="py-4 px-6 font-bold w-1/4">Layer</th>
                    <th className="py-4 px-6 font-bold">Control</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-white/5">
                  {securityLayers.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02]">
                      <td className="py-4 px-6 font-bold text-secondary dark:text-white font-outfit flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                        <span>{row.layer}</span>
                      </td>
                      <td className="py-4 px-6 text-xs sm:text-sm text-secondary/80 dark:text-gray-300 font-nunitoSans">
                        {row.control}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Penalty Callout & Deployment CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="p-6 rounded-3xl bg-red-500/10 border border-red-500/30 text-red-900 dark:text-red-200">
                <div className="flex items-center gap-2 font-bold text-sm mb-2 text-red-700 dark:text-red-300 font-outfit">
                  <ShieldAlert className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <span>Section 8(5) Penalty Warning: Up to ₹250 Crore</span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed font-nunitoSans">
                  Section 8(5) of the DPDP Act requires reasonable security safeguards, and a lapse sits in the highest penalty tier, up to ₹250 crore. That is why the security review deserves as much time as the compliance one.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 space-y-2">
                <h4 className="font-bold text-secondary dark:text-white text-sm font-outfit">Deployment Models</h4>
                <p className="text-xs text-secondary/70 dark:text-gray-400 leading-relaxed font-nunitoSans">
                  Deployment options: On-premise (Bare Metal / Bank Private Cloud), Indian Sovereign Cloud (AWS/Azure/GCP India regions), or hybrid air-gapped security perimeter.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-white/80 dark:bg-white/[0.04] backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-xl text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                  <FileCode className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold font-outfit text-secondary dark:text-white">Bank IT Security & Architecture Note</h4>
                <p className="text-xs text-secondary/70 dark:text-gray-400 leading-relaxed font-nunitoSans">
                  Deep-dive technical specification covering mTLS 1.3, public key cryptography, and private blockchain audit log immutability.
                </p>
                <button
                  onClick={openSecurityNoteModal}
                  className="w-full py-3.5 px-6 rounded-xl bg-tertiary hover:opacity-95 text-secondary font-bold font-outfit text-sm transition-all shadow-[0_0_16px_rgba(18,213,118,0.35)] flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" /> Download the Security Note
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 9: Implementation Roadmap for Banks */}
      <section className="py-24 bg-primary dark:bg-secondary border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-tertiary font-semibold tracking-wider uppercase text-xs sm:text-sm inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 mb-3">
              <GitBranch className="w-4 h-4" /> Roadmap
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-secondary dark:text-white font-outfit">
              Implementation roadmap for banks before 13 May 2027
            </h2>
            <p className="mt-4 text-secondary/80 dark:text-gray-300 leading-relaxed text-base lg:text-lg font-nunitoSans">
              The order matters more than the pace. Discovery comes first, notices second, and the audit drill last.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmapSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 relative flex flex-col justify-between hover:border-tertiary/40 transition-all shadow-sm group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-tertiary px-2.5 py-1 rounded-full bg-tertiary/15">
                      {step.status}
                    </span>
                    <span className="text-xs text-labelGray dark:text-gray-400 font-semibold font-poppins">{step.phase}</span>
                  </div>
                  <h3 className="text-lg font-bold text-secondary dark:text-white mb-2 font-outfit group-hover:text-tertiary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary/70 dark:text-gray-400 leading-relaxed font-nunitoSans">
                    {step.deliverables}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-labelGray dark:text-gray-400 font-nunitoSans">
            Implementation step durations are scoped collaboratively with SecureDApp's delivery team.
          </div>

        </div>
      </section>

      {/* Section 10: Why Banks Choose SecureCMS (Comparison Matrix) */}
      <section className="py-24 bg-gray-50 dark:bg-secondary/60 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-tertiary font-semibold tracking-wider uppercase text-xs sm:text-sm inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 mb-3">
              <Scale className="w-4 h-4" /> Comparative Rigor
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-secondary dark:text-white font-outfit">
              Why banks choose SecureCMS
            </h2>
            <p className="mt-4 text-secondary/80 dark:text-gray-300 leading-relaxed text-base lg:text-lg font-nunitoSans">
              A cookie banner records a click on a website. A bank needs consent that holds across branches, apps and partner systems, and proof that stands up in an audit.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-100/90 dark:bg-white/5 border-b border-gray-200 dark:border-white/10 text-xs uppercase tracking-wider text-secondary dark:text-gray-300 font-poppins">
                    <th className="py-4 px-6 font-bold w-1/3">Requirement</th>
                    <th className="py-4 px-6 font-bold w-1/3 text-labelGray dark:text-gray-400">Basic consent banner</th>
                    <th className="py-4 px-6 font-bold w-1/3 text-tertiary bg-tertiary/5">
                      SecureCMS
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-white/5">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02]">
                      <td className="py-4 px-6 font-bold text-secondary dark:text-white font-outfit">
                        {row.requirement}
                      </td>
                      <td className="py-4 px-6 text-xs sm:text-sm text-labelGray dark:text-gray-400 font-nunitoSans">
                        {row.basicBanner}
                      </td>
                      <td className="py-4 px-6 text-xs sm:text-sm font-semibold text-tertiary bg-tertiary/5 font-outfit">
                        {row.secureCMS}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* Section 11: Interactive BFSI Consent Simulator */}
      <section className="py-24 bg-primary dark:bg-secondary border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveConsentSimulator onBookDemo={() => setIsDemoModalOpen(true)} />
        </div>
      </section>

      {/* Section 12: DPDP Resources & Official Sources */}
      <section className="py-24 bg-gray-50 dark:bg-secondary/60 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary dark:text-white font-outfit">
              DPDP resources for banks
            </h2>
            <p className="mt-2 text-secondary/80 dark:text-gray-300 text-base font-nunitoSans">
              Planning a rollout? These guides cover the pillar topic, the BFSI rules and the timeline in more depth:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {dpdpResources.map((res, idx) => (
              <a
                key={idx}
                href={res.url}
                target={res.external ? "_blank" : "_self"}
                rel="noreferrer"
                className="p-6 rounded-3xl bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 hover:border-tertiary/40 transition-all flex flex-col justify-between group shadow-sm hover:-translate-y-1"
              >
                <div>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-tertiary/15 text-tertiary font-bold mb-3 inline-block font-poppins">
                    {res.badge}
                  </span>
                  <h3 className="text-base font-bold text-secondary dark:text-white group-hover:text-tertiary transition-colors flex items-center justify-between font-outfit">
                    <span>{res.title}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-tertiary shrink-0" />
                  </h3>
                  <p className="text-xs text-labelGray dark:text-gray-400 mt-2 leading-relaxed font-nunitoSans">
                    {res.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Official Sources Links */}
          <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10">
            <div className="text-xs font-bold uppercase tracking-wider text-labelGray dark:text-gray-400 mb-3 font-poppins">
              Official Indian Regulatory Sources:
            </div>
            <div className="flex flex-wrap gap-4 text-xs font-nunitoSans">
              {officialSources.map((source, idx) => (
                <a
                  key={idx}
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary dark:text-gray-300 hover:text-tertiary underline underline-offset-4 flex items-center gap-1 transition-colors"
                >
                  <span>{source.name}</span>
                  <ExternalLink className="w-3 h-3 text-labelGray" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Section 13: Frequently Asked Questions (Placed at the Very End as Requested) */}
      <section id="frequently-asked-questions-about-consent-management-for-banks" className="scroll-mt-40 py-24 bg-primary dark:bg-secondary border-b border-gray-200 dark:border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-tertiary font-semibold tracking-wider uppercase text-xs sm:text-sm inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 mb-3">
              <Info className="w-4 h-4" /> Banking Q&A
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-secondary dark:text-white font-outfit">
              Frequently asked questions about consent management for banks
            </h2>
            <p className="mt-3 text-secondary/70 dark:text-gray-400 text-base font-nunitoSans">
              Clear, legally verified answers on KYC obligations, PMLA retention, core banking connectors, and DPDP mandates.
            </p>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-secondary dark:text-white hover:text-tertiary transition-colors"
                  >
                    <span className="text-base sm:text-lg font-outfit">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${isOpen ? "rotate-180 text-tertiary" : "text-labelGray"}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-secondary/80 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-white/5 pt-4 font-nunitoSans"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Final Bottom Conversion CTA Banner */}
      <section className="py-24 bg-gradient-to-br from-[#001428] via-[#001938] to-[#00285a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-tertiary/15 border border-tertiary/30 text-tertiary text-xs font-semibold font-poppins">
            <ShieldCheck className="w-4 h-4" /> Ready for the DPDP Act 2023 & DPDP Rules 2025
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit tracking-tight leading-tight">
            Carry the Section 6(10) Burden of Proof with Cryptographic Certainty
          </h2>

          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed font-nunitoSans">
            Schedule an architectural demonstration with SecureDApp's BFSI engineering team to review CBS connectors, mobile SDKs, and branch teller workflows.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-tertiary hover:opacity-95 text-secondary font-bold text-sm sm:text-base font-outfit shadow-[0_0_20px_rgba(18,213,118,0.35)] transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" /> Book a Banking Demo
            </button>

            <button
              onClick={openChecklistModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-sm sm:text-base font-outfit hover:border-tertiary transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-tertiary" /> Download Bank DPDP Consent Checklist
            </button>

            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-transparent border border-white/20 text-gray-300 font-semibold text-sm font-outfit hover:text-white hover:border-white/40 transition-all flex items-center justify-center gap-2"
            >
              <Terminal className="w-4 h-4 text-cyan-400" /> Review API Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Floating Book Meeting CTA */}
      <BookMeetCta />

      {/* Standard Footer */}
      <Footer />

      {/* Modals */}
      <BankingDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      <LeadMagnetModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        assetType={leadAssetType}
      />
    </div>
  );
}

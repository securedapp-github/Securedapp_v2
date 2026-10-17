"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { 
  TrendingUp, 
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
  Smartphone,
  Database,
  RefreshCw,
  Clock,
  Building2,
  Users,
  KeyRound,
  AlertTriangle,
  FileCheck,
  Bell,
  Code
} from "lucide-react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/footer";
import BookMeetCta from "../../../components/common/bookMeetCta";
import DPDPLiveCountdownTimer from "../../../components/common/DPDPLiveCountdownTimer";
import InteractiveStockBrokersConsentSimulator from "./InteractiveStockBrokersConsentSimulator";
import { BrokerDemoModal, BrokerChecklistModal } from "./StockBrokersModals";
import { 
  stockBrokersConsentSchema, 
  metaData, 
  partnerLogos, 
  jumpNavLinks,
  sebiVsConsentTable,
  touchpointsTable,
  secureCmsModules,
  cscrfLayers,
  implementationRoadmap,
  milestoneDates,
  faqsData,
  officialSources,
  neighbouringResources
} from "./data";

export default function StockBrokersConsentPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [checklistModalOpen, setChecklistModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [simulatorTab, setSimulatorTab] = useState("sebi-vs-consent");

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(stockBrokersConsentSchema) }}
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
            <span className="text-secondary dark:text-white font-semibold">Stock Brokers</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Copy Column */}
            <div className="lg:col-span-8 space-y-6">
              {/* Live Regulatory Countdown */}
              <div className="w-full max-w-3xl">
                <DPDPLiveCountdownTimer 
                  label="Core DPDP Enforcement: 13 May 2027" 
                  sublabel="SEBI-Registered Stock Brokers" 
                />
              </div>

              {/* Regulatory Alignment Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-tertiary/10 border border-tertiary/20 text-xs font-mono font-bold text-tertiary">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>SEBI CSCRF Aligned · DPDP Act 2023 · KRA / UCC / PMLA Mandates</span>
              </div>

              {/* Main Display Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-outfit tracking-tight text-secondary dark:text-white leading-[1.1]">
                DPDP Compliance for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-tertiary via-emerald-400 to-teal-400">
                  Stock Brokers
                </span>
              </h1>

              {/* Subheadline / Lead Paragraph */}
              <p className="text-base sm:text-lg font-normal font-nunitoSans text-labelGray dark:text-gray-300 leading-relaxed max-w-3xl">
                SecureCMS, the consent management platform by SecureDApp, separates what SEBI and PMLA require from what needs client consent. It records, verifies and enforces that consent across trading apps, Authorised Persons and back-office systems. Built for the DPDP Act 2023 and DPDP Rules 2025.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setDemoModalOpen(true)}
                  className="px-8 py-4 bg-tertiary hover:opacity-95 text-secondary font-bold font-outfit rounded-xl shadow-[0_0_20px_rgba(18,213,118,0.3)] hover:shadow-[0_0_30px_rgba(18,213,118,0.5)] transition-all flex items-center space-x-2 text-base cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a broker demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setChecklistModalOpen(true)}
                  className="px-6 py-4 bg-white/80 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 text-secondary dark:text-white font-bold font-outfit rounded-xl border border-gray-200 dark:border-white/10 transition-all flex items-center space-x-2 text-base backdrop-blur-md cursor-pointer"
                >
                  <Download className="w-4 h-4 text-tertiary" />
                  <span>Download the stock broker DPDP checklist</span>
                </button>
              </div>

              {/* Quick Answer Strip */}
              <div className="p-4 rounded-2xl bg-amber-500/[0.08] dark:bg-amber-500/[0.12] border border-amber-500/30 text-xs sm:text-sm font-nunitoSans text-amber-900 dark:text-amber-200 flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-300 flex-shrink-0 flex items-center justify-center mt-0.5">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="font-outfit font-bold">Quick answer:</strong> KYC, UCC and exchange reporting are required by law. Marketing, research nudges and cross-sell need client consent.{" "}
                  <a 
                    href="#sebi-vs-consent" 
                    onClick={(e) => scrollToSection(e, "#sebi-vs-consent")}
                    className="underline font-semibold hover:text-tertiary"
                  >
                    View purpose matrix &darr;
                  </a>
                </div>
              </div>

              {/* Author & Review Line */}
              <div className="text-xs font-mono text-labelGray dark:text-gray-400 pt-1">
                Written by <span className="text-secondary dark:text-white font-semibold">SecureDApp Research Desk</span> · Reviewed by <span className="text-secondary dark:text-white font-semibold">Securities &amp; DPDP Legal Architect</span> · Last updated 13 Oct 2026
              </div>
            </div>

            {/* Quick Metrics / Interactive Trust Column */}
            <div className="lg:col-span-4 bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-2xl rounded-3xl p-6 sm:p-7 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-mono uppercase tracking-wider text-labelGray dark:text-gray-400">
                  Broker Compliance Guardrails
                </h3>
                <span className="text-[10px] font-mono text-tertiary">Click to Simulate</span>
              </div>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => handleHeroMetricClick("sebi-vs-consent")}
                  className="w-full text-left p-3.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-tertiary/40 hover:bg-tertiary/[0.04] transition-all group cursor-pointer block"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans">DDPI Separation</div>
                    <ArrowRight className="w-3.5 h-3.5 text-tertiary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-sm font-bold text-secondary dark:text-white mt-0.5 font-outfit">DDPI ≠ DPDP Consent</div>
                  <div className="text-[11px] text-tertiary mt-1 font-mono flex items-center justify-between">
                    <span>Unbundled Trading vs Profiling</span>
                    <span className="text-[10px] underline">Inspect Matrix &rarr;</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleHeroMetricClick("ap-onboarding")}
                  className="w-full text-left p-3.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-tertiary/40 hover:bg-tertiary/[0.04] transition-all group cursor-pointer block"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans">AP &amp; Sub-Broker Oversight</div>
                    <ArrowRight className="w-3.5 h-3.5 text-tertiary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-sm font-bold text-secondary dark:text-white mt-0.5 font-outfit">OTP Verification &amp; Masking</div>
                  <div className="text-[11px] text-tertiary mt-1 font-mono flex items-center justify-between">
                    <span>Field-Level RBAC Enforcement</span>
                    <span className="text-[10px] underline">Test AP Flow &rarr;</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleHeroMetricClick("nudge-runtime")}
                  className="w-full text-left p-3.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-tertiary/20 hover:border-tertiary hover:bg-tertiary/[0.06] transition-all group cursor-pointer block shadow-sm ring-1 ring-tertiary/10"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-tertiary font-semibold font-nunitoSans">Trading App Nudges &amp; Calls</div>
                    <ArrowRight className="w-3.5 h-3.5 text-tertiary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-sm font-bold text-secondary dark:text-white mt-0.5 font-outfit">&lt; 50ms Runtime Suppression</div>
                  <div className="text-[11px] text-tertiary mt-1 font-mono flex items-center justify-between">
                    <span>Pre-Push Consent Verification</span>
                    <span className="text-[10px] underline font-bold">Test Nudge &rarr;</span>
                  </div>
                </button>
              </div>

              {/* Partner Badges */}
              <div className="mt-6 pt-5 border-t border-gray-200 dark:border-white/10 space-y-2">
                <div className="text-[11px] font-mono text-labelGray dark:text-gray-400">
                  Regulatory &amp; Exchange Frameworks:
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

      {/* SECTION 1: What does DPDP compliance mean for stock brokers? */}
      <section id="overview" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-tertiary">
              Securities Compliance Reality
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-outfit mt-2 text-secondary dark:text-white">
              What does DPDP compliance mean for stock brokers?
            </h2>
            <p className="mt-4 text-base font-nunitoSans text-labelGray dark:text-gray-300 leading-relaxed">
              DPDP compliance for stock brokers means running your client data practices under the Digital Personal Data Protection Act, 2023 alongside the SEBI rules you already follow. You give clear notices, take purpose-specific consent for anything beyond what the law and the trading service need, honour withdrawal and rights requests, control what Authorised Persons and vendors do with client data, and report breaches. Processing that SEBI or PMLA mandates carries on without consent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-4">
              <h3 className="text-xl font-bold font-outfit text-secondary dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-tertiary" />
                <span>What Brokers Already Do Well</span>
              </h3>
              <p className="text-sm font-nunitoSans text-labelGray dark:text-gray-300 leading-relaxed">
                Most brokers already handle the regulated basics well. KYC runs through a KRA, the UCC goes to the exchanges, and contract notes reach clients on time. Legal obligations under PMLA and exchange regulations are well-oiled.
              </p>
              <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/5 text-xs font-mono text-gray-500 dark:text-gray-400">
                Statutory Processing: KRA · CKYC · UCC · FIU-IND · Depository Holds
              </div>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-amber-500/[0.06] border border-amber-500/20 space-y-4">
              <h3 className="text-xl font-bold font-outfit text-amber-900 dark:text-amber-200 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <span>Where the Real DPDP Exposure Sits</span>
              </h3>
              <p className="text-sm font-nunitoSans text-labelGray dark:text-gray-300 leading-relaxed">
                The DPDP gap sits elsewhere: in the app that tracks behaviour to send push notifications, the Authorised Person who collects documents on a phone, the research desk that profiles clients, and the mutual fund cross-sell that rides on a single tick box. Those uses need notice and real client consent, with audit-ready proof.
              </p>
              <div className="p-3 rounded-xl bg-white/80 dark:bg-black/20 text-xs font-mono text-amber-700 dark:text-amber-300">
                Deadline: All remaining DPDP obligations apply from 13 May 2027.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: What SEBI requires and what needs client consent */}
      <section id="sebi-vs-consent" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-white/[0.02] border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-tertiary">
              Statutory vs Consent Split
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-outfit mt-2 text-secondary dark:text-white">
              What SEBI requires and what needs client consent
            </h2>
            <p className="mt-4 text-base font-nunitoSans text-labelGray dark:text-gray-300 leading-relaxed">
              Brokers do not need client consent for processing that SEBI rules or PMLA require, such as KYC through a KRA, assigning a UCC, reporting to exchanges and depositories, and keeping transaction records. Consent is needed for uses that go beyond the trading service and the law, such as marketing, research-based nudges, cross-selling other products and sharing data with partners.
            </p>
          </div>

          {/* Full 10-Row Table */}
          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-xl">
            <table className="w-full text-left text-sm font-nunitoSans">
              <thead className="bg-gray-100 dark:bg-white/5 font-outfit text-xs uppercase tracking-wider text-secondary dark:text-white border-b border-gray-200 dark:border-white/10">
                <tr>
                  <th className="p-4 sm:p-5">Broker Purpose</th>
                  <th className="p-4 sm:p-5">Usual Legal Basis</th>
                  <th className="p-4 sm:p-5">What SecureCMS Does</th>
                  <th className="p-4 sm:p-5">Consent Required?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-white/10">
                {sebiVsConsentTable.map((row, idx) => (
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
                      {row.isMandatory ? (
                        <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                          <Lock className="w-3 h-3" />
                          <span>No (Legal Obligation)</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-tertiary/10 text-tertiary border border-tertiary/20">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Yes (Client Consent)</span>
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

      {/* SECTION 3: DDPI is not DPDP consent & Retention vs Erasure */}
      <section id="ddpi-not-consent" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* DDPI Callout */}
            <div className="p-7 rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold font-outfit text-secondary dark:text-white">
                DDPI is not DPDP consent
              </h3>
              <p className="text-sm font-nunitoSans text-labelGray dark:text-gray-300 leading-relaxed">
                A Demat Debit and Pledge Instruction (DDPI) lets a broker debit or pledge securities from a client&apos;s demat account for specific settlement purposes under SEBI rules (SEBI circulars of 4 April 2022 &amp; 6 October 2022). It says nothing about how you may use that client&apos;s personal data.
              </p>
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-nunitoSans text-gray-700 dark:text-gray-300">
                <strong>Key Takeaway:</strong> A signed DDPI does not stand in for DPDP consent. You still owe the client a statutory Section 5 notice, and you need separate, purpose-level consent for marketing, portfolio profiling and partner data sharing.
              </div>
            </div>

            {/* Retention vs Erasure Callout */}
            <div id="retention-erasure" className="p-7 rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold font-outfit text-secondary dark:text-white">
                Retention vs erasure for closed trading and demat accounts
              </h3>
              <p className="text-sm font-nunitoSans text-labelGray dark:text-gray-300 leading-relaxed">
                When a client closes an account and asks for erasure under Section 12, a broker has to delete data it no longer needs. It can keep the records that SEBI rules, depository requirements or PMLA oblige it to hold, so a closed account does not mean an empty database.
              </p>
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-nunitoSans text-gray-700 dark:text-gray-300">
                <strong>SecureCMS Automation:</strong> SecureCMS logs which fields are being held, the legal reason for holding them and the date they can be released, then erases the rest.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Where brokers collect client consent */}
      <section id="touchpoints" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-white/[0.02] border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-tertiary">
              Touchpoint Vulnerability Map
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-outfit mt-2 text-secondary dark:text-white">
              Where brokers collect client consent
            </h2>
            <p className="mt-4 text-base font-nunitoSans text-labelGray dark:text-gray-300 leading-relaxed">
              A broker collects personal data at eight touchpoints, and the consent problem is different at each one. The app and the phone desk carry the most risk, because data comes in fast and the consent record is thin or missing.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-xl mb-6">
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

          <div className="p-4 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/20 text-xs font-nunitoSans text-emerald-900 dark:text-emerald-200">
            <strong>Section 9 Minor Demat Accounts:</strong> Accounts run by a guardian for a minor need verifiable parental consent under Section 9 of the Act, and SecureCMS has a minor consent module for that. Existing clients who signed older declarations should get a fresh notice well before 13 May 2027.
          </div>
        </div>
      </section>

      {/* SECTION 5: Interactive Stock Broker Simulator */}
      <section id="simulator" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-tertiary">
              Interactive Testbench
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-outfit mt-2 text-secondary dark:text-white">
              Interactive Stock Broker Consent &amp; Compliance Simulator
            </h2>
            <p className="mt-3 text-base font-nunitoSans text-labelGray dark:text-gray-300">
              Test how SecureCMS isolates SEBI/PMLA statutory obligations, verifies Authorised Person (AP) client onboarding with direct OTP, automates partial erasure on closed demat accounts, and validates trading app research nudges in sub-50ms.
            </p>
          </div>

          <InteractiveStockBrokersConsentSimulator 
            activeTab={simulatorTab}
            setActiveTab={setSimulatorTab}
            onOpenChecklist={() => setChecklistModalOpen(true)}
          />
        </div>
      </section>

      {/* SECTION 6: How SecureCMS supports DPDP compliance for brokers */}
      <section id="modules" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-white/[0.02] border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-tertiary">
              Platform Architecture
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-outfit mt-2 text-secondary dark:text-white">
              How SecureCMS supports DPDP compliance for brokers
            </h2>
            <p className="mt-4 text-base font-nunitoSans text-labelGray dark:text-gray-300 leading-relaxed">
              SecureCMS, the consent management platform by SecureDApp, keeps one consent record for each client across your trading app, Authorised Persons and back office. It separates SEBI-mandated purposes from consent-based ones, verifies consent with an OTP on email, SMS or WhatsApp, and checks consent before data is used for marketing or research. Rights requests and grievances go through DPO escalation, and tamper-proof audit logs back all of it.
            </p>
          </div>

          {/* Module Matrix Table */}
          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-xl mb-12">
            <table className="w-full text-left text-sm font-nunitoSans">
              <thead className="bg-gray-100 dark:bg-white/5 font-outfit text-xs uppercase tracking-wider text-secondary dark:text-white border-b border-gray-200 dark:border-white/10">
                <tr>
                  <th className="p-4 sm:p-5">Broker Problem</th>
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

          {/* 5 Deep-Dive Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-3">
              <h3 className="text-base font-bold font-outfit text-secondary dark:text-white">
                Separating SEBI-Mandated Processing
              </h3>
              <p className="text-xs font-nunitoSans text-gray-600 dark:text-gray-300 leading-relaxed">
                Your compliance team tags each data field to a purpose. KYC, UCC and reporting sit as legal obligations. Marketing and research sit as consent-based ones. A client sees a choice only where one exists.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-3">
              <h3 className="text-base font-bold font-outfit text-secondary dark:text-white">
                Consent on Authorised Person Journeys
              </h3>
              <p className="text-xs font-nunitoSans text-gray-600 dark:text-gray-300 leading-relaxed">
                APs often onboard clients on a phone or tablet. SecureCMS sends an OTP over email, SMS or WhatsApp so the client confirms their own consent. Role-based access limits what each AP can see, so sub-brokers don&apos;t browse the whole client book.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-3">
              <h3 className="text-base font-bold font-outfit text-secondary dark:text-white">
                Consent Checks for Trading App Nudges
              </h3>
              <p className="text-xs font-nunitoSans text-gray-600 dark:text-gray-300 leading-relaxed">
                Before a push notification, referral message or research nudge goes out, your systems call SecureCMS through the API or SDK. If the client withdrew consent, the check fails and the nudge stays suppressed.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-3">
              <h3 className="text-base font-bold font-outfit text-secondary dark:text-white">
                Rights Requests &amp; DPO Escalation
              </h3>
              <p className="text-xs font-nunitoSans text-gray-600 dark:text-gray-300 leading-relaxed">
                Clients can ask to see, correct or erase their data. DSR automation tracks every request against statutory SLAs, with policy versioning. Grievances follow a documented trail and escalate to your DPO.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-3 md:col-span-2 lg:col-span-2">
              <h3 className="text-base font-bold font-outfit text-secondary dark:text-white">
                Evidence Ready for Inspections (72-Hour DPB &amp; 6-Hour CERT-In)
              </h3>
              <p className="text-xs font-nunitoSans text-gray-600 dark:text-gray-300 leading-relaxed">
                When SEBI or the Data Protection Board asks for proof, you need records, not recollection. Blockchain-backed logs and compliance reports can be exported, and the Auditor role gives read-only access. The clocks are tight: a detailed breach report to the Board within 72 hours, and CERT-In expects cyber incidents reported within 6 hours. Run a drill before anyone external does.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Security controls and SEBI CSCRF */}
      <section id="cscrf-security" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-tertiary">
              Cyber Resilience Baseline
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-outfit mt-2 text-secondary dark:text-white">
              Security controls and SEBI CSCRF
            </h2>
            <p className="mt-4 text-base font-nunitoSans text-labelGray dark:text-gray-300 leading-relaxed">
              SecureCMS protects consent records with mTLS and IP whitelisting, public key cryptography, blockchain-based tamper-proof logs, multi-role access control, VAPT and separate Dev, UAT and Production environments. These controls support the reasonable security safeguards the DPDP Act requires, and they fit inside a broker&apos;s wider SEBI CSCRF programme.
            </p>
            <p className="mt-2 text-xs font-nunitoSans text-gray-500 dark:text-gray-400">
              SEBI&apos;s Cybersecurity and Cyber Resilience Framework (CSCRF) sets the cyber baseline for regulated entities, brokers included. The DPDP Act separately asks for reasonable security safeguards over personal data, and a failure there can attract a penalty of up to ₹250 crore. SecureCMS secures the consent layer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cscrfLayers.map((layer, idx) => (
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
        </div>
      </section>

      {/* SECTION 8: Integrations for broking systems */}
      <section id="integrations" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-white/[0.02] border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-tertiary">
                Ecosystem Connectors
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold font-outfit text-secondary dark:text-white">
                Integrations for broking systems
              </h2>
              <p className="text-base font-nunitoSans text-labelGray dark:text-gray-300 leading-relaxed">
                SecureCMS connects to trading apps through native iOS, Android and Flutter SDKs, and to back-office, CRM and marketing systems through APIs, webhooks and prebuilt connectors, so a client&apos;s consent choice is applied wherever their data is used. Prebuilt connectors cover CDPs, data management, analytics and marketing automation tools.
              </p>
              <p className="text-sm font-nunitoSans text-labelGray dark:text-gray-300 leading-relaxed">
                In practice, when a client switches off marketing in the app, the webhook passes that choice to your CRM and campaign tool straight away. Nobody has to export a file on Friday.
              </p>
              <div className="p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-nunitoSans text-secondary dark:text-gray-200">
                Running a specific back-office, KRA or depository participant system (Omnesys, ODIN, Symphony, GreekSoft, TechProcess)? Ask us during the demo and we will confirm what connects today.
              </div>
            </div>

            <div className="lg:col-span-5 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-7 shadow-xl space-y-3 text-xs font-mono">
              <div className="text-secondary dark:text-white font-bold font-outfit text-sm">
                Supported Broking Tech Stack Integrations:
              </div>
              <div className="space-y-2">
                <div className="p-2.5 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 flex items-center justify-between">
                  <span>Trading Apps &amp; Terminals</span>
                  <span className="text-tertiary font-bold">iOS · Android · Flutter · React Native</span>
                </div>
                <div className="p-2.5 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 flex items-center justify-between">
                  <span>Back-Office &amp; RMS</span>
                  <span className="text-tertiary font-bold">Omnesys · ODIN · Symphony · GreekSoft</span>
                </div>
                <div className="p-2.5 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 flex items-center justify-between">
                  <span>Broking CRM &amp; Lead Engines</span>
                  <span className="text-tertiary font-bold">Salesforce · LeadSquared · Zoho</span>
                </div>
                <div className="p-2.5 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 flex items-center justify-between">
                  <span>Marketing &amp; CDP Pipelines</span>
                  <span className="text-tertiary font-bold">CleverTap · MoEngage · Segment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: DPDP roadmap for stock brokers before 13 May 2027 */}
      <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-tertiary">
              Implementation Timeline
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-outfit mt-2 text-secondary dark:text-white">
              DPDP roadmap for stock brokers before 13 May 2027
            </h2>
            <p className="mt-4 text-base font-nunitoSans text-labelGray dark:text-gray-300 leading-relaxed">
              A broker can get ready for 13 May 2027 in six steps, from mapping client data to running an inspection drill. Start with the data, because every later step depends on knowing where client information sits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {implementationRoadmap.map((s, idx) => (
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

          {/* Date Milestones */}
          <div className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-secondary dark:text-white font-mono">
              Statutory DPDP Enforcement Dates
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {milestoneDates.map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-1">
                  <div className="text-xs font-bold text-tertiary font-mono">{m.date}</div>
                  <div className="text-sm font-bold font-outfit text-secondary dark:text-white">{m.milestone}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-nunitoSans">{m.scope}</div>
                </div>
              ))}
            </div>
            <div className="pt-2 text-xs text-gray-500 dark:text-gray-400 font-nunitoSans">
              <strong>Significant Data Fiduciary (SDF):</strong> Brokers handling high trading volumes may be notified as Significant Data Fiduciaries, requiring an India-based DPO, an independent data auditor and periodic Data Protection Impact Assessments (DPIA).
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: Frequently Asked Questions */}
      <section id="faqs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-white/[0.02] border-t border-gray-200 dark:border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-tertiary">
              Broker Legal Queries
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-outfit mt-2 text-secondary dark:text-white">
              Frequently asked questions: DPDP compliance for stock brokers
            </h2>
            <p className="mt-3 text-sm font-nunitoSans text-labelGray dark:text-gray-300">
              Eight questions compliance officers and DPOs at broking firms ask us most, answered in plain terms.
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

      {/* SECTION 11: DPDP resources for brokers & Authority Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-tertiary">
              Statutory Documentation
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-outfit mt-2 text-secondary dark:text-white">
              DPDP resources for brokers
            </h2>
            <p className="mt-2 text-sm font-nunitoSans text-labelGray dark:text-gray-300">
              Broking touches more than one product line, so your DPDP programme will too. Start with the pillar page, then follow the links that match your operations.
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
              Explore Neighbouring BFSI Consent Platforms:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {neighbouringResources.map((res, idx) => (
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
      <BrokerDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
      <BrokerChecklistModal
        isOpen={checklistModalOpen}
        onClose={() => setChecklistModalOpen(false)}
      />
    </div>
  );
}

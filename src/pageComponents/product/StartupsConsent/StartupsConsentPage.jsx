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
  Rocket,
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
  Zap,
  Info,
  Gavel,
  Eye,
  Shield,
  Crosshair,
  TrendingUp,
  Sliders,
  DollarSign,
  Globe
} from "lucide-react";

import {
  startupsConsentSchema,
  metaData,
  partnerLogos,
  stagesMatrix,
  tenPointChecklist,
  buildVsBuyMatrix,
  problemModuleResults,
  industryGuides,
  faqsData,
  dpdpResources
} from "./data";

import InteractiveStartupConsentSimulator from "./InteractiveStartupConsentSimulator";
import { StartupDemoModal, StartupChecklistModal } from "./StartupsModals";

export default function StartupsConsentPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isChecklistModalOpen, setIsChecklistModalOpen] = useState(false);

  const scrollToSection = (e, id) => {
    if (e && e.preventDefault) e.preventDefault();
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
    }
  };

  return (
    <div className="product-container bg-primary dark:bg-secondary font-outfit text-secondary dark:text-white transition-colors duration-200">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(startupsConsentSchema) }}
      />

      <MetaTags data={metaData} />

      <Navbar />

      <main>


        {/* Hero Section */}
        <section className="relative min-h-[90vh] pt-28 pb-20 overflow-hidden flex items-center bg-grid dark:bg-secondary border-b border-gray-200 dark:border-white/10">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-radial from-tertiary/15 via-transparent to-transparent blur-[140px] pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-tertiary/10 border border-tertiary/30 text-tertiary text-xs font-bold tracking-wide uppercase font-outfit">
                <Rocket className="w-4 h-4" /> DPDP Compliance for Startups & Growth Teams
              </div>

              {/* Live DPDP 13 May 2027 Countdown Timer */}
              <div className="w-full max-w-2xl text-left">
                <DPDPLiveCountdownTimer 
                  label="Core DPDP Enforcement: 13 May 2027" 
                  sublabel="Zero Statutory Exemptions for Startups" 
                />
              </div>

              {/* H1 */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] tracking-tight text-secondary dark:text-white font-outfit">
                Consent Management Platform for <span className="text-tertiary">Startups</span>
              </h1>

              {/* Verified Corporate Byline */}
              <div className="text-xs text-labelGray dark:text-gray-400 font-medium font-nunitoSans">
                SecureDApp Startup Privacy & Compliance Engineering Team · Updated: October 2026
              </div>

              {/* Hero Subheadline */}
              <p className="text-base sm:text-lg text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans max-w-3xl">
                <strong>SecureCMS</strong>, the consent management platform by <strong>SecureDApp</strong>, gives startups the consent, withdrawal and rights-request basics the DPDP Act asks for, without building them in-house. It grows with you as you add products, users and markets.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="px-8 py-4 bg-tertiary hover:opacity-95 text-secondary font-bold font-outfit rounded-xl shadow-[0_0_20px_rgba(18,213,118,0.35)] transition-all flex items-center justify-center gap-2 text-base"
                >
                  <Calendar className="w-4 h-4" /> Book a Startup Demo
                </button>
                <button
                  onClick={() => setIsChecklistModalOpen(true)}
                  className="px-8 py-4 bg-secondary/5 dark:bg-white/5 border border-secondary/20 dark:border-white/10 text-secondary dark:text-white font-semibold font-outfit rounded-xl hover:border-tertiary transition-all flex items-center justify-center gap-2 backdrop-blur-sm text-base shadow-sm"
                >
                  <Download className="w-4 h-4 text-tertiary" /> Download Startup DPDP Checklist
                </button>
              </div>

              {/* Quick Answer Strip */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-left max-w-3xl mx-auto shadow-sm backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-tertiary/10 text-tertiary mt-0.5 shrink-0">
                    <Info className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-tertiary block mb-1">
                      Quick Answer for Founders
                    </span>
                    <p className="text-xs sm:text-sm text-secondary/90 dark:text-gray-300 leading-relaxed font-nunitoSans">
                      There&rsquo;s no startup exemption under the DPDP Act today. If you collect personal data from people in India, the rules apply from 13 May 2027.
                    </p>
                  </div>
                </div>
              </div>

              {/* Two-Tier Filters: Stage & Vertical */}
              <div className="mt-2 space-y-3 text-xs font-outfit">
                {/* Where are you right now? */}
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <span className="text-labelGray dark:text-gray-400 font-bold mr-1">Where are you right now?</span>
                  {[
                    { label: "MVP / Pre-Seed", id: "dpdp-by-stage" },
                    { label: "Seed Stage", id: "dpdp-by-stage" },
                    { label: "Series A", id: "dpdp-by-stage" },
                    { label: "Selling to Enterprises", id: "dpdp-by-stage" }
                  ].map((s, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => scrollToSection(e, s.id)}
                      className="px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-secondary dark:text-gray-300 font-medium hover:border-tertiary transition-colors"
                    >
                      {s.label}
                    </button>
                  ))}
                </div>

                {/* What are you building? */}
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <span className="text-labelGray dark:text-gray-400 font-bold mr-1">What are you building?</span>
                  {[
                    { label: "Fintech", href: "/dpdp-compliance-platform/fintech" },
                    { label: "EdTech", href: "/dpdp-compliance-platform/edtech" },
                    { label: "Healthtech", href: "/dpdp-compliance-platform/healthcare" },
                    { label: "Ecommerce", href: "/dpdp-compliance-platform/ecommerce" },
                    { label: "SaaS", href: "/dpdp-compliance-platform/saas" },
                    { label: "Schools", href: "/dpdp-compliance-platform/schools" }
                  ].map((ind, idx) => (
                    <Link
                      key={idx}
                      href={ind.href}
                      className="px-3 py-1 rounded-full bg-tertiary/10 text-tertiary font-medium hover:bg-tertiary/20 transition-colors"
                    >
                      {ind.label} &rarr;
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Why Startups Need a Consent Management Platform */}
        <section className="py-16 lg:py-24 border-b border-gray-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 text-tertiary text-xs font-semibold uppercase tracking-wider font-outfit">
                  <Zap className="w-3.5 h-3.5" /> The Founder Challenge
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary dark:text-white tracking-tight font-outfit">
                  Why Startups Need a Consent Management Platform
                </h2>
                <p className="text-base sm:text-lg text-secondary/80 dark:text-gray-300 leading-relaxed font-nunitoSans">
                  A consent management platform gives a startup the pieces the DPDP Act expects: a clear notice, purpose-specific consent, easy withdrawal, rights requests and records, without building each one from scratch. For a small team running on many third-party tools, it also stops analytics and marketing tools from using data that users haven&rsquo;t agreed to.
                </p>
                <p className="text-sm sm:text-base text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans">
                  Think about a normal early-stage setup. One sign-up form feeds your CRM, a WhatsApp Business account, an analytics SDK, an ad pixel and a payment gateway. When a user says no to marketing, that &ldquo;no&rdquo; has to reach every one of those tools. Doing it by hand is fine at 200 users and a mess at 20,000. A platform handles it once, in one place, and keeps the proof an investor or enterprise buyer will ask for.
                </p>
                <div className="pt-2 text-xs text-labelGray dark:text-gray-400 font-nunitoSans">
                  SecureCMS is part of SecureDApp&rsquo;s wider{" "}
                  <Link href="/dpdp-compliance-platform" className="text-tertiary font-bold hover:underline font-outfit">
                    DPDP consent management platform &rarr;
                  </Link>
                </div>
              </div>

              {/* Right Col: Graphic Cards */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-secondary dark:text-white mb-1 font-outfit">
                    Multi-Tool Webhook Sync
                  </h3>
                  <p className="text-xs text-labelGray dark:text-gray-400 leading-relaxed font-nunitoSans">
                    Instantly syncs user opt-outs to CRM, WhatsApp BSP, Mixpanel, and Meta ad suppression lists in sub-120ms.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-secondary dark:text-white mb-1 font-outfit">
                    Investor Diligence Ready
                  </h3>
                  <p className="text-xs text-labelGray dark:text-gray-400 leading-relaxed font-nunitoSans">
                    Export tamper-proof audit receipts in 1 click during VC due diligence or enterprise procurement reviews.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-secondary dark:text-white mb-1 font-outfit">
                    Zero Engineering Burden
                  </h3>
                  <p className="text-xs text-labelGray dark:text-gray-400 leading-relaxed font-nunitoSans">
                    Prebuilt embeddable preference centers and SDKs save 3+ engineering sprints of custom consent development.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-3">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-secondary dark:text-white mb-1 font-outfit">
                    Automated DSR Workflows
                  </h3>
                  <p className="text-xs text-labelGray dark:text-gray-400 leading-relaxed font-nunitoSans">
                    Self-serve user access, correction, and account deletion tracking with statutory SLA enforcement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Is there a DPDP exemption for startups? */}
        <section className="py-16 lg:py-24 bg-gray-50/50 dark:bg-white/[0.02] border-b border-gray-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300 text-xs font-semibold uppercase tracking-wider mb-3 font-outfit">
                <AlertTriangle className="w-3.5 h-3.5" /> Statutory Reality Check
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary dark:text-white tracking-tight mb-4 font-outfit">
                Is There a DPDP Exemption for Startups?
              </h2>
              <p className="text-base sm:text-lg text-secondary/80 dark:text-gray-300 leading-relaxed mb-4 font-nunitoSans">
                Not at present. Section 17(3) of the DPDP Act allows the government to exempt notified startups or classes of businesses from certain duties, such as some notice and retention obligations, but no such exemption has been notified. There is also no turnover or user-count threshold, so any startup processing digital personal data of people in India must comply.
              </p>
              <p className="text-sm sm:text-base text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans">
                Two details help here. The Act defines a startup as a private limited company, partnership firm or LLP recognised under criteria the government notifies. And even if an exemption does arrive, Section 17(3) names the exact provisions it can switch off. Consent, security safeguards, breach reporting and the rights to correction and erasure are not among them. Waiting for a carve-out is a risky plan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm shadow-sm">
                <div className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-1 font-outfit">
                  Fact 1
                </div>
                <h3 className="text-base font-bold text-secondary dark:text-white mb-2 font-outfit">
                  Zero Exemptions Notified
                </h3>
                <p className="text-xs text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans">
                  While Section 17(3) exists in statute, the MeitY and Central Government have not notified any operational exemption for startups to date.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm shadow-sm">
                <div className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-1 font-outfit">
                  Fact 2
                </div>
                <h3 className="text-base font-bold text-secondary dark:text-white mb-2 font-outfit">
                  Core Duties Never Exempted
                </h3>
                <p className="text-xs text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans">
                  Affirmative consent (§6), reasonable security (§8(5)), 72-hour breach notice (§8(6)), and erasure rights (§12) cannot be turned off by Section 17(3).
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm shadow-sm">
                <div className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-1 font-outfit">
                  Fact 3
                </div>
                <h3 className="text-base font-bold text-secondary dark:text-white mb-2 font-outfit">
                  No Size or Revenue Floor
                </h3>
                <p className="text-xs text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans">
                  Unlike certain global frameworks, the DPDP Act 2023 applies equally whether a startup has bootstrapped ₹10,000 or raised $20M in venture funding.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: DPDP Compliance by Startup Stage (Roadmap) */}
        <section id="dpdp-by-stage" className="py-16 lg:py-24 border-b border-gray-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 text-tertiary text-xs font-semibold uppercase tracking-wider mb-3 font-outfit">
                <Rocket className="w-3.5 h-3.5" /> Maturity Roadmap
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary dark:text-white tracking-tight mb-4 font-outfit">
                DPDP Compliance by Startup Stage
              </h2>
              <p className="text-base sm:text-lg text-secondary/80 dark:text-gray-300 leading-relaxed font-nunitoSans">
                What a startup needs depends on its stage: at MVP, a clear notice, marketing and analytics opt-ins and a way to withdraw; by seed, rights requests and vendor controls; by Series A and enterprise sales, audit evidence, access controls and answers to customer questionnaires.
              </p>
            </div>

            {/* Stage Table */}
            <div className="overflow-x-auto rounded-3xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.04] backdrop-blur-sm shadow-sm mb-6">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-gray-100/90 dark:bg-white/5 border-b border-gray-200 dark:border-white/10 text-secondary dark:text-gray-300 font-bold font-poppins">
                  <tr>
                    <th className="py-4 px-6">Startup Stage</th>
                    <th className="py-4 px-6">What to Put in Place</th>
                    <th className="py-4 px-6">How SecureCMS Helps</th>
                    <th className="py-4 px-6 text-right">Milestone Focus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-white/5 text-secondary/80 dark:text-gray-300 font-nunitoSans">
                  {stagesMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-6 font-semibold text-secondary dark:text-white font-outfit">
                        {row.stage}
                      </td>
                      <td className="py-4 px-6 text-xs sm:text-sm text-secondary/80 dark:text-gray-300">
                        {row.requirements}
                      </td>
                      <td className="py-4 px-6 text-xs sm:text-sm font-mono text-tertiary">
                        {row.solution}
                      </td>
                      <td className="py-4 px-6 text-right">
                        <span className="inline-block px-3 py-1 text-[11px] font-bold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 font-outfit">
                          {row.badge}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-labelGray dark:text-gray-400 italic font-nunitoSans">
              You don&rsquo;t need the Series A column on day one. You do need to pick tools at MVP stage that won&rsquo;t force a rebuild later.
            </p>
          </div>
        </section>

        {/* Section 4: Interactive Simulator */}
        <section className="py-16 lg:py-24 bg-gray-50/50 dark:bg-white/[0.02] border-b border-gray-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 text-tertiary text-xs font-semibold uppercase tracking-wider mb-3 font-outfit">
                <Sliders className="w-3.5 h-3.5" /> Interactive Telemetry
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary dark:text-white tracking-tight mb-3 font-outfit">
                Test Multi-Tool Downstream Consent Sync
              </h2>
              <p className="text-base text-secondary/80 dark:text-gray-300 font-nunitoSans">
                Toggle marketing or analytics preferences on an early-stage signup form and watch SecureCMS fire webhooks to your CRM, WhatsApp BSP, and ad networks in real time.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <InteractiveStartupConsentSimulator />
            </div>
          </div>
        </section>

        {/* Section 5: Minimum Viable DPDP Checklist for Startups (10 Points) */}
        <section className="py-16 lg:py-24 border-b border-gray-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 text-tertiary text-xs font-semibold uppercase tracking-wider mb-3 font-outfit">
                <CheckSquare className="w-3.5 h-3.5" /> 1-Week Action Plan
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary dark:text-white tracking-tight mb-4 font-outfit">
                Minimum Viable DPDP Checklist for Startups
              </h2>
              <p className="text-base sm:text-lg text-secondary/80 dark:text-gray-300 leading-relaxed font-nunitoSans">
                If you only have a week, start here. SecureCMS covers items 2, 3, 5, 6, 7 and 10 natively through consent templates, preference center, and tamper-proof logs, and item 4 through runtime SDK validation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tenPointChecklist.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm relative hover:border-tertiary/40 transition-all backdrop-blur-sm"
                >
                  <div className="text-2xl font-extrabold text-tertiary/40 mb-2 font-mono">
                    {item.num}
                  </div>
                  <h4 className="text-base font-bold text-secondary dark:text-white mb-2 font-outfit">
                    {item.title}
                  </h4>
                  <p className="text-xs text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 text-xs text-secondary/90 dark:text-gray-300 flex items-center justify-between flex-wrap gap-4 font-nunitoSans">
              <span>
                Not sure whether a simple banner is enough for you? Read our analysis on{" "}
                <strong>Consent Management Platform vs. Cookie Banner under DPDP</strong>.
              </span>
              <Link
                href="https://blog.securedapp.io/consent-management-platform-vs-cookie-banner-dpdp/"
                className="text-tertiary font-bold hover:underline shrink-0 font-outfit"
              >
                Read Banner Analysis &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Section 6: Build or Buy? */}
        <section className="py-16 lg:py-24 bg-gray-50/50 dark:bg-white/[0.02] border-b border-gray-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 text-tertiary text-xs font-semibold uppercase tracking-wider mb-3 font-outfit">
                <Scale className="w-3.5 h-3.5" /> Resource Economics
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary dark:text-white tracking-tight mb-4 font-outfit">
                Build or Buy?
              </h2>
              <p className="text-base sm:text-lg text-secondary/80 dark:text-gray-300 leading-relaxed font-nunitoSans">
                A startup can build basic consent capture in-house, but versioned notices, withdrawal that reaches every tool, rights-request tracking and tamper-proof records take ongoing engineering time. Buying a platform keeps engineers on the product and gives you evidence you can show investors and customers.
              </p>
            </div>

            {/* Build vs Buy Table */}
            <div className="overflow-x-auto rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm bg-white/80 dark:bg-white/[0.04] backdrop-blur-sm mb-8">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-gray-100/90 dark:bg-white/5 border-b border-gray-200 dark:border-white/10 text-secondary dark:text-gray-300 font-bold font-poppins">
                  <tr>
                    <th className="py-4 px-6 w-1/4">Requirement</th>
                    <th className="py-4 px-6 w-3/8 text-rose-600 dark:text-rose-400">
                      Build In-House
                    </th>
                    <th className="py-4 px-6 w-3/8 text-emerald-600 dark:text-emerald-400">
                      SecureCMS
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-white/5 text-secondary/80 dark:text-gray-300 font-nunitoSans">
                  {buildVsBuyMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-6 font-semibold text-secondary dark:text-white font-outfit">
                        {row.dimension}
                      </td>
                      <td className="py-4 px-6 text-xs sm:text-sm text-secondary/80 dark:text-gray-300">
                        {row.inHouse}
                      </td>
                      <td className="py-4 px-6 text-xs sm:text-sm text-secondary dark:text-white font-medium">
                        {row.secureCms}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-labelGray dark:text-gray-400 italic font-nunitoSans">
              Building is a fair choice if consent is simple and your team has spare capacity. It stops being cheap once you add a second product, a new vendor every quarter, or your first customer audit.
            </p>
          </div>
        </section>

        {/* Section 7: How SecureCMS Works for Startups */}
        <section className="py-16 lg:py-24 border-b border-gray-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 text-tertiary text-xs font-semibold uppercase tracking-wider mb-3 font-outfit">
                <Layers className="w-3.5 h-3.5" /> Architecture & Modules
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary dark:text-white tracking-tight mb-4 font-outfit">
                How SecureCMS Works for Startups
              </h2>
              <p className="text-base sm:text-lg text-secondary/80 dark:text-gray-300 leading-relaxed font-nunitoSans">
                SecureCMS gives a startup ready-made consent templates, embedded or redirect consent screens, OTP confirmation where proof matters, a preference centre for users, runtime consent checks through APIs and SDKs, rights-request tracking and tamper-proof records. The same setup scales to more apps and more markets later.
              </p>
            </div>

            {/* Problem Module Table */}
            <div className="overflow-x-auto rounded-3xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.04] backdrop-blur-sm shadow-sm mb-12">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-gray-100/90 dark:bg-white/5 border-b border-gray-200 dark:border-white/10 text-secondary dark:text-gray-300 font-bold font-poppins">
                  <tr>
                    <th className="py-4 px-6">Startup Problem</th>
                    <th className="py-4 px-6">SecureCMS Module</th>
                    <th className="py-4 px-6">Outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-white/5 text-secondary/80 dark:text-gray-300 font-nunitoSans">
                  {problemModuleResults.map((p, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-6 font-semibold text-secondary dark:text-white font-outfit">
                        {p.problem}
                      </td>
                      <td className="py-4 px-6 text-xs sm:text-sm font-mono text-tertiary">
                        {p.module}
                      </td>
                      <td className="py-4 px-6 text-xs sm:text-sm text-secondary/80 dark:text-gray-300">
                        {p.result}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm shadow-sm">
                <h4 className="text-base font-bold text-secondary dark:text-white mb-2 font-outfit">
                  Set Up in Less Than 24 Hours
                </h4>
                <p className="text-xs text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans">
                  Start from ready-made consent templates and purpose definitions instead of a blank page. Pick an embedded flow or a redirect screen, connect through APIs or SDKs, and your first consent screen becomes a configuration task, not a feature to build.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm shadow-sm">
                <h4 className="text-base font-bold text-secondary dark:text-white mb-2 font-outfit">
                  Consent Investors & Buyers Can Check
                </h4>
                <p className="text-xs text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans">
                  Consent events are recorded in blockchain-backed logs that can&rsquo;t be quietly edited later. When a diligence team or enterprise buyer sends a questionnaire, you export compliance reports instead of digging through databases. An Auditor role gives outsiders read-only access.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm shadow-sm">
                <h4 className="text-base font-bold text-secondary dark:text-white mb-2 font-outfit">
                  Grows with Products & Markets
                </h4>
                <p className="text-xs text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans">
                  One tenant can run multiple apps, so a second product doesn&rsquo;t need a second consent setup. Role-based access limits each team to what it needs, and policy versioning tracks every notice change. Selling abroad? Policies for GDPR, CPRA, LGPD and PDPA sit alongside your DPDP policy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: DPDP Guides for Your Industry */}
        <section className="py-16 lg:py-24 bg-gray-50/50 dark:bg-white/[0.02] border-b border-gray-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 text-tertiary text-xs font-semibold uppercase tracking-wider mb-3 font-outfit">
                <Building2 className="w-3.5 h-3.5" /> Vertical Playbooks
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary dark:text-white tracking-tight mb-3 font-outfit">
                DPDP Guides for Your Industry
              </h2>
              <p className="text-base text-secondary/80 dark:text-gray-300 font-nunitoSans">
                Startup rules are the same on paper, but a lending app, a school product and a D2C store collect very different data. Pick the guide closest to what you&rsquo;re building.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industryGuides.map((ind, idx) => (
                <Link
                  key={idx}
                  href={ind.href}
                  className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm hover:border-tertiary/40 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
                >
                  <div>
                    <h4 className="text-base font-bold text-secondary dark:text-white group-hover:text-tertiary transition-colors mb-2 font-outfit">
                      {ind.sector}
                    </h4>
                    <p className="text-xs text-labelGray dark:text-gray-400 leading-relaxed font-nunitoSans">
                      {ind.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100 dark:border-white/10 text-xs font-bold text-tertiary flex items-center gap-1 font-outfit">
                    <span>{ind.linkText}</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: Additional Resources */}
        <section className="py-16 lg:py-24 border-b border-gray-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 text-tertiary text-xs font-semibold uppercase tracking-wider mb-3 font-outfit">
                <Globe className="w-3.5 h-3.5" /> Ecosystem
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary dark:text-white tracking-tight mb-3 font-outfit">
                DPDP Resources for Startup Teams
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {dpdpResources.map((res, idx) => (
                <Link
                  key={idx}
                  href={res.href}
                  className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm hover:border-tertiary/40 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  <div>
                    <h4 className="text-sm font-bold text-secondary dark:text-white group-hover:text-tertiary transition-colors mb-2 font-outfit">
                      {res.title}
                    </h4>
                    <p className="text-xs text-labelGray dark:text-gray-400 leading-relaxed font-nunitoSans">
                      {res.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100 dark:border-white/10 text-xs font-bold text-tertiary flex items-center gap-1 font-outfit">
                    <span>Read Guide</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section 10: Frequently Asked Questions (Positioned Directly Above Bottom CTA) */}
        <section id="faqs" className="py-16 lg:py-24 border-b border-gray-200 dark:border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 text-tertiary text-xs font-semibold uppercase tracking-wider mb-3 font-outfit">
                Frequently Asked Questions
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary dark:text-white tracking-tight font-outfit">
                Frequently Asked Questions: Consent Management for Startups
              </h2>
            </div>

            <div className="space-y-4">
              {faqsData.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-sm overflow-hidden transition-all shadow-sm hover:border-tertiary/30"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-secondary dark:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-tertiary font-outfit"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 shrink-0 ${
                          isOpen ? "rotate-180 text-tertiary" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-5 pb-5 text-xs sm:text-sm text-labelGray dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-white/10 pt-4 font-nunitoSans">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA Banner Matching Banking Golden Master */}
        <section className="py-24 bg-gradient-to-br from-secondary via-secondary to-[#00162e] border-t border-gray-200 dark:border-white/10 relative overflow-hidden text-center text-white">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-radial from-tertiary/15 via-transparent to-transparent blur-[120px] pointer-events-none -z-10" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight font-outfit">
              Get DPDP-Ready in Days, Not Sprints
            </h2>
            <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed font-nunitoSans">
              Equip your startup with automated unbundled consent, real-time downstream tool sync, and investor-grade audit logs without diverting engineers from product development.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-tertiary hover:opacity-95 text-secondary font-bold text-sm sm:text-base font-outfit shadow-[0_0_20px_rgba(18,213,118,0.35)] transition-all flex items-center justify-center gap-2"
              >
                Book a Startup Demo & Quote <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsChecklistModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-sm sm:text-base font-outfit hover:border-tertiary transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-tertiary" /> Download Startup Checklist
              </button>
            </div>
          </div>
        </section>

        {/* Floating Book Meeting CTA */}
        <BookMeetCta />
      </main>

      <Footer />

      {/* Modals */}
      <StartupDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      <StartupChecklistModal isOpen={isChecklistModalOpen} onClose={() => setIsChecklistModalOpen(false)} />
    </div>
  );
}

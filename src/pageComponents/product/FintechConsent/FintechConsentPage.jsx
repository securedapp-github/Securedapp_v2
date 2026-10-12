"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { 
  CreditCard, 
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
  Smartphone,
  Landmark,
  Database,
  RefreshCw,
  Sliders,
  AlertCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/footer";
import BookMeetCta from "../../../components/common/bookMeetCta";
import DPDPLiveCountdownTimer from "../../../components/common/DPDPLiveCountdownTimer";
import InteractiveFintechConsentSimulator from "./InteractiveFintechConsentSimulator";
import { FintechDemoModal, FintechChecklistModal } from "./FintechModals";
import { 
  fintechConsentSchema, 
  metaData, 
  partnerLogos, 
  transactionVsConsentMatrix,
  multiProductMatrix,
  enterpriseModules,
  securityLayers,
  implementationRoadmap,
  faqsData,
  dpdpResources,
  officialSources
} from "./data";

export default function FintechConsentPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [checklistModalOpen, setChecklistModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(fintechConsentSchema) }}
        />
      </Head>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] pt-28 pb-20 overflow-hidden flex items-center bg-grid dark:bg-secondary border-b border-gray-200 dark:border-white/10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-radial from-tertiary/15 via-transparent to-transparent blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Trust Badges Bar */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <DPDPLiveCountdownTimer label="RBI & DPDP Compliance Deadline: 13 May 2027" />
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-tertiary/10 text-tertiary border border-tertiary/20 flex items-center gap-1.5 font-outfit">
              <ShieldCheck className="w-3.5 h-3.5" />
              DPDP Act 2023 & RBI Harmonized
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 font-outfit">
              UPI · Lending · Cards · Wealth
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] tracking-tight text-secondary dark:text-white font-outfit">
                Consent Management Platform for <span className="text-tertiary">Fintech Companies</span>
              </h1>
              
              <p className="mt-4 text-base sm:text-lg text-labelGray dark:text-gray-300 leading-relaxed max-w-3xl font-nunitoSans">
                SecureCMS gives fintech apps <strong>one unified consent record per user</strong> across payments, lending, credit cards and wealth. Every consent change reaches your partner banks and downstream tools as it happens, engineered strictly for the DPDP Act 2023 and DPDP Rules 2025.
              </p>

              {/* Quick Answer Callout Strip */}
              <div className="mt-6 p-5 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-xl shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-tertiary/10 text-tertiary flex-shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-tertiary font-bold">
                      Regulatory Quick-Answer: Do Transactions Need Consent?
                    </h4>
                    <p className="text-xs sm:text-sm text-secondary/80 dark:text-gray-300 mt-1 font-nunitoSans leading-relaxed">
                      <strong>No separate consent popup is needed for user-initiated transactions.</strong> Under DPDP Section 7, payment execution is a legitimate use. However, using transaction history for credit cross-sell, loan offers or marketing legally mandates unbundled Section 6 affirmative consent.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setDemoModalOpen(true)}
                  className="px-8 py-4 bg-tertiary hover:opacity-95 text-secondary font-bold font-outfit rounded-xl shadow-[0_0_20px_rgba(18,213,118,0.35)] transition-all flex items-center justify-center gap-2 text-base"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book a Fintech Demo</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </button>
                <button
                  onClick={() => setChecklistModalOpen(true)}
                  className="px-8 py-4 bg-secondary/5 dark:bg-white/5 border border-secondary/20 dark:border-white/10 text-secondary dark:text-white font-semibold font-outfit rounded-xl hover:border-tertiary transition-all flex items-center justify-center gap-2 backdrop-blur-sm text-base shadow-sm"
                >
                  <Download className="w-5 h-5 text-tertiary" />
                  <span>Download Fintech Checklist</span>
                </button>
              </div>
            </div>

            {/* Quick Metrics / Trust Column */}
            <div className="lg:col-span-4 bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-2xl rounded-3xl p-6 sm:p-7 shadow-xl">
              <h3 className="text-xs font-mono uppercase tracking-wider text-tertiary font-bold mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Fintech Compliance Standards
              </h3>
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10">
                  <div className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans">Data Residency</div>
                  <div className="text-sm font-bold text-secondary dark:text-white mt-0.5 font-outfit">MeitY Cloud (100% India)</div>
                  <div className="text-[11px] text-tertiary mt-1 font-mono">RBI 2018 Directive Compliant</div>
                </div>
                <div className="p-3.5 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10">
                  <div className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans">Sync Latency to Partner Banks</div>
                  <div className="text-sm font-bold text-secondary dark:text-white mt-0.5 font-outfit">&lt; 100ms via mTLS Webhooks</div>
                  <div className="text-[11px] text-tertiary mt-1 font-mono">Real-Time Opt-Out Suppression</div>
                </div>
                <div className="p-3.5 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10">
                  <div className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans">Card Data Security</div>
                  <div className="text-sm font-bold text-secondary dark:text-white mt-0.5 font-outfit">Zero Card Storage Architecture</div>
                  <div className="text-[11px] text-tertiary mt-1 font-mono">CoF Token Identifiers Only</div>
                </div>
              </div>

              {/* Partner Badges */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-white/10">
                <div className="text-[10px] uppercase tracking-wider text-labelGray dark:text-gray-400 mb-2 font-mono">
                  Incubated & Evaluated By
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-secondary dark:text-white font-outfit">
                  {partnerLogos.map((p, idx) => (
                    <div key={idx} className="p-2 rounded-xl bg-gray-100/80 dark:bg-white/5 border border-gray-200/80 dark:border-white/10 text-center shadow-sm">
                      {p.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Transaction vs Cross-Sell Matrix */}
      <section id="transaction-vs-cross-sell" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 text-tertiary text-xs font-semibold uppercase tracking-wider font-outfit mb-3">
              <ShieldCheck className="w-3.5 h-3.5" /> Statutory Classification
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary dark:text-white tracking-tight font-outfit">
              Section 7 Legitimate Use vs Section 6 Mandatory Consent
            </h2>
            <p className="text-base text-secondary/80 dark:text-gray-300 mt-3 font-nunitoSans leading-relaxed">
              The DPDP Act does not force you to prompt users for basic payments. Here is how statutory processing splits across fintech touchpoints.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.04] backdrop-blur-sm shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-100/90 dark:bg-white/5 text-secondary dark:text-gray-300 font-bold uppercase tracking-wider text-xs border-b border-gray-200 dark:border-white/10 font-poppins">
                <tr>
                  <th className="py-4 px-6">Fintech Activity</th>
                  <th className="py-4 px-6">DPDP Legal Basis</th>
                  <th className="py-4 px-6">Consent Dialog Needed?</th>
                  <th className="py-4 px-6">Compliance Rule</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-white/5 text-secondary/80 dark:text-gray-300 font-nunitoSans">
                {transactionVsConsentMatrix.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-semibold text-secondary dark:text-white font-outfit">
                      {item.activity}
                    </td>
                    <td className="py-4 px-6 font-mono text-tertiary text-xs">
                      {item.legalBasis}
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold font-outfit ${
                        item.consentNeeded.includes("No") || item.consentNeeded.includes("Exempt")
                          ? "bg-blue-500/10 text-blue-500 dark:text-blue-400 border border-blue-500/20"
                          : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                      }`}>
                        {item.consentNeeded}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-xs text-secondary/80 dark:text-gray-300">
                      {item.rule}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 2: Multi-Product Consent Hierarchy */}
      <section id="product-matrix" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-white/[0.02] border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 text-tertiary text-xs font-semibold uppercase tracking-wider font-outfit mb-3">
              <Layers className="w-3.5 h-3.5" /> Product × Purpose Isolation
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary dark:text-white tracking-tight font-outfit">
              One User, Many Products: The Consent Hierarchy
            </h2>
            <p className="text-base text-secondary/80 dark:text-gray-300 mt-3 font-nunitoSans leading-relaxed">
              A single user often uses your app for payments, loans, and mutual funds. SecureCMS maintains granular consent separation so opt-outs in lending never break core payment functionality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {multiProductMatrix.map((prod, idx) => (
              <div key={idx} className="p-7 rounded-3xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm shadow-sm hover:border-tertiary/40 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-secondary dark:text-white font-outfit">
                    {prod.product}
                  </h3>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-tertiary/10 text-tertiary border border-tertiary/20 font-bold">
                    Product Isolated
                  </span>
                </div>
                <div className="space-y-3.5 text-xs sm:text-sm font-nunitoSans">
                  <div>
                    <span className="text-labelGray dark:text-gray-400 font-mono block text-xs font-bold uppercase mb-0.5">Data Collected:</span>
                    <p className="text-secondary dark:text-gray-200 font-semibold">{prod.dataCollected}</p>
                  </div>
                  <div>
                    <span className="text-labelGray dark:text-gray-400 font-mono block text-xs font-bold uppercase mb-0.5">Primary Purpose:</span>
                    <p className="text-secondary/80 dark:text-gray-300 leading-relaxed">{prod.purpose}</p>
                  </div>
                  <div className="pt-3 border-t border-gray-200 dark:border-white/10 flex items-center justify-between text-xs font-outfit">
                    <span className="text-labelGray dark:text-gray-400 font-medium">Statutory Framework:</span>
                    <span className="text-tertiary font-bold">{prod.governance}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Interactive Simulator */}
      <section id="simulator" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 text-tertiary text-xs font-semibold uppercase tracking-wider font-outfit mb-3">
              <Sliders className="w-3.5 h-3.5" /> Real-Time Sandbox
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary dark:text-white tracking-tight font-outfit">
              Test Fintech Consent Lifecycle & Sync Telemetry
            </h2>
            <p className="text-base text-secondary/80 dark:text-gray-300 mt-3 font-nunitoSans leading-relaxed">
              Toggle in-app permissions, watch instant partner bank webhook dispatch, and observe how statutory PMLA legal holds override premature user erasure.
            </p>
          </div>

          <InteractiveFintechConsentSimulator />
        </div>
      </section>

      {/* Section 4: Enterprise Modules Suite */}
      <section id="enterprise-modules" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-white/[0.02] border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 text-tertiary text-xs font-semibold uppercase tracking-wider font-outfit mb-3">
              <Layers className="w-3.5 h-3.5" /> Platform Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary dark:text-white tracking-tight font-outfit">
              Enterprise Fintech Consent Modules
            </h2>
            <p className="text-base text-secondary/80 dark:text-gray-300 mt-3 font-nunitoSans leading-relaxed">
              Modular components engineered specifically for high-throughput payment apps, neo-banks, and digital lending platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enterpriseModules.map((module, idx) => (
              <div key={idx} className="p-7 rounded-3xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm shadow-sm hover:shadow-xl hover:border-tertiary/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-tertiary/10 text-tertiary border border-tertiary/20 font-bold">
                      {module.badge}
                    </span>
                    <Layers className="w-4 h-4 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary dark:text-white mb-2 font-outfit">
                    {module.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary/80 dark:text-gray-300 leading-relaxed font-nunitoSans">
                    {module.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Co-Fiduciary Governance & RBI Directives */}
      <section id="embedded-finance" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 text-tertiary text-xs font-semibold uppercase tracking-wider font-outfit">
                <Landmark className="w-3.5 h-3.5" /> Embedded Finance Governance
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary dark:text-white tracking-tight font-outfit">
                Fintech as LSP vs Partner Bank as Regulated Entity (RE)
              </h2>
              <p className="text-base text-secondary/80 dark:text-gray-300 leading-relaxed font-nunitoSans">
                When a fintech distributes co-branded credit cards or personal loans, liability is split between the fintech front-end (acting as a Lending Service Provider or Co-Fiduciary) and the underwriting bank or NBFC.
              </p>
              <div className="space-y-3.5 pt-2 font-nunitoSans">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tertiary flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-secondary/90 dark:text-gray-300">
                    <strong>Notice Identification:</strong> SecureCMS notices explicitly list both the fintech and partner bank fiduciary identities, fulfilling Section 5(1) disclosure duties.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tertiary flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-secondary/90 dark:text-gray-300">
                    <strong>Bilateral Opt-Out Routing:</strong> When a user revokes consent on the fintech app, SecureCMS dispatches signed webhook events directly to the bank's core system within 100ms.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tertiary flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-secondary/90 dark:text-gray-300">
                    <strong>Auditable Verification Receipts:</strong> Every consent change produces a cryptographic receipt admissible in dispute hearings before the Data Protection Board of India (DPBI) and RBI ombudsman.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-sm shadow-sm">
              <h3 className="text-sm font-mono uppercase tracking-wider text-tertiary mb-4 font-bold">
                CISO Security & Data Localization Layers
              </h3>
              <div className="space-y-4 font-nunitoSans">
                {securityLayers.map((sec, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10">
                    <div className="flex items-center space-x-2 text-xs font-bold text-secondary dark:text-white font-outfit">
                      <Lock className="w-3.5 h-3.5 text-tertiary" />
                      <span>{sec.layer}</span>
                    </div>
                    <p className="text-xs text-labelGray dark:text-gray-300 mt-1 pl-5.5 leading-relaxed">
                      {sec.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Implementation Roadmap */}
      <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-white/[0.02] border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 text-tertiary text-xs font-semibold uppercase tracking-wider font-outfit mb-3">
              <Calendar className="w-3.5 h-3.5" /> Statutory Timeline
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary dark:text-white tracking-tight font-outfit">
              6-Phase Fintech Implementation Roadmap
            </h2>
            <p className="text-base text-secondary/80 dark:text-gray-300 mt-3 font-nunitoSans leading-relaxed">
              Structured deployment path to achieve complete DPDP compliance before the mandatory 13 May 2027 enforcement deadline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {implementationRoadmap.map((item, idx) => (
              <div key={idx} className="p-7 rounded-3xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm relative backdrop-blur-sm hover:border-tertiary/40 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-tertiary">{item.duration}</span>
                  <span className="text-xs font-mono text-labelGray dark:text-gray-400 font-bold">Step 0{idx + 1}</span>
                </div>
                <h3 className="text-base font-bold text-secondary dark:text-white mb-2 font-outfit">
                  {item.phase}
                </h3>
                <p className="text-xs text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans">
                  {item.milestone}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Cross-Linked Resources & Official Sources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-base font-bold text-secondary dark:text-white mb-4 flex items-center gap-2 font-outfit">
                <FileText className="w-4 h-4 text-tertiary" />
                Related DPDP Compliance Modules
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dpdpResources.map((res, idx) => (
                  <Link
                    key={idx}
                    href={res.href}
                    className="p-5 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-tertiary transition-all group block shadow-sm hover:shadow-md hover:-translate-y-0.5 backdrop-blur-sm"
                  >
                    <h4 className="text-xs font-bold text-secondary dark:text-white group-hover:text-tertiary flex items-center justify-between font-outfit">
                      <span>{res.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-tertiary" />
                    </h4>
                    <p className="text-xs text-labelGray dark:text-gray-400 mt-1.5 leading-snug font-nunitoSans">
                      {res.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold text-secondary dark:text-white mb-4 flex items-center gap-2 font-outfit">
                <ExternalLink className="w-4 h-4 text-tertiary" />
                Official Statutory Sources
              </h3>
              <div className="space-y-3 font-outfit">
                {officialSources.map((src, idx) => (
                  <a
                    key={idx}
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-tertiary text-xs font-semibold text-secondary dark:text-gray-300 transition-all group shadow-sm backdrop-blur-sm"
                  >
                    <span>{src.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-tertiary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: FAQs Accordion (Positioned Directly Above Footer) */}
      <section id="faqs" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 text-tertiary text-xs font-semibold uppercase tracking-wider font-outfit mb-3">
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary dark:text-white tracking-tight font-outfit">
              Frequently Asked Questions for Fintech Teams
            </h2>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm overflow-hidden transition-all shadow-sm hover:border-tertiary/30"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-secondary dark:text-white text-sm sm:text-base hover:text-tertiary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-tertiary font-outfit"
                  aria-expanded={openFaqIndex === idx}
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                    openFaqIndex === idx ? "rotate-180 text-tertiary" : ""
                  }`} />
                </button>
                <AnimatePresence>
                  {openFaqIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-labelGray dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-white/10 font-nunitoSans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book A Meeting CTA */}
      <BookMeetCta />

      {/* Global Footer */}
      <Footer />

      {/* Modals */}
      <FintechDemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
      <FintechChecklistModal isOpen={checklistModalOpen} onClose={() => setChecklistModalOpen(false)} />
    </div>
  );
}

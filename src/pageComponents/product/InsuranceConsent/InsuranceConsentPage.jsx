"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
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
  EyeOff,
  Database,
  RefreshCw,
  Sliders,
  Car
} from "lucide-react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/footer";
import BookMeetCta from "../../../components/common/bookMeetCta";
import DPDPLiveCountdownTimer from "../../../components/common/DPDPLiveCountdownTimer";
import InteractiveInsuranceConsentSimulator from "./InteractiveInsuranceConsentSimulator";
import { InsuranceDemoModal, InsuranceChecklistModal } from "./InsuranceModals";
import { 
  insuranceConsentSchema, 
  metaData, 
  partnerLogos, 
  policyLifecycleMatrix,
  enterpriseModules,
  implementationRoadmap,
  faqsData,
  dpdpResources,
  officialSources
} from "./data";

export default function InsuranceConsentPage() {
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(insuranceConsentSchema) }}
        />
      </Head>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] pt-28 pb-20 overflow-hidden flex items-center bg-grid dark:bg-secondary border-b border-gray-200 dark:border-white/10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-radial from-tertiary/15 via-transparent to-transparent blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Trust Badges Bar */}
          <div className="flex flex-col gap-3 mb-6">
            <div className="w-full max-w-2xl">
              <DPDPLiveCountdownTimer 
                label="Core DPDP Enforcement: 13 May 2027" 
                sublabel="IRDAI & DPDP Compliance Deadline for Insurers" 
              />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-tertiary/10 text-tertiary border border-tertiary/20 flex items-center gap-1.5 font-outfit">
                <ShieldCheck className="w-3.5 h-3.5" />
                DPDP Act 2023 & IRDAI Cyber Security Harmonized
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 font-outfit">
                Life · Health · Motor · General · TPAs
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] tracking-tight text-secondary dark:text-white font-outfit">
                Consent Management for <span className="text-tertiary">Insurance Companies</span>
              </h1>
              
              <p className="mt-4 text-base sm:text-lg text-labelGray dark:text-gray-300 leading-relaxed max-w-3xl font-nunitoSans">
                SecureCMS records and enforces policyholder consent from proposal to claim, across agents, bancassurance partners, digital channels and TPAs. Built strictly for the DPDP Act 2023 and DPDP Rules 2025.
              </p>

              {/* Quick Answer Callout Strip */}
              <div className="mt-6 p-5 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-xl shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-tertiary/10 text-tertiary flex-shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-tertiary font-bold">
                      Regulatory Quick-Answer: Blanket Proposal Declarations Are Void
                    </h4>
                    <p className="text-xs sm:text-sm text-secondary/80 dark:text-gray-300 mt-1 font-nunitoSans leading-relaxed">
                      <strong>Traditional "I agree to all terms" blanket checkboxes are legally invalid under Section 6.</strong> Insurers must unbundle underwriting declarations from commercial cross-sell, motor telematics, and third-party data sharing with TPAs.
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
                  <span>Book an Insurance Demo</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </button>
                <button
                  onClick={() => setChecklistModalOpen(true)}
                  className="px-8 py-4 bg-secondary/5 dark:bg-white/5 border border-secondary/20 dark:border-white/10 text-secondary dark:text-white font-semibold font-outfit rounded-xl hover:border-tertiary transition-all flex items-center justify-center gap-2 backdrop-blur-sm text-base shadow-sm"
                >
                  <Download className="w-5 h-5 text-tertiary" />
                  <span>Download Insurer Checklist</span>
                </button>
              </div>
            </div>

            {/* Quick Metrics / Trust Column */}
            <div className="lg:col-span-4 bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-2xl rounded-3xl p-6 sm:p-7 shadow-xl">
              <h3 className="text-xs font-mono uppercase tracking-wider text-tertiary font-bold mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Insurance Compliance Architecture
              </h3>
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10">
                  <div className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans">Point-of-Sale Burden of Proof</div>
                  <div className="text-sm font-bold text-secondary dark:text-white mt-0.5 font-outfit">Section 6(10) OTP Proof</div>
                  <div className="text-[11px] text-tertiary mt-1 font-mono">Direct Policyholder Verification</div>
                </div>
                <div className="p-3.5 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10">
                  <div className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans">TPA Claims Limiting</div>
                  <div className="text-sm font-bold text-secondary dark:text-white mt-0.5 font-outfit">Field-Level Medical Masking</div>
                  <div className="text-[11px] text-tertiary mt-1 font-mono">Section 8(2) Processor Bound</div>
                </div>
                <div className="p-3.5 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10">
                  <div className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans">Continuous Telematics</div>
                  <div className="text-sm font-bold text-secondary dark:text-white mt-0.5 font-outfit">Sub-100ms Revocation Sync</div>
                  <div className="text-[11px] text-tertiary mt-1 font-mono">Instant IoT Stream Termination</div>
                </div>
              </div>

              {/* Partner Badges */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-white/10">
                <div className="text-[10px] uppercase tracking-wider text-labelGray dark:text-gray-400 mb-2 font-mono">
                  Incubated & Evaluated By
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] font-medium text-gray-600 dark:text-gray-400">
                  {partnerLogos.map((p, idx) => (
                    <div key={idx} className="p-2 rounded-xl bg-gray-100/80 dark:bg-white/5 border border-gray-200/50 dark:border-white/5 text-center font-medium">
                      {p.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Policy Lifecycle Consent Map */}
      <section id="unbundled-proposal" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-tertiary">Policyholder Lifecycle</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white mt-1">
              Consent Mapping Across the Insurance Lifecycle
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-nunitoSans">
              From proposal submission to claim settlement and policy lapse, here is how statutory data rights are enforced.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm backdrop-blur-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-100/80 dark:bg-white/[0.03] text-gray-700 dark:text-gray-300 font-bold uppercase tracking-wider text-[11px] border-b border-gray-200 dark:border-white/10">
                <tr>
                  <th className="py-4 px-4 sm:px-6">Policy Stage</th>
                  <th className="py-4 px-4 sm:px-6">Activity & Touchpoint</th>
                  <th className="py-4 px-4 sm:px-6">DPDP Legal Basis</th>
                  <th className="py-4 px-4 sm:px-6">Consent Rule</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-white/10 bg-white/80 dark:bg-white/[0.02]">
                {policyLifecycleMatrix.map((stage, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/80 dark:hover:bg-white/[0.04] transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-gray-900 dark:text-white">
                      {stage.stage}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-gray-600 dark:text-gray-300 text-xs">
                      {stage.activity}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-tertiary font-mono text-xs">
                      {stage.legalBasis}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-gray-600 dark:text-gray-300 text-xs">
                      {stage.consentRule}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 2: Interactive Simulator */}
      <section id="simulator" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-white/[0.02] border-t border-gray-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-tertiary">Real-Time Sandbox</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white mt-1">
              Simulate Proposal POS, TPA Limiting & Telematics Opt-Outs
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-nunitoSans">
              Toggle unbundled proposal options, observe TPA cashless claim field-redaction, and test real-time IoT motor telematics stream revocation.
            </p>
          </div>

          <InteractiveInsuranceConsentSimulator />
        </div>
      </section>

      {/* Section 3: Enterprise Modules Suite */}
      <section id="enterprise-modules" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-tertiary">Platform Architecture</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white mt-1">
              Enterprise Insurance Consent Modules
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-nunitoSans">
              Modular components built specifically for life insurers, general underwriters, health SAHIs, and InsurTech platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enterpriseModules.map((module, idx) => (
              <div key={idx} className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-tertiary/30 backdrop-blur-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-tertiary/10 text-tertiary border border-tertiary/20">
                      {module.badge}
                    </span>
                    <Layers className="w-4 h-4 text-gray-400" />
                  </div>
                  <h3 className="text-base font-bold text-secondary dark:text-white mb-2">
                    {module.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-nunitoSans">
                    {module.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Distribution Governance & Section 6(10) Burden of Proof */}
      <section id="burden-of-proof" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-white/[0.02] border-t border-gray-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-tertiary">Distribution Channel Governance</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white">
                Section 6(10) Burden of Proof Across Agents & Bancassurance
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-nunitoSans">
                Under the DPDP Act, the insurer bears the absolute legal burden to prove that consent was lawfully obtained—even when collected offsite by an independent insurance agent, broker, or bancassurance branch manager.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tertiary flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    <strong>Direct Policyholder Mobile OTP:</strong> Proposal forms triggered on agent tablets require direct OTP confirmation from the policyholder's own mobile number.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tertiary flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    <strong>Cryptographic Evidentiary Hashes:</strong> Every consent transaction is hashed using SHA-256 and signed with asymmetric key pairs to produce court-admissible audit receipts.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tertiary flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    <strong>TPA Claims Minimization:</strong> Automatic redaction ensures TPAs only receive medical claims invoices and ICD codes, masking unrelated financial or family notes.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-sm">
              <h3 className="text-sm font-mono uppercase tracking-wider text-tertiary mb-4">
                Core Policy Admin & Claims Integrations
              </h3>
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10">
                  <div className="text-xs font-bold text-secondary dark:text-white">Guidewire PolicyCenter & ClaimCenter</div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 font-nunitoSans">
                    Pre-built connectors to sync consent flags directly into policyholder master records and claims workflows.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10">
                  <div className="text-xs font-bold text-secondary dark:text-white">Duck Creek Technologies Connector</div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 font-nunitoSans">
                    Bi-directional REST API integration for real-time unbundled consent validation at quotation and binding.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10">
                  <div className="text-xs font-bold text-secondary dark:text-white">IRDAI & PMLA Statutory Legal-Hold Vault</div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 font-nunitoSans">
                    Maintains mandatory 5-year retention holds on settled claims, KYC files, and premium ledgers upon policy lapse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Implementation Roadmap */}
      <section id="roadmap" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-tertiary">Statutory Timeline</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white mt-1">
              6-Phase Insurance Implementation Roadmap
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-nunitoSans">
              Structured deployment path to achieve complete compliance before the mandatory 13 May 2027 statutory deadline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {implementationRoadmap.map((item, idx) => (
              <div key={idx} className="p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-tertiary/30 backdrop-blur-xl transition-all relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-tertiary">{item.duration}</span>
                  <span className="text-[10px] font-mono text-gray-400">Step 0{idx + 1}</span>
                </div>
                <h3 className="text-sm font-bold text-secondary dark:text-white mb-2">
                  {item.phase}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 font-nunitoSans leading-relaxed">
                  {item.milestone}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Cross-Linked Resources & Official Sources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-white/[0.02] border-t border-gray-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-base font-bold text-secondary dark:text-white mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-tertiary" />
                Related DPDP Compliance Modules
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dpdpResources.map((res, idx) => (
                  <Link
                    key={idx}
                    href={res.href}
                    className="p-4 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-tertiary/50 transition-all group block shadow-sm hover:shadow-md hover:-translate-y-0.5 backdrop-blur-xl"
                  >
                    <h4 className="text-xs font-bold text-secondary dark:text-white group-hover:text-tertiary flex items-center justify-between">
                      <span>{res.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-tertiary" />
                    </h4>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 leading-snug font-nunitoSans">
                      {res.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold text-secondary dark:text-white mb-4 flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-tertiary" />
                Official Statutory Sources
              </h3>
              <div className="space-y-2.5">
                {officialSources.map((src, idx) => (
                  <a
                    key={idx}
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-tertiary/50 text-xs text-gray-700 dark:text-gray-300 transition-all group backdrop-blur-xl"
                  >
                    <span className="font-medium">{src.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-tertiary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: FAQs Accordion (Positioned Directly Above Footer) */}
      <section id="faqs" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80 dark:border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-tertiary">Legal & Operational Clarity</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white mt-1">
              Frequently Asked Questions for Insurance Leadership
            </h2>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 overflow-hidden transition-all shadow-sm hover:border-tertiary/40 backdrop-blur-xl"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-secondary dark:text-white text-sm sm:text-base hover:text-tertiary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-tertiary"
                  aria-expanded={openFaqIndex === idx}
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                    openFaqIndex === idx ? "rotate-180 text-tertiary" : ""
                  }`} />
                </button>
                <AnimatePresence initial={false}>
                  {openFaqIndex === idx && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-white/10 font-nunitoSans">
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
      <InsuranceDemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
      <InsuranceChecklistModal isOpen={checklistModalOpen} onClose={() => setChecklistModalOpen(false)} />
    </div>
  );
}

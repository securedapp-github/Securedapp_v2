"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { 
  Landmark, 
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
  AlertCircle
} from "lucide-react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/footer";
import BookMeetCta from "../../../components/common/bookMeetCta";
import DPDPLiveCountdownTimer from "../../../components/common/DPDPLiveCountdownTimer";
import InteractiveNBFCConsentSimulator from "./InteractiveNBFCConsentSimulator";
import { NBFCDemoModal, NBFCChecklistModal } from "./NBFCConsentModals";
import { 
  nbfcConsentSchema, 
  metaData, 
  partnerLogos, 
  dualRulebookData,
  legalBasisMatrix,
  enterpriseModules,
  implementationRoadmap,
  faqsData,
  dpdpResources,
  officialSources
} from "./data";

export default function NBFCConsentPage() {
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(nbfcConsentSchema) }}
        />
      </Head>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] pt-28 pb-20 overflow-hidden flex items-center bg-grid dark:bg-secondary border-b border-gray-200 dark:border-white/10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-radial from-tertiary/15 via-transparent to-transparent blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Trust Badges Bar */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-tertiary/10 text-tertiary border border-tertiary/20 flex items-center gap-1.5 font-outfit">
              <ShieldCheck className="w-3.5 h-3.5" />
              RBI Digital Lending 2025 & DPDP Act Harmonized
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 font-outfit">
              Zero Phone Scraping · Co-Lending · DSAs · LMS Connectors
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8 flex flex-col gap-6">
              {/* Live DPDP 13 May 2027 Countdown Timer */}
              <DPDPLiveCountdownTimer label="Core DPDP obligations for NBFCs & digital lenders apply from 13 May 2027" />

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] tracking-tight text-secondary dark:text-white font-outfit">
                Consent Management Platform for <span className="text-tertiary">NBFCs in India</span>
              </h1>
              
              <p className="text-base sm:text-lg text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans max-w-2xl">
                <strong>SecureCMS</strong> records and enforces borrower consent across loan apps, lending partners, DSAs, branches and collections. Built strictly for the <strong>DPDP Act 2023</strong>, <strong>DPDP Rules 2025</strong>, and RBI's updated Digital Lending Directions.
              </p>

              {/* Quick Answer Callout Strip */}
              <div className="p-4 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-tertiary/10 text-tertiary flex-shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-tertiary font-bold">
                      Regulatory Quick-Answer: Do NBFCs Need Consent for KYC & Bureaus?
                    </h4>
                    <p className="text-xs sm:text-sm text-secondary/80 dark:text-gray-300 mt-1 font-nunitoSans">
                      <strong>KYC and regulatory reporting to credit bureaus operate under Section 7 Legitimate Use (compliance with Indian law).</strong> However, pulling credit scores during underwriting, cross-selling credit life insurance, or sharing data with co-lenders legally mandates unbundled OTP-verified borrower consent.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={() => setDemoModalOpen(true)}
                  className="px-8 py-4 bg-tertiary hover:opacity-95 text-secondary font-bold font-outfit rounded-xl shadow-[0_0_20px_rgba(18,213,118,0.35)] transition-all flex items-center justify-center gap-2 text-base"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book an NBFC Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setChecklistModalOpen(true)}
                  className="px-8 py-4 bg-secondary/5 dark:bg-white/5 border border-secondary/20 dark:border-white/10 text-secondary dark:text-white font-semibold font-outfit rounded-xl hover:border-tertiary transition-all flex items-center justify-center gap-2 backdrop-blur-sm text-base shadow-sm"
                >
                  <Download className="w-4 h-4 text-tertiary" />
                  <span>Download NBFC Checklist</span>
                </button>
              </div>
            </div>

            {/* Quick Metrics / Trust Column */}
            <div className="lg:col-span-4 bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-2xl rounded-3xl p-6 sm:p-7 shadow-xl">
              <h3 className="text-xs font-mono uppercase tracking-wider text-labelGray dark:text-gray-400 mb-4">
                Lending Compliance Architecture
              </h3>
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                  <div className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans">Mobile Onboarding Policy</div>
                  <div className="text-sm font-bold text-secondary dark:text-white mt-0.5 font-outfit">Zero Phone Scraping</div>
                  <div className="text-[11px] text-tertiary mt-1 font-mono">Contacts & SMS Blocked by Default</div>
                </div>
                <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                  <div className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans">DSA & LSP Webhook Sync</div>
                  <div className="text-sm font-bold text-secondary dark:text-white mt-0.5 font-outfit">&lt; 120ms Real-Time Push</div>
                  <div className="text-[11px] text-tertiary mt-1 font-mono">Sub-second Opt-Out Suppression</div>
                </div>
                <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                  <div className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans">Closed Loan Protection</div>
                  <div className="text-sm font-bold text-secondary dark:text-white mt-0.5 font-outfit">Automated 5-Year Legal Hold</div>
                  <div className="text-[11px] text-tertiary mt-1 font-mono">PMLA Section 12 Compliant</div>
                </div>
              </div>

              {/* Partner Badges */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-white/10">
                <div className="text-[10px] uppercase tracking-wider text-labelGray dark:text-gray-400 mb-2 font-mono">
                  Incubated & Evaluated By
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] font-medium text-secondary/80 dark:text-gray-300 font-poppins">
                  {partnerLogos.map((p, idx) => (
                    <div key={idx} className="p-1.5 rounded bg-gray-100 dark:bg-white/5 text-center">
                      {p.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Dual Rulebook Comparison */}
      <section id="dual-rulebook" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-tertiary">Dual Regulatory Rulebook</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white mt-1 font-outfit">
              Harmonizing the DPDP Act 2023 & RBI Digital Lending Directions 2025
            </h2>
            <p className="text-sm text-labelGray dark:text-gray-300 mt-2 font-nunitoSans">
              Lenders cannot simply rely on a generic privacy policy checkbox. Both DPDP and RBI rules mandate strict operational controls.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-white/10 shadow-md">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-100/80 dark:bg-white/10 text-secondary dark:text-gray-300 font-bold uppercase tracking-wider text-[11px] border-b border-gray-200 dark:border-white/10 font-outfit">
                <tr>
                  <th className="py-4 px-4 sm:px-6">Compliance Dimension</th>
                  <th className="py-4 px-4 sm:px-6">DPDP Act 2023 Mandate</th>
                  <th className="py-4 px-4 sm:px-6">RBI Digital Lending Directions</th>
                  <th className="py-4 px-4 sm:px-6">SecureCMS Technical Guardrail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-white/10 bg-white/80 dark:bg-white/5 font-nunitoSans">
                {dualRulebookData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-secondary dark:text-white font-outfit">
                      {row.parameter}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-labelGray dark:text-gray-300 text-xs">
                      {row.dpdpAct}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-labelGray dark:text-gray-300 text-xs">
                      {row.rbiDigitalLending}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-tertiary font-mono text-xs font-semibold">
                      {row.secureCmsSolution}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 2: Borrower Consent Legal Basis Matrix */}
      <section id="legal-basis-matrix" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-white/[0.02] border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-tertiary">Statutory Classification</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white mt-1 font-outfit">
              What Needs Borrower Consent vs Statutory/Contractual Duty
            </h2>
            <p className="text-sm text-labelGray dark:text-gray-300 mt-2 font-nunitoSans">
              Ensure your loan origination workflows never confuse statutory obligations with commercial marketing.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-white/10 shadow-md">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-100/80 dark:bg-white/10 text-secondary dark:text-gray-300 font-bold uppercase tracking-wider text-[11px] border-b border-gray-200 dark:border-white/10 font-outfit">
                <tr>
                  <th className="py-4 px-4 sm:px-6">Lending Touchpoint</th>
                  <th className="py-4 px-4 sm:px-6">Legal Basis</th>
                  <th className="py-4 px-4 sm:px-6">Consent Requirement</th>
                  <th className="py-4 px-4 sm:px-6">Data Lifecycle Rule</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-white/10 bg-white/80 dark:bg-white/5 font-nunitoSans">
                {legalBasisMatrix.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-secondary dark:text-white font-outfit">
                      {item.activity}
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-mono text-tertiary text-xs">
                      {item.legalBasis}
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                        item.consentRule.includes("Statutory") || item.consentRule.includes("Permitted")
                          ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                          : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                      }`}>
                        {item.consentRule}
                      </span>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-labelGray dark:text-gray-300 text-xs">
                      {item.impact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 3: Interactive Simulator */}
      <section id="simulator" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-tertiary">Live Lending Simulator</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white mt-1 font-outfit">
              Simulate NBFC Consent & Recovery Data Flows
            </h2>
            <p className="text-sm text-labelGray dark:text-gray-300 mt-2 font-nunitoSans">
              Toggle zero-scraping app permissions, watch recovery agent views dynamically redact family contacts, and trigger closed-loan erasure audits.
            </p>
          </div>

          <InteractiveNBFCConsentSimulator />
        </div>
      </section>

      {/* Section 4: Enterprise Modules Suite */}
      <section id="enterprise-modules" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-white/[0.02] border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-tertiary">Platform Architecture</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white mt-1 font-outfit">
              Enterprise NBFC Consent Modules
            </h2>
            <p className="text-sm text-labelGray dark:text-gray-300 mt-2 font-nunitoSans">
              Purpose-built modules engineered specifically for retail NBFCs, microfinance, digital lenders, and housing finance companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enterpriseModules.map((module, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between backdrop-blur-sm">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-tertiary/10 text-tertiary border border-tertiary/20">
                      {module.badge}
                    </span>
                    <Layers className="w-4 h-4 text-gray-400" />
                  </div>
                  <h3 className="text-base font-bold text-secondary dark:text-white mb-2 font-outfit">
                    {module.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans">
                    {module.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Recovery Agency Governance & Zero Scraping */}
      <section id="collections-governance" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-tertiary">Collections Governance</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white font-outfit">
                Recovery Agency Data Limiting & RBI Ombudsman Defense
              </h2>
              <p className="text-sm text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans">
                Harassing borrower family members or scraping emergency contacts is the single fastest trigger for RBI supervisory action and heavy penalties under the DPDP Act.
              </p>
              <div className="space-y-3 pt-2 font-nunitoSans">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tertiary flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-secondary/90 dark:text-gray-300">
                    <strong>Strict Field-Level Redaction:</strong> External recovery agents only see the borrower's registered contact number, outstanding principal, and payment schedule. Family and employer contacts are cryptographically masked.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tertiary flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-secondary/90 dark:text-gray-300">
                    <strong>Immutable Access Audit Trails:</strong> Every collection agent lookup is logged with employee ID, timestamp, and purpose hash to prove statutory compliance during RBI audits.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tertiary flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-secondary/90 dark:text-gray-300">
                    <strong>Automated Revocation Dispatch:</strong> When an overdue loan is settled and No Due Certificate (NDC) is generated, collection agency access is terminated in under 60 seconds.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-2xl">
              <h3 className="text-sm font-mono uppercase tracking-wider text-tertiary mb-4">
                Lending Technology Stack Integrations
              </h3>
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                  <div className="text-xs font-bold text-secondary dark:text-white font-outfit">LOS Integration (Loan Origination)</div>
                  <p className="text-xs text-labelGray dark:text-gray-300 mt-1 font-nunitoSans">
                    Connectors for Nucleus FinnOne Neo, Pennant, Lentra, and custom digital origination engines.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                  <div className="text-xs font-bold text-secondary dark:text-white font-outfit">LMS Integration (Loan Management)</div>
                  <p className="text-xs text-labelGray dark:text-gray-300 mt-1 font-nunitoSans">
                    Bi-directional sync with loan ledgers to automatically trigger 5-year PMLA legal holds on loan closure.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                  <div className="text-xs font-bold text-secondary dark:text-white font-outfit">Credit Bureau Connectors</div>
                  <p className="text-xs text-labelGray dark:text-gray-300 mt-1 font-nunitoSans">
                    Pre-integrated consent gates for CIBIL, Experian, Equifax, and CRIF High Mark credit pulls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Implementation Roadmap */}
      <section id="roadmap" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-white/[0.02] border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-tertiary">Statutory Timeline</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white mt-1 font-outfit">
              6-Phase NBFC Implementation Roadmap
            </h2>
            <p className="text-sm text-labelGray dark:text-gray-300 mt-2 font-nunitoSans">
              Structured deployment path to achieve complete compliance before the mandatory 13 May 2027 enforcement deadline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {implementationRoadmap.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm relative backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-tertiary">{item.duration}</span>
                  <span className="text-[10px] font-mono text-labelGray dark:text-gray-400">Phase 0{idx + 1}</span>
                </div>
                <h3 className="text-sm font-bold text-secondary dark:text-white mb-2 font-outfit">
                  {item.phase}
                </h3>
                <p className="text-xs text-labelGray dark:text-gray-300 font-nunitoSans">
                  {item.milestone}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Cross-Linked Resources & Official Sources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-white/10">
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
                    className="p-4 rounded-xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-tertiary transition-all group block shadow-sm hover:shadow-md hover:-translate-y-0.5"
                  >
                    <h4 className="text-xs font-bold text-secondary dark:text-white group-hover:text-tertiary flex items-center justify-between font-outfit">
                      <span>{res.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-tertiary" />
                    </h4>
                    <p className="text-[11px] text-labelGray dark:text-gray-400 mt-1 leading-snug font-nunitoSans">
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
              <div className="space-y-2.5">
                {officialSources.map((src, idx) => (
                  <a
                    key={idx}
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-tertiary text-xs text-secondary/90 dark:text-gray-300 transition-all group font-nunitoSans"
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
      <section id="faqs" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-tertiary">Legal & Operational Clarity</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white mt-1 font-outfit">
              Frequently Asked Questions for NBFC Leadership
            </h2>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 overflow-hidden transition-all shadow-sm hover:border-tertiary/30 backdrop-blur-sm"
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
                {openFaqIndex === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-labelGray dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-white/5 font-nunitoSans">
                    {faq.answer}
                  </div>
                )}
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
      <NBFCDemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
      <NBFCChecklistModal isOpen={checklistModalOpen} onClose={() => setChecklistModalOpen(false)} />
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, 
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
  Briefcase
} from "lucide-react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/footer";
import BookMeetCta from "../../../components/common/bookMeetCta";
import DPDPLiveCountdownTimer from "../../../components/common/DPDPLiveCountdownTimer";
import InteractiveHRConsentSimulator from "./InteractiveHRConsentSimulator";
import { HRDemoModal, HRChecklistModal } from "./HRModals";
import { 
  hrConsentSchema, 
  metaData, 
  partnerLogos, 
  jumpNavLinks,
  hireToExitLifecycle,
  enterpriseModules,
  implementationRoadmap,
  faqsData,
  dpdpResources,
  officialSources
} from "./data";

export default function HRConsentPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [checklistModalOpen, setChecklistModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [simulatorTab, setSimulatorTab] = useState("lawful-register");

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToSection = (e, targetId) => {
    if (e && e.preventDefault) e.preventDefault();
    const id = targetId.replace("#", "");
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hrConsentSchema) }}
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
            <DPDPLiveCountdownTimer label="HR DPDP Obligations Apply: 13 May 2027" />
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-tertiary/10 text-tertiary border border-tertiary/20 flex items-center gap-1.5 font-outfit">
              <ShieldCheck className="w-3.5 h-3.5" />
              DPDP Act Section 7(i) & Labor Law Harmonized
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 font-outfit">
              Talent Pools · Employee Preference Centers · DLP Notices
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] tracking-tight text-secondary dark:text-white font-outfit">
                Employee Consent Management Under the <span className="text-tertiary">DPDP Act</span>
              </h1>
              
              <p className="mt-4 text-base sm:text-lg text-labelGray dark:text-gray-300 leading-relaxed max-w-3xl font-nunitoSans">
                SecureCMS gives HR teams employee consent management built around the DPDP Act 2023 and DPDP Rules 2025. Separate what employment legitimate use covers from what needs explicit consent. Manage candidate talent pools, dependants, and optional programmes with audit-ready proof.
              </p>

              {/* Quick Answer Callout Strip */}
              <div className="mt-6 p-5 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-xl shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-tertiary/10 text-tertiary flex-shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-tertiary font-bold">
                      Regulatory Quick-Answer: Does HR Need Consent for Employees?
                    </h4>
                    <p className="text-xs sm:text-sm text-secondary/80 dark:text-gray-300 mt-1 font-nunitoSans leading-relaxed">
                      <strong>Most standard employment processing does NOT need consent.</strong> Under Section 7(i), employers can process employee data for payroll, attendance, benefits, and loss-prevention monitoring without consent. Consent is strictly needed for non-employment purposes: keeping rejected candidate CVs, marketing photos, optional wellness apps, and alumni networks.
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
                  <span>Book an HR Demo</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </button>
                <button
                  onClick={() => setChecklistModalOpen(true)}
                  className="px-8 py-4 bg-secondary/5 dark:bg-white/5 border border-secondary/20 dark:border-white/10 text-secondary dark:text-white font-semibold font-outfit rounded-xl hover:border-tertiary transition-all flex items-center justify-center gap-2 backdrop-blur-sm text-base shadow-sm"
                >
                  <Download className="w-5 h-5 text-tertiary" />
                  <span>Download HR DPDP Checklist</span>
                </button>
              </div>
            </div>

            {/* Quick Metrics / Trust Column */}
            <div className="lg:col-span-4 bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-2xl rounded-3xl p-6 sm:p-7 shadow-xl">
              <h3 className="text-xs font-mono uppercase tracking-wider text-tertiary font-bold mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Workforce Privacy Standards
              </h3>
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={(e) => {
                    setSimulatorTab("lawful-register");
                    scrollToSection(e, "simulator");
                  }}
                  className="w-full text-left p-3.5 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] hover:bg-tertiary/10 dark:hover:bg-tertiary/10 border border-gray-200 dark:border-white/10 hover:border-tertiary/60 dark:hover:border-tertiary/60 transition-all cursor-pointer group shadow-sm"
                  title="Jump to Section 7(i) Engine in simulator"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans group-hover:text-tertiary transition-colors">Section 7(i) Engine</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-tertiary group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <div className="text-sm font-bold text-secondary dark:text-white mt-0.5 font-outfit group-hover:text-tertiary transition-colors">Automated Basis Separation</div>
                  <div className="text-[11px] text-tertiary mt-1 font-mono">Stops Ineffective Bundled Clauses</div>
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    setSimulatorTab("talent-pool");
                    scrollToSection(e, "simulator");
                  }}
                  className="w-full text-left p-3.5 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] hover:bg-tertiary/10 dark:hover:bg-tertiary/10 border border-gray-200 dark:border-white/10 hover:border-tertiary/60 dark:hover:border-tertiary/60 transition-all cursor-pointer group shadow-sm"
                  title="Jump to Candidate Talent Pools in simulator"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans group-hover:text-tertiary transition-colors">Candidate Talent Pools</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-tertiary group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <div className="text-sm font-bold text-secondary dark:text-white mt-0.5 font-outfit group-hover:text-tertiary transition-colors">Automated Expiry & Purge</div>
                  <div className="text-[11px] text-tertiary mt-1 font-mono">1-Click Candidate Revocation</div>
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    setSimulatorTab("exit-clearance");
                    scrollToSection(e, "simulator");
                  }}
                  className="w-full text-left p-3.5 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] hover:bg-tertiary/10 dark:hover:bg-tertiary/10 border border-gray-200 dark:border-white/10 hover:border-tertiary/60 dark:hover:border-tertiary/60 transition-all cursor-pointer group shadow-sm"
                  title="Jump to Exit Clearance Protection in simulator"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans group-hover:text-tertiary transition-colors">Exit Clearance Protection</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-tertiary group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <div className="text-sm font-bold text-secondary dark:text-white mt-0.5 font-outfit group-hover:text-tertiary transition-colors">Statutory 7-Year Holds</div>
                  <div className="text-[11px] text-tertiary mt-1 font-mono">EPF & Income Tax Compliant</div>
                </button>
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

      {/* Jump Navigation Bar */}
      <div className="sticky top-20 z-20 bg-primary/95 dark:bg-secondary/95 backdrop-blur-md border-b border-gray-200 dark:border-white/10 py-2.5 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-labelGray dark:text-gray-400 shrink-0">
            <span>Jump to:</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {jumpNavLinks.map((link, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => scrollToSection(e, link.id)}
                className="px-3.5 py-1.5 rounded-full text-xs font-bold font-outfit bg-gray-100 dark:bg-white/5 hover:bg-tertiary hover:text-secondary text-secondary dark:text-gray-300 border border-gray-200 dark:border-white/10 transition-all cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Section 1: Hire to Exit Lifecycle Table */}
      <section id="lifecycle-matrix" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-tertiary">Workforce Data Governance</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white mt-1">
              Hire to Exit: Legitimate Use vs Consent Across the Employee Lifecycle
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-nunitoSans">
              Every stage of the employee lifecycle requires exact lawful classification to avoid regulatory scrutiny under the DPDP Act.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm backdrop-blur-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-100/80 dark:bg-white/[0.03] text-gray-700 dark:text-gray-300 font-bold uppercase tracking-wider text-[11px] border-b border-gray-200 dark:border-white/10">
                <tr>
                  <th className="py-4 px-4 sm:px-6">HR Lifecycle Stage</th>
                  <th className="py-4 px-4 sm:px-6">Activity & Data Field</th>
                  <th className="py-4 px-4 sm:px-6">DPDP Legal Basis</th>
                  <th className="py-4 px-4 sm:px-6">Consent Requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-white/10 bg-white/80 dark:bg-white/[0.02]">
                {hireToExitLifecycle.map((stage, idx) => (
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
                    <td className="py-4 px-4 sm:px-6">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                        stage.consentNeeded.startsWith("No")
                          ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                          : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                      }`}>
                        {stage.consentNeeded}
                      </span>
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
            <span className="text-xs font-mono uppercase tracking-wider text-tertiary">Interactive Simulation</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white mt-1">
              DPDP Employee Consent Management & HR Lawful Basis Simulator
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-nunitoSans">
              Simulate Section 7(i) legitimate employment uses, candidate talent pool auto-expiry, employee privacy preferences, and statutory 7-year exit holds under the DPDP Act.
            </p>
          </div>

          <InteractiveHRConsentSimulator
            activeTab={simulatorTab}
            setActiveTab={setSimulatorTab}
          />
        </div>
      </section>

      {/* Section 3: Enterprise Modules Suite */}
      <section id="enterprise-modules" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-tertiary">Platform Architecture</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white mt-1">
              Enterprise HR Consent Modules
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-nunitoSans">
              Purpose-built capabilities engineered for enterprise human resources, corporate legal counsel, and Data Protection Officers.
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

      {/* Section 4: Device Monitoring & Exit Governance */}
      <section id="device-monitoring" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-white/[0.02] border-t border-gray-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-tertiary">IT & Asset Security</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white">
                Device Monitoring, DLP & Employer Liability Protection
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-nunitoSans">
                Section 7(i) expressly protects employers from loss or liability, allowing data loss prevention (DLP) tools, corporate email filtering, and USB monitoring without needing employee consent.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tertiary flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    <strong>Mandatory Written Policy Notice:</strong> To rely on Section 7(i) loss prevention, employers must issue explicit acceptable-use notices explaining monitoring scope and business necessity.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tertiary flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    <strong>Prohibition of Covert Surveillance:</strong> Covert keystroke loggers, webcam spying, or mic tapping are disproportionate and violate DPDP privacy principles.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tertiary flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    <strong>Background Verification (BGV) Guardrails:</strong> BGV vendors act as Data Processors under Section 8(2) contracts with strict confidentiality and zero-reuse terms.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-sm">
              <h3 className="text-sm font-mono uppercase tracking-wider text-tertiary mb-4">
                Enterprise HRMS & ATS Connectors
              </h3>
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10">
                  <div className="text-xs font-bold text-secondary dark:text-white">Darwinbox & Workday API Sync</div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 font-nunitoSans">
                    Synchronize employee status, department transfers, and benefit enrolments with sub-second preference updates.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10">
                  <div className="text-xs font-bold text-secondary dark:text-white">ATS Talent Pool Auto-Purge Connectors</div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 font-nunitoSans">
                    Integrate with Greenhouse, Lever, and Keka Hire to automatically delete rejected resumes when consent expires.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10">
                  <div className="text-xs font-bold text-secondary dark:text-white">Payroll & Tax Legal-Hold Vault</div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 font-nunitoSans">
                    Lock Form 16, PF remittance sheets, and salary ledgers for 7 years under Income Tax and EPF regulatory mandates.
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
              6-Phase HR Implementation Roadmap
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-nunitoSans">
              Structured path to align all workforce systems, ATS portals, and employee policies with the 13 May 2027 DPDP deadline.
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
            <span className="text-xs font-mono uppercase tracking-wider text-tertiary">Legal & Workforce Clarity</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white mt-1">
              Frequently Asked Questions for HR Leaders & Corporate DPOs
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
      <HRDemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
      <HRChecklistModal isOpen={checklistModalOpen} onClose={() => setChecklistModalOpen(false)} />
    </div>
  );
}

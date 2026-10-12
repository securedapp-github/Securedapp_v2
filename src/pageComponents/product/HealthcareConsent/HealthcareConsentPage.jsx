"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HeartPulse, 
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
  Hospital,
  Activity,
  Database,
  RefreshCw,
  Sliders,
  EyeOff
} from "lucide-react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/footer";
import BookMeetCta from "../../../components/common/bookMeetCta";
import DPDPLiveCountdownTimer from "../../../components/common/DPDPLiveCountdownTimer";
import InteractiveHealthcareConsentSimulator from "./InteractiveHealthcareConsentSimulator";
import { HealthcareDemoModal, HealthcareChecklistModal } from "./HealthcareModals";
import { 
  healthcareConsentSchema, 
  metaData, 
  partnerLogos, 
  hospitalTouchpoints,
  enterpriseModules,
  implementationRoadmap,
  faqsData,
  dpdpResources,
  officialSources
} from "./data";

export default function HealthcareConsentPage() {
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(healthcareConsentSchema) }}
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
            <DPDPLiveCountdownTimer label="Healthcare DPDP Obligations Apply: 13 May 2027" />
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-tertiary/10 text-tertiary border border-tertiary/20 flex items-center gap-1.5 font-outfit">
              <ShieldCheck className="w-3.5 h-3.5" />
              DPDP Act 2023 & NMC Ethics Harmonized
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 font-outfit">
              OPD · IPD · Labs · Telemedicine · TPAs
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] tracking-tight text-secondary dark:text-white font-outfit">
                Patient Consent Management System for <span className="text-tertiary">Hospitals in India</span>
              </h1>
              
              <p className="mt-4 text-base sm:text-lg text-labelGray dark:text-gray-300 leading-relaxed max-w-3xl font-nunitoSans">
                SecureCMS records what each patient has agreed to for the use and sharing of their health data across registration desks, HIS/EMR, labs, telemedicine, insurers and research. Built strictly for the DPDP Act 2023 and DPDP Rules 2025.
              </p>

              {/* Quick Answer Callout Strip */}
              <div className="mt-6 p-5 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-xl shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-tertiary/10 text-tertiary flex-shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-tertiary font-bold">
                      Regulatory Quick-Answer: Do Hospitals Need Consent for Emergency Treatment?
                    </h4>
                    <p className="text-xs sm:text-sm text-secondary/80 dark:text-gray-300 mt-1 font-nunitoSans leading-relaxed">
                      <strong>No prior consent is required during life-threatening medical emergencies or epidemics.</strong> Under DPDP Section 7(f), doctors can process health data immediately to save lives. SecureCMS logs the clinical reason and clinician ID automatically for statutory audit readiness.
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
                  <span>Book a Hospital Demo</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </button>
                <button
                  onClick={() => setChecklistModalOpen(true)}
                  className="px-8 py-4 bg-secondary/5 dark:bg-white/5 border border-secondary/20 dark:border-white/10 text-secondary dark:text-white font-semibold font-outfit rounded-xl hover:border-tertiary transition-all flex items-center justify-center gap-2 backdrop-blur-sm text-base shadow-sm"
                >
                  <Download className="w-5 h-5 text-tertiary" />
                  <span>Download Patient Consent Checklist</span>
                </button>
              </div>
            </div>

            {/* Quick Metrics / Trust Column */}
            <div className="lg:col-span-4 bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-2xl rounded-3xl p-6 sm:p-7 shadow-xl">
              <h3 className="text-xs font-mono uppercase tracking-wider text-tertiary font-bold mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Hospital Compliance Architecture
              </h3>
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10">
                  <div className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans">Emergency Safe-Harbor</div>
                  <div className="text-sm font-bold text-secondary dark:text-white mt-0.5 font-outfit">Section 7(f) ER Override</div>
                  <div className="text-[11px] text-tertiary mt-1 font-mono">Zero Treatment Delay for Trauma</div>
                </div>
                <div className="p-3.5 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10">
                  <div className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans">TPA Claims Data Shield</div>
                  <div className="text-sm font-bold text-secondary dark:text-white mt-0.5 font-outfit">Field-Level Clinical Masking</div>
                  <div className="text-[11px] text-tertiary mt-1 font-mono">Protects Sensitive Unrelated Notes</div>
                </div>
                <div className="p-3.5 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10">
                  <div className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans">Medical Records Retention</div>
                  <div className="text-sm font-bold text-secondary dark:text-white mt-0.5 font-outfit">NMC 5-Year Legal Holds</div>
                  <div className="text-[11px] text-tertiary mt-1 font-mono">Prevents Premature Erasure</div>
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

      {/* Section 1: Clinical vs Data Consent Demarcation */}
      <section id="clinical-vs-data-consent" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-tertiary">Statutory Demarcation</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white mt-1">
              Clinical Informed Consent vs DPDP Patient Data Consent
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-nunitoSans">
              Healthcare institutions must maintain two separate, non-conflicting consent mechanisms that sit side by side.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-secondary dark:text-white flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-400" />
                  Clinical Informed Consent
                </h3>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Medical Procedure
                </span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-nunitoSans">
                <li>• <strong>Governing Authority:</strong> National Medical Commission (NMC) & State Clinical Establishment Acts.</li>
                <li>• <strong>Scope:</strong> Consent to undergo surgery, anaesthesia, chemotherapy, or medical intervention.</li>
                <li>• <strong>Executed By:</strong> Treating clinician, surgeon, or medical officer at the bedside.</li>
                <li>• <strong>Format:</strong> Written clinical informed consent forms retained in physical or scanned medical charts.</li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-white/5 border border-emerald-500/30 shadow-sm backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-secondary dark:text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-tertiary" />
                  DPDP Patient Data Consent (SecureCMS)
                </h3>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-tertiary/10 text-tertiary border border-tertiary/20">
                  Digital Data Governance
                </span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-nunitoSans">
                <li>• <strong>Governing Authority:</strong> Digital Personal Data Protection Act 2023 & DPDP Rules 2025.</li>
                <li>• <strong>Scope:</strong> Sharing records with insurance TPAs, research studies, external labs, and WhatsApp reminders.</li>
                <li>• <strong>Executed By:</strong> Patient, family, or lawful guardian via digital kiosks, SMS OTP, or registration desks.</li>
                <li>• <strong>Format:</strong> Multilingual cryptographic audit receipts with real-time revocation sync to HIS/EMR.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Hospital Touchpoints Matrix */}
      <section id="touchpoints-matrix" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-white/[0.02] border-t border-gray-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-tertiary">Touchpoint Governance</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white mt-1">
              Patient Data Touchpoints Across the Hospital
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-nunitoSans">
              How patient health data is classified across reception, diagnostics, insurance, and research.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm backdrop-blur-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-100/80 dark:bg-white/[0.03] text-gray-700 dark:text-gray-300 font-bold uppercase tracking-wider text-[11px] border-b border-gray-200 dark:border-white/10">
                <tr>
                  <th className="py-4 px-4 sm:px-6">Hospital Touchpoint</th>
                  <th className="py-4 px-4 sm:px-6">Data Collected</th>
                  <th className="py-4 px-4 sm:px-6">DPDP Legal Basis</th>
                  <th className="py-4 px-4 sm:px-6">Consent Rule</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-white/10 bg-white/80 dark:bg-white/[0.02]">
                {hospitalTouchpoints.map((tp, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/80 dark:hover:bg-white/[0.04] transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-gray-900 dark:text-white">
                      {tp.touchpoint}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-gray-600 dark:text-gray-300 text-xs">
                      {tp.dataCollected}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-tertiary font-mono text-xs">
                      {tp.legalBasis}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-gray-600 dark:text-gray-300 text-xs">
                      {tp.consentRule}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 3: Interactive Simulator */}
      <section id="simulator" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-tertiary">Real-Time Sandbox</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white mt-1">
              Simulate Patient Intake, ER Overrides & TPA Redaction
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-nunitoSans">
              Toggle patient permissions at reception, test Section 7(f) trauma emergency overrides, and observe field-level redaction for insurance TPAs.
            </p>
          </div>

          <InteractiveHealthcareConsentSimulator />
        </div>
      </section>

      {/* Section 4: Enterprise Modules Suite */}
      <section id="enterprise-modules" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-white/[0.02] border-t border-gray-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-tertiary">Platform Architecture</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white mt-1">
              Enterprise Hospital Consent Modules
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-nunitoSans">
              Modular components built specifically for hospitals, diagnostic chains, and medical directorates.
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

      {/* Section 5: Implementation Roadmap */}
      <section id="roadmap" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-tertiary">Statutory Timeline</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white mt-1">
              6-Phase Hospital Implementation Roadmap
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-nunitoSans">
              Structured path to align all EMRs, kiosks, and medical departments with the 13 May 2027 statutory deadline.
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
            <span className="text-xs font-mono uppercase tracking-wider text-tertiary">Legal & Clinical Clarity</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white mt-1">
              Frequently Asked Questions for Hospital Administrators & CISO
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
      <HealthcareDemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
      <HealthcareChecklistModal isOpen={checklistModalOpen} onClose={() => setChecklistModalOpen(false)} />
    </div>
  );
}

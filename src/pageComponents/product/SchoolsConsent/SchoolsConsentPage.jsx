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
  School,
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
  GraduationCap,
  Bus,
  Camera,
  MessageCircle,
  Award
} from "lucide-react";

import {
  schoolsConsentSchema,
  metaData,
  partnerLogos,
  builtForTypes,
  schoolActivitiesMatrix,
  problemModuleResults,
  personaGuides,
  timelineMilestones,
  faqsData,
  dpdpResources
} from "./data";

import InteractiveSchoolConsentSimulator from "./InteractiveSchoolConsentSimulator";
import { SchoolDemoModal, SchoolChecklistModal } from "./SchoolsModals";

export default function SchoolsConsentPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activePersona, setActivePersona] = useState("principals");
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isChecklistModalOpen, setIsChecklistModalOpen] = useState(false);



  return (
    <div className="product-container bg-primary dark:bg-secondary font-outfit text-secondary dark:text-white transition-colors duration-200">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolsConsentSchema) }}
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
                <School className="w-4 h-4" /> DPDP Compliance for Schools in India
              </div>

              {/* Live DPDP 13 May 2027 Countdown Timer */}
              <DPDPLiveCountdownTimer label="Core DPDP obligations for educational institutions apply from 13 May 2027" />

              {/* H1 */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] tracking-tight text-secondary dark:text-white font-outfit">
                DPDP Compliance for <span className="text-tertiary">Schools</span>
              </h1>

              {/* Verified Byline */}
              <div className="text-xs text-labelGray dark:text-gray-400 font-medium font-nunitoSans">
                SecureDApp Education & School Privacy Team · Updated: October 2026
              </div>

              {/* Hero Subheadline */}
              <p className="text-base sm:text-lg text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans max-w-3xl">
                <strong>SecureCMS</strong>, the consent management platform by <strong>SecureDApp</strong>, makes DPDP compliance for schools easier to run day to day. It records parent consent for photos, apps, messaging and admissions, keeps that separate from what the school can do without consent, and gives parents one place to change their choices. Built for the <strong>DPDP Act 2023</strong> and the <strong>DPDP Rules 2025</strong>.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="px-8 py-4 bg-tertiary hover:opacity-95 text-secondary font-bold font-outfit rounded-xl shadow-[0_0_20px_rgba(18,213,118,0.35)] transition-all flex items-center justify-center gap-2 text-base"
                >
                  <Calendar className="w-4 h-4" /> Book a School Demo
                </button>
                <button
                  onClick={() => setIsChecklistModalOpen(true)}
                  className="px-8 py-4 bg-secondary/5 dark:bg-white/5 border border-secondary/20 dark:border-white/10 text-secondary dark:text-white font-semibold font-outfit rounded-xl hover:border-tertiary transition-all flex items-center justify-center gap-2 backdrop-blur-sm text-base shadow-sm"
                >
                  <Download className="w-4 h-4 text-tertiary" /> Download School DPDP Checklist
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
                      Quick Answer for School Leaders
                    </span>
                    <p className="text-xs sm:text-sm text-secondary/90 dark:text-gray-300 leading-relaxed font-nunitoSans">
                      Schools can monitor students for teaching and safety without the usual children’s-data limits. Photos online, WhatsApp groups, third-party apps and marketing still need parent consent.
                    </p>
                  </div>
                </div>
              </div>

              {/* Built For Chips */}
              <div className="mt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-outfit">
                <span className="text-labelGray dark:text-gray-400 font-semibold mr-1">Built for:</span>
                {[
                  "CBSE / ICSE / State Board Schools",
                  "School Groups & Chains",
                  "Pre-Schools & Daycares",
                  "Boarding & Residential Schools"
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-secondary dark:text-gray-300 font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>


            </div>
          </div>
        </section>

        {/* Section 1: What Does DPDP Compliance Mean for Schools? */}
        <section className="py-16 lg:py-20 border-b border-gray-100 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-tertiary/10 text-tertiary text-xs font-bold uppercase tracking-wider">
                  Core Foundations
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white tracking-tight">
                  What Does DPDP Compliance Mean for Schools?
                </h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  DPDP compliance for schools means handling the personal data of students, parents and staff the way the DPDP Act 2023 expects. In practice, that comes down to five things: telling parents what data you collect and why, getting verifiable parent consent for uses that need it, keeping each purpose separate, letting parents change their mind easily, and answering data requests and reporting a data breach when one happens.
                </p>
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 space-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-tertiary mt-0.5 shrink-0" />
                    <span>
                      <strong>Students under 18 count as children:</strong> Under the Act, anyone below 18 is legally a child. Whether it is a Class 3 pupil or a Class 12 student, it is the parent or lawful guardian whose consent counts.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-tertiary mt-0.5 shrink-0" />
                    <span>
                      <strong>The School is the Data Fiduciary:</strong> The school decides why and how student data is processed. Your ERP provider, fee gateway, or learning app is a Data Processor acting on your behalf, and the school remains legally accountable before the Data Protection Board.
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Col: Graphic Cards */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                    <School className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-secondary dark:text-white mb-1 font-outfit">
                    Data Fiduciary
                  </h3>
                  <p className="text-xs text-labelGray dark:text-gray-400 leading-relaxed font-nunitoSans">
                    The school retains complete legal accountability for student, parent, and staff data protection under Section 8.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-secondary dark:text-white mb-1 font-outfit">
                    Data Processors
                  </h3>
                  <p className="text-xs text-labelGray dark:text-gray-400 leading-relaxed font-nunitoSans">
                    School ERPs, fee portals, and learning software process data strictly per school contract and instructions.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-secondary dark:text-white mb-1 font-outfit">
                    Verifiable Parent Consent
                  </h3>
                  <p className="text-xs text-labelGray dark:text-gray-400 leading-relaxed font-nunitoSans">
                    Unbundled, revocable consent for non-academic uses, backed by admission file verification under Rule 10.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-3">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-secondary dark:text-white mb-1 font-outfit">
                    72-Hour Breach Escalation
                  </h3>
                  <p className="text-xs text-labelGray dark:text-gray-400 leading-relaxed font-nunitoSans">
                    Mandatory notification to affected parents and the Data Protection Board within 72 hours of any security event.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: What Schools Can Do Without Parent Consent */}
        <section className="py-16 lg:py-20 bg-gray-50/50 dark:bg-white/[0.02] border-b border-gray-100 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3 font-outfit">
                Rule 12 & Fourth Schedule
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white tracking-tight mb-4 font-outfit">
                What Schools Can Do Without Parent Consent
              </h2>
              <p className="text-sm sm:text-base text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans">
                Under Rule 12 and the Fourth Schedule of the DPDP Rules 2025, a school does not have to follow the usual children’s-data limits on tracking and behavioural monitoring, as long as the monitoring is for its educational activities or for the safety of the children enrolled with it. The limits being relaxed come from Section 9 of the DPDP Act: verifiable parent consent, and a ban on tracking, behavioural monitoring and targeted advertising aimed at children.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400 flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-secondary dark:text-white mb-2 font-outfit">
                  Educational Activities
                </h3>
                <p className="text-xs text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans">
                  Daily attendance, academic evaluations, report cards, class rankings, homework assignments, and examination administration are covered as core educational functions.
                </p>
                <div className="mt-4 pt-3 border-t border-gray-100 dark:border-white/5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 font-mono">
                  Basis: Rule 12 Exemption
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400 flex items-center justify-center mb-4">
                  <Bus className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-secondary dark:text-white mb-2 font-outfit">
                  Campus & Transport Safety
                </h3>
                <p className="text-xs text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans">
                  On-campus security CCTV and GPS tracking of school buses by contractors engaged by the school are covered strictly for student safety during transit to and from school.
                </p>
                <div className="mt-4 pt-3 border-t border-gray-100 dark:border-white/5 text-[11px] font-semibold text-blue-600 dark:text-blue-400 font-mono">
                  Basis: Fourth Schedule Part B
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-400 flex items-center justify-center mb-4">
                  <Gavel className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-secondary dark:text-white mb-2 font-outfit">
                  Statutory Filings & Legal Duties
                </h3>
                <p className="text-xs text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans">
                  Registering students for CBSE / ICSE / State Board examinations, filing mandatory UDISE+ returns, and complying with education ministry directives require zero separate consent.
                </p>
                <div className="mt-4 pt-3 border-t border-gray-100 dark:border-white/5 text-[11px] font-semibold text-purple-600 dark:text-purple-400 font-mono">
                  Basis: Legal Obligation
                </div>
              </div>
            </div>

            {/* Caveat alert */}
            <div className="mt-8 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 text-xs text-amber-900 dark:text-amber-200 leading-relaxed font-nunitoSans">
              <strong>Crucial Distinction:</strong> The relief is specifically for tracking and monitoring for teaching and safety. It does not make every use of student data free of consent. Posting a Class 8 student’s video on a social media reel, handing parent phone numbers to an Annual Day sponsor, or signing students up for outside commercial apps still legally requires explicit, unbundled parent consent.
            </div>
          </div>
        </section>

        {/* Section 3: Which School Activities Need Parent Consent (Table) */}
        <section className="py-16 lg:py-20 border-b border-gray-100 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-tertiary/10 text-tertiary text-xs font-bold uppercase tracking-wider mb-3 font-outfit">
                Statutory Activity Mapping
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white tracking-tight mb-4 font-outfit">
                Which School Activities Need Parent Consent
              </h2>
              <p className="text-sm sm:text-base text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans">
                Teaching, attendance, exams, report cards and keeping students safe on campus and on the school bus generally fall within the school’s educational and safety functions. Posting photos on the website or social media, adding parents to WhatsApp groups run by staff, signing students up to third-party apps, sharing data with sponsors and marketing to prospective parents need consent.
              </p>
            </div>

            {/* Table Container */}
            <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-gray-50/80 dark:bg-white/10 border-b border-gray-200 dark:border-white/10 text-secondary dark:text-gray-300 font-bold font-outfit">
                  <tr>
                    <th className="py-3.5 px-4 sm:px-6">School Activity</th>
                    <th className="py-3.5 px-4 sm:px-6">Usual Legal Basis</th>
                    <th className="py-3.5 px-4 sm:px-6">What SecureCMS Records</th>
                    <th className="py-3.5 px-4 sm:px-6 text-right">Statutory Classification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-white/10 text-labelGray dark:text-gray-300 font-nunitoSans">
                  {schoolActivitiesMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-secondary dark:text-white font-outfit">
                        {row.activity}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-xs text-labelGray dark:text-gray-400">
                        {row.basis}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-xs font-mono text-secondary dark:text-gray-300">
                        {row.records}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-right">
                        <span
                          className={`inline-block px-2.5 py-1 text-[11px] font-bold rounded-full ${
                            row.requiresConsent
                              ? "bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300"
                              : "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                          }`}
                        >
                          {row.badge}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs text-labelGray dark:text-gray-400 font-nunitoSans">
              <div>
                If your school uses third-party learning apps heavily, explore our guide on{" "}
                <Link href="/dpdp-compliance-platform/edtech" className="text-tertiary font-bold hover:underline">
                  consent management for edtech platforms &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Interactive Simulator */}
        <section className="py-16 lg:py-20 bg-gray-50/50 dark:bg-white/[0.02] border-b border-gray-100 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-tertiary/10 text-tertiary text-xs font-bold uppercase tracking-wider mb-3">
                Live Simulator
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white tracking-tight mb-3">
                Experience School Consent Management in Action
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Simulate how parents toggle permissions for Aarav Sharma (Class 8-B) and watch revocations instantly synchronize across school ERPs, broadcast tools, and public media repositories.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <InteractiveSchoolConsentSimulator />
            </div>
          </div>
        </section>

        {/* Section 5: Staff, Teachers, Alumni & Students Turning 18 */}
        <section className="py-16 lg:py-20 border-b border-gray-100 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left: Staff & Teachers */}
              <div className="p-8 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-4 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400 flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-secondary dark:text-white font-outfit">
                  Staff, Teachers and Alumni
                </h3>
                <p className="text-xs sm:text-sm text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans">
                  Staff and teacher data used for employment, payroll and statutory filings generally falls under the Act’s legitimate use for employment (Section 7), so separate consent is not needed for those purposes. Alumni are adults and give their own consent for newsletters, reunions and fundraising. The accounts team, the principal’s office and the alumni cell hold data for different reasons, so SecureCMS keeps staff, student and alumni purposes separate.
                </p>
                <div className="pt-2 text-xs font-semibold text-blue-600 dark:text-blue-400 font-outfit">
                  Separation of duties enforced via Multi-Tenant RBAC &rarr;
                </div>
              </div>

              {/* Right: When Students Turn 18 */}
              <div className="p-8 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-4 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-400 flex items-center justify-center font-bold">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-secondary dark:text-white font-outfit">
                  When Students Turn 18
                </h3>
                <p className="text-xs sm:text-sm text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans">
                  Parent consent covers a student only while they are under 18, because the Act defines a child as anyone below that age. For students who turn 18 while still enrolled, and for alumni, the school should ask the student directly before continuing any non-essential use, such as photos in the school magazine or alumni mailers. SecureCMS automates renewal triggers into your yearly re-enrolment cycle.
                </p>
                <div className="pt-2 text-xs font-semibold text-purple-600 dark:text-purple-400 font-outfit">
                  Automated 18th birthday re-enrolment transition &rarr;
                </div>
              </div>
            </div>

            {/* Parent Verification Callout */}
            <div className="mt-8 p-6 rounded-2xl bg-blue-50/60 dark:bg-white/5 border border-blue-200 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 backdrop-blur-sm">
              <div>
                <h4 className="text-base font-bold text-secondary dark:text-white mb-1 font-outfit">
                  How to Verify a Parent Under Rule 10
                </h4>
                <p className="text-xs sm:text-sm text-labelGray dark:text-gray-300 max-w-3xl leading-relaxed font-nunitoSans">
                  Schools usually hold verified parent details from admission, and Rule 10 of the DPDP Rules lets a school rely on reliable identity details it already has for a parent. Other routes are identity details the parent provides, or a DigiLocker token. SecureCMS links each consent to the parent record already held and confirms phone/email via OTP.
                </p>
              </div>
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="shrink-0 px-5 py-2.5 rounded-xl bg-tertiary text-secondary font-bold text-xs hover:brightness-105 transition-all shadow-md font-outfit"
              >
                See Rule 10 Setup
              </button>
            </div>
          </div>
        </section>

        {/* Section 6: How SecureCMS Helps Schools Manage Consent */}
        <section className="py-16 lg:py-20 bg-gray-50/50 dark:bg-white/[0.02] border-b border-gray-100 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-tertiary/10 text-tertiary text-xs font-bold uppercase tracking-wider mb-3 font-outfit">
                Practical Resolution
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white tracking-tight mb-4 font-outfit">
                How SecureCMS Helps Schools Manage Consent
              </h2>
              <p className="text-sm sm:text-base text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans">
                SecureCMS gives a school one consent record per student and parent. It separates what the school does under its educational and safety functions from uses that need consent, collects parent consent by email, SMS or WhatsApp with OTP confirmation, lets parents change choices from one place, and keeps tamper-proof records the school can show to parents, auditors or the Data Protection Board.
              </p>
            </div>

            {/* Problem Module Results Table */}
            <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm mb-16">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-gray-50/80 dark:bg-white/10 border-b border-gray-200 dark:border-white/10 text-secondary dark:text-gray-300 font-bold font-outfit">
                  <tr>
                    <th className="py-3.5 px-4 sm:px-6">School Data Challenge</th>
                    <th className="py-3.5 px-4 sm:px-6">SecureCMS Module</th>
                    <th className="py-3.5 px-4 sm:px-6">Measurable Operational Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-white/10 text-labelGray dark:text-gray-300 font-nunitoSans">
                  {problemModuleResults.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-secondary dark:text-white font-outfit">
                        {item.problem}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-xs font-mono text-tertiary font-semibold">
                        {item.module}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-xs text-secondary/90 dark:text-gray-200">
                        {item.result}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Deep-Dive Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm backdrop-blur-sm">
                <h4 className="text-base font-bold text-secondary dark:text-white mb-2 font-outfit">
                  One Form Per Activity
                </h4>
                <p className="text-xs text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans">
                  Most admission forms collect a single signature for photos, apps, messages and everything else. SecureCMS lets you define each purpose on its own with a plain-language notice in major Indian languages.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm backdrop-blur-sm">
                <h4 className="text-base font-bold text-secondary dark:text-white mb-2 font-outfit">
                  Parent Self-Service Dashboard
                </h4>
                <p className="text-xs text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans">
                  Parents see what they agreed to and change it in one place. Section 6 requires that withdrawing consent must be as effortless as giving it, and SecureCMS propagates revocations immediately.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm backdrop-blur-sm">
                <h4 className="text-base font-bold text-secondary dark:text-white mb-2 font-outfit">
                  Vendor & Staff Data Minimization
                </h4>
                <p className="text-xs text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans">
                  A bus operator needs a student name, stop, and parent contact. It does not need grades or psychological notes. Role-based access and purpose-level filtering enforce that automatically.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm backdrop-blur-sm">
                <h4 className="text-base font-bold text-secondary dark:text-white mb-2 font-outfit">
                  Audit-Ready Blockchain Logs
                </h4>
                <p className="text-xs text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans">
                  Every consent is timestamped and stored in blockchain-backed logs that cannot be quietly altered. Under Section 6(10), schools must be able to prove notice was given and consent was recorded.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm backdrop-blur-sm">
                <h4 className="text-base font-bold text-secondary dark:text-white mb-2 font-outfit">
                  School ERP & App Connectors
                </h4>
                <p className="text-xs text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans">
                  SecureCMS connects to Fedena, Entab, Teachmint, Blackboard, Moodle, and mobile apps via APIs, webhooks, and native SDKs. API calls are secured with mTLS and IP whitelisting.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm backdrop-blur-sm">
                <h4 className="text-base font-bold text-secondary dark:text-white mb-2 font-outfit">
                  Multi-Campus Trust Management
                </h4>
                <p className="text-xs text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans">
                  Educational trusts can oversee global compliance across dozens of affiliated campuses under one organization account while keeping campus student records completely segregated.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Persona Guidance */}
        <section id="principals-trusts" className="py-16 lg:py-20 border-b border-gray-100 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-tertiary/10 text-tertiary text-xs font-bold uppercase tracking-wider mb-3 font-outfit">
                Stakeholder Playbooks
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white tracking-tight mb-2 font-outfit">
                Tailored Guidance for School Leaders
              </h2>
              <p className="text-sm text-labelGray dark:text-gray-300 font-nunitoSans">
                Select your role to explore how SecureCMS streamlines your daily operational workflow.
              </p>
            </div>

            {/* Persona Switcher Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 p-1.5 bg-gray-100 dark:bg-white/5 rounded-2xl max-w-xl">
              {[
                { id: "principals", label: "Principals & Trusts" },
                { id: "administrators", label: "Administrators" },
                { id: "it", label: "School IT & ERP" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActivePersona(tab.id)}
                  className={`flex-1 py-2.5 px-4 text-xs font-bold rounded-xl transition-all font-outfit ${
                    activePersona === tab.id
                      ? "bg-white dark:bg-white/10 text-secondary dark:text-white shadow-sm"
                      : "text-labelGray dark:text-gray-400 hover:text-secondary dark:hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Active Persona Box */}
            <div className="p-8 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-secondary dark:text-white mb-1 font-outfit">
                {personaGuides[activePersona].title}
              </h3>
              <p className="text-xs text-labelGray dark:text-gray-400 mb-6 font-nunitoSans">
                {personaGuides[activePersona].subtitle}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {personaGuides[activePersona].points.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-tertiary mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm text-secondary/90 dark:text-gray-200 leading-relaxed font-nunitoSans">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: DPDP Readiness Plan for Schools Before 13 May 2027 */}
        <section className="py-16 lg:py-20 bg-gray-50/50 dark:bg-white/[0.02] border-b border-gray-100 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-tertiary/10 text-tertiary text-xs font-bold uppercase tracking-wider mb-3 font-outfit">
                Implementation Runbook
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white tracking-tight mb-4 font-outfit">
                DPDP Readiness Plan for Schools Before 13 May 2027
              </h2>
              <p className="text-sm sm:text-base text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans">
                Schools have until 13 May 2027 to be ready for the main obligations, including parent consent, notice, data rights and breach reporting. These six steps are a sensible order to work in:
              </p>
            </div>

            {/* 6 Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {[
                {
                  step: "01",
                  title: "Data Inventory & Mapping",
                  desc: "List what student, parent and staff data the school holds and where it sits: ERP, LMS, WhatsApp, spreadsheets, and vendor systems."
                },
                {
                  step: "02",
                  title: "Statutory Classification",
                  desc: "Mark which activities fall under educational and safety functions and which discretionary activities need explicit parental consent."
                },
                {
                  step: "03",
                  title: "Unbundle Admission Forms",
                  desc: "Replace legacy single-signature admission paperwork with modular, activity-level digital consent notices."
                },
                {
                  step: "04",
                  title: "Collect Fresh Digital Consent",
                  desc: "Deploy the digital parent dashboard and collect fresh verified consent from current enrolled cohorts via OTP."
                },
                {
                  step: "05",
                  title: "Vendor Contracts & Access Limits",
                  desc: "Review vendor contracts (ERP, bus GPS, apps) and enforce strict purpose-level access controls via RBAC."
                },
                {
                  step: "06",
                  title: "Breach Reporting & Training",
                  desc: "Set up 72-hour Data Protection Board breach reporting protocols, parent grievance redressal, and staff training."
                }
              ].map((s, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm relative backdrop-blur-sm">
                  <div className="text-2xl font-extrabold text-tertiary/40 mb-2 font-mono">{s.step}</div>
                  <h4 className="text-base font-bold text-secondary dark:text-white mb-2 font-outfit">{s.title}</h4>
                  <p className="text-xs text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans">{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Timeline Milestones Table */}
            <div className="max-w-4xl mx-auto rounded-2xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 overflow-hidden shadow-sm backdrop-blur-sm">
              <div className="p-5 border-b border-gray-200 dark:border-white/10 font-bold text-sm text-secondary dark:text-white font-outfit">
                Statutory DPDP Act & Rules Enforcement Dates
              </div>
              <div className="divide-y divide-gray-200 dark:divide-white/10 text-xs sm:text-sm font-nunitoSans">
                {timelineMilestones.map((item, idx) => (
                  <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="font-mono font-bold text-tertiary shrink-0 sm:w-48">{item.date}</span>
                    <div className="flex-1">
                      <strong className="text-secondary dark:text-white font-outfit">{item.title}: </strong>
                      <span className="text-labelGray dark:text-gray-300">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center text-xs text-labelGray dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-nunitoSans">
              <strong>Mandatory Breach Protocol:</strong> Once main obligations apply, schools must notify affected parents without delay and submit complete forensic incident reports to the Data Protection Board within 72 hours.
            </div>
          </div>
        </section>

        {/* Section 9: DPDP Resources for Schools */}
        <section className="py-16 lg:py-20 border-b border-gray-100 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-tertiary/10 text-tertiary text-xs font-bold uppercase tracking-wider mb-3 font-outfit">
                Related Architectures
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white tracking-tight mb-3 font-outfit">
                DPDP Resources for Schools
              </h2>
              <p className="text-sm text-labelGray dark:text-gray-300 font-nunitoSans">
                Explore connected architectural guides across our DPDP compliance platform.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {dpdpResources.map((res, idx) => (
                <Link
                  key={idx}
                  href={res.href}
                  className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-tertiary/40 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md hover:-translate-y-0.5 backdrop-blur-sm"
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
                    <span>Explore</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section 10: Frequently Asked Questions (Positioned Directly Above Bottom CTA) */}
        <section id="faqs" className="py-16 lg:py-24 border-b border-gray-100 dark:border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-tertiary/10 text-tertiary text-xs font-bold uppercase tracking-wider mb-3 font-outfit">
                Frequently Asked Questions
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white tracking-tight font-outfit">
                DPDP Compliance for Schools: Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqsData.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 overflow-hidden transition-all shadow-sm hover:border-tertiary/30 backdrop-blur-sm"
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
                          <div className="px-5 pb-5 text-xs sm:text-sm text-labelGray dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-white/5 pt-4 font-nunitoSans">
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

        {/* Book A Meeting CTA */}
        <BookMeetCta />
      </main>

      <Footer />

      {/* Modals */}
      <SchoolDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      <SchoolChecklistModal isOpen={isChecklistModalOpen} onClose={() => setIsChecklistModalOpen(false)} />
    </div>
  );
}

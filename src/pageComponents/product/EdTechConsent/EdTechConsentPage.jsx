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
  BookOpen,
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
  School,
  UserCheck
} from "lucide-react";

import {
  metaData,
  partnerLogos,
  builtForTypes,
  edtechRequirementsData,
  analyticsTrackingMatrix,
  learnerLifecycleData,
  edtechModulesData,
  rolloutSteps,
  faqsData,
  dpdpResources,
  officialSources
} from "./data";

import InteractiveEdTechConsentSimulator from "./InteractiveEdTechConsentSimulator";
import { EdTechDemoModal, EdTechChecklistModal } from "./EdTechModals";

export default function EdTechConsentPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isChecklistModalOpen, setIsChecklistModalOpen] = useState(false);

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
    { name: "Verifiable Parental Consent", stat: "Rule 10 Verified", icon: <UserCheck className="text-tertiary w-4 h-4" /> },
    { name: "Minor Tracking Ban", stat: "Hard Firewall (Sec 9(3))", icon: <ShieldAlert className="text-tertiary w-4 h-4" /> },
    { name: "LMS & App Sync Latency", stat: "<100ms", icon: <Cpu className="text-cyan-400 w-4 h-4" /> },
    { name: "Max Penalty (Sec 9)", stat: "₹200 Crore", icon: <Gavel className="text-red-400 w-4 h-4" /> }
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
              <DPDPLiveCountdownTimer label="Core DPDP obligations apply from 13 May 2027" />

              {/* H1 Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] tracking-tight text-secondary dark:text-white font-outfit">
                Consent Management for <span className="text-tertiary">EdTech Platforms and Schools</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans max-w-2xl">
                <strong>SecureCMS</strong>, the consent management platform by <strong>SecureDApp</strong>, records a parent's consent before a child's data is used, keeps every purpose separate and lets parents change their choices whenever they want. Built for the <strong>DPDP Act 2023</strong> and the <strong>DPDP Rules 2025</strong>.
              </p>

              {/* Quick Answer Banner */}
              <div className="p-4 rounded-xl bg-gray-100 dark:bg-white/5 border-l-4 border-tertiary text-xs sm:text-sm text-secondary dark:text-gray-200 font-nunitoSans">
                <strong className="text-secondary dark:text-white">Quick answer:</strong> Every learner under 18 needs verifiable parental consent, and tracking or targeted ads aimed at children are not allowed.
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-1">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsDemoModalOpen(true)}
                  className="px-8 py-4 bg-tertiary hover:opacity-95 text-secondary font-bold font-outfit rounded-xl shadow-[0_0_20px_rgba(18,213,118,0.35)] transition-all flex items-center justify-center gap-2 text-base"
                >
                  <span>Book an EdTech Demo</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsChecklistModalOpen(true)}
                  className="px-8 py-4 bg-secondary/5 dark:bg-white/5 border border-secondary/20 dark:border-white/10 text-secondary dark:text-white font-semibold font-outfit rounded-xl hover:border-tertiary transition-all flex items-center justify-center gap-2 backdrop-blur-sm text-base shadow-sm"
                >
                  <Download className="w-5 h-5 text-tertiary" />
                  <span>Download Parental Consent Checklist</span>
                </motion.button>
              </div>

              {/* Built For Types Strip */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-labelGray dark:text-gray-400">
                <span className="font-semibold text-secondary dark:text-gray-300">Built for:</span>
                {builtForTypes.map((bt, i) => (
                  <span key={i} className="bg-gray-100 dark:bg-white/5 px-2.5 py-1 rounded-md text-secondary dark:text-gray-300 font-medium">
                    {bt}
                  </span>
                ))}
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
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-secondary dark:text-white font-outfit">EdTech Child Data Guard</div>
                      <div className="text-[10px] text-labelGray dark:text-gray-400">DPDP Section 9 & Rule 10 Gateway</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-tertiary bg-tertiary/10 border border-tertiary/25 px-2.5 py-1 rounded-full font-bold">
                    VPC COMPLIANT
                  </span>
                </div>

                <div className="space-y-2.5">
                  {heroLiveStats.map((item, i) => (
                    <div key={i} className="flex justify-between items-center bg-gray-50/80 dark:bg-white/[0.03] p-3 rounded-xl border border-gray-200 dark:border-white/10">
                      <div className="flex items-center gap-2.5 text-xs text-secondary/80 dark:text-gray-300 font-medium font-outfit">
                        {item.icon} {item.name}
                      </div>
                      <span className="text-xs font-bold font-mono text-secondary dark:text-white bg-gray-200/60 dark:bg-white/10 px-2 py-0.5 rounded">
                        {item.stat}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-100/90 dark:bg-black/40 rounded-2xl p-3.5 border border-gray-200 dark:border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-secondary/70 dark:text-gray-400">
                    <span className="flex items-center gap-1.5 text-secondary dark:text-white">
                      <Activity className="w-3.5 h-3.5 text-tertiary" /> Minor Tracking Blocker Status
                    </span>
                    <span className="text-tertiary font-mono">100% Protected</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5 text-[10px] text-center font-mono">
                    <span className="p-1 rounded bg-tertiary/15 text-tertiary font-bold">LMS Core</span>
                    <span className="p-1 rounded bg-red-500/15 text-red-400 font-bold">No Ads</span>
                    <span className="p-1 rounded bg-red-500/15 text-red-400 font-bold">No Pixels</span>
                    <span className="p-1 rounded bg-tertiary/15 text-tertiary font-bold">Parent OTP</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Badges */}
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

      {/* Section 1: What is Consent Management for EdTech */}
      <section id="founders" className="py-20 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-secondary dark:text-white">
              What is Consent Management for EdTech?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-labelGray dark:text-gray-300 font-nunitoSans leading-relaxed">
              Consent management for edtech is how a learning platform or school records permission to use a learner's personal data. For learners under 18, that permission comes from a parent or lawful guardian. Once the learner turns 18, it comes from the learner. A consent management platform keeps each purpose separate, checks consent before data is used and lets parents change their choices at any time.
            </p>
            <p className="mt-3 text-base text-labelGray dark:text-gray-300 font-nunitoSans leading-relaxed">
              Picture a Class 10 student signing up for a maths app. One tap should not quietly feed an analytics SDK, a marketing list and a counsellor's calling sheet. Those are three purposes, and each one needs its own yes from the parent.
            </p>
          </div>

          <div className="bg-gradient-to-br from-tertiary/10 via-transparent to-purple-500/10 border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-lg">
            <h3 className="text-lg font-bold font-outfit text-secondary dark:text-white mb-6 flex items-center gap-2">
              <School className="w-5 h-5 text-tertiary" />
              EdTech Consent Architecture: Parent / Learner ➔ App ➔ SecureCMS ➔ Tech Stack
            </h3>
            <div className="grid md:grid-cols-5 gap-4 text-center">
              {[
                { title: "1. Parent or Learner", desc: "Age-verified sign-up & purposeful authorization" },
                { title: "2. App / School Portal", desc: "Native iOS/Android SDK, web app or school ERP" },
                { title: "3. SecureCMS Repository", desc: "DigiLocker token, Rule 10 record, SHA-256 logs" },
                { title: "4. Runtime Enforcement", desc: "Blocks commercial tracking & ad tokens for <18s" },
                { title: "5. Downstream Stack", desc: "LMS (Moodle/Canvas), analytics, CRM, counsellors" },
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

      {/* Section 2: Statutory Table & Children's Data */}
      <section id="legal" className="py-20 border-b border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-secondary dark:text-white">
              What the DPDP Act Requires for Children's Data
            </h2>
            <p className="mt-4 text-base sm:text-lg text-labelGray dark:text-gray-300 font-nunitoSans leading-relaxed">
              The DPDP Act treats everyone under 18 as a child. Before an edtech platform processes a child's personal data, it needs verifiable consent from a parent or lawful guardian. The age line is 18, not 13 or 16. A Class 11 student, a Class 12 JEE aspirant and a first-year college student who is still 17 are all covered. Failing to comply can trigger penalties of up to <strong>₹200 crore</strong> under Section 9.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-secondary shadow-md">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-100 dark:bg-white/5 border-b border-gray-200 dark:border-white/10 font-outfit text-secondary dark:text-white">
                <tr>
                  <th className="p-4 sm:p-5 font-bold">Child Protection Requirement</th>
                  <th className="p-4 sm:p-5 font-bold">Source Law</th>
                  <th className="p-4 sm:p-5 font-bold">What SecureCMS Does</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-white/10 font-nunitoSans text-secondary dark:text-gray-300">
                {edtechRequirementsData.map((row, idx) => (
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
      <section className="py-20 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-secondary dark:text-white">
              Experience the Live EdTech & Minor Consent Simulator
            </h2>
            <p className="mt-3 text-base text-labelGray dark:text-gray-300 font-nunitoSans">
              Test Section 9 age gating, parent DigiLocker verification, Section 9(3) tracking blocks, and age-18 transitions.
            </p>
          </div>
          <InteractiveEdTechConsentSimulator />
        </div>
      </section>

      {/* Section 4: Analytics Tracking Matrix */}
      <section className="py-20 border-b border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-secondary dark:text-white">
              Learning Analytics and the Tracking Ban: What's Allowed
            </h2>
            <p className="mt-4 text-base sm:text-lg text-labelGray dark:text-gray-300 font-nunitoSans leading-relaxed">
              EdTech platforms can use a child's data to deliver the course a parent signed up for, such as saving progress and grading tests. What Section 9(3) restricts is tracking, behavioural monitoring, and targeted ads aimed at children.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-secondary shadow-md">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-100 dark:bg-white/5 border-b border-gray-200 dark:border-white/10 font-outfit text-secondary dark:text-white">
                <tr>
                  <th className="p-4 sm:p-5 font-bold">EdTech Practice</th>
                  <th className="p-4 sm:p-5 font-bold">Status for Under-18 Learners</th>
                  <th className="p-4 sm:p-5 font-bold">SecureCMS Enforcement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-white/10 font-nunitoSans text-secondary dark:text-gray-300">
                {analyticsTrackingMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-white/[0.02]">
                    <td className="p-4 sm:p-5 font-semibold text-secondary dark:text-white">{row.practice}</td>
                    <td className="p-4 sm:p-5 font-medium text-amber-600 dark:text-amber-400">{row.status}</td>
                    <td className="p-4 sm:p-5">{row.solution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 5: Learner Lifecycle */}
      <section id="admins" className="py-20 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-secondary dark:text-white">
              Consent Across the Learner Lifecycle
            </h2>
            <p className="mt-4 text-base sm:text-lg text-labelGray dark:text-gray-300 font-nunitoSans leading-relaxed">
              A learner's consent needs change at every stage, from the age check at sign-up to turning 18 and account closure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learnerLifecycleData.map((item, idx) => (
              <div key={idx} className="p-6 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold font-mono text-tertiary mb-1">STAGE 0{idx + 1}</div>
                  <div className="text-base font-bold text-secondary dark:text-white">{item.stage}</div>
                  <div className="text-xs font-semibold text-tertiary mt-1">{item.moment}</div>
                  <div className="text-xs text-red-600 dark:text-red-400 font-nunitoSans mt-3 bg-red-500/10 p-2.5 rounded-lg border border-red-500/20">
                    <strong>Common gap:</strong> {item.problem}
                  </div>
                </div>
                <div className="text-xs text-emerald-800 dark:text-emerald-300 font-nunitoSans mt-3 bg-emerald-500/10 p-2.5 rounded-lg border border-emerald-500/20">
                  <strong>SecureCMS Fix:</strong> {item.solution}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Modules & Problem Solution Table */}
      <section className="py-20 border-b border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-secondary dark:text-white">
              How SecureCMS Manages Consent for EdTech & Schools
            </h2>
            <p className="mt-4 text-base sm:text-lg text-labelGray dark:text-gray-300 font-nunitoSans leading-relaxed">
              SecureCMS records consent against both the learner and the parent, keeps each purpose separate, blocks restricted uses for under-18s, and syncs changes to your LMS, analytics, and CRM tools.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-secondary shadow-md">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-100 dark:bg-white/5 border-b border-gray-200 dark:border-white/10 font-outfit text-secondary dark:text-white">
                <tr>
                  <th className="p-4 sm:p-5 font-bold">Existing Industry Gap</th>
                  <th className="p-4 sm:p-5 font-bold">SecureCMS Enterprise Module</th>
                  <th className="p-4 sm:p-5 font-bold">Verified Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-white/10 font-nunitoSans text-secondary dark:text-gray-300">
                {edtechModulesData.map((row, idx) => (
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

      {/* Section 7: Rollout Steps */}
      <section className="py-20 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-secondary dark:text-white">
              Rollout Plan for EdTech Platforms and Schools
            </h2>
            <p className="mt-4 text-base sm:text-lg text-labelGray dark:text-gray-300 font-nunitoSans leading-relaxed">
              Start with data mapping and the age check, then add the rest in order, because every later step depends on knowing where learner data lives.
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

      {/* Section 8: Resources */}
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

      {/* Section 9: Frequently Asked Questions (Positioned Directly Above Conversion Banner) */}
      <section id="faqs" className="py-20 lg:py-24 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-secondary dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-base text-labelGray dark:text-gray-300 font-nunitoSans">
              Key questions on DPDP children's data obligations and school compliance.
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
          <div className="bg-gradient-to-r from-purple-500/20 via-tertiary/20 to-cyan-500/20 border border-tertiary/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-secondary dark:text-white">
              Protect Minor Learners & Secure Section 9 Compliance
            </h2>
            <p className="mt-3 text-sm sm:text-base text-labelGray dark:text-gray-300 font-nunitoSans max-w-xl mx-auto">
              Schedule a personalized walkthrough with our child data privacy team or download the complete EdTech compliance checklist.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <button
                type="button"
                onClick={() => setIsDemoModalOpen(true)}
                className="px-8 py-3.5 bg-tertiary text-secondary font-bold font-outfit rounded-xl shadow-lg hover:opacity-95 transition-all text-sm"
              >
                Book an EdTech Demo
              </button>
              <button
                type="button"
                onClick={() => setIsChecklistModalOpen(true)}
                className="px-8 py-3.5 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/15 text-secondary dark:text-white font-semibold font-outfit rounded-xl hover:border-tertiary transition-all text-sm"
              >
                Download Parental Consent Checklist (PDF)
              </button>
            </div>
          </div>
        </div>
      </section>

      <BookMeetCta />
      <Footer />

      {/* Modals */}
      <EdTechDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      <EdTechChecklistModal isOpen={isChecklistModalOpen} onClose={() => setIsChecklistModalOpen(false)} />
    </div>
  );
}

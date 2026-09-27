import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  AlertCircle,
  Check,
  Sparkles,
  Landmark,
  Scale,
  Building,
  HeartPulse,
  FileSpreadsheet,
  FileCheck2,
  ShieldCheck,
} from "lucide-react";
import { industryUseCases } from "../data";

export default function IndustryMatrix() {
  const [activeTab, setActiveTab] = useState(0);

  const tabIcons = [
    <Landmark key="1" className="w-4 h-4 flex-shrink-0" />,
    <Scale key="2" className="w-4 h-4 flex-shrink-0" />,
    <Building key="3" className="w-4 h-4 flex-shrink-0" />,
    <HeartPulse key="4" className="w-4 h-4 flex-shrink-0" />,
    <FileSpreadsheet key="5" className="w-4 h-4 flex-shrink-0" />,
  ];

  const currentCase = industryUseCases[activeTab];

  return (
    <section className="py-24 bg-transparent relative transition-colors duration-300 font-outfit overflow-hidden">
      {/* Ambient background accents */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-tertiary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tertiary/10 border border-tertiary/20 mb-4">
            <Briefcase className="w-4 h-4 text-tertiary" />
            <span className="text-xs font-bold text-tertiary uppercase tracking-wider font-outfit">
              Industry Use Cases
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary dark:text-white tracking-tight font-outfit">
            Tailored Signing Solutions for Every Sector
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-nunitoSans leading-relaxed">
            See how organizations across India replace manual friction with automated, court-admissible execution.
          </p>
        </div>

        {/* Pro Minimal Tab Bar (Pill Selector) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {industryUseCases.map((item, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold font-outfit whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-tertiary text-secondary font-bold shadow-[0_0_20px_rgba(18,213,118,0.35)] scale-[1.02]"
                    : "bg-white/60 dark:bg-cardBackgroundDark/70 text-slate-600 dark:text-gray-300 border border-gray-200/80 dark:border-white/10 hover:border-tertiary/50 hover:text-secondary dark:hover:text-white"
                }`}
              >
                <span className={isActive ? "text-secondary" : "text-tertiary"}>
                  {tabIcons[idx]}
                </span>
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Enterprise Workspace Layout - Open & Flowing */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCase.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-white/90 to-white/40 dark:from-[#0F172A]/90 dark:to-[#0A101D]/50 backdrop-blur-2xl border border-gray-200/80 dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
          >
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: The Problem & Solution Breakdown */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-tertiary/10 text-tertiary flex items-center justify-center flex-shrink-0">
                    {tabIcons[activeTab]}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase text-tertiary tracking-wider block">
                      Enterprise Sector Profile
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-secondary dark:text-white font-outfit">
                      {currentCase.title}
                    </h3>
                  </div>
                </div>

                {/* Challenge Narrative (Borderless) */}
                <div className="pl-4 border-l-2 border-red-500/40 space-y-1">
                  <span className="text-xs font-bold text-red-500 uppercase tracking-wider flex items-center gap-1.5 font-outfit">
                    <AlertCircle className="w-3.5 h-3.5" /> Traditional Industry Bottleneck
                  </span>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-nunitoSans">
                    {currentCase.challenge}
                  </p>
                </div>

                {/* Solution Highlights */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 block font-outfit">
                    How Secure e-Sign Solves It:
                  </span>
                  <ul className="space-y-2.5">
                    {currentCase.solution.map((sol, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-200 font-nunitoSans">
                        <span className="w-4 h-4 rounded-full bg-tertiary/15 text-tertiary flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Realistic Live Document Verification Stamp */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-secondary/5 dark:bg-[#070D18] border border-secondary/15 dark:border-white/10 p-6 sm:p-7 shadow-xl space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-200 dark:border-white/10">
                    <div className="flex items-center gap-2">
                      <FileCheck2 className="w-4 h-4 text-tertiary" />
                      <span className="text-xs font-bold text-secondary dark:text-white font-outfit">
                        Standard Statutory Template
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-tertiary bg-tertiary/10 px-2 py-0.5 rounded">
                      IT ACT 3 & 3A
                    </span>
                  </div>

                  {/* Simulated Form Fields */}
                  <div className="space-y-2 font-mono text-xs">
                    <div className="flex justify-between p-2.5 rounded-lg bg-white/60 dark:bg-white/5 border border-gray-200/50 dark:border-white/5">
                      <span className="text-slate-500">Execution Velocity:</span>
                      <span className="text-tertiary font-bold">&lt; 60 Seconds</span>
                    </div>
                    <div className="flex justify-between p-2.5 rounded-lg bg-white/60 dark:bg-white/5 border border-gray-200/50 dark:border-white/5">
                      <span className="text-slate-500">Legal Presumption:</span>
                      <span className="text-secondary dark:text-white font-bold">100% Incontrovertible</span>
                    </div>
                    <div className="flex justify-between p-2.5 rounded-lg bg-white/60 dark:bg-white/5 border border-gray-200/50 dark:border-white/5">
                      <span className="text-slate-500">Audit Trace:</span>
                      <span className="text-cyan-400 font-bold">SHA-256 Tamper Sealed</span>
                    </div>
                  </div>

                  {/* Cryptographic Seal */}
                  <div className="p-3.5 rounded-xl bg-tertiary/10 border border-tertiary/30 flex items-center gap-3">
                    <ShieldCheck className="w-8 h-8 text-tertiary flex-shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-secondary dark:text-white font-outfit">
                        C-DAC & UIDAI Validated
                      </p>
                      <p className="text-[10px] text-slate-600 dark:text-slate-300 font-nunitoSans">
                        Digitally signed under licensed Indian Certifying Authority.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}


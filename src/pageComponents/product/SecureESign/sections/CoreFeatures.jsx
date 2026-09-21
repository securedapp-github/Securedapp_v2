import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  KeyRound,
  Fingerprint,
  Scale,
  Building2,
  Check,
  Lock,
  Cpu,
  ShieldCheck,
  Award,
  Sparkles,
} from "lucide-react";
import { coreFeatures } from "../data";

export default function CoreFeatures() {
  const [activeTab, setActiveTab] = useState(0);

  const featureIcons = [
    <KeyRound key="0" className="w-5 h-5" />,
    <Fingerprint key="1" className="w-5 h-5" />,
    <Scale key="2" className="w-5 h-5" />,
    <Lock key="3" className="w-5 h-5" />,
    <Building2 key="4" className="w-5 h-5" />,
  ];

  const currentFeature = coreFeatures[activeTab];

  return (
    <section className="py-24 bg-transparent relative transition-colors duration-300 font-outfit overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-tertiary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tertiary/10 border border-tertiary/20 mb-4">
            <Cpu className="w-4 h-4 text-tertiary" />
            <span className="text-xs font-bold text-tertiary uppercase tracking-wider font-outfit">
              Core Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary dark:text-white tracking-tight font-outfit">
            Engineered for High-Stakes Compliance & Velocity
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-nunitoSans leading-relaxed">
            A comprehensive cryptographic infrastructure built from the ground up to replace physical paper with court-admissible certainty.
          </p>
        </div>

        {/* Studio Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {coreFeatures.map((feature, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={feature.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold font-outfit whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-tertiary text-secondary font-bold shadow-[0_0_20px_rgba(18,213,118,0.35)] scale-[1.02]"
                    : "bg-white/60 dark:bg-cardBackgroundDark/70 text-slate-600 dark:text-gray-300 border border-gray-200/80 dark:border-white/10 hover:border-tertiary/50 hover:text-secondary dark:hover:text-white"
                }`}
              >
                <span className={isActive ? "text-secondary" : "text-tertiary"}>
                  {featureIcons[idx]}
                </span>
                <span>{feature.title.split(":")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Live Interactive Capability Studio */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/90 to-white/40 dark:from-[#0F172A]/90 dark:to-[#0A101D]/50 backdrop-blur-2xl border border-gray-200/80 dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
          >
            {/* Left Column: Deep Capability Breakdown */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/15 text-tertiary text-xs font-bold uppercase tracking-wider font-outfit border border-tertiary/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{currentFeature.tagline}</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-secondary dark:text-white font-outfit">
                  {currentFeature.title}
                </h3>
                {currentFeature.description && (
                  <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-nunitoSans">
                    {currentFeature.description}
                  </p>
                )}
              </div>

              {/* Subfeatures / Capabilities List */}
              <div className="space-y-3 pt-2">
                {currentFeature.subFeatures ? (
                  currentFeature.subFeatures.map((sub, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      <h4 className="text-sm font-bold text-secondary dark:text-white flex items-center gap-2 font-outfit">
                        <span className="w-2 h-2 rounded-full bg-tertiary" />
                        {sub.name}
                      </h4>
                      <ul className="grid sm:grid-cols-2 gap-2 pl-4">
                        {sub.items.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 font-nunitoSans">
                            <Check className="w-3.5 h-3.5 text-tertiary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                ) : (
                  <ul className="grid sm:grid-cols-2 gap-2.5">
                    {currentFeature.capabilities.map((cap, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-nunitoSans">
                        <Check className="w-4 h-4 text-tertiary flex-shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Context Highlights: Beneficiaries / Scenarios / Hardening */}
              <div className="pt-4 border-t border-gray-200 dark:border-white/10">
                {currentFeature.beneficiaries && (
                  <div className="grid grid-cols-3 gap-3">
                    {currentFeature.beneficiaries.map((b, bIdx) => (
                      <div key={bIdx} className="space-y-0.5">
                        <span className="text-[11px] font-bold text-tertiary uppercase tracking-wider font-outfit block">
                          {b.role}
                        </span>
                        <p className="text-xs text-slate-600 dark:text-slate-300 font-nunitoSans">
                          {b.benefit}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                {currentFeature.scenarios && (
                  <div className="grid grid-cols-3 gap-3">
                    {currentFeature.scenarios.map((s, sIdx) => (
                      <div key={sIdx} className="space-y-0.5">
                        <span className="text-[11px] font-bold text-tertiary uppercase tracking-wider font-outfit block">
                          {s.domain}
                        </span>
                        <p className="text-xs text-slate-600 dark:text-slate-300 font-nunitoSans">
                          {s.outcome}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                {currentFeature.industryHardening && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {currentFeature.industryHardening.map((ih, ihIdx) => (
                      <div key={ihIdx} className="space-y-0.5">
                        <span className="text-[11px] font-bold text-tertiary uppercase tracking-wider font-outfit block">
                          {ih.domain}
                        </span>
                        <p className="text-[11px] text-slate-600 dark:text-slate-300 font-nunitoSans">
                          {ih.compliance}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                {currentFeature.metrics && (
                  <div className="grid grid-cols-3 gap-4">
                    {currentFeature.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <span className="text-2xl font-bold text-secondary dark:text-white font-poppins">
                          {m.stat}
                        </span>
                        <p className="text-xs text-slate-600 dark:text-slate-300 font-nunitoSans">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Dynamic Live Cryptographic Inspector Viewport */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl bg-secondary/5 dark:bg-[#070D18] border border-secondary/15 dark:border-white/10 p-6 sm:p-7 shadow-2xl relative overflow-hidden font-outfit">
                {/* Dynamic Status Header */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-white/10">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-ping" />
                    <span className="text-xs font-mono font-bold text-secondary dark:text-white uppercase tracking-wider">
                      Live Cryptographic Pipeline
                    </span>
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-mono font-semibold rounded-md bg-tertiary/15 text-tertiary border border-tertiary/30">
                    STATUS: ACTIVE
                  </span>
                </div>

                {/* Viewport Content Dependent on Active Tab */}
                <div className="py-5 space-y-4 font-mono text-xs">
                  {activeTab === 0 && (
                    <div className="space-y-3">
                      <div className="p-3.5 rounded-xl bg-white dark:bg-white/5 border border-tertiary/30 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <KeyRound className="w-5 h-5 text-tertiary" />
                          <div>
                            <p className="font-bold text-secondary dark:text-white font-outfit">Class 3 DSC USB Token</p>
                            <p className="text-[10px] text-slate-500">ePass2003 / mToken FIPS 140-2 L3</p>
                          </div>
                        </div>
                        <span className="text-[10px] text-tertiary font-bold">VERIFIED</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white dark:bg-white/5 border border-blue-500/30 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Fingerprint className="w-5 h-5 text-blue-400" />
                          <div>
                            <p className="font-bold text-secondary dark:text-white font-outfit">Aadhaar eSign Gateway</p>
                            <p className="text-[10px] text-slate-500">UIDAI OTP Authentication 2.0</p>
                          </div>
                        </div>
                        <span className="text-[10px] text-blue-400 font-bold">AUTHENTICATED</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 1 && (
                    <div className="space-y-2.5">
                      <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-slate-300">
                        <span className="text-slate-500 block text-[10px]">SIGNER IDENTITY</span>
                        <span className="text-secondary dark:text-white font-bold text-sm font-outfit">Rajesh Kumar Verma</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-slate-300">
                        <span className="text-slate-500 block text-[10px]">AADHAAR TOKEN HASH</span>
                        <span className="text-tertiary truncate block">e79b9a1a4c8f2b7d039e1a7b4f5c9e2d...</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-slate-300 flex justify-between">
                        <div>
                          <span className="text-slate-500 block text-[10px]">KYC STATUS</span>
                          <span className="text-emerald-400 font-bold">100% Aadhaar Verified</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block text-[10px]">TIME DRIFT</span>
                          <span className="text-slate-300">&lt; 12ms NIST Synchronized</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 2 && (
                    <div className="space-y-3">
                      <div className="p-4 rounded-xl bg-tertiary/10 border border-tertiary/30">
                        <p className="text-xs font-bold text-secondary dark:text-white font-outfit flex items-center gap-2">
                          <Scale className="w-4 h-4 text-tertiary" />
                          Indian Evidence Act Section 65B Certified
                        </p>
                        <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 font-nunitoSans">
                          Presumption of authenticity attached to digital signature certificates issued by Controller of Certifying Authorities (CCA).
                        </p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-slate-400 text-[11px] flex justify-between">
                        <span>LEGAL STATUS: COURT ADMISSIBLE</span>
                        <span className="text-tertiary">IT ACT SEC 3 & 3A</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 3 && (
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                        <span className="text-slate-400">ENCRYPTION PROTOCOL</span>
                        <span className="text-tertiary font-bold">RSA 2048 / ECDSA P-384</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                        <span className="text-slate-400">DOCUMENT HASH</span>
                        <span className="text-cyan-400 font-bold">SHA-256 Tamper-Proof</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                        <span className="text-slate-400">DATA RESIDENCY</span>
                        <span className="text-white font-bold">100% Indian Data Centers</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 4 && (
                    <div className="space-y-3">
                      <div className="p-4 rounded-xl bg-white dark:bg-white/5 border border-tertiary/30">
                        <div className="flex items-center gap-3 mb-2">
                          <Building2 className="w-6 h-6 text-tertiary" />
                          <div>
                            <p className="font-bold text-secondary dark:text-white font-outfit text-sm">C-DAC Certified eSign</p>
                            <p className="text-[10px] text-slate-500">Ministry of Electronics & IT (MeitY)</p>
                          </div>
                        </div>
                        <p className="text-[11px] text-slate-600 dark:text-slate-300 font-nunitoSans">
                          Direct integration with Government of India certified root PKI infrastructure, ensuring total statutory validity.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Micro Footer Hash */}
                <div className="pt-3 border-t border-gray-200 dark:border-white/10 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                  <span>ROOT_CA: CCA_INDIA_2026</span>
                  <span className="text-tertiary flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> VERIFIED SIGNATURE
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

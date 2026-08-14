import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import { 
  FiFileText, 
  FiServer, 
  FiShield, 
  FiAlertCircle, 
  FiCheckCircle, 
  FiZap, 
  FiLayers, 
  FiCpu, 
  FiArrowRight, 
  FiLock 
} from 'react-icons/fi';

const comparisonData = [
  {
    id: "audit",
    name: "Smart Contract Audit",
    shortName: "Contract Audit",
    phase: "Pre-Deployment",
    phaseColor: "cyan",
    icon: <FiFileText className="w-5 h-5 text-[#00d2ff]" />,
    purpose: "Identifies code vulnerabilities, logical flaws, and edge cases before deployment to mainnet.",
    limitations: "One-time static snapshot. Cannot protect against zero-days, runtime flash-loan exploits, or oracle manipulation post-launch.",
    role: "Prevents code-level bugs and known vulnerabilities before launch.",
    coverage: "Static Source Code",
    realTime: false,
    tag: "Pre-Launch Baseline"
  },
  {
    id: "siem",
    name: "Traditional SIEM Monitoring",
    shortName: "Traditional SIEM",
    phase: "Off-Chain Infrastructure",
    phaseColor: "blue",
    icon: <FiServer className="w-5 h-5 text-[#3b82f6]" />,
    purpose: "Monitors centralized cloud servers, API gateways, system logs, and network infrastructure.",
    limitations: "Blind to blockchain state changes, smart contract function calls, mempool activity, and DeFi composability risks.",
    role: "Protects traditional Web2 servers and centralized IT backends.",
    coverage: "Servers & Cloud Infra",
    realTime: true,
    tag: "Web2 Stack Only"
  },
  {
    id: "securewatch",
    name: "SecureWatch Monitoring",
    shortName: "SecureWatch (On-Chain)",
    phase: "Real-Time 24/7 (Live Mainnet)",
    phaseColor: "emerald",
    icon: <FiShield className="w-5 h-5 text-[#00ff88]" />,
    purpose: "Continuously analyzes mempool & blockchain transactions in real time with AI behavioral anomaly models.",
    limitations: "Complements audits; requires protocol integration & alert webhook configurations for automated pause actions.",
    role: "Provides 24/7 automated on-chain threat detection, instant exploit alerting, and mitigation triggers.",
    coverage: "Live Smart Contracts & Mempool",
    realTime: true,
    tag: "Flagship Real-Time Shield",
    isRecommended: true
  }
];

const AuditsVsMonitoringSection = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#00d2ff]/10 via-[#00ff88]/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#00ff88]/5 blur-[100px] pointer-events-none rounded-full" />

      {/* Header */}
      <div className="relative z-10 text-center mb-16">
        <SectionHeader 
          label="Security Comparison" 
          title={
            <>
              Smart Contract Audits vs{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d2ff]">
                Blockchain Monitoring
              </span>
            </>
          } 
        />
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed mt-2 font-normal">
          Smart contract audits and continuous monitoring serve distinct, critical roles in modern Web3 security. 
          Deploying both delivers an airtight, multi-layered defense for decentralized protocols.
        </p>

        {/* Quick Phase Overview Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#00d2ff]"></span>
            <span>Static Code Audits</span>
          </div>
          <span className="text-slate-600 font-mono text-sm">+</span>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#3b82f6]"></span>
            <span>Web2 Infrastructure SIEM</span>
          </div>
          <span className="text-slate-600 font-mono text-sm">+</span>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 text-xs text-[#00ff88] font-semibold backdrop-blur-md shadow-[0_0_15px_rgba(0,255,136,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse"></span>
            <span>SecureWatch Live On-Chain Shield</span>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP / TABLET COMPARISON MATRIX ================= */}
      <div className="hidden md:block relative z-10">
        <div className="rounded-2xl border border-slate-800/80 bg-[#060e1e]/80 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-slate-900/60 border-b border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-400">
            <div className="col-span-3 flex items-center gap-2">
              <FiLayers className="text-[#00d2ff]" /> Security Layer
            </div>
            <div className="col-span-3 flex items-center gap-2">
              <FiCpu className="text-[#00d2ff]" /> Primary Purpose
            </div>
            <div className="col-span-3 flex items-center gap-2">
              <FiAlertCircle className="text-amber-400" /> Limitations & Scope
            </div>
            <div className="col-span-3 flex items-center gap-2">
              <FiShield className="text-[#00ff88]" /> Strategic Defense Role
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-800/60">
            {comparisonData.map((item) => {
              const isRecommended = item.isRecommended;

              return (
                <div 
                  key={item.id}
                  className={`grid grid-cols-12 gap-4 px-6 py-6 items-center transition-all duration-300 relative ${
                    isRecommended 
                      ? 'bg-gradient-to-r from-[#00ff88]/[0.07] via-[#00d2ff]/[0.05] to-[#00ff88]/[0.03] border-y border-[#00ff88]/30 shadow-[inset_0_1px_0_rgba(0,255,136,0.2),inset_0_-1px_0_rgba(0,255,136,0.2)]'
                      : 'hover:bg-slate-800/30'
                  }`}
                >
                  {/* Column 1: Method & Phase */}
                  <div className="col-span-3 pr-2">
                    <div className="flex items-start gap-3">
                      <div className={`p-2.5 rounded-xl border shrink-0 mt-0.5 ${
                        isRecommended 
                          ? 'bg-[#00ff88]/10 border-[#00ff88]/40 shadow-[0_0_15px_rgba(0,255,136,0.25)]' 
                          : 'bg-slate-900/90 border-slate-800'
                      }`}>
                        {item.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className={`font-bold text-sm lg:text-base leading-tight ${
                            isRecommended ? 'text-white font-extrabold' : 'text-slate-200'
                          }`}>
                            {item.name}
                          </h4>
                          {isRecommended && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-[#00ff88] text-[#030d1d] shadow-[0_0_10px_rgba(0,255,136,0.5)]">
                              <FiZap className="w-3 h-3" /> Live Engine
                            </span>
                          )}
                        </div>
                        <div className="mt-1.5 flex items-center gap-2">
                          <span className={`inline-block text-[11px] font-medium px-2 py-0.5 rounded-md border ${
                            item.phaseColor === 'emerald'
                              ? 'bg-[#00ff88]/10 text-[#00ff88] border-[#00ff88]/30'
                              : item.phaseColor === 'cyan'
                              ? 'bg-[#00d2ff]/10 text-[#00d2ff] border-[#00d2ff]/30'
                              : 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                          }`}>
                            {item.phase}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Purpose */}
                  <div className="col-span-3 pr-2">
                    <div className="flex items-start gap-2">
                      <FiCheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${
                        isRecommended ? 'text-[#00ff88]' : 'text-slate-400'
                      }`} />
                      <p className="text-xs lg:text-sm text-slate-300 leading-relaxed">
                        {item.purpose}
                      </p>
                    </div>
                  </div>

                  {/* Column 3: Limitations */}
                  <div className="col-span-3 pr-2">
                    <div className="flex items-start gap-2">
                      <FiAlertCircle className={`w-4 h-4 mt-0.5 shrink-0 ${
                        isRecommended ? 'text-cyan-400' : 'text-amber-400/90'
                      }`} />
                      <p className="text-xs lg:text-sm text-slate-400 leading-relaxed">
                        {item.limitations}
                      </p>
                    </div>
                  </div>

                  {/* Column 4: Role */}
                  <div className="col-span-3">
                    <div className={`p-3 rounded-xl border ${
                      isRecommended 
                        ? 'bg-[#00ff88]/10 border-[#00ff88]/30 text-white font-medium shadow-[0_0_20px_rgba(0,255,136,0.1)]'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300'
                    }`}>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          isRecommended ? 'bg-[#00ff88] animate-ping' : 'bg-slate-400'
                        }`} />
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${
                          isRecommended ? 'text-[#00ff88]' : 'text-slate-400'
                        }`}>
                          {item.coverage}
                        </span>
                      </div>
                      <p className="text-xs lg:text-sm leading-snug">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= MOBILE CARDS VIEW (< 768px) ================= */}
      <div className="block md:hidden space-y-5 relative z-10">
        {comparisonData.map((item) => {
          const isRecommended = item.isRecommended;

          return (
            <div
              key={item.id}
              className={`rounded-2xl p-5 border backdrop-blur-xl transition-all duration-300 ${
                isRecommended
                  ? 'bg-gradient-to-b from-[#061826] to-[#04101e] border-[#00ff88]/50 shadow-[0_0_30px_rgba(0,255,136,0.15)] ring-1 ring-[#00ff88]/30'
                  : 'bg-slate-900/80 border-slate-800 shadow-lg'
              }`}
            >
              {/* Card Header */}
              <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl border shrink-0 ${
                    isRecommended
                      ? 'bg-[#00ff88]/10 border-[#00ff88]/40 text-[#00ff88]'
                      : 'bg-slate-800/80 border-slate-700'
                  }`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white leading-tight">
                      {item.name}
                    </h4>
                    <span className={`inline-block mt-1 text-[11px] font-semibold px-2 py-0.5 rounded-md border ${
                      item.phaseColor === 'emerald'
                        ? 'bg-[#00ff88]/10 text-[#00ff88] border-[#00ff88]/30'
                        : item.phaseColor === 'cyan'
                        ? 'bg-[#00d2ff]/10 text-[#00d2ff] border-[#00d2ff]/30'
                        : 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                    }`}>
                      {item.phase}
                    </span>
                  </div>
                </div>

                {isRecommended && (
                  <span className="px-2 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#00ff88] text-[#030d1d] shrink-0">
                    Recommended
                  </span>
                )}
              </div>

              {/* Card Body Details */}
              <div className="py-4 space-y-3.5">
                {/* Purpose */}
                <div>
                  <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-1 flex items-center gap-1.5">
                    <FiCheckCircle className={isRecommended ? 'text-[#00ff88]' : 'text-slate-400'} /> Primary Purpose
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pl-4 border-l-2 border-slate-800">
                    {item.purpose}
                  </p>
                </div>

                {/* Limitations */}
                <div>
                  <div className="text-[11px] uppercase tracking-wider font-bold text-amber-400/90 mb-1 flex items-center gap-1.5">
                    <FiAlertCircle /> Limitations
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-4 border-l-2 border-slate-800">
                    {item.limitations}
                  </p>
                </div>
              </div>

              {/* Card Footer Role */}
              <div className={`mt-2 p-3.5 rounded-xl border ${
                isRecommended
                  ? 'bg-[#00ff88]/10 border-[#00ff88]/30 text-white'
                  : 'bg-slate-950/60 border-slate-800 text-slate-300'
              }`}>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${isRecommended ? 'bg-[#00ff88]' : 'bg-slate-400'}`} />
                  Role in Security ({item.coverage})
                </div>
                <p className="text-xs font-medium leading-snug">
                  {item.role}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= BOTTOM SYNERGY SUMMARY CALLOUT ================= */}
      <div className="mt-12 relative z-10">
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-[#00d2ff]/10 via-[#00ff88]/10 to-[#00d2ff]/5 border border-[#00d2ff]/30 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#00ff88]/15 border border-[#00ff88]/40 flex items-center justify-center text-[#00ff88] shrink-0 shadow-[0_0_20px_rgba(0,255,136,0.2)]">
              <FiLock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                The Complete Security Standard: Audit + Continuous Monitoring
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                Audits prevent predictable vulnerabilities before mainnet launch, while SecureWatch defends your liquidity against live on-chain exploits 24/7.
              </p>
            </div>
          </div>

          <a 
            href="https://securewatch.securedapp.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#00ff88] to-[#00d2ff] text-[#030d1d] hover:brightness-110 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 shrink-0 shadow-[0_0_25px_rgba(0,255,136,0.3)] cursor-pointer"
          >
            <span>Activate SecureWatch</span>
            <FiArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AuditsVsMonitoringSection;

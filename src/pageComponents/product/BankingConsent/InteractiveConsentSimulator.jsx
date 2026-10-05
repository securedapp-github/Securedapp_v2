"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, 
  Smartphone, 
  Building, 
  Globe, 
  MessageSquare, 
  Check, 
  RefreshCw, 
  Lock, 
  Terminal, 
  ArrowRight, 
  Zap, 
  FileCheck2, 
  AlertCircle,
  KeyRound,
  Database
} from "lucide-react";

export default function InteractiveConsentSimulator({ onBookDemo }) {
  const [activeChannel, setActiveChannel] = useState("mobile"); // "branch", "mobile", "netbanking", "whatsapp"
  const [purposes, setPurposes] = useState({
    coreAccount: true, // locked
    creditCard: true,
    crossSell: false,
    coLending: false,
    analytics: true,
  });
  const [isVerifying, setIsVerifying] = useState(false);
  const [isRevoking, setIsRevoking] = useState(false);
  const [lastEvent, setLastEvent] = useState(null);
  const [logs, setLogs] = useState([
    { time: "11:20:02", system: "SECURECMS_GATEWAY", msg: "Initialized mTLS connection with CBS Enterprise Service Bus." },
    { time: "11:20:05", system: "AUDIT_LEDGER", msg: "Policy version v2.5 (DPDP Rules 2025 compliant) loaded." },
    { time: "11:20:10", system: "PMLA_VAULT", msg: "Statutory 5-year post-relationship retention rules active." }
  ]);

  const channels = [
    { id: "mobile", name: "Mobile Banking App", icon: Smartphone, badge: "iOS / Android / Flutter" },
    { id: "branch", name: "Branch Counter (Tablet)", icon: Building, badge: "Teller UI & Biometrics" },
    { id: "netbanking", name: "Net Banking Portal", icon: Globe, badge: "Web Preference Center" },
    { id: "whatsapp", name: "WhatsApp Banking", icon: MessageSquare, badge: "Conversational Opt-in" }
  ];

  const togglePurpose = (key) => {
    if (key === "coreAccount") return; // Statutory cannot be toggled
    setPurposes(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSimulateConsent = () => {
    setIsVerifying(true);
    const now = new Date();
    const timeStr = now.toTimeString().split(" ")[0];
    const consentId = "CNS-" + Math.random().toString(36).substring(2, 9).toUpperCase();
    const hash = "0x" + Array.from({ length: 16 }, () => Math.floor(Math.random() * 16).toString(16)).join("");

    setTimeout(() => {
      setIsVerifying(false);
      const newEvent = {
        type: "GRANTED",
        consentId,
        hash,
        channel: channels.find(c => c.id === activeChannel).name,
        timestamp: now.toISOString(),
        grantedCount: Object.values(purposes).filter(Boolean).length,
      };
      setLastEvent(newEvent);

      setLogs(prev => [
        { time: timeStr, system: "OTP_AUTH", msg: `Verified affirmative consent via OTP on ${activeChannel.toUpperCase()} channel.` },
        { time: timeStr, system: "BLOCKCHAIN_LOG", msg: `Immutable receipt mined: ${consentId} | Hash: ${hash}...` },
        { time: timeStr, system: "CBS_SYNC", msg: `Propagated 3 consent bitmasks to Core Banking (Finacle/BaNCS) in 118ms.` },
        ...prev.slice(0, 5)
      ]);
    }, 700);
  };

  const handleSimulateRevoke = () => {
    setIsRevoking(true);
    const now = new Date();
    const timeStr = now.toTimeString().split(" ")[0];
    const consentId = "RVK-" + Math.random().toString(36).substring(2, 9).toUpperCase();

    setTimeout(() => {
      setIsRevoking(false);
      setPurposes(prev => ({
        ...prev,
        creditCard: false,
        crossSell: false,
        coLending: false,
        analytics: false,
      }));

      const newEvent = {
        type: "REVOKED",
        consentId,
        hash: "0x" + Array.from({ length: 16 }, () => Math.floor(Math.random() * 16).toString(16)).join(""),
        channel: channels.find(c => c.id === activeChannel).name,
        timestamp: now.toISOString(),
        grantedCount: 1, // only coreAccount stays
      };
      setLastEvent(newEvent);

      setLogs(prev => [
        { time: timeStr, system: "REVOCATION_ENGINE", msg: `Section 6(4) instant withdrawal processed for customer CIF #982310.` },
        { time: timeStr, system: "DOWNSTREAM_WEBHOOK", msg: `Emitted consent.revoked to Marketing Hub & Fintech Gateway (Latency: 84ms).` },
        { time: timeStr, system: "PMLA_PROTECTION", msg: `Partial Erasure enforced: Core KYC & Transaction data retained under Sec 8(7).` },
        ...prev.slice(0, 5)
      ]);
    }, 600);
  };

  return (
    <div className="bg-white/80 dark:bg-[#001938]/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      {/* Simulator Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-white/10 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 mb-2">
            <Zap className="w-3.5 h-3.5" /> Interactive Banking Architecture Sandbox
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-outfit text-slate-900 dark:text-white">
            Simulate Omnichannel Consent & CBS Downstream Cutoff
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Test how customer opt-in or Section 6(4) instant revocation propagates across branches, mobile banking, and Core Banking Systems (CBS) in real time.
          </p>
        </div>

        <button
          onClick={onBookDemo}
          className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-xs hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20 whitespace-nowrap"
        >
          Book Live CBS Sandbox Demo <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        {/* Left Control Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Step 1: Channel Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Step 1: Select Banking Channel / Touchpoint
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {channels.map((chan) => {
                const Icon = chan.icon;
                const isSelected = activeChannel === chan.id;
                return (
                  <button
                    key={chan.id}
                    onClick={() => setActiveChannel(chan.id)}
                    className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                      isSelected
                        ? "bg-emerald-500/10 border-emerald-500 text-emerald-700 dark:text-emerald-300 shadow-md shadow-emerald-500/10"
                        : "bg-slate-50 dark:bg-white/[0.03] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Icon className={`w-4 h-4 ${isSelected ? "text-emerald-500" : "text-slate-400"}`} />
                      {isSelected && <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>}
                    </div>
                    <div className="text-xs font-bold leading-tight mb-1">{chan.name}</div>
                    <div className="text-[10px] text-slate-400 dark:text-slate-500 truncate">{chan.badge}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Purpose Configuration */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Step 2: Granular Banking Purposes (Section 6 Unbundled)
              </label>
              <span className="text-[11px] text-slate-400 dark:text-slate-500 font-mono">Customer CIF #982310</span>
            </div>

            <div className="space-y-2.5 bg-slate-50/80 dark:bg-white/[0.02] p-4 rounded-2xl border border-slate-200 dark:border-white/10">
              
              {/* Statutory Item (Locked) */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-100/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-lg bg-blue-500/20 text-blue-500 flex items-center justify-center text-xs">
                    <Lock className="w-3 h-3" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      Core Account Servicing & PMLA Logs
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-normal">Statutory (Sec 7 & 8(7))</span>
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Mandatory KYC, balance alerts, and 5-yr PMLA statutory record preservation</div>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">Locked</span>
              </div>

              {/* Consent Item 1: Cards */}
              <div 
                onClick={() => togglePurpose("creditCard")}
                className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                  purposes.creditCard 
                    ? "bg-emerald-500/10 border-emerald-500/30 text-slate-900 dark:text-white" 
                    : "bg-white dark:bg-white/[0.02] border-slate-200 dark:border-white/10 opacity-60"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-lg flex items-center justify-center text-xs ${
                    purposes.creditCard ? "bg-emerald-500 text-white" : "border border-slate-400 text-transparent"
                  }`}>
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold">Credit Card Pre-Approved Offers</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Bureau-checked credit limit enhancement & card upgrade marketing</div>
                  </div>
                </div>
                <span className={`text-[11px] font-bold ${purposes.creditCard ? "text-emerald-500" : "text-slate-400"}`}>
                  {purposes.creditCard ? "OPTED IN" : "REVOKED"}
                </span>
              </div>

              {/* Consent Item 2: Cross Sell */}
              <div 
                onClick={() => togglePurpose("crossSell")}
                className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                  purposes.crossSell 
                    ? "bg-emerald-500/10 border-emerald-500/30 text-slate-900 dark:text-white" 
                    : "bg-white dark:bg-white/[0.02] border-slate-200 dark:border-white/10 opacity-60"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-lg flex items-center justify-center text-xs ${
                    purposes.crossSell ? "bg-emerald-500 text-white" : "border border-slate-400 text-transparent"
                  }`}>
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold">Insurance & Mutual Fund Cross-Selling</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Sharing customer profile with bank insurance subsidiaries</div>
                  </div>
                </div>
                <span className={`text-[11px] font-bold ${purposes.crossSell ? "text-emerald-500" : "text-slate-400"}`}>
                  {purposes.crossSell ? "OPTED IN" : "REVOKED"}
                </span>
              </div>

              {/* Consent Item 3: Co-Lending */}
              <div 
                onClick={() => togglePurpose("coLending")}
                className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                  purposes.coLending 
                    ? "bg-emerald-500/10 border-emerald-500/30 text-slate-900 dark:text-white" 
                    : "bg-white dark:bg-white/[0.02] border-slate-200 dark:border-white/10 opacity-60"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-lg flex items-center justify-center text-xs ${
                    purposes.coLending ? "bg-emerald-500 text-white" : "border border-slate-400 text-transparent"
                  }`}>
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold">Fintech Co-Lending Partner Sharing</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Transmission of loan repayment history to registered NBFC partners</div>
                  </div>
                </div>
                <span className={`text-[11px] font-bold ${purposes.coLending ? "text-emerald-500" : "text-slate-400"}`}>
                  {purposes.coLending ? "OPTED IN" : "REVOKED"}
                </span>
              </div>

              {/* Consent Item 4: Analytics */}
              <div 
                onClick={() => togglePurpose("analytics")}
                className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                  purposes.analytics 
                    ? "bg-emerald-500/10 border-emerald-500/30 text-slate-900 dark:text-white" 
                    : "bg-white dark:bg-white/[0.02] border-slate-200 dark:border-white/10 opacity-60"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-lg flex items-center justify-center text-xs ${
                    purposes.analytics ? "bg-emerald-500 text-white" : "border border-slate-400 text-transparent"
                  }`}>
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold">App Analytics & Journey Personalisation</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Behavioral tracking for in-app contextual nudges</div>
                  </div>
                </div>
                <span className={`text-[11px] font-bold ${purposes.analytics ? "text-emerald-500" : "text-slate-400"}`}>
                  {purposes.analytics ? "OPTED IN" : "REVOKED"}
                </span>
              </div>

            </div>
          </div>

          {/* Action Trigger Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={handleSimulateConsent}
              disabled={isVerifying || isRevoking}
              className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xs sm:text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 disabled:opacity-50"
            >
              {isVerifying ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" /> Verifying Customer OTP...
                </>
              ) : (
                <>
                  <KeyRound className="w-4 h-4" /> Simulate OTP Consent Grant
                </>
              )}
            </button>

            <button
              onClick={handleSimulateRevoke}
              disabled={isVerifying || isRevoking}
              className="flex-1 py-3 px-4 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-600 dark:text-rose-400 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isRevoking ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" /> Executing Downstream Cutoff...
                </>
              ) : (
                <>
                  <RefreshCw className="w-4 h-4" /> Simulate Sec 6(4) Instant Withdrawal
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Audit & Execution Console (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          
          {/* Cryptographic Receipt Card */}
          <div className="bg-slate-900 border border-white/10 rounded-2xl p-5 text-white shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                <ShieldCheck className="w-4 h-4" /> Section 6(10) Burden of Proof Receipt
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 font-mono text-slate-300">
                {lastEvent ? lastEvent.type : "READY"}
              </span>
            </div>

            {lastEvent ? (
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between text-slate-400">
                  <span>Record ID:</span>
                  <span className="text-white font-bold">{lastEvent.consentId}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Channel:</span>
                  <span className="text-cyan-400">{lastEvent.channel}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Active Purposes:</span>
                  <span className="text-emerald-400">{lastEvent.grantedCount} of 5 active</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Timestamp:</span>
                  <span className="text-slate-300">{new Date(lastEvent.timestamp).toLocaleTimeString()}</span>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <span className="text-[10px] text-slate-400 block mb-0.5">Blockchain SHA-256 Digest:</span>
                  <span className="text-[11px] text-slate-300 break-all bg-black/40 p-1.5 rounded block">
                    {lastEvent.hash}e84b9c1d2f09a7b5...
                  </span>
                </div>
              </div>
            ) : (
              <div className="py-6 text-center text-xs text-slate-400 space-y-2">
                <FileCheck2 className="w-8 h-8 mx-auto text-slate-600 stroke-[1.5]" />
                <p>Click <strong className="text-emerald-400">Simulate OTP Consent Grant</strong> or <strong className="text-rose-400">Instant Withdrawal</strong> to generate a verifiable Section 6(10) audit receipt.</p>
              </div>
            )}
          </div>

          {/* Live CBS & Downstream Propagation Log */}
          <div className="bg-slate-950 border border-white/10 rounded-2xl p-4 text-white font-mono text-[11px] flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" /> Real-Time CBS Bus Telemetry
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> Live ESB Sync
                </div>
              </div>

              <div className="space-y-2 overflow-y-auto max-h-48 pr-1">
                {logs.map((l, i) => (
                  <div key={i} className="leading-tight">
                    <span className="text-slate-500">[{l.time}]</span>{" "}
                    <span className="text-cyan-400">[{l.system}]</span>{" "}
                    <span className="text-slate-300">{l.msg}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 mt-3 flex items-center justify-between text-[10px] text-slate-400">
              <span className="flex items-center gap-1">
                <Database className="w-3 h-3 text-cyan-400" /> Finacle / BaNCS Adapter: ACTIVE
              </span>
              <span className="text-emerald-400 font-bold">Latency: &lt;140ms</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

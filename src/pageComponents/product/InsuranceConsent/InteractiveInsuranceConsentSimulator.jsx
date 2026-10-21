"use client";

import React, { useState } from "react";
import { 
  Shield, 
  ShieldCheck, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  EyeOff, 
  Eye, 
  Sliders, 
  Lock, 
  FileText, 
  Trash2, 
  RefreshCw,
  Activity,
  Car,
  HeartPulse,
  Smartphone
} from "lucide-react";

export default function InteractiveInsuranceConsentSimulator() {
  const [activeTab, setActiveTab] = useState("proposal-pos"); // "proposal-pos" | "tpa-redactor" | "telematics-stream" | "irdai-retention"

  // Mode 1: Proposal States
  const [crossSellConsent, setCrossSellConsent] = useState(false);
  const [telematicsConsent, setTelematicsConsent] = useState(true);
  const [wearablesConsent, setWearablesConsent] = useState(false);

  // Mode 2: TPA Redaction
  const [redactionActive, setRedactionActive] = useState(true);

  // Mode 3: Telematics Stream
  const [telematicsLive, setTelematicsLive] = useState(true);
  const [telematicsStatus, setTelematicsStatus] = useState("Streaming Active (IoT Pipeline Connected)");

  // Mode 4: Erasure State
  const [erasureState, setErasureState] = useState("idle");

  const handleToggleTelematics = () => {
    if (telematicsLive) {
      setTelematicsLive(false);
      setTelematicsStatus("Revoked: Sub-100ms Suppression Dispatched to IoT Ingestion Pipeline");
    } else {
      setTelematicsLive(true);
      setTelematicsStatus("Streaming Active (IoT Pipeline Connected)");
    }
  };

  const handleSimulateErasure = () => {
    setErasureState("evaluating");
    setTimeout(() => {
      setErasureState("completed");
    }, 700);
  };

  return (
    <div className="w-full bg-[#0a1619] border border-[#163038] rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#163038] gap-4">
        <div>
          <div className="flex items-center space-x-2 text-tertiary text-xs font-mono uppercase tracking-wider mb-1">
            <Sliders className="w-4 h-4" />
            <span>Interactive Simulator</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Insurance Proposal POS Consent & TPA Redaction Sandbox
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            Simulate unbundled POS proposal flows, TPA cashless claim field-limiting, telematics opt-outs, and IRDAI legal holds.
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex bg-[#071012] p-1 rounded-xl border border-[#1a3842] self-start md:self-auto overflow-x-auto max-w-full">
          <button
            onClick={() => setActiveTab("proposal-pos")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
              activeTab === "proposal-pos"
                ? "bg-tertiary text-secondary shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Proposal Point-of-Sale
          </button>
          <button
            onClick={() => setActiveTab("tpa-redactor")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
              activeTab === "tpa-redactor"
                ? "bg-tertiary text-secondary shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            TPA Claim Redactor
          </button>
          <button
            onClick={() => setActiveTab("telematics-stream")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
              activeTab === "telematics-stream"
                ? "bg-tertiary text-secondary shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Telematics IoT Stream
          </button>
          <button
            onClick={() => setActiveTab("irdai-retention")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
              activeTab === "irdai-retention"
                ? "bg-tertiary text-secondary shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            IRDAI 5-Year Hold
          </button>
        </div>
      </div>

      {/* Main Tab Area */}
      <div className="mt-6">
        {activeTab === "proposal-pos" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Agent Tablet Mockup */}
            <div className="lg:col-span-5 bg-[#081316] border border-[#1b3d47] rounded-2xl p-5 shadow-inner space-y-3.5">
              <div className="flex items-center justify-between pb-3 border-b border-[#1a3842]">
                <div className="flex items-center space-x-2">
                  <Smartphone className="w-4 h-4 text-tertiary" />
                  <span className="text-xs font-mono font-semibold text-white">Agent POS Tablet / Branch Portal</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                  Proposal #POL-2026-8921
                </span>
              </div>

              {/* Core Underwriting Declarations: Locked */}
              <div className="p-3.5 rounded-xl bg-[#0e2127] border border-[#204955]">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">Underwriting & Policy Issuance</h4>
                    <p className="text-xs text-gray-300 mt-0.5">
                      Medical history declaration, age verification, premium calculation.
                    </p>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono whitespace-nowrap">
                    Section 7(a) Application
                  </span>
                </div>
                <div className="mt-2 pt-2 border-t border-[#1a3842] flex items-center justify-between text-[11px] text-gray-400 font-mono">
                  <span>Policy Application Basis</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Essential Terms
                  </span>
                </div>
              </div>

              {/* Unbundled Cross-Sell Checkbox */}
              <div className="p-3.5 rounded-xl bg-[#0e2127] border border-[#204955]">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">Cross-Sell Group Health & Annuities</h4>
                    <p className="text-xs text-gray-300 mt-0.5">
                      Share demographic data for partner investment and health plans.
                    </p>
                  </div>
                  <button
                    onClick={() => setCrossSellConsent(!crossSellConsent)}
                    className={`relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                      crossSellConsent ? "bg-tertiary" : "bg-gray-700"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-secondary shadow ring-0 transition duration-200 ease-in-out ${
                        crossSellConsent ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
                <div className="mt-2 pt-2 border-t border-[#1a3842] flex items-center justify-between text-[11px] text-gray-400 font-mono">
                  <span>Section 6 Unbundled Choice</span>
                  <span className={crossSellConsent ? "text-emerald-400 font-bold" : "text-amber-400"}>
                    {crossSellConsent ? "Cross-Sell Permitted" : "Strictly Opted Out"}
                  </span>
                </div>
              </div>

              {/* Motor Telematics Checkbox */}
              <div className="p-3.5 rounded-xl bg-[#0e2127] border border-[#204955]">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">Pay-How-You-Drive Motor Telematics</h4>
                    <p className="text-xs text-gray-300 mt-0.5">
                      GPS acceleration, speed logging for safe driver premium discounts.
                    </p>
                  </div>
                  <button
                    onClick={() => setTelematicsConsent(!telematicsConsent)}
                    className={`relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                      telematicsConsent ? "bg-tertiary" : "bg-gray-700"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-secondary shadow ring-0 transition duration-200 ease-in-out ${
                        telematicsConsent ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
                <div className="mt-2 pt-2 border-t border-[#1a3842] flex items-center justify-between text-[11px] text-gray-400 font-mono">
                  <span>Continuous IoT Telemetry</span>
                  <span className={telematicsConsent ? "text-emerald-400 font-bold" : "text-amber-400"}>
                    {telematicsConsent ? "Telematics Active" : "Disabled (Fixed Rate)"}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Policyholder Burden of Proof Telemetry */}
            <div className="lg:col-span-7 p-5 rounded-2xl bg-[#081316] border border-[#1b3d47] space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-tertiary" />
                Section 6(10) Burden of Proof Defense Engine
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Even when a field agent or bancassurance bank executive fills out the proposal form on their tablet, SecureCMS dispatches an instantaneous OTP directly to the policyholder's registered mobile number, generating an unassailable evidentiary record.
              </p>

              <div className="p-4 rounded-xl bg-[#0e2127] border border-[#204955] text-xs font-mono space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Policyholder OTP:</span>
                  <span className="text-emerald-400 font-bold">Verified (+91 98201 4****)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Notice Language:</span>
                  <span className="text-white">Bengali + English (Sec 5(3))</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cryptographic Receipt:</span>
                  <span className="text-tertiary">sha256:1a8b...449c (Signed)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Core PAS Sync:</span>
                  <span className="text-emerald-400">Guidewire PolicyCenter (28ms)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "tpa-redactor" && (
          <div className="p-5 rounded-2xl bg-[#081316] border border-[#1b3d47] space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <EyeOff className="w-5 h-5 text-tertiary" />
                  Third Party Administrator (TPA) Cashless Claim View
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  Enforces strict data minimization under Section 8(2) processor contracts during cashless hospital claims.
                </p>
              </div>

              <button
                onClick={() => setRedactionActive(!redactionActive)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  redactionActive
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                    : "bg-red-500/20 text-red-300 border border-red-500/40"
                }`}
              >
                {redactionActive ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                <span>{redactionActive ? "TPA Redaction: ACTIVE" : "TPA Redaction: DISABLED"}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-[#0e2127] border border-[#204955] space-y-3">
                <div className="text-tertiary font-bold text-sm">TRANSMITTED TO TPA (Claim Adjudication)</div>
                <div className="space-y-1.5 text-gray-300">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Policy Number:</span>
                    <span className="text-white">HLTH-2026-90412</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Pre-Auth Claim Amount:</span>
                    <span className="text-amber-400 font-bold">₹ 1,45,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Hospital & Room Category:</span>
                    <span className="text-white">Fortis Hospital (Single Deluxe)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Diagnosis Code:</span>
                    <span className="text-white">ICD-10 I20.0 (Unstable Angina)</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0e2127] border border-[#204955] space-y-3">
                <div className="text-tertiary font-bold text-sm">REDACTED FROM TPA (Privacy Protection)</div>
                <div className="space-y-1.5 text-gray-300">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Nominee Income / Bank Account:</span>
                    <span className={redactionActive ? "text-tertiary font-bold" : "text-white"}>
                      {redactionActive ? "[REDACTED: Irrelevant to Claim]" : "HDFC Bank AC #9921004"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Policyholder Annual Income:</span>
                    <span className={redactionActive ? "text-tertiary font-bold" : "text-white"}>
                      {redactionActive ? "[REDACTED: Financial Shield]" : "₹ 48,00,000 p.a."}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Past Non-Related Health History:</span>
                    <span className={redactionActive ? "text-tertiary font-bold" : "text-white"}>
                      {redactionActive ? "[REDACTED: Section 8(2) Limiting]" : "Dermatology Clinic Notes"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "telematics-stream" && (
          <div className="p-5 rounded-2xl bg-[#081316] border border-[#1b3d47] space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Car className="w-5 h-5 text-tertiary" />
                  Real-Time Motor Telematics Stream & In-App Opt-Out
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  Continuous sensor data processing requires real-time revocation support under Section 6(4).
                </p>
              </div>

              <button
                onClick={handleToggleTelematics}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  telematicsLive
                    ? "bg-red-500/20 text-red-300 border border-red-500/40 hover:bg-red-500/30"
                    : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30"
                }`}
              >
                {telematicsLive ? "Revoke Telematics Consent" : "Re-Enable Telematics Consent"}
              </button>
            </div>

            <div className="p-4 rounded-xl bg-[#0e2127] border border-[#204955] space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">IoT Pipeline Telemetry:</span>
                <span className={telematicsLive ? "text-emerald-400 font-bold" : "text-amber-400 font-bold"}>
                  {telematicsStatus}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-gray-300">
                <div className="p-2.5 rounded bg-[#091518]">
                  <span className="text-gray-400 block text-[10px]">Speed & Acceleration:</span>
                  <span className={telematicsLive ? "text-white" : "text-red-400"}>
                    {telematicsLive ? "64 km/h (Smooth)" : "BLOCKED"}
                  </span>
                </div>
                <div className="p-2.5 rounded bg-[#091518]">
                  <span className="text-gray-400 block text-[10px]">GPS Geo-Location:</span>
                  <span className={telematicsLive ? "text-white" : "text-red-400"}>
                    {telematicsLive ? "19.0760° N, 72.8777° E" : "BLOCKED"}
                  </span>
                </div>
                <div className="p-2.5 rounded bg-[#091518]">
                  <span className="text-gray-400 block text-[10px]">Risk Score Multiplier:</span>
                  <span className={telematicsLive ? "text-tertiary" : "text-gray-400"}>
                    {telematicsLive ? "0.85x (Discount Active)" : "1.00x (Standard Tariff)"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "irdai-retention" && (
          <div className="p-5 rounded-2xl bg-[#081316] border border-[#1b3d47] space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-tertiary" />
                  Lapsed Policy: Erasure Request vs IRDAI / PMLA Retention
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  Policyholder demands complete erasure under Section 12 after policy lapse.
                </p>
              </div>

              {erasureState === "idle" && (
                <button
                  onClick={handleSimulateErasure}
                  className="px-4 py-2 bg-red-600/80 hover:bg-red-600 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-lg"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Simulate Lapsed Policy Erasure
                </button>
              )}
            </div>

            {erasureState === "evaluating" && (
              <div className="py-6 text-center text-xs text-tertiary flex items-center justify-center gap-2">
                <RefreshCw className="w-4 h-4 animate-spin" /> Evaluating IRDAI Cyber Guidelines & PMLA Section 12 mandates...
              </div>
            )}

            {erasureState === "completed" && (
              <div className="space-y-4 animate-fadeIn">
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Dual-Track Disposition Enforced:</strong> Marketing and promotional profiles purged immediately. Premium settlement history, claim adjudication documents, and KYC records locked under statutory 5-year retention mandated by IRDAI & PMLA regulations.
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-[#0e2127] border border-red-500/30">
                    <div className="flex items-center justify-between text-red-400 font-bold mb-2">
                      <span>PURGED / ERASED (SEC 12)</span>
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Marketing communication tokens</li>
                      <li>• Renewal reminder email queues</li>
                      <li>• Telematics historical GPS trips</li>
                      <li>• Cross-sell annuity recommendations</li>
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0e2127] border border-emerald-500/30">
                    <div className="flex items-center justify-between text-emerald-400 font-bold mb-2">
                      <span>IRDAI / PMLA LEGAL HOLD (5 YEARS)</span>
                      <Lock className="w-4 h-4" />
                    </div>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Signed proposal form & policy contract</li>
                      <li>• Historical premium payment receipts</li>
                      <li>• Claims investigation & payout reports</li>
                      <li>• Statutory Release Date: 2031-10-15</li>
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => setErasureState("idle")}
                  className="text-xs text-tertiary hover:underline flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" /> Reset Simulation
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

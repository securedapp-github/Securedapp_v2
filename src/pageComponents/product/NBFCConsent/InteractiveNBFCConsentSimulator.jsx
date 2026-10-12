"use client";

import React, { useState } from "react";
import { 
  Landmark, 
  Smartphone, 
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
  Users
} from "lucide-react";

export default function InteractiveNBFCConsentSimulator() {
  const [activeTab, setActiveTab] = useState("zero-scraping"); // "zero-scraping" | "recovery-redactor" | "closed-loan-pmla"

  // Mode 1: Zero-Scraping Lending App Permissions
  const [bureauConsent, setBureauConsent] = useState(true);
  const [coLenderSharing, setCoLenderSharing] = useState(false);
  const [creditInsurance, setCreditInsurance] = useState(false);

  // Mode 2: Recovery Redactor View
  const [redactionActive, setRedactionActive] = useState(true);

  // Mode 3: Closed Loan Erasure
  const [erasureState, setErasureState] = useState("idle");

  const handleSimulateErasure = () => {
    setErasureState("evaluating");
    setTimeout(() => {
      setErasureState("erased");
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
            NBFC Lending Journey & Recovery Governance Sandbox
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            Simulate RBI 2025 zero-scraping onboarding, collection agency data limiting, and PMLA legal holds.
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex bg-[#071012] p-1 rounded-xl border border-[#1a3842] self-start md:self-auto">
          <button
            onClick={() => setActiveTab("zero-scraping")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "zero-scraping"
                ? "bg-tertiary text-secondary shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Zero-Scraping Onboarding
          </button>
          <button
            onClick={() => setActiveTab("recovery-redactor")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "recovery-redactor"
                ? "bg-tertiary text-secondary shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Collections Field Redactor
          </button>
          <button
            onClick={() => setActiveTab("closed-loan-pmla")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "closed-loan-pmla"
                ? "bg-tertiary text-secondary shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Closed Loan Erasure
          </button>
        </div>
      </div>

      {/* Main Tab Area */}
      <div className="mt-6">
        {activeTab === "zero-scraping" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Mobile App Onboarding Screen */}
            <div className="lg:col-span-5 bg-[#081316] border border-[#1b3d47] rounded-2xl p-5 shadow-inner">
              <div className="flex items-center justify-between pb-3 border-b border-[#1a3842] mb-4">
                <div className="flex items-center space-x-2">
                  <Smartphone className="w-4 h-4 text-tertiary" />
                  <span className="text-xs font-mono font-semibold text-white">NBFC QuickLoan App</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                  RBI 2025 Enforced
                </span>
              </div>

              <div className="space-y-3.5">
                {/* Banned Hardware Scrapes */}
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                  <div className="flex items-center justify-between text-xs text-red-300 font-bold mb-1">
                    <span>BANNED HARDWARE ACCESS (RBI 2025)</span>
                    <XCircle className="w-4 h-4 text-red-400" />
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-300 mt-2 font-mono">
                    <div className="p-1.5 rounded bg-[#09181d] flex items-center justify-between">
                      <span>Contacts Scraping:</span>
                      <span className="text-red-400">BLOCKED</span>
                    </div>
                    <div className="p-1.5 rounded bg-[#09181d] flex items-center justify-between">
                      <span>Call Logs / SMS:</span>
                      <span className="text-red-400">BLOCKED</span>
                    </div>
                    <div className="p-1.5 rounded bg-[#09181d] flex items-center justify-between">
                      <span>Media & Storage:</span>
                      <span className="text-red-400">BLOCKED</span>
                    </div>
                    <div className="p-1.5 rounded bg-[#09181d] flex items-center justify-between">
                      <span>Live Location:</span>
                      <span className="text-emerald-400">KYC 1-TIME</span>
                    </div>
                  </div>
                </div>

                {/* Explicit Unbundled Permissions */}
                <div className="p-3.5 rounded-xl bg-[#0e2127] border border-[#204955]">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">Credit Bureau Pull (CIBIL/Experian)</h4>
                      <p className="text-xs text-gray-300 mt-0.5">
                        Standalone permission to pull credit score for underwriting.
                      </p>
                    </div>
                    <button
                      onClick={() => setBureauConsent(!bureauConsent)}
                      className={`relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                        bureauConsent ? "bg-tertiary" : "bg-gray-700"
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-secondary shadow ring-0 transition duration-200 ease-in-out ${
                          bureauConsent ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                  <div className="mt-2 pt-2 border-t border-[#1a3842] flex items-center justify-between text-[11px] text-gray-400 font-mono">
                    <span>Mandatory Standalone Gate</span>
                    <span className={bureauConsent ? "text-emerald-400 font-bold" : "text-amber-400"}>
                      {bureauConsent ? "OTP Verified" : "Bureau Pull Denied"}
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0e2127] border border-[#204955]">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">Co-Lending Bank Data Sharing</h4>
                      <p className="text-xs text-gray-300 mt-0.5">
                        Share application with partner bank (State Bank / HDFC) under 80:20 risk split.
                      </p>
                    </div>
                    <button
                      onClick={() => setCoLenderSharing(!coLenderSharing)}
                      className={`relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                        coLenderSharing ? "bg-tertiary" : "bg-gray-700"
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-secondary shadow ring-0 transition duration-200 ease-in-out ${
                          coLenderSharing ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                  <div className="mt-2 pt-2 border-t border-[#1a3842] flex items-center justify-between text-[11px] text-gray-400 font-mono">
                    <span>Section 6 Unbundled Choice</span>
                    <span className={coLenderSharing ? "text-emerald-400 font-bold" : "text-amber-400"}>
                      {coLenderSharing ? "Co-Lender Approved" : "Held on Solo Balance Sheet"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Regulatory Audit Engine */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-5 rounded-2xl bg-[#081316] border border-[#1b3d47]">
                <h4 className="text-base font-bold text-white flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-tertiary" />
                  RBI Digital Lending Compliance Verifier
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Under the updated RBI Digital Lending Directions and Section 6 of the DPDP Act, lending apps are strictly prohibited from harvesting phone directories, contact lists, photos, or media files. All underwriting must rely on <strong>declared financials, Account Aggregator pulls, and explicit OTP-verified bureau pulls</strong>.
                </p>

                <div className="mt-4 p-3 rounded-xl bg-[#0e2127] border border-[#204955] font-mono text-xs space-y-1.5">
                  <div className="flex items-center justify-between text-gray-300">
                    <span>Borrower ID:</span>
                    <span className="text-white">NBFC-BOR-994821</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-300">
                    <span>Bureau Pull Hash:</span>
                    <span className="text-tertiary">
                      {bureauConsent ? "sha256:889d...12cb (VALID)" : "REVOKED / NULL"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-gray-300">
                    <span>Notice Language:</span>
                    <span className="text-white">Hindi + English (Sec 5(3))</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-300">
                    <span>Downstream LSP Sync:</span>
                    <span className="text-emerald-400">Pushed via mTLS (78ms)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "recovery-redactor" && (
          <div className="p-5 rounded-2xl bg-[#081316] border border-[#1b3d47] space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-tertiary" />
                  Collection Agency & Recovery Officer View
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  SecureCMS dynamically redacts unconsented third-party data, protecting NBFCs from regulatory penalties.
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
                <span>{redactionActive ? "Redaction: ACTIVE (DPDP Compliant)" : "Redaction: DISABLED (High Risk)"}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-[#0e2127] border border-[#204955] space-y-3">
                <div className="text-tertiary font-bold text-sm">DEBT RECOVERY DATA (Legitimate Use)</div>
                <div className="space-y-1.5 text-gray-300">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Borrower Full Name:</span>
                    <span className="text-white font-bold">Ramesh Patel</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Registered Phone:</span>
                    <span className="text-white">+91 98201 34***</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Loan Overdue Balance:</span>
                    <span className="text-amber-400 font-bold">₹ 42,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Days Past Due (DPD):</span>
                    <span className="text-red-400 font-bold">64 Days</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0e2127] border border-[#204955] space-y-3">
                <div className="text-tertiary font-bold text-sm">THIRD-PARTY PRIVACY BOUNDARY</div>
                <div className="space-y-1.5 text-gray-300">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Emergency Contact (Spouse):</span>
                    <span className={redactionActive ? "text-tertiary font-bold" : "text-white"}>
                      {redactionActive ? "[REDACTED: Unconsented Party]" : "+91 98201 99881"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Employer Phone:</span>
                    <span className={redactionActive ? "text-tertiary font-bold" : "text-white"}>
                      {redactionActive ? "[REDACTED: Harassment Guard]" : "+91 22 6678 1234"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Personal Email:</span>
                    <span className={redactionActive ? "text-tertiary font-bold" : "text-white"}>
                      {redactionActive ? "[REDACTED: Primary Channel Only]" : "ramesh@patel.co"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Access Audit Logged:</span>
                    <span className="text-emerald-400">Agent ID #REC-4412 (Logged)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "closed-loan-pmla" && (
          <div className="p-5 rounded-2xl bg-[#081316] border border-[#1b3d47] space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-tertiary" />
                  Closed Loan: Section 12 Erasure vs PMLA 5-Year Legal Hold
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  Borrower requests complete deletion following loan closure and No Due Certificate (NDC).
                </p>
              </div>

              {erasureState === "idle" && (
                <button
                  onClick={handleSimulateErasure}
                  className="px-4 py-2 bg-red-600/80 hover:bg-red-600 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-lg"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Submit Borrower Erasure Request
                </button>
              )}
            </div>

            {erasureState === "evaluating" && (
              <div className="py-6 text-center text-xs text-tertiary flex items-center justify-center gap-2">
                <RefreshCw className="w-4 h-4 animate-spin" /> Evaluating statutory retention registers across LOS/LMS...
              </div>
            )}

            {erasureState === "erased" && (
              <div className="space-y-4 animate-fadeIn">
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Automated Statutory Safe-Harbor Applied:</strong> Marketing profiles and behavioral scoring deleted immediately. Core loan agreement, repayment ledger, and KYC documents are retained for 5 years under PMLA Section 12 & RBI NBFC Master Directions.
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-[#0e2127] border border-red-500/30">
                    <div className="flex items-center justify-between text-red-400 font-bold mb-2">
                      <span>PURGED / ERASED (DPDP SEC 12)</span>
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Marketing communication records</li>
                      <li>• Alternative underwriting scorecards</li>
                      <li>• Pre-approved loan offer triggers</li>
                      <li>• Telemarketing consent records</li>
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0e2127] border border-emerald-500/30">
                    <div className="flex items-center justify-between text-emerald-400 font-bold mb-2">
                      <span>STATUTORY LEGAL HOLD (5 YEARS)</span>
                      <Lock className="w-4 h-4" />
                    </div>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Sanction letter & signed loan agreement</li>
                      <li>• Repayment bank debit ledger & NDC receipt</li>
                      <li>• CKYC Identifier & Verified Aadhaar Hash</li>
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

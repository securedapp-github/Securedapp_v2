"use client";

import React, { useState } from "react";
import { 
  TrendingUp, 
  Lock, 
  CheckCircle2, 
  AlertTriangle, 
  RefreshCw, 
  Server, 
  Send, 
  KeyRound, 
  Smartphone, 
  Clock, 
  Database, 
  ArrowRight, 
  FileCheck, 
  Bell, 
  Sliders, 
  Check, 
  EyeOff 
} from "lucide-react";

export default function InteractiveStockBrokersConsentSimulator({ 
  activeTab = "sebi-vs-consent", 
  setActiveTab = () => {}, 
  onOpenChecklist = () => {} 
}) {
  // Tab 1 state: Toggles
  const [purposes, setPurposes] = useState({
    kycKra: true, // locked
    uccReporting: true, // locked
    tradeSettlement: true, // locked
    fiuReporting: true, // locked
    researchNudges: true,
    mfCrossSell: false,
    lasLending: false,
    behaviouralAnalytics: false,
  });

  // Tab 2 state: AP Mobile OTP
  const [clientMobile, setClientMobile] = useState("9820054321");
  const [clientName, setClientName] = useState("Rohan Mehta");
  const [apCode, setApCode] = useState("AP-MUM-842");
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState(["7", "3", "9", "1"]);
  const [otpVerified, setOtpVerified] = useState(false);
  const [receiptHash, setReceiptHash] = useState("");

  // Tab 3 state: Erasure on Closure
  const [closureStatus, setClosureStatus] = useState("idle"); // idle | processing | completed

  // Tab 4 state: Research Nudge Runtime Check
  const [nudgeConsentActive, setNudgeConsentActive] = useState(true);
  const [nudgeCheckStatus, setNudgeCheckStatus] = useState(null); // null | checking | allowed | blocked
  const [selectedStock, setSelectedStock] = useState("TCS Ltd - Long Buy Signal");

  const togglePurpose = (key) => {
    if (key === "kycKra" || key === "uccReporting" || key === "tradeSettlement" || key === "fiuReporting") return;
    setPurposes((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSendApOtp = () => {
    setOtpSent(true);
    setOtpVerified(false);
  };

  const handleVerifyApOtp = () => {
    setOtpVerified(true);
    const hash = "0x" + Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join("");
    setReceiptHash(hash);
  };

  const handleTriggerClosure = () => {
    setClosureStatus("processing");
    setTimeout(() => {
      setClosureStatus("completed");
    }, 1200);
  };

  const handleTestNudge = () => {
    setNudgeCheckStatus("checking");
    setTimeout(() => {
      if (nudgeConsentActive) {
        setNudgeCheckStatus("allowed");
      } else {
        setNudgeCheckStatus("blocked");
      }
    }, 450);
  };

  return (
    <div className="bg-white/90 dark:bg-[#001938]/90 border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-2xl transition-all">
      {/* Simulator Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-gray-200 dark:border-white/10 pb-4">
        <button
          type="button"
          onClick={() => setActiveTab("sebi-vs-consent")}
          className={`px-4 py-2.5 rounded-xl font-outfit text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 ${
            activeTab === "sebi-vs-consent"
              ? "bg-tertiary text-secondary shadow-md"
              : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10"
          }`}
        >
          <Sliders className="w-4 h-4" />
          <span>SEBI Duties vs Consent Toggles</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("ap-onboarding")}
          className={`px-4 py-2.5 rounded-xl font-outfit text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 ${
            activeTab === "ap-onboarding"
              ? "bg-tertiary text-secondary shadow-md"
              : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10"
          }`}
        >
          <Smartphone className="w-4 h-4" />
          <span>Authorised Person (AP) Mobile OTP</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("closure-erasure")}
          className={`px-4 py-2.5 rounded-xl font-outfit text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 ${
            activeTab === "closure-erasure"
              ? "bg-tertiary text-secondary shadow-md"
              : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10"
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>Account Closure: Erasure vs Legal Hold</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("nudge-runtime")}
          className={`px-4 py-2.5 rounded-xl font-outfit text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 ${
            activeTab === "nudge-runtime"
              ? "bg-tertiary text-secondary shadow-md"
              : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10"
          }`}
        >
          <Bell className="w-4 h-4" />
          <span>Research Nudge Runtime Check</span>
        </button>
      </div>

      {/* TAB 1: SEBI Mandates vs Consent Toggles */}
      {activeTab === "sebi-vs-consent" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <div>
              <h4 className="text-lg font-bold font-outfit text-secondary dark:text-white">
                Trading Client Consent Center (Web &amp; Mobile Trading App)
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-nunitoSans mt-1">
                SEBI and PMLA legal obligations are strictly locked to protect market execution. Commercial nudges and cross-selling offer granular, unbundled consent toggles.
              </p>
            </div>

            <div className="space-y-3">
              {/* Locked 1 */}
              <div className="p-3.5 rounded-2xl bg-amber-500/[0.06] border border-amber-500/20 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-secondary dark:text-white flex items-center gap-2">
                      <span>KYC Verification via KRA &amp; CKYC</span>
                      <span className="text-[10px] font-mono uppercase bg-amber-500/20 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded">
                        SEBI / PMLA Mandate
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Mandatory statutory onboarding · Section 7 Legitimate Use
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-gray-400">Locked Active</span>
              </div>

              {/* Locked 2 */}
              <div className="p-3.5 rounded-2xl bg-amber-500/[0.06] border border-amber-500/20 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-secondary dark:text-white flex items-center gap-2">
                      <span>UCC, Exchange &amp; Depository Reporting</span>
                      <span className="text-[10px] font-mono uppercase bg-amber-500/20 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded">
                        NSE / BSE / CDSL / NSDL
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Unique Client Code trade confirmation &amp; settlement delivery
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-gray-400">Locked Active</span>
              </div>

              {/* Togglable 1: Research Nudges */}
              <div 
                onClick={() => togglePurpose("researchNudges")}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  purposes.researchNudges 
                    ? "bg-tertiary/[0.06] border-tertiary/40" 
                    : "bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10"
                }`}
              >
                <div>
                  <div className="text-sm font-bold text-secondary dark:text-white flex items-center gap-2">
                    <span>Research Desk Algorithmic Stock Nudges</span>
                    <span className="text-[10px] font-mono uppercase bg-tertiary/20 text-tertiary px-2 py-0.5 rounded">
                      Consent Required
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Profiles portfolio holdings to send technical &amp; fundamental trade calls
                  </div>
                </div>
                <div className={`w-11 h-6 rounded-full transition-colors relative flex items-center px-1 ${
                  purposes.researchNudges ? "bg-tertiary" : "bg-gray-300 dark:bg-gray-700"
                }`}>
                  <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    purposes.researchNudges ? "translate-x-5" : "translate-x-0"
                  }`} />
                </div>
              </div>

              {/* Togglable 2: Cross-Sell Mutual Funds */}
              <div 
                onClick={() => togglePurpose("mfCrossSell")}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  purposes.mfCrossSell 
                    ? "bg-tertiary/[0.06] border-tertiary/40" 
                    : "bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10"
                }`}
              >
                <div>
                  <div className="text-sm font-bold text-secondary dark:text-white flex items-center gap-2">
                    <span>Mutual Funds &amp; SIP Cross-Sell Distribution</span>
                    <span className="text-[10px] font-mono uppercase bg-tertiary/20 text-tertiary px-2 py-0.5 rounded">
                      Unbundled
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Allows sharing KYC data with asset management partners (AMCs)
                  </div>
                </div>
                <div className={`w-11 h-6 rounded-full transition-colors relative flex items-center px-1 ${
                  purposes.mfCrossSell ? "bg-tertiary" : "bg-gray-300 dark:bg-gray-700"
                }`}>
                  <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    purposes.mfCrossSell ? "translate-x-5" : "translate-x-0"
                  }`} />
                </div>
              </div>

              {/* Togglable 3: Loans Against Securities (LAS) */}
              <div 
                onClick={() => togglePurpose("lasLending")}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  purposes.lasLending 
                    ? "bg-tertiary/[0.06] border-tertiary/40" 
                    : "bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10"
                }`}
              >
                <div>
                  <div className="text-sm font-bold text-secondary dark:text-white flex items-center gap-2">
                    <span>Loans Against Securities (LAS) Partner Offers</span>
                    <span className="text-[10px] font-mono uppercase bg-blue-500/20 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded">
                      Third-Party NBFC
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Offers instant credit against demat holdings via partner NBFC
                  </div>
                </div>
                <div className={`w-11 h-6 rounded-full transition-colors relative flex items-center px-1 ${
                  purposes.lasLending ? "bg-tertiary" : "bg-gray-300 dark:bg-gray-700"
                }`}>
                  <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    purposes.lasLending ? "translate-x-5" : "translate-x-0"
                  }`} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Real-Time API Payload Output */}
          <div className="lg:col-span-5 bg-gray-900 text-gray-200 rounded-2xl p-5 border border-white/10 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <span className="text-tertiary font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
                POST /v1/broker/consent-evaluate
              </span>
              <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-gray-300">
                SEBI CSCRF
              </span>
            </div>

            <pre suppressHydrationWarning className="overflow-x-auto text-[11px] leading-relaxed text-emerald-400">
{`{
  "client_ucc": "UCC-882193-MUM",
  "dp_demat_account": "12081600...3819",
  "sebi_statutory_duties": {
    "kra_ckyc_status": "VERIFIED",
    "exchange_reporting": "MANDATORY_DAILY",
    "contract_note_dispatch": "AUTOMATED_EOD",
    "fiu_ind_reporting": "PMLA_MANDATE"
  },
  "commercial_consent_state": {
    "research_nudges": ${purposes.researchNudges},
    "mutual_funds_cross_sell": ${purposes.mfCrossSell},
    "loans_against_securities": ${purposes.lasLending},
    "timestamp": "2026-10-17T06:00:00.000Z",
    "sha256_hash": "0x7a8c...291f"
  },
  "ddpi_separation": {
    "ddpi_signed": true,
    "ddpi_scope": "DEMAT_DEBIT_SETTLEMENT_ONLY",
    "dpdp_overlap": false
  }
}`}
            </pre>

            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-gray-400 flex items-center justify-between">
              <span>Section 6(10) Burden of Proof:</span>
              <span className="text-white font-semibold">VALIDATED &amp; SIGNED</span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Authorised Person (AP) Mobile OTP */}
      {activeTab === "ap-onboarding" && (
        <div className="space-y-6">
          <div className="max-w-2xl">
            <h4 className="text-lg font-bold font-outfit text-secondary dark:text-white">
              Authorised Person (AP) Field Onboarding &amp; Least-Privilege RBAC
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-nunitoSans mt-1">
              When sub-brokers and APs collect client data, SecureCMS sends an OTP directly to the client. Field-level masking ensures the AP cannot browse the client&apos;s full bank or portfolio book.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-secondary dark:text-white mb-1">
                  Client Mobile Number (for OTP Consent)
                </label>
                <input
                  type="text"
                  value={clientMobile}
                  onChange={(e) => setClientMobile(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-black/20 text-secondary dark:text-white outline-none font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-secondary dark:text-white mb-1">
                  Client Full Name
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-black/20 text-secondary dark:text-white outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-secondary dark:text-white mb-1">
                  SEBI Authorised Person (AP) Registration Code
                </label>
                <input
                  type="text"
                  value={apCode}
                  onChange={(e) => setApCode(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-black/20 text-secondary dark:text-white outline-none font-mono"
                />
              </div>

              <button
                type="button"
                onClick={handleSendApOtp}
                className="w-full py-2.5 bg-secondary dark:bg-white dark:text-secondary text-white font-bold font-outfit rounded-xl hover:opacity-90 transition-all text-xs flex items-center justify-center space-x-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{otpSent ? "Resend Consent OTP via SMS" : "Send Client Verification OTP"}</span>
              </button>
            </div>

            {/* OTP Flow & RBAC View */}
            <div className="p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-labelGray dark:text-gray-400">
                Direct Client Verification Journey
              </div>

              {otpSent ? (
                <div className="space-y-4 animate-fadeIn">
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-800 dark:text-emerald-300">
                    Consent OTP dispatched to <strong>+91 {clientMobile}</strong>. Client confirms specific data sharing with AP {apCode}.
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-2">
                      Enter Client Approval Code:
                    </label>
                    <div className="flex gap-2">
                      {otpCode.map((digit, idx) => (
                        <input
                          key={idx}
                          type="text"
                          maxLength={1}
                          readOnly
                          value={digit}
                          className="w-12 h-12 text-center text-lg font-bold font-mono rounded-xl border border-gray-300 dark:border-white/20 bg-white dark:bg-black/30 text-secondary dark:text-white"
                        />
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleVerifyApOtp}
                    disabled={otpVerified}
                    className="w-full py-2.5 bg-tertiary text-secondary font-bold font-outfit rounded-xl hover:bg-tertiary/90 transition-all text-xs flex items-center justify-center space-x-2 disabled:opacity-60"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{otpVerified ? "AP Client Consent Bound" : "Verify & Enforce AP Masking"}</span>
                  </button>

                  {otpVerified && (
                    <div className="p-3.5 rounded-xl bg-gray-900 text-gray-200 text-xs font-mono space-y-2 border border-emerald-500/40 animate-fadeIn">
                      <div className="text-tertiary font-bold flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5" />
                        <span>AP Field-Level RBAC Applied:</span>
                      </div>
                      <div className="text-[11px] text-gray-400 space-y-1">
                        <div>• PAN / Aadhaar: <span className="text-emerald-400">ABCDE****F (Masked)</span></div>
                        <div>• Bank Account: <span className="text-emerald-400">*******8912 (Masked)</span></div>
                        <div>• Demat Holdings: <span className="text-red-400">Access Restricted (Principle of Least Privilege)</span></div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-10 text-gray-400 text-xs">
                  Click &ldquo;Send Client Verification OTP&rdquo; to simulate AP partner onboarding.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Account Closure - Erasure vs Legal Hold */}
      {activeTab === "closure-erasure" && (
        <div className="space-y-6">
          <div className="max-w-2xl">
            <h4 className="text-lg font-bold font-outfit text-secondary dark:text-white">
              Trading &amp; Demat Account Closure (Section 12 Erasure vs SEBI/PMLA Retention)
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-nunitoSans mt-1">
              A closed account does not mean an empty database. SecureCMS automatically erases non-essential marketing and profiling data, while placing trade logs and contract notes under statutory legal hold.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-secondary dark:text-white font-outfit">
                  Simulate Client Demat &amp; Trading Account Closure
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Client: UCC-882193 · Account Closure Form Processed: Today
                </div>
              </div>

              <button
                type="button"
                onClick={handleTriggerClosure}
                disabled={closureStatus === "processing"}
                className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold font-outfit text-xs rounded-xl transition-all shadow-md flex items-center space-x-2 disabled:opacity-60"
              >
                <AlertTriangle className="w-4 h-4" />
                <span>
                  {closureStatus === "processing" ? "Executing Account Closure Shredding..." : "Execute Account Closure & DSR Erasure"}
                </span>
              </button>
            </div>

            {closureStatus !== "idle" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {/* Erased Data */}
                <div className="p-4 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/30 space-y-2">
                  <div className="text-xs font-bold text-emerald-800 dark:text-emerald-300 font-outfit flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Purged Instantly (DPDP Section 12 Fulfilled)</span>
                  </div>
                  <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1 list-disc list-inside">
                    <li>Research desk profiling &amp; watchlist clickstreams</li>
                    <li>Marketing SMS &amp; promotional email opt-in records</li>
                    <li>Mutual fund and insurance cross-sell partner tokens</li>
                    <li>Trading app behavioral telemetry &amp; push tokens</li>
                  </ul>
                  <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono mt-2">
                    Status: Permanent Cryptographic Erasure Verified
                  </div>
                </div>

                {/* Statutory Legal Hold */}
                <div className="p-4 rounded-xl bg-amber-500/[0.08] border border-amber-500/30 space-y-2">
                  <div className="text-xs font-bold text-amber-800 dark:text-amber-300 font-outfit flex items-center gap-1.5">
                    <Lock className="w-4 h-4 text-amber-500" />
                    <span>Statutory Legal Hold (SEBI / PMLA Mandate)</span>
                  </div>
                  <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1 list-disc list-inside">
                    <li>KRA / CKYC customer identification records</li>
                    <li>Exchange execution contract notes &amp; ledger balances</li>
                    <li>Dealing desk phone voice recordings</li>
                    <li>PMLA Rule 3(1) records (Retained for statutory period)</li>
                  </ul>
                  <div className="text-[10px] text-amber-700 dark:text-amber-300 font-mono mt-2 flex items-center justify-between">
                    <span>Legal Reason: SEBI Broker Regs &amp; PMLA</span>
                    <span className="font-bold">Audit Locked</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 4: Research Nudge Runtime Check */}
      {activeTab === "nudge-runtime" && (
        <div className="space-y-6">
          <div className="max-w-2xl">
            <h4 className="text-lg font-bold font-outfit text-secondary dark:text-white">
              Trading App Research Nudge &amp; Push Notification Runtime Validation
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-nunitoSans mt-1">
              Before an algorithmic stock recommendation or research alert is delivered, trading microservices query SecureCMS via API in sub-50ms. If consent was revoked, the nudge is blocked immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Simulation Controls */}
            <div className="p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-secondary dark:text-white mb-1">
                  Algorithmic Trade Call to Deliver:
                </label>
                <select
                  value={selectedStock}
                  onChange={(e) => setSelectedStock(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#002244] text-secondary dark:text-white outline-none"
                >
                  <option value="TCS Ltd - Long Buy Signal">TCS Ltd - Long Buy Signal (Breakout 4,150)</option>
                  <option value="HDFC Bank - Derivatives Call">HDFC Bank - 1,700 CE Momentum Call</option>
                  <option value="Smallcap Growth Basket">Curated Smallcap Growth Portfolio Basket</option>
                </select>
              </div>

              {/* Client Toggle */}
              <div className="p-3.5 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-secondary dark:text-white">
                    Client Research Nudge Consent Status
                  </div>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400">
                    {nudgeConsentActive ? "Consent is currently Active" : "Client Revoked Consent"}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setNudgeConsentActive(!nudgeConsentActive);
                    setNudgeCheckStatus(null);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    nudgeConsentActive 
                      ? "bg-tertiary text-secondary" 
                      : "bg-red-500/20 text-red-500 border border-red-500/30"
                  }`}
                >
                  {nudgeConsentActive ? "Active Opt-In" : "Revoked Opt-Out"}
                </button>
              </div>

              <button
                type="button"
                onClick={handleTestNudge}
                disabled={nudgeCheckStatus === "checking"}
                className="w-full py-2.5 bg-tertiary text-secondary font-bold font-outfit rounded-xl hover:bg-tertiary/90 transition-all text-xs flex items-center justify-center space-x-2 shadow-sm disabled:opacity-60"
              >
                <Bell className={`w-3.5 h-3.5 ${nudgeCheckStatus === "checking" ? "animate-spin" : ""}`} />
                <span>
                  {nudgeCheckStatus === "checking" ? "Evaluating API Runtime..." : "Trigger Push Notification Dispatch"}
                </span>
              </button>
            </div>

            {/* Runtime Response Output */}
            <div className="p-5 rounded-2xl bg-gray-900 text-gray-200 border border-white/10 font-mono text-xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px]">
                <span className="text-tertiary font-bold">API /v1/evaluate-nudge-delivery</span>
                <span className="text-gray-400">&lt; 38ms Latency</span>
              </div>

              {nudgeCheckStatus === "checking" && (
                <div className="py-8 text-center text-gray-400 text-xs animate-pulse">
                  Evaluating client UCC consent token across distributed cache...
                </div>
              )}

              {nudgeCheckStatus === "allowed" && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs">
                    <div className="font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>200 OK — NUDGE DISPATCHED</span>
                    </div>
                    <div className="text-[11px] mt-1 text-emerald-200">
                      Push notification delivered to trading app: &ldquo;{selectedStock}&rdquo;
                    </div>
                  </div>
                  <div className="text-[10px] text-gray-400">
                    Consent Proof Hash: 0x48a1...39c · Evaluation SLA: 31ms · Section 6 Compliant
                  </div>
                </div>
              )}

              {nudgeCheckStatus === "blocked" && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-300 text-xs">
                    <div className="font-bold flex items-center gap-1.5">
                      <EyeOff className="w-4 h-4 text-red-400" />
                      <span>403 BLOCKED — CONSENT REVOKED</span>
                    </div>
                    <div className="text-[11px] mt-1 text-red-200">
                      Push notification suppressed. Client has opted out of research nudges.
                    </div>
                  </div>
                  <div className="text-[10px] text-gray-400">
                    Suppression Action: Message dropped at gateway · Zero PII exposure · Section 6(10) Enforced
                  </div>
                </div>
              )}

              {nudgeCheckStatus === null && (
                <div className="py-8 text-center text-gray-400 text-xs">
                  Click &ldquo;Trigger Push Notification Dispatch&rdquo; to test real-time consent suppression.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

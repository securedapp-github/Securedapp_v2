"use client";

import React, { useState } from "react";
import { 
  CreditCard, 
  Smartphone, 
  ShieldCheck, 
  RefreshCw, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Landmark, 
  Lock, 
  ArrowRight, 
  Sliders, 
  Trash2, 
  FileText,
  Clock
} from "lucide-react";

export default function InteractiveFintechConsentSimulator() {
  const [activeTab, setActiveTab] = useState("app-flow"); // "app-flow" | "sync-telemetry" | "dsr-pmla"
  
  // App Consent States
  const [upiEssential, setUpiEssential] = useState(true); // Section 7 Legitimate Use
  const [creditCrossSell, setCreditCrossSell] = useState(false); // Section 6 Opt-In
  const [wealthAnalytics, setWealthAnalytics] = useState(false); // Section 6 Opt-In
  const [bureauPull, setBureauPull] = useState(false); // RBI explicit consent
  const [syncStatus, setSyncStatus] = useState("Synced (Real-Time)");
  const [syncLogs, setSyncLogs] = useState([
    { id: 1, time: "10:14:02.112", event: "UPI Transaction Initiated", basis: "Section 7 Legitimate Use", dest: "PSP Bank / NPCI", status: "Executed" },
    { id: 2, time: "10:14:02.240", event: "Notice Displayed (English & Hindi)", basis: "Section 5(3)", dest: "App Client", status: "Rendered" }
  ]);

  // DSR State
  const [erasureState, setErasureState] = useState("idle"); // "idle" | "evaluating" | "erased"

  const toggleConsent = (type, currentVal) => {
    const newVal = !currentVal;
    const timestamp = new Date().toISOString().split("T")[1].slice(0, 12);

    if (type === "credit") {
      setCreditCrossSell(newVal);
      logEvent(
        timestamp,
        newVal ? "Opt-in: Pre-Approved Credit Offers" : "Revocation: Credit Cross-Sell Suppressed",
        "Section 6(1) & 6(4)",
        "Partner NBFC Underwriting Hub",
        newVal ? "Active" : "Suppressed (<65ms)"
      );
    } else if (type === "wealth") {
      setWealthAnalytics(newVal);
      logEvent(
        timestamp,
        newVal ? "Opt-in: Wealth Advisory Profiling" : "Revocation: Profiling Discontinued",
        "Section 6(1)",
        "WealthTech RIA Service",
        newVal ? "Active" : "Suppressed (<50ms)"
      );
    } else if (type === "bureau") {
      setBureauPull(newVal);
      logEvent(
        timestamp,
        newVal ? "Borrower OTP Verified: Bureau Pull Permitted" : "Bureau Pull Consent Expired / Revoked",
        "RBI Digital Lending Directions 2025",
        "CIBIL / Experian Gateway",
        newVal ? "Authorized" : "Revoked"
      );
    }
  };

  const logEvent = (time, event, basis, dest, status) => {
    setSyncStatus("Pushing Update...");
    setTimeout(() => {
      setSyncLogs(prev => [
        { id: Date.now(), time, event, basis, dest, status },
        ...prev.slice(0, 5)
      ]);
      setSyncStatus("Synced (Real-Time)");
    }, 280);
  };

  const handleSimulateErasure = () => {
    setErasureState("evaluating");
    setTimeout(() => {
      setErasureState("erased");
      const timestamp = new Date().toISOString().split("T")[1].slice(0, 12);
      logEvent(timestamp, "DSR Erasure Request Processed", "DPDP Sec 12 vs PMLA Sec 12", "All Downstream Core Systems", "Partial Erasure with Legal Hold");
    }, 800);
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
            Fintech Multi-Product Consent & Partner Sync Engine
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            Experience unbundled consent isolation, RBI digital lending rules, and sub-100ms partner bank sync.
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex bg-[#071012] p-1 rounded-xl border border-[#1a3842] self-start md:self-auto">
          <button
            onClick={() => setActiveTab("app-flow")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "app-flow"
                ? "bg-tertiary text-secondary shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            In-App Preference Center
          </button>
          <button
            onClick={() => setActiveTab("sync-telemetry")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "sync-telemetry"
                ? "bg-tertiary text-secondary shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Partner Bank Telemetry
          </button>
          <button
            onClick={() => setActiveTab("dsr-pmla")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "dsr-pmla"
                ? "bg-tertiary text-secondary shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            DSR vs PMLA Hold
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="mt-6">
        {activeTab === "app-flow" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Mobile App Mockup */}
            <div className="lg:col-span-5 bg-[#081316] border border-[#1b3d47] rounded-2xl p-5 shadow-inner">
              <div className="flex items-center justify-between pb-3 border-b border-[#1a3842] mb-4">
                <div className="flex items-center space-x-2">
                  <Smartphone className="w-4 h-4 text-tertiary" />
                  <span className="text-xs font-mono font-semibold text-white">BharatPay Mobile App</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                  v4.18 (SDK Active)
                </span>
              </div>

              <div className="space-y-4">
                {/* Product 1: UPI Transaction */}
                <div className="p-3.5 rounded-xl bg-[#0e2127] border border-[#204955]">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <CreditCard className="w-4 h-4 text-tertiary" />
                        <h4 className="text-sm font-bold text-white">UPI Payment Processing</h4>
                      </div>
                      <p className="text-xs text-gray-300 mt-1">
                        Executes user-triggered fund transfers via PSP bank and NPCI network.
                      </p>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono whitespace-nowrap">
                      Sec 7 Legitimate Use
                    </span>
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-[#1a3842] flex items-center justify-between text-xs text-gray-400">
                    <span>Legal Basis: User-initiated transaction</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" /> Essential
                    </span>
                  </div>
                </div>

                {/* Product 2: Credit Cross-Sell */}
                <div className="p-3.5 rounded-xl bg-[#0e2127] border border-[#204955]">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">Pre-Approved Loan Offers</h4>
                      <p className="text-xs text-gray-300 mt-1">
                        Use spending habits and transaction amounts to calculate instant credit limits.
                      </p>
                    </div>
                    <button
                      onClick={() => toggleConsent("credit", creditCrossSell)}
                      className={`relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                        creditCrossSell ? "bg-tertiary" : "bg-gray-700"
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-secondary shadow ring-0 transition duration-200 ease-in-out ${
                          creditCrossSell ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-[#1a3842] flex items-center justify-between text-[11px] text-gray-400">
                    <span>Section 6 Unbundled Opt-In</span>
                    <span className={creditCrossSell ? "text-emerald-400" : "text-amber-400"}>
                      {creditCrossSell ? "Consent Granted" : "Opted Out"}
                    </span>
                  </div>
                </div>

                {/* Product 3: Bureau Pull */}
                <div className="p-3.5 rounded-xl bg-[#0e2127] border border-[#204955]">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">Credit Bureau Pull (CIBIL)</h4>
                      <p className="text-xs text-gray-300 mt-1">
                        Standalone permission to fetch CIR score for loan eligibility check.
                      </p>
                    </div>
                    <button
                      onClick={() => toggleConsent("bureau", bureauPull)}
                      className={`relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                        bureauPull ? "bg-tertiary" : "bg-gray-700"
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-secondary shadow ring-0 transition duration-200 ease-in-out ${
                          bureauPull ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-[#1a3842] flex items-center justify-between text-[11px] text-gray-400">
                    <span>RBI 2025 Digital Lending Rule</span>
                    <span className={bureauPull ? "text-emerald-400" : "text-amber-400"}>
                      {bureauPull ? "Authorized (OTP Validated)" : "No Bureau Access"}
                    </span>
                  </div>
                </div>

                {/* Product 4: Wealth Analytics */}
                <div className="p-3.5 rounded-xl bg-[#0e2127] border border-[#204955]">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">Wealth Advisory & SIP Insights</h4>
                      <p className="text-xs text-gray-300 mt-1">
                        Share cashflow metrics with partner SEBI RIA for mutual fund recommendations.
                      </p>
                    </div>
                    <button
                      onClick={() => toggleConsent("wealth", wealthAnalytics)}
                      className={`relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                        wealthAnalytics ? "bg-tertiary" : "bg-gray-700"
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-secondary shadow ring-0 transition duration-200 ease-in-out ${
                          wealthAnalytics ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-[#1a3842] flex items-center justify-between text-[11px] text-gray-400">
                    <span>Third-Party Partner Consent</span>
                    <span className={wealthAnalytics ? "text-emerald-400" : "text-amber-400"}>
                      {wealthAnalytics ? "Data Sharing Active" : "Blocked"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Architectural Explanation & Live State */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-5 rounded-2xl bg-[#081316] border border-[#1b3d47]">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-tertiary" />
                    Statutory Consent Boundary Architecture
                  </h4>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-tertiary/10 text-tertiary border border-tertiary/20 font-mono">
                    {syncStatus}
                  </span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Notice how user-initiated payment processing operates unhindered under <strong>Section 7 Legitimate Use</strong>, eliminating user checkout drop-offs. In contrast, <strong>Credit Cross-Sell</strong> and <strong>Bureau Pulls</strong> strictly require unbundled opt-in switches under Section 6 and RBI 2025 guidelines.
                </p>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="p-3 rounded-xl bg-[#0e2127] border border-[#204955]">
                    <div className="text-[11px] uppercase tracking-wider text-gray-400">Section 7 Status</div>
                    <div className="text-sm font-bold text-emerald-400 mt-0.5">Autonomous Execution</div>
                    <div className="text-[10px] text-gray-400 mt-1">No consent friction for payments</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0e2127] border border-[#204955]">
                    <div className="text-[11px] uppercase tracking-wider text-gray-400">Section 6 Audit Hash</div>
                    <div className="text-sm font-mono font-bold text-tertiary mt-0.5">sha256:4f8e...7b2a</div>
                    <div className="text-[10px] text-gray-400 mt-1">Tamper-proof verifiable receipt</div>
                  </div>
                </div>
              </div>

              {/* Real-time downstream propagation */}
              <div className="p-5 rounded-2xl bg-[#081316] border border-[#1b3d47]">
                <h5 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                  Real-Time Downstream Propagations
                </h5>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-[#0e2127]">
                    <span className="text-gray-300">Partner Bank (Co-Branded Card Hub)</span>
                    <span className="font-mono text-emerald-400">mTLS Webhook: 200 OK (42ms)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-[#0e2127]">
                    <span className="text-gray-300">Marketing & Notification Engine (CleverTap / MoEngage)</span>
                    <span className="font-mono text-tertiary">
                      {creditCrossSell ? "Suppression: Inactive" : "Suppression: Active (Pushed)"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-[#0e2127]">
                    <span className="text-gray-300">Lending Underwriting Engine (LOS)</span>
                    <span className="font-mono text-gray-300">
                      {bureauPull ? "Bureau Pull: Permitted" : "Bureau Pull: Blocked"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "sync-telemetry" && (
          <div className="p-5 rounded-2xl bg-[#081316] border border-[#1b3d47] space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Landmark className="w-5 h-5 text-tertiary" />
                <h4 className="text-base font-bold text-white">
                  Partner Bank & Regulated Entity (RE) Telemetry Log
                </h4>
              </div>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Live Event Stream
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-[#1b3d47] text-gray-400">
                    <th className="py-2.5 px-3">Time</th>
                    <th className="py-2.5 px-3">Event Detail</th>
                    <th className="py-2.5 px-3">Regulatory Basis</th>
                    <th className="py-2.5 px-3">Destination System</th>
                    <th className="py-2.5 px-3 text-right">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#132d34]">
                  {syncLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-[#0e2127]/60 transition-colors">
                      <td className="py-2.5 px-3 text-gray-400">{log.time}</td>
                      <td className="py-2.5 px-3 text-white font-medium">{log.event}</td>
                      <td className="py-2.5 px-3 text-tertiary">{log.basis}</td>
                      <td className="py-2.5 px-3 text-gray-300">{log.dest}</td>
                      <td className="py-2.5 px-3 text-right">
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {log.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-400 italic pt-2">
              SecureCMS guarantees sub-100ms sync latency to partner banks via mutual TLS (mTLS) with cryptographically signed payload receipts.
            </p>
          </div>
        )}

        {activeTab === "dsr-pmla" && (
          <div className="p-5 rounded-2xl bg-[#081316] border border-[#1b3d47] space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-tertiary" />
                  Section 12 Erasure vs PMLA 5-Year Legal Hold
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  What happens when a fintech borrower requests complete data erasure?
                </p>
              </div>

              {erasureState === "idle" && (
                <button
                  onClick={handleSimulateErasure}
                  className="px-4 py-2 bg-red-600/80 hover:bg-red-600 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-lg"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Simulate User Erasure Request
                </button>
              )}
            </div>

            {erasureState === "evaluating" && (
              <div className="py-6 text-center text-xs text-tertiary flex items-center justify-center gap-2">
                <RefreshCw className="w-4 h-4 animate-spin" /> Evaluating retention rules across statutory registers...
              </div>
            )}

            {erasureState === "erased" && (
              <div className="space-y-4 animate-fadeIn">
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Statutory Conflict Resolved Automatically:</strong> The user's marketing and profiling data were deleted immediately. However, transaction logs and KYC records are placed under a mandatory 5-Year Legal Hold under PMLA Section 12 & RBI KYC Master Directions.
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-[#0e2127] border border-red-500/30">
                    <div className="flex items-center justify-between text-red-400 font-bold mb-2">
                      <span>PURGED / ERASED IMMEDIATELY</span>
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <ul className="space-y-1.5 text-gray-300">
                      <li>• Marketing communication profiles</li>
                      <li>• Behavioral clickstream & analytics logs</li>
                      <li>• Cross-sell credit recommendation scores</li>
                      <li>• Push notification device tokens</li>
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0e2127] border border-emerald-500/30">
                    <div className="flex items-center justify-between text-emerald-400 font-bold mb-2">
                      <span>STATUTORY LEGAL HOLD (5 YEARS)</span>
                      <Lock className="w-4 h-4" />
                    </div>
                    <ul className="space-y-1.5 text-gray-300">
                      <li>• CKYC Identifier & ID proof hashes (PMLA §12)</li>
                      <li>• Core transaction ledgers & debit records</li>
                      <li>• RBI payment settlement logs (2018 Directive)</li>
                      <li>• Evidentiary audit log release date: 2031-10-15</li>
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

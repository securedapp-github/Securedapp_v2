"use client";

import React, { useState } from "react";
import { 
  Users, 
  ShieldCheck, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Sliders, 
  Lock, 
  FileText, 
  Trash2, 
  RefreshCw,
  Clock,
  Briefcase,
  Camera,
  HeartPulse
} from "lucide-react";

export default function InteractiveHRConsentSimulator() {
  const [activeTab, setActiveTab] = useState("lawful-register"); // "lawful-register" | "talent-pool" | "employee-prefs" | "exit-clearance"

  // Mode 2: Talent Pool State
  const [candidateConsented, setCandidateConsented] = useState(true);
  const [retentionPeriod, setRetentionPeriod] = useState("12 Months");

  // Mode 3: Employee Preferences
  const [wellnessOptIn, setWellnessOptIn] = useState(false);
  const [socialPhotosOptIn, setSocialPhotosOptIn] = useState(false);
  const [alumniOptIn, setAlumniOptIn] = useState(true);

  // Mode 4: Exit Clearance
  const [clearanceState, setClearanceState] = useState("idle");

  const handleSimulateClearance = () => {
    setClearanceState("evaluating");
    setTimeout(() => {
      setClearanceState("completed");
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
            HR Lawful-Basis Register & Employee Preference Sandbox
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            Explore Section 7(i) legitimate employment uses, candidate talent pool auto-expiry, and statutory tax holds.
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex bg-[#071012] p-1 rounded-xl border border-[#1a3842] self-start md:self-auto overflow-x-auto max-w-full">
          <button
            onClick={() => setActiveTab("lawful-register")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
              activeTab === "lawful-register"
                ? "bg-tertiary text-secondary shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Lawful Basis Register
          </button>
          <button
            onClick={() => setActiveTab("talent-pool")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
              activeTab === "talent-pool"
                ? "bg-tertiary text-secondary shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Talent Pool Auto-Expiry
          </button>
          <button
            onClick={() => setActiveTab("employee-prefs")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
              activeTab === "employee-prefs"
                ? "bg-tertiary text-secondary shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Employee Preferences
          </button>
          <button
            onClick={() => setActiveTab("exit-clearance")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
              activeTab === "exit-clearance"
                ? "bg-tertiary text-secondary shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Exit Clearance Hold
          </button>
        </div>
      </div>

      {/* Main Tab Area */}
      <div className="mt-6">
        {activeTab === "lawful-register" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Column 1: Section 7(i) Legitimate Use */}
            <div className="p-5 rounded-2xl bg-[#081316] border border-emerald-500/30 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#1b3d47]">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <h4 className="text-sm font-bold text-white">Section 7(i) Employment Legitimate Use</h4>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                  No Consent Required
                </span>
              </div>
              <p className="text-xs text-gray-300">
                Processing is lawful by operation of statute. Employees cannot opt out of these core duties, but employers must maintain reasonable security safeguards and grievance channels.
              </p>
              <div className="space-y-2.5 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-[#0e2127] border border-[#204955] flex items-center justify-between">
                  <span>Payroll, Salary & Statutory PF/ESI</span>
                  <span className="text-emerald-400 font-bold">Sec 7(i) Covered</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0e2127] border border-[#204955] flex items-center justify-between">
                  <span>Biometric / RFID Office Attendance</span>
                  <span className="text-emerald-400 font-bold">Sec 7(i) Covered</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0e2127] border border-[#204955] flex items-center justify-between">
                  <span>DLP Email & Asset Leakage Monitoring</span>
                  <span className="text-emerald-400 font-bold">Loss Prevention</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0e2127] border border-[#204955] flex items-center justify-between">
                  <span>Group Health Insurance (Employee Benefit)</span>
                  <span className="text-emerald-400 font-bold">Requested Benefit</span>
                </div>
              </div>
            </div>

            {/* Column 2: Section 6 Explicit Consent Required */}
            <div className="p-5 rounded-2xl bg-[#081316] border border-amber-500/30 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#1b3d47]">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                  <h4 className="text-sm font-bold text-white">Section 6 Mandatory Consent Required</h4>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-mono">
                  Consent Opt-In
                </span>
              </div>
              <p className="text-xs text-gray-300">
                Non-employment and secondary processing. Bundling these into the appointment letter is legally void under DPDP Section 6(1). Standalone opt-ins are mandatory.
              </p>
              <div className="space-y-2.5 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-[#0e2127] border border-[#204955] flex items-center justify-between">
                  <span>Talent Pool Retention of Rejected Resumes</span>
                  <span className="text-amber-400 font-bold">Mandatory Opt-In</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0e2127] border border-[#204955] flex items-center justify-between">
                  <span>Employee Photos for Marketing / Socials</span>
                  <span className="text-amber-400 font-bold">Mandatory Opt-In</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0e2127] border border-[#204955] flex items-center justify-between">
                  <span>Optional Wellness Apps (Mental Health)</span>
                  <span className="text-amber-400 font-bold">Mandatory Opt-In</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0e2127] border border-[#204955] flex items-center justify-between">
                  <span>Alumni Network & Rehire Marketing</span>
                  <span className="text-amber-400 font-bold">Mandatory Opt-In</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "talent-pool" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-5 bg-[#081316] border border-[#1b3d47] rounded-2xl p-5 shadow-inner space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#1a3842]">
                <div className="flex items-center space-x-2">
                  <Briefcase className="w-4 h-4 text-tertiary" />
                  <span className="text-xs font-mono font-semibold text-white">ATS Rejection Workflow</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono">
                  Candidate ID #CAN-7819
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0e2127] border border-[#204955]">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">Retain CV in Future Talent Pool</h4>
                    <p className="text-xs text-gray-300 mt-0.5">
                      Allow talent acquisition to contact candidate for upcoming engineering roles.
                    </p>
                  </div>
                  <button
                    onClick={() => setCandidateConsented(!candidateConsented)}
                    className={`relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                      candidateConsented ? "bg-tertiary" : "bg-gray-700"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-secondary shadow ring-0 transition duration-200 ease-in-out ${
                        candidateConsented ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
                <div className="mt-3 pt-2 border-t border-[#1a3842] flex items-center justify-between text-xs text-gray-400">
                  <span>Retention Limit:</span>
                  <select
                    value={retentionPeriod}
                    onChange={(e) => setRetentionPeriod(e.target.value)}
                    className="bg-[#071317] border border-[#1b3d47] rounded px-2 py-1 text-tertiary font-mono"
                  >
                    <option value="6 Months">6 Months</option>
                    <option value="12 Months">12 Months</option>
                    <option value="24 Months">24 Months</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 p-5 rounded-2xl bg-[#081316] border border-[#1b3d47] space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-tertiary" />
                Automated Purge & Lifecycle Telemetry
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                When a candidate declines or retention expires, SecureCMS invokes the ATS webhook to cryptographically overwrite resume documents and delete candidate contact records.
              </p>

              <div className="p-3.5 rounded-xl bg-[#0e2127] border border-[#204955] text-xs font-mono space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Consent State:</span>
                  <span className={candidateConsented ? "text-emerald-400 font-bold" : "text-red-400 font-bold"}>
                    {candidateConsented ? "Affirmative Opt-In Recorded" : "Opt-Out (Purge Scheduled)"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Statutory Expiry:</span>
                  <span className="text-tertiary font-bold">
                    {candidateConsented ? `Scheduled Purge: +${retentionPeriod}` : "Immediate (24hr SLA)"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Notice Language:</span>
                  <span className="text-white">English + Marathi (Sec 5(3))</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">ATS Connector:</span>
                  <span className="text-emerald-400">Darwinbox / Greenhouse (Synced)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "employee-prefs" && (
          <div className="p-5 rounded-2xl bg-[#081316] border border-[#1b3d47] space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-tertiary" />
                  Self-Service Employee Preference Center
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  Employees have full autonomous control over optional corporate programmes under Section 6(4).
                </p>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Staff ID #EMP-4102
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#0e2127] border border-[#204955] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <HeartPulse className="w-4 h-4 text-tertiary" />
                    <span>Wellness App</span>
                  </div>
                  <button
                    onClick={() => setWellnessOptIn(!wellnessOptIn)}
                    className={`relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                      wellnessOptIn ? "bg-tertiary" : "bg-gray-700"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-secondary shadow ring-0 transition duration-200 ease-in-out ${
                        wellnessOptIn ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
                <p className="text-xs text-gray-400">
                  Share anonymized steps & health metrics with third-party fitness vendor.
                </p>
                <div className="text-[11px] font-mono text-tertiary">
                  {wellnessOptIn ? "Sync Active" : "Data Sharing Blocked"}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0e2127] border border-[#204955] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <Camera className="w-4 h-4 text-tertiary" />
                    <span>Social Media Photos</span>
                  </div>
                  <button
                    onClick={() => setSocialPhotosOptIn(!socialPhotosOptIn)}
                    className={`relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                      socialPhotosOptIn ? "bg-tertiary" : "bg-gray-700"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-secondary shadow ring-0 transition duration-200 ease-in-out ${
                        socialPhotosOptIn ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
                <p className="text-xs text-gray-400">
                  Permit internal hackathon & team photos on corporate LinkedIn and website.
                </p>
                <div className="text-[11px] font-mono text-tertiary">
                  {socialPhotosOptIn ? "Marketing Permitted" : "Consent Withheld"}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0e2127] border border-[#204955] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <Users className="w-4 h-4 text-tertiary" />
                    <span>Alumni Network</span>
                  </div>
                  <button
                    onClick={() => setAlumniOptIn(!alumniOptIn)}
                    className={`relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                      alumniOptIn ? "bg-tertiary" : "bg-gray-700"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-secondary shadow ring-0 transition duration-200 ease-in-out ${
                        alumniOptIn ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
                <p className="text-xs text-gray-400">
                  Receive post-exit alumni newsletters, events, and rehire opportunities.
                </p>
                <div className="text-[11px] font-mono text-tertiary">
                  {alumniOptIn ? "Subscribed" : "Opted Out"}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "exit-clearance" && (
          <div className="p-5 rounded-2xl bg-[#081316] border border-[#1b3d47] space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-tertiary" />
                  Exit Clearance: Erasure vs Statutory Tax/PF Holds
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  Exiting employee demands complete erasure of personal data under Section 12.
                </p>
              </div>

              {clearanceState === "idle" && (
                <button
                  onClick={handleSimulateClearance}
                  className="px-4 py-2 bg-red-600/80 hover:bg-red-600 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-lg"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Simulate Exiting Employee Erasure
                </button>
              )}
            </div>

            {clearanceState === "evaluating" && (
              <div className="py-6 text-center text-xs text-tertiary flex items-center justify-center gap-2">
                <RefreshCw className="w-4 h-4 animate-spin" /> Cross-referencing EPF Act, Gratuity Act, and Income Tax Act...
              </div>
            )}

            {clearanceState === "completed" && (
              <div className="space-y-4 animate-fadeIn">
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Dual-Track Disposition Enforced:</strong> Optional wellness and candidate records purged immediately. Core payroll, tax returns, and PF records locked under statutory 7-year retention mandated by the Income Tax Act & EPF Rules.
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-[#0e2127] border border-red-500/30">
                    <div className="flex items-center justify-between text-red-400 font-bold mb-2">
                      <span>PURGED / ERASED (SEC 12)</span>
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Peer reviews & 360 feedback notes</li>
                      <li>• Laptop webcam/IT activity logs</li>
                      <li>• Emergency contact phone numbers</li>
                      <li>• Corporate wellness telemetry</li>
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0e2127] border border-emerald-500/30">
                    <div className="flex items-center justify-between text-emerald-400 font-bold mb-2">
                      <span>STATUTORY LEGAL HOLD (7 YEARS)</span>
                      <Lock className="w-4 h-4" />
                    </div>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Form 16, TDS & tax filing records</li>
                      <li>• Provident Fund (UAN) remittances</li>
                      <li>• Gratuity settlement calculation ledgers</li>
                      <li>• Statutory Release Date: 2033-10-15</li>
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => setClearanceState("idle")}
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

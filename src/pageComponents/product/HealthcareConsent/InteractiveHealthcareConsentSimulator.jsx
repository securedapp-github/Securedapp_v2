"use client";

import React, { useState } from "react";
import { 
  HeartPulse, 
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
  Hospital,
  Clock,
  Sparkles
} from "lucide-react";

export default function InteractiveHealthcareConsentSimulator() {
  const [activeTab, setActiveTab] = useState("patient-admission"); // "patient-admission" | "emergency-override" | "tpa-redactor" | "nmc-retention"

  // Mode 1: Admission States
  const [tpaConsent, setTpaConsent] = useState(true);
  const [researchConsent, setResearchConsent] = useState(false);
  const [whatsappReminders, setWhatsappReminders] = useState(true);

  // Mode 2: Emergency Override
  const [emergencyActive, setEmergencyActive] = useState(false);
  const [emergencyLog, setEmergencyLog] = useState(null);

  // Mode 3: TPA Redaction
  const [redactionActive, setRedactionActive] = useState(true);

  // Mode 4: Erasure State
  const [erasureState, setErasureState] = useState("idle");

  const handleTriggerEmergency = () => {
    setEmergencyActive(true);
    setEmergencyLog({
      timestamp: new Date().toLocaleTimeString(),
      doctor: "Dr. Arvind Swaminathan (Reg #MC-44102)",
      triage: "Code Red: Polytrauma, Unconscious, Immediate Surgery Required",
      basis: "DPDP Act 2023, Section 7(f) (Threat to Life or Immediate Threat to Health)",
      status: "Emergency Override Active (Evidentiary Log Sealed)"
    });
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
            Hospital Patient Consent, ER Override & TPA Field Redactor
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            Simulate OPD intake, Section 7(f) trauma emergency overrides, TPA claim field-limiting, and NMC legal holds.
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex bg-[#071012] p-1 rounded-xl border border-[#1a3842] self-start md:self-auto overflow-x-auto max-w-full">
          <button
            onClick={() => setActiveTab("patient-admission")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
              activeTab === "patient-admission"
                ? "bg-tertiary text-secondary shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            OPD / IPD Admission
          </button>
          <button
            onClick={() => setActiveTab("emergency-override")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
              activeTab === "emergency-override"
                ? "bg-tertiary text-secondary shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Emergency Room Override
          </button>
          <button
            onClick={() => setActiveTab("tpa-redactor")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
              activeTab === "tpa-redactor"
                ? "bg-tertiary text-secondary shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            TPA / Insurer Limiting
          </button>
          <button
            onClick={() => setActiveTab("nmc-retention")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
              activeTab === "nmc-retention"
                ? "bg-tertiary text-secondary shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            NMC Retention Hold
          </button>
        </div>
      </div>

      {/* Main Tab Area */}
      <div className="mt-6">
        {activeTab === "patient-admission" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Patient OPD Kiosk View */}
            <div className="lg:col-span-5 bg-[#081316] border border-[#1b3d47] rounded-2xl p-5 shadow-inner space-y-3.5">
              <div className="flex items-center justify-between pb-3 border-b border-[#1a3842]">
                <div className="flex items-center space-x-2">
                  <Hospital className="w-4 h-4 text-tertiary" />
                  <span className="text-xs font-mono font-semibold text-white">OPD Registration Station</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                  UHID #2026-90412
                </span>
              </div>

              {/* Core Medical Care: Locked */}
              <div className="p-3.5 rounded-xl bg-[#0e2127] border border-[#204955]">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">Diagnosis & Clinical Treatment</h4>
                    <p className="text-xs text-gray-300 mt-0.5">
                      Doctor consultation, vital signs recording, laboratory requisitions.
                    </p>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono whitespace-nowrap">
                    Sec 7(a) Care Sought
                  </span>
                </div>
                <div className="mt-2 pt-2 border-t border-[#1a3842] flex items-center justify-between text-[11px] text-gray-400 font-mono">
                  <span>Standard Clinical Basis</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Essential Care
                  </span>
                </div>
              </div>

              {/* TPA Sharing Consent */}
              <div className="p-3.5 rounded-xl bg-[#0e2127] border border-[#204955]">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">Insurance / TPA Cashless Claim</h4>
                    <p className="text-xs text-gray-300 mt-0.5">
                      Share discharge summary and bill with Star Health / Medi Assist.
                    </p>
                  </div>
                  <button
                    onClick={() => setTpaConsent(!tpaConsent)}
                    className={`relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                      tpaConsent ? "bg-tertiary" : "bg-gray-700"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-secondary shadow ring-0 transition duration-200 ease-in-out ${
                        tpaConsent ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
                <div className="mt-2 pt-2 border-t border-[#1a3842] flex items-center justify-between text-[11px] text-gray-400 font-mono">
                  <span>Section 6 Unbundled Gate</span>
                  <span className={tpaConsent ? "text-emerald-400 font-bold" : "text-amber-400"}>
                    {tpaConsent ? "TPA Authorized" : "Self-Pay Route Only"}
                  </span>
                </div>
              </div>

              {/* Research Consent */}
              <div className="p-3.5 rounded-xl bg-[#0e2127] border border-[#204955]">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">Clinical Research & Genomic Registry</h4>
                    <p className="text-xs text-gray-300 mt-0.5">
                      Contribute de-identified tumor samples to ICMR oncology study.
                    </p>
                  </div>
                  <button
                    onClick={() => setResearchConsent(!researchConsent)}
                    className={`relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                      researchConsent ? "bg-tertiary" : "bg-gray-700"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-secondary shadow ring-0 transition duration-200 ease-in-out ${
                        researchConsent ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
                <div className="mt-2 pt-2 border-t border-[#1a3842] flex items-center justify-between text-[11px] text-gray-400 font-mono">
                  <span>Strict Standalone Opt-In</span>
                  <span className={researchConsent ? "text-emerald-400 font-bold" : "text-amber-400"}>
                    {researchConsent ? "Enrolled in Study" : "Excluded from Research"}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Hospital EMR Telemetry */}
            <div className="lg:col-span-7 p-5 rounded-2xl bg-[#081316] border border-[#1b3d47] space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-tertiary" />
                Hospital EMR & HIS Downstream Sync
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Notice that diagnosis and treatment proceed immediately without impeding clinical queues. In contrast, research enrolment and insurance data sharing maintain strictly unbundled toggles.
              </p>

              <div className="p-4 rounded-xl bg-[#0e2127] border border-[#204955] text-xs font-mono space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Notice Delivery:</span>
                  <span className="text-white">Tamil + English (Sec 5(3))</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cryptographic Receipt:</span>
                  <span className="text-tertiary">sha256:772a...991c (Tamper-Proof)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">HIS / EMR Webhook:</span>
                  <span className="text-emerald-400">Epic / Cerner FHIR (Synced: 34ms)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">ABDM / ABHA Linkage:</span>
                  <span className="text-blue-400">ABHA Linked (#91-2091-****)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "emergency-override" && (
          <div className="p-5 rounded-2xl bg-[#081316] border border-[#1b3d47] space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Activity className="w-5 h-5 text-red-400" />
                  Section 7(f) Emergency Room Override Simulator
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  When a patient arrives unconscious or suffering severe trauma, life-saving care overrides prior consent.
                </p>
              </div>

              {!emergencyActive && (
                <button
                  onClick={handleTriggerEmergency}
                  className="px-4 py-2.5 bg-red-600 hover:bg-red-500 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-lg"
                >
                  <Activity className="w-4 h-4 animate-pulse" />
                  <span>Trigger Code Red Emergency Admission</span>
                </button>
              )}
            </div>

            {emergencyActive && emergencyLog && (
              <div className="space-y-4 animate-fadeIn">
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-xs flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Emergency Processing Lawfully Enacted:</strong> Prior consent waived under Section 7(f) of the DPDP Act 2023. Treatment records, CT scans, and blood transfusions proceed immediately. SecureCMS seals the clinician justification log for evidentiary defense.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0e2127] border border-[#204955] text-xs font-mono space-y-2">
                  <div className="flex justify-between text-gray-300">
                    <span className="text-gray-400">Timestamp:</span>
                    <span className="text-white">{emergencyLog.timestamp}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span className="text-gray-400">Admitting Doctor:</span>
                    <span className="text-white font-bold">{emergencyLog.doctor}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span className="text-gray-400">Clinical Triage:</span>
                    <span className="text-amber-400">{emergencyLog.triage}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span className="text-gray-400">Statutory Shield:</span>
                    <span className="text-emerald-400 font-bold">{emergencyLog.basis}</span>
                  </div>
                </div>

                <button
                  onClick={() => setEmergencyActive(false)}
                  className="text-xs text-tertiary hover:underline flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" /> Reset Emergency Simulation
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === "tpa-redactor" && (
          <div className="p-5 rounded-2xl bg-[#081316] border border-[#1b3d47] space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <EyeOff className="w-5 h-5 text-tertiary" />
                  Field-Level Redactor: Third-Party TPA Claim Transmission
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  Protects patient privacy by limiting external insurer access strictly to claim-adjudication fields.
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
                <span>{redactionActive ? "Field Redaction: ACTIVE" : "Field Redaction: INACTIVE (Data Exposure)"}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-[#0e2127] border border-[#204955] space-y-3">
                <div className="text-tertiary font-bold text-sm">TRANSMITTED TO TPA (Cashless Claim)</div>
                <div className="space-y-1.5 text-gray-300">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Diagnosis Code:</span>
                    <span className="text-white">ICD-10 K35.80 (Acute Appendicitis)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Surgical Procedure:</span>
                    <span className="text-white">Laparoscopic Appendectomy</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Billed Amount:</span>
                    <span className="text-amber-400 font-bold">₹ 88,400</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Admission & Discharge Dates:</span>
                    <span className="text-white">2026-10-10 to 2026-10-12</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0e2127] border border-[#204955] space-y-3">
                <div className="text-tertiary font-bold text-sm">SENSITIVE CLINICAL MASKING (Protected)</div>
                <div className="space-y-1.5 text-gray-300">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Psychiatric / Mental Health:</span>
                    <span className={redactionActive ? "text-tertiary font-bold" : "text-white"}>
                      {redactionActive ? "[REDACTED: Unrelated to Claim]" : "Depression Clinical Notes"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">HIV / Serology Screening:</span>
                    <span className={redactionActive ? "text-tertiary font-bold" : "text-white"}>
                      {redactionActive ? "[REDACTED: Statutory Masking]" : "Non-Reactive Screening"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Genetic Biomarker Profile:</span>
                    <span className={redactionActive ? "text-tertiary font-bold" : "text-white"}>
                      {redactionActive ? "[REDACTED: Non-Billable Field]" : "BRCA1 / 2 Sequence"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "nmc-retention" && (
          <div className="p-5 rounded-2xl bg-[#081316] border border-[#1b3d47] space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-tertiary" />
                  Patient Erasure Request vs NMC Medical Records Retention
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  What happens when a discharged patient requests complete erasure under DPDP Section 12?
                </p>
              </div>

              {erasureState === "idle" && (
                <button
                  onClick={handleSimulateErasure}
                  className="px-4 py-2 bg-red-600/80 hover:bg-red-600 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-lg"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Simulate Patient Erasure Request
                </button>
              )}
            </div>

            {erasureState === "evaluating" && (
              <div className="py-6 text-center text-xs text-tertiary flex items-center justify-center gap-2">
                <RefreshCw className="w-4 h-4 animate-spin" /> Cross-referencing NMC Ethics Regulations & State Clinical Establishment Acts...
              </div>
            )}

            {erasureState === "completed" && (
              <div className="space-y-4 animate-fadeIn">
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Dual-Track Healthcare Disposition Enforced:</strong> Marketing and research profiles purged immediately. Discharge summaries, surgical notes, and diagnostic reports placed under a mandatory 3-to-5 year legal hold under NMC Medical Records Mandates.
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-[#0e2127] border border-red-500/30">
                    <div className="flex items-center justify-between text-red-400 font-bold mb-2">
                      <span>PURGED / ERASED (SEC 12)</span>
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <ul className="space-y-1 text-gray-300">
                      <li>• WhatsApp appointment campaign tokens</li>
                      <li>• Clinical trial de-identified registry links</li>
                      <li>• Preventive health checkup marketing lists</li>
                      <li>• Patient feedback and survey responses</li>
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0e2127] border border-emerald-500/30">
                    <div className="flex items-center justify-between text-emerald-400 font-bold mb-2">
                      <span>NMC STATUTORY LEGAL HOLD (5 YEARS)</span>
                      <Lock className="w-4 h-4" />
                    </div>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Inpatient medical charts & OT surgery notes</li>
                      <li>• Medico-Legal Case (MLC) police documents</li>
                      <li>• Diagnostic pathology & radiology reports</li>
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

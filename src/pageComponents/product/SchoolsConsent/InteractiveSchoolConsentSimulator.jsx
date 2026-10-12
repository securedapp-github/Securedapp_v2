"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RefreshCw,
  Terminal,
  Layers,
  Lock,
  Smartphone,
  School,
  Camera,
  MessageCircle,
  Bus,
  Eye,
  FileText,
  Users,
  Award
} from "lucide-react";

export default function InteractiveSchoolConsentSimulator() {
  const [activeTab, setActiveTab] = useState("parent-portal"); // 'parent-portal' | 'erp-telemetry'
  const [photoConsent, setPhotoConsent] = useState(false);
  const [whatsappConsent, setWhatsappConsent] = useState(true);
  const [apaarConsent, setApaarConsent] = useState(true);
  const [sponsorConsent, setSponsorConsent] = useState(false);
  const [externalAppConsent, setExternalAppConsent] = useState(false);

  const [lastRevocationLog, setLastRevocationLog] = useState({
    time: "Just now",
    action: "Initial sync loaded from Student Admission File #ADM-2024-884",
    latency: "82ms",
    status: "SYNC_CONFIRMED"
  });

  const handleToggle = (purpose, currentValue, setter) => {
    const newValue = !currentValue;
    setter(newValue);
    setLastRevocationLog({
      time: new Date().toLocaleTimeString(),
      action: `${purpose} set to ${newValue ? "EXPLICIT_GRANTED" : "REVOKED_BY_PARENT"}`,
      latency: `${Math.floor(Math.random() * 40) + 65}ms`,
      status: newValue ? "PURPOSE_ACTIVATED" : "RESTRICTION_ENFORCED_ERP"
    });
  };

  return (
    <div className="w-full bg-white/90 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl shadow-xl overflow-hidden font-outfit backdrop-blur-xl">
      {/* Header Bar */}
      <div className="px-6 py-4 bg-gray-50/80 dark:bg-white/[0.03] border-b border-gray-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-tertiary/20 text-tertiary flex items-center justify-center font-bold">
            <School className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-secondary dark:text-white">
                SecureCMS School & Parent Consent Simulator
              </span>
              <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
                Rule 12 + VPC Engine Active
              </span>
            </div>
            <p className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans">
              Explore how unbundled parent consent and statutory school exemptions work in real time
            </p>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-gray-200/80 dark:bg-white/10 rounded-xl">
          <button
            onClick={() => setActiveTab("parent-portal")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all font-outfit ${
              activeTab === "parent-portal"
                ? "bg-white dark:bg-white/10 text-secondary dark:text-white shadow-sm"
                : "text-labelGray dark:text-gray-300 hover:text-secondary dark:hover:text-white"
            }`}
          >
            Parent Preference Portal
          </button>
          <button
            onClick={() => setActiveTab("erp-telemetry")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 font-outfit ${
              activeTab === "erp-telemetry"
                ? "bg-white dark:bg-white/10 text-secondary dark:text-white shadow-sm"
                : "text-labelGray dark:text-gray-300 hover:text-secondary dark:hover:text-white"
            }`}
          >
            <Terminal className="w-3.5 h-3.5" /> ERP & Webhook Logs
          </button>
        </div>
      </div>

      <div className="p-6">
        {/* Student & Parent Context Card */}
        <div className="mb-6 p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
              AS
            </div>
            <div>
              <span className="font-bold text-gray-900 dark:text-white">
                Student: Aarav Sharma
              </span>{" "}
              <span className="text-gray-500 dark:text-gray-400">
                (Class 8-B · Roll #14 · Age 13 · Minor under DPDP Section 9)
              </span>
              <div className="text-[11px] text-gray-600 dark:text-gray-300 mt-0.5">
                Parent: <strong>Rajesh Sharma</strong> · Verified via Admission File #ADM-2024-884 (Rule 10 Verified)
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-white/10 font-mono text-[11px] text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-white/10">
              OTP Verified: +91 98*** **412
            </span>
          </div>
        </div>

        {activeTab === "parent-portal" ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left 7 cols: Interactive Toggles */}
            <div className="lg:col-span-7 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                Student Data Activities & Consent Toggles
              </div>

              {/* Group 1: Statutory Exemptions (Cannot be revoked) */}
              <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 flex items-center justify-between gap-3 opacity-90">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400 mt-0.5">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-gray-900 dark:text-white">
                        Attendance, Marks & Report Cards
                      </span>
                      <span className="px-2 py-0.5 text-[9px] font-bold rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 uppercase">
                        Rule 12 Exempt
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                      Core educational activity under DPDP Rules Fourth Schedule. No parental consent required.
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 px-2 py-1 bg-emerald-50 dark:bg-emerald-900/20 rounded">
                  Mandatory
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 flex items-center justify-between gap-3 opacity-90">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400 mt-0.5">
                    <Bus className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-gray-900 dark:text-white">
                        School Bus GPS & Campus CCTV Safety
                      </span>
                      <span className="px-2 py-0.5 text-[9px] font-bold rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 uppercase">
                        Safety Exempt
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                      Student safety functions by school & bus contractors. Covered under Fourth Schedule Part B.
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 px-2 py-1 bg-emerald-50 dark:bg-emerald-900/20 rounded">
                  Mandatory
                </span>
              </div>

              {/* Group 2: Unbundled Parent Consent Toggles */}
              <div className="pt-2 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Discretionary Activities (Requires Explicit Parent Choice)
              </div>

              {/* Photo on Social Media */}
              <div className="p-3.5 rounded-xl bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 flex items-center justify-between gap-3 shadow-sm hover:border-tertiary/40 transition-all">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-400 mt-0.5">
                    <Camera className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-gray-900 dark:text-white">
                        Photos & Videos on Social Media / Website
                      </span>
                      <span className="px-1.5 py-0.2 text-[9px] font-semibold rounded bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300">
                        Section 6 VPC
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                      Annual Day reels, website galleries, sports highlights. Parents can revoke anytime.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleToggle("Social Media Photos", photoConsent, setPhotoConsent)}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    photoConsent ? "bg-tertiary" : "bg-gray-300 dark:bg-gray-700"
                  }`}
                  aria-label="Toggle social media photos consent"
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      photoConsent ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* WhatsApp Group */}
              <div className="p-3.5 rounded-xl bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 flex items-center justify-between gap-3 shadow-sm hover:border-tertiary/40 transition-all">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-gray-900 dark:text-white">
                        Staff-Led WhatsApp Class Communication Groups
                      </span>
                      <span className="px-1.5 py-0.2 text-[9px] font-semibold rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
                        Channel Opt-In
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                      Sharing parent mobile number in class teacher group. If revoked, notices switch to SMS/Email.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleToggle("WhatsApp Group", whatsappConsent, setWhatsappConsent)}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    whatsappConsent ? "bg-tertiary" : "bg-gray-300 dark:bg-gray-700"
                  }`}
                  aria-label="Toggle WhatsApp group consent"
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      whatsappConsent ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* APAAR ID */}
              <div className="p-3.5 rounded-xl bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 flex items-center justify-between gap-3 shadow-sm hover:border-tertiary/40 transition-all">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-gray-900 dark:text-white">
                        Voluntary APAAR (One Nation One Student ID)
                      </span>
                      <span className="px-1.5 py-0.2 text-[9px] font-semibold rounded bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
                        MoE Voluntary Form
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                      Automates Ministry of Education APAAR consent form. Not a condition of admission.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleToggle("APAAR ID Creation", apaarConsent, setApaarConsent)}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    apaarConsent ? "bg-tertiary" : "bg-gray-300 dark:bg-gray-700"
                  }`}
                  aria-label="Toggle APAAR consent"
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      apaarConsent ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Event Sponsors */}
              <div className="p-3.5 rounded-xl bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 flex items-center justify-between gap-3 shadow-sm hover:border-tertiary/40 transition-all">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-400 mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-gray-900 dark:text-white">
                        Annual Day & Event Sponsor Directory Sharing
                      </span>
                      <span className="px-1.5 py-0.2 text-[9px] font-semibold rounded bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300">
                        Commercial Third-Party
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                      Sharing contact details with uniform, stationery, or book sponsors. Default OFF.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleToggle("Sponsor Sharing", sponsorConsent, setSponsorConsent)}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    sponsorConsent ? "bg-tertiary" : "bg-gray-300 dark:bg-gray-700"
                  }`}
                  aria-label="Toggle sponsor sharing consent"
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      sponsorConsent ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Right 5 cols: Live Statutory Status Card */}
            <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-200 dark:border-white/10">
                  <span className="text-xs font-bold text-secondary dark:text-white uppercase tracking-wider font-outfit">
                    Statutory Compliance Status
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Enforced in ERP
                  </span>
                </div>

                <div className="space-y-3 mt-4 text-xs">
                  <div className="p-3 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
                    <div className="text-gray-500 dark:text-gray-400 text-[11px]">School Website / Media Team</div>
                    <div className="font-semibold text-gray-900 dark:text-white flex items-center gap-2 mt-0.5">
                      {photoConsent ? (
                        <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Photos Permitted for Publishing
                        </span>
                      ) : (
                        <span className="text-rose-600 dark:text-rose-400 flex items-center gap-1">
                          <XCircle className="w-3.5 h-3.5" /> Media Restricted (Blur/Exclude Aarav)
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
                    <div className="text-gray-500 dark:text-gray-400 text-[11px]">Teacher Broadcast System</div>
                    <div className="font-semibold text-gray-900 dark:text-white flex items-center gap-2 mt-0.5">
                      {whatsappConsent ? (
                        <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Active in Class 8-B WhatsApp Group
                        </span>
                      ) : (
                        <span className="text-amber-600 dark:text-amber-400 flex items-center gap-1">
                          <AlertTriangle className="w-3.5 h-3.5" /> Excluded from Group · Routing via SMS
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
                    <div className="text-gray-500 dark:text-gray-400 text-[11px]">Commercial Sponsor Database</div>
                    <div className="font-semibold text-gray-900 dark:text-white flex items-center gap-2 mt-0.5">
                      {sponsorConsent ? (
                        <span className="text-amber-600 dark:text-amber-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Opted In (Directory Shared)
                        </span>
                      ) : (
                        <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Zero Commercial Sharing (Default)
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Instant Revocation Telemetry Box */}
                <div className="mt-4 p-3 rounded-lg bg-gray-100 dark:bg-black/30 border border-gray-200 dark:border-white/10 font-mono text-[11px]">
                  <div className="text-gray-500 dark:text-gray-400 text-[10px] uppercase tracking-wider mb-1">
                    Last Event Log & Latency
                  </div>
                  <div className="text-gray-800 dark:text-gray-200">{lastRevocationLog.action}</div>
                  <div className="flex items-center justify-between text-[10px] text-tertiary mt-1">
                    <span>Latency: {lastRevocationLog.latency}</span>
                    <span>Status: {lastRevocationLog.status}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-white/10 mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                Section 6 of DPDP Act 2023 requires that withdrawing consent must be as effortless as giving it. SecureCMS synchronizes parent revocations across connected ERP modules instantly.
              </div>
            </div>
          </div>
        ) : (
          /* ERP & Webhook Telemetry View */
          <div className="space-y-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-gray-950 text-gray-200 border border-gray-800 overflow-x-auto">
              <div className="text-gray-400 text-[11px] mb-2 font-sans font-bold flex items-center justify-between">
                <span>SIMULATED API EVENT: POST /api/v1/schools/consent-events</span>
                <span className="text-emerald-400 font-mono text-[10px]">HTTP 200 OK · mTLS 1.3</span>
              </div>
              <pre className="text-[11px] leading-relaxed text-emerald-400">
{`{
  "institution_id": "SCH-DELHI-0042",
  "data_fiduciary": "St. Xavier's International School",
  "student_id": "STU-2024-884",
  "student_name": "Aarav Sharma",
  "is_minor": true,
  "parent_record": {
    "parent_name": "Rajesh Sharma",
    "verification_method": "RULE_10_ADMISSION_FILE",
    "contact_token": "OTP_CONFIRMED_MOBILE_98*****412",
    "verified_timestamp": "2026-10-11T09:42:10Z"
  },
  "purposes": {
    "academic_reporting": { "basis": "RULE_12_EXEMPT", "status": "ACTIVE" },
    "bus_gps_safety": { "basis": "RULE_12_SAFETY", "status": "ACTIVE" },
    "social_media_photos": { "basis": "SECTION_6_VPC", "status": "${photoConsent ? "GRANTED" : "REVOKED"}" },
    "whatsapp_class_group": { "basis": "CHANNEL_OPTIN", "status": "${whatsappConsent ? "GRANTED" : "REVOKED"}" },
    "apaar_id_creation": { "basis": "MOE_VOLUNTARY", "status": "${apaarConsent ? "GRANTED" : "REVOKED"}" },
    "sponsor_directory": { "basis": "SECTION_6_OPTIN", "status": "${sponsorConsent ? "GRANTED" : "REVOKED"}" }
  },
  "blockchain_receipt": "0x9f88c72b14e91244a03bc219da0567f1b...",
  "erp_sync_timestamp": "${new Date().toISOString()}"
}`}
              </pre>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-sans text-xs">
              <div className="p-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                <div className="font-bold text-gray-900 dark:text-white">ERP Connector</div>
                <div className="text-gray-500 dark:text-gray-400 text-[11px] mt-0.5">Fedena / Entab / Teachmint</div>
                <div className="text-emerald-600 dark:text-emerald-400 font-semibold mt-1">Live Sync Active</div>
              </div>
              <div className="p-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                <div className="font-bold text-gray-900 dark:text-white">Role-Based Access</div>
                <div className="text-gray-500 dark:text-gray-400 text-[11px] mt-0.5">Counsellor & Infirmary Files</div>
                <div className="text-blue-600 dark:text-blue-400 font-semibold mt-1">Strictly Vaulted</div>
              </div>
              <div className="p-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                <div className="font-bold text-gray-900 dark:text-white">Audit Trail</div>
                <div className="text-gray-500 dark:text-gray-400 text-[11px] mt-0.5">Section 6(10) Burden of Proof</div>
                <div className="text-purple-600 dark:text-purple-400 font-semibold mt-1">Tamper-Proof Logs</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

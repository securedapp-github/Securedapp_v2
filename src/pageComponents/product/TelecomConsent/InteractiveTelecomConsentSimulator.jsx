"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, 
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
  Wifi, 
  Radio, 
  Sliders, 
  Copy, 
  Check 
} from "lucide-react";

export default function InteractiveTelecomConsentSimulator({ 
  activeTab = "licence-vs-consent", 
  setActiveTab = () => {}, 
  onOpenChecklist = () => {} 
}) {
  // Tab 1 state: Toggles
  const [purposes, setPurposes] = useState({
    kyc: true, // locked
    ipdr: true, // locked
    interception: true, // locked
    marketing: true,
    ottBundles: true,
    analytics: false,
    referral: false,
  });

  // Tab 2 state: Franchisee OTP
  const [subscriberMobile, setSubscriberMobile] = useState("9845012345");
  const [subscriberName, setSubscriberName] = useState("Ananya Deshmukh");
  const [lcoCode, setLcoCode] = useState("LCO-MAH-042");
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState(["5", "8", "2", "4"]);
  const [otpVerified, setOtpVerified] = useState(false);
  const [receiptHash, setReceiptHash] = useState("");

  // Tab 3 state: Erasure vs IPDR
  const [erasureStatus, setErasureStatus] = useState("idle"); // idle | processing | completed

  // Tab 4 state: OTT Webhook
  const [selectedPartner, setSelectedPartner] = useState("Disney+ Hotstar");
  const [webhookLogs, setWebhookLogs] = useState([
    {
      id: "evt_99182",
      timestamp: "11:24:02.104 IST",
      partner: "Disney+ Hotstar",
      event: "dpdp.consent.revoked",
      latency: "42ms",
      status: "200 OK - Bundle Access Terminated",
    },
    {
      id: "evt_99181",
      timestamp: "11:22:15.890 IST",
      partner: "SonyLIV",
      event: "dpdp.consent.granted",
      latency: "61ms",
      status: "200 OK - Entitlement Active",
    },
  ]);
  const [isFiringWebhook, setIsFiringWebhook] = useState(false);

  const togglePurpose = (key) => {
    if (key === "kyc" || key === "ipdr" || key === "interception") return;
    setPurposes((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSendOtp = () => {
    setOtpSent(true);
    setOtpVerified(false);
  };

  const handleVerifyOtp = () => {
    setOtpVerified(true);
    const hash = "0x" + Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join("");
    setReceiptHash(hash);
  };

  const handleTriggerErasure = () => {
    setErasureStatus("processing");
    setTimeout(() => {
      setErasureStatus("completed");
    }, 1200);
  };

  const handleFireWebhook = () => {
    setIsFiringWebhook(true);
    setTimeout(() => {
      const newLog = {
        id: `evt_${Math.floor(10000 + Math.random() * 90000)}`,
        timestamp: new Date().toLocaleTimeString("en-IN", { hour12: false }) + ".048 IST",
        partner: selectedPartner,
        event: "dpdp.consent.revoked",
        latency: `${Math.floor(35 + Math.random() * 30)}ms`,
        status: "200 OK - Provisioning Deprovisioned",
      };
      setWebhookLogs((prev) => [newLog, ...prev.slice(0, 4)]);
      setIsFiringWebhook(false);
    }, 600);
  };

  return (
    <div className="bg-white/90 dark:bg-[#001938]/90 border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-2xl transition-all">
      {/* Simulator Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-gray-200 dark:border-white/10 pb-4">
        <button
          type="button"
          onClick={() => setActiveTab("licence-vs-consent")}
          className={`px-4 py-2.5 rounded-xl font-outfit text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 ${
            activeTab === "licence-vs-consent"
              ? "bg-tertiary text-secondary shadow-md"
              : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10"
          }`}
        >
          <Sliders className="w-4 h-4" />
          <span>Licence vs Consent Toggles</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("franchisee-otp")}
          className={`px-4 py-2.5 rounded-xl font-outfit text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 ${
            activeTab === "franchisee-otp"
              ? "bg-tertiary text-secondary shadow-md"
              : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10"
          }`}
        >
          <Smartphone className="w-4 h-4" />
          <span>Franchisee OTP Onboarding</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("ipdr-erasure")}
          className={`px-4 py-2.5 rounded-xl font-outfit text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 ${
            activeTab === "ipdr-erasure"
              ? "bg-tertiary text-secondary shadow-md"
              : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10"
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>IPDR 2-Yr Legal Hold vs Erasure</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("ott-sync")}
          className={`px-4 py-2.5 rounded-xl font-outfit text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 ${
            activeTab === "ott-sync"
              ? "bg-tertiary text-secondary shadow-md"
              : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10"
          }`}
        >
          <Radio className="w-4 h-4" />
          <span>OTT Partner Webhook Stream</span>
        </button>
      </div>

      {/* TAB 1: Licence Duties vs Consent Toggles */}
      {activeTab === "licence-vs-consent" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <div>
              <h4 className="text-lg font-bold font-outfit text-secondary dark:text-white">
                Subscriber Consent Preference Center (ISP Self-Care / App)
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-nunitoSans mt-1">
                Notice how DoT Unified Licence obligations are cryptographically locked, while commercial add-ons offer granular Section 6 consent toggles.
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
                      <span>Customer KYC & Address Verification</span>
                      <span className="text-[10px] font-mono uppercase bg-amber-500/20 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded">
                        Licence Duty
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      DoT CAF Mandate · Legal obligation under Section 7
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
                      <span>IPDR & Session NAT Log Retention (2 Years)</span>
                      <span className="text-[10px] font-mono uppercase bg-amber-500/20 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded">
                        DoT UL Amendment
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      21 Dec 2021 Circular · Mandatory 24-month retention
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-gray-400">Locked Active</span>
              </div>

              {/* Togglable 1: Marketing */}
              <div 
                onClick={() => togglePurpose("marketing")}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  purposes.marketing 
                    ? "bg-tertiary/[0.06] border-tertiary/40" 
                    : "bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10"
                }`}
              >
                <div>
                  <div className="text-sm font-bold text-secondary dark:text-white flex items-center gap-2">
                    <span>Plan Upgrades & Promotional Offers (SMS/WhatsApp)</span>
                    <span className="text-[10px] font-mono uppercase bg-tertiary/20 text-tertiary px-2 py-0.5 rounded">
                      Consent Required
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    TRAI TCCCPR & DPDP Section 6 opt-in · 1-click withdrawal
                  </div>
                </div>
                <div className={`w-11 h-6 rounded-full transition-colors relative flex items-center px-1 ${
                  purposes.marketing ? "bg-tertiary" : "bg-gray-300 dark:bg-gray-700"
                }`}>
                  <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    purposes.marketing ? "translate-x-5" : "translate-x-0"
                  }`} />
                </div>
              </div>

              {/* Togglable 2: OTT Bundles */}
              <div 
                onClick={() => togglePurpose("ottBundles")}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  purposes.ottBundles 
                    ? "bg-tertiary/[0.06] border-tertiary/40" 
                    : "bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10"
                }`}
              >
                <div>
                  <div className="text-sm font-bold text-secondary dark:text-white flex items-center gap-2">
                    <span>Third-Party OTT Partner Bundle Sharing</span>
                    <span className="text-[10px] font-mono uppercase bg-tertiary/20 text-tertiary px-2 py-0.5 rounded">
                      Third-Party Transfer
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Passes mobile token to Hotstar & SonyLIV for bundle activation
                  </div>
                </div>
                <div className={`w-11 h-6 rounded-full transition-colors relative flex items-center px-1 ${
                  purposes.ottBundles ? "bg-tertiary" : "bg-gray-300 dark:bg-gray-700"
                }`}>
                  <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    purposes.ottBundles ? "translate-x-5" : "translate-x-0"
                  }`} />
                </div>
              </div>

              {/* Togglable 3: Analytics */}
              <div 
                onClick={() => togglePurpose("analytics")}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  purposes.analytics 
                    ? "bg-tertiary/[0.06] border-tertiary/40" 
                    : "bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10"
                }`}
              >
                <div>
                  <div className="text-sm font-bold text-secondary dark:text-white flex items-center gap-2">
                    <span>Subscriber Usage Analytics for Retargeting</span>
                    <span className="text-[10px] font-mono uppercase bg-blue-500/20 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded">
                      Profiling
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Analyses bandwidth patterns for ad profiling (Section 6 explicit consent)
                  </div>
                </div>
                <div className={`w-11 h-6 rounded-full transition-colors relative flex items-center px-1 ${
                  purposes.analytics ? "bg-tertiary" : "bg-gray-300 dark:bg-gray-700"
                }`}>
                  <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    purposes.analytics ? "translate-x-5" : "translate-x-0"
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
                POST /v1/isp/consent-record
              </span>
              <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-gray-300">
                DPDP Validated
              </span>
            </div>

            <pre suppressHydrationWarning className="overflow-x-auto text-[11px] leading-relaxed text-emerald-400">
{`{
  "subscriber_id": "SUB-TEL-98450",
  "isp_licence_category": "CAT_B_CIRCLE",
  "statutory_holds": {
    "kyc_caf_status": "VERIFIED_DOT",
    "ipdr_log_retention": "MANDATORY_24M",
    "lawful_interception": "EXEMPT_FROM_CONSENT"
  },
  "consent_receipt": {
    "marketing_promo": ${purposes.marketing},
    "ott_bundle_sync": ${purposes.ottBundles},
    "traffic_analytics": ${purposes.analytics},
    "timestamp": "2026-10-17T06:00:00.000Z",
    "immutable_hash": "0x89f4b...38ca"
  },
  "compliance_audit": {
    "section_6_10_proof": "PASSED",
    "tccCPR_aligned": true
  }
}`}
            </pre>

            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-gray-400 flex items-center justify-between">
              <span>Auditor Read-Only Signature:</span>
              <span className="text-white font-semibold">DoT-AUDIT-READY</span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Franchisee / Field OTP Onboarding */}
      {activeTab === "franchisee-otp" && (
        <div className="space-y-6">
          <div className="max-w-2xl">
            <h4 className="text-lg font-bold font-outfit text-secondary dark:text-white">
              Field Engineer & Franchisee CAF Verification
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-nunitoSans mt-1">
              Replaces vulnerable paper CAF signatures with an OTP verification sent directly to the subscriber&apos;s phone. Franchisees cannot forge consent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-secondary dark:text-white mb-1">
                  Subscriber Mobile Number (for CAF OTP)
                </label>
                <input
                  type="text"
                  value={subscriberMobile}
                  onChange={(e) => setSubscriberMobile(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-black/20 text-secondary dark:text-white outline-none font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-secondary dark:text-white mb-1">
                  Subscriber Name
                </label>
                <input
                  type="text"
                  value={subscriberName}
                  onChange={(e) => setSubscriberName(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-black/20 text-secondary dark:text-white outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-secondary dark:text-white mb-1">
                  Authorized LCO / Franchisee Partner ID
                </label>
                <input
                  type="text"
                  value={lcoCode}
                  onChange={(e) => setLcoCode(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-black/20 text-secondary dark:text-white outline-none font-mono"
                />
              </div>

              <button
                type="button"
                onClick={handleSendOtp}
                className="w-full py-2.5 bg-secondary dark:bg-white dark:text-secondary text-white font-bold font-outfit rounded-xl hover:opacity-90 transition-all text-xs flex items-center justify-center space-x-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{otpSent ? "Resend OTP via SMS & WhatsApp" : "Trigger Subscriber Verification OTP"}</span>
              </button>
            </div>

            {/* OTP Verification & Receipt */}
            <div className="p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-labelGray dark:text-gray-400">
                Subscriber Smartphone Verification Link
              </div>

              {otpSent ? (
                <div className="space-y-4 animate-fadeIn">
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-800 dark:text-emerald-300">
                    OTP sent to <strong>+91 {subscriberMobile}</strong> with explicit Section 5 notice in English & Marathi.
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-2">
                      Enter 4-Digit Subscriber Approval Code:
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
                    onClick={handleVerifyOtp}
                    disabled={otpVerified}
                    className="w-full py-2.5 bg-tertiary text-secondary font-bold font-outfit rounded-xl hover:bg-tertiary/90 transition-all text-xs flex items-center justify-center space-x-2 disabled:opacity-60"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{otpVerified ? "CAF Consent Verified & Bound" : "Submit & Generate Immutable Receipt"}</span>
                  </button>

                  {otpVerified && (
                    <div className="p-3 rounded-xl bg-gray-900 text-gray-200 text-xs font-mono space-y-1.5 border border-emerald-500/40 animate-fadeIn">
                      <div className="text-tertiary font-bold flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5" />
                        <span>Section 6(10) Proof Created</span>
                      </div>
                      <div className="text-[10px] text-gray-400 truncate">
                        Receipt Hash: {receiptHash}
                      </div>
                      <div className="text-[10px] text-gray-400">
                        Geo-Cell: LCO-MAH-042 · CellID: 404-20-8192
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-10 text-gray-400 text-xs">
                  Click &ldquo;Trigger Subscriber Verification OTP&rdquo; to simulate field CAF authentication.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: IPDR 2-Year Retention vs Erasure */}
      {activeTab === "ipdr-erasure" && (
        <div className="space-y-6">
          <div className="max-w-2xl">
            <h4 className="text-lg font-bold font-outfit text-secondary dark:text-white">
              Subscriber Right to Erasure (Section 12) vs DoT 2-Year IPDR Hold
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-nunitoSans mt-1">
              When a subscriber disconnects and demands total deletion, an ISP must erase commercial data, but its Unified Licence legally commands 24-month retention of IPDR and login logs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-secondary dark:text-white font-outfit">
                  Simulate Account Disconnection & DSR Erasure Request
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Subscriber: SUB-98450 · Connection Terminated: Today
                </div>
              </div>

              <button
                type="button"
                onClick={handleTriggerErasure}
                disabled={erasureStatus === "processing"}
                className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold font-outfit text-xs rounded-xl transition-all shadow-md flex items-center space-x-2 disabled:opacity-60"
              >
                <AlertTriangle className="w-4 h-4" />
                <span>
                  {erasureStatus === "processing" ? "Executing Partial Erasure..." : "Execute Disconnection & DSR Erasure"}
                </span>
              </button>
            </div>

            {erasureStatus !== "idle" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {/* Erased Data */}
                <div className="p-4 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/30 space-y-2">
                  <div className="text-xs font-bold text-emerald-800 dark:text-emerald-300 font-outfit flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Purged Instantly (DPDP Section 12 Fulfilled)</span>
                  </div>
                  <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1 list-disc list-inside">
                    <li>Promotional marketing opt-ins & WhatsApp lists</li>
                    <li>Third-party OTT bundle entitlements</li>
                    <li>Saved payment credit cards & UPI VPA tokens</li>
                    <li>Speed-test diagnostic logs & profiling telemetry</li>
                  </ul>
                  <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono mt-2">
                    Status: Permanent Cryptographic Shredding Completed
                  </div>
                </div>

                {/* Statutory Legal Hold */}
                <div className="p-4 rounded-xl bg-amber-500/[0.08] border border-amber-500/30 space-y-2">
                  <div className="text-xs font-bold text-amber-800 dark:text-amber-300 font-outfit flex items-center gap-1.5">
                    <Lock className="w-4 h-4 text-amber-500" />
                    <span>Statutory Legal Hold (DoT UL Amendment 21 Dec 2021)</span>
                  </div>
                  <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1 list-disc list-inside">
                    <li>IPDR (Internet Protocol Detail Records) logs</li>
                    <li>AAA RADIUS login/logout timestamps & NAT IP pools</li>
                    <li>CAF subscriber identification record</li>
                    <li>Physical installation address & MAC address</li>
                  </ul>
                  <div className="text-[10px] text-amber-700 dark:text-amber-300 font-mono mt-2 flex items-center justify-between">
                    <span>Release Date: 17 Oct 2028 (730 Days)</span>
                    <span className="font-bold">DoT Mandatory Lock</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 4: Real-Time OTT Partner Webhook Stream */}
      {activeTab === "ott-sync" && (
        <div className="space-y-6">
          <div className="max-w-2xl">
            <h4 className="text-lg font-bold font-outfit text-secondary dark:text-white">
              Real-Time OTT Bundle Consent Webhook Pipeline
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-nunitoSans mt-1">
              When a subscriber changes their plan or revokes bundle consent, SecureCMS dispatches an outbound HMAC-SHA256 signed webhook to third-party OTT partners in sub-80ms.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-secondary dark:text-white">Partner Target:</span>
              <select
                value={selectedPartner}
                onChange={(e) => setSelectedPartner(e.target.value)}
                className="px-3 py-1.5 text-xs rounded-lg border border-gray-300 dark:border-white/10 bg-white dark:bg-[#002244] text-secondary dark:text-white outline-none"
              >
                <option value="Disney+ Hotstar">Disney+ Hotstar</option>
                <option value="SonyLIV">SonyLIV</option>
                <option value="Zee5">Zee5</option>
                <option value="Amazon Prime Video">Amazon Prime Video</option>
              </select>
            </div>

            <button
              type="button"
              onClick={handleFireWebhook}
              disabled={isFiringWebhook}
              className="px-4 py-2 bg-tertiary text-secondary font-bold font-outfit rounded-xl text-xs hover:bg-tertiary/90 transition-all flex items-center space-x-2 shadow-sm disabled:opacity-60"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isFiringWebhook ? "animate-spin" : ""}`} />
              <span>{isFiringWebhook ? "Propagating Event..." : `Simulate ${selectedPartner} Revocation Webhook`}</span>
            </button>
          </div>

          {/* Webhook Stream Table */}
          <div className="rounded-2xl bg-gray-900 text-gray-200 p-5 border border-white/10 font-mono text-xs overflow-x-auto">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-[11px] text-gray-400">
              <span className="font-bold text-tertiary">Live Webhook Dispatch Stream</span>
              <span>Sub-80ms SLA Verified</span>
            </div>

            <div className="space-y-2">
              {webhookLogs.map((log) => (
                <div key={log.id} className="p-3 rounded-lg bg-white/5 border border-white/5 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400">{log.timestamp}</span>
                    <span className="text-tertiary font-bold">{log.partner}</span>
                    <span className="bg-red-500/20 text-red-300 px-2 py-0.5 rounded text-[10px]">
                      {log.event}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-amber-400 font-bold">{log.latency}</span>
                    <span className="text-emerald-400 font-semibold">{log.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

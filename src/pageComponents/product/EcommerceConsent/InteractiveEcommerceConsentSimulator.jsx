"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  ShieldCheck,
  CheckCircle2,
  Lock,
  RefreshCw,
  Bell,
  MessageSquare,
  Mail,
  Smartphone,
  Eye,
  Sliders,
  Database,
  ArrowRight,
  AlertTriangle,
  Clock,
  Sparkles,
  Zap,
  Trash2,
  Cpu
} from "lucide-react";

export default function InteractiveEcommerceConsentSimulator({
  activeTab: externalActiveTab,
  setActiveTab: externalSetActiveTab
} = {}) {
  const [internalActiveTab, setInternalActiveTab] = useState("checkout"); // "checkout", "preference", "webhooks", "inactivity"
  const activeTab = externalActiveTab !== undefined ? externalActiveTab : internalActiveTab;
  const setActiveTab = externalSetActiveTab || setInternalActiveTab;
  const [whatsappOptIn, setWhatsappOptIn] = useState(false);
  const [emailOptIn, setEmailOptIn] = useState(false);
  const [smsOptIn, setSmsOptIn] = useState(false);
  const [adTrackingOptIn, setAdTrackingOptIn] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);
  const [eventLogs, setEventLogs] = useState([
    { id: 1, time: "Just now", event: "Checkout Session Initialized", status: "Section 4/7 Validated", latency: "18ms" },
    { id: 2, time: "1 min ago", event: "CookieHub Script Barrier Active", status: "Zero Pre-Consent Pixels", latency: "12ms" },
  ]);

  const handleCheckoutSubmit = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      setOtpVerified(true);
      const newLogs = [
        {
          id: Date.now(),
          time: new Date().toLocaleTimeString(),
          event: `Consent Captured: WhatsApp=${whatsappOptIn ? "Opted-In" : "Declined"}, Email=${emailOptIn ? "Opted-In" : "Declined"}`,
          status: "SHA-256 Anchored",
          latency: "42ms"
        },
        ...eventLogs
      ];
      setEventLogs(newLogs.slice(0, 5));
    }, 600);
  };

  const handleRevokeChannel = (channel) => {
    if (channel === "whatsapp") setWhatsappOptIn(false);
    if (channel === "email") setEmailOptIn(false);
    if (channel === "sms") setSmsOptIn(false);
    if (channel === "ads") setAdTrackingOptIn(false);

    const logEntry = {
      id: Date.now(),
      time: new Date().toLocaleTimeString(),
      event: `Revocation Broadcast: ${channel.toUpperCase()} Suppressed`,
      status: "Synced to CRM & Ad Tools",
      latency: "38ms"
    };
    setEventLogs([logEntry, ...eventLogs.slice(0, 4)]);
  };

  return (
    <div className="w-full bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 dark:border-white/10 pb-6 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/30 text-tertiary text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Simulator</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-outfit text-secondary dark:text-white">
            Ecommerce Shopper Consent & WhatsApp Sync Engine
          </h3>
          <p className="text-xs sm:text-sm text-labelGray dark:text-gray-300 font-nunitoSans mt-1">
            Simulate zero-friction checkout unbundling, 1-click customer revocations, and real-time ad suppression.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: "checkout", label: "Checkout Unbundling", icon: <ShoppingCart className="w-4 h-4" /> },
            { id: "preference", label: "Shopper Preference Hub", icon: <Sliders className="w-4 h-4" /> },
            { id: "webhooks", label: "Real-Time Webhooks", icon: <Zap className="w-4 h-4" /> },
            { id: "inactivity", label: "3-Yr Inactivity Rule", icon: <Clock className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold font-outfit transition-all ${
                activeTab === tab.id
                  ? "bg-tertiary text-secondary shadow-md"
                  : "bg-gray-100 dark:bg-white/5 text-secondary dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* Tab 1: Checkout Unbundling */}
        {activeTab === "checkout" && (
          <motion.div
            key="checkout"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left Mock Store Cart */}
            <div className="lg:col-span-7 bg-gray-50 dark:bg-[#132238] border border-gray-200 dark:border-white/10 rounded-2xl p-5 sm:p-6 space-y-5">
              <div className="flex justify-between items-center border-b border-gray-200 dark:border-white/10 pb-3">
                <span className="text-xs font-bold font-mono text-tertiary uppercase tracking-wider">Checkout Experience (Zero Drop-Off)</span>
                <span className="text-xs font-bold text-secondary dark:text-white">Total: ₹2,499</span>
              </div>

              {/* Order Processing Notice (Contractual - Pre-locked, No Checkbox) */}
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3.5 flex items-start gap-3">
                <Lock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-emerald-900 dark:text-emerald-300">Order Updates & Shipping (Section 4/7 Basis)</div>
                  <div className="text-emerald-800 dark:text-emerald-400/90 font-nunitoSans mt-0.5">
                    Your shipping details & phone are processed solely to deliver this order. No marketing consent required.
                  </div>
                </div>
              </div>

              {/* Unbundled Optional Choices */}
              <div className="space-y-3 pt-1">
                <div className="text-xs font-bold text-secondary dark:text-gray-200">
                  Optional Marketing Permissions (Unbundled & Unticked per Section 6):
                </div>

                <label className="flex items-start gap-3 p-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl cursor-pointer hover:border-tertiary transition-all">
                  <input
                    type="checkbox"
                    checked={whatsappOptIn}
                    onChange={(e) => setWhatsappOptIn(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded text-tertiary accent-[#12D576] focus:ring-tertiary"
                  />
                  <div className="text-xs">
                    <span className="font-bold flex items-center gap-1.5 text-secondary dark:text-white">
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-500" /> WhatsApp Offers & Price Drops
                    </span>
                    <span className="text-labelGray dark:text-gray-400 font-nunitoSans block mt-0.5">
                      Receive flash sales and personalized deals on WhatsApp. 1-click unsubscribe anytime.
                    </span>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl cursor-pointer hover:border-tertiary transition-all">
                  <input
                    type="checkbox"
                    checked={emailOptIn}
                    onChange={(e) => setEmailOptIn(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded text-tertiary accent-[#12D576] focus:ring-tertiary"
                  />
                  <div className="text-xs">
                    <span className="font-bold flex items-center gap-1.5 text-secondary dark:text-white">
                      <Mail className="w-3.5 h-3.5 text-blue-500" /> Weekly Curated Newsletter
                    </span>
                    <span className="text-labelGray dark:text-gray-400 font-nunitoSans block mt-0.5">
                      Get editorial styling guides and member-exclusive drops in your inbox.
                    </span>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl cursor-pointer hover:border-tertiary transition-all">
                  <input
                    type="checkbox"
                    checked={smsOptIn}
                    onChange={(e) => setSmsOptIn(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded text-tertiary accent-[#12D576] focus:ring-tertiary"
                  />
                  <div className="text-xs">
                    <span className="font-bold flex items-center gap-1.5 text-secondary dark:text-white">
                      <Smartphone className="w-3.5 h-3.5 text-purple-500" /> SMS Flash Coupons
                    </span>
                    <span className="text-labelGray dark:text-gray-400 font-nunitoSans block mt-0.5">
                      Occasional coupon codes before major festive sales.
                    </span>
                  </div>
                </label>
              </div>

              <button
                type="button"
                onClick={handleCheckoutSubmit}
                disabled={isSimulating}
                className="w-full py-3 bg-tertiary hover:opacity-95 text-secondary font-bold font-outfit rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm"
              >
                {isSimulating ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <span>Complete Order & Store Verified Consent</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {/* Right Audit & Telemetry Console */}
            <div className="lg:col-span-5 bg-gray-900 text-white rounded-2xl p-5 border border-white/10 font-mono text-xs flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-tertiary" />
                    <span className="font-bold text-gray-200">SecureCMS Runtime Inspector</span>
                  </div>
                  <span className="text-[10px] bg-tertiary/20 text-tertiary px-2 py-0.5 rounded font-bold">DPDP AUDIT READY</span>
                </div>

                <div className="space-y-2 text-[11px]">
                  <div className="flex justify-between text-gray-400">
                    <span>Order Processing Basis:</span>
                    <span className="text-emerald-400">Section 4 / 7 (Contractual)</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>WhatsApp Marketing:</span>
                    <span className={whatsappOptIn ? "text-emerald-400 font-bold" : "text-gray-400"}>
                      {whatsappOptIn ? "Explicit Consent Granted" : "Declined (No Ads)"}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Email Newsletter:</span>
                    <span className={emailOptIn ? "text-emerald-400 font-bold" : "text-gray-400"}>
                      {emailOptIn ? "Explicit Consent Granted" : "Declined"}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Audience Retargeting:</span>
                    <span className="text-amber-400">Restricted (Pre-flight Guard)</span>
                  </div>
                </div>
              </div>

              <div className="bg-black/60 rounded-xl p-3 border border-white/5 space-y-1.5">
                <div className="text-[10px] text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Database className="w-3 h-3 text-tertiary" /> Live Ledger Events
                </div>
                {eventLogs.map((log) => (
                  <div key={log.id} className="text-[10px] flex justify-between gap-2 border-b border-white/5 pb-1">
                    <span className="text-gray-300 truncate">{log.event}</span>
                    <span className="text-tertiary shrink-0 font-bold">{log.latency}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 2: Shopper Preference Center */}
        {activeTab === "preference" && (
          <motion.div
            key="preference"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid lg:grid-cols-12 gap-8 items-start"
          >
            <div className="lg:col-span-7 bg-gray-50 dark:bg-[#132238] border border-gray-200 dark:border-white/10 rounded-2xl p-6 space-y-4">
              <div className="border-b border-gray-200 dark:border-white/10 pb-3">
                <h4 className="font-bold text-sm text-secondary dark:text-white">Shopper Self-Service Preference Hub (Section 6(4))</h4>
                <p className="text-xs text-labelGray dark:text-gray-300 font-nunitoSans mt-0.5">
                  The law mandates that withdrawal must be as easy as giving consent. One click immediately halts processing.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { id: "whatsapp", label: "WhatsApp Promotions & Flash Deals", state: whatsappOptIn, setter: setWhatsappOptIn },
                  { id: "email", label: "Email Product Recommendations", state: emailOptIn, setter: setEmailOptIn },
                  { id: "sms", label: "SMS Promotional Alerts", state: smsOptIn, setter: setSmsOptIn },
                  { id: "ads", label: "Cross-Site Ad Retargeting Pixels", state: adTrackingOptIn, setter: setAdTrackingOptIn },
                ].map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3.5 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl"
                  >
                    <div>
                      <div className="text-xs font-bold text-secondary dark:text-white">{item.label}</div>
                      <div className="text-[11px] text-labelGray dark:text-gray-400 font-nunitoSans">
                        Status: <strong className={item.state ? "text-emerald-500" : "text-amber-500"}>{item.state ? "Active Consent" : "Opted-Out"}</strong>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRevokeChannel(item.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold font-outfit transition-all ${
                        item.state
                          ? "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 hover:bg-red-500/20"
                          : "bg-gray-100 dark:bg-white/10 text-gray-400 cursor-not-allowed"
                      }`}
                      disabled={!item.state}
                    >
                      {item.state ? "1-Click Revoke" : "Revoked"}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-gray-50 dark:bg-[#132238] border border-gray-200 dark:border-white/10 rounded-2xl p-6 space-y-4">
              <h4 className="font-bold text-sm text-secondary dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-tertiary" /> Statutory Right to Erasure (DSR)
              </h4>
              <p className="text-xs text-labelGray dark:text-gray-300 font-nunitoSans leading-relaxed">
                When a shopper exercises their Right to be Forgotten, SecureCMS automatically purges marketing profiles while placing financial invoices on statutory GST legal hold.
              </p>
              <div className="bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl text-xs text-amber-800 dark:text-amber-300">
                <strong>Legal Guard:</strong> Tax invoices & order proofs are retained for 7 years under GST laws; behavioral profiling is deleted within 60 seconds.
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 3: Real-Time Webhooks */}
        {activeTab === "webhooks" && (
          <motion.div
            key="webhooks"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { title: "WhatsApp BSP", latency: "48ms", status: "Suppressed in Broadcast List" },
                { title: "Klaviyo / Email CRM", latency: "62ms", status: "Unsubscribed Automatically" },
                { title: "Meta Conversions API", latency: "84ms", status: "Removed from Custom Audience" },
                { title: "Google Customer Match", latency: "95ms", status: "Suppression List Updated" },
              ].map((tool, idx) => (
                <div key={idx} className="p-4 bg-gray-50 dark:bg-[#132238] border border-gray-200 dark:border-white/10 rounded-2xl">
                  <div className="text-xs font-bold text-secondary dark:text-white">{tool.title}</div>
                  <div className="text-lg font-bold font-mono text-tertiary mt-1">{tool.latency}</div>
                  <div className="text-[11px] text-labelGray dark:text-gray-400 font-nunitoSans mt-1">{tool.status}</div>
                </div>
              ))}
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-4 font-mono text-xs">
              <div className="text-gray-400 text-[11px] mb-2">// Sample Webhook Payload dispatched on Revocation:</div>
              <pre className="text-emerald-400 text-[10px] overflow-x-auto leading-relaxed">
{`{
  "event": "consent.revoked",
  "dataPrincipalId": "shopper_ind_98234",
  "purpose": "promotional_whatsapp",
  "timestamp": "${new Date().toISOString()}",
  "proofHash": "sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  "action": "SUPPRESS_FROM_ALL_CAMPAIGNS"
}`}
              </pre>
            </div>
          </motion.div>
        )}

        {/* Tab 4: 3-Year Inactivity Rule */}
        {activeTab === "inactivity" && (
          <motion.div
            key="inactivity"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-gray-50 dark:bg-[#132238] border border-gray-200 dark:border-white/10 rounded-2xl p-6 space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-secondary dark:text-white">
                  3-Year Inactivity Rule Engine (Rule 8 & Third Schedule)
                </h4>
                <p className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans">
                  Applies to e-commerce platforms with $\ge 2\text{ crore}$ registered users in India.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl">
                <div className="text-xs font-bold text-secondary dark:text-white">Step 1: Inactivity Threshold</div>
                <div className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans mt-1">
                  User inactive for 36 months without logging in or ordering.
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl">
                <div className="text-xs font-bold text-secondary dark:text-white">Step 2: Mandatory 48-Hour Notice</div>
                <div className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans mt-1">
                  Automated SMS & email dispatch: 48-hour grace window to log in and keep account.
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl">
                <div className="text-xs font-bold text-secondary dark:text-white">Step 3: Cryptographic Erasure</div>
                <div className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans mt-1">
                  Data permanently purged with an immutable SHA-256 audit log entry for DPBI inspection.
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

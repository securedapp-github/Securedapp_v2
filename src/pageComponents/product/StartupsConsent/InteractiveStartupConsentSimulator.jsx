"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RefreshCw,
  Terminal,
  Layers,
  Lock,
  Smartphone,
  Cpu,
  Zap,
  ShieldCheck,
  Building2,
  Database,
  ArrowRight,
  Globe,
  Radio
} from "lucide-react";

export default function InteractiveStartupConsentSimulator() {
  const [stage, setStage] = useState("seed"); // 'mvp' | 'seed' | 'seriesA'
  const [analyticsConsent, setAnalyticsConsent] = useState(true);
  const [whatsappConsent, setWhatsappConsent] = useState(false);
  const [adRetargetingConsent, setAdRetargetingConsent] = useState(false);

  const [lastSyncLog, setLastSyncLog] = useState({
    time: "Just now",
    event: "User signup event #USR-9921 processed",
    latency: "64ms",
    status: "SYNC_CONFIRMED"
  });

  const handleToggle = (toolName, currentVal, setter) => {
    const nextVal = !currentVal;
    setter(nextVal);
    setLastSyncLog({
      time: new Date().toLocaleTimeString(),
      event: `${toolName} changed to ${nextVal ? "OPT_IN_GRANTED" : "REVOKED_SUPPRESSION_FIRED"}`,
      latency: `${Math.floor(Math.random() * 35) + 55}ms`,
      status: nextVal ? "DOWNSTREAM_SYNCED" : "AUDIENCE_EXCLUDED"
    });
  };

  return (
    <div className="w-full bg-white/90 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl shadow-xl overflow-hidden font-outfit backdrop-blur-xl">
      {/* Top Header */}
      <div className="px-6 py-4 bg-gray-50/80 dark:bg-white/[0.03] border-b border-gray-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-tertiary/20 text-tertiary flex items-center justify-center font-bold">
            <Rocket className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-secondary dark:text-white">
                Startup Downstream Tool Consent Engine
              </span>
              <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
                Sub-120ms Webhooks
              </span>
            </div>
            <p className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans">
              Simulate user sign-ups and watch revocations propagate across your marketing & ad stack
            </p>
          </div>
        </div>

        {/* Stage Selector Pills */}
        <div className="flex items-center gap-1 p-1 bg-gray-200/80 dark:bg-white/10 rounded-xl">
          {[
            { id: "mvp", label: "MVP (Pre-Seed)" },
            { id: "seed", label: "Seed Stage" },
            { id: "seriesA", label: "Series A / Scale" }
          ].map((s) => (
            <button
              key={s.id}
              onClick={() => setStage(s.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all font-outfit ${
                stage === s.id
                  ? "bg-white dark:bg-white/10 text-secondary dark:text-white shadow-sm"
                  : "text-labelGray dark:text-gray-300 hover:text-secondary dark:hover:text-white"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6">
        {/* Startup Context Bar */}
        <div className="mb-6 p-4 rounded-xl bg-purple-50/60 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/40 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-xs">
              SaaS
            </div>
            <div>
              <span className="font-bold text-gray-900 dark:text-white">
                Sample Signup: Arjun K. (arjun@growthscale.io)
              </span>
              <div className="text-[11px] text-gray-600 dark:text-gray-300 mt-0.5">
                {stage === "mvp" && "MVP Phase · 500 active signups · Standard embedded consent banner"}
                {stage === "seed" && "Seed Stage · 12,000 users · Multi-tool downstream marketing & CRM sync"}
                {stage === "seriesA" && "Series A · 85,000 users · Enterprise due diligence & runtime API firewall"}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-white/10 font-mono text-[11px] text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-white/10">
              DPDP Act §6 Unbundled
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left 6 cols: User Consent Toggles */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
              User Preference Toggles (Frontend Sign-Up)
            </div>

            {/* Core Essential */}
            <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 flex items-center justify-between gap-3 opacity-90">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-900 dark:text-white">
                    Core App Access & Account Authentication
                  </span>
                  <span className="px-2 py-0.5 text-[9px] font-bold rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 uppercase">
                    Essential
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                  Required to provision workspace, deliver software service, and issue invoices.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 px-2 py-1 bg-emerald-50 dark:bg-emerald-900/20 rounded">
                Always Active
              </span>
            </div>

            {/* Product Analytics */}
            <div className="p-3.5 rounded-xl bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 flex items-center justify-between gap-3 shadow-sm hover:border-tertiary/40 transition-all">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-900 dark:text-white">
                    Product Analytics & Crash Telemetry
                  </span>
                  <span className="px-1.5 py-0.2 text-[9px] font-semibold rounded bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
                    Mixpanel / PostHog
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                  Tracks in-app feature adoption. Strictly blocked before user explicit consent.
                </p>
              </div>
              <button
                onClick={() => handleToggle("Analytics SDK", analyticsConsent, setAnalyticsConsent)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  analyticsConsent ? "bg-tertiary" : "bg-gray-300 dark:bg-gray-700"
                }`}
                aria-label="Toggle product analytics consent"
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    analyticsConsent ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* WhatsApp Updates */}
            <div className="p-3.5 rounded-xl bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 flex items-center justify-between gap-3 shadow-sm hover:border-tertiary/40 transition-all">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-900 dark:text-white">
                    WhatsApp Product Updates & Onboarding
                  </span>
                  <span className="px-1.5 py-0.2 text-[9px] font-semibold rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
                    WhatsApp BSP
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                  Sends onboarding nudges via WhatsApp. Requires separate opt-in under DPDP §6.
                </p>
              </div>
              <button
                onClick={() => handleToggle("WhatsApp Channel", whatsappConsent, setWhatsappConsent)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  whatsappConsent ? "bg-tertiary" : "bg-gray-300 dark:bg-gray-700"
                }`}
                aria-label="Toggle WhatsApp updates consent"
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    whatsappConsent ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* Ad Retargeting */}
            <div className="p-3.5 rounded-xl bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 flex items-center justify-between gap-3 shadow-sm hover:border-tertiary/40 transition-all">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-900 dark:text-white">
                    Ad Retargeting & Lookalike Audiences
                  </span>
                  <span className="px-1.5 py-0.2 text-[9px] font-semibold rounded bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300">
                    Meta CAPI / Google Match
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                  Syncs hashed email to ad networks. Must be unbundled and default-off.
                </p>
              </div>
              <button
                onClick={() => handleToggle("Meta CAPI Retargeting", adRetargetingConsent, setAdRetargetingConsent)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  adRetargetingConsent ? "bg-tertiary" : "bg-gray-300 dark:bg-gray-700"
                }`}
                aria-label="Toggle ad retargeting consent"
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    adRetargetingConsent ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Right 6 cols: Live Downstream Tool Synchronization */}
          <div className="lg:col-span-6 flex flex-col justify-between p-5 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-gray-200 dark:border-white/10">
                <span className="text-xs font-bold text-secondary dark:text-white uppercase tracking-wider flex items-center gap-2 font-outfit">
                  <Radio className="w-4 h-4 text-tertiary animate-pulse" /> Live Downstream Tool Pipeline
                </span>
                <span className="text-[11px] font-mono text-tertiary">
                  Latency: {lastSyncLog.latency}
                </span>
              </div>

              {/* Connected Tools Status List */}
              <div className="space-y-2.5 mt-4 text-xs font-mono">
                {/* CRM */}
                <div className="p-2.5 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">HubSpot / Brevo CRM</div>
                    <div className="text-[10px] text-gray-500">Contact record & operational lifecycle</div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> SYNCED
                  </span>
                </div>

                {/* Analytics */}
                <div className="p-2.5 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">Mixpanel / PostHog SDK</div>
                    <div className="text-[10px] text-gray-500">Behavioral telemetry collection</div>
                  </div>
                  {analyticsConsent ? (
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> TELEMETRY_ACTIVE
                    </span>
                  ) : (
                    <span className="text-[11px] font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1">
                      <XCircle className="w-3.5 h-3.5" /> BLOCKED_AT_RUNTIME
                    </span>
                  )}
                </div>

                {/* WhatsApp */}
                <div className="p-2.5 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">WhatsApp Business API</div>
                    <div className="text-[10px] text-gray-500">Karix / Gupshup automated nudges</div>
                  </div>
                  {whatsappConsent ? (
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> CAMPAIGN_ALLOWED
                    </span>
                  ) : (
                    <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5" /> SUPPRESSED (DND)
                    </span>
                  )}
                </div>

                {/* Meta Pixel */}
                <div className="p-2.5 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">Meta CAPI & Google Match</div>
                    <div className="text-[10px] text-gray-500">Audience retargeting suppression list</div>
                  </div>
                  {adRetargetingConsent ? (
                    <span className="text-[11px] font-bold text-purple-600 dark:text-purple-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> AUDIENCE_MATCHED
                    </span>
                  ) : (
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> EXCLUDED (0 PII)
                    </span>
                  )}
                </div>
              </div>

              {/* Event Log Box */}
              <div className="mt-4 p-3 rounded-lg bg-gray-100 dark:bg-black/30 border border-gray-200 dark:border-white/10 font-mono text-[11px]">
                <div className="text-gray-500 dark:text-gray-400 text-[10px] uppercase tracking-wider mb-1">
                  Last Webhook Execution
                </div>
                <div className="text-gray-800 dark:text-gray-200">{lastSyncLog.event}</div>
                <div className="flex items-center justify-between text-[10px] text-tertiary mt-1">
                  <span>Latency: {lastSyncLog.latency}</span>
                  <span>Payload: SHA-256 Verified</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-white/10 mt-4 text-[11px] text-gray-500 dark:text-gray-400 font-sans leading-relaxed">
              When a user says &ldquo;no&rdquo; to marketing, doing it by hand across 5 tools is fine at 200 users, but breaks at 20,000. SecureCMS automates synchronization in real time with tamper-proof audit trails.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

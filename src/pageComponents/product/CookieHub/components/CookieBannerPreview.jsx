"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Shield, Check, Settings, X, Lock, Sparkles } from "lucide-react";
import { cookieCategories } from "../data";

export default function CookieBannerPreview() {
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: true,
    analytics: false,
    marketing: false,
  });

  const [showPreferenceModal, setShowPreferenceModal] = useState(false);
  const [savedConsent, setSavedConsent] = useState(null);
  const [activeTab, setActiveTab] = useState("preview");

  const handleToggle = (id) => {
    if (id === "necessary") return;
    setPreferences((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    setSavedConsent({ type: "Accept All", time: new Date().toLocaleTimeString() });
    setShowPreferenceModal(false);
  };

  const handleRejectNonEssential = () => {
    const essentialOnly = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    setPreferences(essentialOnly);
    setSavedConsent({ type: "Essential Only", time: new Date().toLocaleTimeString() });
    setShowPreferenceModal(false);
  };

  const handleSavePreferences = () => {
    setSavedConsent({ type: "Custom Preferences", time: new Date().toLocaleTimeString() });
    setShowPreferenceModal(false);
  };

  const tabs = [
    { id: "preview", label: "Banner UI" },
    { id: "network", label: "Network Monitor" },
  ];

  return (
    <div className="w-full bg-white/80 dark:bg-secondary border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl dark:shadow-[0_0_60px_rgba(18,213,118,0.06)] relative overflow-hidden backdrop-blur-xl">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-200 dark:border-white/10 relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-tertiary/10 border border-tertiary/20 text-tertiary">
            <Cookie className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-secondary dark:text-white tracking-tight">
                Interactive Consent Sandbox
              </h3>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                LIVE DEMO
              </span>
            </div>
            <p className="text-xs text-labelGray dark:text-gray-400 mt-0.5">Test tag quarantine &amp; pre-consent blocking in real time</p>
          </div>
        </div>

        {/* View Switcher Pills with animated indicator */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs relative">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-3 py-1.5 rounded-lg font-medium transition-all z-10 ${
                activeTab === tab.id
                  ? "text-primary font-bold"
                  : "text-labelGray dark:text-gray-400 hover:text-secondary dark:hover:text-white"
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabBg"
                  className="absolute inset-0 bg-tertiary rounded-lg shadow-md"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                {tab.label}
                {tab.id === "network" && (
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/10 dark:bg-black/20">0 Leaks</span>
                )}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Body */}
      {activeTab === "preview" ? (
        <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5 sm:p-6 flex flex-col gap-6 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-tertiary" />
                <span className="text-sm font-bold text-secondary dark:text-white">Privacy &amp; Cookie Governance</span>
              </div>
              <p className="text-xs sm:text-sm text-labelGray dark:text-gray-300 leading-relaxed">
                We use cookies to ensure site security, analyze performance, and deliver personalized content in full compliance with India's <span className="text-tertiary font-semibold">DPDP Act 2023</span> and <span className="text-tertiary font-semibold">GDPR</span>.
              </p>
            </div>

            <button
              onClick={() => setShowPreferenceModal(true)}
              className="inline-flex items-center gap-1.5 text-xs text-tertiary hover:underline bg-tertiary/10 px-3 py-1.5 rounded-lg border border-tertiary/20 font-medium transition-all self-start shrink-0 hover:bg-tertiary/15"
            >
              <Settings className="w-3.5 h-3.5" />
              Manage Preferences
            </button>
          </div>

          {/* Granular Category Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {cookieCategories.map((cat) => (
              <motion.div
                key={cat.id}
                onClick={() => handleToggle(cat.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-3.5 rounded-xl border text-xs cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                  preferences[cat.id]
                    ? "bg-tertiary/10 border-tertiary/40 text-secondary dark:text-white"
                    : "bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/10 text-labelGray dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-secondary dark:text-white">{cat.name}</span>
                  {cat.required ? (
                    <Lock className="w-3.5 h-3.5 text-tertiary" />
                  ) : (
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold transition-colors ${
                        preferences[cat.id]
                          ? "bg-tertiary text-primary"
                          : "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {preferences[cat.id] ? "✓" : ""}
                    </div>
                  )}
                </div>
                <span className="text-[10px] text-labelGray dark:text-gray-400 font-mono">
                  {cat.required ? "Always Active" : preferences[cat.id] ? "Granted ✓" : "Blocked ✕"}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons & Status */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-200 dark:border-white/10">
            <div className="text-[11px] text-labelGray dark:text-gray-400 flex items-center gap-2">
              {savedConsent ? (
                <span className="text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1.5 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <Check className="w-3.5 h-3.5" />
                  Logged ({savedConsent.type} @ {savedConsent.time})
                </span>
              ) : (
                <span className="text-labelGray dark:text-gray-400 font-mono">Status: Awaiting Consent Choice</span>
              )}
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={handleRejectNonEssential}
                className="px-4 py-2 text-xs font-medium text-labelGray dark:text-gray-300 hover:text-secondary dark:hover:text-white bg-gray-100 dark:bg-secondary hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors border border-gray-200 dark:border-white/10"
              >
                Essential Only
              </button>
              <motion.button
                onClick={handleAcceptAll}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="px-5 py-2 text-xs font-bold text-primary bg-tertiary hover:bg-tertiary/90 rounded-lg shadow-lg shadow-tertiary/20 hover:shadow-[0_8px_24px_rgba(18,213,118,0.3)] transition-all flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Accept All Cookies
              </motion.button>
            </div>
          </div>
        </div>
      ) : (
        /* Network Monitor Inspection View */
        <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5 space-y-4 relative z-10 font-mono text-xs">
          <div className="flex items-center justify-between pb-3 border-b border-gray-200 dark:border-white/10">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              Pre-Consent Tag Quarantine Status: Active
            </div>
            <span className="text-[10px] text-labelGray dark:text-gray-400">Zero Outgoing Network Telemetry</span>
          </div>

          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="p-3 rounded-xl bg-white dark:bg-secondary border border-gray-200 dark:border-white/10 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
            >
              <div className="space-y-0.5">
                <div className="text-secondary dark:text-white font-semibold flex items-center gap-2">
                  <span>Google Analytics 4 (GA4)</span>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-tertiary/10 text-tertiary border border-tertiary/20">
                    type=&quot;text/plain&quot;
                  </span>
                </div>
                <div className="text-[10px] text-labelGray dark:text-gray-400">data-cc-purpose=&quot;analytics&quot;</div>
              </div>
              <span className={`px-2.5 py-1 rounded text-[10px] font-bold ${
                preferences.analytics ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30" : "bg-red-500/10 dark:bg-red-500/20 text-red-500 dark:text-red-300 border border-red-500/20 dark:border-red-500/30"
              }`}>
                {preferences.analytics ? "ACTIVATED" : "QUARANTINED (0 REQ)"}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-3 rounded-xl bg-white dark:bg-secondary border border-gray-200 dark:border-white/10 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
            >
              <div className="space-y-0.5">
                <div className="text-secondary dark:text-white font-semibold flex items-center gap-2">
                  <span>Meta Advertising Pixel</span>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-tertiary/10 text-tertiary border border-tertiary/20">
                    type=&quot;text/plain&quot;
                  </span>
                </div>
                <div className="text-[10px] text-labelGray dark:text-gray-400">data-cc-purpose=&quot;marketing&quot;</div>
              </div>
              <span className={`px-2.5 py-1 rounded text-[10px] font-bold ${
                preferences.marketing ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30" : "bg-red-500/10 dark:bg-red-500/20 text-red-500 dark:text-red-300 border border-red-500/20 dark:border-red-500/30"
              }`}>
                {preferences.marketing ? "ACTIVATED" : "QUARANTINED (0 REQ)"}
              </span>
            </motion.div>
          </div>
        </div>
      )}

      {/* Preferences Modal Simulation */}
      <AnimatePresence>
        {showPreferenceModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-secondary border border-gray-200 dark:border-white/10 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5"
            >
              <div className="flex items-center justify-between border-b border-gray-200 dark:border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-tertiary/10 border border-tertiary/20 text-tertiary">
                    <Settings className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-secondary dark:text-white">Cookie Preference Center</h4>
                    <p className="text-xs text-labelGray dark:text-gray-400">Configure your privacy choices</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowPreferenceModal(false)}
                  className="p-1.5 rounded-xl text-labelGray dark:text-gray-400 hover:text-secondary dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3.5 max-h-72 overflow-y-auto pr-1 text-left">
                {cookieCategories.map((cat) => (
                  <div key={cat.id} className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-secondary dark:text-white">{cat.name}</span>
                        {cat.required && (
                          <span className="text-[10px] bg-tertiary/10 text-tertiary px-2 py-0.5 rounded font-mono border border-tertiary/20">
                            Required
                          </span>
                        )}
                      </div>

                      {/* Toggle Switch */}
                      <button
                        disabled={cat.required}
                        onClick={() => handleToggle(cat.id)}
                        className={`w-12 h-6 rounded-full transition-all relative flex items-center px-0.5 ${
                          preferences[cat.id] ? "bg-tertiary ring-2 ring-tertiary/20" : "bg-gray-300 dark:bg-gray-700"
                        } ${cat.required ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
                      >
                        <span
                          className={`w-5 h-5 rounded-full shadow-md transform transition-transform ${
                            preferences[cat.id] ? "translate-x-6 bg-white shadow-sm" : "translate-x-0 bg-white dark:bg-gray-300"
                          }`}
                        />
                      </button>
                    </div>
                    <p className="text-xs text-labelGray dark:text-gray-300 leading-relaxed">{cat.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-gray-200 dark:border-white/10">
                <button
                  onClick={() => setShowPreferenceModal(false)}
                  className="px-4 py-2 text-xs font-medium text-labelGray dark:text-gray-400 hover:text-secondary dark:hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <motion.button
                  onClick={handleSavePreferences}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-5 py-2.5 text-xs font-bold text-primary bg-tertiary hover:bg-tertiary/90 rounded-xl shadow-lg shadow-tertiary/20 hover:shadow-[0_8px_24px_rgba(18,213,118,0.3)] transition-all"
                >
                  Save Preferences
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

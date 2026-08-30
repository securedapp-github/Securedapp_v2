"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Loader2, CheckCircle2, AlertTriangle, ShieldCheck, FileSpreadsheet, Lock } from "lucide-react";

export default function CookieScannerWidget() {
  const [domainInput, setDomainInput] = useState("example.com");
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [scanResult, setScanResult] = useState(null);

  const scanStepsText = [
    "Connecting to domain and rendering DOM...",
    "Scanning third-party JS scripts & SDKs...",
    "Analyzing LocalStorage, SessionStorage & Cookies...",
    "Categorizing trackers for DPDP & GDPR compliance..."
  ];

  const handleScan = (e) => {
    e.preventDefault();
    if (!domainInput.trim()) return;

    setIsScanning(true);
    setScanResult(null);
    setScanStep(0);

    // Simulate step 1
    setTimeout(() => setScanStep(1), 800);
    // Simulate step 2
    setTimeout(() => setScanStep(2), 1600);
    // Simulate step 3
    setTimeout(() => setScanStep(3), 2400);

    // Final result
    setTimeout(() => {
      setIsScanning(false);
      const cleanDomain = domainInput.replace(/^https?:\/\//, "").replace(/\/.*$/, "");
      setScanResult({
        domain: cleanDomain,
        totalCookies: 14,
        necessary: 3,
        functional: 2,
        analytics: 5,
        marketing: 4,
        unblockedTrackers: ["Google Analytics (GA4)", "Meta Pixel", "Hotjar Insights"],
        complianceScore: "68% - Action Required",
        auditTimestamp: new Date().toISOString()
      });
    }, 3200);
  };

  return (
    <div className="w-full bg-secondary/80 border border-gray-800 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Search className="w-5 h-5 text-tertiary" />
            Website Cookie Scanner Simulator
          </h3>
          <p className="text-sm text-gray-400">Scan any domain to detect active cookies, third-party trackers, and compliance gaps</p>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 text-tertiary text-xs font-semibold">
          DPDP 2023 Scanner Engine
        </div>
      </div>

      {/* Domain Input Form */}
      <form onSubmit={handleScan} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <input
            type="text"
            value={domainInput}
            onChange={(e) => setDomainInput(e.target.value)}
            placeholder="Enter your website domain (e.g. mycompany.com)"
            disabled={isScanning}
            className="w-full bg-primary/90 border border-gray-700 focus:border-tertiary focus:outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 font-mono transition-colors"
          />
        </div>
        <button
          type="submit"
          disabled={isScanning}
          className="px-6 py-3 bg-tertiary hover:bg-tertiary/90 text-primary font-semibold rounded-xl text-sm transition-all flex items-center justify-center gap-2 shrink-0 disabled:opacity-50"
        >
          {isScanning ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Scanning...
            </>
          ) : (
            <>
              <Search className="w-4 h-4" />
              Scan Domain
            </>
          )}
        </button>
      </form>

      {/* Scanning Progress State */}
      {isScanning && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-5 rounded-xl bg-primary/60 border border-gray-800 space-y-3"
        >
          <div className="flex items-center justify-between text-xs text-gray-300">
            <span className="font-semibold text-tertiary">{scanStepsText[scanStep]}</span>
            <span className="font-mono text-gray-400">Step {scanStep + 1} of 4</span>
          </div>
          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-tertiary rounded-full"
              initial={{ width: "10%" }}
              animate={{ width: `${(scanStep + 1) * 25}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      )}

      {/* Scan Results Display */}
      {scanResult && !isScanning && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 rounded-xl bg-primary/90 border border-gray-800 space-y-5"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-800">
            <div>
              <div className="text-xs text-gray-400 font-mono">SCAN REPORT FOR</div>
              <div className="text-lg font-bold text-white font-mono">{scanResult.domain}</div>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" />
              {scanResult.complianceScore}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-lg bg-secondary border border-gray-800 text-center">
              <div className="text-xl font-bold text-white">{scanResult.necessary}</div>
              <div className="text-[11px] text-gray-400">Strictly Necessary</div>
            </div>
            <div className="p-3 rounded-lg bg-secondary border border-gray-800 text-center">
              <div className="text-xl font-bold text-blue-400">{scanResult.functional}</div>
              <div className="text-[11px] text-gray-400">Functional</div>
            </div>
            <div className="p-3 rounded-lg bg-secondary border border-gray-800 text-center">
              <div className="text-xl font-bold text-yellow-400">{scanResult.analytics}</div>
              <div className="text-[11px] text-gray-400">Analytics Trackers</div>
            </div>
            <div className="p-3 rounded-lg bg-secondary border border-gray-800 text-center">
              <div className="text-xl font-bold text-red-400">{scanResult.marketing}</div>
              <div className="text-[11px] text-gray-400">Marketing & Pixels</div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-secondary/70 border border-gray-800 space-y-2">
            <div className="text-xs font-bold text-gray-300 flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-tertiary" />
              Detected Scripts Requiring Pre-Consent Auto-Blocking:
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {scanResult.unblockedTrackers.map((tracker, idx) => (
                <span key={idx} className="text-xs px-2.5 py-1 rounded bg-red-500/10 border border-red-500/30 text-red-300 font-mono">
                  {tracker}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-gray-400">Enable CookieHub to get 100% compliant in minutes.</span>
            <button className="px-4 py-2 bg-tertiary hover:bg-tertiary/90 text-primary text-xs font-bold rounded-lg transition-colors">
              Deploy CookieHub
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

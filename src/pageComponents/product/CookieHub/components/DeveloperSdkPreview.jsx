"use client";

import React, { useState } from "react";
import { Code2, Copy, Check, Terminal, FileCode, Smartphone } from "lucide-react";
import { sdkExamples } from "../data";

export default function DeveloperSdkPreview() {
  const [activeTab, setActiveTab] = useState("vanillaJs");
  const [copied, setCopied] = useState(false);

  const tabs = [
    { id: "vanillaJs", label: "Vanilla JavaScript", icon: <Code2 className="w-4 h-4" /> },
    { id: "reactNext", label: "React / Next.js", icon: <FileCode className="w-4 h-4" /> },
    { id: "swiftSdk", label: "iOS (Swift API)", icon: <Smartphone className="w-4 h-4" /> },
    { id: "kotlinSdk", label: "Android (Kotlin API)", icon: <Smartphone className="w-4 h-4" /> },
  ];

  const handleCopy = () => {
    const textToCopy = sdkExamples[activeTab];
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-secondary/80 border border-gray-800 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Code2 className="w-5 h-5 text-tertiary" />
            Developer Integration & Multi-Platform SDK Hub
          </h3>
          <p className="text-sm text-gray-400">Install CookieHub in under 10 minutes using JS SDK, React hooks, or native mobile REST APIs</p>
        </div>
        <div className="px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 text-tertiary text-xs font-mono font-medium">
          &lt;15KB Bundle • RS256 JWT Ready
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-800 pb-2">
        <div className="flex flex-wrap items-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === tab.id
                  ? "bg-tertiary/20 text-tertiary border border-tertiary/30"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/50"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-xs font-medium text-gray-300 transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Code</span>
            </>
          )}
        </button>
      </div>

      {/* Code Box */}
      <div className="bg-primary/95 border border-gray-800 rounded-xl p-5 overflow-x-auto relative">
        <pre className="text-xs sm:text-sm font-mono text-tertiary leading-relaxed">
          <code>{sdkExamples[activeTab]}</code>
        </pre>
      </div>
    </div>
  );
}

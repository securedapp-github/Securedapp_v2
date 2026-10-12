"use client";

import React, { useState } from "react";
import { 
  Code, 
  ShieldCheck, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Sliders, 
  Lock, 
  FileText, 
  Trash2, 
  RefreshCw,
  Sparkles,
  Server,
  Cpu,
  Terminal,
  Layers
} from "lucide-react";

export default function InteractiveSaaSConsentSimulator() {
  const [activeTab, setActiveTab] = useState("dual-role"); // "dual-role" | "webhook-stream" | "ai-firewall" | "rfp-export"

  // Mode 1: Dual Role Selected
  const [selectedRole, setSelectedRole] = useState("fiduciary"); // "fiduciary" | "processor"

  // Mode 2: Webhook Telemetry
  const [webhookLogs, setWebhookLogs] = useState([
    { id: 1, time: "11:20:04.102", tenant: "Acme Corp (Tenant #99)", user: "user_8829@client.in", event: "Consent Revocation (Analytics)", latency: "42ms", status: "Propagated" },
    { id: 2, time: "11:20:04.148", tenant: "Acme Corp (Tenant #99)", user: "user_8829@client.in", event: "Redis Cache Eviction", latency: "12ms", status: "Evicted" },
  ]);
  const [isPushing, setIsPushing] = useState(false);

  // Mode 3: AI Model Training Firewall
  const [aiConsentEnabled, setAiConsentEnabled] = useState(false);

  // Mode 4: RFP Export
  const [rfpExported, setRfpExported] = useState(false);

  const triggerRevocationWebhook = () => {
    setIsPushing(true);
    setTimeout(() => {
      const time = new Date().toLocaleTimeString();
      setWebhookLogs(prev => [
        { id: Date.now(), time, tenant: "Enterprise FinCorp (Tenant #104)", user: "rahul.v@fincorp.co", event: "Opt-Out (Email Marketing & Profiling)", latency: "38ms", status: "Propagated" },
        ...prev.slice(0, 4)
      ]);
      setIsPushing(false);
    }, 400);
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
            SaaS Dual-Role Architecture & Webhook Ingestion Engine
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            Simulate Fiduciary vs Processor boundaries, sub-80ms customer consent webhooks, and AI training firewalls.
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex bg-[#071012] p-1 rounded-xl border border-[#1a3842] self-start md:self-auto overflow-x-auto max-w-full">
          <button
            onClick={() => setActiveTab("dual-role")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
              activeTab === "dual-role"
                ? "bg-tertiary text-secondary shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Fiduciary vs Processor
          </button>
          <button
            onClick={() => setActiveTab("webhook-stream")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
              activeTab === "webhook-stream"
                ? "bg-tertiary text-secondary shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Real-Time Webhooks
          </button>
          <button
            onClick={() => setActiveTab("ai-firewall")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
              activeTab === "ai-firewall"
                ? "bg-tertiary text-secondary shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            AI Training Firewall
          </button>
          <button
            onClick={() => setActiveTab("rfp-export")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
              activeTab === "rfp-export"
                ? "bg-tertiary text-secondary shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Enterprise RFP Pack
          </button>
        </div>
      </div>

      {/* Main Tab Area */}
      <div className="mt-6">
        {activeTab === "dual-role" && (
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <button
                onClick={() => setSelectedRole("fiduciary")}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  selectedRole === "fiduciary"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-lg"
                    : "bg-[#09161a] text-gray-400 border border-[#16353e] hover:text-white"
                }`}
              >
                <Server className="w-4 h-4 text-emerald-400" />
                <span>When You are the Data Fiduciary</span>
              </button>
              <button
                onClick={() => setSelectedRole("processor")}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  selectedRole === "processor"
                    ? "bg-blue-500/20 text-blue-300 border border-blue-500/40 shadow-lg"
                    : "bg-[#09161a] text-gray-400 border border-[#16353e] hover:text-white"
                }`}
              >
                <Layers className="w-4 h-4 text-blue-400" />
                <span>When You are the Data Processor (Sec 8(2))</span>
              </button>
            </div>

            {selectedRole === "fiduciary" ? (
              <div className="p-5 rounded-2xl bg-[#081316] border border-emerald-500/30 animate-fadeIn space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#1b3d47]">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Data Fiduciary Role (Your Own Direct Users)
                  </h4>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                    Direct DPDP Compliance
                  </span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  You determine the purpose and means for your website visitors, software trial sign-ups, customer billing admin contacts, and internal product feature analytics. You must provide multilingual notices, manage consent, and handle DSRs directly.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-[#0e2127] border border-[#204955]">
                    <span className="text-gray-400 block text-[10px]">Data Scope:</span>
                    <span className="text-white font-bold">Admin Email & Billing</span>
                    <p className="text-gray-400 text-[10px] mt-1">Sec 7(a) Voluntary / Contract</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0e2127] border border-[#204955]">
                    <span className="text-gray-400 block text-[10px]">Marketing & Drip Campaigns:</span>
                    <span className="text-amber-400 font-bold">Section 6 Consent</span>
                    <p className="text-gray-400 text-[10px] mt-1">Mandatory unbundled opt-in</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0e2127] border border-[#204955]">
                    <span className="text-gray-400 block text-[10px]">DSR Erasure Handling:</span>
                    <span className="text-tertiary font-bold">Direct Fiduciary SLA</span>
                    <p className="text-gray-400 text-[10px] mt-1">Must erase within 30 days</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-5 rounded-2xl bg-[#081316] border border-blue-500/30 animate-fadeIn space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#1b3d47]">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Layers className="w-4 h-4 text-blue-400" />
                    Data Processor Role (Customer Tenant Data)
                  </h4>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono">
                    Bound by Contract / DPA
                  </span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Your enterprise customers are the Data Fiduciaries; your SaaS platform is purely the Data Processor under Section 8(2). You may process end-user records only under valid contractual instructions. Secondary processing (like model training) is barred without customer consent.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-[#0e2127] border border-[#204955]">
                    <span className="text-gray-400 block text-[10px]">Data Scope:</span>
                    <span className="text-white font-bold">Customer CRM & Records</span>
                    <p className="text-gray-400 text-[10px] mt-1">Processed per DPA only</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0e2127] border border-[#204955]">
                    <span className="text-gray-400 block text-[10px]">End-User Rights (DSRs):</span>
                    <span className="text-blue-400 font-bold">Forward to Customer</span>
                    <p className="text-gray-400 text-[10px] mt-1">Processor assists customer</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0e2127] border border-[#204955]">
                    <span className="text-gray-400 block text-[10px]">Security Safeguards:</span>
                    <span className="text-emerald-400 font-bold">Section 8(5) Mandatory</span>
                    <p className="text-gray-400 text-[10px] mt-1">₹250 Cr statutory penalty</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "webhook-stream" && (
          <div className="p-5 rounded-2xl bg-[#081316] border border-[#1b3d47] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-tertiary" />
                  Real-Time Consent Webhook Ingestion Telemetry
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  When an enterprise customer's end-user revokes consent, SecureCMS broadcasts sub-80ms webhooks to purge downstream pipelines.
                </p>
              </div>

              <button
                onClick={triggerRevocationWebhook}
                disabled={isPushing}
                className="px-4 py-2 bg-tertiary text-secondary rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-md hover:bg-tertiary/90 disabled:opacity-50"
              >
                {isPushing ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <RefreshCw className="w-3.5 h-3.5" />}
                <span>Simulate End-User Revocation Webhook</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-[#1b3d47] text-gray-400">
                    <th className="py-2.5 px-3">Time</th>
                    <th className="py-2.5 px-3">Tenant Name</th>
                    <th className="py-2.5 px-3">User Identifier</th>
                    <th className="py-2.5 px-3">Event Action</th>
                    <th className="py-2.5 px-3">Latency</th>
                    <th className="py-2.5 px-3 text-right">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#132d34]">
                  {webhookLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-[#0e2127]/60 transition-colors">
                      <td className="py-2.5 px-3 text-gray-400">{log.time}</td>
                      <td className="py-2.5 px-3 text-white font-medium">{log.tenant}</td>
                      <td className="py-2.5 px-3 text-tertiary">{log.user}</td>
                      <td className="py-2.5 px-3 text-gray-300">{log.event}</td>
                      <td className="py-2.5 px-3 text-emerald-400">{log.latency}</td>
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
          </div>
        )}

        {activeTab === "ai-firewall" && (
          <div className="p-5 rounded-2xl bg-[#081316] border border-[#1b3d47] space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-tertiary" />
                  AI Model Training Governance Firewall
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  Using customer data to train or fine-tune internal LLMs legally shifts your role from Processor to Fiduciary.
                </p>
              </div>

              <button
                onClick={() => setAiConsentEnabled(!aiConsentEnabled)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  aiConsentEnabled
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                    : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                }`}
              >
                <span>{aiConsentEnabled ? "Model Training DPA: OPTED IN" : "Firewall: ACTIVE (Training Blocked)"}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-[#0e2127] border border-[#204955] space-y-3">
                <div className="text-tertiary font-bold text-sm">CUSTOMER TENANT INGESTION</div>
                <div className="space-y-1.5 text-gray-300">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Dataset Origin:</span>
                    <span className="text-white">Tenant #44 (FinTech Client)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Ingested Payload:</span>
                    <span className="text-white">2.4 Million Chat Transcripts</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">PII Token Stripping:</span>
                    <span className="text-emerald-400 font-bold">100% Scrubbed at Ingestion</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0e2127] border border-[#204955] space-y-3">
                <div className="text-tertiary font-bold text-sm">LLM TRAINING PIPELINE STATUS</div>
                <div className="space-y-1.5 text-gray-300">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Foundation Model Fine-Tuning:</span>
                    <span className={aiConsentEnabled ? "text-amber-400 font-bold" : "text-emerald-400 font-bold"}>
                      {aiConsentEnabled ? "TRAINING ALLOWED (DPA Bound)" : "STRICTLY BLOCKED"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Statutory Fiduciary Risk:</span>
                    <span className={aiConsentEnabled ? "text-amber-400" : "text-emerald-400"}>
                      {aiConsentEnabled ? "High: Role Shifted to Fiduciary" : "Zero: Clean Processor Boundary"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Audit Receipt:</span>
                    <span className="text-tertiary">sha256:663d...002a</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "rfp-export" && (
          <div className="p-5 rounded-2xl bg-[#081316] border border-[#1b3d47] space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-tertiary" />
                  Enterprise RFP Compliance Evidence Pack
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  1-click exportable DPDP compliance dossiers, DPA templates, and VAPT proof to win Indian enterprise bids.
                </p>
              </div>

              {!rfpExported ? (
                <button
                  onClick={() => setRfpExported(true)}
                  className="px-4 py-2 bg-tertiary text-secondary rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-md hover:bg-tertiary/90"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Generate Enterprise RFP Pack</span>
                </button>
              ) : (
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" /> Ready for Download
                </span>
              )}
            </div>

            {rfpExported && (
              <div className="space-y-4 animate-fadeIn">
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-xs">
                  <strong>Enterprise Audit Dossier Generated:</strong> Included in the pack: Section 8(2) Standard DPA, Sub-Processor Registry, CERT-In VAPT attestation, MeitY Data Residency Certificate, and DSR handling SLAs.
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-[#0e2127] border border-[#204955]">
                    <div className="text-white font-bold mb-1">DPA & Sub-Processor Schedule</div>
                    <p className="text-gray-400 text-[11px]">Legally binding terms satisfying Section 8(2) for banking & telecom RFP buyers.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0e2127] border border-[#204955]">
                    <div className="text-white font-bold mb-1">Blockchain Hash Receipts</div>
                    <p className="text-gray-400 text-[11px]">Cryptographic proof of tenant isolation and tamper-proof consent logging.</p>
                  </div>
                </div>

                <button
                  onClick={() => setRfpExported(false)}
                  className="text-xs text-tertiary hover:underline flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" /> Reset Pack
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

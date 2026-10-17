"use client";

import React, { useState } from "react";
import { 
  Code, 
  ShieldCheck, 
  CheckCircle, 
  CheckCircle2,
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
  Layers,
  Download,
  ExternalLink
} from "lucide-react";

export default function InteractiveSaaSConsentSimulator({
  activeTab: externalActiveTab,
  setActiveTab: externalSetActiveTab,
  onDownloadRfpPack
} = {}) {
  const [internalActiveTab, setInternalActiveTab] = useState("dual-role"); // "dual-role" | "webhook-stream" | "ai-firewall" | "rfp-export"
  const activeTab = externalActiveTab !== undefined ? externalActiveTab : internalActiveTab;
  const setActiveTab = externalSetActiveTab || setInternalActiveTab;

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

  const handleDownloadRfpPack = () => {
    const timestamp = new Date().toISOString();
    const dossierContent = `================================================================================
SECUREDAPP SECURECMS - ENTERPRISE RFP & DPDP COMPLIANCE EVIDENCE PACK
Standard Section 8(2) DPA, Sub-Processor Schedules & Architecture Attestation
Generated: ${timestamp}
Platform: SecureCMS SaaS Dual-Role Governance Engine (v2.4.0)
Jurisdiction: India (DPDP Act 2023 & DPDP Rules 2025)
================================================================================

1. EXECUTIVE ENTITY & ROLE ASSIGNMENT
--------------------------------------------------------------------------------
Vendor / Data Processor:
  Vettedcode Technologies India Pvt. Ltd. (SecureDApp)
  Registered Office: Bangalore, Karnataka, India
  Corporate Website: https://securedapp.io | Contact: enterprise@securedapp.io

SaaS Customer / Data Fiduciary:
  Enterprise Client Organization (Customer Tenant)

Operational Architecture:
  - Multi-tenant cloud SaaS deployment with logical & cryptographic isolation.
  - Customer holds 100% legal ownership as Data Fiduciary under DPDP Act 2023.
  - SecureDApp acts strictly as Data Processor pursuant to Section 8(2).

2. SECTION 8(2) DATA PROCESSING ADDENDUM (DPA) MANDATORY SCHEDULES
--------------------------------------------------------------------------------
Schedule A: Processing Instructions & Scope
  - Data Processor processes Personal Data solely on documented instructions of
    the Data Fiduciary for delivery of subscribed SaaS features.
  - Secondary use (including training AI models on customer data, reselling, or
    profiling) is strictly prohibited unless separate written consent is obtained.

Schedule B: Sub-Processor Governance & 30-Day Notice Rule
  - Authorized Tier-1 Hosting: AWS India (Mumbai, ap-south-1), GCP India (Mumbai),
    Microsoft Azure India (Central India - Pune). All MeitY-empaneled sovereign cloud.
  - Addition of Sub-Processors: Guaranteed minimum 30-day prior electronic notice
    with contractual right for Customer to object or require data segregation.
  - Mirror Obligations: All sub-processors bound by identical Section 8 security
    safeguards and confidentiality covenants.

Schedule C: Security Safeguards (Section 8(5) Statutory Adherence)
  - Encryption at Rest: AES-256 with tenant-specific key management (KMS/HSM).
  - Encryption in Transit: TLS 1.3 mandatory with Perfect Forward Secrecy.
  - VAPT Attestation: Bi-annual third-party audits by CERT-In Empaneled Auditors.
  - SOC2 Type II & ISO 27001: Continuous telemetry monitoring & intrusion detection.

3. CONSENT LIFECYCLE & WEBHOOK TELEMETRY SLA
--------------------------------------------------------------------------------
- Real-Time Webhook Latency: Sub-80ms p99 SLA from consent revocation event.
- In-Memory Cache Invalidation: Automatic Redis/Memcached tenant eviction in <15ms.
- Downstream Suppression: Real-time broadcast to CRM, marketing, and analytics
  pipelines ensuring immediate data processing cessation.
- Cryptographic Audit Trail: Tamper-proof SHA-256 consent hash receipts logged
  for every consent grant, modification, and revocation event.

4. AI MODEL TRAINING FIREWALL & ZERO-PII SCRUBBING
--------------------------------------------------------------------------------
- Default Firewall State: ACTIVE (All tenant documents and transcripts blocked).
- Automated PII Redaction: Regex + NER tokenization stripping Names, Email, Phone,
  PAN, and Aadhaar prior to any internal inference workloads.
- Zero Reverse Inference: No training weights derived from tenant-specific corpora.

5. DATA PRINCIPAL RIGHTS (DSR) & INCIDENT RESPONSE
--------------------------------------------------------------------------------
- Right to Access / Correction: Turnkey DSR REST APIs responding within 72 hours.
- Right to Erasure (Section 12): Automated cascade purge across database, cold
  storage snapshots, and sub-processor nodes within 30 days.
- CERT-In Incident SLA: Mandatory notification to Customer within 6 hours of any
  confirmed or suspected security incident affecting customer data.

================================================================================
For custom bilateral DPA execution, custom enterprise questionnaires, or to schedule
a legal-technical architectural walk-through:
Email: support@securedapp.io | enterprise@securedapp.io
Phone: +91 98765 43210
Official Documentation: https://securedapp.io/dpdp-compliance-platform/saas
================================================================================`;

    try {
      const blob = new Blob([dossierContent], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `SecureDApp_SaaS_Enterprise_RFP_Compliance_Pack_${Date.now()}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setRfpExported(true);
    } catch (err) {
      console.error("Download failed:", err);
      setRfpExported(true);
    }
  };

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
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#071012] rounded-xl border border-[#1a3842] self-start xl:self-auto shrink-0 shadow-inner">
          <button
            onClick={() => setActiveTab("dual-role")}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === "dual-role"
                ? "bg-tertiary text-secondary font-bold shadow-md"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Fiduciary vs Processor</span>
          </button>
          <button
            onClick={() => setActiveTab("webhook-stream")}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === "webhook-stream"
                ? "bg-tertiary text-secondary font-bold shadow-md"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Real-Time Webhooks</span>
          </button>
          <button
            onClick={() => setActiveTab("ai-firewall")}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === "ai-firewall"
                ? "bg-tertiary text-secondary font-bold shadow-md"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>AI Training Firewall</span>
          </button>
          <button
            onClick={() => setActiveTab("rfp-export")}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === "rfp-export"
                ? "bg-tertiary text-secondary font-bold shadow-md ring-1 ring-tertiary/50"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Enterprise RFP Pack</span>
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
                className="px-4 py-2 bg-tertiary text-secondary rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-md hover:bg-tertiary/90 disabled:opacity-50 cursor-pointer"
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
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
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
          <div className="p-5 sm:p-6 rounded-2xl bg-[#081316] border border-[#1b3d47] space-y-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#1b3d47]/80">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-tertiary/10 text-tertiary border border-tertiary/20 font-semibold uppercase">
                    Section 8(2) Compliance Dossier
                  </span>
                  <span className="text-[10px] font-mono text-gray-400">
                    B2B RFP Accelerator
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-tertiary" />
                  Enterprise RFP Compliance Evidence Pack
                </h4>
                <p className="text-xs text-gray-400 mt-1 max-w-2xl">
                  Instant exportable DPDP compliance dossiers, bilateral Section 8(2) DPA schedules, sub-processor registry, and CERT-In VAPT proof to win Indian enterprise & banking bids.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <button
                  onClick={handleDownloadRfpPack}
                  className="px-4 py-2.5 bg-tertiary text-secondary rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(18,213,118,0.25)] hover:bg-tertiary/90 cursor-pointer"
                  title="Generate & download text compliance dossier immediately"
                >
                  <Download className="w-4 h-4" />
                  <span>{rfpExported ? "Download Pack Again (.txt)" : "Generate Enterprise RFP Pack"}</span>
                </button>

                {onDownloadRfpPack && (
                  <button
                    onClick={onDownloadRfpPack}
                    className="px-4 py-2.5 bg-secondary/20 dark:bg-white/5 border border-secondary/30 dark:border-white/10 hover:border-tertiary text-white rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer backdrop-blur-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-tertiary" />
                    <span>Request Official DPA</span>
                  </button>
                )}
              </div>
            </div>

            {rfpExported && (
              <div className="space-y-4 animate-fadeIn">
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-xs flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-emerald-300 font-semibold mb-0.5">
                      Enterprise Audit Dossier Generated & Downloaded!
                    </strong>
                    Your compliance dossier <code className="px-1.5 py-0.5 rounded bg-black/40 text-tertiary font-mono">SecureDApp_SaaS_Enterprise_RFP_Compliance_Pack.txt</code> has been downloaded. It includes Section 8(2) Standard DPA schedules, Sub-Processor Registry, CERT-In VAPT attestation, MeitY Data Residency Certificate, and DSR handling SLAs.
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-[#0e2127] border border-[#204955] flex flex-col justify-between">
                    <div>
                      <div className="text-white font-bold mb-1 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        DPA Section 8(2) Schedule
                      </div>
                      <p className="text-gray-400 text-[11px] leading-relaxed">
                        Legally binding contract clauses satisfying Section 8(2) for banking, telecom & enterprise buyers.
                      </p>
                    </div>
                    <span className="text-[10px] text-tertiary mt-2">Status: Pre-negotiated Ready</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0e2127] border border-[#204955] flex flex-col justify-between">
                    <div>
                      <div className="text-white font-bold mb-1 flex items-center gap-1.5">
                        <Lock className="w-4 h-4 text-tertiary" />
                        Sub-Processor 30-Day SLA
                      </div>
                      <p className="text-gray-400 text-[11px] leading-relaxed">
                        Contractual commitment for 30-day prior written notice before onboarding downstream cloud providers.
                      </p>
                    </div>
                    <span className="text-[10px] text-tertiary mt-2">Audit: CERT-In VAPT Certified</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0e2127] border border-[#204955] flex flex-col justify-between">
                    <div>
                      <div className="text-white font-bold mb-1 flex items-center gap-1.5">
                        <Server className="w-4 h-4 text-blue-400" />
                        India Sovereign Cloud Residency
                      </div>
                      <p className="text-gray-400 text-[11px] leading-relaxed">
                        Attestation for AWS India (ap-south-1), GCP Mumbai & Azure Pune MeitY empaneled regions.
                      </p>
                    </div>
                    <span className="text-[10px] text-blue-400 mt-2">Residency: 100% Domestic Data</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleDownloadRfpPack}
                      className="px-3 py-1.5 rounded-lg bg-tertiary/10 hover:bg-tertiary/20 text-tertiary border border-tertiary/30 text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download File Again (.txt)</span>
                    </button>
                    {onDownloadRfpPack && (
                      <button
                        onClick={onDownloadRfpPack}
                        className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5 text-tertiary" />
                        <span>Request Bilateral Signed Copy</span>
                      </button>
                    )}
                  </div>

                  <button
                    onClick={() => setRfpExported(false)}
                    className="text-xs text-gray-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3" /> Reset Pack
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

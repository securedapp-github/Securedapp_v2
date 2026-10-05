"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ShieldCheck, Download, Calendar, ArrowRight, Loader2, Lock, Building, Mail, User, Phone, Briefcase } from "lucide-react";
import { sendTicketToCRM } from "../../../utils/crmTicketService";
import { toast } from "react-toastify";

export function BankingDemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bankName: "",
    role: "Chief Compliance Officer / DPO",
    cbsPlatform: "Finacle",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.bankName) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      await sendTicketToCRM({
        title: `Banking Demo Request: ${formData.bankName} (${formData.name})`,
        description: `Banking Demo Request from Consent Management Platform for Banks.\n\nBank / Institution: ${formData.bankName}\nRole: ${formData.role}\nCore Banking System: ${formData.cbsPlatform}\nPhone: ${formData.phone}\nNotes: ${formData.message || "N/A"}`,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        projectName: formData.bankName,
        category: "Other",
        priority: "High",
        metadata: {
          leadType: "Banking Demo Request",
          sourceWebsite: "Consent Management Platform for Banks",
          role: formData.role,
          cbsPlatform: formData.cbsPlatform,
          bankName: formData.bankName,
        },
      });

      setSubmitted(true);
      toast.success("Banking Demo request received! Our BFSI specialist will contact you.");
    } catch (err) {
      console.error(err);
      toast.error("Unable to submit directly, scheduling calendar opening...");
      window.open("https://calendar.app.google/DwaR8QDDAotwnafu5", "_blank");
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white dark:bg-[#001428] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden text-slate-900 dark:text-slate-100">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-white/10 flex items-center justify-between bg-slate-50 dark:bg-[#001c38]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-outfit text-slate-900 dark:text-white">Book an Enterprise Banking Demo</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Tailored walkthrough of SecureCMS for Scheduled Banks & NBFCs</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center border border-emerald-500/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white font-outfit">Demo Request Confirmed</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                Thank you, <strong className="text-emerald-500">{formData.name}</strong>. Our BFSI DPDP solutions team will reach out to <strong className="text-emerald-500">{formData.email}</strong> within 4 business hours with custom sandboxes.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => {
                    window.open("https://calendar.app.google/DwaR8QDDAotwnafu5", "_blank");
                    onClose();
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-sm hover:opacity-90 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                >
                  <Calendar className="w-4 h-4" /> Pick a Direct Meeting Time
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-white/10"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Iyer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Official Work Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. ramesh@bank.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Bank / Financial Institution <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. State Bank / HDFC / Axis"
                      value={formData.bankName}
                      onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Phone / Mobile (Optional)
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Primary Role
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-[#001c38] text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="Chief Compliance Officer / DPO">Chief Compliance Officer / DPO</option>
                      <option value="CISO / IT Risk Head">CISO / IT Risk Head</option>
                      <option value="Head of Digital Banking">Head of Digital Banking</option>
                      <option value="General Counsel / Legal">General Counsel / Legal</option>
                      <option value="Core Banking Architect / IT">Core Banking Architect / IT</option>
                      <option value="Enterprise Architecture / Other">Enterprise Architecture / Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Core Banking (CBS) Platform
                  </label>
                  <select
                    value={formData.cbsPlatform}
                    onChange={(e) => setFormData({ ...formData, cbsPlatform: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-[#001c38] text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Finacle (Infosys)">Finacle (Infosys)</option>
                    <option value="TCS BaNCS">TCS BaNCS</option>
                    <option value="Oracle FLEXCUBE">Oracle FLEXCUBE</option>
                    <option value="Custom ESB / Proprietary CBS">Custom ESB / Proprietary CBS</option>
                    <option value="Cooperative / Regional Core System">Cooperative / Regional Core System</option>
                    <option value="Other Core System">Other Core System</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Specific Requirements or Questions (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Branch teller tablet rollout, PMLA vs DPDP partial erasure, multi-lingual notice requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 text-sm rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-bold text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Transmitting to BFSI Advisory Desk...
                    </>
                  ) : (
                    <>
                      Confirm Banking Demo <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-[11px] text-center text-slate-400 dark:text-slate-500 mt-2 flex items-center justify-center gap-1">
                  <Lock className="w-3 h-3" /> NDA protected • Zero obligation • Built for DPDP Act 2023 compliance
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export function LeadMagnetModal({ isOpen, onClose, assetType = "checklist" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bankName: "",
    designation: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [downloadReady, setDownloadReady] = useState(false);

  if (!isOpen) return null;

  const isChecklist = assetType === "checklist";
  const title = isChecklist
    ? "Download the Bank DPDP Consent Checklist"
    : "Download the Bank IT Security & Architecture Note";
  const subtitle = isChecklist
    ? "A 42-point practical compliance audit checklist covering branches, apps, CBS, and Section 6(10) proof."
    : "Technical whitepaper detailing mTLS 1.3, public key cryptography, blockchain audit logs, and on-premise deployment.";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.bankName) {
      toast.error("Please fill in your name, official email, and bank name.");
      return;
    }

    setLoading(true);
    try {
      await sendTicketToCRM({
        title: `Resource Download: ${isChecklist ? "DPDP Consent Checklist" : "Security Note"} - ${formData.bankName}`,
        description: `Lead downloaded: ${title}\nName: ${formData.name}\nEmail: ${formData.email}\nBank: ${formData.bankName}\nDesignation: ${formData.designation || "Not provided"}\nPhone: ${formData.phone || "Not provided"}`,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        projectName: formData.bankName,
        category: "Other",
        priority: "Medium",
        metadata: {
          leadType: isChecklist ? "Bank DPDP Consent Checklist" : "Banking Security Note",
          sourceWebsite: "Consent Management Platform for Banks",
          bankName: formData.bankName,
          designation: formData.designation,
        },
      });

      setDownloadReady(true);
      toast.success("Details confirmed! Your access link is ready.");
    } catch (err) {
      console.error(err);
      setDownloadReady(true);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    // Generate a downloadable text/document representation of the checklist / security note
    const content = isChecklist
      ? `SECUREDAPP - BANK DPDP CONSENT CHECKLIST (DPDP ACT 2023 & DPDP RULES 2025)
Prepared for: ${formData.bankName || "Banking Institution"}
Generated on: ${new Date().toLocaleDateString()}

1. BRANCH & PHYSICAL TOUCHPOINTS
[ ] Audit all physical account-opening forms to identify bundled consents.
[ ] Separate KYC/AML legal declarations from marketing, credit card cross-sell, and insurance opt-ins.
[ ] Equip branch staff / tablet onboarding with digital unbundled checkboxes.
[ ] Implement OTP verification (SMS / WhatsApp) for any consent taken at branch counters to satisfy Section 6(10) burden of proof.

2. MULTILINGUAL NOTICE COMPLIANCE (SECTION 5)
[ ] Publish notices in English and all 22 Eighth Schedule Indian languages.
[ ] Ensure notice specifies: Personal data collected, Purpose of processing, Withdrawal mechanism, and DPBI complaint procedure.
[ ] Implement versioning control to log which notice iteration the customer viewed.

3. WITHDRAWAL PARITY (SECTION 6(4))
[ ] Ensure withdrawal mechanism is as easy as giving consent (e.g. 1-click in mobile app).
[ ] Ensure withdrawal webhook propagates to Core Banking (CBS), marketing CRM, and third-party fintechs in real time (<250ms).

4. RETENTION VS ERASURE CONFLICT (PMLA SECTION 12 VS DPDP SECTION 12)
[ ] Configure intelligent partial erasure: wipe marketing/analytics profiles immediately upon request.
[ ] Quarantine customer identification and transaction records for 5 years post-relationship under PMLA Section 12 & DPDP Section 8(7).

5. AUDIT EVIDENCE & BLOCKCHAIN IMMUTABILITY
[ ] Ensure every consent event logs: Unique consent_id, Timestamp, SHA-256 hash, Channel ID, and Purpose Bitmask.
[ ] Provide read-only compliance dashboard for RBI and DPBI audit inspections.

For full enterprise deployment, contact: sales@securedapp.io | https://securedapp.io`
      : `SECUREDAPP - BANK IT SECURITY & ARCHITECTURE NOTE
Target Architecture: Scheduled Commercial Banks & NBFCs
Document Version: 2026.1 - DPDP Act 2023 & DPDP Rules 2025 Enterprise Controls

1. NETWORK LAYER
- Mutual TLS (mTLS 1.3) enforced on all incoming and outgoing API endpoints.
- Strict IP whitelisting for Core Banking (CBS) and Enterprise Service Bus (ESB) gateways.
- WAF with layer 7 DDoS mitigation and anomaly rate-limiting.

2. APPLICATION & CRYPTOGRAPHIC CONTROLS
- Asymmetric public key cryptography (RS256 / Ed25519) for token signing and zero-knowledge verification.
- Elimination of shared secrets; verification executed via /.well-known/jwks.json endpoints.

3. DATA INTEGRITY & AUDIT LOGS
- Cryptographic hash chaining (SHA-256) backed by private blockchain ledger for immutable event logging.
- Tamper-evident receipts verifiable by internal and external auditors.

4. DEPLOYMENT TOPOLOGIES
- Bank On-Premise: Bare-metal or VMware/OpenShift private cloud within bank DMZ.
- India Sovereign Cloud: MeitY-empaneled regions (AWS India, Azure India, GCP India).
- Air-Gapped deployment options for core transactional environments.

Contact Enterprise Engineering: support@securedapp.io`;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = isChecklist
      ? "Bank_DPDP_Consent_Checklist_SecureDApp.txt"
      : "Bank_IT_Security_Architecture_Note_SecureDApp.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white dark:bg-[#001428] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden text-slate-900 dark:text-slate-100">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-white/10 flex items-center justify-between bg-slate-50 dark:bg-[#001c38]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-outfit text-slate-900 dark:text-white">{title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Immediate access for banking compliance & risk teams</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {downloadReady ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center border border-emerald-500/40">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white font-outfit">Your Document Is Ready</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                Click below to download your copy. A confirmation has also been dispatched to <strong className="text-emerald-500">{formData.email}</strong>.
              </p>
              <div className="pt-2 flex flex-col gap-3">
                <button
                  onClick={handleDownload}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-sm hover:opacity-90 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                >
                  <Download className="w-4 h-4" /> Download Official File Now
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs font-semibold hover:bg-slate-200 dark:hover:bg-white/10"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-white/5 p-3 rounded-xl border border-slate-200 dark:border-white/10">
                {subtitle}
              </p>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Official Bank Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. priya.sharma@hdfcbank.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Bank / Institution <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Canara Bank"
                    value={formData.bankName}
                    onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Designation / Title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. VP - IT Risk / Legal"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Preparing Document...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" /> Unlock Instant Download
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Download, Calendar, ArrowRight, Loader2, Rocket, Mail, User, Phone, Briefcase, Building2 } from "lucide-react";
import { sendInquiryToCRM } from "../../../utils/crmInquiryService";
import { toast } from "react-toastify";

export function StartupDemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    startupName: "",
    stage: "Seed Stage",
    category: "SaaS / B2B Software",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.startupName) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      await sendInquiryToCRM({
        fullName: formData.name,
        email: formData.email,
        mobile: formData.phone,
        accountCompany: formData.startupName,
        serviceOffering: "DPDP Compliance - Startups",
        message: `Startup DPDP Demo & Pricing Request.\n\nStartup: ${formData.startupName}\nStage: ${formData.stage}\nCategory: ${formData.category}\nContact: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nNotes: ${formData.message || "N/A"}`,
        source: "website",
        leadSource: "website",
        metadata: {
          leadType: "Startup Demo Request",
          stage: formData.stage,
          category: formData.category,
          startupName: formData.startupName,
        },
      });

      setSubmitted(true);
      toast.success("Startup demo request received! A founder privacy architect will connect with you.");
    } catch (err) {
      console.error(err);
      toast.error("Unable to submit directly, opening scheduling calendar...");
      window.open("https://calendar.app.google/DwaR8QDDAotwnafu5", "_blank");
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white dark:bg-[#0c1322] border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Demo Request Confirmed
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto mb-6">
              Thank you, {formData.name}. We will review {formData.startupName} ({formData.stage}) and provide a customized walkthrough of our SDKs, downstream webhook sync, and tailored startup pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => {
                  window.open("https://calendar.app.google/DwaR8QDDAotwnafu5", "_blank");
                  onClose();
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-tertiary text-secondary font-semibold text-sm hover:brightness-105 transition-all shadow-md"
              >
                <Calendar className="w-4 h-4" /> Pick a Time on Calendar
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 font-semibold text-sm hover:bg-gray-200 dark:hover:bg-white/20 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center">
                <Rocket className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Book a Startup Demo & Quote
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Plug-and-play DPDP consent architecture built for fast-moving startups
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Founder / Lead Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Varun Mehta"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:border-tertiary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="founder@mystartup.com"
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:border-tertiary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:border-tertiary"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Startup / Company Name *
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={formData.startupName}
                    onChange={(e) => setFormData({ ...formData, startupName: e.target.value })}
                    placeholder="e.g. QuikPay Technologies"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:border-tertiary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Current Stage
                  </label>
                  <select
                    value={formData.stage}
                    onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:border-tertiary"
                  >
                    <option value="Pre-Seed / MVP" className="dark:bg-[#0c1322]">Pre-Seed / MVP</option>
                    <option value="Seed Stage" className="dark:bg-[#0c1322]">Seed Stage</option>
                    <option value="Series A" className="dark:bg-[#0c1322]">Series A</option>
                    <option value="Selling to Enterprises" className="dark:bg-[#0c1322]">Selling to Enterprises</option>
                    <option value="Going Global / Cross-Border" className="dark:bg-[#0c1322]">Going Global / Cross-Border</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Product Domain
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:border-tertiary"
                  >
                    <option value="Fintech / Lending" className="dark:bg-[#0c1322]">Fintech / Lending</option>
                    <option value="SaaS / B2B Software" className="dark:bg-[#0c1322]">SaaS / B2B Software</option>
                    <option value="E-Commerce / D2C" className="dark:bg-[#0c1322]">E-Commerce / D2C</option>
                    <option value="EdTech" className="dark:bg-[#0c1322]">EdTech</option>
                    <option value="Healthtech" className="dark:bg-[#0c1322]">Healthtech</option>
                    <option value="AI / Developer Tools" className="dark:bg-[#0c1322]">AI / Developer Tools</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Specific Stack or Integration Goals (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. Next.js web app, HubSpot CRM, WhatsApp Business, Segment CDP..."
                  className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:border-tertiary resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 rounded-xl bg-tertiary text-secondary font-bold text-sm hover:brightness-105 transition-all shadow-md flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                  </>
                ) : (
                  <>
                    Schedule Founder Walkthrough <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export function StartupChecklistModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    startupName: "",
  });
  const [loading, setLoading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.startupName) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      await sendInquiryToCRM({
        fullName: formData.name,
        email: formData.email,
        mobile: formData.phone,
        accountCompany: formData.startupName,
        serviceOffering: "DPDP Compliance - Startups",
        message: `Founder downloaded 10-Point Startup DPDP Compliance Checklist.\n\nStartup: ${formData.startupName}\nContact: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "N/A"}\nSource: Consent Management Platform for Startups Checklist`,
        source: "website",
        leadSource: "website",
        agreePrivacy: true,
        subscribeUpdates: false,
      });

      setDownloaded(true);
      toast.success("Checklist ready! Downloading summary...");

      // Synthesize printable text document
      const element = document.createElement("a");
      const file = new Blob([
        `MINIMUM VIABLE DPDP CHECKLIST FOR INDIAN STARTUPS
Published by SecureDApp (https://securedapp.io/dpdp-compliance-platform/startups)

NO STARTUP EXEMPTION: If you collect personal data of Indian users, the DPDP Act 2023 applies to you.

1. DATA INVENTORY
[ ] List every personal data element collected (name, email, phone, IP, device ID, payment).
[ ] Map every 3rd party tool touching data (CRM, analytics SDK, WhatsApp, ad pixel, gateway).

2. CONSENT & NOTICE ARCHITECTURE
[ ] Publish clear, plain-language notice in English and target Indian regional languages.
[ ] Collect separate, unbundled consent for marketing, analytics, and partner sharing.
[ ] Eliminate all pre-ticked checkboxes and dark patterns (forbidden under Section 6).
[ ] Prevent analytics SDKs and ad pixels from running before affirmative consent.

3. USER RIGHTS & PREFERENCE CENTER
[ ] Provide an instant 1-click preference center for withdrawal of consent.
[ ] Propagate withdrawals across your CRM, ad audiences, and WhatsApp BSP in sub-120ms.
[ ] Establish self-serve workflows for data access, correction, and erasure (DSRs).
[ ] Designate and publish a named Data Grievance Redressal Officer.

4. VENDOR GOVERNANCE & BREACH PROTOCOL
[ ] Execute DPDP Data Processing Addenda (DPAs) with all SaaS processors.
[ ] Implement 72-hour Data Protection Board breach escalation procedures.
[ ] Establish 6-hour CERT-In mandatory security incident notification protocol.
[ ] Maintain cryptographically signed, timestamped audit records satisfying Section 6(10).
`
      ], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = "Startup-DPDP-Compliance-Checklist-SecureDApp.txt";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    } catch (err) {
      console.error(err);
      toast.error("Download failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-white dark:bg-[#0c1322] border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {downloaded ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Checklist Downloaded
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 mb-6">
              Your copy of the <strong>Minimum Viable DPDP Checklist for Startups</strong> has been downloaded. Our team is available to help you set up consent in under 24 hours.
            </p>
            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-tertiary text-secondary font-bold text-sm hover:brightness-105 transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center">
                <Download className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Download Startup DPDP Checklist
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  10-point actionable guide for founders and engineering teams
                </p>
              </div>
            </div>

            <form onSubmit={handleDownload} className="space-y-4 mt-5">
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Founder Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Priya Nair"
                  className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:border-tertiary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="founder@mystartup.com"
                  className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:border-tertiary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Startup Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.startupName}
                  onChange={(e) => setFormData({ ...formData, startupName: e.target.value })}
                  placeholder="e.g. FinSpire Labs"
                  className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:border-tertiary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Phone / WhatsApp (Optional)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:border-tertiary"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 px-4 rounded-xl bg-tertiary text-secondary font-bold text-sm hover:brightness-105 transition-all shadow-md flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Generating Checklist...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" /> Download 10-Point Checklist
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

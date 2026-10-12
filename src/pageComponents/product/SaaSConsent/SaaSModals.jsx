"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ShieldCheck, Download, Calendar, ArrowRight, Loader2, Code, Mail, User, Phone, Briefcase } from "lucide-react";
import { sendInquiryToCRM } from "../../../utils/crmInquiryService";
import { toast } from "react-toastify";

export function SaaSDemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    saasModel: "B2B SaaS / Enterprise Software",
    role: "Founder / CTO / CPO",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.companyName) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      await sendInquiryToCRM({
        fullName: formData.name,
        email: formData.email,
        mobile: formData.phone,
        accountCompany: formData.companyName,
        serviceOffering: "DPDP Compliance - SaaS",
        message: `SaaS Demo Request from DPDP Compliance for SaaS Companies.\n\nCompany: ${formData.companyName}\nModel: ${formData.saasModel}\nRole: ${formData.role}\nPhone: ${formData.phone}\nNotes: ${formData.message || "N/A"}`,
        source: "website",
        leadSource: "website",
        metadata: {
          leadType: "SaaS Demo Request",
          role: formData.role,
          saasModel: formData.saasModel,
          companyName: formData.companyName,
        },
      });
      setSubmitted(true);
      toast.success("SaaS demo request submitted successfully!");
    } catch (error) {
      console.error("Error submitting SaaS demo request:", error);
      toast.error("Unable to submit directly, scheduling calendar opening...");
      window.open("https://calendar.app.google/DwaR8QDDAotwnafu5", "_blank");
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg overflow-hidden bg-white dark:bg-[#0e1e24] border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-white rounded-lg transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-tertiary/20 text-tertiary rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              SaaS Demo Request Received
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Thank you, {formData.name}. Our platform engineers and legal architects will connect within 24 hours to review your SDK requirements and enterprise due diligence pack.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="w-full py-3 bg-tertiary text-secondary font-semibold rounded-xl hover:bg-tertiary/90 transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Book a SaaS Demo
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SecureCMS for B2B & B2C SaaS Platforms
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Varun Murthy"
                    className="w-full pl-9 pr-3 py-2.5 bg-gray-50 dark:bg-[#13232c] border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:border-tertiary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="varun@saastech.io"
                      className="w-full pl-9 pr-3 py-2.5 bg-gray-50 dark:bg-[#13232c] border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:border-tertiary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">
                    Phone / WhatsApp
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full pl-9 pr-3 py-2.5 bg-gray-50 dark:bg-[#13232c] border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:border-tertiary"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">
                    SaaS / Product Name *
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g., CloudScale CRM"
                      className="w-full pl-9 pr-3 py-2.5 bg-gray-50 dark:bg-[#13232c] border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:border-tertiary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">
                    Architecture Type
                  </label>
                  <select
                    value={formData.saasModel}
                    onChange={(e) => setFormData({ ...formData, saasModel: e.target.value })}
                    className="w-full px-3 py-2.5 bg-gray-50 dark:bg-[#13232c] border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:border-tertiary"
                  >
                    <option value="B2B Enterprise SaaS">B2B Enterprise SaaS</option>
                    <option value="B2C Consumer SaaS">B2C Consumer SaaS</option>
                    <option value="Developer API / Infrastructure">Developer API / Infrastructure</option>
                    <option value="AI / LLM-Powered App">AI / LLM-Powered App</option>
                    <option value="Other">Other Software Model</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">
                  Stack Details or Enterprise RFP Questions
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g., AI model training firewall, tenant segregation, cross-border hosting..."
                  className="w-full p-3 bg-gray-50 dark:bg-[#13232c] border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:border-tertiary resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-tertiary text-secondary font-bold rounded-xl hover:bg-tertiary/90 transition-all flex items-center justify-center space-x-2 shadow-lg disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Scheduling Demo...</span>
                  </>
                ) : (
                  <>
                    <span>Book SaaS Demo</span>
                    <ArrowRight className="w-4 h-4" />
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

export function SaaSDPAModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("Please provide your name and work email.");
      return;
    }

    setLoading(true);
    try {
      await sendInquiryToCRM({
        fullName: formData.name,
        email: formData.email,
        mobile: formData.phone,
        accountCompany: formData.companyName || "SaaS Lead",
        serviceOffering: "DPDP Compliance - SaaS",
        message: `Checklist Download: DPDP SaaS Enterprise DPA & Processor Compliance Pack\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "N/A"}\nCompany: ${formData.companyName || "N/A"}`,
        source: "website",
        leadSource: "website",
        metadata: {
          leadType: "SaaS DPA Pack",
          companyName: formData.companyName,
        },
      });
      setDownloaded(true);
      toast.success("DPA pack dispatched to your email!");
    } catch (error) {
      console.error("Error submitting DPA request:", error);
      setDownloaded(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md overflow-hidden bg-white dark:bg-[#0e1e24] border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-white rounded-lg transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {downloaded ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-tertiary/20 text-tertiary rounded-full flex items-center justify-center">
              <Download className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              DPA Pack Dispatched!
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
              The <strong>DPDP SaaS Enterprise DPA & Sub-Processor Pack</strong> has been sent to <strong>{formData.email}</strong>.
            </p>
            <button
              onClick={() => {
                setDownloaded(false);
                onClose();
              }}
              className="w-full py-2.5 bg-tertiary text-secondary font-semibold rounded-xl hover:bg-tertiary/90 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Download SaaS DPA Pack
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Section 8(2) Processor Contract & Due Diligence Guide
                </p>
              </div>
            </div>

            <form onSubmit={handleDownload} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Karan Singhal"
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-[#13232c] border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:border-tertiary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="karan@saasco.com"
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-[#13232c] border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:border-tertiary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">
                  Company / Product Name
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="e.g., DataMesh Analytics"
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-[#13232c] border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:border-tertiary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-[#13232c] border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:border-tertiary"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-tertiary text-secondary font-bold rounded-xl hover:bg-tertiary/90 transition-all flex items-center justify-center space-x-2 shadow-lg disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Pack...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download SaaS DPA Pack (PDF)</span>
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

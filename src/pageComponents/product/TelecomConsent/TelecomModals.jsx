"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ShieldCheck, Download, Calendar, ArrowRight, Loader2, Radio, Mail, User, Phone, Building2 } from "lucide-react";
import { sendInquiryToCRM } from "../../../utils/crmInquiryService";
import { toast } from "react-toastify";

export function TelecomDemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    licenceCategory: "Category B – Circle / Metro",
    subscriberBase: "25,000 – 100,000",
    role: "CEO / Managing Director / DPO",
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
        serviceOffering: "DPDP Compliance - Telecom & ISP",
        message: `ISP Demo Request from DPDP Telecom & ISP Satellite Page.\n\nISP/Company: ${formData.companyName}\nLicence Category: ${formData.licenceCategory}\nSubscriber Base: ${formData.subscriberBase}\nRole: ${formData.role}\nPhone: ${formData.phone}\nNotes: ${formData.message || "N/A"}`,
        source: "website",
        leadSource: "website",
        metadata: {
          leadType: "ISP Demo Request",
          licenceCategory: formData.licenceCategory,
          subscriberBase: formData.subscriberBase,
          role: formData.role,
          companyName: formData.companyName,
        },
      });
      setSubmitted(true);
      toast.success("ISP demo request submitted successfully!");
    } catch (error) {
      console.error("Error submitting ISP demo request:", error);
      toast.error("Unable to submit directly, scheduling calendar opening...");
      window.open("https://calendar.app.google/DwaR8QDDAotwnafu5", "_blank");
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg overflow-hidden bg-white dark:bg-[#001938] border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8">
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
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 font-outfit">
              ISP Demo Request Received
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 font-nunitoSans text-sm">
              Thank you, {formData.name}. Our telecom compliance engineers and regulatory specialists will contact you within 24 hours with an architecture demo tailored to {formData.licenceCategory} obligations.
            </p>
            <div className="space-y-3">
              <a
                href="https://calendar.app.google/DwaR8QDDAotwnafu5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-tertiary text-secondary font-bold font-outfit rounded-xl hover:bg-tertiary/90 transition-all flex items-center justify-center space-x-2 shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Instant Calendar Booking</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white text-sm"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center border border-tertiary/20">
                <Radio className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white font-outfit">
                  Book an ISP Demo
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-nunitoSans">
                  Tailored to DoT Unified Licence & DPDP Act 2023 Rules
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white focus:ring-2 focus:ring-tertiary focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Official Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@ispbrand.in"
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white focus:ring-2 focus:ring-tertiary focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone / Mobile *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white focus:ring-2 focus:ring-tertiary focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                    ISP / Entity Name *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Apex Broadband Ltd"
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white focus:ring-2 focus:ring-tertiary focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Licence Category
                  </label>
                  <select
                    value={formData.licenceCategory}
                    onChange={(e) => setFormData({ ...formData, licenceCategory: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#002244] text-gray-900 dark:text-white focus:ring-2 focus:ring-tertiary outline-none"
                  >
                    <option value="Category A – National">Category A – National</option>
                    <option value="Category B – Circle / Metro">Category B – Circle / Metro</option>
                    <option value="Category C – SSA (Local)">Category C – SSA (Local)</option>
                    <option value="Multi-Service / Telecom Operator">Multi-Service / Telco</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Active Subscribers
                  </label>
                  <select
                    value={formData.subscriberBase}
                    onChange={(e) => setFormData({ ...formData, subscriberBase: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#002244] text-gray-900 dark:text-white focus:ring-2 focus:ring-tertiary outline-none"
                  >
                    <option value="< 25,000 subscribers">&lt; 25,000 subscribers</option>
                    <option value="25,000 – 100,000">25,000 – 100,000</option>
                    <option value="100,000 – 500,000">100,000 – 500,000</option>
                    <option value="500,000+ (High Volume / SDF)">500,000+ (High Volume / SDF)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Specific Integration Needs / Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. LCO portal OTP verification, AAA RADIUS sync, OTT bundle opt-outs..."
                  className="w-full px-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white focus:ring-2 focus:ring-tertiary focus:border-transparent outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-tertiary text-secondary font-bold font-outfit rounded-xl hover:bg-tertiary/90 transition-all flex items-center justify-center space-x-2 shadow-lg disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Scheduling Consultation...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm ISP Demo Request</span>
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

export function TelecomChecklistModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    category: "Category B – Circle / Metro",
  });
  const [loading, setLoading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.companyName) {
      toast.error("Please fill in your details to download the checklist.");
      return;
    }

    setLoading(true);
    try {
      await sendInquiryToCRM({
        fullName: formData.name,
        email: formData.email,
        accountCompany: formData.companyName,
        serviceOffering: "DPDP Telecom & ISP Checklist",
        message: `ISP DPDP Checklist downloaded.\n\nCompany: ${formData.companyName}\nCategory: ${formData.category}\nEmail: ${formData.email}`,
        source: "website",
        leadSource: "website",
        metadata: {
          leadType: "ISP Checklist Download",
          category: formData.category,
        },
      });
      setDownloaded(true);
      toast.success("ISP DPDP Checklist downloaded successfully!");
    } catch (err) {
      console.error("Error triggering checklist download:", err);
      setDownloaded(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md overflow-hidden bg-white dark:bg-[#001938] border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl p-6 sm:p-7">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-white rounded-lg transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {downloaded ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 mx-auto mb-3 bg-tertiary/20 text-tertiary rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-outfit">
              Checklist Ready
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-5 font-nunitoSans text-xs">
              The <strong>ISP DPDP Compliance Checklist & Architecture Guide (2026–2027)</strong> has been sent to {formData.email}.
            </p>
            <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-left mb-5 space-y-1 text-xs">
              <div className="font-semibold text-secondary dark:text-white">Includes:</div>
              <div className="text-gray-500 dark:text-gray-400">• DoT IPDR 2-year retention audit matrix</div>
              <div className="text-gray-500 dark:text-gray-400">• Franchisee & LCO OTP onboarding workflow</div>
              <div className="text-gray-500 dark:text-gray-400">• OTT bundle opt-out webhook specification</div>
              <div className="text-gray-500 dark:text-gray-400">• Penalty exposure breakdown (up to ₹250 Cr)</div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 bg-tertiary text-secondary font-bold font-outfit rounded-xl hover:bg-tertiary/90 transition-all text-sm"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center border border-tertiary/20">
                <Download className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white font-outfit">
                  Download ISP DPDP Checklist
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-nunitoSans">
                  Category A, B & C Licence Action Matrix
                </p>
              </div>
            </div>

            <form onSubmit={handleDownload} className="space-y-3.5">
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. S. Venkatraman"
                  className="w-full px-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white focus:ring-2 focus:ring-tertiary outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Official Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@ispdomain.com"
                  className="w-full px-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white focus:ring-2 focus:ring-tertiary outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  ISP / Company Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="e.g. Metro Fiber Networks"
                  className="w-full px-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white focus:ring-2 focus:ring-tertiary outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Licence Scope
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#002244] text-gray-900 dark:text-white focus:ring-2 focus:ring-tertiary outline-none"
                >
                  <option value="Category A – National">Category A – National</option>
                  <option value="Category B – Circle / Metro">Category B – Circle / Metro</option>
                  <option value="Category C – SSA (Local)">Category C – SSA (Local)</option>
                  <option value="Franchisee / Local Cable Operator (LCO)">Franchisee / LCO Partner</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-3 bg-tertiary text-secondary font-bold font-outfit rounded-xl hover:bg-tertiary/90 transition-all flex items-center justify-center space-x-2 shadow-lg disabled:opacity-50 text-sm"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Preparing PDF...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download Checklist (PDF)</span>
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

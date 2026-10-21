"use client";

import React, { useState } from "react";
import { X, CheckCircle2, TrendingUp, Download, Calendar, ArrowRight, Loader2, Mail, User, Phone, Building2 } from "lucide-react";
import { sendInquiryToCRM } from "../../../utils/crmInquiryService";
import { toast } from "react-toastify";

export function BrokerDemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    brokerName: "",
    sebiRegNo: "",
    clientBase: "50,000 – 250,000 active clients",
    apNetworkSize: "100 – 500 Authorised Persons",
    role: "Principal Officer / Compliance Head / DPO",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.brokerName) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      await sendInquiryToCRM({
        fullName: formData.name,
        email: formData.email,
        mobile: formData.phone,
        accountCompany: formData.brokerName,
        serviceOffering: "DPDP Compliance - Stock Brokers",
        message: `Stock Broker Demo Request from DPDP Stock Brokers Satellite Page.\n\nBroker: ${formData.brokerName}\nSEBI Reg: ${formData.sebiRegNo || "N/A"}\nClients: ${formData.clientBase}\nAP Network: ${formData.apNetworkSize}\nRole: ${formData.role}\nPhone: ${formData.phone}\nNotes: ${formData.message || "N/A"}`,
        source: "website",
        leadSource: "website",
        metadata: {
          leadType: "Stock Broker Demo Request",
          sebiRegNo: formData.sebiRegNo,
          clientBase: formData.clientBase,
          apNetworkSize: formData.apNetworkSize,
          role: formData.role,
        },
      });
      setSubmitted(true);
      toast.success("Broker demo request submitted successfully!");
    } catch (error) {
      console.error("Error submitting broker demo request:", error);
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
              Broker Consultation Scheduled
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 font-nunitoSans text-sm">
              Thank you, {formData.name}. Our securities compliance architects will reach out within 24 hours to review your trading app SDK integration and SEBI CSCRF alignment.
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
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white font-outfit">
                  Book a Broker Demo
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-nunitoSans">
                  SEBI CSCRF Aligned · Trading App &amp; AP Network Architecture
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
                      placeholder="e.g. Vikram Singhania"
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white focus:ring-2 focus:ring-tertiary outline-none"
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
                      placeholder="name@brokeragesecurities.in"
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white focus:ring-2 focus:ring-tertiary outline-none"
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
                      placeholder="+91 98200 12345"
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white focus:ring-2 focus:ring-tertiary outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Broking Entity Name *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={formData.brokerName}
                      onChange={(e) => setFormData({ ...formData, brokerName: e.target.value })}
                      placeholder="e.g. Kotak / Angel / Zerodha"
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white focus:ring-2 focus:ring-tertiary outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Active Client Base
                  </label>
                  <select
                    value={formData.clientBase}
                    onChange={(e) => setFormData({ ...formData, clientBase: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#002244] text-gray-900 dark:text-white focus:ring-2 focus:ring-tertiary outline-none"
                  >
                    <option value="< 50,000 active clients">&lt; 50,000 clients</option>
                    <option value="50,000 – 250,000 active clients">50,000 – 250,000 clients</option>
                    <option value="250,000 – 1,000,000 active clients">250,000 – 1,000,000 clients</option>
                    <option value="1,000,000+ (High Volume / SDF)">1,000,000+ (High Volume / SDF)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Authorised Persons (APs)
                  </label>
                  <select
                    value={formData.apNetworkSize}
                    onChange={(e) => setFormData({ ...formData, apNetworkSize: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#002244] text-gray-900 dark:text-white focus:ring-2 focus:ring-tertiary outline-none"
                  >
                    <option value="Direct App Only (No APs)">Direct App Only (No APs)</option>
                    <option value="1 – 100 APs">1 – 100 APs</option>
                    <option value="100 – 500 Authorised Persons">100 – 500 Authorised Persons</option>
                    <option value="500+ National Sub-Broker Network">500+ National Network</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  SEBI Registration No. (Optional)
                </label>
                <input
                  type="text"
                  value={formData.sebiRegNo}
                  onChange={(e) => setFormData({ ...formData, sebiRegNo: e.target.value })}
                  placeholder="e.g. INZ000123456"
                  className="w-full px-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white focus:ring-2 focus:ring-tertiary outline-none font-mono"
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
                    <span>Booking Broker Consultation...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Broker Demo Request</span>
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

export function BrokerChecklistModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brokerName: "",
    role: "Compliance / Legal Desk",
  });
  const [loading, setLoading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.brokerName) {
      toast.error("Please fill in your details to download the checklist.");
      return;
    }

    setLoading(true);
    try {
      await sendInquiryToCRM({
        fullName: formData.name,
        email: formData.email,
        accountCompany: formData.brokerName,
        serviceOffering: "DPDP Stock Broker Checklist",
        message: `Stock Broker DPDP Checklist downloaded.\n\nBroker: ${formData.brokerName}\nRole: ${formData.role}\nEmail: ${formData.email}`,
        source: "website",
        leadSource: "website",
        metadata: {
          leadType: "Broker Checklist Download",
        },
      });
      setDownloaded(true);
      toast.success("Broker DPDP Checklist downloaded successfully!");
    } catch (err) {
      console.error("Error triggering broker checklist download:", err);
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
              Checklist Dispatched
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-5 font-nunitoSans text-xs">
              The <strong>Stock Broker DPDP Compliance Checklist &amp; SEBI CSCRF Architecture Guide (2026–2027)</strong> has been sent to {formData.email}.
            </p>
            <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-left mb-5 space-y-1 text-xs">
              <div className="font-semibold text-secondary dark:text-white">Included Modules:</div>
              <div className="text-gray-500 dark:text-gray-400">• DDPI vs DPDP Consent Separation Checklist</div>
              <div className="text-gray-500 dark:text-gray-400">• AP &amp; Sub-Broker Network Mobile OTP Onboarding SOP</div>
              <div className="text-gray-500 dark:text-gray-400">• Algorithmic Research Nudge Runtime Validation API</div>
              <div className="text-gray-500 dark:text-gray-400">• SEBI CSCRF &amp; 72-Hour DPB Breach Reporting Drill</div>
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
                  Download Broker DPDP Checklist
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-nunitoSans">
                  Trading App, AP Network &amp; SEBI CSCRF Blueprint
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
                  placeholder="e.g. S. Narayanan"
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
                  placeholder="name@brokeragesecurities.in"
                  className="w-full px-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white focus:ring-2 focus:ring-tertiary outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Broking Entity *
                </label>
                <input
                  type="text"
                  required
                  value={formData.brokerName}
                  onChange={(e) => setFormData({ ...formData, brokerName: e.target.value })}
                  placeholder="e.g. Axis Securities / ICICI Direct"
                  className="w-full px-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white focus:ring-2 focus:ring-tertiary outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Designation / Role
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#002244] text-gray-900 dark:text-white focus:ring-2 focus:ring-tertiary outline-none"
                >
                  <option value="Compliance / Legal Desk">Compliance / Legal Desk</option>
                  <option value="Chief Technology Officer / CISO">Chief Technology Officer / CISO</option>
                  <option value="Trading Product Manager">Trading Product Manager</option>
                  <option value="Authorised Person Network Lead">Authorised Person Network Lead</option>
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
                    <span>Preparing PDF Blueprint...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download Stock Broker Checklist (PDF)</span>
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

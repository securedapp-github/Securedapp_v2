"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ShieldCheck, Download, Calendar, ArrowRight, Loader2, ShoppingCart, Mail, User, Phone, Briefcase } from "lucide-react";
import { sendInquiryToCRM } from "../../../utils/crmInquiryService";
import { toast } from "react-toastify";

export function EcommerceDemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    brandName: "",
    role: "Founder / CEO",
    platform: "Shopify",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.brandName) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      await sendInquiryToCRM({
        fullName: formData.name,
        email: formData.email,
        mobile: formData.phone,
        accountCompany: formData.brandName,
        serviceOffering: "DPDP Compliance - Ecommerce",
        message: `Ecommerce Demo Request from Consent Management Platform for Ecommerce.\n\nBrand / Store: ${formData.brandName}\nRole: ${formData.role}\nPlatform: ${formData.platform}\nPhone: ${formData.phone}\nNotes: ${formData.message || "N/A"}`,
        source: "website",
        leadSource: "website",
        metadata: {
          leadType: "Ecommerce Demo Request",
          role: formData.role,
          platform: formData.platform,
          brandName: formData.brandName,
        },
      });

      setSubmitted(true);
      toast.success("Demo request received! Our retail privacy specialist will contact you.");
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
      <div className="relative w-full max-w-lg bg-primary dark:bg-secondary border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 text-secondary dark:text-white font-outfit">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-labelGray hover:text-secondary dark:hover:text-white transition-colors rounded-lg"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-tertiary/20 text-tertiary flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-outfit">Demo Scheduled!</h3>
            <p className="text-sm text-labelGray dark:text-gray-300 font-nunitoSans max-w-sm">
              Thank you for requesting a demo of <strong>SecureCMS for Ecommerce</strong>. Our team will reach out within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 bg-tertiary text-secondary font-bold rounded-xl hover:opacity-90 transition-all text-sm"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-outfit">Book an Ecommerce Demo</h3>
                <p className="text-xs text-labelGray dark:text-gray-400">See checkout unbundling & WhatsApp opt-out sync in action</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5 font-nunitoSans text-sm">
              <div>
                <label className="block text-xs font-semibold mb-1 text-secondary dark:text-gray-300">Your Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-labelGray absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:border-tertiary outline-none text-secondary dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold mb-1 text-secondary dark:text-gray-300">Work Email *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-labelGray absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="priya@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:border-tertiary outline-none text-secondary dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1 text-secondary dark:text-gray-300">Phone / WhatsApp</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-labelGray absolute left-3 top-3" />
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:border-tertiary outline-none text-secondary dark:text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold mb-1 text-secondary dark:text-gray-300">Brand / Store Name *</label>
                  <div className="relative">
                    <Briefcase className="w-4 h-4 text-labelGray absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aura D2C"
                      value={formData.brandName}
                      onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:border-tertiary outline-none text-secondary dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1 text-secondary dark:text-gray-300">Platform</label>
                  <select
                    value={formData.platform}
                    onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-[#1a2d47] border border-gray-200 dark:border-white/10 rounded-xl focus:border-tertiary outline-none text-secondary dark:text-white"
                  >
                    <option value="Shopify">Shopify</option>
                    <option value="WooCommerce">WooCommerce</option>
                    <option value="Magento / Adobe Commerce">Magento / Adobe Commerce</option>
                    <option value="Custom Headless / Next.js">Custom Headless / Next.js</option>
                    <option value="Mobile App (React Native / Flutter)">Mobile App (Native / Flutter)</option>
                    <option value="Quick Commerce / Marketplace">Quick Commerce / Marketplace</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 py-3 bg-tertiary hover:opacity-95 text-secondary font-bold font-outfit rounded-xl transition-all shadow-[0_0_15px_rgba(18,213,118,0.3)] flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <span>Request Live Demo</span>}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export function EcommerceChecklistModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brandName: "",
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
        accountCompany: formData.brandName || "D2C Brand",
        serviceOffering: "DPDP Compliance - Ecommerce",
        message: `Checklist Download: Ecommerce DPDP Consent Checklist\nName: ${formData.name}\nEmail: ${formData.email}\nBrand: ${formData.brandName || "N/A"}`,
        source: "website",
        leadSource: "website",
        metadata: {
          leadType: "Ecommerce DPDP Consent Checklist",
          brandName: formData.brandName,
        },
      });

      setDownloaded(true);
      toast.success("Checklist ready! Downloading now...");
    } catch (err) {
      console.error(err);
      setDownloaded(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-primary dark:bg-secondary border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl p-6 sm:p-7 text-secondary dark:text-white font-outfit">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-labelGray hover:text-secondary dark:hover:text-white transition-colors rounded-lg"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {downloaded ? (
          <div className="text-center py-6 flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-tertiary/20 text-tertiary flex items-center justify-center">
              <Download className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold font-outfit">Checklist Ready</h3>
            <p className="text-xs text-labelGray dark:text-gray-300 font-nunitoSans max-w-xs">
              Your <strong>DPDP E-Commerce & D2C Compliance Readiness Checklist</strong> has been sent to <strong>{formData.email}</strong>.
            </p>
            <button
              onClick={onClose}
              className="mt-3 px-6 py-2 bg-tertiary text-secondary font-bold rounded-xl hover:opacity-90 transition-all text-xs"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center">
                <Download className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-outfit">Download Ecommerce Checklist</h3>
                <p className="text-xs text-labelGray dark:text-gray-400">18-point DPDP Act 2023 & Rule 8 readiness guide</p>
              </div>
            </div>

            <form onSubmit={handleDownload} className="mt-4 space-y-3 font-nunitoSans text-xs">
              <div>
                <label className="block font-semibold mb-1 text-secondary dark:text-gray-300">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Verma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:border-tertiary outline-none text-secondary dark:text-white"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1 text-secondary dark:text-gray-300">Work Email *</label>
                <input
                  type="email"
                  required
                  placeholder="rahul@store.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:border-tertiary outline-none text-secondary dark:text-white"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1 text-secondary dark:text-gray-300">Brand / Store Name</label>
                <input
                  type="text"
                  placeholder="e.g. QuickMart India"
                  value={formData.brandName}
                  onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:border-tertiary outline-none text-secondary dark:text-white"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-3 py-2.5 bg-tertiary hover:opacity-95 text-secondary font-bold font-outfit rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <span>Download Free Guide (PDF)</span>}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

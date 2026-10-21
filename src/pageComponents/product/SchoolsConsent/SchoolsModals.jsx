"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Download, Calendar, ArrowRight, Loader2, School, Mail, User, Phone, Briefcase, Building2 } from "lucide-react";
import { sendInquiryToCRM } from "../../../utils/crmInquiryService";
import { toast } from "react-toastify";

export function SchoolDemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    schoolName: "",
    role: "Principal / Trustee",
    campuses: "Single Campus",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.schoolName) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      await sendInquiryToCRM({
        fullName: formData.name,
        email: formData.email,
        mobile: formData.phone,
        accountCompany: formData.schoolName,
        serviceOffering: "DPDP Compliance - Schools",
        message: `School DPDP Demo Request from DPDP Compliance for Schools page.\n\nSchool: ${formData.schoolName}\nRole: ${formData.role}\nCampuses: ${formData.campuses}\nPhone: ${formData.phone}\nNotes: ${formData.message || "N/A"}`,
        source: "website",
        leadSource: "website",
        metadata: {
          leadType: "School Demo Request",
          role: formData.role,
          campuses: formData.campuses,
          schoolName: formData.schoolName,
        },
      });

      setSubmitted(true);
      toast.success("School demo request received! Our education privacy specialist will contact you.");
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
              Thank you, {formData.name}. Our school privacy architects will walk you through unbundled parent consent, Rule 12 school exemptions, and ERP connectors for {formData.schoolName}.
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
                <School className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Book a School DPDP Demo
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Customized walkthrough for CBSE, ICSE, and State Board Institutions
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Your Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Sunita Sharma"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:border-tertiary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Official Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="principal@school.edu.in"
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
                  School / Trust Name *
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={formData.schoolName}
                    onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                    placeholder="e.g. St. Xavier's International School"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:border-tertiary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Your Role
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:border-tertiary"
                  >
                    <option value="Principal / Trustee" className="dark:bg-[#0c1322]">Principal / Trustee</option>
                    <option value="School Administrator" className="dark:bg-[#0c1322]">School Administrator</option>
                    <option value="School IT / ERP Lead" className="dark:bg-[#0c1322]">School IT / ERP Lead</option>
                    <option value="Legal Counsel / DPO" className="dark:bg-[#0c1322]">Legal Counsel / DPO</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Campuses / Branches
                  </label>
                  <select
                    value={formData.campuses}
                    onChange={(e) => setFormData({ ...formData, campuses: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:border-tertiary"
                  >
                    <option value="Single Campus" className="dark:bg-[#0c1322]">Single Campus</option>
                    <option value="2-5 Campuses" className="dark:bg-[#0c1322]">2-5 Campuses</option>
                    <option value="6+ Campuses (Trust / Chain)" className="dark:bg-[#0c1322]">6+ Campuses (Trust / Chain)</option>
                    <option value="Pre-school Chain" className="dark:bg-[#0c1322]">Pre-school Chain</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Specific Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. Unbundling WhatsApp groups, photo consent revoking, Fedena/Entab ERP integration..."
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
                    Schedule School Consultation <ArrowRight className="w-4 h-4" />
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

export function SchoolChecklistModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    schoolName: "",
  });
  const [loading, setLoading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.schoolName) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      await sendInquiryToCRM({
        fullName: formData.name,
        email: formData.email,
        mobile: formData.phone,
        accountCompany: formData.schoolName,
        serviceOffering: "DPDP Compliance - Schools",
        message: `Checklist Download: School DPDP Compliance Checklist\nSchool: ${formData.schoolName}\nContact: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "N/A"}`,
        source: "website",
        leadSource: "website",
        metadata: {
          leadType: "School DPDP Checklist Download",
          schoolName: formData.schoolName,
        },
      });

      setDownloaded(true);
      toast.success("Checklist ready! Downloading PDF summary...");

      // Trigger synthetic download of printable checklist
      const element = document.createElement("a");
      const file = new Blob([
        `DPDP ACT 2023 & DPDP RULES 2025: SCHOOL COMPLIANCE CHECKLIST
Published by SecureDApp (https://securedapp.io/dpdp-compliance-platform/schools)

1. STATUTORY JURISDICTION & EXEMPTIONS
[ ] Identify School as Data Fiduciary under DPDP Act Section 8.
[ ] Map all School ERP, fee gateway, and learning app vendors as Data Processors.
[ ] Apply Rule 12 & Fourth Schedule exemptions for educational tracking (attendance, marks, report cards).
[ ] Apply Rule 12 exemptions for student safety (campus CCTV, school bus GPS tracking).
[ ] Separate non-exempt activities: website photos, social media reels, WhatsApp groups, event sponsors.

2. PARENTAL CONSENT ARCHITECTURE
[ ] Replace single-signature admission forms with unbundled, granular purpose toggles.
[ ] Implement Rule 10 parent identity verification using existing admission records and OTP confirmation.
[ ] Publish clear, plain-language notices in English and applicable Eighth Schedule Indian languages.
[ ] Deploy a digital parent preference dashboard allowing instant withdrawal for photos and messaging.

3. DATA ACCESS & SENSITIVE FILE SEGREGATION
[ ] Isolate student psychological, counselling, and infirmary medical records via role-based encryption.
[ ] Limit transport vendor access to student name and bus stop location only.
[ ] Implement separate legitimate use basis for teacher/staff employment under Section 7.
[ ] Establish renewal protocol when students reach 18 years of age during enrollment.

4. AUDIT & BREACH GOVERNANCE (DEADLINE: 13 MAY 2027)
[ ] Store cryptographically signed, timestamped audit records satisfying Section 6(10).
[ ] Establish 72-hour Data Protection Board breach reporting escalation protocols.
[ ] Operationalize parent grievance redressal mechanisms fulfilling Section 13 statutory timelines.
`
      ], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = "DPDP-School-Compliance-Checklist-SecureDApp.txt";
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
              Your copy of the <strong>School DPDP Compliance Checklist</strong> has been downloaded. Our team is available if you need help auditing your admission forms or ERP workflows.
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
                  Download School DPDP Checklist
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Essential 4-part regulatory checklist for Indian schools
                </p>
              </div>
            </div>

            <form onSubmit={handleDownload} className="space-y-4 mt-5">
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Fr. Augustine D'Souza"
                  className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:border-tertiary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Official Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="admin@school.ac.in"
                  className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:border-tertiary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  School / Institution Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.schoolName}
                  onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                  placeholder="e.g. Delhi Public Academy"
                  className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:border-tertiary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Contact Phone (Optional)
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
                    <Loader2 className="w-4 h-4 animate-spin" /> Preparing PDF...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" /> Download Checklist (PDF)
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

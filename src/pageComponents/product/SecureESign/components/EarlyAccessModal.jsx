import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, AlertCircle, Loader2, ShieldCheck, ArrowRight } from "lucide-react";

export default function EarlyAccessModal({ isOpen, onClose }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const crmUrl =
      process.env.NEXT_PUBLIC_CRM_PUBLIC_INQUIRY_URL ||
      "https://crm-be.securedapp.io/api/public/project-inquiry";

    const payload = {
      fullName: fullName.trim(),
      email: email.trim(),
      accountCompany: companyName.trim() || "Not specified",
      serviceOffering: "Secure e-Sign",
      message: "Early Access / Free Trial Request for Secure e-Sign (CDAC-Backed Digital Signing)",
      source: "website",
      leadSource: "website",
      agreePrivacy: true,
      subscribeUpdates: false,
    };

    try {
      const res = await fetch(crmUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseText = await res.text();

      if (res.ok) {
        setIsSuccess(true);
      } else {
        let errMessage = "Failed to submit early access request. Please try again.";
        try {
          const parsed = JSON.parse(responseText);
          if (parsed.message) errMessage = parsed.message;
          else if (parsed.error) errMessage = parsed.error;
        } catch (_) {}
        setErrorMessage(errMessage);
      }
    } catch (err) {
      console.error("[CRM Secure e-Sign Lead] Submission error:", err);
      setErrorMessage(err?.message || "Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFullName("");
    setEmail("");
    setCompanyName("");
    setIsSuccess(false);
    setErrorMessage("");
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-outfit">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleReset}
          className="fixed inset-0 bg-secondary/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-white dark:bg-[#0F1729] rounded-3xl shadow-2xl border border-gray-200 dark:border-[#1E293B] overflow-hidden z-10 p-6 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={handleReset}
            className="absolute top-5 right-5 text-labelGray hover:text-secondary dark:hover:text-white p-1 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {isSuccess ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-tertiary/15 text-tertiary rounded-full flex items-center justify-center mx-auto mb-4 border border-tertiary/30">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-bold text-secondary dark:text-white mb-2 font-outfit">
                Access Request Received!
              </h3>
              <p className="text-sm text-labelGray dark:text-gray-300 max-w-sm mx-auto mb-6 font-nunitoSans">
                Thank you for your interest in Secure e-Sign. Our enterprise team will provision your
                sandbox credentials and contact you within 24 hours.
              </p>
              <button
                onClick={handleReset}
                className="w-full py-3.5 px-4 bg-tertiary text-secondary font-bold rounded-xl shadow-[0_0_16px_rgba(18,213,118,0.35)] hover:brightness-110 transition-all font-outfit"
              >
                Close & Return to Overview
              </button>
            </div>
          ) : (
            <div>
              {/* Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 mb-3">
                  <ShieldCheck className="w-4 h-4 text-tertiary" />
                  <span className="text-xs font-semibold text-tertiary uppercase tracking-wider font-outfit">
                    Early Access • CDAC Backed
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-secondary dark:text-white font-outfit">
                  Start Your Free Trial
                </h3>
                <p className="text-sm text-labelGray dark:text-gray-300 mt-1 font-nunitoSans">
                  Get immediate early access to the government-approved digital signing platform for India.
                </p>
              </div>

              {/* Error Message */}
              {errorMessage && (
                <div className="mb-5 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-xs flex items-center gap-2 font-nunitoSans">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-secondary dark:text-gray-300 mb-1.5 font-outfit">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#131B2E] border border-gray-200 dark:border-[#2A3548] text-secondary dark:text-white text-sm placeholder-labelGray/60 focus:outline-none focus:ring-2 focus:ring-tertiary focus:border-tertiary transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-secondary dark:text-gray-300 mb-1.5 font-outfit">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rahul@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#131B2E] border border-gray-200 dark:border-[#2A3548] text-secondary dark:text-white text-sm placeholder-labelGray/60 focus:outline-none focus:ring-2 focus:ring-tertiary focus:border-tertiary transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-secondary dark:text-gray-300 mb-1.5 font-outfit">
                    Company / Organization Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Acme Financial Services"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#131B2E] border border-gray-200 dark:border-[#2A3548] text-secondary dark:text-white text-sm placeholder-labelGray/60 focus:outline-none focus:ring-2 focus:ring-tertiary focus:border-tertiary transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 bg-tertiary text-secondary font-bold rounded-xl shadow-[0_0_16px_rgba(18,213,118,0.35)] hover:brightness-110 hover:-translate-y-0.5 disabled:opacity-50 transition-all flex items-center justify-center gap-2 font-outfit"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin text-secondary" />
                        <span>Provisioning Sandbox...</span>
                      </>
                    ) : (
                      <>
                        <span>Get Early Access</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-center text-labelGray dark:text-gray-400 font-nunitoSans">
                  By signing up, you agree to our terms and privacy policy. No credit card required.
                </p>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

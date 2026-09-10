import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';

interface LeadCaptureFormProps {
  theme?: 'dark' | 'light';
  title?: string;
  subtitle?: string;
  onSuccess?: () => void;
  className?: string;
}

export function LeadCaptureForm({
  theme = 'light',
  title = "Get Your Free DPDP Audit Report",
  subtitle = "Instant compliance audit — delivered to your inbox in minutes.",
  onSuccess,
  className = "",
}: LeadCaptureFormProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [countryIso, setCountryIso] = useState('IN');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const countries = [
    { iso: 'IN', code: '+91', label: 'India (+91)' },
    { iso: 'US', code: '+1', label: 'USA (+1)' },
    { iso: 'UK', code: '+44', label: 'UK (+44)' },
    { iso: 'UAE', code: '+971', label: 'UAE (+971)' },
    { iso: 'SG', code: '+65', label: 'Singapore (+65)' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    const crmUrl =
      process.env.NEXT_PUBLIC_CRM_PUBLIC_INQUIRY_URL ||
      "https://crm-be.securedapp.io/api/public/project-inquiry";

    const formattedMobile = phone.trim() ? `${countryCode} ${phone.trim()}` : "";

    const crmPayload = {
      fullName: `${firstName.trim()} ${lastName.trim()}`,
      accountCompany: "Not specified",
      mobile: formattedMobile,
      email: businessEmail.trim(),
      serviceOffering: "DPDP Compliance",
      message: "Free DPDP Audit Request from Ads",
      source: "ads",
      leadSource: "ads",
      uploadedBy: "--",
      uploaded_by: "--",
      agreePrivacy: true,
      subscribeUpdates: false,
    };

    console.log("[CRM DPDP Lead] Submitting to:", crmUrl, "| Payload:", JSON.stringify(crmPayload));

    try {
      const res = await fetch(crmUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(crmPayload),
      });

      const responseText = await res.text();
      console.log(`[CRM DPDP Lead] Response: HTTP ${res.status}`, responseText);

      if (res.ok) {
        setIsSubmitted(true);
        if (onSuccess) onSuccess();
      } else {
        let errMessage = "Failed to submit request. Please try again.";
        try {
          const parsed = JSON.parse(responseText);
          if (parsed.message) errMessage = parsed.message;
          else if (parsed.error) errMessage = parsed.error;
        } catch (_) {}
        setErrorMsg(errMessage);
      }
    } catch (err: any) {
      console.error("[CRM DPDP Lead] Submission error:", err);
      setErrorMsg(err?.message || "Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`w-full max-w-xl mx-auto rounded-3xl p-5 sm:p-6 md:p-7 border transition-all duration-300 ${
        theme === 'light'
          ? 'bg-white border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.08)] text-slate-900'
          : 'bg-slate-900/90 backdrop-blur-xl border-slate-800 text-white shadow-2xl'
      } ${className}`}
    >
      {title && (
        <div className="mb-4 text-left">
          <div className="flex items-center gap-2 mb-2">
            <span className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-[#10b981]">
              <ShieldCheck className="w-4 h-4" />
            </span>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-700 dark:text-[#10b981]">
              Free DPDP Audit
            </span>
          </div>
          <h3 className={`font-heading text-2xl sm:text-3xl font-extrabold tracking-tight mb-1.5 ${
            theme === 'light' ? 'text-slate-950' : 'text-white'
          }`}>
            {title}
          </h3>
          {subtitle && (
            <p className={`text-xs sm:text-sm ${
              theme === 'light' ? 'text-slate-600' : 'text-slate-400'
            }`}>
              {subtitle}
            </p>
          )}
        </div>
      )}

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-10 px-4 bg-emerald-50/80 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-800/60"
        >
          <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-[#10b981] mx-auto mb-3" />
          <h4 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-2">
            Audit Report Requested!
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
            Thanks {firstName || 'there'}! We have generated your compliance preview and sent it to <strong className="text-slate-900 dark:text-white">{businessEmail}</strong>.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFirstName('');
              setLastName('');
              setBusinessEmail('');
              setPhone('');
              setErrorMsg('');
            }}
            className="mt-6 px-5 py-2 text-xs font-bold text-slate-600 dark:text-slate-400 underline hover:text-slate-900 dark:hover:text-white cursor-pointer"
          >
            Submit another request
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          {errorMsg && (
            <div className="flex items-center gap-2 p-3 text-xs font-semibold rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Row 1: First Name & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={`block text-xs font-bold mb-1.5 ${
                theme === 'light' ? 'text-slate-700' : 'text-slate-300'
              }`}>
                First Name<span className="text-rose-500 font-bold ml-0.5">*</span>
              </label>
              <input
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter first name"
                className={`w-full px-4 py-3 text-xs sm:text-sm rounded-xl border outline-none transition-all ${
                  theme === 'light'
                    ? 'bg-slate-50/80 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-slate-800 focus:ring-2 focus:ring-slate-800/10'
                    : 'bg-slate-950/80 border-slate-700 text-white placeholder:text-slate-500 focus:border-[#10b981] focus:ring-2 focus:ring-[#10b981]/20'
                }`}
              />
            </div>

            <div>
              <label className={`block text-xs font-bold mb-1.5 ${
                theme === 'light' ? 'text-slate-700' : 'text-slate-300'
              }`}>
                Last Name<span className="text-rose-500 font-bold ml-0.5">*</span>
              </label>
              <input
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter last name"
                className={`w-full px-4 py-3 text-xs sm:text-sm rounded-xl border outline-none transition-all ${
                  theme === 'light'
                    ? 'bg-slate-50/80 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-slate-800 focus:ring-2 focus:ring-slate-800/10'
                    : 'bg-slate-950/80 border-slate-700 text-white placeholder:text-slate-500 focus:border-[#10b981] focus:ring-2 focus:ring-[#10b981]/20'
                }`}
              />
            </div>
          </div>

          {/* Row 2: Business Email */}
          <div>
            <label className={`block text-xs font-bold mb-1.5 ${
              theme === 'light' ? 'text-slate-700' : 'text-slate-300'
            }`}>
              Business Email<span className="text-rose-500 font-bold ml-0.5">*</span>
            </label>
            <input
              type="email"
              required
              value={businessEmail}
              onChange={(e) => setBusinessEmail(e.target.value)}
              placeholder="name@company.com"
              className={`w-full px-4 py-3 text-xs sm:text-sm rounded-xl border outline-none transition-all ${
                theme === 'light'
                  ? 'bg-slate-50/80 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-slate-800 focus:ring-2 focus:ring-slate-800/10'
                  : 'bg-slate-950/80 border-slate-700 text-white placeholder:text-slate-500 focus:border-[#10b981] focus:ring-2 focus:ring-[#10b981]/20'
              }`}
            />
          </div>

          {/* Row 3: Phone Number with Country Code Dropdown */}
          <div>
            <label className={`block text-xs font-bold mb-1.5 ${
              theme === 'light' ? 'text-slate-700' : 'text-slate-300'
            }`}>
              Phone Number
            </label>
            <div className="flex rounded-xl overflow-hidden border focus-within:ring-2 transition-all">
              <select
                value={countryIso}
                onChange={(e) => {
                  const sel = countries.find((c) => c.iso === e.target.value);
                  if (sel) {
                    setCountryIso(sel.iso);
                    setCountryCode(sel.code);
                  }
                }}
                className={`px-3 py-3 text-xs font-bold border-r outline-none cursor-pointer ${
                  theme === 'light'
                    ? 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200'
                    : 'bg-slate-800 border-slate-700 text-white hover:bg-slate-750'
                }`}
              >
                {countries.map((c) => (
                  <option key={c.iso} value={c.iso} className="bg-white text-slate-900 dark:bg-slate-900 dark:text-white">
                    {c.iso}
                  </option>
                ))}
              </select>

              <div className={`px-3 py-3 text-xs font-mono font-bold flex items-center shrink-0 border-r ${
                theme === 'light'
                  ? 'bg-slate-100/70 border-slate-300 text-slate-600'
                  : 'bg-slate-900 border-slate-700 text-slate-400'
              }`}>
                {countryCode}
              </div>

              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="9606015868"
                className={`w-full px-4 py-3 text-xs sm:text-sm outline-none transition-all ${
                  theme === 'light'
                    ? 'bg-slate-50/80 text-slate-900 placeholder:text-slate-400 focus:bg-white'
                    : 'bg-slate-950/80 text-white placeholder:text-slate-500'
                }`}
              />
            </div>
          </div>

          {/* Row 4: Submit Button */}
          <div className="pt-2 flex justify-center">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(16,185,129,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className={`w-full sm:w-auto min-w-[200px] px-8 py-3.5 text-sm font-extrabold rounded-xl transition-all cursor-pointer shadow-md flex items-center justify-center gap-2 ${
                theme === 'light'
                  ? 'bg-[#09261a] hover:bg-[#0d3827] text-white focus:ring-2 focus:ring-emerald-700'
                  : 'bg-[#10b981] hover:bg-[#059669] text-white focus:ring-2 focus:ring-[#10b981]'
              } ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                'Submit'
              )}
            </motion.button>
          </div>
        </form>
      )}
    </div>
  );
}

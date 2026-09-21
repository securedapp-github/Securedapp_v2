import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UploadCloud,
  ShieldCheck,
  Key,
  Fingerprint,
  Check,
  RotateCcw,
  Stamp,
  Sparkles,
  Loader2,
  FileText,
} from "lucide-react";

export default function HowItWorksSimulator({ onOpenTrialModal }) {
  const [currentStep, setCurrentStep] = useState(2); // Start on step 2 for interactive engagement
  const [authMethod, setAuthMethod] = useState("aadhaar"); // "dsc" | "aadhaar"
  const [dscPin, setDscPin] = useState("9824");
  const [aadhaarOtp, setAadhaarOtp] = useState("582194");
  const [isSimulating, setIsSimulating] = useState(false);
  const [signedRecord, setSignedRecord] = useState(null);

  const stepsMeta = [
    {
      step: 1,
      title: "Upload & Prepare",
      subtitle: "Mark signature fields & recipients",
      icon: <UploadCloud className="w-5 h-5" />,
      bullets: [
        "Upload PDF or Word document into secure workspace",
        "Mark signature fields, initials, and signing sequence",
        "Add custom instructions, deadlines, and corporate branding",
        "Send invitations via encrypted email link instantly",
      ],
    },
    {
      step: 2,
      title: "Sign Securely",
      subtitle: "Class 3 DSC Token or Aadhaar OTP",
      icon: <Stamp className="w-5 h-5" />,
    },
    {
      step: 3,
      title: "Archive & Prove",
      subtitle: "Cryptographic audit certificate & vault lock",
      icon: <ShieldCheck className="w-5 h-5" />,
      bullets: [
        "Signed document is cryptographically locked (no further edits possible)",
        "Comprehensive Audit Trail Certificate generated as PDF or verifiable JSON",
        "Automatic encrypted backup to enterprise vault with granular search",
        "REST APIs & Webhooks trigger downstream updates to your ERP/CRM",
      ],
    },
  ];

  const handleSimulateSigning = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      setSignedRecord({
        method: authMethod === "dsc" ? "Class 3 DSC Token (PKI)" : "Aadhaar eSign (UIDAI OTP)",
        signer: authMethod === "dsc" ? "Dr. A. K. Verma (Authorized Signatory)" : "Priya S. Nair",
        certId: authMethod === "dsc" ? "CDAC-PKI-CERT-8841-A" : "UIDAI-TOKEN-7712-OTP",
        timestamp: new Date().toUTCString(),
        sha256: "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
      });
      setCurrentStep(3);
    }, 1200);
  };

  const handleReset = () => {
    setSignedRecord(null);
    setCurrentStep(2);
  };

  return (
    <section className="py-24 bg-transparent relative transition-colors duration-300 font-outfit overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tertiary/10 border border-tertiary/20 mb-4">
            <Sparkles className="w-4 h-4 text-tertiary" />
            <span className="text-xs font-bold text-tertiary uppercase tracking-wider font-outfit">
              Interactive 3-Step Workflow
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary dark:text-white tracking-tight font-outfit">
            How It Works: Send, Sign & Prove
          </h2>
          <p className="mt-4 text-base sm:text-lg text-labelGray dark:text-gray-400 font-nunitoSans">
            Experience the dual DSC and Aadhaar eSign workflow firsthand with our interactive signing simulator.
          </p>
        </div>

        {/* Unified Stepper Navigation Bar */}
        <div className="relative max-w-5xl mx-auto mb-10">
          {/* Progress Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-8 right-8 h-1 bg-gray-200 dark:bg-[#1E293B] -translate-y-1/2 z-0">
            <motion.div
              initial={false}
              animate={{
                width: currentStep === 1 ? "15%" : currentStep === 2 ? "50%" : "100%",
              }}
              transition={{ duration: 0.4 }}
              className="h-full bg-tertiary rounded-full shadow-[0_0_12px_rgba(18,213,118,0.5)]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
            {stepsMeta.map((s) => {
              const isActive = currentStep === s.step;
              const isCompleted = currentStep > s.step;

              return (
                <button
                  key={s.step}
                  onClick={() => setCurrentStep(s.step)}
                  className={`p-5 rounded-2xl border text-left transition-all duration-300 relative flex flex-col justify-between ${
                    isActive
                      ? "bg-white dark:bg-[#131B2E] border-tertiary shadow-[0_10px_25px_-5px_rgba(18,213,118,0.25)] ring-1 ring-tertiary/30 scale-[1.02]"
                      : isCompleted
                      ? "bg-white/95 dark:bg-[#0F1729] border-tertiary/40 hover:border-tertiary text-secondary dark:text-white shadow-sm"
                      : "bg-white dark:bg-[#0F1729] border-gray-200 dark:border-[#1E293B] text-secondary dark:text-gray-300 hover:border-tertiary/60 shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    {/* Step Icon Badge */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                        isActive
                          ? "bg-tertiary text-secondary shadow-[0_0_12px_rgba(18,213,118,0.4)]"
                          : isCompleted
                          ? "bg-tertiary/20 text-tertiary"
                          : "bg-gray-100 dark:bg-[#1E293B] text-labelGray dark:text-gray-400"
                      }`}
                    >
                      {isCompleted ? <Check className="w-5 h-5 text-tertiary stroke-[3]" /> : s.icon}
                    </div>

                    {/* Step Indicator Tag */}
                    {isActive ? (
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-tertiary bg-tertiary/10 border border-tertiary/20 px-2.5 py-1 rounded-full font-outfit">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
                        Live Demo
                      </span>
                    ) : (
                      <span className="text-xs font-bold font-mono text-labelGray dark:text-gray-400">
                        0{s.step}
                      </span>
                    )}
                  </div>

                  <div>
                    <h4
                      className={`text-base font-bold font-outfit ${
                        isActive
                          ? "text-secondary dark:text-white"
                          : "text-secondary dark:text-gray-200"
                      }`}
                    >
                      {s.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 font-nunitoSans leading-relaxed">
                      {s.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Interactive Sandbox Body */}
        <div className="rounded-3xl bg-white dark:bg-cardBackgroundDark backdrop-blur-xl border border-gray-200 dark:border-cardBorderColorDark p-6 sm:p-10 shadow-xl max-w-5xl mx-auto">
          {/* STEP 1: Upload & Prepare */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-100 dark:border-cardBorderColorDark">
                <div>
                  <h3 className="text-2xl font-bold text-secondary dark:text-white font-outfit">
                    Step 1: Upload & Prepare Workflow
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 font-nunitoSans leading-relaxed">
                    Upload contract documents, designate signature coordinates, and assign multi-party sequence.
                  </p>
                </div>
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-3.5 bg-tertiary text-secondary text-xs font-bold rounded-xl flex items-center gap-2 hover:brightness-110 shadow-[0_0_16px_rgba(18,213,118,0.35)] font-outfit self-start"
                >
                  <span>Proceed to Step 2: Sign Document</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Drag and Drop Simulator Box */}
                <div className="lg:col-span-6 p-8 rounded-2xl border-2 border-dashed border-gray-300 dark:border-[#2A3548] bg-gray-50/70 dark:bg-[#131B2E] flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-tertiary/10 text-tertiary flex items-center justify-center mb-4">
                    <UploadCloud className="w-8 h-8" />
                  </div>
                  <h4 className="text-base font-bold text-secondary dark:text-white mb-1 font-outfit">
                    Document Preparation Hub
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xs mb-4 font-nunitoSans leading-relaxed">
                    Drag and drop PDF or Word documents. 256-bit encryption applied in-transit.
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-[#0A1120] text-xs font-semibold text-secondary dark:text-gray-200 rounded-lg border border-gray-200 dark:border-gray-700 font-mono">
                    <FileText className="w-3.5 h-3.5 text-tertiary" />
                    <span>Commercial_Loan_Agreement.pdf (1.2 MB)</span>
                  </div>
                </div>

                {/* Workflow Capabilities List */}
                <div className="lg:col-span-6 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-labelGray dark:text-gray-400 block mb-2 font-outfit">
                    Preparation Capabilities:
                  </span>
                  {stepsMeta[0].bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-nunitoSans">
                      <span className="w-4 h-4 rounded-full bg-tertiary/15 text-tertiary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Interactive Sign Securely Simulator */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-100 dark:border-cardBorderColorDark">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-tertiary mb-1 font-outfit">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Live Interactive Simulator</span>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary dark:text-white font-outfit">
                    Step 2: Sign Securely with Dual Auth
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 font-nunitoSans leading-relaxed">
                    Select your preferred legally valid signing method and simulate the execution ceremony.
                  </p>
                </div>

                {/* Switcher for DSC vs Aadhaar */}
                <div className="flex items-center bg-gray-100 dark:bg-cardBackgroundDark p-1.5 rounded-2xl border border-gray-200 dark:border-cardBorderColorDark">
                  <button
                    onClick={() => setAuthMethod("aadhaar")}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold font-outfit transition-all ${
                      authMethod === "aadhaar"
                        ? "bg-tertiary text-secondary shadow-[0_0_12px_rgba(18,213,118,0.35)]"
                        : "text-labelGray dark:text-gray-400 hover:text-secondary dark:hover:text-white"
                    }`}
                  >
                    <Fingerprint className="w-4 h-4" />
                    <span>Aadhaar eSign (OTP)</span>
                  </button>

                  <button
                    onClick={() => setAuthMethod("dsc")}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold font-outfit transition-all ${
                      authMethod === "dsc"
                        ? "bg-tertiary text-secondary shadow-[0_0_12px_rgba(18,213,118,0.35)]"
                        : "text-labelGray dark:text-gray-400 hover:text-secondary dark:hover:text-white"
                    }`}
                  >
                    <Key className="w-4 h-4" />
                    <span>Class 3 DSC Token</span>
                  </button>
                </div>
              </div>

              {/* Signing Ceremony Interactive Box */}
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Interactive Action Widget */}
                <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-gray-50/70 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                  {authMethod === "aadhaar" ? (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-tertiary flex items-center gap-1.5 font-outfit">
                          <Fingerprint className="w-4 h-4" /> UIDAI Gateway Simulation
                        </span>
                        <span className="text-[11px] font-mono text-labelGray dark:text-gray-400">IT Act Section 3A</span>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-secondary dark:text-gray-300 mb-1.5 font-outfit">
                          Aadhaar Identity Anchor
                        </label>
                        <input
                          type="text"
                          disabled
                          value="XXXX - XXXX - 9412 (Verified Profile)"
                          className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-[#0A1120] border border-gray-200 dark:border-cardBorderColorDark text-xs font-mono text-secondary dark:text-gray-300"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-secondary dark:text-gray-300 mb-1.5 font-outfit">
                          Enter 6-Digit OTP received on registered mobile
                        </label>
                        <input
                          type="text"
                          value={aadhaarOtp}
                          onChange={(e) => setAadhaarOtp(e.target.value)}
                          maxLength={6}
                          placeholder="582194"
                          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0A1120] border border-gray-200 dark:border-cardBorderColorDark text-sm font-mono tracking-widest text-center text-secondary dark:text-white focus:outline-none focus:ring-2 focus:ring-tertiary"
                        />
                      </div>

                      <div className="flex items-start gap-2 pt-1 text-[11px] text-slate-500 dark:text-gray-400 font-nunitoSans">
                        <ShieldCheck className="w-4 h-4 text-tertiary flex-shrink-0 mt-0.5" />
                        <span>
                          I voluntarily consent to authenticate via Aadhaar e-Sign for affixing my legal digital signature under IT Act Section 3A.
                        </span>
                      </div>

                      <button
                        onClick={handleSimulateSigning}
                        disabled={isSimulating}
                        className="w-full py-4 px-4 bg-tertiary text-secondary font-bold rounded-xl shadow-[0_0_16px_rgba(18,213,118,0.35)] hover:brightness-110 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-sm font-outfit disabled:opacity-50 mt-2"
                      >
                        {isSimulating ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-secondary" />
                            <span>Affixing UIDAI Cryptographic Seal...</span>
                          </>
                        ) : (
                          <>
                            <Stamp className="w-4 h-4" />
                            <span>Simulate Aadhaar eSign Now</span>
                          </>
                        )}
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-tertiary flex items-center gap-1.5 font-outfit">
                          <Key className="w-4 h-4" /> Cryptographic Hardware PKI
                        </span>
                        <span className="text-[11px] font-mono text-labelGray dark:text-gray-400">Class 3 Qualified</span>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-secondary dark:text-gray-300 mb-1.5 font-outfit">
                          Connected Hardware Token / Cloud DSC
                        </label>
                        <input
                          type="text"
                          disabled
                          value="ePass2003Auto • Serial #CDAC-PKI-99214"
                          className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-[#0A1120] border border-gray-200 dark:border-cardBorderColorDark text-xs font-mono text-secondary dark:text-gray-300"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-secondary dark:text-gray-300 mb-1.5 font-outfit">
                          Token User PIN to unlock private signing key
                        </label>
                        <input
                          type="password"
                          value={dscPin}
                          onChange={(e) => setDscPin(e.target.value)}
                          maxLength={8}
                          placeholder="••••"
                          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0A1120] border border-gray-200 dark:border-cardBorderColorDark text-sm font-mono tracking-widest text-center text-secondary dark:text-white focus:outline-none focus:ring-2 focus:ring-tertiary"
                        />
                      </div>

                      <div className="flex items-start gap-2 pt-1 text-[11px] text-slate-500 dark:text-gray-400 font-nunitoSans">
                        <ShieldCheck className="w-4 h-4 text-tertiary flex-shrink-0 mt-0.5" />
                        <span>
                          Token certificate chain validated against CCA & CDAC root trust repository.
                        </span>
                      </div>

                      <button
                        onClick={handleSimulateSigning}
                        disabled={isSimulating}
                        className="w-full py-4 px-4 bg-tertiary text-secondary font-bold rounded-xl shadow-[0_0_16px_rgba(18,213,118,0.35)] hover:brightness-110 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-sm font-outfit disabled:opacity-50 mt-2"
                      >
                        {isSimulating ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-secondary" />
                            <span>Signing with Private Key...</span>
                          </>
                        ) : (
                          <>
                            <Stamp className="w-4 h-4" />
                            <span>Simulate DSC Signing Now</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>

                {/* Informational Context Beside Simulator */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-5 rounded-2xl bg-tertiary/10 border border-tertiary/20">
                    <span className="text-xs font-bold text-tertiary block mb-1 font-outfit">
                      Why This Is Legally Bulletproof:
                    </span>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-nunitoSans">
                      Unlike generic electronic signature platforms that only overlay an arbitrary image, Secure e-Sign generates an asymmetric cryptographic hash using private keys certified by government-accredited authorities.
                    </p>
                  </div>

                  <ul className="space-y-2.5 font-nunitoSans">
                    <li className="flex items-center gap-2 text-xs text-secondary dark:text-gray-300">
                      <Lock className="w-3.5 h-3.5 text-tertiary flex-shrink-0" />
                      <span>SHA-256 tamper-evident document lock</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs text-secondary dark:text-gray-300">
                      <ShieldCheck className="w-3.5 h-3.5 text-tertiary flex-shrink-0" />
                      <span>Non-repudiation: Signer cannot dispute signature</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs text-secondary dark:text-gray-300">
                      <Scale className="w-3.5 h-3.5 text-tertiary flex-shrink-0" />
                      <span>Admissible under IT Act 2000 Section 3</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Archive & Cryptographic Audit Certificate Inspector */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-100 dark:border-cardBorderColorDark">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-tertiary mb-1 font-outfit">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Cryptographic Verification Succeeded</span>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary dark:text-white font-outfit">
                    Step 3: Verifiable Audit Trail Certificate
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 font-nunitoSans leading-relaxed">
                    Document has been cryptographically signed, timestamped, and locked into the tamper-proof vault.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleReset}
                    className="px-4 py-2 border border-gray-300 dark:border-cardBorderColorDark text-xs font-semibold rounded-xl text-secondary dark:text-gray-300 hover:border-tertiary flex items-center gap-1.5 font-outfit"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Test Again</span>
                  </button>
                  <button
                    onClick={onOpenTrialModal}
                    className="px-6 py-2.5 bg-tertiary text-secondary text-xs font-bold rounded-xl flex items-center gap-2 hover:brightness-110 shadow-[0_0_16px_rgba(18,213,118,0.35)] font-outfit"
                  >
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Verifiable Certificate Card */}
              <div className="rounded-2xl border border-tertiary/30 bg-tertiary/5 dark:bg-cardBackgroundDark backdrop-blur-xl p-6 sm:p-8 relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-tertiary/20 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-tertiary/20 text-tertiary flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-secondary dark:text-white font-outfit">
                        CDAC Authenticated Audit Certificate
                      </h4>
                      <p className="text-xs text-labelGray dark:text-gray-400 font-mono">
                        Certificate ID: CERT-SECURE-2026-X9412
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-tertiary text-secondary shadow font-outfit">
                    VERIFIED & LOCKED
                  </span>
                </div>

                {/* Certificate Details Grid */}
                <div className="grid sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-white dark:bg-[#131B2E] border border-gray-200 dark:border-cardBorderColorDark">
                    <span className="text-[10px] text-labelGray dark:text-gray-400 block mb-1">SIGNER IDENTITY</span>
                    <span className="font-bold text-secondary dark:text-white">
                      {signedRecord ? signedRecord.signer : "Vikram Singhania"}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white dark:bg-[#131B2E] border border-gray-200 dark:border-cardBorderColorDark">
                    <span className="text-[10px] text-labelGray dark:text-gray-400 block mb-1">AUTHENTICATION METHOD</span>
                    <span className="font-bold text-tertiary">
                      {signedRecord ? signedRecord.method : "Aadhaar eSign (UIDAI)"}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white dark:bg-[#131B2E] border border-gray-200 dark:border-cardBorderColorDark sm:col-span-2">
                    <span className="text-[10px] text-labelGray dark:text-gray-400 block mb-1">SHA-256 DOCUMENT CHECKSUM</span>
                    <span className="font-bold text-secondary dark:text-gray-200 break-all">
                      {signedRecord ? signedRecord.sha256 : "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white dark:bg-[#131B2E] border border-gray-200 dark:border-cardBorderColorDark">
                    <span className="text-[10px] text-labelGray dark:text-gray-400 block mb-1">SERVER ATOMIC TIMESTAMP</span>
                    <span className="text-labelGray dark:text-gray-300">
                      {signedRecord ? signedRecord.timestamp : new Date().toUTCString()}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white dark:bg-[#131B2E] border border-gray-200 dark:border-cardBorderColorDark">
                    <span className="text-[10px] text-labelGray dark:text-gray-400 block mb-1">EVIDENTIARY STATUTE</span>
                    <span className="text-tertiary font-bold">
                      IT Act 2000 Sec 3 & Indian Contract Act 1872
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

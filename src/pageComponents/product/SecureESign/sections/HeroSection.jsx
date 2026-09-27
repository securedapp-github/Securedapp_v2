import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  ArrowRight,
  Calendar,
  Check,
  FileText,
  Lock,
  Stamp,
  Fingerprint,
  Key,
} from "lucide-react";
import { heroData } from "../data";

export default function HeroSection({ onOpenTrialModal }) {
  const handleBookDemo = () => {
    if (typeof window !== "undefined") {
      window.open(
        "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ21-NumjUBdRf0JzEARDvMYJ8kTpVE3AkdeVpX6fQ2-Xbm8sm5KICJfDsAuoF3F2-3Vd5lr50sp",
        "_blank"
      );
    }
  };

  return (
    <section className="relative min-h-[90vh] pt-32 pb-24 overflow-hidden flex items-center bg-grid dark:bg-secondary font-outfit transition-colors duration-300">
      {/* Ambient Cyber Accents */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-tertiary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#00d2ff]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Government Compliance Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-tertiary/10 border border-tertiary/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-tertiary tracking-wide uppercase">
                {heroData.badge}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-secondary dark:text-white font-outfit">
              Digital Signatures Built for India.{" "}
              <span className="text-tertiary">
                Government-Approved.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-nunitoSans">
              {heroData.subtitle}
            </p>

            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-tertiary">
              <ShieldCheck className="w-4 h-4 flex-shrink-0 text-tertiary" />
              <span>{heroData.complianceNote}</span>
            </div>

            {/* Primary & Secondary Action CTAs matching design.md Section 6.2 */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.02, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenTrialModal}
                className="px-8 py-4 bg-tertiary text-secondary font-bold rounded-xl shadow-[0_0_20px_rgba(18,213,118,0.35)] hover:brightness-110 transition-all flex items-center justify-center gap-2 text-base font-outfit"
              >
                <span>{heroData.primaryCtaText}</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleBookDemo}
                className="px-8 py-4 bg-secondary/5 dark:bg-cardBackgroundDark border border-secondary/20 dark:border-cardBorderColorDark text-secondary dark:text-white font-semibold rounded-xl hover:border-tertiary dark:hover:border-tertiary transition-all flex items-center justify-center gap-2 text-base font-outfit backdrop-blur-md"
              >
                <Calendar className="w-5 h-5 text-tertiary" />
                <span>{heroData.secondaryCtaText}</span>
              </motion.button>
            </div>

            {/* Trust Metrics Grid (Poppins for numerical stats) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-200 dark:border-cardBorderColorDark">
              {heroData.trustMetrics.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white font-poppins">
                    {item.value}
                  </span>
                  <span className="text-xs font-semibold text-secondary dark:text-gray-200 font-outfit">
                    {item.label}
                  </span>
                  <span className="text-[11px] text-labelGray dark:text-gray-400 font-nunitoSans">
                    {item.detail}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Glassmorphic Animated Signing Visual with animate-float */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Outer Decorative Subtle Glass Container */}
            <div className="animate-float relative rounded-3xl p-6 sm:p-7 bg-white/90 dark:bg-cardBackgroundDark backdrop-blur-xl border border-gray-200 dark:border-cardBorderColorDark shadow-2xl space-y-5">
              {/* Header bar of simulated viewer */}
              <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-cardBorderColorDark">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-secondary dark:text-white font-outfit">
                      Commercial_Agreement_v4.pdf
                    </h4>
                    <p className="text-[11px] text-labelGray dark:text-gray-400 flex items-center gap-1.5 font-mono">
                      <Lock className="w-3 h-3 text-tertiary" />
                      <span>SHA-256 Tamper-Proof Sealed</span>
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-tertiary/15 text-tertiary border border-tertiary/30">
                  IT Act Valid
                </span>
              </div>

              {/* Simulated Document Preview Area */}
              <div className="rounded-xl bg-gray-50/70 dark:bg-white/5 p-4 border border-dashed border-gray-200 dark:border-white/10 space-y-3">
                <div className="h-2 w-3/4 bg-gray-200 dark:bg-white/10 rounded" />
                <div className="h-2 w-full bg-gray-200 dark:bg-white/10 rounded" />
                <div className="h-2 w-5/6 bg-gray-200 dark:bg-white/10 rounded" />

                {/* Dual Signatures Preview Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                  {/* Signer 1: DSC Class 3 */}
                  <div className="p-3 rounded-xl bg-white dark:bg-[#0A1120] border border-tertiary/30 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-tertiary flex items-center gap-1">
                        <Key className="w-3 h-3" /> Class 3 DSC
                      </span>
                      <Stamp className="w-3.5 h-3.5 text-tertiary" />
                    </div>
                    <p className="text-xs font-bold text-secondary dark:text-white font-mono">
                      Dr. A. K. Verma
                    </p>
                    <p className="text-[10px] text-gray-400 font-mono mt-0.5">
                      Serial: 8F2A-4B91-CDAC
                    </p>
                    <div className="mt-2 text-[9px] text-tertiary bg-tertiary/10 px-1.5 py-0.5 rounded flex items-center gap-1">
                      <Check className="w-2.5 h-2.5" />
                      <span>PKI Authenticated</span>
                    </div>
                  </div>

                  {/* Signer 2: Aadhaar eSign */}
                  <div className="p-3 rounded-xl bg-white dark:bg-[#0A1120] border border-[#00d2ff]/30 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#00d2ff] flex items-center gap-1">
                        <Fingerprint className="w-3 h-3" /> Aadhaar eSign
                      </span>
                      <ShieldCheck className="w-3.5 h-3.5 text-[#00d2ff]" />
                    </div>
                    <p className="text-xs font-bold text-secondary dark:text-white font-mono">
                      Priya S. Nair
                    </p>
                    <p className="text-[10px] text-gray-400 font-mono mt-0.5">
                      UIDAI: XXXX-XXXX-9412
                    </p>
                    <div className="mt-2 text-[9px] text-[#00d2ff] bg-[#00d2ff]/10 px-1.5 py-0.5 rounded flex items-center gap-1">
                      <Check className="w-2.5 h-2.5" />
                      <span>OTP Verified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simulated Real-Time Audit Verification Bar */}
              <div className="rounded-xl p-3 bg-tertiary/10 border border-tertiary/20 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-tertiary" />
                  <span className="font-semibold text-secondary dark:text-white font-outfit">
                    CDAC Government Audit Trail
                  </span>
                </div>
                <span className="text-[11px] font-mono text-tertiary font-bold">
                  PASSED (Tamper-Evident)
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

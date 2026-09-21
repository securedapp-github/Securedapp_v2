import React from "react";
import { motion } from "framer-motion";
import {
  Printer,
  FileQuestion,
  Globe2,
  AlertOctagon,
  Check,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { problemPoints, meetSecureESign } from "../data";

export default function ProblemSection({ onOpenTrialModal }) {
  const iconMap = {
    "paper-cycle": <Printer className="w-5 h-5 text-red-500" />,
    "audit-holes": <FileQuestion className="w-5 h-5 text-amber-500" />,
    "cross-border": <Globe2 className="w-5 h-5 text-blue-500" />,
    "no-repudiation": <AlertOctagon className="w-5 h-5 text-rose-500" />,
  };

  return (
    <section className="py-24 bg-transparent relative transition-colors duration-300 font-outfit overflow-hidden">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-tertiary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-bold text-red-500 uppercase tracking-wider">
              The Paper Trap
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary dark:text-white tracking-tight font-outfit">
            Why Indian Enterprises Still Bleed Time on Paper
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-nunitoSans leading-relaxed">
            Print. Courier. Sign. Scan. Repeat. Physical signatures introduce courier delays, tamper risks, and evidentiary vulnerabilities in court.
          </p>
        </div>

        {/* The Friction Journey: Horizontal Flow Timeline (Unboxed, fluid architecture) */}
        <div className="relative mb-24">
          {/* Connecting Track Line for Desktop */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-gradient-to-r from-red-500/20 via-amber-500/20 to-rose-500/20 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {problemPoints.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.5 }}
                className="group relative flex flex-col pt-2 transition-all duration-300"
              >
                {/* Node Milestone with glowing accent */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-cardBackgroundDark shadow-md border border-gray-200 dark:border-white/10 group-hover:border-red-500/50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                    {iconMap[item.id]}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 tracking-wider">
                    PHASE 0{idx + 1}
                  </span>
                </div>

                {/* Content - Borderless, Typographic Hierarchy */}
                <h3 className="text-lg font-bold text-secondary dark:text-white group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors font-outfit mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-red-500/90 dark:text-red-400/90 mb-2.5 font-outfit">
                  {item.subtitle}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-nunitoSans">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Transition: From Friction to Instant Execution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-white/80 to-white/40 dark:from-[#0F172A]/80 dark:to-[#0A101D]/40 backdrop-blur-2xl border border-tertiary/25 shadow-[0_20px_50px_rgba(18,213,118,0.06)]"
        >
          {/* Ambient Top Glow Line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-tertiary/60 to-transparent" />

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative Flow */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tertiary/10 border border-tertiary/20">
                <Sparkles className="w-4 h-4 text-tertiary" />
                <span className="text-xs font-bold text-tertiary uppercase tracking-wider font-outfit">
                  The Solution • 60-Second Execution
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-secondary dark:text-white font-outfit tracking-tight">
                  {meetSecureESign.title}
                </h3>
                <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed font-nunitoSans max-w-2xl">
                  {meetSecureESign.whatItDoes.description}
                </p>
              </div>

              {/* Seamless Pill Tags instead of chunky nested boxes */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                {meetSecureESign.whatItDoes.bulletPoints.map((bullet, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-tertiary/10 border border-tertiary/20 text-xs font-semibold text-secondary dark:text-white font-outfit"
                  >
                    <Check className="w-3.5 h-3.5 text-tertiary stroke-[3]" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Sector Highlights - Editorial Strip */}
              <div className="pt-4 border-t border-gray-200/80 dark:border-white/10">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-3 font-outfit">
                  {meetSecureESign.whyItMatters.description}
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {meetSecureESign.whyItMatters.highlights.map((h, idx) => (
                    <div key={idx} className="space-y-1">
                      <span className="text-xs font-bold text-tertiary flex items-center gap-1.5 font-outfit">
                        <Zap className="w-3 h-3 text-tertiary" />
                        {h.sector}
                      </span>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-nunitoSans">
                        {h.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Action Callout - Sleek Glass Panel */}
            <div className="lg:col-span-4 flex flex-col justify-center items-center text-center p-8 rounded-2xl bg-secondary/5 dark:bg-white/[0.03] border border-secondary/10 dark:border-white/10">
              <div className="w-16 h-16 rounded-2xl bg-tertiary/15 text-tertiary flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(18,213,118,0.25)]">
                <ShieldCheck className="w-9 h-9 text-tertiary" />
              </div>
              <h4 className="text-lg font-bold text-secondary dark:text-white font-outfit">
                Eliminate Paper Friction
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 mb-6 leading-relaxed font-nunitoSans">
                Join forward-thinking Indian enterprises deploying legally binding digital workflows today.
              </p>
              <button
                onClick={onOpenTrialModal}
                className="w-full py-3.5 px-6 bg-tertiary text-secondary font-bold rounded-xl shadow-[0_0_20px_rgba(18,213,118,0.35)] hover:brightness-110 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-sm font-outfit cursor-pointer"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { Landmark, Scale, Building, Check, ArrowRight, Sparkles } from "lucide-react";
import { threePillars } from "../data";

export default function PillarsSection({ onOpenTrialModal }) {
  const pillarIcons = {
    fintech: <Landmark className="w-7 h-7 text-emerald-400" />,
    legal: <Scale className="w-7 h-7 text-blue-400" />,
    government: <Building className="w-7 h-7 text-amber-400" />,
  };

  const pillarStats = {
    fintech: "10X Faster Disbursals",
    legal: "0% Repudiation Risk",
    government: "100% Statutory Acceptance",
  };

  return (
    <section className="py-24 bg-transparent relative transition-colors duration-300 font-outfit overflow-hidden">
      {/* Ambient background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-tertiary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tertiary/10 border border-tertiary/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-tertiary" />
            <span className="text-xs font-bold text-tertiary uppercase tracking-wider font-outfit">
              Strategic Impact
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary dark:text-white tracking-tight font-outfit">
            Why Secure e-Sign Matters Across India
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-nunitoSans leading-relaxed">
            Engineered specifically to solve the distinct compliance, evidentiary, and throughput challenges of India's key institutional sectors.
          </p>
        </div>

        {/* Editorial 3-Column Split (Linear / Apple style with hairline dividers) */}
        <div className="rounded-3xl bg-gradient-to-b from-white/70 to-white/30 dark:from-[#0F172A]/70 dark:to-[#0A101D]/30 backdrop-blur-xl border border-gray-200/80 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.25)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-200/80 dark:divide-white/10">
            {threePillars.map((pillar, idx) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="group relative p-8 sm:p-10 flex flex-col justify-between hover:bg-white/40 dark:hover:bg-white/[0.02] transition-colors duration-300"
              >
                <div>
                  {/* Metric Ribbon & Sector Icon */}
                  <div className="flex items-center justify-between gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#060D1A] border border-gray-200/80 dark:border-white/10 shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      {pillarIcons[pillar.id]}
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-secondary/5 dark:bg-white/5 text-secondary dark:text-slate-200 border border-secondary/10 dark:border-white/10">
                      {pillarStats[pillar.id]}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-tertiary block mb-2">
                    {pillar.badge}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold text-secondary dark:text-white mb-3 font-outfit leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-nunitoSans">
                    {pillar.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {pillar.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-nunitoSans">
                        <span className="w-4 h-4 rounded-full bg-tertiary/15 text-tertiary flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-100 dark:border-white/10">
                  <button
                    onClick={onOpenTrialModal}
                    className="inline-flex items-center gap-2 text-xs font-bold text-tertiary group-hover:text-tertiary hover:underline font-outfit cursor-pointer"
                  >
                    <span>Deploy for {pillar.badge}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


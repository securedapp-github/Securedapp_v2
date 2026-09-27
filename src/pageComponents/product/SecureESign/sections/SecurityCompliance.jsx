import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Scale,
  FileCheck2,
  Server,
  Check,
  Lock,
} from "lucide-react";
import { securityComplianceData } from "../data";

export default function SecurityCompliance() {
  const { cdac, itAct, auditTrail, dataResidency } = securityComplianceData;

  const trustStack = [
    {
      level: "LAYER 01 • NATIONAL PKI ROOT",
      title: cdac.title,
      subtitle: cdac.subtitle,
      description: cdac.description,
      points: cdac.points,
      icon: <Award className="w-6 h-6 text-tertiary" />,
      tag: "MeitY • CDAC Validated",
      accent: "text-emerald-400",
    },
    {
      level: "LAYER 02 • STATUTORY LEGAL ADMISSIBILITY",
      title: itAct.title,
      subtitle: itAct.subtitle,
      description: itAct.description,
      points: itAct.points,
      icon: <Scale className="w-6 h-6 text-blue-400" />,
      tag: "IT Act 2000 Sec 3 & 3A",
      accent: "text-blue-400",
    },
    {
      level: "LAYER 03 • MATHEMATICAL TAMPER EVIDENCE",
      title: auditTrail.title,
      subtitle: auditTrail.subtitle,
      description: auditTrail.description,
      points: auditTrail.points,
      icon: <FileCheck2 className="w-6 h-6 text-cyan-400" />,
      tag: "SHA-256 • Cryptographic Log",
      accent: "text-cyan-400",
    },
    {
      level: "LAYER 04 • SOVEREIGN DATA RESIDENCY",
      title: dataResidency.title,
      subtitle: dataResidency.subtitle,
      description: dataResidency.description,
      points: dataResidency.points,
      icon: <Server className="w-6 h-6 text-amber-400" />,
      tag: "DPDP Act 2023 • RBI Compliant",
      accent: "text-amber-400",
    },
  ];

  return (
    <section className="py-24 bg-transparent relative transition-colors duration-300 font-outfit overflow-hidden">
      {/* Ambient background accents */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-tertiary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tertiary/10 border border-tertiary/20 mb-4">
            <Lock className="w-4 h-4 text-tertiary" />
            <span className="text-xs font-bold text-tertiary uppercase tracking-wider font-outfit">
              Cryptographic Integrity
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary dark:text-white tracking-tight font-outfit">
            Security & Regulatory Trust Architecture
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-nunitoSans leading-relaxed">
            Backed by national research standards and statutory frameworks to ensure every signature is legally bulletproof and mathematically tamper-evident.
          </p>
        </div>

        {/* Defense-in-Depth Trust Stack (Unified Layered Blueprint instead of generic cards) */}
        <div className="rounded-3xl bg-gradient-to-b from-white/70 to-white/30 dark:from-[#0F172A]/70 dark:to-[#0A101D]/30 backdrop-blur-xl border border-gray-200/80 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.25)] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200/80 dark:divide-white/10">
            {/* Left Column: Layers 01 & 02 */}
            <div className="divide-y divide-gray-200/80 dark:divide-white/10">
              {trustStack.slice(0, 2).map((layer, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className="p-8 sm:p-10 space-y-4 hover:bg-white/40 dark:hover:bg-white/[0.02] transition-colors duration-300"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-400 tracking-wider">
                      {layer.level}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-secondary/5 dark:bg-white/5 text-secondary dark:text-slate-200 border border-secondary/10 dark:border-white/10">
                      {layer.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#070D18] border border-gray-200/80 dark:border-white/10 shadow-sm flex items-center justify-center flex-shrink-0">
                      {layer.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary dark:text-white font-outfit">
                        {layer.title}
                      </h3>
                      <p className="text-xs font-semibold text-tertiary font-outfit">
                        {layer.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-nunitoSans">
                    {layer.description}
                  </p>

                  <ul className="space-y-2 pt-2">
                    {layer.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-nunitoSans">
                        <span className="w-4 h-4 rounded-full bg-tertiary/15 text-tertiary flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Right Column: Layers 03 & 04 */}
            <div className="divide-y divide-gray-200/80 dark:divide-white/10">
              {trustStack.slice(2, 4).map((layer, idx) => (
                <motion.div
                  key={idx + 2}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx + 2) * 0.15, duration: 0.5 }}
                  className="p-8 sm:p-10 space-y-4 hover:bg-white/40 dark:hover:bg-white/[0.02] transition-colors duration-300"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-400 tracking-wider">
                      {layer.level}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-secondary/5 dark:bg-white/5 text-secondary dark:text-slate-200 border border-secondary/10 dark:border-white/10">
                      {layer.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#070D18] border border-gray-200/80 dark:border-white/10 shadow-sm flex items-center justify-center flex-shrink-0">
                      {layer.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary dark:text-white font-outfit">
                        {layer.title}
                      </h3>
                      <p className="text-xs font-semibold text-tertiary font-outfit">
                        {layer.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-nunitoSans">
                    {layer.description}
                  </p>

                  <ul className="space-y-2 pt-2">
                    {layer.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-nunitoSans">
                        <span className="w-4 h-4 rounded-full bg-tertiary/15 text-tertiary flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

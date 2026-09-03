"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, MessageCircle, Sparkles, Send } from "lucide-react";
import { toast } from "react-toastify";
import { careersConfig } from "../../data/careersData";

const CareersTalentPool = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(careersConfig.applicationEmail);
    setCopied(true);
    toast.success(`Copied ${careersConfig.applicationEmail} to clipboard!`);
    setTimeout(() => setCopied(false), 2500);
  };

  const talentPoolMailto = `mailto:${careersConfig.applicationEmail}?subject=${encodeURIComponent(
    "General Application / Open Talent Pipeline - [Your Name]"
  )}&body=${encodeURIComponent(
    `Hello SecureDApp Careers Team,\n\nI would like to submit an open application for future opportunities and specialized projects at SecureDApp.\n\n• Full Name:\n• Desired Track (Marketing / BD & Sales / Software Engineering / Research):\n• Current City / Country:\n• Portfolio / GitHub / LinkedIn:\n• Attached: Resume / CV (PDF)\n\nWhat I would love to build or solve with SecureDApp:\n[Brief note on your strengths, projects, or interests]\n\nBest regards,\n`
  )}`;

  return (
    <section id="talent-pool" className="py-20 relative border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-emerald-500/[0.08] via-white to-teal-500/[0.08] dark:from-slate-900 dark:via-slate-900 dark:to-emerald-950 border border-emerald-500/25 dark:border-emerald-500/30 shadow-xl shadow-emerald-500/5 dark:shadow-2xl relative overflow-hidden transition-colors duration-300">
          {/* Background decorative cyber glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-500/25 dark:border-emerald-400/25 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>General Talent Pipeline</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold font-outfit leading-tight mb-4 text-slate-900 dark:text-white">
              Don&apos;t See the Exact Match for Your Background?
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-8 font-nunitoSans">
              We never let rigid job descriptions stand in the way of exceptional people. If you are passionate about cybersecurity, software engineering, crypto growth, or research, send us your portfolio and let us know what you want to build.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={talentPoolMailto}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-sm sm:text-base flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Send className="w-4 h-4" />
                <span>Submit Spontaneous Application</span>
              </a>

              <a
                href={`https://wa.me/${careersConfig.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  "Hi SecureDApp team, I want to introduce myself for future opportunities."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-white dark:bg-slate-800/90 hover:bg-slate-50 dark:hover:bg-slate-700/90 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm sm:text-base flex items-center gap-2 transition-all shadow-sm backdrop-blur-md"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="px-4 py-3.5 rounded-xl bg-white/90 dark:bg-slate-800/60 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all shadow-sm backdrop-blur-md"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                    <span>Copy {careersConfig.applicationEmail}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersTalentPool;

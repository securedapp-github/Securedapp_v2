"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Mail } from "lucide-react";
import { careersFaqs, careersConfig } from "../../data/careersData";

const CareersFAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-20 bg-slate-50/50 dark:bg-slate-950/40 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 dark:text-emerald-400 text-xs font-semibold tracking-wide uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-outfit text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-nunitoSans leading-relaxed">
            Everything you need to know about our remote internship program, performance-based stipend, and application roadmap.
          </p>
        </div>

        <div className="space-y-4">
          {careersFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "pro-glass-card border-emerald-500/60 shadow-lg shadow-emerald-500/5 ring-1 ring-emerald-500/20"
                    : "bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 select-none focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-xs font-extrabold text-emerald-500/60 dark:text-emerald-400/50">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="text-base sm:text-lg font-bold font-outfit text-slate-900 dark:text-white">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isOpen
                      ? "bg-emerald-500/15 text-emerald-500 dark:text-emerald-400"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                  }`}>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 font-nunitoSans animate-drawer">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Footer Bar */}
        <div className="mt-12 p-6 rounded-2xl pro-glass-card flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold font-outfit text-slate-900 dark:text-white">
              Still have a question before applying?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-nunitoSans mt-0.5">
              Our talent team is available on WhatsApp or email to answer any queries.
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <a
              href={`https://wa.me/${careersConfig.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                careersConfig.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500 text-emerald-600 dark:text-emerald-400 hover:text-slate-950 text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`mailto:${careersConfig.applicationEmail}?subject=${encodeURIComponent("Careers Query")}`}
              className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersFAQ;

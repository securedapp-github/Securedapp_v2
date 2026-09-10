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
    <section id="faq" className="py-20 bg-white/40 dark:bg-[#021327]/40 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#12D576]/10 border border-[#12D576]/25 text-[#0f9f59] dark:text-[#00ff88] text-xs font-semibold tracking-wide uppercase mb-3 font-outfit">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-outfit text-secondary dark:text-primary">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-[#a0a5b1] font-nunitoSans leading-relaxed">
            Everything you need to know about our hybrid internship program, performance-based stipend, and application roadmap.
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
                    ? "pro-glass-card border-tertiary/60 shadow-lg shadow-tertiary/5 ring-1 ring-tertiary/20"
                    : "bg-white/80 dark:bg-[#031B34]/60 border border-cardBorderColorLight dark:border-cardBorderColorDark hover:border-tertiary/40"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 select-none focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-xs font-extrabold text-[#12D576]/70 dark:text-[#00ff88]/70 font-outfit">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="text-base sm:text-lg font-bold font-outfit text-secondary dark:text-primary">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors border ${
                    isOpen
                      ? "bg-tertiary/15 border-tertiary/30 text-tertiary"
                      : "bg-cardBackgroundLight dark:bg-cardBackgroundDark border-cardBorderColorLight dark:border-cardBorderColorDark text-secondary dark:text-primary"
                  }`}>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-tertiary" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-slate-600 dark:text-[#a0a5b1] leading-relaxed border-t border-cardBorderColorLight dark:border-cardBorderColorDark font-nunitoSans animate-drawer">
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
            <h4 className="text-base font-bold font-outfit text-secondary dark:text-primary">
              Still have a question before applying?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-[#a0a5b1] font-nunitoSans mt-0.5">
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
              className="px-4 py-2 rounded-xl bg-tertiary/15 hover:bg-tertiary text-[#0f9f59] dark:text-tertiary hover:text-secondary border border-tertiary/30 text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all font-nunitoSans cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`mailto:${careersConfig.applicationEmail}?subject=${encodeURIComponent(
                "Question about SecureDApp Careers"
              )}`}
              className="px-4 py-2 rounded-xl bg-cardBackgroundLight dark:bg-cardBackgroundDark hover:bg-[#D2E6FF4D] dark:hover:bg-[#FFFFFF26] border border-cardBorderColorLight dark:border-cardBorderColorDark text-secondary dark:text-primary text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all font-nunitoSans cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email HR</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersFAQ;

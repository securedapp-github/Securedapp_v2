import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqsData } from "../data";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0); // First item open by default

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-transparent border-t border-gray-200 dark:border-cardBorderColorDark relative transition-colors duration-300 font-outfit">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tertiary/10 border border-tertiary/20 mb-4">
            <HelpCircle className="w-4 h-4 text-tertiary" />
            <span className="text-xs font-bold text-tertiary uppercase tracking-wider">
              Legal & Technical FAQs
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary dark:text-white tracking-tight font-outfit">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-labelGray dark:text-gray-400 font-nunitoSans">
            Clear answers about courtroom admissibility, dual authentication mechanics, and enterprise integration.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqsData.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200 dark:border-cardBorderColorDark bg-white dark:bg-cardBackgroundDark backdrop-blur-xl overflow-hidden transition-all shadow-sm hover:border-tertiary/50"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-secondary dark:text-white leading-snug font-outfit">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-tertiary text-secondary rotate-180"
                        : "bg-gray-100 dark:bg-white/5 text-labelGray dark:text-gray-300"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-labelGray dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-cardBorderColorDark/40 font-nunitoSans">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



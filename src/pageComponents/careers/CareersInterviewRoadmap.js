"use client";

import React from "react";
import { Clock, CheckCircle2, ArrowRight, Zap, Sparkles } from "lucide-react";
import { interviewRoadmap } from "../../data/careersData";

const CareersInterviewRoadmap = () => {
  return (
    <section id="hiring-roadmap" className="py-20 relative overflow-hidden border-b border-cardBorderColorLight dark:border-cardBorderColorDark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00d2ff]/10 border border-[#00d2ff]/30 text-[#0088cc] dark:text-[#00d2ff] text-xs font-semibold tracking-wide uppercase mb-3 font-outfit">
            <Zap className="w-3.5 h-3.5" />
            <span>Fast-Track Hiring Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-outfit text-secondary dark:text-primary">
            Transparent, Practical & Respectful
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-[#a0a5b1] font-nunitoSans leading-relaxed">
            No endless trivia rounds or week-long silences. Our selection process is fast, hybrid-friendly, and centers entirely on demonstrable proof of capability.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12D576]/10 border border-[#12D576]/25 text-[#0f9f59] dark:text-[#00ff88] text-xs font-bold font-nunitoSans">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Average turnaround: 3 – 7 Business Days</span>
          </div>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {interviewRoadmap.map((step, idx) => (
            <div
              key={idx}
              className="group relative p-6 sm:p-7 rounded-2xl pro-glass-card flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#12D576] to-[#00d2ff] opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl sm:text-4xl font-extrabold font-outfit text-[#12D576]/30 dark:text-[#12D576]/25 group-hover:text-tertiary dark:group-hover:text-tertiary transition-colors">
                    {step.step}
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cardBackgroundLight dark:bg-cardBackgroundDark border border-cardBorderColorLight dark:border-cardBorderColorDark text-secondary dark:text-primary text-xs font-semibold shadow-xs font-nunitoSans">
                    <Clock className="w-3.5 h-3.5 text-[#12D576] dark:text-[#00ff88]" />
                    <span>{step.duration}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold font-outfit text-secondary dark:text-primary mb-2 group-hover:text-tertiary dark:group-hover:text-tertiary transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-[#a0a5b1] text-sm leading-relaxed font-nunitoSans">
                  {step.desc}
                </p>
              </div>

              {idx < interviewRoadmap.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white dark:bg-[#031B34] border border-cardBorderColorLight dark:border-cardBorderColorDark items-center justify-center text-tertiary shadow-sm">
                  <ArrowRight className="w-3 h-3 text-[#12D576] dark:text-[#00ff88]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersInterviewRoadmap;

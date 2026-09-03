"use client";

import React from "react";
import { Clock, CheckCircle2, ArrowRight, Zap, Sparkles } from "lucide-react";
import { interviewRoadmap } from "../../data/careersData";

const CareersInterviewRoadmap = () => {
  return (
    <section id="hiring-roadmap" className="py-20 relative overflow-hidden border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-500 dark:text-cyan-400 text-xs font-semibold tracking-wide uppercase mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Fast-Track Hiring Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-outfit text-slate-900 dark:text-white">
            Transparent, Practical & Respectful
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-nunitoSans leading-relaxed">
            No endless trivia rounds or week-long silences. Our selection process is fast, remote-friendly, and centers entirely on demonstrable proof of capability.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
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
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl sm:text-4xl font-extrabold font-outfit text-emerald-500/30 dark:text-emerald-400/25 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                    {step.step}
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 text-xs font-semibold shadow-xs">
                    <Clock className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                    <span>{step.duration}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold font-outfit text-slate-900 dark:text-white mb-2 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {idx < interviewRoadmap.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 items-center justify-center text-slate-400 shadow-sm">
                  <ArrowRight className="w-3 h-3 text-emerald-500" />
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

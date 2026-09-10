"use client";

import React from "react";
import { ArrowRight, Sparkles, Briefcase, Globe, Coins, ShieldCheck, Flame, Compass } from "lucide-react";
import { careersConfig } from "../../data/careersData";

const statIconMap = {
  0: Briefcase,
  1: Flame,
  2: Globe,
  3: Coins,
};

const CareersHero = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="careers-hero-section relative overflow-hidden py-16 sm:py-24 careers-grid-bg border-b border-cardBorderColorLight dark:border-cardBorderColorDark">
      {/* Ambient Cybernetic Glow Blooms */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-[#12D576]/10 dark:bg-[#12D576]/12 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute -top-12 right-12 w-[340px] h-[340px] bg-[#00d2ff]/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-4 left-10 w-[300px] h-[300px] bg-[#001938]/10 dark:bg-[#00d2ff]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#12D576]/10 dark:bg-[#12D576]/15 border border-[#12D576]/30 text-[#0f9f59] dark:text-[#00ff88] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-8 shadow-sm backdrop-blur-md font-outfit">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#12D576]" />
          </span>
          <span>{careersConfig.heroBadge}</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-outfit tracking-tight text-secondary dark:text-primary max-w-4xl mx-auto leading-[1.15] sm:leading-[1.12]">
          Build the Future of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f9f59] via-[#12D576] to-[#00d2ff] dark:from-[#00ff88] dark:via-[#12D576] dark:to-[#00d2ff]">
            Web3 & Blockchain Security
          </span>
        </h1>

        {/* Hero Subtext */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 dark:text-[#a0a5b1] max-w-2xl mx-auto font-nunitoSans leading-relaxed">
          {careersConfig.heroSubtitle}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => scrollToSection("open-roles")}
            className="group px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#12D576] via-[#00ff88] to-[#00d2ff] hover:opacity-95 text-secondary font-bold text-base shadow-lg shadow-[#12D576]/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2.5 font-nunitoSans cursor-pointer"
          >
            <span>Explore 3 Open Tracks</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("culture-and-values")}
            className="px-7 py-3.5 rounded-xl bg-cardBackgroundLight dark:bg-cardBackgroundDark hover:bg-[#D2E6FF4D] dark:hover:bg-[#FFFFFF2E] border border-cardBorderColorLight dark:border-cardBorderColorDark text-secondary dark:text-primary font-semibold text-base transition-all duration-200 backdrop-blur-md shadow-sm font-nunitoSans cursor-pointer"
          >
            Why SecureDApp & Perks
          </button>
        </div>

        {/* Bento Metrics / Proof Points Grid */}
        <div className="mt-14 sm:mt-18 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {careersConfig.stats.map((stat, idx) => {
            const IconComponent = statIconMap[idx] || Sparkles;

            return (
              <div
                key={idx}
                className="group p-5 rounded-2xl pro-glass-card text-left flex flex-col justify-between relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#12D576]/10 dark:bg-[#12D576]/15 text-[#12D576] dark:text-[#00ff88] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest font-outfit">
                    #{idx + 1}
                  </span>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-outfit text-secondary dark:text-primary tracking-tight">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-semibold text-slate-500 dark:text-[#a0a5b1] font-nunitoSans">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CareersHero;

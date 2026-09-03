"use client";

import React, { useState } from "react";
import {
  Shield,
  Terminal,
  Zap,
  GraduationCap,
  Globe,
  Coins,
  Award,
  Sparkles,
  HeartPulse,
  Laptop,
  CheckCircle2,
} from "lucide-react";
import { cultureValues, perksAndBenefits } from "../../data/careersData";

const cultureIconMap = {
  ShieldAlert: Shield,
  Binary: Terminal,
  Zap: Zap,
  GraduationCap: GraduationCap,
};

const perkIconMap = {
  Globe: Globe,
  Coins: Coins,
  Award: Award,
  Sparkles: Sparkles,
  HeartPulse: HeartPulse,
  Laptop: Laptop,
};

const CareersCulturePerks = () => {
  const [activeTab, setActiveTab] = useState("perks"); // "perks" or "culture"

  return (
    <section id="culture-and-values" className="py-20 bg-slate-50/60 dark:bg-slate-950/60 relative border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 dark:text-emerald-400 text-xs font-semibold tracking-wide uppercase mb-3">
            Why SecureDApp
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-outfit text-slate-900 dark:text-white">
            High-Impact Missions, Pure Meritocracy
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-nunitoSans leading-relaxed">
            We operate at the intersection of high-stakes blockchain security and decentralized autonomy. Explore how our team works and what you gain as an intern.
          </p>

          {/* Interactive Tab Switcher */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <button
              type="button"
              onClick={() => setActiveTab("perks")}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === "perks"
                  ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Internship Perks & Benefits (6)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("culture")}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === "culture"
                  ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Shield className="w-4 h-4" />
              <span>Our DNA & Values (4)</span>
            </button>
          </div>
        </div>

        {/* Dynamic Content Grid */}
        {activeTab === "culture" ? (
          /* Culture Values Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-drawer">
            {cultureValues.map((val) => {
              const IconComponent = cultureIconMap[val.icon] || Shield;
              return (
                <div
                  key={val.id}
                  className="group p-8 rounded-2xl pro-glass-card relative overflow-hidden"
                >
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/15 transition-colors" />
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-500 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-outfit text-slate-900 dark:text-white mb-3">
                    {val.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          /* Perks & Benefits Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-drawer">
            {perksAndBenefits.map((perk, idx) => {
              const IconComponent = perkIconMap[perk.icon] || Sparkles;
              return (
                <div
                  key={idx}
                  className="group p-6 sm:p-7 rounded-2xl pro-glass-card relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="absolute -top-10 -right-10 w-28 h-28 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-emerald-500/15 transition-colors" />
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-500 dark:text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold font-outfit text-slate-900 dark:text-white mb-2">
                      {perk.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {perk.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-xs font-semibold text-emerald-500 dark:text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Included for all 3 roles</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default CareersCulturePerks;

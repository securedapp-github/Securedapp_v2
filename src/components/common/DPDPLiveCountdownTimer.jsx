"use client";

import React, { useState, useEffect } from "react";

const TARGET_DATE = new Date("2027-05-13T00:00:00+05:30").getTime();

export default function DPDPLiveCountdownTimer({
  label = "Core DPDP Enforcement: 13 May 2027",
  className = "",
}) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: "207",
    hours: "11",
    minutes: "45",
    seconds: "00",
  });

  useEffect(() => {
    setMounted(true);
    const update = () => {
      const now = Date.now();
      const diff = Math.max(0, TARGET_DATE - now);
      setTimeLeft({
        days: String(Math.floor(diff / (1000 * 60 * 60 * 24))),
        hours: String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0"),
        minutes: String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0"),
        seconds: String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, "0"),
      });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      suppressHydrationWarning
      className={`inline-flex items-center justify-between gap-3 sm:gap-4 relative overflow-hidden rounded-full bg-[#030d18]/90 border border-emerald-500/25 px-3.5 sm:px-4 py-1.5 sm:py-2 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.6),0_0_20px_-4px_rgba(18,213,118,0.18)] backdrop-blur-xl transition-all hover:border-emerald-400/40 font-outfit text-white max-w-full whitespace-nowrap select-none ${className}`}
    >
      {/* Top Subtle Curved Sheen */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent pointer-events-none" />

      {/* Ambient Micro Radial Glow */}
      <div className="absolute -top-6 left-1/4 w-32 h-12 bg-emerald-500/15 rounded-full blur-xl pointer-events-none" />

      {/* Left: Radar Live Dot + Title */}
      <div className="relative z-10 flex items-center space-x-2 sm:space-x-2.5 flex-shrink-0">
        {/* Radar Beacon */}
        <div className="relative flex h-2 w-2 items-center justify-center flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_#12D576]"></span>
        </div>

        {/* LIVE Badge */}
        <span className="text-[9px] font-mono font-extrabold tracking-wider uppercase text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 shadow-[0_0_8px_rgba(18,213,118,0.2)]">
          LIVE
        </span>

        {/* Headline */}
        <div className="flex items-center space-x-1.5 text-xs sm:text-[13px] font-medium text-gray-200">
          <span className="text-gray-300">Core DPDP Enforcement:</span>
          <span className="font-extrabold text-white tracking-tight bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent">
            13 May 2027
          </span>
        </div>
      </div>

      {/* Hairline Vertical Divider */}
      <div className="h-4 w-[1px] bg-white/15 flex-shrink-0 relative z-10 mx-0.5 sm:mx-1" />

      {/* Right: Precision Chrono Pods */}
      <div
        suppressHydrationWarning
        className="relative z-10 flex items-center space-x-1 sm:space-x-1.5 font-mono text-xs flex-shrink-0"
      >
        {/* Days */}
        <div className="flex items-baseline space-x-1 px-2 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <span
            suppressHydrationWarning
            className="font-bold text-xs sm:text-[13px] text-white tabular-nums tracking-tight"
          >
            {timeLeft.days}
          </span>
          <span className="text-[8px] font-bold text-gray-400 uppercase">D</span>
        </div>

        <span className="text-gray-500 font-bold select-none text-[10px]">:</span>

        {/* Hours */}
        <div className="flex items-baseline space-x-1 px-2 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <span
            suppressHydrationWarning
            className="font-bold text-xs sm:text-[13px] text-white tabular-nums tracking-tight"
          >
            {timeLeft.hours}
          </span>
          <span className="text-[8px] font-bold text-gray-400 uppercase">H</span>
        </div>

        <span className="text-gray-500 font-bold select-none text-[10px]">:</span>

        {/* Mins */}
        <div className="flex items-baseline space-x-1 px-2 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <span
            suppressHydrationWarning
            className="font-bold text-xs sm:text-[13px] text-white tabular-nums tracking-tight"
          >
            {timeLeft.minutes}
          </span>
          <span className="text-[8px] font-bold text-gray-400 uppercase">M</span>
        </div>

        <span className="text-gray-500 font-bold select-none text-[10px]">:</span>

        {/* Secs (Active Emerald Glow) */}
        <div className="flex items-baseline space-x-1 px-2 py-1 rounded-lg bg-emerald-500/15 border border-emerald-400/50 shadow-[0_0_12px_rgba(18,213,118,0.3)]">
          <span
            suppressHydrationWarning
            className="font-extrabold text-xs sm:text-[13px] text-emerald-300 tabular-nums tracking-tight animate-pulse"
          >
            {timeLeft.seconds}
          </span>
          <span className="text-[8px] font-extrabold text-emerald-400 uppercase">S</span>
        </div>
      </div>
    </div>
  );
}

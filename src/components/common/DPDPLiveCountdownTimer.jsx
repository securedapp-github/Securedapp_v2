"use client";

import React, { useState, useEffect } from "react";

const TARGET_DATE = new Date("2027-05-13T00:00:00+05:30").getTime();

export default function DPDPLiveCountdownTimer({
  label = "Core DPDP Enforcement: 13 May 2027",
  sublabel = "",
  className = "",
}) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: "207",
    hours: "12",
    minutes: "00",
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
      className={`inline-flex flex-col sm:flex-row sm:items-center justify-between sm:justify-start gap-2.5 sm:gap-4 relative overflow-hidden rounded-xl sm:rounded-full bg-[#051322]/85 border border-emerald-500/25 backdrop-blur-xl px-3.5 sm:px-4 py-2 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5),0_0_15px_-3px_rgba(18,213,118,0.12)] transition-all hover:border-emerald-400/40 font-outfit text-white max-w-full ${className}`}
    >
      {/* Top Hairline Sheen */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent pointer-events-none" />

      {/* Ambient Micro Glow */}
      <div className="absolute -top-6 left-1/4 w-28 h-12 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />

      {/* Left: Radar Live Dot + Title */}
      <div className="relative z-10 flex items-center flex-wrap gap-2 min-w-0">
        {/* Radar Beacon */}
        <div className="flex items-center space-x-1.5 flex-shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_#12D576]"></span>
          </span>
          <span className="text-[9px] font-mono font-bold tracking-wider uppercase text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 select-none">
            LIVE
          </span>
        </div>

        {/* Headline */}
        <div className="flex items-center space-x-1.5 text-xs sm:text-[13px] font-medium text-gray-200">
          <span className="text-gray-300">Core DPDP Enforcement:</span>
          <span className="font-extrabold whitespace-nowrap bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent">
            13 May 2027
          </span>
        </div>

        {/* Sublabel / Tag */}
        {sublabel && (
          <span className="hidden lg:inline-flex items-center text-[10px] font-mono text-cyan-300/80 bg-cyan-950/40 border border-cyan-500/20 px-2 py-0.5 rounded-full truncate max-w-[220px]">
            {sublabel}
          </span>
        )}
      </div>

      {/* Sleek Vertical Divider */}
      <div className="hidden sm:block h-3.5 w-[1px] bg-white/10 flex-shrink-0 relative z-10" />

      {/* Right: Slim, precision ticker capsules */}
      <div
        suppressHydrationWarning
        className="relative z-10 flex items-center space-x-1 font-mono text-xs self-start sm:self-center flex-shrink-0"
      >
        {/* Days */}
        <div className="flex items-baseline space-x-0.5 px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <span
            suppressHydrationWarning
            className="font-bold text-xs sm:text-[13px] text-white tabular-nums tracking-tight"
          >
            {timeLeft.days}
          </span>
          <span className="text-[8px] font-semibold text-gray-400 uppercase">d</span>
        </div>

        <span className="text-gray-500 font-bold select-none text-[10px]">:</span>

        {/* Hours */}
        <div className="flex items-baseline space-x-0.5 px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <span
            suppressHydrationWarning
            className="font-bold text-xs sm:text-[13px] text-white tabular-nums tracking-tight"
          >
            {timeLeft.hours}
          </span>
          <span className="text-[8px] font-semibold text-gray-400 uppercase">h</span>
        </div>

        <span className="text-gray-500 font-bold select-none text-[10px]">:</span>

        {/* Mins */}
        <div className="flex items-baseline space-x-0.5 px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <span
            suppressHydrationWarning
            className="font-bold text-xs sm:text-[13px] text-white tabular-nums tracking-tight"
          >
            {timeLeft.minutes}
          </span>
          <span className="text-[8px] font-semibold text-gray-400 uppercase">m</span>
        </div>

        <span className="text-gray-500 font-bold select-none text-[10px]">:</span>

        {/* Secs (Emerald active) */}
        <div className="flex items-baseline space-x-0.5 px-2 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-400/40 shadow-[0_0_10px_rgba(18,213,118,0.25)]">
          <span
            suppressHydrationWarning
            className="font-bold text-xs sm:text-[13px] text-emerald-300 tabular-nums tracking-tight animate-pulse"
          >
            {timeLeft.seconds}
          </span>
          <span className="text-[8px] font-bold text-emerald-400 uppercase">s</span>
        </div>
      </div>
    </div>
  );
}

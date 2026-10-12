"use client";

import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const TARGET_DATE = new Date("2027-05-13T00:00:00+05:30").getTime();

function calculateTimeLeft() {
  const now = Date.now();
  const diff = Math.max(0, TARGET_DATE - now);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

export default function DPDPLiveCountdownTimer({
  label = "Core DPDP Enforcement: 13 May 2027",
  className = "",
  showIcon = true,
}) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-2xl bg-white/90 dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 text-secondary dark:text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow-[0_0_25px_rgba(18,213,118,0.2)] hover:border-tertiary/50 transition-all duration-300 backdrop-blur-xl group font-outfit ${className}`}
    >
      <span className="relative flex h-2.5 w-2.5 items-center justify-center">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary shadow-[0_0_8px_#12D576]"></span>
      </span>

      {showIcon && <Clock className="w-3.5 h-3.5 text-tertiary group-hover:rotate-45 transition-transform duration-300" />}

      <span className="font-semibold text-secondary/90 dark:text-gray-200 tracking-tight">{label}</span>

      <span className="text-gray-300 dark:text-white/20 hidden sm:inline">•</span>

      <div className="flex items-center gap-1 font-mono text-[11px] sm:text-xs font-bold text-secondary dark:text-white">
        <span className="bg-gray-100 dark:bg-white/10 px-2 py-0.5 rounded-md border border-gray-200/70 dark:border-white/10 tabular-nums shadow-inner">
          {timeLeft.days}<span className="text-tertiary font-bold ml-0.5 text-[10px]">d</span>
        </span>
        <span className="text-gray-400 dark:text-white/30">:</span>
        <span className="bg-gray-100 dark:bg-white/10 px-2 py-0.5 rounded-md border border-gray-200/70 dark:border-white/10 tabular-nums shadow-inner">
          {String(timeLeft.hours).padStart(2, "0")}<span className="text-tertiary font-bold ml-0.5 text-[10px]">h</span>
        </span>
        <span className="text-gray-400 dark:text-white/30">:</span>
        <span className="bg-gray-100 dark:bg-white/10 px-2 py-0.5 rounded-md border border-gray-200/70 dark:border-white/10 tabular-nums shadow-inner">
          {String(timeLeft.minutes).padStart(2, "0")}<span className="text-tertiary font-bold ml-0.5 text-[10px]">m</span>
        </span>
        <span className="text-gray-400 dark:text-white/30">:</span>
        <span className="bg-gray-100 dark:bg-white/10 px-2 py-0.5 rounded-md border border-gray-200/70 dark:border-white/10 tabular-nums shadow-inner text-tertiary font-black animate-pulse">
          {String(timeLeft.seconds).padStart(2, "0")}<span className="text-tertiary font-bold ml-0.5 text-[10px]">s</span>
        </span>
      </div>
    </div>
  );
}

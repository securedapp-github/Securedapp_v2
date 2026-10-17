"use client";

import React, { useState, useEffect } from "react";
import { Clock, ShieldAlert, Sparkles, Activity } from "lucide-react";

const TARGET_DATE = new Date("2027-05-13T00:00:00+05:30").getTime();
// Reference starting point: DPDP Rules notified 13 Nov 2025
const START_DATE = new Date("2025-11-13T00:00:00+05:30").getTime();

function calculateTimeLeft() {
  const now = Date.now();
  const diff = Math.max(0, TARGET_DATE - now);
  const totalDuration = TARGET_DATE - START_DATE;
  const elapsed = Math.max(0, now - START_DATE);
  const percentElapsed = Math.min(100, Math.max(0, (elapsed / totalDuration) * 100));

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
    percentElapsed: percentElapsed.toFixed(1),
  };
}

export default function DPDPLiveCountdownTimer({
  label = "Core DPDP Enforcement: 13 May 2027",
  sublabel = "",
  className = "",
  variant = "premium", // "premium" (rich cyber banner) | "pill"
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
      className={`relative overflow-hidden rounded-2xl bg-white/95 dark:bg-[#001938]/90 border border-gray-200/90 dark:border-white/15 p-3.5 sm:p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_35px_rgba(0,0,0,0.5)] backdrop-blur-2xl transition-all hover:border-tertiary/40 group font-outfit ${className}`}
    >
      {/* Ambient Cyber Accent Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-tertiary to-transparent opacity-80" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6">
        {/* Left: Live Indicator & Title */}
        <div className="flex items-start sm:items-center space-x-3">
          {/* Animated Radar Pulse */}
          <div className="relative flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center mt-0.5 sm:mt-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-80"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tertiary shadow-[0_0_12px_#12D576]"></span>
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono uppercase tracking-widest font-extrabold text-tertiary px-2 py-0.5 rounded-full bg-tertiary/10 border border-tertiary/20">
                LIVE ENFORCEMENT COUNTDOWN
              </span>
              <span className="text-[11px] text-gray-400 font-mono hidden md:inline">
                Rule 1(2) &amp; Section 6
              </span>
            </div>

            <div className="text-xs sm:text-sm font-bold text-secondary dark:text-white mt-1 flex items-center space-x-1.5">
              <span>{label}</span>
              {sublabel && (
                <span className="text-xs text-gray-500 dark:text-gray-400 font-normal hidden lg:inline">
                  · {sublabel}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Right: Digital Illuminated Live Flip Blocks */}
        <div 
          suppressHydrationWarning
          className="flex items-center space-x-1.5 sm:space-x-2 font-mono text-center flex-shrink-0"
        >
          {/* Days */}
          <div className="flex flex-col items-center">
            <div className="w-12 sm:w-14 h-10 sm:h-11 rounded-xl bg-gray-100/90 dark:bg-white/10 border border-gray-200 dark:border-white/10 flex items-center justify-center shadow-inner">
              <span suppressHydrationWarning className="text-sm sm:text-base font-extrabold text-secondary dark:text-white tabular-nums">
                {timeLeft.days}
              </span>
            </div>
            <span className="text-[9px] font-mono font-bold uppercase text-gray-400 dark:text-gray-400 mt-1">
              Days
            </span>
          </div>

          <span className="text-sm font-bold text-gray-400 dark:text-white/30 -mt-3.5">:</span>

          {/* Hours */}
          <div className="flex flex-col items-center">
            <div className="w-10 sm:w-12 h-10 sm:h-11 rounded-xl bg-gray-100/90 dark:bg-white/10 border border-gray-200 dark:border-white/10 flex items-center justify-center shadow-inner">
              <span suppressHydrationWarning className="text-sm sm:text-base font-extrabold text-secondary dark:text-white tabular-nums">
                {timeLeft.hours}
              </span>
            </div>
            <span className="text-[9px] font-mono font-bold uppercase text-gray-400 dark:text-gray-400 mt-1">
              Hours
            </span>
          </div>

          <span className="text-sm font-bold text-gray-400 dark:text-white/30 -mt-3.5">:</span>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <div className="w-10 sm:w-12 h-10 sm:h-11 rounded-xl bg-gray-100/90 dark:bg-white/10 border border-gray-200 dark:border-white/10 flex items-center justify-center shadow-inner">
              <span suppressHydrationWarning className="text-sm sm:text-base font-extrabold text-secondary dark:text-white tabular-nums">
                {timeLeft.minutes}
              </span>
            </div>
            <span className="text-[9px] font-mono font-bold uppercase text-gray-400 dark:text-gray-400 mt-1">
              Mins
            </span>
          </div>

          <span className="text-sm font-bold text-gray-400 dark:text-white/30 -mt-3.5">:</span>

          {/* Seconds (Active Emerald Glow & Pulse) */}
          <div className="flex flex-col items-center">
            <div className="w-10 sm:w-12 h-10 sm:h-11 rounded-xl bg-tertiary/15 dark:bg-tertiary/20 border border-tertiary/40 flex items-center justify-center shadow-[0_0_12px_rgba(18,213,118,0.25)]">
              <span suppressHydrationWarning className="text-sm sm:text-base font-black text-emerald-700 dark:text-tertiary tabular-nums animate-pulse">
                {timeLeft.seconds}
              </span>
            </div>
            <span className="text-[9px] font-mono font-bold uppercase text-tertiary mt-1">
              Secs
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

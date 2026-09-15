import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// @ts-ignore
import { liquidGlass } from './liquid-glass';

interface CountdownTimerProps {
  targetDate?: string | Date;
  label?: string;
  theme?: 'dark' | 'light';
  onAuditClick?: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Sub-component for individual sliding animated digits
function AnimatedDigit({
  value,
  theme,
}: {
  value: string | number;
  theme: 'dark' | 'light';
}) {
  return (
    <div className="relative inline-flex items-center justify-center overflow-hidden h-5 sm:h-6 min-w-[2ch]">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={String(value)}
          initial={{ y: -14, opacity: 0, filter: 'blur(2px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: 14, opacity: 0, filter: 'blur(2px)' }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className={`font-heading font-extrabold text-sm sm:text-base leading-none font-mono tabular-nums select-none ${
            theme === 'light'
              ? 'text-emerald-700'
              : 'text-[#10b981] drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]'
          }`}
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export function CountdownTimer({
  targetDate = '2027-05-13T00:00:00',
  label = 'Enforcement · May 13, 2027',
  theme = 'dark',
  onAuditClick,
}: CountdownTimerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    setIsMounted(true);
    // Sync immediately on client mount
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  useEffect(() => {
    if (containerRef.current && typeof liquidGlass === 'function') {
      const glass = liquidGlass(containerRef.current, {
        scale: -80,
        chroma: 4,
        border: 0.08,
        mapBlur: 10,
        blur: 10,
        saturate: 1.5,
        fallbackBlur: 16,
      });

      return () => {
        if (glass && glass.destroy) glass.destroy();
      };
    }
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HRS', value: formatNumber(timeLeft.hours) },
    { label: 'MIN', value: formatNumber(timeLeft.minutes) },
    { label: 'SEC', value: formatNumber(timeLeft.seconds) },
  ];

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onAuditClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onAuditClick();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full flex justify-center items-center my-1"
    >
      {/* PURE COLORLESS LIQUID GLASS CONTAINER */}
      <motion.div
        ref={containerRef}
        role={onAuditClick ? 'button' : undefined}
        tabIndex={onAuditClick ? 0 : undefined}
        onClick={onAuditClick}
        onKeyDown={handleKeyDown}
        whileHover={onAuditClick ? { scale: 1.02, y: -1 } : undefined}
        whileTap={onAuditClick ? { scale: 0.98 } : undefined}
        title={
          onAuditClick
            ? 'DPDP Act 2023 Enforcement Countdown · Click to Start Readiness Audit'
            : 'DPDP Act 2023 Enforcement Countdown'
        }
        className={`relative inline-flex flex-wrap sm:flex-nowrap items-center justify-center gap-2.5 sm:gap-3.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full border transition-all duration-300 overflow-hidden shadow-2xl backdrop-blur-xl group ${
          onAuditClick ? 'cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/80' : ''
        } ${
          theme === 'light'
            ? 'bg-white/30 border-white/60 text-slate-900 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.7),0_8px_30px_rgba(0,0,0,0.08)] hover:border-emerald-500/40 hover:shadow-[0_8px_35px_rgba(16,185,129,0.15)]'
            : 'bg-white/10 border-white/20 text-white shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.35),0_12px_40px_rgba(0,0,0,0.3)] hover:border-[#10b981]/50 hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]'
        }`}
        aria-label="Live DPDP Enforcement Countdown Timer"
      >
        {/* Subtle top glare edge highlight for liquid glass */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />

        {/* PULSING "LIVE" RADAR BADGE */}
        <div
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-extrabold tracking-wider uppercase backdrop-blur-md relative z-10 select-none shadow-xs ${
            theme === 'light'
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-800'
              : 'bg-[#10b981]/15 border-[#10b981]/30 text-[#10b981] shadow-[0_0_12px_rgba(16,185,129,0.2)]'
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_6px_#10b981]" />
          </span>
          <span className="font-mono tracking-widest text-[9px] font-black">LIVE</span>
        </div>

        {/* COMPACT TRANSPARENT SLIDING DIGIT CARDS */}
        <div className="flex items-center gap-1 sm:gap-1.5 relative z-10">
          {timeUnits.map((unit, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-xl border backdrop-blur-md transition-all ${
                theme === 'light'
                  ? 'bg-white/40 border-white/70 shadow-[inset_0_1px_0.5px_rgba(255,255,255,0.9)]'
                  : 'bg-white/10 border-white/15 shadow-[inset_0_1px_0.5px_rgba(255,255,255,0.25)]'
              }`}
            >
              <AnimatedDigit value={unit.value} theme={theme} />
              <span
                className={`text-[9px] font-extrabold tracking-wider uppercase select-none ${
                  theme === 'light' ? 'text-slate-700' : 'text-slate-200/90'
                }`}
              >
                {unit.label}
              </span>
            </div>
          ))}
        </div>

        {/* SEPARATOR DOT */}
        <div
          className={`hidden sm:block w-1 h-1 rounded-full relative z-10 ${
            theme === 'light' ? 'bg-slate-400/70' : 'bg-slate-300/50'
          }`}
        />

        {/* RIGHT SIDE ENFORCEMENT DATE & ACTION */}
        <div className="flex items-center gap-1.5 text-xs font-medium tracking-wide relative z-10">
          <span className={theme === 'light' ? 'text-slate-600 font-normal' : 'text-slate-300 font-normal'}>
            Enforcement
          </span>
          <span
            className={`font-bold font-heading text-xs sm:text-sm tracking-tight ${
              theme === 'light' ? 'text-emerald-800' : 'text-[#10b981]'
            }`}
          >
            · May 13, 2027
          </span>

          {onAuditClick && (
            <span
              className={`hidden md:inline-flex items-center gap-1 ml-1 text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border transition-all duration-200 group-hover:scale-105 ${
                theme === 'light'
                  ? 'bg-emerald-600/10 border-emerald-600/25 text-emerald-800 group-hover:bg-emerald-600 group-hover:text-white'
                  : 'bg-[#10b981]/15 border-[#10b981]/30 text-emerald-300 group-hover:bg-[#10b981] group-hover:text-slate-950'
              }`}
            >
              Audit Ready →
            </span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

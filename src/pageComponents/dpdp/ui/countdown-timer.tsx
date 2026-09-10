import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import { liquidGlass } from './liquid-glass';

interface CountdownTimerProps {
  targetDate?: string | Date;
  label?: string;
  theme?: 'dark' | 'light';
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer({
  targetDate = '2027-05-13T00:00:00',
  label = 'Enforcement · May 13, 2027',
  theme = 'dark',
}: CountdownTimerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

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

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full flex justify-center items-center my-0.5"
    >
      {/* PURE COLORLESS LIQUID GLASS CONTAINER */}
      <div
        ref={containerRef}
        className={`relative inline-flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 sm:gap-4 px-4 py-2 sm:py-2.5 rounded-full border transition-all duration-500 overflow-hidden shadow-2xl backdrop-blur-xl ${
          theme === 'light'
            ? 'bg-white/20 border-white/50 text-slate-900 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.7),0_8px_30px_rgba(0,0,0,0.08)]'
            : 'bg-white/10 border-white/20 text-white shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.35),0_12px_40px_rgba(0,0,0,0.3)]'
        }`}
        aria-label="DPDP Enforcement Countdown Timer"
      >
        {/* Subtle top glare edge highlight for liquid glass */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

        {/* COMPACT TRANSPARENT DIGIT CARDS */}
        <div className="flex items-center gap-1.5 sm:gap-2 relative z-10">
          {timeUnits.map((unit, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-xl border backdrop-blur-md transition-all ${
                theme === 'light'
                  ? 'bg-white/30 border-white/60 shadow-[inset_0_1px_0.5px_rgba(255,255,255,0.8)]'
                  : 'bg-white/10 border-white/15 shadow-[inset_0_1px_0.5px_rgba(255,255,255,0.25)]'
              }`}
            >
              <span
                className={`font-heading font-extrabold text-sm sm:text-base leading-none font-mono ${
                  theme === 'light' ? 'text-emerald-700' : 'text-[#10b981] drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]'
                }`}
              >
                {unit.value}
              </span>
              <span
                className={`text-[9px] font-extrabold tracking-wider uppercase ${
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

        {/* RIGHT SIDE ENFORCEMENT DATE */}
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
        </div>
      </div>
    </motion.div>
  );
}

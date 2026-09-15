import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { TreeConnector } from "./tree-connector";

export interface TimelineEntry {
  title: string;
  icon?: React.ReactNode;
  subtitle?: string;
  description?: string;
  content?: React.ReactNode;
}

export const Timeline = ({ data, theme = 'dark' }: { data: TimelineEntry[]; theme?: 'dark' | 'light' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 85%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 0.85], [0, height + 80]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div
      className={`w-full backdrop-blur-md font-['Plus_Jakarta_Sans',sans-serif] relative pt-16 pb-0 transition-colors duration-300 ${
        theme === 'light' ? 'bg-slate-50/90 text-slate-900' : 'bg-slate-950/90 text-white'
      }`}
      ref={containerRef}
    >
      {/* Ambient background mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#10b981]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Section Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-16 relative z-10">
        <span className={`inline-block px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest rounded-full border mb-4 shadow-xs ${
          theme === 'light'
            ? 'text-emerald-800 bg-emerald-100 border-emerald-300'
            : 'text-[#10b981] bg-[#10b981]/15 border-[#10b981]/30'
        }`}>
          HOW IT WORKS
        </span>
        <h2 className={`font-['Space_Grotesk',sans-serif] text-3xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight ${
          theme === 'light' ? 'text-slate-950' : 'text-white'
        }`}>
          From Signup to Audit-Ready in 4 Steps
        </h2>
        <p className={`font-['Plus_Jakarta_Sans',sans-serif] text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${
          theme === 'light' ? 'text-slate-600' : 'text-slate-300'
        }`}>
          Deploy lightweight consent SDKs, capture explicit preferences, and generate compliance reports for regulators in 1-click.
        </p>
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 md:px-6 pb-0">
        {/* Central Vertical Line (Desktop & Mobile) */}
        <div
          style={{ height: height + "px" }}
          className={`absolute left-6 md:left-1/2 top-0 -translate-x-1/2 w-[2px] z-10 ${
            theme === 'light' ? 'bg-slate-300' : 'bg-slate-800/80'
          }`}
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-[#10b981] shadow-[0_0_15px_#10b981] rounded-full"
          />
        </div>

        {/* Timeline Items */}
        <div className="space-y-16 md:space-y-24">
          {data.map((item, index) => {
            const isEven = index % 2 === 1; // 0: Left, 1: Right, 2: Left, 3: Right

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row items-center w-full"
              >
                {/* Central Dot Node */}
                <div className="absolute left-6 md:left-1/2 top-6 -translate-x-1/2 z-30 flex items-center justify-center">
                  <div className={`w-5 h-5 rounded-full border-2 border-[#10b981] shadow-[0_0_12px_#10b981] flex items-center justify-center ${
                    theme === 'light' ? 'bg-white' : 'bg-slate-950'
                  }`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                  </div>
                </div>

                {/* Mobile View: All items right aligned to line */}
                <div className="md:hidden w-full pl-14">
                  <TimelineCard item={item} isRight={true} theme={theme} />
                </div>

                {/* Desktop View: Staggered Container */}
                <div className="hidden md:flex w-full items-center">
                  {/* Left Column */}
                  <div className="w-1/2 pr-12 text-right">
                    {!isEven && <TimelineCard item={item} isRight={false} theme={theme} />}
                  </div>

                  {/* Right Column */}
                  <div className="w-1/2 pl-12 text-left">
                    {isEven && <TimelineCard item={item} isRight={true} theme={theme} />}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Animated SVG Tree Connector extending into the 4 cards */}
      <TreeConnector scrollYProgress={scrollYProgress} />
    </div>
  );
};

function TimelineCard({ item, isRight, theme = 'dark' }: { item: TimelineEntry; isRight: boolean; theme?: 'dark' | 'light' }) {
  return (
    <div className="relative group">
      {/* Horizontal connector line linking central dot to card */}
      <div
        className={`hidden md:block absolute top-7 h-[1.5px] bg-[#10b981]/60 z-0 ${
          isRight
            ? "-left-12 w-12 origin-left"
            : "-right-12 w-12 origin-right"
        }`}
      />

      <div className={`flex items-start gap-4 ${!isRight ? "md:flex-row-reverse" : "flex-row"}`}>
        {/* Icon box */}
        {item.icon && (
          <div className={`p-3.5 rounded-2xl shrink-0 border transition-colors ${
            theme === 'light'
              ? 'bg-white border-slate-200 shadow-md group-hover:border-emerald-500'
              : 'bg-slate-900/90 border-slate-800 shadow-lg shadow-black/40 group-hover:border-[#10b981]/50'
          }`}>
            {item.icon}
          </div>
        )}

        <div className="flex-1">
          {/* HOW IT WORKS pill badge */}
          <span className={`inline-block px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-widest rounded-full border mb-1.5 ${
            theme === 'light'
              ? 'text-emerald-800 bg-emerald-100 border-emerald-300'
              : 'text-[#10b981] bg-[#10b981]/15 border-[#10b981]/30'
          }`}>
            HOW IT WORKS
          </span>

          {/* Title */}
          <h3 className={`font-['Space_Grotesk',sans-serif] text-2xl md:text-3xl font-extrabold tracking-tight mb-1.5 ${
            theme === 'light' ? 'text-slate-950' : 'text-white'
          }`}>
            {item.title}
          </h3>

          {/* Subtitle */}
          {item.subtitle && (
            <h4 className={`font-['Space_Grotesk',sans-serif] text-base md:text-lg font-semibold mb-2 leading-snug ${
              theme === 'light' ? 'text-slate-700' : 'text-slate-200'
            }`}>
              {item.subtitle}
            </h4>
          )}

          {/* Description */}
          {item.description && (
            <p className={`font-['Plus_Jakarta_Sans',sans-serif] text-sm md:text-base leading-relaxed ${
              theme === 'light' ? 'text-slate-600' : 'text-slate-400'
            }`}>
              {item.description}
            </p>
          )}

          {item.content}
        </div>
      </div>
    </div>
  );
}

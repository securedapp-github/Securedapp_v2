import React, { useState, useCallback, useRef, type CSSProperties } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  FileSpreadsheet,
  UsersRound,
  Clock,
  ShieldCheck,
  Server,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";

export interface FeatureSlide {
  id: number;
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
  badge: string;
  meta: string;
  previewWidget: React.ReactNode;
  bgGradient: string;
}

export const featuresData: FeatureSlide[] = [
  {
    id: 0,
    step: "01",
    title: "1-Click Consent Banners",
    description: "Multi-language (15+ Indian languages) cookie and consent banners built for DPDP §6 statutory compliance with explicit purpose notices.",
    icon: Globe,
    badge: "15+ Languages",
    meta: "DPDP §6 Statutory Compliant",
    previewWidget: (
      <div className="flex items-center gap-2 py-2 px-3 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-300">
        <span className="text-[#10b981] font-bold">LANG:</span>
        <span className="bg-[#10b981]/15 text-[#10b981] px-2 py-0.5 rounded font-bold">English</span>
        <span className="opacity-70">हिंदी</span>
        <span className="opacity-70">தமிழ்</span>
        <span className="opacity-70">తెలుగు</span>
      </div>
    ),
    bgGradient: "from-blue-600/20 via-slate-900 to-slate-950",
  },
  {
    id: 1,
    step: "02",
    title: "Granular Consent Logs",
    description: "Immutable, cryptographic records of who, when, and what notice was consented to with time-stamped hashes for regulatory audits.",
    icon: FileSpreadsheet,
    badge: "Immutable Logs",
    meta: "Cryptographic SHA-256 Hashes",
    previewWidget: (
      <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-300">
        <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> VERIFIED
        </span>
        <span className="text-slate-400">HASH: 0x8F3A...E921</span>
      </div>
    ),
    bgGradient: "from-[#10b981]/15 via-slate-900 to-slate-950",
  },
  {
    id: 2,
    step: "03",
    title: "Preference Center",
    description: "Out-of-the-box user portal for managing, updating, and revoking permissions anytime across channels with zero friction.",
    icon: UsersRound,
    badge: "Self-Service",
    meta: "Real-time Permission Sync",
    previewWidget: (
      <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-300">
        <span className="text-[#10b981] font-bold">USER PERMISSIONS:</span>
        <span className="text-emerald-400 font-bold flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5" /> 3/3 Active
        </span>
      </div>
    ),
    bgGradient: "from-purple-600/20 via-slate-900 to-slate-950",
  },
  {
    id: 3,
    step: "04",
    title: "Data Subject Rights (DSAR)",
    description: "Automated workflows for data access, correction, and erasure requests with guaranteed sub-24h SLAs to avoid operational backlogs.",
    icon: Clock,
    badge: "Automated Workflow",
    meta: "Guaranteed Sub-24h SLA",
    previewWidget: (
      <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-300">
        <span className="text-amber-400 font-bold">SLA TRACKER:</span>
        <span className="bg-amber-950/60 text-amber-300 px-2 py-0.5 rounded border border-amber-800/60 font-bold">
          14h 22m Remaining
        </span>
      </div>
    ),
    bgGradient: "from-amber-600/20 via-slate-900 to-slate-950",
  },
  {
    id: 4,
    step: "05",
    title: "DPBI-Ready Reporting",
    description: "Generate audit compliance reports formatted exactly as the Data Protection Board of India requires with 1-click export.",
    icon: ShieldCheck,
    badge: "1-Click Export",
    meta: "Data Protection Board Formatted",
    previewWidget: (
      <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-300">
        <span className="text-[#10b981] font-bold">BOARD COMPLIANT:</span>
        <span className="text-slate-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-700 font-bold">
          PDF §14 Format
        </span>
      </div>
    ),
    bgGradient: "from-emerald-600/20 via-slate-900 to-slate-950",
  },
  {
    id: 5,
    step: "06",
    title: "Local Data Hosting",
    description: "100% of consent data is processed and stored in Mumbai & Hyderabad tier-4 data centers with zero cross-border data leaks.",
    icon: Server,
    badge: "Mumbai Tier-4",
    meta: "100% Zero Cross-Border Transfer",
    previewWidget: (
      <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-300">
        <span className="text-cyan-400 font-bold flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" /> MUMBAI DC
        </span>
        <span className="text-slate-400">LATENCY: 2ms</span>
      </div>
    ),
    bgGradient: "from-cyan-600/20 via-slate-900 to-slate-950",
  },
];

const PERSPECTIVE = 1600;
const SCALE_STEP = 0.16;
const MAX_VISIBLE = 2;
const DEPTH = 240;

const cardNoticeText: Record<string, { banner: string; acceptBtn: string }> = {
  en: {
    banner: "We use cookies & personal data for DPDP compliance. Explicit consent is required.",
    acceptBtn: "Accept All",
  },
  hi: {
    banner: "हम डीपीडीपी अनुपालन के लिए कुकीज़ और डेटा का उपयोग करते हैं। सहमति आवश्यक है।",
    acceptBtn: "स्वीकार करें",
  },
  ta: {
    banner: "DPDP இணக்கத்திற்கு கூக்கிகள் மற்றும் தரவைப் பயன்படுத்துகிறோம். ஒப்புதல் தேவை.",
    acceptBtn: "ஏற்றுக்கொள்",
  },
  te: {
    banner: "మేము DPDP సమ్మతి కోసం కుకీలు మరియు డేటాను ఉపయోగిస్తాము. సమ్మతి అవసరం.",
    acceptBtn: "అంగీకరించు",
  },
};

export function CoverflowFeatures({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  const [active, setActive] = useState(0);
  const [cardLang, setCardLang] = useState<'en' | 'hi' | 'ta' | 'te'>('en');
  const n = featuresData.length;
  const lockRef = useRef(false);

  const lock = useCallback(() => {
    lockRef.current = true;
    window.setTimeout(() => {
      lockRef.current = false;
    }, 500);
  }, []);

  const step = useCallback(
    (dir: number) => {
      if (lockRef.current) return;
      lock();
      setActive((a) => (((a + dir) % n) + n) % n);
    },
    [n, lock]
  );

  const handleCardClick = useCallback(
    (i: number) => {
      if (lockRef.current) return;
      lock();
      setActive((a) => (i === a ? (a + 1) % n : i));
    },
    [n, lock]
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        step(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        step(-1);
      }
    },
    [step]
  );

  const transitionCss = "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)";

  return (
    <div className="w-full relative flex flex-col items-center justify-center py-6">
      {/* 3D Coverflow Container */}
      <div
        tabIndex={0}
        role="group"
        aria-label="Features Coverflow Gallery"
        onKeyDown={onKeyDown}
        className="relative w-full h-[480px] md:h-[500px] flex items-center justify-center overflow-hidden outline-none cursor-grab active:cursor-grabbing"
        style={{ perspective: `${PERSPECTIVE}px` }}
      >
        <div
          className="relative w-[340px] sm:w-[460px] md:w-[540px] h-[400px] md:h-[430px]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {featuresData.map((slide, i) => {
            let rel = i - active;
            if (rel > n / 2) rel -= n;
            if (rel < -n / 2) rel += n;

            const ax = Math.abs(rel);
            const visible = ax <= MAX_VISIBLE;
            const isActive = rel === 0;
            const sc = Math.max(0.4, 1 - ax * SCALE_STEP);

            const tx = rel * 230; // 3D Gap spacing
            const tz = -ax * DEPTH;
            const ry = -rel * 12; // 3D tilt
            const rz = rel * 4;

            const IconComp = slide.icon;

            const cardStyle: CSSProperties = {
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "100%",
              height: "100%",
              borderRadius: "28px",
              overflow: "hidden",
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
              transform: `translate(-50%, -50%) translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) rotateZ(${rz}deg) scale(${sc})`,
              transition: transitionCss,
              opacity: visible ? 1 : 0,
              cursor: isActive ? "default" : "pointer",
              pointerEvents: visible ? "auto" : "none",
              zIndex: isActive ? 30 : 20 - ax,
            };

            return (
              <div
                key={i}
                style={cardStyle}
                onClick={() => handleCardClick(i)}
                className={`p-7 md:p-10 rounded-3xl backdrop-blur-3xl border ${
                  theme === 'light'
                    ? isActive
                      ? "bg-white/95 border-emerald-500 shadow-[0_10px_40px_rgba(16,185,129,0.25)] text-slate-900"
                      : "bg-white/90 border-slate-200/90 shadow-xl text-slate-900"
                    : isActive
                      ? "bg-slate-900/90 border-[#10b981] shadow-[0_0_60px_rgba(16,185,129,0.35)] text-white"
                      : "bg-slate-900/90 border-slate-800/80 shadow-2xl text-white"
                } flex flex-col justify-between group relative select-none transition-colors duration-300`}
              >
                {/* Glowing Laser Top Rim Light Flare */}
                <div
                  className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent ${
                    isActive ? "via-[#10b981]" : theme === 'light' ? "via-slate-300" : "via-slate-700"
                  } to-transparent pointer-events-none`}
                />

                {/* Subtle Background Radial Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-b ${slide.bgGradient} ${
                  theme === 'light' ? 'opacity-15' : 'opacity-40'
                } pointer-events-none`} />

                {/* Header Row */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="p-3.5 rounded-2xl bg-[#10b981]/15 border border-[#10b981]/30 text-[#10b981] shadow-inner">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className={`font-mono text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-xl border ${
                        theme === 'light'
                          ? 'bg-slate-100 border-slate-300 text-slate-800'
                          : 'bg-slate-950/80 border-slate-800 text-[#10b981]'
                      }`}>
                        FEATURE {slide.step} / 06
                      </span>
                    </div>
                    <span className={`text-xs font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full border ${
                      theme === 'light'
                        ? 'text-emerald-900 bg-emerald-100 border-emerald-300'
                        : 'text-[#10b981] bg-[#10b981]/15 border-[#10b981]/30'
                    }`}>
                      {slide.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h4 className={`font-heading text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 tracking-tight group-hover:text-emerald-600 dark:group-hover:text-[#10b981] transition-colors duration-300 ${
                    theme === 'light' ? 'text-slate-950' : 'text-white'
                  }`}>
                    {slide.title}
                  </h4>
                  <p className={`text-xs sm:text-sm leading-relaxed font-normal mb-5 ${
                    theme === 'light' ? 'text-slate-600' : 'text-slate-300'
                  }`}>
                    {slide.description}
                  </p>

                  {/* Live Visual Sub-Widget */}
                  <div className="mt-2">
                    {slide.id === 0 ? (
                      <div className="space-y-2.5" onClick={(e) => e.stopPropagation()}>
                        {/* Interactive Language Selector Bar (exact match to user screenshot) */}
                        <div className={`flex items-center gap-2 py-2 px-3 rounded-xl border text-[11px] font-mono shadow-inner overflow-x-auto ${
                          theme === 'light'
                            ? 'bg-slate-100/90 border-slate-300 text-slate-800'
                            : 'bg-slate-950/90 border-slate-800 text-slate-300'
                        }`}>
                          <span className={`font-bold shrink-0 ${theme === 'light' ? 'text-emerald-800' : 'text-[#10b981]'}`}>LANG:</span>
                          <div className="flex items-center gap-1.5 shrink-0">
                            {[
                              { code: 'en', label: 'English' },
                              { code: 'hi', label: 'हिंदी' },
                              { code: 'ta', label: 'தமிழ்' },
                              { code: 'te', label: 'తెలుగు' },
                            ].map((lang) => (
                              <motion.button
                                key={lang.code}
                                type="button"
                                whileHover={{ scale: 1.06 }}
                                whileTap={{ scale: 0.94 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCardLang(lang.code as any);
                                }}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer min-h-[36px] flex items-center justify-center focus-visible:ring-2 ${
                                  theme === 'light'
                                    ? 'focus-visible:ring-emerald-600'
                                    : 'focus-visible:ring-[#10b981]'
                                } ${
                                  cardLang === lang.code
                                    ? theme === 'light'
                                      ? 'bg-emerald-100 text-emerald-900 border border-emerald-400 font-extrabold shadow-xs'
                                      : 'bg-[#10b981]/25 text-[#10b981] border border-[#10b981]/40 shadow-[0_0_8px_rgba(16,185,129,0.3)]'
                                    : theme === 'light'
                                      ? 'text-slate-700 hover:text-slate-950 hover:bg-slate-200/70'
                                      : 'text-slate-300 hover:text-white opacity-80'
                                }`}
                              >
                                {lang.label}
                              </motion.button>
                            ))}
                          </div>
                        </div>

                        {/* Live Localized Consent Notice Banner Preview */}
                        <div className={`p-2.5 rounded-xl border flex items-center justify-between gap-3 text-xs ${
                          theme === 'light'
                            ? 'bg-slate-50 border-slate-200 text-slate-800'
                            : 'bg-slate-950/70 border-slate-800/80 text-slate-300'
                        }`}>
                          <div className="flex items-center gap-2 font-medium line-clamp-1 overflow-hidden">
                            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse shrink-0" />
                            <span className="truncate">{cardNoticeText[cardLang].banner}</span>
                          </div>
                          <span className="px-2.5 py-1 text-[10px] font-extrabold bg-[#10b981] text-slate-950 rounded-md shrink-0">
                            {cardNoticeText[cardLang].acceptBtn}
                          </span>
                        </div>
                      </div>
                    ) : (
                      slide.previewWidget
                    )}
                  </div>
                </div>

                {/* Card Footer */}
                <div className={`relative z-10 pt-5 border-t flex items-center justify-between text-xs font-mono ${
                  theme === 'light' ? 'border-slate-200 text-slate-500' : 'border-slate-800/80 text-slate-400'
                }`}>
                  <span className={`font-semibold ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>{slide.meta}</span>
                  <span className="flex items-center gap-1.5 text-emerald-600 dark:text-[#10b981] font-bold text-xs uppercase tracking-wider">
                    {isActive ? "Spotlight" : "Click to view"} <ArrowRight className="w-4 h-4" />
                  </span>
                </div>

                {/* Inactive Card Dim Overlay */}
                {!isActive && (
                  <div className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                    theme === 'light' ? 'bg-slate-100/70 backdrop-blur-[1px]' : 'bg-slate-950/65 backdrop-blur-[1.5px]'
                  }`} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Cyberpunk Style Navigation Controls & Indicators */}
      <div className="flex items-center justify-center gap-6 mt-4 z-20">
        <motion.button
          onClick={() => step(-1)}
          whileHover={{ scale: 1.1, x: -2 }}
          whileTap={{ scale: 0.9 }}
          className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-[#10b981] hover:border-[#10b981]/60 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all shadow-xl cursor-pointer"
          aria-label="Previous Feature"
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>

        <div className="flex items-center gap-2 bg-slate-900/90 px-3.5 py-2 rounded-2xl border border-slate-800/80 shadow-lg">
          {featuresData.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => handleCardClick(i)}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className={`w-8 h-8 rounded-xl font-mono text-xs font-extrabold transition-all duration-300 flex items-center justify-center cursor-pointer ${
                i === active
                  ? "bg-[#10b981] text-white shadow-[0_0_20px_rgba(16,185,129,0.5)] scale-110"
                  : "bg-slate-950/80 text-slate-400 border border-slate-800/90 hover:border-slate-700 hover:text-white"
              }`}
              aria-label={`Go to feature ${i + 1}`}
            >
              {i + 1}
            </motion.button>
          ))}
        </div>

        <motion.button
          onClick={() => step(1)}
          whileHover={{ scale: 1.1, x: 2 }}
          whileTap={{ scale: 0.9 }}
          className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-[#10b981] hover:border-[#10b981]/60 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all shadow-xl cursor-pointer"
          aria-label="Next Feature"
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
}

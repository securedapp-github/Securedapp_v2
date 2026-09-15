import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TimelineDemo } from './demo';
import { NetworkBackground } from './ui/network-background';
import { SmoothScrollCTA } from './ui/smooth-scroll';
import NeonBorder from './ui/neon-border';
import { CoverflowFeatures } from './ui/coverflow-features';
import { LeadCaptureForm } from './ui/lead-capture-form';
import { FloatingAuditButton } from './ui/floating-audit-button';
import { CountdownTimer } from './ui/countdown-timer';
import { EmbeddedSingleViewDashboard } from './ui/EmbeddedSingleViewDashboard';
import {
  ShieldCheck,
  CheckCircle2,
  IndianRupee,
  Clock,
  LayoutGrid,
  X,
  ChevronDown,
  Activity,
  Zap,
  AlertTriangle,
  Sun,
  Moon,
} from 'lucide-react';

const faqs = [
  {
    question: "We already use a cookie banner. Are we compliant?",
    answer: "Unlikely. DPDP requires explicit consent for each purpose (no pre-checked boxes), language localization for Indian users, and verifiable audit logs. A basic cookie banner doesn't cover these requirements."
  },
  {
    question: "How long does it take to deploy?",
    answer: "Most teams deploy our SDK and get fully functional consent banners live in under 2 hours. Full backend integration for DSARs typically takes 2–3 days."
  },
  {
    question: "Do you support Indian languages?",
    answer: "Yes, we support 15+ official Indian languages out of the box, fulfilling the DPDP requirement to offer notices in the user's preferred language."
  },
  {
    question: "Where is the data stored?",
    answer: "All consent records are cryptographically hashed and stored in ISO 27001 / SOC 2 certified data centers physically located in Mumbai, India."
  },
  {
    question: "Can we self-host?",
    answer: "Yes. For enterprise clients in highly regulated sectors (BFSI, Healthcare), we offer private cloud and on-premise deployment options."
  },
  {
    question: "What happens if a user requests their data to be deleted?",
    answer: "Our system automatically verifies the request and triggers a webhook to your backend systems, giving you a centralized dashboard to track compliance within the required statutory timeframe."
  }
];

function FAQSection({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={`w-full py-24 px-6 md:px-12 border-b transition-colors duration-300 ${theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
      }`}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full border mb-3 shadow-xs ${theme === 'light' ? 'text-blue-700 bg-blue-50 border-blue-200' : 'text-blue-400 bg-slate-900/90 border-blue-500/30'
            }`}>
            FAQ
          </span>
          <h2 className={`font-heading text-3xl md:text-5xl font-extrabold leading-tight tracking-tight ${theme === 'light' ? 'text-slate-950' : 'text-white'
            }`}>
            Common Questions About DPDP Compliance
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${theme === 'light'
                  ? isOpen
                    ? 'bg-white border-blue-500 shadow-md'
                    : 'bg-white/90 border-slate-200/90 hover:bg-white hover:border-slate-300'
                  : isOpen
                    ? 'bg-slate-900/80 border-blue-500/30 shadow-lg'
                    : 'bg-slate-900/40 hover:bg-slate-900/60 hover:border-slate-700'
                  }`}
              >
                <motion.button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
                >
                  <span className={`font-heading font-bold text-lg pr-8 ${theme === 'light' ? 'text-slate-950' : 'text-white'
                    }`}>{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen
                    ? theme === 'light' ? 'bg-blue-100 text-blue-700 rotate-180' : 'bg-blue-600/20 text-blue-400 rotate-180'
                    : theme === 'light' ? 'bg-slate-100 text-slate-600' : 'bg-slate-800 text-slate-400'
                    }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </motion.button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className={`px-6 pb-6 leading-relaxed border-t mt-2 pt-4 ${theme === 'light' ? 'text-slate-600 border-slate-200' : 'text-slate-400 border-slate-800/50'
                        }`}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SecureCMSMockupApp() {
  const [modalOpen, setModalOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    if (nextTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  // Close modal on Escape keypress for Accessibility (WCAG 2.2)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalOpen) {
        setModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen]);



  return (
    <div className={`min-h-screen w-full font-sans p-0 m-0 overflow-x-hidden antialiased transition-colors duration-300 ${theme === 'light' ? 'bg-slate-50 text-slate-900' : 'bg-slate-950 text-slate-900'
      }`}>
      {/* HERO SECTION WITH 3D NETWORK BACKGROUND */}
      <section className="relative w-full pt-4 pb-14 md:pt-6 md:pb-20 px-4 md:px-12 overflow-hidden">
        {/* 3D WebGL Network Background (Hero Only) */}
        <NetworkBackground theme={theme} />

        {/* Gradient Overlay for Hero Text Legibility */}
        <div className={`absolute inset-0 z-0 pointer-events-none transition-all duration-500 ${theme === 'light'
          ? 'bg-gradient-to-br from-slate-100/90 via-slate-50/95 to-blue-50/90'
          : 'bg-gradient-to-br from-indigo-950/80 via-slate-950/85 to-blue-950/80'
          }`}></div>

        {/* Smooth Bottom Dissolve Mask into Next Section */}
        <div className={`absolute inset-x-0 bottom-0 h-28 z-10 pointer-events-none bg-gradient-to-b ${theme === 'light'
          ? 'from-transparent via-slate-100/70 to-slate-100'
          : 'from-transparent via-slate-950/70 to-slate-950'
          }`} />

        <div className="relative max-w-7xl mx-auto z-20 pointer-events-auto flex flex-col items-center">
          {/* IN-HERO HEADER */}
          <div className="w-full flex items-center justify-between mb-3 md:mb-4 px-2 sm:px-4">
            <a href="#" className="flex items-center gap-3 font-extrabold text-2xl group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 rounded-xl" aria-label="SecureCms Home">
              <img
                src={theme === 'dark' ? "/assets/dpdp/logo-white.png?v=3" : "/assets/dpdp/logo.png?v=3"}
                alt="SecureCms Logo"
                className="h-8 md:h-9 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform"
              />
            </a>

            <div className="flex items-center gap-3">
              {/* DAY / NIGHT MODE TOGGLE BUTTON */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Switch to ${theme === 'dark' ? 'Day (Light)' : 'Night (Dark)'} Mode`}
                className={`p-2.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-center backdrop-blur-md ${theme === 'dark'
                  ? 'bg-slate-900/80 border-slate-700 text-[#10b981] shadow-[0_0_15px_rgba(16,185,129,0.25)] hover:bg-slate-800'
                  : 'bg-white/90 border-slate-300 text-amber-500 shadow-md hover:bg-slate-100'
                  }`}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === 'dark' ? (
                      <Moon className="w-5 h-5 fill-current text-[#10b981]" />
                    ) : (
                      <Sun className="w-5 h-5 fill-current text-amber-500" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.button>

              <motion.a
                href="https://wa.me/9606015868"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-5 py-2.5 bg-[#10b981] hover:bg-[#059669] text-white font-extrabold text-xs uppercase tracking-wider rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.45)] hover:shadow-[0_0_30px_rgba(16,185,129,0.7)] transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#10b981] flex items-center gap-2.5 font-heading"
                aria-label="WhatsApp Us"
              >
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.301-.15-1.785-.881-2.062-.982-.276-.101-.477-.15-.678.15-.201.301-.779.982-.955 1.183-.175.201-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.897-.8-1.502-1.788-1.678-2.089-.175-.301-.019-.464.131-.613.136-.134.301-.351.452-.527.15-.175.201-.301.301-.502.101-.201.05-.376-.025-.527-.075-.15-.678-1.633-.929-2.235-.244-.585-.494-.506-.678-.515-.175-.008-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.513 0 1.483 1.079 2.914 1.23 3.115.15.201 2.123 3.242 5.143 4.545.718.31 1.279.495 1.716.634.721.229 1.378.196 1.9.119.582-.087 1.785-.729 2.036-1.432.251-.703.251-1.305.175-1.432-.075-.127-.276-.201-.577-.352z" />
                </svg>
                WhatsApp Us
              </motion.a>
            </div>
          </div>

          {/* CENTERED LIQUID GLASS COUNTDOWN TIMER */}
          <div className="w-full flex justify-center mb-3 sm:mb-4">
            <CountdownTimer theme={theme} onAuditClick={() => setModalOpen(true)} />
          </div>

          {/* 2-COLUMN SPLIT HERO CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center text-left w-full mb-8">
            {/* LEFT COLUMN: HEADLINE, SUBHEADLINE & TRUST BULLETS */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              {/* EYEBROW */}
              <span className={`inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-widest rounded-full border mb-3 shadow-xs ${theme === 'light'
                ? 'text-emerald-800 bg-emerald-100/90 border-emerald-300'
                : 'text-[#10b981] bg-[#10b981]/15 border-[#10b981]/30'
                }`}>
                DPDP Act 2023 · India
              </span>

              {/* HEADLINE */}
              <h1 className={`font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl md:leading-[1.12] font-extrabold tracking-tight mb-3.5 ${theme === 'light' ? 'text-slate-900' : 'text-white'
                }`}>
                DPDP Compliant in{' '}
                <span className="inline-flex items-center justify-center relative px-3.5 py-0.5 bg-[#10b981] text-white font-extrabold rounded-2xl shadow-[0_0_25px_rgba(16,185,129,0.5)] my-1">
                  24 Hours
                </span>
                <br />
                Not 24 Weeks
              </h1>

              {/* SUBHEADLINE */}
              <p className={`text-base md:text-lg leading-relaxed mb-5 max-w-2xl ${theme === 'light' ? 'text-slate-600' : 'text-slate-300'
                }`}>
                Avoid the ₹250 crore DPDP penalty. SecureCms gives you consent capture, tamper-proof audit trails, and automated user-rights tools built for India, live fast.
              </p>

              {/* TRUST BULLETS GRID */}
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs sm:text-sm font-medium w-full ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'
                }`}>
                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-100/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                  <CheckCircle2 className={`w-4 h-4 shrink-0 ${theme === 'light' ? 'text-emerald-600' : 'text-emerald-400'}`} /> Audit-ready from day one
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-100/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                  <CheckCircle2 className={`w-4 h-4 shrink-0 ${theme === 'light' ? 'text-emerald-600' : 'text-emerald-400'}`} /> 4.2M+ consent records processed
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-100/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                  <CheckCircle2 className={`w-4 h-4 shrink-0 ${theme === 'light' ? 'text-emerald-600' : 'text-emerald-400'}`} /> Mumbai data residency
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-100/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                  <CheckCircle2 className={`w-4 h-4 shrink-0 ${theme === 'light' ? 'text-emerald-600' : 'text-emerald-400'}`} /> Zero-code SDK integration
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: EMBEDDED LEAD CAPTURE FORM */}
            <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
              <LeadCaptureForm
                theme={theme}
                title="Get Your Free DPDP Audit"
                subtitle="Instant 2-minute compliance evaluation delivered to your inbox."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT LOGO ROW ABOVE HOW IT WORKS */}
      <section className={`w-full py-10 px-6 md:px-12 transition-colors duration-300 relative z-10 overflow-hidden ${theme === 'light' ? 'bg-slate-100/90' : 'bg-slate-950/80 backdrop-blur-md'
        }`}>
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-500 mb-8">TRUSTED BY</p>
          <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              className="flex gap-12 md:gap-24 items-center shrink-0"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 25,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {Array(4).fill([
                { src: "/assets/dpdp/Dsci-removebg-preview.png", alt: "DSCI" },
                { src: "/assets/dpdp/2-removebg-preview.png", alt: "C3iHub" },
                { src: "/assets/dpdp/3-removebg-preview.png", alt: "IFSCA" },
                { src: "/assets/dpdp/4-removebg-preview (1).png", alt: "CySecK" },
              ]).flat().map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 md:h-24 w-auto object-contain shrink-0 transition-transform duration-300 hover:scale-105"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. FLUSH FULL-WIDTH TIMELINE DEMO SECTION */}
      <section className={`w-full pt-8 pb-0 px-6 md:px-12 relative transition-colors duration-300 ${theme === 'light' ? 'bg-slate-50' : 'bg-slate-950'
        }`}>
        <TimelineDemo theme={theme} />
      </section>

      {/* 3. FLUSH FULL-WIDTH STATS STRIP WITH JETBRAINS MONO NUMBERS */}
      <section className={`w-full pt-2 pb-14 px-6 md:px-12 relative overflow-hidden transition-colors duration-300 ${theme === 'light'
        ? 'bg-slate-100/90'
        : 'bg-slate-950/80 backdrop-blur-md'
        }`}>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {/* Card 1 */}
            <div className={`group relative p-6 rounded-2xl border transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between ${theme === 'light'
              ? 'bg-white border-slate-200/90 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] text-slate-900 hover:border-emerald-500 hover:scale-[1.015]'
              : 'bg-slate-900/60 backdrop-blur-xl border-slate-800/80 text-white hover:border-[#10b981]/80 hover:bg-slate-900/90'
              }`}>
              <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#10b981] to-transparent pointer-events-none" />
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-xl border ${theme === 'light' ? 'bg-emerald-100/80 border-emerald-300 text-emerald-800' : 'bg-[#10b981]/15 border-[#10b981]/30 text-[#10b981]'
                  }`}>
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full border ${theme === 'light' ? 'text-emerald-900 bg-emerald-100 border-emerald-300' : 'text-[#10b981] bg-[#10b981]/15 border-[#10b981]/30'
                  }`}>
                  Processed
                </span>
              </div>
              <div>
                <div className={`font-mono-num text-3xl md:text-4xl font-extrabold ${theme === 'light' ? 'text-emerald-700 font-bold' : 'text-[#10b981] drop-shadow-[0_0_12px_rgba(16,185,129,0.4)]'
                  }`}>
                  4.2M+
                </div>
                <div className={`text-xs font-semibold mt-1.5 tracking-wide ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                  Audit log records processed
                </div>
              </div>
              <div className={`mt-4 pt-3 border-t flex items-center gap-2 ${theme === 'light' ? 'border-slate-200' : 'border-slate-800/60'
                }`}>
                <div className={`flex-1 h-1.5 rounded-full overflow-hidden ${theme === 'light' ? 'bg-slate-200' : 'bg-slate-800'
                  }`}>
                  <div className="h-full bg-gradient-to-r from-[#10b981]/60 to-[#10b981] rounded-full w-[94%] animate-pulse" />
                </div>
                <span className={`text-[10px] font-bold font-mono ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'
                  }`}>Live</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className={`group relative p-6 rounded-2xl border transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between ${theme === 'light'
              ? 'bg-white border-slate-200/90 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] text-slate-900 hover:border-emerald-500 hover:scale-[1.015]'
              : 'bg-slate-900/60 backdrop-blur-xl border-slate-800/80 text-white hover:border-[#10b981]/80 hover:bg-slate-900/90'
              }`}>
              <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#10b981] to-transparent pointer-events-none" />
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-xl border ${theme === 'light' ? 'bg-emerald-100/80 border-emerald-300 text-emerald-800' : 'bg-[#10b981]/15 border-[#10b981]/30 text-[#10b981]'
                  }`}>
                  <Activity className="w-4 h-4" />
                </div>
                <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full border ${theme === 'light' ? 'text-emerald-900 bg-emerald-100 border-emerald-300' : 'text-[#10b981] bg-[#10b981]/15 border-[#10b981]/30'
                  }`}>
                  Guaranteed
                </span>
              </div>
              <div>
                <div className={`font-mono-num text-3xl md:text-4xl font-extrabold ${theme === 'light' ? 'text-emerald-700 font-bold' : 'text-[#10b981] drop-shadow-[0_0_12px_rgba(16,185,129,0.4)]'
                  }`}>
                  99.9%
                </div>
                <div className={`text-xs font-semibold mt-1.5 tracking-wide ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                  Platform uptime
                </div>
              </div>
              <div className={`mt-4 pt-3 border-t flex items-center gap-2 ${theme === 'light' ? 'border-slate-200' : 'border-slate-800/60'
                }`}>
                <div className={`flex-1 h-1.5 rounded-full overflow-hidden ${theme === 'light' ? 'bg-slate-200' : 'bg-slate-800'
                  }`}>
                  <div className="h-full bg-gradient-to-r from-[#10b981]/60 to-[#10b981] rounded-full w-[99.9%]" />
                </div>
                <span className={`text-[10px] font-bold font-mono ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'
                  }`}>99.9%</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className={`group relative p-6 rounded-2xl border transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between ${theme === 'light'
              ? 'bg-white border-slate-200/90 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] text-slate-900 hover:border-emerald-500 hover:scale-[1.015]'
              : 'bg-slate-900/60 backdrop-blur-xl border-slate-800/80 text-white hover:border-[#10b981]/80 hover:bg-slate-900/90'
              }`}>
              <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#10b981] to-transparent pointer-events-none" />
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-xl border ${theme === 'light' ? 'bg-emerald-100/80 border-emerald-300 text-emerald-800' : 'bg-[#10b981]/15 border-[#10b981]/30 text-[#10b981]'
                  }`}>
                  <Zap className="w-4 h-4" />
                </div>
                <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full border ${theme === 'light' ? 'text-emerald-900 bg-emerald-100 border-emerald-300' : 'text-[#10b981] bg-[#10b981]/15 border-[#10b981]/30'
                  }`}>
                  Speed SLA
                </span>
              </div>
              <div>
                <div className={`font-mono-num text-3xl md:text-4xl font-extrabold ${theme === 'light' ? 'text-emerald-700 font-bold' : 'text-[#10b981] drop-shadow-[0_0_12px_rgba(16,185,129,0.4)]'
                  }`}>
                  &lt;24 hrs
                </div>
                <div className={`text-xs font-semibold mt-1.5 tracking-wide ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                  Typical deployment time
                </div>
              </div>
              <div className={`mt-4 pt-3 border-t flex items-center gap-2 ${theme === 'light' ? 'border-slate-200' : 'border-slate-800/60'
                }`}>
                <div className={`flex-1 h-1.5 rounded-full overflow-hidden ${theme === 'light' ? 'bg-slate-200' : 'bg-slate-800'
                  }`}>
                  <div className="h-full bg-gradient-to-r from-[#10b981]/60 to-[#10b981] rounded-full w-[88%]" />
                </div>
                <span className={`text-[10px] font-bold font-mono ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'
                  }`}>Fast</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className={`group relative p-6 rounded-2xl border transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between ${theme === 'light'
              ? 'bg-white border-slate-200/90 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] text-slate-900 hover:border-emerald-500 hover:scale-[1.015]'
              : 'bg-slate-900/60 backdrop-blur-xl border-slate-800/80 text-white hover:border-[#10b981]/80 hover:bg-slate-900/90'
              }`}>
              <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#10b981] to-transparent pointer-events-none" />
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-xl border ${theme === 'light' ? 'bg-emerald-100/80 border-emerald-300 text-emerald-800' : 'bg-[#10b981]/15 border-[#10b981]/30 text-[#10b981]'
                  }`}>
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full border ${theme === 'light' ? 'text-emerald-900 bg-emerald-100 border-emerald-300' : 'text-[#10b981] bg-[#10b981]/15 border-[#10b981]/30'
                  }`}>
                  Market Risk
                </span>
              </div>
              <div>
                <div className={`font-mono-num text-3xl md:text-4xl font-extrabold ${theme === 'light' ? 'text-emerald-700 font-bold' : 'text-[#10b981] drop-shadow-[0_0_12px_rgba(16,185,129,0.4)]'
                  }`}>
                  73%
                </div>
                <div className={`text-xs font-semibold mt-1.5 tracking-wide ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                  Indian Businesses Not Compliant
                </div>
              </div>
              <div className={`mt-4 pt-3 border-t flex items-center gap-2 ${theme === 'light' ? 'border-slate-200' : 'border-slate-800/60'
                }`}>
                <div className={`flex-1 h-1.5 rounded-full overflow-hidden ${theme === 'light' ? 'bg-slate-200' : 'bg-slate-800'
                  }`}>
                  <div className="h-full bg-gradient-to-r from-[#10b981]/60 to-[#10b981] rounded-full w-[73%]" />
                </div>
                <span className={`text-[10px] font-bold font-mono ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'
                  }`}>Risk</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FLUSH FULL-WIDTH VIDEO SECTION */}
      <section id="demo" className={`w-full backdrop-blur-md py-20 px-6 md:px-12 flex flex-col items-center relative transition-colors duration-300 ${theme === 'light' ? 'bg-slate-50' : 'bg-slate-950/90'
        }`}>
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className={`inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full border mb-3 shadow-xs ${theme === 'light' ? 'text-blue-700 bg-blue-50 border-blue-200' : 'text-blue-400 bg-slate-900/90 border-blue-500/30'
            }`}>
            See it in action
          </span>
          <h2 className={`font-heading text-3xl md:text-5xl font-extrabold max-w-2xl mx-auto leading-tight tracking-tight mb-4 ${theme === 'light' ? 'text-slate-950' : 'text-white'
            }`}>
            60 Seconds to Understand SecureCms
          </h2>
          <p className={`text-base ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'}`}>
            Watch how consent capture, audit logging, and rights requests work end to end.
          </p>
        </div>

        <div className={`w-full max-w-5xl aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border relative group ${theme === 'light' ? 'bg-white border-slate-200' : 'bg-slate-900/90 border-slate-800/90'
          }`}>
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/60 to-transparent z-10" />
          <iframe
            src="https://www.youtube-nocookie.com/embed/4OMV46Dqp3s?rel=0&amp;modestbranding=1"
            title="SecureCms Product Walkthrough Video"
            className="w-full h-full border-none rounded-3xl"
            allowFullScreen
          />
        </div>
        <p className="text-xs text-slate-500 mt-4 uppercase tracking-widest font-semibold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          Replace with hosted product walkthrough video (30–60 sec, captions on, autoplay muted)
        </p>
      </section>

      {/* 5. FLUSH FULL-WIDTH WHY THIS CAN'T WAIT SECTION */}
      <section id="why" className={`w-full backdrop-blur-md py-20 px-6 md:px-12 relative overflow-hidden transition-colors duration-300 ${theme === 'light' ? 'bg-slate-100/90' : 'bg-slate-950/80'
        }`}>
        <div className="max-w-6xl mx-auto space-y-12 relative z-10">
          <div className="text-center">
            <span className={`inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full border mb-3 shadow-xs ${theme === 'light'
              ? 'text-emerald-800 bg-emerald-100 border-emerald-300'
              : 'text-[#10b981] bg-[#10b981]/15 border-[#10b981]/30'
              }`}>
              Why this can't wait
            </span>
            <h2 className={`font-heading text-3xl md:text-5xl font-extrabold max-w-2xl mx-auto leading-tight tracking-tight ${theme === 'light' ? 'text-slate-950' : 'text-white'
              }`}>
              Manual Consent Management Is No Longer an Option
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: CheckCircle2,
                title: "No Proof of Consent",
                desc: "Can't produce auditable time-stamped logs when the Data Protection Board asks.",
                tag: "Audit Risk",
              },
              {
                icon: IndianRupee,
                title: "₹250 Cr Penalty Risk",
                desc: "The statutory penalty under the DPDP Act for failing to protect personal data.",
                tag: "Severe Fine",
              },
              {
                icon: Clock,
                title: "Slow Rights Requests",
                desc: "Manual workflows for data deletion (DSAR) create a massive operational backlog.",
                tag: "DSAR Backlog",
              },
              {
                icon: LayoutGrid,
                title: "Fragmented Systems",
                desc: "Scattered consent data across marketing and CRM tools risks critical data leaks.",
                tag: "Data Leak",
              },
            ].map((card, i) => {
              const IconComp = card.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 45, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
                  className="h-full"
                >
                  <NeonBorder
                    color="#10b981"
                    rounded={24}
                    thickness={1.5}
                    borderSize={25}
                    glow={15}
                    speed={10}
                    className="h-full"
                  >
                    <div className={`p-6 rounded-2xl backdrop-blur-xl h-full flex flex-col justify-between transition-all duration-300 ${theme === 'light'
                      ? 'bg-white text-slate-900 border border-slate-200 shadow-md hover:bg-slate-50'
                      : 'bg-slate-900/80 text-white hover:bg-slate-900'
                      }`}>
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className={`p-2.5 rounded-xl border ${theme === 'light' ? 'bg-emerald-100/80 border-emerald-300 text-emerald-800' : 'bg-[#10b981]/15 border-[#10b981]/30 text-[#10b981]'
                            }`}>
                            <IconComp className="w-6 h-6" />
                          </div>
                          <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full border ${theme === 'light' ? 'text-emerald-900 bg-emerald-100 border-emerald-300' : 'text-[#10b981] bg-[#10b981]/15 border-[#10b981]/30'
                            }`}>
                            {card.tag}
                          </span>
                        </div>
                        <h3 className={`font-heading text-lg font-bold mb-2 tracking-tight ${theme === 'light' ? 'text-slate-950' : 'text-white'
                          }`}>
                          {card.title}
                        </h3>
                        <p className={`text-xs leading-relaxed ${theme === 'light' ? 'text-slate-600' : 'text-slate-300'
                          }`}>
                          {card.desc}
                        </p>
                      </div>
                      <div className={`mt-6 pt-3 border-t flex items-center justify-between text-[11px] font-mono ${theme === 'light' ? 'border-slate-200 text-slate-500' : 'border-slate-800/80 text-slate-400'
                        }`}>
                        <span>DPDP § Compliance</span>
                        <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                      </div>
                    </div>
                  </NeonBorder>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-6 pt-4">
            <p className={`text-sm md:text-base font-medium py-3 px-6 rounded-xl inline-block border shadow-inner ${theme === 'light'
              ? 'text-amber-900 bg-amber-50 border-amber-300'
              : 'text-amber-400/90 bg-amber-900/20 border-amber-500/20'
              }`}>
              *The DPDP Rules are active. The Consent Manager framework deadline is Nov 13, 2026. Compliance is mandatory.
            </p>
          </div>
        </div>
      </section>

      {/* 7. COVERFLOW 3D GALLERY FEATURE SECTION (NO STICKY SCROLL) */}
      <section id="features" className={`w-full py-20 relative overflow-hidden transition-colors duration-300 ${theme === 'light' ? 'bg-slate-50' : 'bg-slate-950'
        }`}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 mb-6">
          <div className="text-center">
            <span className={`inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full border mb-3 shadow-xs ${theme === 'light'
              ? 'text-emerald-800 bg-emerald-100 border-emerald-300'
              : 'text-[#10b981] bg-[#10b981]/15 border-[#10b981]/30'
              }`}>
              Core Platform Features
            </span>
            <h3 className={`font-heading text-3xl md:text-5xl font-extrabold max-w-2xl mx-auto leading-tight tracking-tight ${theme === 'light' ? 'text-slate-950' : 'text-white'
              }`}>
              Everything You Need for DPDP Compliance
            </h3>
          </div>
        </div>

        {/* 3D Coverflow Feature Gallery */}
        <CoverflowFeatures theme={theme} />
      </section>



      {/* MOTION UI TIMELINE / ENGINE / FAQ / CTA (SMOOTH SCROLL) */}
      <SmoothScrollCTA
        theme={theme}
        engineNode={<EmbeddedSingleViewDashboard theme={theme} />}
        faqNode={<FAQSection theme={theme} />}
        onCtaClick={() => setModalOpen(true)}
      />

      {/* 9. FLUSH FULL-WIDTH FOOTER WITH COMPLIANCE BADGES */}
      <footer className={`w-full py-10 px-6 md:px-12 transition-colors duration-300 ${theme === 'light' ? 'bg-slate-100 text-slate-600' : 'bg-slate-950 text-slate-500'
        }`}>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 text-xs">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className={`font-heading font-extrabold text-sm flex items-center gap-2 opacity-90 ${theme === 'light' ? 'text-slate-900' : 'text-slate-300'
              }`}>
              <img
                src={theme === 'dark' ? "/assets/dpdp/logo-white.png?v=3" : "/assets/dpdp/logo.png?v=3"}
                alt="SecureCms Logo"
                className={`h-10 md:h-12 w-auto object-contain drop-shadow-sm ${theme === 'light' ? 'grayscale opacity-70' : 'opacity-90'}`}
              />
            </div>
            <div className="flex gap-4 font-semibold">
              <a href="tel:9606015868" className={`transition-colors ${theme === 'light' ? 'hover:text-slate-950' : 'hover:text-slate-300'}`}>9606015868</a>
              <a href="https://wa.me/9606015868" target="_blank" rel="noreferrer" className={`transition-colors ${theme === 'light' ? 'hover:text-slate-950' : 'hover:text-slate-300'}`}>WhatsApp</a>
              <a href="mailto:hello@securedapp.in" className={`transition-colors ${theme === 'light' ? 'hover:text-slate-950' : 'hover:text-slate-300'}`}>hello@securedapp.in</a>
            </div>
            <div className={`hidden lg:flex gap-4 border-l pl-6 ${theme === 'light' ? 'border-slate-300' : 'border-slate-800'}`}>
              <a href="/privacy-policy" className={`transition-colors ${theme === 'light' ? 'hover:text-slate-950' : 'hover:text-slate-300'}`}>Privacy Policy</a>
              <a href="/terms-of-service" className={`transition-colors ${theme === 'light' ? 'hover:text-slate-950' : 'hover:text-slate-300'}`}>Terms of Service</a>
              <a href="/dpdp" className={`transition-colors ${theme === 'light' ? 'hover:text-slate-950' : 'hover:text-slate-300'}`}>DPDP Compliance Statement</a>
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-4 opacity-60">
            <span className="font-bold">ISO 27001</span>
            <span>&bull;</span>
            <span className="font-bold">SOC 2 Type II</span>
            <span>&bull;</span>
            <span className="font-bold">DPDP Ready</span>
          </div>
        </div>
      </footer>

      {/* LEAD FORM MODAL POPUP (ACCESSIBLE ROLE DIALOG) */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={() => setModalOpen(false)}
                whileHover={{ scale: 1.15, rotate: 90 }}
                whileTap={{ scale: 0.85 }}
                className="absolute top-4 right-4 z-20 p-2.5 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-600 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </motion.button>

              <LeadCaptureForm theme={theme} onSuccess={() => setTimeout(() => setModalOpen(false), 2500)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CUTE FLOATING RIGHT-SIDE ACTION BUTTON */}
      <FloatingAuditButton theme={theme} onClick={() => setModalOpen(true)} />
    </div>
  );
}

export default SecureCMSMockupApp;

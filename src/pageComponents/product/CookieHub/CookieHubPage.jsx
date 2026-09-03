"use client";

import React from "react";
import Footer from "../../../components/footer/footer";
import Navbar from "../../../components/navbar/Navbar";
import SectionTitle from "../../../components/common/SectionTitle";
import FAQs from "../../../components/common/FAQs";
import MetaTags from "../../../components/common/MetaTags";
import BookMeetCta from "../../../components/common/bookMeetCta";
import {
  Cookie,
  ShieldCheck,
  Zap,
  Lock,
  ArrowRight,
  KeyRound,
  WifiOff,
  Palette,
  FileCode2,
  Smartphone,
  Check,
  X,
  ExternalLink,
  Code2
} from "lucide-react";
import { motion } from "framer-motion";
import CookieBannerPreview from "./components/CookieBannerPreview";
import { statsMetrics, bentoFeatures, workflowSteps, complianceMatrix, faqsData } from "./data";

export default function CookieHubPage() {
  if (typeof window !== "undefined") {
    window.scrollTo(0, 0);
  }

  return (
    <div className="product-container bg-primary dark:bg-secondary font-outfit text-secondary dark:text-white min-h-screen">
      <MetaTags
        data={{
          title: "Enterprise Cookie Consent & Script Governance | CookieHub by SecuredApp",
          desc: "True zero-data-leak script blocking, RS256 JWT + JWKS cross-device identity sync, and offline-first resilience — 100% DPDP Act 2023 & GDPR ready.",
          keywords:
            "SecureCMS, CookieHub, DPDP Act 2023, cookie consent system, script governance, RS256 JWT JWKS sync, script blocker, zero leak consent, GDPR compliance India",
          image: "/assets/images/ProductPages/ss/hero.webp",
        }}
      />
      <Navbar />

      <div className="product">

        {/* ═══════════════════════════════════════════
            1. HERO SECTION — Premium Depth & Motion
        ═══════════════════════════════════════════ */}
        <section className="relative min-h-[90vh] pt-32 pb-20 overflow-hidden flex items-center bg-grid dark:bg-secondary">
          {/* Ambient glow blobs for depth */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full opacity-30 dark:opacity-20"
              style={{ background: 'radial-gradient(circle, rgba(18,213,118,0.15) 0%, transparent 70%)' }}
            />
            <div
              className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-25 dark:opacity-15"
              style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)' }}
            />
            {/* Decorative gradient line */}
            <div className="w-[800px] h-[1px] bg-gradient-to-r from-transparent via-tertiary/20 to-transparent absolute bottom-0 left-1/2 -translate-x-1/2" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col gap-6"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-tertiary/10 border border-tertiary/20 w-fit backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
                  <span className="text-xs sm:text-sm text-tertiary font-medium">
                    🚀 100% Compliant with DPDP Act 2023 &amp; Global Privacy Regulations
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-secondary dark:text-white">
                  Enterprise Cookie Consent &amp; <span className="text-tertiary">Script Governance</span> Without Compromise
                </h1>

                <p className="text-base sm:text-lg text-labelGray dark:text-gray-300 max-w-xl leading-relaxed">
                  The privacy platform engineered for modern web, mobile, and fintech apps. Enforce true zero-data-leak script blocking before affirmative consent, synchronize user preferences across all devices using <strong className="text-tertiary">RS256 JWT + JWKS</strong>, and guarantee uninterrupted UX with offline-first resilience.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <motion.a
                    href="https://cookie-app.securedapp.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-8 py-4 rounded-xl bg-tertiary text-primary font-bold text-base flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(18,213,118,0.3)] hover:shadow-[0_15px_30px_rgba(18,213,118,0.4)] transition-all"
                  >
                    ⚡ Try CookieHub Now
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>

                <p className="text-xs text-labelGray dark:text-gray-400 font-mono">
                  Zero external dependencies • &lt;15KB Bundle • No credit card required
                </p>
              </motion.div>

              {/* Right Column: Hero Visual Sandbox Demo */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <CookieBannerPreview />
              </motion.div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            2. TRUST & KEY PERFORMANCE METRICS BAR
        ═══════════════════════════════════════════ */}
        <section className="py-16 bg-primary dark:bg-secondary border-y border-gray-200 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {statsMetrics.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="group p-5 rounded-xl bg-secondary/5 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-xl space-y-2 hover:border-tertiary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-tertiary/5 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold font-mono text-tertiary">{item.metric}</span>
                    <div className="p-2 rounded-lg bg-tertiary/10 border border-tertiary/20 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  </div>
                  <h3 className="text-sm font-bold text-secondary dark:text-white">{item.title}</h3>
                  <p className="text-xs text-labelGray dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            3. CORE FEATURE MATRIX (Bento Grid)
        ═══════════════════════════════════════════ */}
        <section className="py-24 bg-primary dark:bg-secondary">
          {/* Subtle decorative accent */}
          <div className="relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-tertiary/15 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              name="Features"
              title="Core Feature Matrix"
              description="Enterprise privacy architecture built for compliance, performance, and security."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {bentoFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="group p-6 rounded-xl bg-secondary/5 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-tertiary/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-tertiary/5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-xl bg-tertiary/10 border border-tertiary/20 text-tertiary group-hover:scale-110 group-hover:bg-tertiary/15 transition-all duration-300">
                        {feature.icon}
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary border border-tertiary/20 group-hover:bg-tertiary/20 transition-colors">
                        {feature.tagline}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-secondary dark:text-white group-hover:text-tertiary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-labelGray dark:text-gray-300 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            4. HOW IT WORKS (3-Step Workflow)
        ═══════════════════════════════════════════ */}
        <section className="py-24 bg-primary dark:bg-secondary border-t border-gray-200 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              name="How It Works"
              title="3-Step Implementation Workflow"
              description="Quarantine tags, capture affirmative choice, and link preferences cryptographically."
            />

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {workflowSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className="group p-6 rounded-xl bg-secondary/5 dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-4 relative overflow-hidden hover:border-tertiary/30 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Watermark step number */}
                  <div className="absolute -right-2 -top-4 text-8xl font-black text-tertiary/[0.04] dark:text-tertiary/[0.06] select-none pointer-events-none leading-none">
                    {idx + 1}
                  </div>

                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-tertiary/20 text-tertiary border border-tertiary/30">
                      {step.step}
                    </span>
                    <Code2 className="w-5 h-5 text-tertiary group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary dark:text-white relative z-10">{step.title}</h3>
                  <p className="text-sm text-labelGray dark:text-gray-300 leading-relaxed relative z-10">{step.desc}</p>
                  <div className="p-3 rounded-lg bg-gray-100 dark:bg-black/40 border border-gray-200 dark:border-white/10 overflow-x-auto relative z-10">
                    <code className="text-[11px] font-mono text-tertiary">{step.codeSnippet}</code>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            5. REGULATORY COMPLIANCE MATRIX TABLE
        ═══════════════════════════════════════════ */}
        <section className="py-24 bg-primary dark:bg-secondary border-t border-gray-200 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              name="Compliance"
              title="Regulatory Compliance Comparison Matrix"
              description="DPDP Act 2023 & GDPR Obligations vs Legacy Consent Banners"
            />

            <div className="mt-12 overflow-x-auto border border-gray-200 dark:border-white/10 rounded-xl shadow-xl shadow-black/5 dark:shadow-black/20 backdrop-blur-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-secondary/10 dark:bg-white/10 border-b border-gray-200 dark:border-white/10 text-[11px] font-mono uppercase tracking-widest">
                    <th className="p-4 sm:p-5 text-tertiary">Regulatory Requirement</th>
                    <th className="p-4 sm:p-5 text-red-400">Legacy Consent Banners</th>
                    <th className="p-4 sm:p-5 text-emerald-400">SecureCMS Enterprise Solution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-white/10 text-xs sm:text-sm">
                  {complianceMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-tertiary/5 dark:hover:bg-tertiary/5 transition-colors">
                      <td className="p-4 sm:p-5 font-bold text-secondary dark:text-white">{row.feature}</td>
                      <td className="p-4 sm:p-5">
                        <div className="flex items-start gap-2">
                          <span className="inline-flex items-center gap-1.5 bg-red-500/10 text-red-400 dark:text-red-300 px-2.5 py-1 rounded-lg text-xs">
                            <X className="w-3.5 h-3.5 shrink-0" />
                            <span>{row.legacy}</span>
                          </span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-5">
                        <div className="flex items-start gap-2">
                          <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-500 dark:text-emerald-300 px-2.5 py-1 rounded-lg text-xs">
                            <Check className="w-3.5 h-3.5 shrink-0" />
                            <span>{row.secureCms}</span>
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            6. FREQUENTLY ASKED QUESTIONS
        ═══════════════════════════════════════════ */}
        <section className="py-24 bg-primary dark:bg-secondary border-t border-gray-200 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FAQs faqsData={faqsData} />
          </div>
        </section>

        {/* Floating Meeting CTA & Footer */}
        <BookMeetCta />
        <Footer />
      </div>
    </div>
  );
}

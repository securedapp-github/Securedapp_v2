"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { 
  Code, 
  ShieldCheck, 
  ArrowRight, 
  ChevronDown, 
  Lock, 
  CheckCircle2, 
  Download, 
  Calendar, 
  ExternalLink, 
  Layers, 
  FileText, 
  Sparkles,
  Server,
  Cpu,
  Terminal,
  Database,
  RefreshCw,
  Sliders
} from "lucide-react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/footer";
import BookMeetCta from "../../../components/common/bookMeetCta";
import DPDPLiveCountdownTimer from "../../../components/common/DPDPLiveCountdownTimer";
import InteractiveSaaSConsentSimulator from "./InteractiveSaaSConsentSimulator";
import { SaaSDemoModal, SaaSDPAModal } from "./SaaSModals";
import { 
  saasConsentSchema, 
  metaData, 
  partnerLogos, 
  dualRoleMatrix,
  enterpriseModules,
  implementationRoadmap,
  faqsData,
  dpdpResources,
  officialSources
} from "./data";

export default function SaaSConsentPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [dpaModalOpen, setDpaModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="product-container bg-primary dark:bg-secondary font-outfit text-secondary dark:text-white transition-colors duration-200">
      {/* Head & Schema */}
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <link rel="canonical" href={metaData.canonical} />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:url" content={metaData.canonical} />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(saasConsentSchema) }}
        />
      </Head>

      {/* Navigation */}
      <Navbar />


      {/* Hero Section */}
      <section className="relative min-h-[90vh] pt-28 pb-20 overflow-hidden flex items-center bg-grid dark:bg-secondary border-b border-gray-200 dark:border-white/10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-radial from-tertiary/15 via-transparent to-transparent blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Trust Badges Bar */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-tertiary/10 text-tertiary border border-tertiary/20 flex items-center gap-1.5 font-outfit">
              <ShieldCheck className="w-3.5 h-3.5" />
              DPDP Act Section 8 Processor & Fiduciary Architecture
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 font-outfit">
              Developer APIs · Real-Time Webhooks · AI Firewalls
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8 flex flex-col gap-6">
              {/* Live DPDP 13 May 2027 Countdown Timer */}
              <DPDPLiveCountdownTimer label="Core DPDP obligations for SaaS & cloud providers apply from 13 May 2027" />

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] tracking-tight text-secondary dark:text-white font-outfit">
                DPDP Compliance for <span className="text-tertiary">SaaS Companies</span>
              </h1>
              
              <p className="text-base sm:text-lg text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans max-w-2xl">
                <strong>SecureCMS</strong> helps SaaS companies manage consent for their own users and honour their customers' consent decisions inside the product through APIs, SDKs and webhooks. Built strictly for the <strong>DPDP Act 2023</strong> and <strong>DPDP Rules 2025</strong>.
              </p>

              {/* Two-Path Architecture Callout */}
              <div className="p-4 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-tertiary/10 text-tertiary flex-shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-tertiary font-bold">
                      The Dual-Role Reality for Modern SaaS
                    </h4>
                    <p className="text-xs sm:text-sm text-secondary/80 dark:text-gray-300 mt-1 font-nunitoSans">
                      <strong>You are a Data Fiduciary</strong> for your sign-ups, billing contacts, and website visitors. <strong>You are a Data Processor (Section 8)</strong> for customer tenant data stored in your software. SecureCMS isolates these boundaries cleanly while automating compliance for both.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={() => setDemoModalOpen(true)}
                  className="px-8 py-4 bg-tertiary hover:opacity-95 text-secondary font-bold font-outfit rounded-xl shadow-[0_0_20px_rgba(18,213,118,0.35)] transition-all flex items-center justify-center gap-2 text-base"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a SaaS Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDpaModalOpen(true)}
                  className="px-8 py-4 bg-secondary/5 dark:bg-white/5 border border-secondary/20 dark:border-white/10 text-secondary dark:text-white font-semibold font-outfit rounded-xl hover:border-tertiary transition-all flex items-center justify-center gap-2 backdrop-blur-sm text-base shadow-sm"
                >
                  <Download className="w-4 h-4 text-tertiary" />
                  <span>Download SaaS DPA Pack</span>
                </button>
              </div>
            </div>

            {/* Quick Metrics / Trust Column */}
            <div className="lg:col-span-4 bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-2xl rounded-3xl p-6 sm:p-7 shadow-xl">
              <h3 className="text-xs font-mono uppercase tracking-wider text-labelGray dark:text-gray-400 mb-4">
                SaaS Compliance Standards
              </h3>
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                  <div className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans">Webhook Sync Latency</div>
                  <div className="text-sm font-bold text-secondary dark:text-white mt-0.5 font-outfit">&lt; 80ms Delivery SLA</div>
                  <div className="text-[11px] text-tertiary mt-1 font-mono">Instant Downstream Propagation</div>
                </div>
                <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                  <div className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans">AI Model Training Firewall</div>
                  <div className="text-sm font-bold text-secondary dark:text-white mt-0.5 font-outfit">Automated Tenant PII Scrubbing</div>
                  <div className="text-[11px] text-tertiary mt-1 font-mono">Stops Unlawful Model Training</div>
                </div>
                <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                  <div className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans">Enterprise RFP Enablement</div>
                  <div className="text-sm font-bold text-secondary dark:text-white mt-0.5 font-outfit">Section 8(2) DPA Schedules</div>
                  <div className="text-[11px] text-tertiary mt-1 font-mono">Ready for Indian Enterprise Bids</div>
                </div>
              </div>

              {/* Partner Badges */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-white/10">
                <div className="text-[10px] uppercase tracking-wider text-labelGray dark:text-gray-400 mb-2 font-mono">
                  Incubated & Evaluated By
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] font-medium text-secondary/80 dark:text-gray-300 font-poppins">
                  {partnerLogos.map((p, idx) => (
                    <div key={idx} className="p-1.5 rounded bg-gray-100 dark:bg-white/5 text-center">
                      {p.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 1: Role Map for SaaS Table */}
      <section id="dual-roles" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-tertiary">Role Matrix</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white mt-1 font-outfit">
              Data Fiduciary vs Data Processor Across SaaS Workloads
            </h2>
            <p className="text-sm text-labelGray dark:text-gray-300 mt-2 font-nunitoSans">
              Correctly assigning legal roles is critical: fiduciaries bear direct user rights duties, while processors are bound by contract.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-white/10 shadow-md">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-100/80 dark:bg-white/10 text-secondary dark:text-gray-300 font-bold uppercase tracking-wider text-[11px] border-b border-gray-200 dark:border-white/10 font-outfit">
                <tr>
                  <th className="py-4 px-4 sm:px-6">SaaS Data Category</th>
                  <th className="py-4 px-4 sm:px-6">Data Elements</th>
                  <th className="py-4 px-4 sm:px-6">DPDP Legal Role</th>
                  <th className="py-4 px-4 sm:px-6">Legal Basis & Operational Rule</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-white/10 bg-white/80 dark:bg-white/5 font-nunitoSans">
                {dualRoleMatrix.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-secondary dark:text-white font-outfit">
                      {item.category}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-labelGray dark:text-gray-300 text-xs">
                      {item.dataCollected}
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-mono text-xs">
                      <span className={`px-2.5 py-1 rounded-full font-semibold ${
                        item.role.includes("Processor")
                          ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                          : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      }`}>
                        {item.role}
                      </span>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-labelGray dark:text-gray-300 text-xs">
                      {item.legalBasis}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 2: Developer Architecture & API Code Snippet */}
      <section id="developer-apis" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-white/[0.02] border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-tertiary">Developer SDKs & Webhooks</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white font-outfit">
                Runtime Consent Verification at the Code Level
              </h2>
              <p className="text-sm text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans">
                Never process customer analytics or execute email broadcasts blindly. Query SecureCMS at runtime to verify valid affirmative consent before invoking third-party APIs.
              </p>
              <div className="space-y-3 pt-2 font-nunitoSans">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tertiary flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-secondary/90 dark:text-gray-300">
                    <strong>Zero-Latency Redis Caching:</strong> Pre-cached consent status checked in &lt;2ms before background job execution.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tertiary flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-secondary/90 dark:text-gray-300">
                    <strong>Bidirectional Webhooks:</strong> Immediate webhook broadcast to CRM, email, and analytics tools upon opt-out.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#071322] border border-gray-200 dark:border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                <span className="text-xs font-mono text-tertiary flex items-center gap-1.5">
                  <Terminal className="w-4 h-4" /> Node.js / TypeScript SDK
                </span>
                <span className="text-[10px] font-mono text-gray-400">api.securedapp.io/v1</span>
              </div>
              <pre className="text-xs font-mono text-gray-300 overflow-x-auto p-2 leading-relaxed">
{`import { SecureCMS } from "@securedapp/cms-node";

const cms = new SecureCMS({ apiKey: process.env.SECURECMS_KEY });

// Verify end-user consent before sending to analytics
const hasConsent = await cms.verifyConsent({
  userId: "usr_99120",
  tenantId: "cust_acme_corp",
  purpose: "product_analytics"
});

if (hasConsent) {
  await mixpanel.track("Dashboard View", { userId });
} else {
  // Gracefully suppress tracking without breaking UX
  logger.info("Analytics suppressed per DPDP Sec 6 opt-out");
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Interactive Simulator */}
      <section id="simulator" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-tertiary">Interactive Sandbox</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white mt-1 font-outfit">
              Simulate SaaS Dual-Roles & Webhook Ingestion
            </h2>
            <p className="text-sm text-labelGray dark:text-gray-300 mt-2 font-nunitoSans">
              Toggle Fiduciary vs Processor responsibilities, test live webhook delivery telemetry, and explore AI model training firewalls.
            </p>
          </div>

          <InteractiveSaaSConsentSimulator />
        </div>
      </section>

      {/* Section 4: Enterprise Modules Suite */}
      <section id="enterprise-modules" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-white/[0.02] border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-tertiary">Platform Architecture</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white mt-1 font-outfit">
              Enterprise SaaS Compliance Modules
            </h2>
            <p className="text-sm text-labelGray dark:text-gray-300 mt-2 font-nunitoSans">
              Modular components built specifically for B2B & B2C SaaS architectures, API platforms, and cloud providers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enterpriseModules.map((module, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between backdrop-blur-sm">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-tertiary/10 text-tertiary border border-tertiary/20">
                      {module.badge}
                    </span>
                    <Layers className="w-4 h-4 text-gray-400" />
                  </div>
                  <h3 className="text-base font-bold text-secondary dark:text-white mb-2 font-outfit">
                    {module.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans">
                    {module.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Enterprise Sales Enablement Moat */}
      <section id="enterprise-buyers" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-tertiary">B2B Sales Acceleration</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white font-outfit">
                Turn DPDP Compliance into a Competitive Sales Moat
              </h2>
              <p className="text-sm text-labelGray dark:text-gray-300 leading-relaxed font-nunitoSans">
                When selling software to Indian banks, NBFCs, telecoms, and enterprise conglomerates, your legal architecture is scrutinized during RFP due diligence.
              </p>
              <div className="space-y-3 pt-2 font-nunitoSans">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tertiary flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-secondary/90 dark:text-gray-300">
                    <strong>Standard Section 8(2) DPA:</strong> Pre-negotiated Data Processing Addendums that satisfy enterprise general counsel and shorten legal sales cycles by weeks.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tertiary flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-secondary/90 dark:text-gray-300">
                    <strong>Sub-Processor Transparency:</strong> Publishable sub-processor registry with automated 30-day notice workflows for cloud additions.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tertiary flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-secondary/90 dark:text-gray-300">
                    <strong>MeitY Data Residency Attestation:</strong> Verifiable Indian cloud deployment certificates for clients bound by RBI or IRDAI localization directives.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-2xl">
              <h3 className="text-sm font-mono uppercase tracking-wider text-tertiary mb-4">
                What Enterprise Buyers Ask in RFPs
              </h3>
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                  <strong className="text-secondary dark:text-white font-outfit">1. Are customer records used for AI training?</strong>
                  <p className="text-labelGray dark:text-gray-300 mt-1 font-nunitoSans">Guaranteed zero training leakage via SecureCMS AI Firewalls.</p>
                </div>
                <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                  <strong className="text-secondary dark:text-white font-outfit">2. Can you honor our users' consent withdrawals?</strong>
                  <p className="text-labelGray dark:text-gray-300 mt-1 font-nunitoSans">Real-time webhook ingestion updating cache and pipelines in &lt;80ms.</p>
                </div>
                <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                  <strong className="text-secondary dark:text-white font-outfit">3. How do you handle sub-processor breaches?</strong>
                  <p className="text-labelGray dark:text-gray-300 mt-1 font-nunitoSans">6-hour CERT-In escalation runbooks with contractual indemnity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Implementation Roadmap */}
      <section id="roadmap" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-white/[0.02] border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-tertiary">Statutory Timeline</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white mt-1 font-outfit">
              6-Phase SaaS Implementation Roadmap
            </h2>
            <p className="text-sm text-labelGray dark:text-gray-300 mt-2 font-nunitoSans">
              Structured engineering and legal roadmap to align your product with the 13 May 2027 statutory deadline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {implementationRoadmap.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm relative backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-tertiary">{item.duration}</span>
                  <span className="text-[10px] font-mono text-labelGray dark:text-gray-400">Step 0{idx + 1}</span>
                </div>
                <h3 className="text-sm font-bold text-secondary dark:text-white mb-2 font-outfit">
                  {item.phase}
                </h3>
                <p className="text-xs text-labelGray dark:text-gray-300 font-nunitoSans">
                  {item.milestone}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Cross-Linked Resources & Official Sources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-base font-bold text-secondary dark:text-white mb-4 flex items-center gap-2 font-outfit">
                <FileText className="w-4 h-4 text-tertiary" />
                Related DPDP Compliance Modules
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dpdpResources.map((res, idx) => (
                  <Link
                    key={idx}
                    href={res.href}
                    className="p-4 rounded-xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-tertiary transition-all group block shadow-sm hover:shadow-md hover:-translate-y-0.5"
                  >
                    <h4 className="text-xs font-bold text-secondary dark:text-white group-hover:text-tertiary flex items-center justify-between font-outfit">
                      <span>{res.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-tertiary" />
                    </h4>
                    <p className="text-[11px] text-labelGray dark:text-gray-400 mt-1 leading-snug font-nunitoSans">
                      {res.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold text-secondary dark:text-white mb-4 flex items-center gap-2 font-outfit">
                <ExternalLink className="w-4 h-4 text-tertiary" />
                Official Statutory Sources
              </h3>
              <div className="space-y-2.5">
                {officialSources.map((src, idx) => (
                  <a
                    key={idx}
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-tertiary text-xs text-secondary/90 dark:text-gray-300 transition-all group font-nunitoSans"
                  >
                    <span>{src.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-tertiary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: FAQs Accordion (Positioned Directly Above Footer) */}
      <section id="faqs" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-tertiary">Developer & Legal Clarity</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white mt-1 font-outfit">
              Frequently Asked Questions for SaaS Founders & Product Teams
            </h2>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 overflow-hidden transition-all shadow-sm hover:border-tertiary/30 backdrop-blur-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-secondary dark:text-white text-sm sm:text-base hover:text-tertiary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-tertiary font-outfit"
                  aria-expanded={openFaqIndex === idx}
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                    openFaqIndex === idx ? "rotate-180 text-tertiary" : ""
                  }`} />
                </button>
                {openFaqIndex === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-labelGray dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-white/5 font-nunitoSans">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book A Meeting CTA */}
      <BookMeetCta />

      {/* Global Footer */}
      <Footer />

      {/* Modals */}
      <SaaSDemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
      <SaaSDPAModal isOpen={dpaModalOpen} onClose={() => setDpaModalOpen(false)} />
    </div>
  );
}

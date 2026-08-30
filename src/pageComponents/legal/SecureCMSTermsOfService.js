"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import MetaTags from "../../components/common/MetaTags";
import {
  Printer,
  Download,
  Share2,
  FileText,
  Building,
  Mail,
  ChevronRight,
  ExternalLink,
  Scale
} from "lucide-react";

const tocItems = [
  { id: "notice", title: "Important Notice" },
  { id: "sec-1", title: "1. Definitions" },
  { id: "sec-2", title: "2. Acceptance of Terms" },
  { id: "sec-3", title: "3. Description of Services" },
  { id: "sec-4", title: "4. Customer Account & Authorized Users" },
  { id: "sec-5", title: "5. Customer Responsibilities" },
  { id: "sec-6", title: "6. Privacy and Data Protection" },
  { id: "sec-7", title: "7. Compliance with Indian DPDP Requirements" },
  { id: "sec-8", title: "8. Consent Manager Status" },
  { id: "sec-9", title: "9. Customer Data" },
  { id: "sec-10", title: "10. Personal Data Minimization" },
  { id: "sec-11", title: "11. Acceptable Use" },
  { id: "sec-12", title: "12. APIs, SDKs, Webhooks & Integrations" },
  { id: "sec-13", title: "13. Third-Party Services" },
  { id: "sec-14", title: "14. Intellectual Property" },
  { id: "sec-15", title: "15. Feedback" },
  { id: "sec-16", title: "16. Confidentiality" },
  { id: "sec-17", title: "17. Service Availability & Maintenance" },
  { id: "sec-18", title: "18. Changes to the Services" },
  { id: "sec-19", title: "19. Fees and Subscription" },
  { id: "sec-20", title: "20. Suspension" },
  { id: "sec-21", title: "21. Termination" },
  { id: "sec-22", title: "22. Disclaimers" },
  { id: "sec-23", title: "23. Limitation of Liability" },
  { id: "sec-24", title: "24. Indemnification" },
  { id: "sec-25", title: "25. Force Majeure" },
  { id: "sec-26", title: "26. Governing Law & Dispute Resolution" },
  { id: "sec-27", title: "27. Notices" },
  { id: "sec-28", title: "28. Changes to These Terms" },
  { id: "sec-29", title: "29. Severability" },
  { id: "sec-30", title: "30. Entire Agreement & Order of Precedence" },
  { id: "sec-31", title: "31. Contact Information" },
  { id: "sec-32", title: "32. Regulatory Reference & Document Control" },
];

export default function SecureCMSTermsOfService() {
  const [activeSection, setActiveSection] = useState("notice");
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const item of tocItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#070e1c] text-slate-900 dark:text-slate-100 font-outfit antialiased selection:bg-blue-500/30">
      <MetaTags
        data={{
          title: "Terms of Service | SecureCMS by SecureDApp",
          desc: "Official Terms of Service governing access to and use of the SecureCMS enterprise consent management platform.",
          keywords: "SecureCMS Terms of Service, DPDP Act compliance agreement, SaaS terms, Consent Management Terms, SecureDApp legal",
          image: "/assets/images/ProductPages/ss/hero.webp",
        }}
      />
      <Navbar />

      {/* Corporate Document Header */}
      <header className="pt-32 pb-10 border-b border-slate-200 dark:border-slate-800/80 bg-slate-50/70 dark:bg-[#091326]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb & Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link href="/dpdp-compliance-platform" className="hover:text-slate-900 dark:hover:text-white transition-colors">SecureCMS</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-900 dark:text-white font-semibold">Terms of Service</span>
            </nav>

            {/* Document Navigation Tabs */}
            <div className="inline-flex p-1 rounded-lg bg-slate-200/70 dark:bg-slate-800/80 border border-slate-300/60 dark:border-slate-700/60 text-xs font-medium">
              <Link
                href="/securecms/privacy-policy"
                className="px-3.5 py-1.5 rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="px-3.5 py-1.5 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm font-semibold">
                Terms of Service
              </span>
            </div>
          </div>

          {/* Title Area */}
          <div className="max-w-3xl">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-500 dark:text-blue-400 mb-2">
              Commercial & Platform Agreement
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
              SecureCMS Terms of Service
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Terms governing access to and use of the SecureCMS consent management, cookie categorization, dynamic script blocking, and data governance platform provided by SecuredApp.
            </p>
          </div>

          {/* Document Metadata & Actions Toolbar */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <div><span className="font-semibold text-slate-700 dark:text-slate-200">Effective Date:</span> 11 August 2026</div>
              <div><span className="font-semibold text-slate-700 dark:text-slate-200">Version:</span> 1.0</div>
              <div><span className="font-semibold text-slate-700 dark:text-slate-200">Jurisdiction:</span> India (DPDP Act)</div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copied ? "Copied Link" : "Share"}</span>
              </button>
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 font-medium transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* Main Body with Sidebar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Table of Contents Sticky Sidebar */}
          <aside className="lg:col-span-4 hidden lg:block sticky top-28">
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 px-2">
                On This Page
              </div>
              <nav className="max-h-[calc(100vh-200px)] overflow-y-auto space-y-0.5 text-xs pr-1">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setActiveSection(item.id)}
                    className={`block px-2.5 py-1.5 rounded-md transition-colors leading-snug ${
                      activeSection === item.id
                        ? "bg-slate-200/80 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/40"
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Legal Content Column */}
          <main className="lg:col-span-8 space-y-12 text-[15px] sm:text-[16px] leading-[1.75] text-slate-700 dark:text-slate-300">
            
            {/* Notice */}
            <section id="notice" className="p-5 rounded-lg border-l-4 border-blue-500 bg-blue-500/5 dark:bg-blue-500/10 text-slate-800 dark:text-slate-200 space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                Important Notice
              </h2>
              <p className="text-sm leading-relaxed">
                These Terms of Service (&quot;Terms&quot;) govern access to and use of SecureCMS, a consent management and data governance platform provided by SecuredApp (&quot;SecuredApp&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These Terms are intended as a commercial and product-level template and should be reviewed by the legal team of the contracting entity before execution or publication.
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Where a Customer signs a separate order form, subscription agreement, master services agreement, data processing agreement, service-level agreement, or other written agreement with SecuredApp, that agreement will govern to the extent of any conflict with these Terms.
              </p>
            </section>

            {/* Section 1 */}
            <section id="sec-1" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                1. Definitions
              </h2>
              <dl className="space-y-3">
                <div>
                  <dt className="font-bold text-slate-900 dark:text-white">&ldquo;SecureCMS&rdquo;</dt>
                  <dd className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 text-sm">
                    means the SecureCMS consent management, cookie management, data governance, API, SDK, dashboard, workflow, and related services provided by SecuredApp.
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900 dark:text-white">&ldquo;Customer&rdquo;</dt>
                  <dd className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 text-sm">
                    means the organization or legal entity that subscribes to or is authorized to use SecureCMS.
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900 dark:text-white">&ldquo;Authorized User&rdquo;</dt>
                  <dd className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 text-sm">
                    means an individual authorized by the Customer to access or use SecureCMS under the Customer&apos;s account.
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900 dark:text-white">&ldquo;Customer Data&rdquo;</dt>
                  <dd className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 text-sm">
                    means data, content, configurations, consent records, identifiers, policies, documents, requests, or other information submitted to or processed through SecureCMS by or on behalf of the Customer.
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900 dark:text-white">&ldquo;Documentation&rdquo;</dt>
                  <dd className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 text-sm">
                    means user guides, technical documentation, API documentation, configuration guidance, and other materials supplied by SecuredApp for SecureCMS.
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900 dark:text-white">&ldquo;Services&rdquo;</dt>
                  <dd className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 text-sm">
                    means the hosted or otherwise provided SecureCMS functionality made available under an applicable subscription, order form, or agreement.
                  </dd>
                </div>
              </dl>
            </section>

            {/* Section 2 */}
            <section id="sec-2" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                2. Acceptance of Terms
              </h2>
              <p>
                By accessing or using SecureCMS, the Customer and its Authorized Users agree to these Terms. If an individual accepts these Terms on behalf of an organization, that individual represents that they have authority to bind the organization.
              </p>
              <p>
                If the Customer does not agree to these Terms, it must not access or use SecureCMS.
              </p>
            </section>

            {/* Section 3 */}
            <section id="sec-3" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                3. Description of Services
              </h2>
              <p>
                SecureCMS provides configurable technology for consent and privacy operations. Depending on the subscription and configuration, the Services may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Consent collection, recording, review, management, and withdrawal workflows.</li>
                <li>Consent receipts, consent records, purpose and policy version management.</li>
                <li>Cookie management, cookie categorization, vendor mapping, and consent enforcement functionality.</li>
                <li>Data catalogue and data governance capabilities.</li>
                <li>Data subject request, grievance, escalation, and workflow management.</li>
                <li>APIs, SDKs, webhooks, middleware, and consent enforcement integrations.</li>
                <li>Audit logs, reporting, dashboards, notifications, and administrative controls.</li>
                <li>Tenant, application, role-based access, API key, authentication, and configuration management.</li>
              </ul>
              <p className="text-sm text-slate-500">Features may vary by plan, deployment model, technical configuration, and applicable order form.</p>
            </section>

            {/* Section 4 */}
            <section id="sec-4" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                4. Customer Account and Authorized Users
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>The Customer is responsible for maintaining accurate account information and keeping administrative information current.</li>
                <li>The Customer is responsible for controlling access to its SecureCMS tenant and for all activity performed through its Authorized Users and credentials.</li>
                <li>Credentials, API keys, signing credentials, access tokens, and similar authentication mechanisms must be kept confidential and must not be shared except as authorized.</li>
                <li>The Customer must promptly disable accounts or credentials that are no longer authorized or are suspected of compromise.</li>
                <li>The Customer must notify SecuredApp promptly of known or reasonably suspected unauthorized access or security incidents involving SecureCMS credentials.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="sec-5" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                5. Customer Responsibilities
              </h2>
              <p>The Customer is responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Determining the purposes and lawful basis for processing personal data through its use of SecureCMS.</li>
                <li>Providing appropriate privacy notices and obtaining valid consent where consent is required.</li>
                <li>Ensuring that its consent language, purposes, data catalogue, cookie configuration, retention settings, and integrations are accurate and lawful.</li>
                <li>Ensuring that personal data supplied to SecureCMS is collected and disclosed to SecuredApp lawfully.</li>
                <li>Configuring integrations, webhooks, APIs, SDKs, and enforcement mechanisms appropriately.</li>
                <li>Responding to Data Principal/Data Subject requests where the Customer is the responsible Data Fiduciary or controller.</li>
                <li>Maintaining appropriate internal access controls and security procedures for systems connected to SecureCMS.</li>
                <li>Ensuring that Authorized Users comply with these Terms and applicable law.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="sec-6" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                6. Privacy and Data Protection
              </h2>
              <p>
                The parties acknowledge that SecureCMS may process personal data on behalf of Customers. The roles of SecuredApp and the Customer depend on the specific processing activity. For Customer Data processed on the Customer&apos;s behalf, the Customer generally determines the purposes and means of processing and SecuredApp processes such data in accordance with documented instructions and the applicable agreement.
              </p>
              <p>
                The SecureCMS Privacy Policy describes SecuredApp&apos;s own privacy practices. Customers should maintain their own privacy notices for processing performed through their SecureCMS implementation.
              </p>
              <p>
                Where required, the parties should execute a separate Data Processing Agreement (DPA) addressing security, confidentiality, sub-processors, incident notification, deletion/return of data, audits, and other processor obligations.
              </p>
            </section>

            {/* Section 7 */}
            <section id="sec-7" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                7. Compliance with Indian Data Protection Requirements
              </h2>
              <p>
                SecureCMS is designed to support privacy and consent operations relevant to India&apos;s Digital Personal Data Protection Act, 2023 (DPDP Act) and applicable rules and regulations. SecureCMS is a technology platform and does not itself determine whether a Customer&apos;s particular processing activity complies with the DPDP Act or any other law.
              </p>
              <p>
                The Customer remains responsible for its legal obligations as a Data Fiduciary, including determining appropriate purposes, providing required notices, obtaining valid consent where applicable, honoring rights, managing grievances, implementing retention and deletion requirements, and configuring SecureCMS accordingly.
              </p>
              <p className="font-semibold text-slate-900 dark:text-white">
                Nothing in these Terms constitutes legal advice or a certification that the Customer&apos;s implementation is compliant.
              </p>
            </section>

            {/* Section 8 */}
            <section id="sec-8" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                8. Consent Manager Status
              </h2>
              <p>
                Unless expressly stated in a written agreement and supported by the required registration or authorization, SecureCMS and SecuredApp must not be represented as a registered Consent Manager under the DPDP Act and the Digital Personal Data Protection Rules, 2025. SecureCMS may provide consent management functionality without itself acting as a registered Consent Manager.
              </p>
              <p>
                The notified DPDP Rules, 2025 establish specific requirements for entities seeking registration as Consent Managers. The Customer must not rely on the availability of SecureCMS functionality as evidence that SecuredApp or the Customer is a registered Consent Manager.
              </p>
            </section>

            {/* Section 9 */}
            <section id="sec-9" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                9. Customer Data
              </h2>
              <p>
                As between SecuredApp and the Customer, the Customer retains its rights in Customer Data. The Customer grants SecuredApp a limited, non-exclusive right to host, copy, transmit, store, modify as technically necessary, and otherwise process Customer Data solely to provide, secure, maintain, support, and improve the Services as permitted by the applicable agreement and law.
              </p>
              <p>
                SecuredApp may generate operational metadata, logs, diagnostics, aggregated statistics, and de-identified or aggregated information relating to use of the Services, provided that such information is not used to identify individuals except as necessary for security, support, legal compliance, or service operation.
              </p>
            </section>

            {/* Section 10 */}
            <section id="sec-10" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                10. Personal Data Minimization
              </h2>
              <p>
                The Customer should configure SecureCMS to collect and process only personal data necessary for the stated purpose. Where the platform supports hashing, pseudonymization, or other data-minimization mechanisms, the Customer should use those mechanisms where appropriate.
              </p>
              <p>
                A cryptographic hash or pseudonymous identifier may still be personal data where an individual can reasonably be identified using available means. Customers should therefore evaluate the legal status of their identifiers and configurations rather than assuming that hashing makes information anonymous.
              </p>
            </section>

            {/* Section 11 */}
            <section id="sec-11" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                11. Acceptable Use
              </h2>
              <p>The Customer and Authorized Users must not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use SecureCMS for unlawful, fraudulent, deceptive, abusive, or unauthorized activities.</li>
                <li>Attempt to gain unauthorized access to SecureCMS, another customer&apos;s tenant, SecuredApp systems, or related infrastructure.</li>
                <li>Circumvent security controls, rate limits, tenant isolation, authentication mechanisms, or access restrictions.</li>
                <li>Reverse engineer, decompile, disassemble, or attempt to derive source code from SecureCMS except to the extent such restriction is prohibited by applicable law.</li>
                <li>Upload malware, ransomware, malicious scripts, destructive code, or content intended to disrupt the Services.</li>
                <li>Use SecureCMS to process personal data without an appropriate lawful basis or required authorization.</li>
                <li>Transmit more personal data through an API, webhook, SDK, or integration than is reasonably necessary for the configured purpose.</li>
                <li>Use SecureCMS to conduct security testing against third-party systems without authorization.</li>
                <li>Resell, sublicense, lease, or provide access to SecureCMS to third parties except as expressly permitted by the applicable agreement.</li>
                <li>Remove proprietary notices or attempt to misrepresent ownership of SecureCMS.</li>
              </ul>
            </section>

            {/* Section 12 to 16 */}
            <section id="sec-12" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                12. APIs, SDKs, Webhooks and Integrations
              </h2>
              <p>
                SecureCMS may expose APIs, SDKs, webhooks, middleware, and integration interfaces. Their use is subject to applicable technical documentation, authentication requirements, rate limits, security requirements, and plan limitations.
              </p>
              <p>
                The Customer is responsible for the security of API keys, client credentials, webhook secrets, certificates, and integration credentials under its control. The Customer is responsible for validating inbound webhook authenticity where SecuredApp provides verification mechanisms.
              </p>
            </section>

            <section id="sec-13" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                13. Third-Party Services
              </h2>
              <p>
                SecureCMS may integrate with or depend on third-party services such as identity providers, cloud infrastructure providers, communications providers, analytics services, security services, and other external systems. Third-party services may be subject to separate terms and privacy policies. SecuredApp is not responsible for third-party services that are outside its reasonable control.
              </p>
            </section>

            <section id="sec-14" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                14. Intellectual Property
              </h2>
              <p>
                SecureCMS, including its software, source code, object code, architecture, interfaces, documentation, designs, trademarks, logos, and related intellectual property, is owned by or licensed to SecuredApp and is protected by applicable intellectual property laws. Except for the limited rights expressly granted under these Terms or an applicable agreement, no rights are granted to the Customer in SecureCMS or SecuredApp&apos;s intellectual property.
              </p>
            </section>

            <section id="sec-15" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                15. Feedback
              </h2>
              <p>
                If the Customer provides suggestions, recommendations, bug reports, or other feedback concerning SecureCMS, SecuredApp may use that feedback without restriction or compensation, provided that doing so does not disclose Customer Confidential Information or personal data except as permitted by law.
              </p>
            </section>

            <section id="sec-16" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                16. Confidentiality
              </h2>
              <p>
                Each party may receive non-public information from the other party that is designated as confidential or that reasonably should be understood to be confidential (&quot;Confidential Information&quot;). Each party will use reasonable measures to protect the other party&apos;s Confidential Information and will use it only for purposes related to the relationship.
              </p>
            </section>

            {/* Section 17 to 21 */}
            <section id="sec-17" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                17. Service Availability and Maintenance
              </h2>
              <p>
                SecuredApp will use commercially reasonable efforts to keep SecureCMS available in accordance with the applicable service plan or service-level agreement. The Services may occasionally be unavailable due to maintenance, upgrades, emergency security measures, infrastructure failures, or circumstances beyond SecuredApp&apos;s reasonable control.
              </p>
            </section>

            <section id="sec-18" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                18. Changes to the Services
              </h2>
              <p>
                SecuredApp may update, improve, modify, or discontinue features of SecureCMS from time to time. We will use reasonable efforts to avoid materially reducing core functionality during an active subscription term, except where changes are required for security, legal, regulatory, technical, or third-party dependency reasons.
              </p>
            </section>

            <section id="sec-19" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                19. Fees and Subscription
              </h2>
              <p>
                Where SecureCMS is provided on a paid subscription basis, fees, billing periods, usage limits, renewal terms, taxes, and payment obligations will be specified in the applicable order form, subscription agreement, or commercial proposal. Unless otherwise agreed in writing, fees are exclusive of applicable taxes and governmental charges.
              </p>
            </section>

            <section id="sec-20" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                20. Suspension
              </h2>
              <p>
                SecuredApp may temporarily suspend access to SecureCMS where reasonably necessary to protect the Services, other customers, or individuals; respond to a security incident; address unlawful or abusive use; comply with law or an authority&apos;s direction; or address material non-payment or breach.
              </p>
            </section>

            <section id="sec-21" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                21. Termination
              </h2>
              <p>
                Either party may terminate the applicable subscription or agreement in accordance with its terms. SecuredApp may terminate or suspend an account for a material breach that remains uncured after applicable notice and cure requirements.
              </p>
              <p>
                Upon termination, access to SecureCMS may cease. Subject to the applicable agreement, the Customer may request export or return of Customer Data during a defined transition period. After the applicable retention or transition period, Customer Data may be deleted or securely disposed of.
              </p>
            </section>

            {/* Section 22 to 26 */}
            <section id="sec-22" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                22. Disclaimers
              </h2>
              <p>
                To the maximum extent permitted by applicable law, SecureCMS is provided on an &quot;as available&quot; and &quot;as is&quot; basis, subject to the express commitments in the applicable agreement. SecuredApp does not warrant that SecureCMS will be uninterrupted, error-free, or suitable for every particular regulatory, business, or technical requirement.
              </p>
              <p>
                SecureCMS is a technology platform and does not provide legal, tax, compliance, cybersecurity certification, or professional advice. Use of SecureCMS does not by itself establish compliance with the DPDP Act, any regulation, contractual obligation, industry standard, or regulatory requirement.
              </p>
            </section>

            <section id="sec-23" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                23. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law and subject to any mandatory liability that cannot legally be excluded, neither party will be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of profits, revenue, business opportunities, or goodwill arising from the Services.
              </p>
              <p>
                The aggregate liability of SecuredApp arising out of or relating to SecureCMS and these Terms will be limited to the amount paid or payable by the Customer for the Services during the applicable period specified in the governing commercial agreement.
              </p>
            </section>

            <section id="sec-24" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                24. Indemnification
              </h2>
              <p>
                To the extent provided in the applicable agreement and permitted by law, each party will be responsible for claims arising from its own breach of law, material contractual obligations, or misuse of the other party&apos;s intellectual property.
              </p>
            </section>

            <section id="sec-25" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                25. Force Majeure
              </h2>
              <p>
                Neither party will be responsible for delay or failure caused by events beyond its reasonable control, including natural disasters, war, terrorism, civil disturbance, epidemic or pandemic events, governmental actions, telecommunications failures, cloud or infrastructure outages outside reasonable control, power failures, or other comparable events.
              </p>
            </section>

            <section id="sec-26" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                26. Governing Law and Dispute Resolution
              </h2>
              <p>
                Unless otherwise agreed in writing, these Terms will be governed by the <strong>laws of India</strong>, without regard to conflict-of-law principles.
              </p>
              <p>
                Any dispute-resolution procedure, jurisdiction, arbitration mechanism, venue, and seat should be specified in the applicable commercial agreement. For enterprise and regulated customers, the signed agreement will control.
              </p>
            </section>

            {/* Section 27 to 32 */}
            <section id="sec-27" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                27. Notices
              </h2>
              <p>
                Operational and legal notices may be provided through the SecureCMS dashboard, registered email address, contractual contact channels, or other reasonable electronic means. The Customer is responsible for maintaining current contact details.
              </p>
            </section>

            <section id="sec-28" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                28. Changes to These Terms
              </h2>
              <p>
                SecuredApp may update these Terms from time to time. The updated version will identify the revised effective date or version. Material changes will be communicated through reasonable means where required. Continued use of SecureCMS after the effective date of an updated version constitutes acceptance to the extent permitted by law and the applicable agreement.
              </p>
            </section>

            <section id="sec-29" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                29. Severability
              </h2>
              <p>
                If any provision of these Terms is found invalid or unenforceable, that provision will be modified to the minimum extent necessary to make it enforceable, and the remaining provisions will continue in effect.
              </p>
            </section>

            <section id="sec-30" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                30. Entire Agreement and Order of Precedence
              </h2>
              <p>
                These Terms, together with the applicable order form, subscription agreement, DPA, SLA, Documentation, and other expressly incorporated documents, constitute the agreement governing use of SecureCMS. If there is a conflict, the order of precedence specified in the applicable commercial agreement will apply.
              </p>
            </section>

            <section id="sec-31" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                31. Contact Information
              </h2>
              <p>For questions regarding these Terms, SecureCMS, or contractual matters:</p>
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-1.5 text-sm">
                <div><strong>Product:</strong> SecureCMS by SecuredApp</div>
                <div><strong>Email:</strong> <a href="mailto:himanshu@securedapp.in" className="text-tertiary underline">himanshu@securedapp.in</a></div>
                <div><strong>Website:</strong> <a href="https://securedapp.io" target="_blank" rel="noreferrer" className="text-tertiary underline">securedapp.io</a></div>
              </div>
            </section>

            {/* Section 32 */}
            <section id="sec-32" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                32. Regulatory Reference & Document Control
              </h2>
              <p>
                These Terms are intended to support use of SecureCMS in an Indian privacy and data protection context, including the Digital Personal Data Protection Act, 2023 and the Digital Personal Data Protection Rules, 2025, as applicable. The notified Rules were published on 14 November 2025 and provide a phased commencement framework. Nothing in these Terms overrides a mandatory requirement of applicable law.
              </p>

              {/* Table */}
              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Document Control</div>
                <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
                  <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800 text-xs sm:text-sm">
                    <thead className="bg-slate-100 dark:bg-slate-900">
                      <tr>
                        <th className="px-4 py-2.5 text-left font-semibold text-slate-900 dark:text-white">Version</th>
                        <th className="px-4 py-2.5 text-left font-semibold text-slate-900 dark:text-white">Effective Date</th>
                        <th className="px-4 py-2.5 text-left font-semibold text-slate-900 dark:text-white">Owner</th>
                        <th className="px-4 py-2.5 text-left font-semibold text-slate-900 dark:text-white">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      <tr>
                        <td className="px-4 py-2.5 font-medium text-slate-900 dark:text-white">1.0</td>
                        <td className="px-4 py-2.5">11 August 2026</td>
                        <td className="px-4 py-2.5">SecuredApp</td>
                        <td className="px-4 py-2.5 text-blue-500 font-semibold">Draft for legal review</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 space-y-1">
                <div className="font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Reference Sources:</div>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Digital Personal Data Protection Act, 2023 &mdash; Ministry of Electronics and Information Technology (MeitY).</li>
                  <li>Digital Personal Data Protection Rules, 2025 &mdash; Ministry of Electronics and Information Technology (MeitY), notified 14 November 2025.</li>
                </ul>
              </div>
            </section>

          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}

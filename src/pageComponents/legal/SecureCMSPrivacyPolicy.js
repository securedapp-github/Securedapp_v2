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
  ShieldCheck,
  Building,
  Mail,
  ChevronRight,
  ExternalLink
} from "lucide-react";

const tocItems = [
  { id: "notice", title: "Important Notice" },
  { id: "sec-1", title: "1. About SecureCMS" },
  { id: "sec-2", title: "2. Scope" },
  { id: "sec-3", title: "3. Categories of Personal Data We May Process" },
  { id: "sec-4", title: "4. How We Collect Personal Data" },
  { id: "sec-5", title: "5. Purposes of Processing" },
  { id: "sec-6", title: "6. Consent and Lawful Processing" },
  { id: "sec-7", title: "7. Role of SecureCMS and Customers" },
  { id: "sec-8", title: "8. Sharing and Disclosure of Personal Data" },
  { id: "sec-9", title: "9. Data Security" },
  { id: "sec-10", title: "10. Data Minimization and Hashing" },
  { id: "sec-11", title: "11. Cookies and Similar Technologies" },
  { id: "sec-12", title: "12. Google SSO and Third-Party Authentication" },
  { id: "sec-13", title: "13. Data Retention" },
  { id: "sec-14", title: "14. Data Subject / Data Principal Rights" },
  { id: "sec-15", title: "15. Grievance Redressal" },
  { id: "sec-16", title: "16. Children's Personal Data" },
  { id: "sec-17", title: "17. International Data Transfers & Locations" },
  { id: "sec-18", title: "18. Third-Party Service Providers" },
  { id: "sec-19", title: "19. Personal Data Breach & Security Incidents" },
  { id: "sec-20", title: "20. Changes to this Privacy Policy" },
  { id: "sec-21", title: "21. Contact and Privacy Information" },
  { id: "sec-22", title: "22. Definitions" },
  { id: "sec-23", title: "23. Regulatory Reference & Document Control" },
];

export default function SecureCMSPrivacyPolicy() {
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
    <div className="min-h-screen bg-white dark:bg-[#070e1c] text-slate-900 dark:text-slate-100 font-outfit antialiased selection:bg-tertiary/30">
      <MetaTags
        data={{
          title: "Privacy Policy | SecureCMS by SecureDApp",
          desc: "Official Privacy Policy for SecureCMS consent management platform, designed under India's Digital Personal Data Protection Act, 2023 (DPDP Act) and DPDP Rules, 2025.",
          keywords: "SecureCMS Privacy Policy, DPDP Act 2023, DPDP Rules 2025, Data Protection India, Consent Management Privacy Notice, SecureDApp",
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
              <span className="text-slate-900 dark:text-white font-semibold">Privacy Policy</span>
            </nav>

            {/* Document Navigation Tabs */}
            <div className="inline-flex p-1 rounded-lg bg-slate-200/70 dark:bg-slate-800/80 border border-slate-300/60 dark:border-slate-700/60 text-xs font-medium">
              <span className="px-3.5 py-1.5 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm font-semibold">
                Privacy Policy
              </span>
              <Link
                href="/securecms/terms-of-service"
                className="px-3.5 py-1.5 rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Title Area */}
          <div className="max-w-3xl">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-tertiary mb-2">
              Legal & Data Protection Notice
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
              SecureCMS Privacy Policy
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              A privacy and data protection notice for the SecureCMS consent management platform, designed with reference to India&apos;s Digital Personal Data Protection Act, 2023 (DPDP Act) and the DPDP Rules, 2025.
            </p>
          </div>

          {/* Document Metadata & Actions Toolbar */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <div><span className="font-semibold text-slate-700 dark:text-slate-200">Effective Date:</span> 11 August 2026</div>
              <div><span className="font-semibold text-slate-700 dark:text-slate-200">Version:</span> 1.0</div>
              <div><span className="font-semibold text-slate-700 dark:text-slate-200">Entity:</span> SecureCMS by SecuredApp</div>
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
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Document</span>
              </button>
              <a
                href="/assets/legal/SECURECMS_Privacy.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 font-medium transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF Copy</span>
              </a>
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
            <section id="notice" className="p-5 rounded-lg border-l-4 border-amber-500 bg-amber-500/5 dark:bg-amber-500/10 text-slate-800 dark:text-slate-200 space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                Important Notice
              </h2>
              <p className="text-sm leading-relaxed">
                This Privacy Policy is a product-level template prepared for SecureCMS by SecuredApp and is intended to describe how SecureCMS handles personal data in connection with its website, dashboard, APIs, SDKs, consent-management services, and related support services. It should be reviewed and approved by the legal/privacy team of the entity that operates SecureCMS before publication. Replace bracketed contact and entity placeholders before use.
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                This Policy is designed with reference to India&apos;s <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> and the <strong>Digital Personal Data Protection Rules, 2025</strong>. The notified Rules were published by the Ministry of Electronics and Information Technology (MeitY) on 14 November 2025 and provide a phased commencement framework.
              </p>
            </section>

            {/* Section 1 */}
            <section id="sec-1" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                1. About SecureCMS
              </h2>
              <p>
                SecureCMS is a consent management and data governance platform provided by SecuredApp. It enables organizations (each a &quot;Customer&quot; or &quot;Data Fiduciary&quot;, as applicable) to configure purposes of processing, collect and manage consent, maintain consent records, support withdrawal of consent, manage data subject requests, maintain policy versions, provide audit trails, and integrate consent enforcement with customer applications and systems.
              </p>
              <p>
                SecureCMS may process personal data in two principal contexts:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>First, Direct Service Operations (as Data Fiduciary):</strong> SecuredApp may process information relating to its own customers, administrators, website visitors, users, and business contacts for operating and securing its own services.
                </li>
                <li>
                  <strong>Second, Customer Processing (as Data Processor):</strong> SecureCMS may process personal data submitted by a Customer on the Customer&apos;s behalf. In the second context, the Customer generally determines the purposes and means of processing and SecureCMS acts as a Data Processor or service provider to the Customer, subject to the applicable agreement and law.
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section id="sec-2" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                2. Scope
              </h2>
              <p>
                This Policy applies to personal data processed through SecureCMS-controlled websites, web applications, dashboards, APIs, SDKs, hosted consent interfaces, support channels, and related services. It also describes the privacy practices applicable when SecuredApp receives information directly from individuals or processes information for its business operations.
              </p>
              <p className="text-sm italic text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/40 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                Where SecureCMS is deployed for a Customer and the Customer controls the purposes of processing, the Customer&apos;s own privacy notice and instructions may apply to the Customer&apos;s processing. Individuals should contact the relevant Customer/Data Fiduciary for questions about data collected by that Customer through SecureCMS.
              </p>
            </section>

            {/* Section 3 */}
            <section id="sec-3" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                3. Categories of Personal Data We May Process
              </h2>
              <p>
                Depending on the service and configuration, SecureCMS may process the following categories:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Account and identity information:</strong> name, work email address, phone/mobile number, username, organization, role, and account identifiers.
                </li>
                <li>
                  <strong>Authentication information:</strong> authentication identifiers, Google SSO identifiers where enabled, login metadata, session information, and security-related records.
                </li>
                <li>
                  <strong>Consent information:</strong> consent status, purpose, policy/version identifier, timestamp, consent method, withdrawal information, consent receipt/reference ID, and related audit information.
                </li>
                <li>
                  <strong>Technical information:</strong> IP address, browser and device information, operating system, application version, approximate location derived from IP where necessary, logs, diagnostics, and security events.
                </li>
                <li>
                  <strong>Integration information:</strong> API identifiers, tenant/application identifiers, webhook configuration metadata, integration status, and technical request/response metadata.
                </li>
                <li>
                  <strong>Support and communications information:</strong> information contained in support tickets, correspondence, feedback, and service requests.
                </li>
                <li>
                  <strong>Customer-submitted information:</strong> personal data that a Customer chooses to process through SecureCMS. This may include identifiers such as email address, mobile number, name, customer reference, or other fields configured by the Customer.
                </li>
                <li>
                  <strong>Cookie and similar technology data:</strong> device identifiers and preference/consent information used by the SecureCMS Cookie Management functionality, where enabled.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="sec-4" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                4. How We Collect Personal Data
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Directly from you:</strong> when you create an account, sign in, contact us, request support, or otherwise interact with SecureCMS.</li>
                <li><strong>From your organization or Customer:</strong> when your organization provisions your SecureCMS account or submits information for processing.</li>
                <li><strong>Automatically from browsers, devices, applications, APIs, SDKs, and security infrastructure:</strong> when you use SecureCMS.</li>
                <li><strong>From third-party identity providers:</strong> such as Google, when SSO is enabled and you choose to authenticate using that provider.</li>
                <li><strong>From integrations configured by a Customer:</strong> where the Customer is responsible for ensuring that it has an appropriate lawful basis and authority to provide the data.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="sec-5" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                5. Purposes of Processing
              </h2>
              <p>We may process personal data for the following purposes, as applicable:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing, operating, maintaining, and improving SecureCMS.</li>
                <li>Creating and administering customer and user accounts.</li>
                <li>Authenticating users and preventing unauthorized access.</li>
                <li>Collecting, recording, managing, reviewing, and withdrawing consent on behalf of Customers.</li>
                <li>Maintaining consent records, policy versions, audit records, and compliance evidence.</li>
                <li>Processing and routing data subject requests, grievances, and related workflow information as configured by Customers.</li>
                <li>Operating APIs, webhooks, SDKs, integrations, notifications, and enforcement mechanisms.</li>
                <li>Monitoring availability, performance, reliability, and security.</li>
                <li>Detecting, preventing, and investigating fraud, abuse, security incidents, and unauthorized activity.</li>
                <li>Providing customer support, troubleshooting, and service communications.</li>
                <li>Meeting legal, regulatory, contractual, accounting, audit, and record-keeping obligations.</li>
                <li>Protecting the rights, property, safety, and security of SecuredApp, its customers, users, and others.</li>
                <li>Other purposes disclosed at the point of collection or authorized by the applicable Customer and law.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="sec-6" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                6. Consent and Lawful Processing
              </h2>
              <p>
                SecureCMS provides technical functionality that enables Customers to obtain, record, manage, review, and withdraw consent where consent is the applicable basis for processing. The Customer is responsible for determining the appropriate purpose, notice, lawful basis, consent language, data fields, retention period, and processing configuration for its own activities.
              </p>
              <p>
                Where SecureCMS processes data for its own purposes, SecuredApp will process the data in accordance with applicable law and the disclosures in this Policy. Where consent is required, we will seek consent in an appropriate manner and provide mechanisms for withdrawal where applicable.
              </p>
            </section>

            {/* Section 7 */}
            <section id="sec-7" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                7. Role of SecureCMS and Customers
              </h2>
              <p>
                For customer-submitted personal data, SecureCMS generally acts on documented instructions from the Customer. The Customer remains responsible for determining why the data is processed, ensuring that the processing is lawful, providing required notices, configuring consent and purpose records appropriately, responding to individual requests where it is the responsible Data Fiduciary, and ensuring that integrations and onward disclosures are authorized.
              </p>
              <p>
                SecureCMS may act as a Data Fiduciary for information collected for its own account management, security, billing, support, website, and business operations. The applicable role depends on the specific processing activity.
              </p>
            </section>

            {/* Section 8 */}
            <section id="sec-8" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                8. Sharing and Disclosure of Personal Data
              </h2>
              <p>We may disclose personal data only as necessary for legitimate and authorized purposes, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To the Customer/Data Fiduciary that configured or requested the relevant SecureCMS processing.</li>
                <li>To infrastructure, hosting, security, communications, identity, analytics, and other service providers acting under appropriate contractual or technical controls.</li>
                <li>To professional advisers, auditors, insurers, or other vendors where reasonably necessary for business operations and subject to confidentiality obligations.</li>
                <li>To governmental, regulatory, law-enforcement, or judicial authorities where required or permitted by applicable law.</li>
                <li>In connection with a corporate transaction such as a merger, acquisition, restructuring, financing, or sale of assets, subject to applicable legal requirements.</li>
                <li>With your authorization or where otherwise permitted by applicable law.</li>
              </ul>
              <p className="font-semibold text-slate-900 dark:text-white">
                SecureCMS does not sell personal data for monetary consideration as a standalone data-brokerage activity.
              </p>
            </section>

            {/* Section 9 */}
            <section id="sec-9" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                9. Data Security
              </h2>
              <p>
                SecureCMS is designed to apply reasonable security safeguards appropriate to the nature and risk of the processing. Depending on the deployment and service configuration, security measures may include encryption in transit, encryption at rest, access controls, role-based access control, tenant isolation, authentication controls, API authentication, mTLS or IP allowlisting where configured, logging and monitoring, backup controls, vulnerability management, secure development practices, and incident-response procedures.
              </p>
              <p>
                No method of transmission, storage, or electronic processing can be guaranteed to be completely secure. Customers are responsible for securing their own credentials, API keys, integration endpoints, devices, and systems connected to SecureCMS.
              </p>
            </section>

            {/* Section 10 */}
            <section id="sec-10" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                10. Data Minimization and Hashing
              </h2>
              <p>
                SecureCMS is designed to minimize the personal data retained by the platform where the service architecture permits. For certain identity-matching or consent-linking functions, SecureCMS may use cryptographic hashes or pseudonymous identifiers instead of retaining direct identifiers. A hash or pseudonymous identifier should not automatically be treated as anonymous data; its status depends on whether an individual can reasonably be identified using available means.
              </p>
              <p>
                Where a Customer requires plain personal data to be delivered through an authorized webhook or API integration, such processing will be governed by the Customer&apos;s configuration, applicable agreement, security controls, and applicable law. SecureCMS should not be configured to transmit more personal data than is necessary for the specified purpose.
              </p>
            </section>

            {/* Section 11 */}
            <section id="sec-11" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                11. Cookies and Similar Technologies
              </h2>
              <p>
                SecureCMS may use cookies, local storage, device identifiers, SDK identifiers, and similar technologies for essential functionality, security, authentication, preferences, analytics, and consent management, depending on the deployment.
              </p>
              <p>
                Where SecureCMS is used by a Customer to manage cookies on the Customer&apos;s website, the Customer is responsible for the website&apos;s cookie inventory, purposes, vendor disclosures, consent configuration, and implementation of appropriate notices. SecureCMS provides the technical controls for recording and enforcing the configured choices.
              </p>
            </section>

            {/* Section 12 */}
            <section id="sec-12" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                12. Google SSO and Third-Party Authentication
              </h2>
              <p>
                If Google Sign-In/SSO is enabled, SecureCMS may receive authentication information from Google, such as a unique Google account identifier, name, email address, profile information made available through the configured authentication flow, and authentication metadata. SecureCMS uses this information to authenticate the user and associate the user with the relevant SecureCMS account.
              </p>
              <p>
                SecureCMS does not require access to a user&apos;s Google password. Third-party authentication providers process information under their own privacy terms and policies.
              </p>
            </section>

            {/* Section 13 */}
            <section id="sec-13" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                13. Data Retention
              </h2>
              <p>
                We retain personal data only for as long as reasonably necessary for the purposes described in this Policy, to provide the services, comply with contractual and legal obligations, maintain security and audit records, resolve disputes, and enforce agreements.
              </p>
              <p>
                For Customer data, retention may be determined by the Customer&apos;s configuration and contractual instructions, subject to applicable law. Consent and audit records may require longer retention where necessary to demonstrate compliance or meet a legal obligation.
              </p>
              <p>
                When personal data is no longer required, SecureCMS may delete, anonymize, aggregate, or securely dispose of it, subject to applicable retention obligations and backup/technical limitations.
              </p>
            </section>

            {/* Section 14 */}
            <section id="sec-14" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                14. Data Subject / Data Principal Rights
              </h2>
              <p>
                Subject to applicable law and the circumstances of processing, individuals may have rights including access to information about their personal data, correction and updating, erasure, grievance redressal, withdrawal of consent where consent is the basis of processing, and nomination/other rights provided by applicable law.
              </p>
              <p>
                Where SecureCMS processes data on behalf of a Customer, requests relating to that processing should ordinarily be made to the relevant Customer/Data Fiduciary. SecureCMS may assist the Customer in responding to such requests in accordance with its contractual obligations and applicable law.
              </p>
              <p>
                To exercise rights relating to SecuredApp&apos;s own processing, contact us using the details in Section 21. We may need to verify identity before fulfilling a request.
              </p>
            </section>

            {/* Section 15 */}
            <section id="sec-15" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                15. Grievance Redressal
              </h2>
              <p>
                If you have a privacy-related concern or grievance about processing performed by SecuredApp for its own purposes, you may contact our designated privacy/grievance contact using the details below. We will review and respond in accordance with applicable law.
              </p>
              <p>
                For data processed by a SecureCMS Customer, the Customer&apos;s designated grievance/contact mechanism may be the appropriate first point of contact.
              </p>
            </section>

            {/* Section 16 */}
            <section id="sec-16" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                16. Children&apos;s Personal Data
              </h2>
              <p>
                SecureCMS is primarily intended for business and enterprise use. Customers are responsible for determining whether their processing involves children and for configuring age-related notices, consent, verification, and safeguards as required by applicable law.
              </p>
              <p>
                Where SecureCMS processes children&apos;s personal data on behalf of a Customer, the Customer must provide appropriate instructions and ensure that the processing configuration complies with applicable requirements.
              </p>
            </section>

            {/* Section 17 */}
            <section id="sec-17" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                17. International Data Transfers and Processing Locations
              </h2>
              <p>
                SecureCMS may use cloud infrastructure and service providers located in India or other jurisdictions, depending on the deployment, hosting arrangement, Customer configuration, and service providers used. Where personal data is transferred or processed outside India, such processing will be subject to applicable law, contractual controls, and any applicable government restrictions or requirements.
              </p>
              <p>
                Enterprise Customers may require specific hosting or residency arrangements. Such requirements should be documented in the applicable contract or order form.
              </p>
            </section>

            {/* Section 18 */}
            <section id="sec-18" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                18. Third-Party Service Providers
              </h2>
              <p>
                SecureCMS may use third-party providers for cloud hosting, databases, authentication, communications, monitoring, security, analytics, customer support, and other infrastructure required to provide the service. We seek to use providers that provide appropriate security and confidentiality commitments and to limit access to personal data to what is necessary.
              </p>
              <p>
                A current sub-processor/service-provider list may be maintained separately where required by the applicable Customer agreement.
              </p>
            </section>

            {/* Section 19 */}
            <section id="sec-19" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                19. Personal Data Breach and Security Incidents
              </h2>
              <p>
                SecureCMS maintains processes for detecting, assessing, containing, investigating, and responding to security incidents in accordance with applicable law and contractual obligations. Where SecureCMS processes Customer data as a Data Processor, we will follow the incident-notification and cooperation requirements agreed with the Customer and applicable law.
              </p>
              <p>
                Customers should maintain accurate security and privacy contacts so that incident communications can be made without unnecessary delay.
              </p>
            </section>

            {/* Section 20 */}
            <section id="sec-20" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                20. Changes to this Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes to SecureCMS, applicable law, regulatory requirements, security practices, or business operations. Material changes will be communicated through appropriate channels where required. The latest version will identify its effective date and version number.
              </p>
            </section>

            {/* Section 21 */}
            <section id="sec-21" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                21. Contact and Privacy Information
              </h2>
              <p>For privacy questions, requests, or grievances relating to SecuredApp&apos;s own processing, contact:</p>
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-1.5 text-sm">
                <div><strong>Brand:</strong> SecureCMS by SecuredApp</div>
                <div><strong>Privacy / Grievance Email:</strong> <a href="mailto:himanshu@securedapp.io" className="text-tertiary underline">himanshu@securedapp.io</a></div>
                <div><strong>Registered Office:</strong> Bangalore, India</div>
                <div><strong>Website:</strong> <a href="https://securedapp.io" target="_blank" rel="noreferrer" className="text-tertiary underline">securedapp.io</a></div>
              </div>
            </section>

            {/* Section 22 */}
            <section id="sec-22" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                22. Definitions
              </h2>
              <dl className="space-y-3">
                <div>
                  <dt className="font-bold text-slate-900 dark:text-white">&ldquo;Personal Data&rdquo;</dt>
                  <dd className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 text-sm">
                    means data about an individual who is identifiable by or in relation to such data, as applicable under the DPDP Act.
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900 dark:text-white">&ldquo;Data Principal&rdquo;</dt>
                  <dd className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 text-sm">
                    means the individual to whom the personal data relates, as defined under applicable law.
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900 dark:text-white">&ldquo;Data Fiduciary&rdquo;</dt>
                  <dd className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 text-sm">
                    means the person who alone or in conjunction with other persons determines the purpose and means of processing personal data, as defined under the DPDP Act.
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900 dark:text-white">&ldquo;Data Processor&rdquo;</dt>
                  <dd className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 text-sm">
                    means a person who processes personal data on behalf of a Data Fiduciary, as defined under the DPDP Act.
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900 dark:text-white">&ldquo;Consent Manager&rdquo;</dt>
                  <dd className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 text-sm">
                    has the meaning assigned under the DPDP Act and applicable Rules. SecureCMS should not be described as a registered Consent Manager unless and until the relevant legal entity is registered and authorized to operate in that capacity.
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900 dark:text-white">&ldquo;Processing&rdquo;</dt>
                  <dd className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 text-sm">
                    includes an automated operation or set of operations performed on digital personal data, as applicable under the DPDP Act.
                  </dd>
                </div>
              </dl>
            </section>

            {/* Section 23 */}
            <section id="sec-23" className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                23. Regulatory Reference & Document Control
              </h2>
              <p>
                This Policy is intended to be read with the Digital Personal Data Protection Act, 2023 and the Digital Personal Data Protection Rules, 2025, as applicable and as they come into force. The DPDP Act was enacted on 11 August 2023. The notified DPDP Rules, 2025 were published on 14 November 2025 and contain phased commencement provisions.
              </p>
              <p>
                Nothing in this Policy limits any right or obligation that cannot lawfully be limited or excluded under applicable law.
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
                        <td className="px-4 py-2.5">SecuredApp / Privacy & Legal</td>
                        <td className="px-4 py-2.5 text-tertiary font-semibold">Published</td>
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

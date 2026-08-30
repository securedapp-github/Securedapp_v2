import React from 'react';
import {
  ShieldCheck,
  Zap,
  KeyRound,
  WifiOff,
  Lock,
  Palette,
  FileCode2,
  Smartphone,
  Shield,
  Layers,
  Database
} from 'lucide-react';

export const statsMetrics = [
  {
    metric: "< 15 KB",
    title: "Zero-Dependency Bundle",
    desc: "Ultra-fast load times with zero impact on Core Web Vitals (LCP/FID).",
    icon: <Zap className="w-5 h-5 text-tertiary" />
  },
  {
    metric: "0 Shared Secrets",
    title: "Asymmetric RS256 Cryptography",
    desc: "Private keys stay on your servers; public verification via JWKS.",
    icon: <KeyRound className="w-5 h-5 text-tertiary" />
  },
  {
    metric: "100% DPDP Ready",
    title: "Indian DPDP Act 2023 Compliant",
    desc: "Purpose limitation, affirmative opt-in, and instant consent withdrawal.",
    icon: <ShieldCheck className="w-5 h-5 text-tertiary" />
  },
  {
    metric: "99.9% Offline Sync",
    title: "Offline-First Local Storage Queue",
    desc: "Flawless UX on flaky connections with automated background synchronization.",
    icon: <WifiOff className="w-5 h-5 text-tertiary" />
  }
];

export const bentoFeatures = [
  {
    title: "🛡️ True Zero-Data-Leak Script Governance",
    tagline: "Tag-Based Blocking",
    desc: "Converts scripts to type=\"text/plain\" with purpose tags, ensuring browsers completely ignore them until authorized. Centrally inject approved tags dynamically with idempotent execution cache.",
    icon: <Lock className="w-6 h-6 text-tertiary" />
  },
  {
    title: "🔐 Cryptographic Identity Sync (RS256 + JWKS)",
    tagline: "Zero-Secret Verification",
    desc: "Your IdP signs user auth tokens using RS256. SecureCMS verifies signatures dynamically against your /.well-known/jwks.json endpoint to sync preferences across all devices.",
    icon: <KeyRound className="w-6 h-6 text-tertiary" />
  },
  {
    title: "📴 Offline-First Resilience",
    tagline: "Background Sync Queue",
    desc: "Immediate local persistence in localStorage ensures unblocked UI interactions even without internet connectivity. Background sync engine flushes pending decisions automatically on reconnect.",
    icon: <WifiOff className="w-6 h-6 text-tertiary" />
  },
  {
    title: "🎨 Fully Dynamic Brand Theme Engine",
    tagline: "Custom Design Tokens",
    desc: "Fully customizable via CSS variables: primary brand colors, hover states, card backgrounds, border radii, and typography with WCAG 2.2 AA compliance.",
    icon: <Palette className="w-6 h-6 text-tertiary" />
  },
  {
    title: "📜 Immutable Audit Trails & Policy Versioning",
    tagline: "Policy Term Matching",
    desc: "Every consent event generates a unique consent_id, ISO timestamp, tenant ID, app ID, and policy_version. Terms updates automatically trigger renewal prompts only when versions change.",
    icon: <FileCode2 className="w-6 h-6 text-tertiary" />
  },
  {
    title: "📱 Native Mobile & Headless REST APIs",
    tagline: "Headless Privacy APIs",
    desc: "Full direct REST API support for iOS Swift, Android Kotlin, React Native, Flutter, and server-side microservices without loading webviews.",
    icon: <Smartphone className="w-6 h-6 text-tertiary" />
  }
];

export const workflowSteps = [
  {
    step: "Step 1",
    title: "Park Tracking Tags",
    desc: "Add type=\"text/plain\" and data-cc-purpose=\"analytics\" to inline or external tags. The browser treats them as plain text with zero outgoing network telemetry.",
    codeSnippet: `<script type="text/plain" data-cc-purpose="analytics" src="https://example.com/tracker.js"></script>`
  },
  {
    step: "Step 2",
    title: "Collect Granular User Consent",
    desc: "The SDK checks cached consent validity and policy versions. If needed, it renders a branded modal for category-level consent (Essential, Analytics, Marketing).",
    codeSnippet: `CookieConsent.init('Tenant_ID', 'App_ID');`
  },
  {
    step: "Step 3",
    title: "Cryptographically Link & Activate",
    desc: "The SDK swaps approved tags to text/javascript for immediate execution. When the user logs in, CookieConsent.loginUser(jwt) binds preferences across all devices.",
    codeSnippet: `CookieConsent.loginUser(userJwtToken);`
  }
];

export const cookieCategories = [
  {
    id: "necessary",
    name: "Strictly Necessary",
    required: true,
    desc: "Essential cookies required for fundamental website operations, authentication, security, and session state.",
    examples: ["session_id", "csrf_token", "sec_auth"]
  },
  {
    id: "functional",
    name: "Functional & Preferences",
    required: false,
    desc: "Cookies that enable enhanced features like saved language preferences, custom UI themes, and location settings.",
    examples: ["lang_pref", "theme_mode", "user_tz"]
  },
  {
    id: "analytics",
    name: "Analytics & Performance",
    required: false,
    desc: "Helps us measure site traffic, identify aggregate visitor behavior, and optimize user experience.",
    examples: ["_ga", "_gid", "mixpanel_id"]
  },
  {
    id: "marketing",
    name: "Targeting & Advertising",
    required: false,
    desc: "Used by advertising partners to build visitor profiles and deliver personalized, relevant advertisements.",
    examples: ["_fbp", "gcl_au", "_rdt_uuid"]
  }
];

export const complianceMatrix = [
  {
    feature: "Affirmative Explicit Consent",
    legacy: "Silent tracking or pre-checked opt-ins",
    secureCms: "Complete tag-based and dynamic script quarantine until affirmative grant"
  },
  {
    feature: "Simple Withdrawal / Edit",
    legacy: "Hidden or non-functional settings",
    secureCms: "Instant global CookieConsent.openPreferences() trigger for footers and menus"
  },
  {
    feature: "Cross-Device Continuity",
    legacy: "Re-prompts on every device & browser",
    secureCms: "Asymmetric RS256 JWT + JWKS identity linking syncs preferences seamlessly"
  },
  {
    feature: "Policy Version Invalidation",
    legacy: "Outdated consents persist indefinitely",
    secureCms: "Automatic version matching re-prompts only when policy terms change"
  },
  {
    feature: "Audit-Proof Recordkeeping",
    legacy: "Unverified client-side cookies",
    secureCms: "Immutable server audit logs with unique consent_id, timestamps, and device fingerprints"
  }
];

export const faqsData = [
  [
    {
      q: "How quickly can we integrate the SDK into an existing production web application?",
      a: "Basic integration takes under 10 minutes. Simply include the CSS/JS bundle, call CookieConsent.init(tenantId, appId), and add type=\"text/plain\" with data-cc-purpose to existing third-party tracking tags."
    },
    {
      q: "Do we need to share database credentials or API secrets with SecureCMS?",
      a: "No. SecureCMS utilizes asymmetric RS256 public key cryptography. Your backend signs tokens with your private key, and SecureCMS verifies them via your public /.well-known/jwks.json endpoint."
    },
    {
      q: "How does the SDK behave when a user is offline or has intermittent network connectivity?",
      a: "The SDK operates with an offline-first architecture. Consent decisions are stored locally in localStorage to immediately unblock the UI, while an offline queue automatically flushes pending records to the backend upon reconnect."
    },
    {
      q: "Can we use this platform for mobile apps without loading a webview?",
      a: "Yes. SecureCMS provides comprehensive, direct REST APIs for iOS Swift, Android Kotlin, Flutter, and React Native applications."
    }
  ]
];

import { Provider } from "react-redux";
import { mainStore } from "../redux/store";
import "../styles/globals.css";
import dynamic from "next/dynamic";
import { Nunito_Sans, Outfit, Playfair_Display, Poppins } from "next/font/google";
import Script from "next/script";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});
const ToastContainer = dynamic(() => import("react-toastify").then((mod) => mod.ToastContainer), { ssr: false });

/* ── Critical layout & Home page stylesheets (loaded synchronously to prevent FOUC) ── */
import "../components/common/ProductServiceHero.css";
import "../components/common/BrandLogos.css";
import "../components/common/SectionTitle.css";
import "../components/common/Testimonials.css";
import "../components/footer/Footer.css";
import "../components/navbar/Navbar.css";
import "../components/productService/BenefitsCard.css";
import "../components/productService/FeatureCard.css";
import "../components/productService/ProductCard.css";
import "../components/productService/HowItWorksCard.css";
import "../components/productService/WhyChooseCard.css";
import "../components/productService/ProductWhyCard.css";
import "../pageComponents/home/HomePage.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { solidityShieldScanStore } from "../SolidityShield/redux/store";
const ScanNowModal = dynamic(() => import("../SolidityShield/components/modal/ScanNowModal"), { ssr: false });
const PaymentModal = dynamic(() => import("../SolidityShield/components/modal/PaymentModal"), { ssr: false });
const RequestQuoteModal = dynamic(() => import("../SolidityShield/components/modal/RequestQuoteModal"), { ssr: false });
import { useRouter } from "next/router";
import { MainLayout } from "../SolidityShield/components/sidebar/Layout";
import MetaTags from "../components/common/MetaTags";
import Loader from "../SolidityShield/components/common/Loader";
import { useEffect, useState } from "react";
import { setTheme } from "../redux/slices/themeSlice";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isSolidityShieldScan =
    router.asPath.includes("/solidity-shield-scan") &&
    router.asPath !== "/solidity-shield-scan/auth" &&
    router.asPath !== "/solidity-shield-scan/contact";
  const [isClient, setIsClient] = useState(false);
  const isMainPage = router.pathname === "/";

  useEffect(() => {
    setIsClient(true);
    
    // Dynamically load chat widget styling on component mount
    import("../components/chat/ChatWidget.css");
    import("react-chat-elements/dist/main.css");

    // Theme synchronization is now handled primarily by the Navbar component 
    // using localStorage. This effect ensures the initial mount matches.
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
    } else if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
    }

    // Dynamic loading of page-specific stylesheets to eliminate render-blocking CSS
    const path = router.pathname;

    if (path.includes("/about")) {
      import("../pageComponents/aboutUs/AboutUs.css");
    }
    if (path.includes("/audits")) {
      import("../pageComponents/auditsPage/Audits.css");
    }
    if (path.includes("/authors")) {
      import("../pageComponents/authors/Authors.css");
      import("../pageComponents/authors/AuthorProfile.css");
    }
    if (path.includes("/blog") || path.includes("/media") || path.includes("/white-paper")) {
      import("../pageComponents/blog/Blog.css");
      import("../pageComponents/blogpost/BlogPost.css");
      import("../pageComponents/media/Blog.css");
      import("../components/blog/BlogTag.css");
      import("../components/blog/BlogCard.css");
    }
    
    const isProductPage = [
      "/ai-blockchain-investigation-platform",
      "/blockchain-intelligence-and-forensic-platform",
      "/dpdp-compliance-platform",
      "/enterprise-hsm-key-management-platform",
      "/post-quantum-cryptography-platform",
      "/self-sovereign-identity",
      "/tokenization-platform",
      "/white-paper",
    ].some((p) => path.startsWith(p));
    
    if (isProductPage) {
      import("../pageComponents/product/Product.css");
    }

    const isServicePage = [
      "/audit-express",
      "/blockchain-web3-training-academy",
      "/crypto-aml-compliance-platform",
      "/dapp-smart-contract-security-audit-platform",
      "/defi-development-company",
      "/itgc-audit-and-compliance-services",
      "/nft-marketplace-development-company",
      "/rwa-smart-contract-audit",
      "/smart-contract-audit",
      "/solidity-smart-contract-vulnerabilities",
      "/sox-compliance-audit-platform",
      "/token-smart-contract-audit",
      "/web3-dapp-development-company",
      "/web3-identity-and-aml-compliance-platform",
      "/web3-security"
    ].some((p) => path.startsWith(p));
    
    if (isServicePage) {
      import("../pageComponents/service/Service.css");
    }

    if (path.startsWith("/solidity-shield-scan")) {
      import("../pageComponents/vulnerability/Vulnerability.css");
      import("../SolidityShield/components/auth/AuthScreenHeader.css");
      import("../SolidityShield/components/common/CustomButton.css");
      import("../SolidityShield/components/overview/ScanSummary.css");
      import("../SolidityShield/pages/contactUs/ContactUs.css");
      import("../SolidityShield/pages/vulnerabilityScan/VulnerabilityScan.css");
      import("../SolidityShield/pages/settings/Settings.css");
      import("../SolidityShield/pages/history/ScanHistory.css");
      import("../SolidityShield/pages/auditCertificate/AuditCertificate.css");
      import("../SolidityShield/pages/overview/Overview.css");
      import("../SolidityShield/pages/scanReport/ScanReport.css");
      import("../SolidityShield/components/common/CustomDivider.css");
      import("../SolidityShield/pages/billing/Billing.css");
      import("../SolidityShield/pages/pricing/Pricing.css");
      import("../SolidityShield/components/modal/ScanNowModal.css");
      import("../SolidityShield/components/overview/IssuesChart.css");
      import("../SolidityShield/pages/auth/LoginScreen.css");
      import("../SolidityShield/pages/auth/AuthScreen.css");
      import("../SolidityShield/components/overview/ChartCard.css");
      import("../SolidityShield/components/sidebar/Sidebar.css");
      import("../SolidityShield/components/header/Header.css");
      import("../SolidityShield/components/billing/BillingTable.css");
      import("../SolidityShield/components/common/Pagination.css");
      import("../SolidityShield/components/modal/RequestQuoteModal.css");
      import("../SolidityShield/components/history/ScanHistoryTable.css");
      import("../SolidityShield/components/auth/AuthButton.css");
      import("../SolidityShield/components/auth/AuthLogos.css");
      import("../SolidityShield/components/modal/PaymentModal.css");
      import("../SolidityShield/components/auth/AuthCard.css");
      import("../SolidityShield/components/auth/AuthInputField.css");
    }
    
    if (path.startsWith("/real-time-blockchain-threat-monitoring")) {
      import("../components/RTM/RTMOverview.css");
      import("../components/RTM/RTMThreats.css");
      import("../components/RTM/RTMMonitoring.css");
      import("../components/RTM/RTMHowItWorks.css");
      import("../components/RTM/RTMFeatures.css");
      import("../components/RTM/RTMUseCases.css");
      import("../components/RTM/RTMBenefits.css");
      import("../components/RTM/RTMPlans.css");
      import("../components/RTM/RTMFAQ.css");
      import("../components/RTM/RTMCaseStudy.css");
      import("../components/RTM/RTMTechnology.css");
      import("../components/RTM/HowItWorks.css");
      import("../components/RTM/UseCases.css");
      import("../components/RTM/Benefits.css");
      import("../components/RTM/Technology.css");
      import("../components/RTM/ContinuousBenefits.css");
      import("../components/RTM/ClientsSay.css");
      import("../components/RTM/MonitoringPlans.css");
      import("../components/RTM/SecureWatchFAQ.css");
      import("../components/RTM/SecureWatchCTA.css");
      import("../components/RTM/SecureWatchOverviewSection.css");
      import("../components/RTM/WhatIsSection.css");
      import("../components/RTM/FeaturesGridSection.css");
      import("../components/RTM/HowItWorksSection.css");
      import("../components/RTM/UseCasesSection.css");
      import("../components/RTM/SecureWatchHero.css");
      import("../components/RTM/EulerCaseStudySection.css");
      import("../components/RTM/SecureWatchNavbar.css");
      import("../components/RTM/RequestDemoModal.css");
    }
  }, [router.pathname]);

  return (
    <Provider store={mainStore}>
      <div className={`bg-primary dark:bg-secondary text-secondary dark:text-primary min-h-screen relative overflow-x-hidden ${nunitoSans.variable} ${outfit.variable} ${playfairDisplay.variable} ${poppins.variable}`}>
        <a href="#main-content" className="skip-nav-link">Skip to main content</a>
        {isClient && (
          <ToastContainer
            position="top-center"
            autoClose={2000}
            theme="dark"
            pauseOnHover
          />
        )}
        {isClient && isSolidityShieldScan && (
          <>
            <ScanNowModal />
            <PaymentModal />
            <RequestQuoteModal />
          </>
        )}
        {isSolidityShieldScan ? (
          <MainLayout>
            <MetaTags
              data={{
                title: "Solidity Shield Scan",
                desc: "Get your smart contracts audited here by SecureDapps's Solidity Shield with AI scanning.",
              }}
            />
            {isClient && <Loader />}
            <Component {...pageProps} />
          </MainLayout>
        ) : (
          <Component {...pageProps} />
        )}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-1BLEGKR4PP`}
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1BLEGKR4PP', { page_path: window.location.pathname });
          `}
        </Script>
      </div>
    </Provider>
  );
}

export default MyApp;

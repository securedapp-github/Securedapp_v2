"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/footer";
import MetaTags from "../../../components/common/MetaTags";
import HeroSection from "./sections/HeroSection";
import ProblemSection from "./sections/ProblemSection";
import CoreFeatures from "./sections/CoreFeatures";
import PillarsSection from "./sections/PillarsSection";
import IndustryMatrix from "./sections/IndustryMatrix";
import HowItWorksSimulator from "./sections/HowItWorksSimulator";
import SecurityCompliance from "./sections/SecurityCompliance";
import FAQSection from "./sections/FAQSection";
import EarlyAccessModal from "./components/EarlyAccessModal";
import BookMeetCta from "../../../components/common/bookMeetCta";

export default function SecureESignPage() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
    const handleOpenModal = () => setIsTrialModalOpen(true);
    window.addEventListener("open-trial-modal", handleOpenModal);
    return () => window.removeEventListener("open-trial-modal", handleOpenModal);
  }, []);

  return (
    <div className="product-container bg-primary dark:bg-secondary font-outfit min-h-screen transition-colors duration-300 overflow-x-hidden w-full max-w-full">
      <MetaTags
        data={{
          title: "Secure e-Sign: Government-Approved Digital Signing Platform | CDAC Backed",
          desc: "Legally valid digital signatures for Indian businesses. IT Act Section 3 & 3A compliant with dual Class 3 DSC and Aadhaar eSign, CDAC-backed PKI, and immutable audit trails.",
          keywords:
            "Secure e-Sign, digital signature India, CDAC eSign, Aadhaar eSign, Class 3 DSC, IT Act Section 3, electronic signature solution, legal digital signatures India, fintech KYC signing, e-tender digital signatures",
          image: "/assets/images/ProductPages/ss/hero.webp",
        }}
      />

      {/* Global Navigation */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="product overflow-x-hidden w-full max-w-full">
        <HeroSection onOpenTrialModal={() => setIsTrialModalOpen(true)} />
        <ProblemSection onOpenTrialModal={() => setIsTrialModalOpen(true)} />
        <CoreFeatures />
        <PillarsSection onOpenTrialModal={() => setIsTrialModalOpen(true)} />
        <IndustryMatrix />
        <HowItWorksSimulator onOpenTrialModal={() => setIsTrialModalOpen(true)} />
        <SecurityCompliance />
        <FAQSection />
      </main>

      {/* Global Footer */}
      <Footer />
      <BookMeetCta />

      {/* CRM Early Access Lead Capture Modal */}
      <EarlyAccessModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
      />
    </div>
  );
}

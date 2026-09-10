"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "../../components/navbar/Navbar";
import Hero from "./sections/Hero";
import Statitics from "./sections/Statistics";
import { reviews, faqHeaders, faqsData } from "./home.data";
import MetaTags from "../../components/common/MetaTags";

// Dynamically imported below-the-fold sections for optimal code-splitting and low TBT
const Features = dynamic(() => import("./sections/Features"), { ssr: true });
const Solutions = dynamic(() => import("./sections/solutions"), { ssr: true });
const HowItWorks = dynamic(() => import("./sections/HowItWorks"), { ssr: true });
const Services = dynamic(() => import("./sections/Services"), { ssr: true });
const Testimonials = dynamic(() => import("../../components/common/Testimonials"), { ssr: true });
const BrandLogos = dynamic(() => import("../../components/common/BrandLogos"), { ssr: true });
const FAQs = dynamic(() => import("../../components/common/FAQs"), { ssr: true });
const CTA = dynamic(() => import("./sections/CTA"), { ssr: true });
const Footer = dynamic(() => import("../../components/footer/footer"), { ssr: true });
const BookMeetCta = dynamic(() => import("../../components/common/bookMeetCta"), { ssr: false });

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="home">
      <MetaTags
        data={{
          title: "Real-Time Blockchain Threat Monitoring & Security | SecureDApp",
          desc: "SecureDApp offers blockchain security, smart contract audits, DApp development, and compliance services. Protect your digital assets today.",
          keywords:
            "blockchain security, smart contract audits, DApp development, compliance solutions, Layer 1 and Layer 2 chains, Ethereum security, Algorand security, Solana audits, Aptos blockchain, Hyperledger auditing, Binance Smart Chain security, DeFi protocol audits, NFT security, DAO audits, digital asset protection, non-custodial wallet security, custodial wallet protection, blockchain platform security, intellectual property protection, vulnerability detection blockchain",
          image: "/assets/images/ProductPages/ss/hero.webp",
        }}
      />
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <Statitics />
        <Features />
        <Solutions />
        <HowItWorks />
        <Services />
        <Testimonials reviews={reviews} />
        <br />
        <BrandLogos type="chains" />
        <FAQs faqHeaders={faqHeaders} faqsData={faqsData} />
        <CTA />
      </main>
      <Footer />
      <BookMeetCta />
    </div>
  );
};

export default Home;

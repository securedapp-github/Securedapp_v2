"use client";

import React, { useEffect } from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/Navbar";
import dynamic from "next/dynamic";
import Hero from "./sections/Hero";
import { reviews, faqHeaders, faqsData } from "./home.data";
import MetaTags from "../../components/common/MetaTags";

const Statitics = dynamic(() => import("./sections/Statistics"), { ssr: false });
const Features = dynamic(() => import("./sections/Features"), { ssr: false });
const Solutions = dynamic(() => import("./sections/solutions"), { ssr: false });
const HowItWorks = dynamic(() => import("./sections/HowItWorks"), { ssr: false });
const Services = dynamic(() => import("./sections/Services"), { ssr: false });
const Testimonials = dynamic(() => import("../../components/common/Testimonials"), { ssr: false });
const BrandLogos = dynamic(() => import("../../components/common/BrandLogos"), { ssr: false });
const FAQs = dynamic(() => import("../../components/common/FAQs"), { ssr: false });
const CTA = dynamic(() => import("./sections/CTA"), { ssr: false });
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

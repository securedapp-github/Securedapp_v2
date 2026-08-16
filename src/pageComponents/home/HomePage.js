"use client";

import React, { useEffect } from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/Navbar";
import dynamic from "next/dynamic";
import Hero from "./sections/Hero";
import { reviews, faqHeaders, faqsData } from "./home.data";
import MetaTags from "../../components/common/MetaTags";

import Statitics from "./sections/Statistics";
import Features from "./sections/Features";
import Solutions from "./sections/solutions";
import HowItWorks from "./sections/HowItWorks";
import Services from "./sections/Services";
import Testimonials from "../../components/common/Testimonials";
import BrandLogos from "../../components/common/BrandLogos";
import FAQs from "../../components/common/FAQs";
import CTA from "./sections/CTA";
import BookMeetCta from "../../components/common/bookMeetCta";

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

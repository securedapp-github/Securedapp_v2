"use client";

import React, { useEffect } from "react";
import Head from "next/head";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import MetaTags from "../../components/common/MetaTags";
import CareersHero from "./CareersHero";
import CareersCulturePerks from "./CareersCulturePerks";
import CareersInterviewRoadmap from "./CareersInterviewRoadmap";
import CareersJobListings from "./CareersJobListings";
import CareersTalentPool from "./CareersTalentPool";
import CareersFAQ from "./CareersFAQ";
import { initialJobs, careersFaqs, careersConfig } from "../../data/careersData";

const Careers = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  // SEO Schema.org JobPosting structured data for Google Jobs
  const jobPostingSchemas = initialJobs.map((job) => ({
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    title: job.title,
    description: `${job.overview} Responsibilities: ${job.responsibilities.join(
      " "
    )} Requirements: ${job.requirements.join(" ")}`,
    identifier: {
      "@type": "PropertyValue",
      name: "SecureDApp",
      value: job.id,
    },
    datePosted: job.postedDate || "2026-02-15",
    validThrough: "2026-12-31T23:59:59Z",
    employmentType: job.type.toLowerCase().includes("internship")
      ? "INTERN"
      : job.type === "Full-time"
      ? "FULL_TIME"
      : "CONTRACTOR",
    hiringOrganization: {
      "@type": "Organization",
      name: "SecureDApp",
      sameAs: "https://securedapp.io",
      logo: "https://securedapp.io/assets/images/securedapp-logo-dark.svg",
    },
    jobLocationType: job.location.toLowerCase().includes("remote")
      ? "TELECOMMUTE"
      : undefined,
    applicantLocationRequirements: job.location.toLowerCase().includes("remote")
      ? {
          "@type": "Country",
          name: "Worldwide",
        }
      : undefined,
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
    },
  }));

  // Schema.org FAQPage structured data
  const careerFaqSchema = {
    "@context": "https://schema.org/",
    "@type": "FAQPage",
    mainEntity: careersFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const metaData = {
    title: "Careers & Internships at SecureDApp: Build the Future of Web3 Security",
    desc: "Explore 100% remote internship tracks in Marketing, Sales & Business Development, and Software Engineering (SDE-1) at SecureDApp with performance-based stipends.",
    keywords:
      "SecureDApp careers, Web3 internships, remote marketing intern, sales BD intern, SDE-1 remote, blockchain software engineering, crypto internships",
    url: "https://securedapp.io/careers",
    image: "/assets/images/ProductPages/ss/hero.webp",
  };

  return (
    <div className="careers-page bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-200">
      <MetaTags data={metaData} />

      {/* Structured data injection for Google Jobs & FAQ */}
      <Head>
        {jobPostingSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(careerFaqSchema) }}
        />
      </Head>

      <Navbar />

      <main className="relative z-10">
        <CareersHero />
        <CareersCulturePerks />
        <CareersInterviewRoadmap />
        <CareersJobListings />
        <CareersTalentPool />
        <CareersFAQ />
      </main>

      <Footer />
    </div>
  );
};

export default Careers;

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/Navbar";
import BlogCard from "../../components/blog/BlogCard";
import SectionTitle from "../../components/common/SectionTitle";
import { mediaData } from "./media-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import MetaTags from "../../components/common/MetaTags";

function Media() {
  if (typeof window !== "undefined") {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  }
  const [blogs, setBlogs] = useState(mediaData);
  const [originalBlogs, setOriginalBlogs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedTag, setSelectedTags] = useState("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogs.slice(indexOfFirstItem, indexOfLastItem);

  // Determine the total number of pages
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (typeof window !== "undefined") {
      typeof window !== "undefined" && window.scrollTo(0, 0);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  return (
    <div className="blog-container">
      <MetaTags
        data={{
          title: "SecureDApp in the Media: Web3, Press & Blockchain Security News",
          desc: "Explore SecureDApp's media coverage on Web3, blockchain, and cybersecurity. Read interviews and articles featuring our insights on smart contract audits and threat intelligence.",
          keywords:
            "SecureDApp media, Web3 coverage, blockchain security, blockchain interviews, Web3 insights, blockchain news, SecureDApp articles, digital security trends",
          image: "/assets/images/media/cryptotimes1.png",
          url: "https://securedapp.io/media",
        }}
      />
      <Navbar />

      {/* Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto px-4 pt-28 pb-4">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400"
        >
          <Link href="/" className="hover:text-tertiary transition-colors">
            Home
          </Link>
          <span className="text-slate-600">/</span>
          <Link href="/about" className="hover:text-tertiary transition-colors">
            About Us
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-white font-semibold">Media Coverage</span>
        </nav>
      </div>

      <div className="blog">
        <SectionTitle
          title="Media Coverage & Press Releases: SecureDApp in the News"
          description="Global press features, founder interviews, and security commentary covering SecureDApp's advancements in smart contract audits, post-quantum cryptography, and enterprise DPDP governance."
        />

        {/* Informational context and internal links */}
        <div className="max-w-4xl mx-auto px-4 text-center my-6 text-sm sm:text-base text-slate-300 space-y-3">
          <p>
            Explore SecureDApp&apos;s published media coverage and commentary on
            smart contract auditing, automated vulnerability scanning, and
            blockchain threat intelligence.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-tertiary pt-2 border-t border-slate-800">
            <Link href="/" className="hover:underline">Home</Link>
            <span>&bull;</span>
            <Link href="/about" className="hover:underline">About SecureDApp</Link>
            <span>&bull;</span>
            <Link href="/smart-contract-audit" className="hover:underline">Smart Contract Audits</Link>
            <span>&bull;</span>
            <Link href="/dpdp-compliance-platform" className="hover:underline">DPDP Compliance</Link>
            <span>&bull;</span>
            <Link href="/blog" className="hover:underline">Security Blog</Link>
            <span>&bull;</span>
            <Link href="/?contact=true" className="hover:underline">Press &amp; Media Inquiries</Link>
          </div>
        </div>

        <div className="blog-cards">
          {currentItems.map((item) => (
            <BlogCard key={item.id} details={item} isMedia={true} />
          ))}
        </div>
        <div className="blog-pagination">
          <div className="blog-pagniation-arrow-container">
            <button
              className="blog-pagination-arrow"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          </div>
          <div className="blog-pagination-number">{currentPage}</div>
          <div className="blog-pagniation-arrow-container">
            <button
              className="blog-pagination-arrow"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Media;

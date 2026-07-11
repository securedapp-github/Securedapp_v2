import React from "react";
import { useRouter } from "next/router";

const StrokeLeft = () => (
  <svg width="114" height="7" viewBox="0 0 114 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="section-title-icon-image">
    <path d="M113.387 3.5L110.5 6.38675L107.613 3.5L110.5 0.613249L113.387 3.5ZM0.5 4C0.223862 4 0 3.77614 0 3.5C0 3.22386 0.223862 3 0.5 3V4ZM110.5 4H0.5V3H110.5V4Z" fill="url(#paint0_linear_846_19116)"/>
    <defs>
      <linearGradient id="paint0_linear_846_19116" x1="110.5" y1="4" x2="0.5" y2="4" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A78BFA"/>
        <stop offset="1" stopColor="#635294" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
);

const StrokeRight = () => (
  <svg width="114" height="7" viewBox="0 0 114 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="section-title-icon-image">
    <path d="M0.613249 3.5L3.5 6.38675L6.38675 3.5L3.5 0.613249L0.613249 3.5ZM113.5 4C113.776 4 114 3.77614 114 3.5C114 3.22386 113.776 3 113.5 3V4ZM3.5 4H113.5V3H3.5V4Z" fill="url(#paint0_linear_846_19118)"/>
    <defs>
      <linearGradient id="paint0_linear_846_19118" x1="3.5" y1="4" x2="113.5" y2="4" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A78BFA"/>
        <stop offset="1" stopColor="#635294" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
);

const SectionTitle = ({ name, title, description }) => {
  const isSpecial =
    useRouter().asPath.includes("blog") || useRouter().asPath.includes("media") || useRouter().asPath.includes("white-paper");
  return (
    <div className="section-title">
      {name !== undefined && (
        <div className="flex justify-center items-center space-x-3">
          <StrokeLeft />
          <div className="section-title-icon-label">{name}</div>
          <StrokeRight />
        </div>
      )}
      {isSpecial ? (
        <h1 className="section-title-header">{title}</h1>
      ) : (
        <h2 className="section-title-header">{title}</h2>
      )}
      <div className="section-title-description">{description}</div>
    </div>
  );
};

export default SectionTitle;

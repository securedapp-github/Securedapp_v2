import React from "react";
import "./SectionTitle.css";

const SectionTitle = ({ name, title, description }) => (
  <div className="section-title">
    {name && (
      <div className="flex justify-center items-center space-x-3">
        <img
          className="section-title-icon-image"
          src="/assets/images/stroke-left.svg"
          alt="stroke left"
        />
        <div className="section-title-icon-label">{name}</div>
        <img
          className="section-title-icon-image"
          src="/assets/images/stroke-right.svg"
          alt="stroke right"
        />
      </div>
    )}
    <div className="section-title-header">{title}</div>
    <div className="section-title-description">{description}</div>
  </div>
);

export default SectionTitle;

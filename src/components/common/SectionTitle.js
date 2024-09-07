import React from "react";
import Image from "next/image";
import "./SectionTitle.module.css";

const SectionTitle = ({ name, title, description }) => (
  <div className="section-title">
    {name !== undefined && (
      <div className="flex justify-center items-center space-x-3">
        <Image
          layout="intrinsic"
          width={100}
          height={100}
          className="section-title-icon-image"
          src="/assets/images/stroke-left.svg"
          alt="stroke left"
        />
        <div className="section-title-icon-label">{name}</div>
        <Image
          layout="intrinsic"
          width={100}
          height={100}
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

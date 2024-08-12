import React from "react";
import "./BrandLogos.css";

const brandLogos = [
  {
    src: "/assets/images/brand-logo-1.svg",
    alt: "videohive",
  },
  {
    src: "/assets/images/brand-logo-2.svg",
    alt: "codecanyon",
  },
  {
    src: "/assets/images/brand-logo-3.svg",
    alt: "graphicriver",
  },
  {
    src: "/assets/images/brand-logo-4.svg",
    alt: "photodune",
  },
  {
    src: "/assets/images/brand-logo-5.svg",
    alt: "themeforest",
  },
];

const BrandLogos = () => {
  return (
    <div className="brand-logos">
      {brandLogos.map((brandLogo, index) => (
        <div key={index} className="flex justify-center items-center">
          <img
            src={brandLogo.src}
            alt={brandLogo.alt}
            className="w-[100px] md:w-[150px] lg:w-[200px]"
          />
        </div>
      ))}
    </div>
  );
};

export default BrandLogos;

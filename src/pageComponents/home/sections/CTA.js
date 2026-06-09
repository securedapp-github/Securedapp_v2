"use client";

import React from "react";
import Image from "next/image";
import Button from "../../../components/common/Button";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const CTA = () => {
  const navigate = useRouter();
  const theme = useSelector((state) => state.theme?.mode ?? "light");
  const isDark = theme === "dark";

  const gridSvg = isDark ? "/assets/images/cta-upper-grid-dark.svg" : "/assets/images/cta-upper-grid-light.svg";
  const gridPatchSvg = isDark ? "/assets/images/cta-upper-patch-dark.svg" : "/assets/images/cta-upper-patch-light.svg";
  const lowerGridSvg = isDark ? "/assets/images/cta-lower-grid-dark.svg" : "/assets/images/cta-lower-grid-light.svg";
  const lowerPatchSvg = isDark ? "/assets/images/cta-lower-patch-dark.svg" : "/assets/images/cta-lower-patch-light.svg";

  const imgProps = {
    alt: "",
    "aria-hidden": "true",
    loading: "lazy",
  };

  return (
    <div className="cta-section">
      <div className="cta-section-grid">
        <Image
          {...imgProps}
          src={gridSvg}
          width={1920}
          height={320}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="cta-section-grid-patch">
          <Image
            {...imgProps}
            src={gridPatchSvg}
            width={400}
            height={400}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      <div className="cta-title">Take your security to the next level</div>
      <div className="cta-desc">
        Ready to secure your blockchain project? Join the hundreds of businesses
        already trusting SecureDApp for comprehensive smart contract audits,
        real-time threat monitoring, and end-to-end blockchain security.
      </div>
      <div style={{ padding: "20px 0 60px 0" }} className="cta-section-buttons">
        <Button
          className="cta-section-button w-72"
          text={"Schedule a Demo"}
          onClick={() =>
            typeof window !== "undefined" &&
            window.open("https://calendar.app.google/DwaR8QDDAotwnafu5")
          }
        />
      </div>
      <div className="cta-section-grid">
        <Image
          {...imgProps}
          className="relative z-0"
          src={lowerGridSvg}
          width={1920}
          height={320}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="cta-section-grid-patch">
          <Image
            {...imgProps}
            src={lowerPatchSvg}
            width={400}
            height={400}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;

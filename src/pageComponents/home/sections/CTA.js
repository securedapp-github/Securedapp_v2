"use client";

import React from "react";
import Image from "next/image";
import Button from "../../../components/common/Button";
import { useRouter, Link } from "next/router";

const CTA = () => {
  const navigate = useRouter();
  return (
    <div className="cta-section">
      <div className="cta-section-grid">
        <Image
          src="/assets/images/cta-upper-grid-dark.svg"
          alt=""
          aria-hidden="true"
          width={1920}
          height={320}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="cta-section-grid-patch">
          <Image
            src="/assets/images/cta-upper-patch-dark.svg"
            alt=""
            aria-hidden="true"
            width={400}
            height={400}
            loading="lazy"
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
        {/* <Button
          className="cta-section-button w-72"
          text={"Sign Up"}
          filled={true}
        /> */}
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
          className="relative z-0"
          src="/assets/images/cta-lower-grid-dark.svg"
          alt=""
          aria-hidden="true"
          width={1920}
          height={320}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="cta-section-grid-patch">
          <Image
            src="/assets/images/cta-lower-patch-dark.svg"
            alt=""
            aria-hidden="true"
            width={400}
            height={400}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;

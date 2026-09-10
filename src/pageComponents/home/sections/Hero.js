import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Button from "../../../components/common/Button";

const BrandLogos = dynamic(() => import("../../../components/common/BrandLogos"), {
  ssr: true,
});

const images = [
  {
    src: "/assets/images/ProductPages/ss/hero.webp",
    alt: "Solidity Shield",
    to: "/blockchain-security/smart-contract-security-audit",
  },
  {
    src: "/assets/images/ProductPages/sw/hero.webp",
    alt: "Secure Watch",
    to: "/real-time-blockchain-threat-monitoring",
  },
  {
    src: "/assets/images/ProductPages/st/st-hero.webp",
    alt: "Secure Trace",
    to: "/ai-blockchain-investigation-platform",
  },
];

const HeroSwiper = dynamic(() => import("./HeroSwiper"), {
  ssr: false,
  loading: () => (
    <div className="hero-swiper">
      <div className="hero-image-container">
        <Image
          style={{
            borderRadius: "15px",
            maxWidth: "600px",
            aspectRatio: "3 / 2",
            width: "100%",
            height: "auto",
          }}
          className="hero-image"
          src={images[0].src}
          alt={images[0].alt}
          width={600}
          height={400}
          priority={true}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          sizes="(max-width: 600px) 100vw, 600px"
        />
      </div>
      <div className="pt-8 md:pt-6 lg:pt-4 pb-12 md:pb-8 lg:pb-12">
        <Button text={"Read More"} filled={true} />
      </div>
    </div>
  ),
});

const Hero = () => {
  const navigate = useRouter();

  return (
    <div className="hero flex flex-col justify-between">
      <div>
        <h1 className="hero-title">Comprehensive Blockchain Security</h1>
        <h2 className="hero-subtitle">
          97% of Blockchain hacks are preventable. Securing your blockchain
          journey
        </h2>
        <HeroSwiper images={images} onNavigate={(to) => navigate.push(to)} />
      </div>
      <br />
      <br />
      <BrandLogos />
      <br />
      <br />
    </div>
  );
};

export default Hero;

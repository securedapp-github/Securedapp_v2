import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import BrandLogos from "../../../components/common/BrandLogos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Button from "../../../components/common/Button";
import "swiper/swiper-bundle.css";

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

const Hero = () => {
  const navigate = useRouter();
  return (
    <div className="hero flex flex-col justify-between">
      <div>
        <h1 className="hero-title">Comprehensive Blockchain Security</h1>
        <p className="hero-subtitle">
          97% of Blockchain hacks are preventable. Securing your blockchain
          journey
        </p>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          grabCursor={true}
          className="hero-swiper"
        >
          {images.map((image, index) => {
            return (
              <SwiperSlide key={`swiper-slide-${index}`}>
                <div className="hero-image-container">
                  <Image
                    style={{ borderRadius: "15px", maxWidth: "600px" }}
                    className="hero-image"
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    priority={index === 0}
                    fetchPriority={index === 0 ? "high" : undefined}
                    loading={index === 0 ? undefined : "lazy"}
                    sizes="100vw"
                  />
                </div>
                <div className="pt-8 md:pt-6 lg:pt-4 pb-12 md:pb-8 lg:pb-12">
                  <Button
                    onClick={() => navigate.push(image.to)}
                    text={"Read More"}
                    filled={true}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
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

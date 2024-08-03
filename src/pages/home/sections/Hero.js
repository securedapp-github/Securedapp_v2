import React from "react";
import BrandLogos from "../../../components/brand-logos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Button from "../../../components/common/Button";
import "swiper/swiper-bundle.css";

const images = [
  {
    src: "/assets/images/hero-image1.svg",
    alt: "Hero 1",
    to: "",
  },
  {
    src: "/assets/images/hero-image1.svg",
    alt: "Hero 1",
    to: "",
  },
  {
    src: "/assets/images/hero-image1.svg",
    alt: "Hero 1",
    to: "",
  },
];

const Hero = () => (
  <div className="hero">
    <div className="backgroung-grid"></div>
    <p className="hero-title">Comprehensive Blockchain Security</p>
    <p className="hero-subtitle">
      97% of Blockchain hacks are preventable. Securing your blockchain journey
    </p>
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      grabCursor={true}
      className="hero-swiper">
      {images.map((image, index) => {
        return (
          <SwiperSlide key={`swiper-slide-${index}`}>
            <div className="hero-image-container">
              <img className="hero-image" src={image.src} alt={image.alt} />
            </div>
            <div className="pt-3 lg:pt-4 pb-8 lg:pb-12">
              <Button text={"Read More"} filled={true} />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
    <BrandLogos />
    <div>
      <div>
        <p>100+</p>
        <p>Projects Secured</p>
      </div>
      <div>
        <p>2400+</p>
        <p>Vulnerabilities detected</p>
      </div>
      <div>
        <p>$600+</p>
        <p>Digital assets protected</p>
      </div>
    </div>
  </div>
);

export default Hero;

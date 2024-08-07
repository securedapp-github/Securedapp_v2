import React from "react";
import BrandLogos from "../../../components/home/BrandLogos";
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
  <div className="hero flex flex-col justify-between">
    <div>
      <p className="hero-title">Comprehensive Blockchain Security</p>
      <p className="hero-subtitle">
        97% of Blockchain hacks are preventable. Securing your blockchain
        journey
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
              <div className="pt-8 md:pt-6 lg:pt-4 pb-12 md:pb-8 lg:pb-12">
                <Button text={"Read More"} filled={true} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
    <BrandLogos />
  </div>
);

export default Hero;

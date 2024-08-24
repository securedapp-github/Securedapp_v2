import React from "react";
import { useNavigate } from "react-router-dom";
import BrandLogos from "../../../components/common/BrandLogos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Button from "../../../components/common/Button";
import "swiper/swiper-bundle.css";

const images = [
  {
    src: "/assets/images/ProductPages/ss/hero.jpg",
    alt: "Solidity Shield",
    to: "/solidity-shield",
  },
  {
    src: "/assets/images/ProductPages/sw/hero.png",
    alt: "Secure Watch",
    to: "/secure-watch",
  },
  {
    src: "/assets/images/ProductPages/sp/hero.jpg",
    alt: "Secure Pad",
    to: "/secure-pad",
  },
];

const Hero = () => {
  const navigate = useNavigate();
  return (
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
          className="hero-swiper"
        >
          {images.map((image, index) => {
            return (
              <SwiperSlide key={`swiper-slide-${index}`}>
                <div className="hero-image-container">
                  <img
                    style={{ borderRadius: "15px" }}
                    className="hero-image"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
                <div className="pt-8 md:pt-6 lg:pt-4 pb-12 md:pb-8 lg:pb-12">
                  <Button
                    onClick={() => navigate(image.to)}
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

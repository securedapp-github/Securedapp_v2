import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Button from "../../../components/common/Button";
import "swiper/swiper-bundle.css";

const HeroSwiper = ({ images, onNavigate }) => {
  return (
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
                style={{
                  borderRadius: "15px",
                  maxWidth: "600px",
                  aspectRatio: "3 / 2",
                  width: "100%",
                  height: "auto",
                }}
                className="hero-image"
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                priority={index === 0}
                fetchPriority={index === 0 ? "high" : "low"}
                loading={index === 0 ? "eager" : "lazy"}
                sizes="(max-width: 600px) 100vw, 600px"
              />
            </div>
            <div className="pt-8 md:pt-6 lg:pt-4 pb-12 md:pb-8 lg:pb-12">
              <Button
                onClick={() => onNavigate(image.to)}
                text={"Read More"}
                filled={true}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSwiper;

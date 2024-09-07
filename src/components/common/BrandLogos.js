import React from "react";
import Image from "next/image";
import "./BrandLogos.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const brandLogos = [
  {
    src: "/assets/images/clients/Zapit.png",
    alt: "Zapit",
  },
  {
    src: "/assets/images/clients/T-hub.png",
    alt: "T-Hub",
  },
  {
    src: "/assets/images/clients/Tenex-Finanace.png",
    alt: "Tenex Finance",
  },
  {
    src: "/assets/images/clients/STPI.png",
    alt: "STPI",
  },
  {
    src: "/assets/images/clients/IFSCA.png",
    alt: "IFSCA",
  },
  {
    src: "/assets/images/clients/gpu.png",
    alt: "Gpu",
  },
  {
    src: "/assets/images/clients/Evolve-AI.png",
    alt: "Evolve AI",
  },
  {
    src: "/assets/images/clients/Cyseck.png",
    alt: "Cyseck",
  },
  {
    src: "/assets/images/clients/CCOE-Telangana.png",
    alt: "CCOE Telangana",
  },
  {
    src: "/assets/images/clients/C3ihub.png",
    alt: "C3ihub",
  },
  {
    src: "/assets/images/clients/Broadridge.png",
    alt: "Broadridge",
  },
  {
    src: "/assets/images/clients/Blits-Estate.png",
    alt: "Blits Estate",
  },
  {
    src: "/assets/images/clients/Amrita-Tbi.png",
    alt: "Amrite TBI",
  },
];

const BrandLogos = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="brand-logos">
      <Carousel
        responsive={responsive}
        showDots={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1}
        keyBoardControl={false}
        transitionDuration={8000}
        arrows={false}
        containerClass="carousel-container"
        itemClass="carousel-item"
        customTransition="all 8s linear"
        draggable={false}
        shouldResetAutoplay={false}
      >
        {brandLogos.map((brandLogo, index) => (
          <div
            key={index}
            className="w-full flex justify-center items-center py-2"
          >
            <Image
              layout="intrinsic"
              width={100}
              height={100}
              src={brandLogo.src}
              alt={brandLogo.alt}
              className="w-[150px] lg:w-[200px]"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BrandLogos;

import React from "react";
import "./BrandLogos.css";
import Slider from "react-slick";

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
  const sliderSettings = {
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="brand-logos">
      <Slider className="" {...sliderSettings}>
        {brandLogos.map((brandLogo, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={brandLogo.src}
              alt={brandLogo.alt}
              className="w-[150px] lg:w-[200px]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandLogos;

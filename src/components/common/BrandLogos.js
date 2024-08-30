import React from "react";
import "./BrandLogos.css";
import Slider from "react-slick";

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
          <div key={index} className="flex justify-center items-center py-2">
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

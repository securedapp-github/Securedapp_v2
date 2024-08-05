import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Button from "../../../components/common/Button";
import SectionTitle from "../../../components/common/SectionTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const servicesData = [
  {
    id: 0,
    title: "DApp Development",
    name: "Plan, execute, and track projects of any size",
    desc: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    alt: "",
    to: "",
  },
  {
    id: 1,
    title: "Dapp Security",
    name: "Plan, execute, and track projects of any size",
    desc: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    alt: "",
    to: "",
  },
  {
    id: 2,
    title: "Web3 KYC",
    name: "Plan, execute, and track projects of any size",
    desc: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    alt: "",
    to: "",
  },
  {
    id: 3,
    title: "Blockchain Forensic",
    name: "Plan, execute, and track projects of any size",
    desc: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    alt: "",
    to: "",
  },
  {
    id: 4,
    title: "Crypto Compliance & AML",
    name: "Plan, execute, and track projects of any size",
    desc: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    alt: "",
    button: "",
  },
];

const Services = ({ isLargeScreen, setIsLargeScreen }) => {
  const [selectedService, setService] = useState(0);
  let sliderRef = useRef(null);

  function moveLeft() {
    if (selectedService === 0) return;
    setService((prev) => prev - 1);
  }

  function moveRight() {
    if (selectedService === servicesData.length - 1) return;
    setService((prev) => prev + 1);
  }

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(selectedService);
    }
  }, [selectedService]);

  const PreviousArrow = () => {
    return (
      <div
        className="services-mobile-navbar-arrow-container"
        onClick={moveLeft}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          size="xl"
          className="services-mobile-navbar-arrow"
        />
      </div>
    );
  };

  const NextArrow = () => {
    return (
      <div
        className="services-mobile-navbar-arrow-container"
        onClick={moveRight}>
        <FontAwesomeIcon
          icon={faChevronRight}
          size="xl"
          className="services-mobile-navbar-arrow"
        />
      </div>
    );
  };

  const slickSettings = {
    centerMode: true,
    arrows: false,
    accessibility: true,
    centerPadding: "0",
    slidesToShow: 1,
    lazyLoad: "progressive",
    slidesToScroll: 1,
    speed: 500,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    beforeChange: (current, next) => {
      setService(next);
    },
  };

  return (
    <div className="services">
      <SectionTitle
        name="Services"
        title="Services Provided by us"
        description="Dengan wireframe kit ini, kamu dapat mengefisiensikan pekerjaanmu."
      />
      {isLargeScreen ? (
        <div className="services-navbar">
          {servicesData.map((service, index) => {
            return (
              <div
                onClick={() => setService(index)}
                className={`services-navbar-item ${
                  service.id === selectedService && "selected-navbar"
                } ${service.id === 0 && "first-navbar"} ${
                  service.id === servicesData.length - 1 && "last-navbar"
                }`}>
                {service.title}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="services-mobile-navbar">
          <PreviousArrow />
          <Slider ref={sliderRef} className="w-full" {...slickSettings}>
            {servicesData.map((service, index) => {
              return (
                <div
                  onClick={() => setService(index)}
                  className={`services-mobile-navbar-item ${
                    service.id === selectedService && "selected-mobile-navbar"
                  }`}>
                  {service.title}
                </div>
              );
            })}
          </Slider>
          <NextArrow />
        </div>
      )}
      <div className="services-content">
        <div className="services-content-left">
          <div className="services-content-left-title">
            {servicesData[selectedService].name}
          </div>
          <div className="services-content-left-description">
            {servicesData[selectedService].desc}
          </div>
          <div className="services-content-left-button">
            <Button text={"Get Started"} filled={true} />
          </div>
        </div>
        <div className="services-content-right">
          <img
            src={`/assets/images/services-${selectedService}.svg`}
            alt={servicesData[selectedService].alt}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

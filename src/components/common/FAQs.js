import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick/lib/slider";
import { useSelector } from "react-redux";
import { getHomeSelector } from "../../redux/slices/main/homeSlice";

const FAQs = ({ faqHeaders = [], faqsData }) => {
  const { isLargeScreen } = useSelector(getHomeSelector);

  const [detail, setDetail] = useState();
  const [topic, setTopic] = useState(0);

  const toggleDetail = (index) => {
    if (index === detail) setDetail(-1);
    else setDetail(index);
  };

  let sliderRef = useRef(null);

  function moveLeft() {
    if (topic === 0) return;
    setTopic((prev) => prev - 1);
  }

  function moveRight() {
    if (topic === faqHeaders.length - 1) return;
    setTopic((prev) => prev + 1);
  }

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(topic);
    }
  }, [topic]);

  const PreviousArrow = () => {
    return (
      <div className="faq-mobile-navbar-arrow-container" onClick={moveLeft}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          size="xl"
          className="faq-mobile-navbar-arrow"
        />
      </div>
    );
  };

  const NextArrow = () => {
    return (
      <div className="faq-mobile-navbar-arrow-container" onClick={moveRight}>
        <FontAwesomeIcon
          icon={faChevronRight}
          size="xl"
          className="faq-mobile-navbar-arrow"
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
      setTopic(next);
    },
  };

  const Faq = ({ question, answer, onClick, isActive }) => {
    return (
      <div
        onClick={onClick}
        className={`faq-item ${isActive && "faq-item-selected"}`}
      >
        <div className="faq-item-left">
          <div className="flex flex-col space-y-2">
            <div className="faq-item-question">{question}</div>
            {isActive && (
              <div
                className="faq-item-answer"
                dangerouslySetInnerHTML={{ __html: answer }}
              ></div>
            )}
          </div>
        </div>
        <div className="faq-item-right">{isActive ? "-" : "+"}</div>
      </div>
    );
  };

  return (
    <div className="faq">
      <SectionTitle
        name="FAQs"
        title="Frequently Asked Questions"
        description=""
      />
      {isLargeScreen ? (
        <div className="faq-navbar">
          {faqHeaders.map((header, index) => {
            return (
              <div
                onClick={() => setTopic(index)}
                className={`faq-navbar-item ${
                  topic === index && "faq-navbar-item-selected"
                }`}
              >
                {header}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="faq-mobile-navbar">
          {faqHeaders.length > 0 ? (
            <>
              <PreviousArrow />
              <Slider ref={sliderRef} className="w-full" {...slickSettings}>
                {faqHeaders.map((header, index) => {
                  return (
                    <div
                      onClick={() => setTopic(index)}
                      className={`faq-mobile-navbar-item ${
                        index === topic && "selected-mobile-navbar"
                      }`}
                    >
                      {header}
                    </div>
                  );
                })}
              </Slider>
              <NextArrow />
            </>
          ) : (
            <>
              {faqHeaders.map((header, index) => {
                return (
                  <div
                    onClick={() => setTopic(index)}
                    className={`faq-mobile-navbar-item ${
                      index === topic && "selected-mobile-navbar"
                    }`}
                  >
                    {header}
                  </div>
                );
              })}
            </>
          )}
        </div>
      )}
      <div className="faq-items">
        {faqsData[topic].map((faq, index) => {
          return (
            <Faq
              isActive={detail === index}
              onClick={() => toggleDetail(index)}
              question={faq.q}
              answer={faq.a}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FAQs;

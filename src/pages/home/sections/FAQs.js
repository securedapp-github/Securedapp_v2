import React, { useEffect, useRef } from "react";
import { useState } from "react";
import SectionTitle from "../../../components/common/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick/lib/slider";

const headers = [
  "General",
  "Trust and safety",
  "Services",
  "Billing",
  "Office and Cleaning",
];

const faqsData = [
  [
    {
      id: 0,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 1,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 2,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 3,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 4,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
  ],
  [
    {
      id: 0,
      q: "Plan 2, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 1,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 2,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 3,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 4,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
  ],
  [
    {
      id: 0,
      q: "Plan 3, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 1,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 2,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 3,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 4,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
  ],
  [
    {
      id: 0,
      q: "Plan 4, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 1,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 2,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 3,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 4,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
  ],
  [
    {
      id: 0,
      q: "Plan 4, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 1,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 2,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 3,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 4,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
  ],
];

const FAQs = ({ isLargeScreen, setIsLargeScreen }) => {
  const [detail, setDetail] = useState(0);
  const [topic, setTopic] = useState(0);

  let sliderRef = useRef(null);

  function moveLeft() {
    if (topic === 0) return;
    setTopic((prev) => prev - 1);
  }

  function moveRight() {
    if (topic === headers.length - 1) return;
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
        className={`faq-item ${isActive && "faq-item-selected"}`}>
        <div className="faq-item-left">
          <div className="flex flex-col space-y-2">
            <div className="faq-item-question">{question}</div>
            {isActive && <div className="faq-item-answer">{answer}</div>}
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
        title="Frequently asked Questions"
        description=""
      />
      {isLargeScreen ? (
        <div className="faq-navbar">
          {headers.map((header, index) => {
            return (
              <div
                onClick={() => setTopic(index)}
                className={`faq-navbar-item ${
                  topic === index && "faq-navbar-item-selected"
                }`}>
                {header}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="faq-mobile-navbar">
          <PreviousArrow />
          <Slider ref={sliderRef} className="w-full" {...slickSettings}>
            {headers.map((header, index) => {
              return (
                <div
                  onClick={() => setTopic(index)}
                  className={`faq-mobile-navbar-item ${
                    index === topic && "selected-mobile-navbar"
                  }`}>
                  {header}
                </div>
              );
            })}
          </Slider>
          <NextArrow />
        </div>
      )}
      <div className="faq-items">
        {faqsData[topic].map((faq, index) => {
          return (
            <Faq
              isActive={detail === index}
              onClick={() => setDetail(index)}
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

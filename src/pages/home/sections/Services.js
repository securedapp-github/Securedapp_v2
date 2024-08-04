import React from "react";
import { useState } from "react";
import Button from "../../../components/common/Button";
import SectionTitle from "../../../components/common/SectionTitle";

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

function Services() {
  const [selectedService, setService] = useState(0);

  return (
    <div className="services">
      <SectionTitle
        name="Services"
        title="Services Provided by us"
        description="Dengan wireframe kit ini, kamu dapat mengefisiensikan pekerjaanmu."
      />
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
}

export default Services;

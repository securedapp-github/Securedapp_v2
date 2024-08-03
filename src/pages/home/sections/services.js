import React from "react";
import { useState } from "react";
import Button1 from "../../../components/button-1";
import SectionTitle from "../../../components/common/SectionTitle";

const ServicesData = [
  {
    id: 1,
    name: "Plan, execute, and track projects of any size",
    desc: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    button: "",
    image: "/images/service-1.png",
  },
  {
    id: 2,
    name: "Plan, execute, and track projects of any size 2",
    desc: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    button: "",
    image: "/images/service-1.png",
  },
  {
    id: 3,
    name: "Plan, execute, and track projects of any size 3",
    desc: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    button: "",
    image: "/images/service-1.png",
  },
  {
    id: 4,
    name: "Plan, execute, and track projects of any size 4",
    desc: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    button: "",
    image: "/images/service-1.png",
  },
  {
    id: 5,
    name: "Plan, execute, and track projects of any size 5",
    desc: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    button: "",
    image: "/images/service-1.png",
  },
];

function Services() {
  const [service, setService] = useState(0);

  return (
    <div>
      <SectionTitle
        name="Services"
        title="Services Provided by us"
        description="Dengan wireframe kit ini, kamu dapat mengefisiensikan pekerjaanmu."
      />
      <div>
        <div onClick={() => setService(0)}>Dapp Development</div>
        <div onClick={() => setService(1)}>Dapp Security</div>
        <div onClick={() => setService(2)}>Web3 KYC</div>
        <div onClick={() => setService(3)}>Blockchain Forensic</div>
        <div onClick={() => setService(4)}>Crypto Compliance & AML</div>
      </div>
      <div>
        <div>
          <h4>{ServicesData[service].name}</h4>
          <p>{ServicesData[service].desc}</p>
          <Button1 value="Get Started" />
        </div>
        <div>
          <img src={ServicesData[service].image} />
        </div>
      </div>
    </div>
  );
}

export default Services;

import React from "react";
import SectionTitle from "../../../components/common/SectionTitle";
import Button from "../../../components/common/Button";

const solutions = [
  {
    title: "Solidity Shield",
    items: [
      "AI-powered smart contract vulnerability detection",
      "Customizable security audits",
      "Enhanced developer workflow",
    ],
    to: "",
    image: "/assets/images/home/hero.png",
  },
  {
    title: "Secure Watch",
    items: [
      "Leverage AI for Real-time threat detection for blockchain projects",
      "Machine learning for anomaly identification",
      "Customizable security measures",
    ],
    to: "",
    image: "/assets/images/solution-1.svg",
  },
  {
    title: "Secure Trace",
    items: [
      "A sophisticated blockchain forensic tool ",
      "Analyzes transaction data",
      "Supports regulatory compliance",
    ],
    to: "",
    image: "/assets/images/solution-2.svg",
  },
  {
    title: "SecurePad",
    items: [
      "A leading cost-free tokenization platform for a comprehensive suite of blockchain services",
      "Enhancing versatility by allowing projects to deploy tokens across multiple blockchains",
      "Decentralized exchange for seamless token trading",
    ],
    to: "",
    image: "/assets/images/solution-3.svg",
  },
];

const Solution = ({ title, items = [], to, image, isImageLeft = false }) => {
  return (
    <div
      className={`solution-card lg:flex ${
        isImageLeft ? "lg:flex-row-reverse" : "lg:flex-row"
      } flex-col items-center`}
    >
      <div className="solution-card-content">
        <div className="solution-card-title">{title}</div>
        <ul className="solution-card-list">
          {items.map((item) => {
            return <li className="solution-card-list-item">{item}</li>;
          })}
        </ul>
        <Button text={"Learn More"} filled={true} />
      </div>
      <div className="solution-card-image">
        <img src={image} alt="solution#" />
      </div>
    </div>
  );
};

const Solutions = () => (
  <div className="solutions">
    <SectionTitle
      name="Our Solutions"
      title="Explore Our Security Solutions"
      description="Briefly explain your core offerings (Solidity Shield, SecureWatch) using clear and concise language."
    />
    <div className="solution-cards">
      {solutions.map((solution, index) => {
        return (
          <Solution
            title={solution.title}
            items={solution.items}
            to={solution.to}
            image={solution.image}
            isImageLeft={index % 2}
          />
        );
      })}
    </div>
  </div>
);

export default Solutions;

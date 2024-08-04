import React from "react";
import SectionTitle from "../../../components/common/SectionTitle";

const hows = [
  {
    title: "Review of the smart contract code",
    desc: "Seamlessly transact across Bitcoin, Ethereum, and a multitude of other popular blockchains.",
  },
  {
    title: "Manual review of the smart contract",
    desc: "Designed by the award-winning UX expert, Sarah Simplifyer, our interface is effortless to navigate, even for crypto beginners.",
  },
  {
    title: "Execution on a test network with",
    desc: "Stay ahead of the curve with market trends and portfolio updates, powered by our cutting-edge analytics engine led by Maya Marketseer.",
  },
  {
    title: "Reporting of the findings",
    desc: "Stay ahead of the curve with market trends and portfolio updates, powered by our cutting-edge analytics engine led by Maya Marketseer.",
  },
];

const HowCard = ({ title, desc }) => {
  return (
    <div className="how-card">
      <div className="how-card-title">{title}</div>
      <div className="how-card-desc">{desc}</div>
    </div>
  );
};

const HowItWorks = () => (
  <div className="how-it-works">
    <SectionTitle
      name="How it works"
      title="How it works"
      description="Dengan wireframe kit ini, kamu dapat mengefisiensikan pekerjaanmu."
    />
    <div className="how-cards">
      {hows.map((how) => {
        return <HowCard title={how.title} desc={how.desc} />;
      })}
    </div>
  </div>
);

export default HowItWorks;

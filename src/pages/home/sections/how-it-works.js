import React from "react";
import SectionTitle from "../../../components/section-title";

function How({ title, desc }) {
  return (
    <div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

const HowItWorks = () => (
  <div>
    <SectionTitle
      name="How it works"
      title="How it works"
      description="Dengan wireframe kit ini, kamu dapat mengefisiensikan pekerjaanmu."
    />
    <div>
      <How
        title="Review of the smart contract code"
        desc="Seamlessly transact across Bitcoin, Ethereum, and a multitude of other popular blockchains."
      />
      <How
        title="Manual review of the smart contract"
        desc="Designed by the award-winning UX expert, Sarah Simplifyer, our interface is effortless to navigate, even for crypto beginners."
      />
      <How
        title="Execution on a test network"
        desc="Stay ahead of the curve with market trends and portfolio updates, powered by our cutting-edge analytics engine led by Maya Marketseer."
      />
      <How
        title="Reporting of the findings"
        desc="Stay ahead of the curve with market trends and portfolio updates, powered by our cutting-edge analytics engine led by Maya Marketseer."
      />
    </div>
  </div>
);

export default HowItWorks;

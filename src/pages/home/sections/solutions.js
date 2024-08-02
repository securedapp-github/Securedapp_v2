import React from "react";
import SectionTitle from "../../../components/section-title";
import Button1 from "../../../components/button-1";

function Solution({ name, item1, item2, item3, image }) {
  return (
    <div>
      <div>
        <h3>{name}</h3>
        <ul>
          <li>{item1}</li>
          <li>{item2}</li>
          <li>{item3}</li>
        </ul>
        <Button1 value={"Learn more"} />
      </div>
      <div>
        <img src={image} alt="solution#" />
      </div>
    </div>
  );
}

const OurSolutions = () => (
  <div>
    <SectionTitle
      name="Our Solutions"
      title="Explore Our Security Solutions"
      description="Briefly explain your core offerings (Solidity Shield, SecureWatch) using clear and concise language."
    />
    <div>
      <Solution
        name="Solidity Shield"
        item1="AI-powered smart contract vulnerability detection"
        item2="Customizable security audits"
        item3="Enhanced developer workflow"
        image="/images/solution-1.png"
      />
      <Solution
        name="Secure Watch"
        item1="Real-time threat detection for blockchain projects"
        item2="Machine learning for anomaly identification"
        item3="Customizable security measures"
        image="/images/solution-2.png"
      />
      <Solution
        name="Secure Trace"
        item1="SecureTrace empowers you to trace illicit activity across complex blockchain networks"
        item2="Gain a comprehensive view of blockchain investigations with SecureTraces advanced analytics"
        item3="SecureTrace always stays ahead in evolving threats"
        image="/images/solution-3.png"
      />
      <Solution
        name="SecurePad"
        item1="SecureTrace empowers you to trace illicit activity across complex blockchain networks"
        item2="Gain a comprehensive view of blockchain investigations with SecureTraces advanced analytics"
        item3="SecureTrace stays ahead of evolving blockchain threats."
        image="/images/solution-4.png"
      />
    </div>
  </div>
);

export default OurSolutions;

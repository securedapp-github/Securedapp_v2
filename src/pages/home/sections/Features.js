import React from "react";
import { useState } from "react";
import SectionTitle from "../../../components/common/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  const [detail, setDetail] = useState(0);

  const selectFeatureCard = (id) => {
    setDetail(id);
  };

  const featureData = [
    {
      id: 0,
      title: "Vulnerability Detection",
      desc: "Scans for over 150+ types of vulnerabilities to ensure robust security.",
    },
    {
      id: 1,
      title: "Detects Unusual Deviations",
      desc: "Tracks your smart contract's activities to spot any unusual behavior or deviations that might signal potential threats.",
    },
    {
      id: 2,
      title: "Oversight of Transactions",
      desc: "Keeps a close watch on blockchain transactions to quickly flag suspicious or unauthorized actions.",
    },
    {
      id: 3,
      title: "Forensic Techniques",
      desc: "Employs specialized blockchain forensic techniques to delve deeply into transaction histories and uncover hidden connections related to fraudulent schemes.",
    },
    {
      id: 4,
      title: "Regulatory Compliance",
      desc: "Supports regulatory compliance by providing tools that streamline investigative workflows.",
    },
  ];

  return (
    <div className="features features-background">
      <SectionTitle
        name="Why ScureDApp"
        title="Trust SecureDApp for Your Blockchain Security Journey"
        description="Gain actionable insights and make data-driven decisions with powerful reporting tools"
      />
      <div className="features-container-left-right">
        <div className="feature-left">
          <div className="features-container">
            {featureData.map((feature) => {
              const isSelected = detail === feature.id;
              return (
                <div className="feature-cards-container">
                  <div
                    className={`vertical-scroll ${
                      isSelected && "vertical-scroll-selected"
                    }`}></div>
                  <div
                    className={`feature-card ${
                      isSelected && "feature-card-selected"
                    }`}
                    onClick={() => selectFeatureCard(feature["id"])}>
                    {detail !== feature["id"] && (
                      <div className="font-light">{feature["title"]}</div>
                    )}
                    {detail === feature["id"] && (
                      <div style={{ width: "100%" }}>
                        <FontAwesomeIcon
                          icon={faCrown}
                          className="feature-card-icon"
                        />
                        <div className="feature-card-title">{`${feature["title"]}:`}</div>
                        <div className="feature-card-desc">
                          {feature["desc"]}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="feature-right">
          <div className="feature-right-card">
            <div className="feature-right-card-row">
              <div>Website</div>
              <div>E - Commerce</div>
            </div>
            <div className="feature-right-card-row second-row">
              <div>68.2%</div>
              <div className="feature-card-right-icon">Vs</div>
              <div>32.8%</div>
            </div>
            <div className="feature-right-card-last">
              <div className="last-bar website-bar"></div>
              <div className="last-bar ecommerce-bar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

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
      title: "Ad-hoc reporting",
      desc: "Facilitate real-time collaboration among team members with chat and messaging features and Share files and documents securely within the platform.",
    },
    {
      id: 1,
      title: "Interactive dashboards",
      desc: "Facilitate real-time collaboration among team members with chat and messaging features and Share files and documents securely within the platform.",
    },
    {
      id: 2,
      title: "Data drill-down and exploration",
      desc: "Facilitate real-time collaboration among team members with chat and messaging features and Share files and documents securely within the platform.",
    },
    {
      id: 3,
      title: "Scheduled reports and alerts",
      desc: "Facilitate real-time collaboration among team members with chat and messaging features and Share files and documents securely within the platform.",
    },
    {
      id: 4,
      title: "Data exports and sharing",
      desc: "Facilitate real-time collaboration among team members with chat and messaging features and Share files and documents securely within the platform.",
    },
  ];

  return (
    <div className="features features-background">
      <SectionTitle
        name="Why ScureDApp"
        title="SecureDApp for Your Blockchain Security Needs"
        description="Gain actionable insights and make data-driven decisions with powerful reporting tools"
      />
      <div className="flex lg:flex-row flex-col justify-between items-center px-4 lg:px-0 lg:items-stretch space-y-8 lg:space-y-0 lg:space-x-12">
        <div className="feature-left">
          <div className="features-container flex flex-col">
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
                      <div>
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

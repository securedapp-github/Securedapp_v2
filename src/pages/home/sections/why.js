import React from "react";
import { useState } from "react";
import SectionTitle from "../../../components/section-title";

function Why() {
  const [Detail, setDetail] = useState(2);

  const whyData = [
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

  function WhyBox({ id }) {
    return (
      <div>
        <details
          open={Detail === id ? true : false}
          onClick={() => setDetail(id)}>
          <summary>{whyData[id].title}</summary>
          <p>{whyData[id].desc}</p>
        </details>
      </div>
    );
  }

  return (
    <div>
      <SectionTitle
        name="Why ScureDapp"
        title="SecureDApp for Your Blockchain Security Needs"
        description="Gain actionable insights and make data-driven decisions with powerful reporting tools"
      />
      <div>
        <div>
          <WhyBox id={0} />
          <WhyBox id={1} />
          <WhyBox id={2} />
          <WhyBox id={3} />
          <WhyBox id={4} />
        </div>
      </div>
      <div>
        <div>
          <div>
            <div>
              <p>Website</p>
              <p>68.2%</p>
            </div>
            <div>
              <p>Vs</p>
            </div>
            <div>
              <p>E-Commerce</p>
              <p>31.8%</p>
            </div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;

import { useState } from "react";
import IssuesChart from "../../components/overview/IssuesChart";
import ScanSummary from "../../components/overview/ScanSummary";
import "./Overview.css";

const OverviewScreen = () => {
  const [firstTime, setFirstTime] = useState(false);

  return (
    <div className="sss-overview-screen-container">
      <div className="sss-overview-screen">
        <div className="sss-overview-header">
          <div className="">Dashboard</div>
        </div>
        <div className="sss-overview-body">
          {firstTime ? (
            <div className="sss-overview-first-time">
              <img
                src="/assets/images/solidity-shield-scan/dashboard-icon.svg"
                alt=""
              />
              <div className="sss-overview-first-time-details">
                Start your scan here or choose plan{" "}
                <span className="font-semibold underline cursor-pointer">
                  {"Scan Now"}
                </span>
              </div>
            </div>
          ) : (
            <div className="sss-overview-top-cards">
              <ScanSummary />
              <IssuesChart />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OverviewScreen;

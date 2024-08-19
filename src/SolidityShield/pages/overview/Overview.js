import IssuesChart from "../../components/overview/IssuesChart";
import ScanSummary from "../../components/overview/ScanSummary";
import "./Overview.css";

const OverviewScreen = () => {
  return (
    <div className="sss-overview-screen-container">
      <div className="sss-overview-screen">
        <div className="sss-overview-header">
          <div className="">Dashboard</div>
        </div>
        <div className="sss-overview-body">
          <div className="sss-overview-top-cards">
            <ScanSummary />
            <IssuesChart />
          </div>
          <div className="sss-overview-bottom-cards"></div>
        </div>
      </div>
    </div>
  );
};

export default OverviewScreen;

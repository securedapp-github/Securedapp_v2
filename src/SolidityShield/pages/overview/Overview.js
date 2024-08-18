import Header from "../../components/header/Header";
import ChartCard from "../../components/overview/ChartCard";
import ScanSummary from "../../components/overview/ScanSummary";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Overview.css";

const OverviewScreen = () => {
  return (
    <div className="sss-product">
      <Sidebar />
      <div className="sss-product-with-header">
        <Header />
        <div className="sss-overview-screen-container">
          <div className="sss-overview-screen">
            <div className="sss-overview-header">
              <div className="">Dashboard</div>
            </div>
            <div className="sss-overview-body">
              <div className="sss-overview-top-cards">
                <ScanSummary />
                <ChartCard>Issues</ChartCard>
              </div>
              <div className="sss-overview-bottom-cards"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewScreen;

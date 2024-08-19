import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import ChartCard from "../../components/overview/ChartCard";
import IssuesChart from "../../components/overview/IssuesChart";
import ScanSummary from "../../components/overview/ScanSummary";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Overview.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, login } from "../../redux/auth/authSlice";
import { getScanHistory } from "../../redux/scanHistory/scanHistorySlice";
import { getScanHistoryData, downloadReport } from "../../functions";

const OverviewScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector(getUserData);
  var scanHistory = useSelector(getScanHistory);
  scanHistory = scanHistory.history;

  useEffect(() => {
    auth.user.email
      ? getScanHistoryData({
          userEmail: auth.user.email,
          dispatch,
        })
      : navigate("/solidity-shield-scan/auth");
    const latestScan = scanHistory.sort((a, b) => b.id - a.id);
    downloadReport(latestScan.id);
    //console.log(scanSum);
  }, []);

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
                <ScanSummary data={null} />
                <IssuesChart data={null} />
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

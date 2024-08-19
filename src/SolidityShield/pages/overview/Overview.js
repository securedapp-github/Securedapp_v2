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

const OverviewScreen = () => {
  const dispatch = useDispatch();
  const auth = useSelector(getUserData);
  useEffect(() => {
    console.log(auth.user);
  });
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
                <IssuesChart />
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

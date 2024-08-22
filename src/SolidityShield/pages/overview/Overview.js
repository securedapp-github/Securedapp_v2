import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import IssuesChart from "../../components/overview/IssuesChart";
import ScanSummary from "../../components/overview/ScanSummary";
import "./Overview.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../redux/auth/authSlice";
import { getScanHistoryData } from "../../functions";

const OverviewScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector(getUserData);

  useEffect(() => {
    auth.user.email
      ? getScanHistoryData({
          userEmail: auth.user.email,
          dispatch,
        })
      : navigate("/solidity-shield-scan/auth");
  }, []);

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

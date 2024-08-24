import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import IssuesChart from "../../components/overview/IssuesChart";
import ScanSummary from "../../components/overview/ScanSummary";
import "./Overview.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../redux/auth/authSlice";
import { getScanHistoryData } from "../../functions";
import { getScanHistory } from "../../redux/scanHistory/scanHistorySlice";

const OverviewScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector(getUserData);
  const scanHistory = useSelector(getScanHistory);
  const [firstTime, setFirstTime] = useState(true);

  useEffect(() => {
    async function fetch() {
      auth.user.email
        ? await getScanHistoryData({
            userEmail: auth.user.email,
            dispatch,
          })
        : navigate("/solidity-shield-scan/auth");
      console.log(scanHistory.history);
      if (scanHistory.history.length > 0) {
        setFirstTime(false);
      }
    }
    fetch();
  }, [firstTime]);

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
            <div>
              <div className="sss-overview-top-cards">
                <ScanSummary />
                <IssuesChart />
              </div>
              <div className="sss-overview-bottom-cards"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OverviewScreen;

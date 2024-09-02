import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import IssuesChart from "../../components/overview/IssuesChart";
import ScanSummary from "../../components/overview/ScanSummary";
import "./Overview.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../redux/auth/authSlice";
import { getScanHistoryData, getJwt, getUser } from "../../functions";
import { getScanHistory } from "../../redux/scanHistory/scanHistorySlice";
import { setScanNowModal } from "../../redux/commonSlice";

const OverviewScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector(getUserData);
  var scanHistory = useSelector(getScanHistory);
  const [firstTime, setFirstTime] = useState(true);
  const [history, setHistory] = useState();

  useEffect(() => {
    const userJwt = localStorage.getItem("UserJwt");
    async function fetch() {
      if (userJwt) {
        await getUser({ dispatch });
        var data = await getScanHistoryData({
          userEmail: localStorage.getItem("UserEmail"),
          dispatch,
        });
        setHistory(data);
      } else {
        navigate("/solidity-shield-scan/auth");
      }
    }
    fetch();
  }, [history]);

  useEffect(() => {
    if (scanHistory.history.length > 0) setFirstTime(false);
  }, [scanHistory.history]);

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
                <span
                  onClick={() =>
                    auth.user.email
                      ? dispatch(setScanNowModal(true))
                      : navigate("/solidity-shield-scan/auth")
                  }
                  className="font-semibold underline cursor-pointer"
                >
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

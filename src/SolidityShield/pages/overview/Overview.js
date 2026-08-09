import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import IssuesChart from "../../components/overview/IssuesChart";
import ScanSummary from "../../components/overview/ScanSummary";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../redux/auth/authSlice";
import { getScanHistoryData, getJwt, getUser } from "../../functions";
import { getScanHistory } from "../../redux/scanHistory/scanHistorySlice";
import { setScanNowModal, setLoader } from "../../redux/commonSlice";
import MetaTags from "../../../components/common/MetaTags";
import Footer from "../../components/common/Footer";

const OverviewScreen = () => {
  const dispatch = useDispatch();
  const navigate = useRouter();

  const auth = useSelector(getUserData);
  var scanHistory = useSelector(getScanHistory);
  const [firstTime, setFirstTime] = useState(true);
  const [history, setHistory] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    const userJwt = localStorage.getItem("UserJwtToken");
    async function fetch() {
      dispatch(setLoader(true));
      if (userJwt) {
        try {
          await getUser({ dispatch });
        } catch (error) {
          console.warn("Overview: getUser network error, using cached data:", error.message);
        }
        try {
          var data = await getScanHistoryData({
            userEmail: localStorage.getItem("UserEmail"),
            dispatch,
          });
          setHistory(data);
        } catch (error) {
          console.warn("Overview: getScanHistoryData network error:", error.message);
        }
        setUser(auth?.user);
        dispatch(setLoader(false));
        return;
      } else {
        dispatch(setLoader(false));
        navigate.push("/solidity-shield-scan/auth");
      }
    }
    fetch();
  }, [!history && history, !auth?.user?.email && auth?.user]);

  useEffect(() => {
    if (!history) setFirstTime(false);
  }, [scanHistory?.history]);

  return (
    <div className="sss-overview-screen-container">
      <div className="sss-overview-screen">
        <div className="sss-overview-header flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-[#FFFFFF]">Dashboard</h1>
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
                    auth?.user?.email
                      ? dispatch(setScanNowModal(true))
                      : navigate.push("/solidity-shield-scan/auth")
                  }
                  className="font-semibold underline cursor-pointer"
                >
                  {"Scan Now"}
                </span>
              </div>
            </div>
          ) : (
            <div className="sss-overview-top-cards">
              <ScanSummary
                firstTime={auth?.user?.credits === auth?.user?.remainingCredits}
              />
              <IssuesChart />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OverviewScreen;

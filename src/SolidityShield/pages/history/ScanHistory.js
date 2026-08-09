import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import {
  getHistorySelector,
  setHistoryStatusFilter,
} from "../../redux/dashboard/historySlice";
import { getScanHistory } from "../../redux/scanHistory/scanHistorySlice";
import { getScanHistoryData, getUser, getJwt } from "../../functions";
import ScanHistoryTable from "../../components/history/ScanHistoryTable";
import { getUserData } from "../../redux/auth/authSlice";
import { setLoader } from "../../redux/commonSlice";
import Footer from "../../components/common/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight, faShieldHalved } from "@fortawesome/free-solid-svg-icons";

const ScanHistory = () => {
  const { statusFilter } = useSelector(getHistorySelector);
  const auth = useSelector(getUserData);
  var scanHistory = useSelector(getScanHistory);
  const [history, setHistory] = useState(scanHistory?.history || []);
  const dispatch = useDispatch();
  const navigate = useRouter();

  async function handleReload() {
    dispatch(setLoader(true));
    try {
      var data = await getScanHistoryData({
        userEmail: auth?.user?.email || localStorage.getItem("UserEmail"),
        dispatch,
      });
      setHistory(data || []);
    } catch (e) {
      console.warn(e);
    } finally {
      dispatch(setLoader(false));
    }
  }

  useEffect(() => {
    async function fetch() {
      dispatch(setLoader(true));
      const userJwt = getJwt();
      if (userJwt) {
        try {
          await getUser({ dispatch });
        } catch (error) {
          console.warn("ScanHistory: getUser network error:", error.message);
        }
        try {
          var data = await getScanHistoryData({
            userEmail: auth?.user?.email || localStorage.getItem("UserEmail"),
            dispatch,
          });
          setHistory(data || []);
        } catch (error) {
          console.warn("ScanHistory: getScanHistoryData network error:", error.message);
        }
        dispatch(setLoader(false));
      } else {
        navigate.push("/solidity-shield-scan/auth");
      }
    }
    fetch();
  }, []);

  return (
    <div className="sss-scan-history-container min-h-screen p-4 md:p-8 font-poppins">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--sss-color-border)] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E]">
              <FontAwesomeIcon icon={faShieldHalved} className="text-lg" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[var(--sss-color-primary)]">
                Scan History
              </h1>
              <p className="text-xs text-[var(--sss-color-muted)] mt-0.5">
                View, filter, and download your smart contract security audit reports
              </p>
            </div>
          </div>

          <button
            onClick={handleReload}
            className="self-start sm:self-auto px-4 py-2 text-xs font-bold rounded-xl bg-[var(--sss-color-card)] border border-[var(--sss-color-border)] text-[var(--sss-color-primary)] hover:border-[#22C55E] hover:text-[#22C55E] transition-all flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <FontAwesomeIcon icon={faRotateRight} className="text-xs" /> Reload History
          </button>
        </div>

        {/* Unified Table Component */}
        <ScanHistoryTable
          scanHistoryData={history}
          statusFilter={statusFilter}
          onFilterChange={(filter) => dispatch(setHistoryStatusFilter(filter))}
        />

        <Footer />
      </div>
    </div>
  );
};

export default ScanHistory;

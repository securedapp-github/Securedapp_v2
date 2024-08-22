import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./ScanHistory.css";
import {
  getHistorySelector,
  setHistoryStatusFilter,
} from "../../redux/dashboard/historySlice";
import { getScanHistory } from "../../redux/scanHistory/scanHistorySlice";
import { getScanHistoryData } from "../../functions";
import { useDispatch } from "react-redux";
import ScanHistoryTable from "../../components/history/ScanHistoryTable";
import { scanHistoryDummyData } from "./scanHistory.data";
import Pagination from "../../components/common/Pagination";
import { getUserData } from "../../redux/auth/authSlice";

const scanHistoryStatusFilter = ["Succeeded", "Failed", "Inprogress", "All"];

const ScanHistory = () => {
  const { statusFilter } = useSelector(getHistorySelector);
  const auth = useSelector(getUserData);
  var scanHistory = useSelector(getScanHistory);
  const [history, setHistory] = useState(scanHistory.history);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    !auth.user.email && navigate("/solidity-shield-scan/auth");
    async function fetch() {
      await getScanHistoryData({ userEmail: auth.user.email, dispatch });
      setHistory(scanHistory.history);
    }
    fetch();
  }, []);

  return (
    <div className="sss-scan-history-container">
      <div className="sss-scan-history">
        <div className="sss-scan-history-header-container">
          <div className="sss-scan-history-header">History</div>
          <div className="sss-scan-history-header-right">
            <div className="sss-scan-history-header-button">
              <div className="sss-scan-history-header-button-icon">
                <img
                  src="/assets/images/solidity-shield-scan/history-filter.svg"
                  alt="Filter Icon"
                />
              </div>
              <div className="">Filter</div>
              <div className="sss-scan-history-header-button-text"></div>
            </div>
            <div className="sss-scan-history-header-button">
              <div className="sss-scan-history-header-button-icon">
                <img
                  src="/assets/images/solidity-shield-scan/history-export.svg"
                  alt="Export Icon"
                />
              </div>
              <div className="">Export</div>
              <div className="sss-scan-history-header-button-text"></div>
            </div>
          </div>
        </div>
        <div className="sss-scan-history-body">
          <div className="sss-scan-history-body-header">
            <div className="sss-scan-history-body-header-filter-container">
              {scanHistoryStatusFilter.map((filter) => {
                return (
                  <div
                    onClick={() => dispatch(setHistoryStatusFilter(filter))}
                    className={`sss-scan-history-body-header-filter ${
                      filter === statusFilter &&
                      "sss-scan-history-body-header-filter-selected"
                    }`}
                  >
                    {filter}
                    <div
                      className={`sss-scan-history-body-header-filter-under ${
                        filter === statusFilter &&
                        "sss-scan-history-body-header-filter-under-selected"
                      }`}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
          <ScanHistoryTable
            scanHistoryData={history}
            statusFilter={statusFilter}
          />
        </div>
        <div className="sss-scan-history-footer">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default ScanHistory;

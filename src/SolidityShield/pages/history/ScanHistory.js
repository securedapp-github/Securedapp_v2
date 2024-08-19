import { useSelector } from "react-redux";
import "./ScanHistory.css";
import {
  getHistorySelector,
  setHistoryStatusFilter,
} from "../../redux/dashboard/historySlice";
import { useDispatch } from "react-redux";
import ScanHistoryTable from "../../components/overview/ScanHistoryTable";
import { scanHistoryDummyData } from "./scanHistory.data";

const scanHistoryStatusFilter = ["Succeeded", "Failed", "Inprogress", "All"];

const ScanHistory = () => {
  const { statusFilter } = useSelector(getHistorySelector);
  const dispatch = useDispatch();

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
                    }`}>
                    {filter}
                    <div
                      className={`sss-scan-history-body-header-filter-under ${
                        filter === statusFilter &&
                        "sss-scan-history-body-header-filter-under-selected"
                      }`}></div>
                  </div>
                );
              })}
            </div>
          </div>
          <ScanHistoryTable
            scanHistoryData={scanHistoryDummyData}
            statusFilter={statusFilter}
          />
        </div>
      </div>
    </div>
  );
};

export default ScanHistory;

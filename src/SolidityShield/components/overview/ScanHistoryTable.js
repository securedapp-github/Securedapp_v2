import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { scanHistoryDummyData } from "../../pages/history/scanHistory.data";
import CustomDivider from "../common/CustomDivider";
import "./ScanHistoryTable.css";
import { faCheck, faSpinner, faXmark } from "@fortawesome/free-solid-svg-icons";

const StatusTypeComponent = ({ status }) => {
  return (
    <div
      className={`sss-history-status-type-component-container ${
        status === "Succeeded"
          ? "sss-history-status-type-component-container-green"
          : status === "Failed"
          ? "sss-history-status-type-component-container-red"
          : "sss-history-status-type-component-container-yellow"
      }`}>
      <div className="sss-history-status-type-component">
        <FontAwesomeIcon
          icon={
            status === "Succeeded"
              ? faCheck
              : status === "Failed"
              ? faXmark
              : faSpinner
          }
        />
        <div className="">{status}</div>
      </div>
    </div>
  );
};

const ScanHistoryTable = ({ statusFilter }) => {
  return (
    <div className="sss-history-table-container">
      <div className="sss-history-table">
        <div className="sss-history-table-header">
          <div className="sss-history-table-checkbox-container">
            <div className="sss-history-table-checkbox-header">
              <input type="checkbox" />
            </div>
          </div>
          <div className="sss-history-table-report-id-container">
            <div className="sss-history-table-header-report-id">REPORT ID</div>
          </div>
          <div className="sss-history-table-date-container">
            <div className="sss-history-header-table-date">DATE</div>
          </div>
          <div className="sss-history-table-report-link-container">
            <div className="sss-history-table-header-report-link">
              REPORT LINK
            </div>
          </div>
          <div className="sss-history-table-status-container">
            <div className="sss-history-table-header-status">STATUS</div>
          </div>
          <div className="sss-history-table-options-container">
            <div className="sss-history-table-header-options"></div>
          </div>
        </div>
        <CustomDivider classname={"w-full py-3"} />
        <div className="sss-history-table-body">
          {scanHistoryDummyData.map((data, index) => {
            return (
              (data.status === statusFilter || statusFilter === "All") && (
                <div className="sss-history-table-row">
                  <div className="sss-history-table-checkbox-container">
                    <div className="sss-history-table-checkbox">
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div className="sss-history-table-report-id-container">
                    <div className="sss-history-table-report-id">
                      {data.reportId}
                    </div>
                  </div>
                  <div className="sss-history-table-date-container">
                    <div className="sss-history-table-date">{data.date}</div>
                  </div>
                  <div className="sss-history-table-report-link-container">
                    <div className="sss-history-table-report-link">
                      {data.reportLink}
                    </div>
                  </div>
                  <div className="sss-history-table-status-container">
                    <div className="sss-history-table-status">
                      {<StatusTypeComponent status={data.status} />}
                    </div>
                  </div>
                  <div className="sss-history-table-options-container">
                    <div className="sss-history-table-options">
                      <img
                        src="/assets/images/solidity-shield-scan/scan-history-table-option.svg"
                        alt="Option Icon"
                      />
                    </div>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScanHistoryTable;

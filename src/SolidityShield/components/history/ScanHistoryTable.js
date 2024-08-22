import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ScanHistoryTable.css";
import { faCheck, faSpinner, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { formatDate } from "../../functions";

const StatusTypeComponent = ({ status }) => {
  return (
    <div
      className={`sss-history-status-type-component-container ${
        status === "Succeeded"
          ? "sss-history-status-type-component-container-green"
          : status === "Failed"
          ? "sss-history-status-type-component-container-red"
          : "sss-history-status-type-component-container-yellow"
      }`}
    >
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

const ScanHistoryTable = ({ scanHistoryData, statusFilter }) => {
  return (
    <div className="sss-history-table-container">
      <div className="sss-history-table-scrollable">
        <div className="sss-history-table">
          <div className="sss-history-table-header">
            <div className="sss-history-table-checkbox-container">
              <div className="sss-history-table-checkbox-header sss-history-table-header-item">
                <input type="checkbox" />
              </div>
            </div>
            <div className="sss-history-table-report-id-container">
              <div className="sss-history-table-header-report-id sss-history-table-header-item">
                REPORT ID
              </div>
            </div>
            <div className="sss-history-table-date-container">
              <div className="sss-history-header-table-date sss-history-table-header-item">
                DATE
              </div>
            </div>
            <div className="sss-history-table-report-link-container">
              <div className="sss-history-table-header-report-link sss-history-table-header-item">
                REPORT LINK
              </div>
            </div>
            <div className="sss-history-table-status-container">
              <div className="sss-history-table-header-status sss-history-table-header-item">
                STATUS
              </div>
            </div>
            <div className="sss-history-table-options-container">
              <div className="sss-history-table-header-options sss-history-table-header-item"></div>
            </div>
          </div>
          <div className="sss-history-table-body">
            {scanHistoryData.map((data, index) => {
              return (
                (data.status !== statusFilter || statusFilter === "All") && (
                  <div className="sss-history-table-row">
                    <div className="sss-history-table-checkbox-container">
                      <div className="sss-history-table-checkbox">
                        <input type="checkbox" />
                      </div>
                    </div>
                    <div className="sss-history-table-report-id-container">
                      <div className="sss-history-table-report-id">
                        {data.id}
                      </div>
                    </div>
                    <div className="sss-history-table-date-container">
                      <div className="sss-history-table-date">
                        {formatDate(data.date)}
                      </div>
                    </div>
                    <div className="sss-history-table-report-link-container">
                      <div className="sss-history-table-report-link">
                        <Link to={"/solidity-shield-scan/report/" + data.id}>
                          {"Report - " + data.id}
                        </Link>
                      </div>
                    </div>
                    {/* <div className="sss-history-table-status-container">
                      <div className="sss-history-table-status">
                        {<StatusTypeComponent status={data.status} />}
                      </div>
                    </div> */}
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
    </div>
  );
};

export default ScanHistoryTable;

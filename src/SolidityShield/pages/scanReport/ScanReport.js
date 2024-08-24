import "./ScanReport.css";
import { auditStats, scanReportData } from "./scanReport.data";

const ScanReportBar = ({ type, number, color }) => {
  return (
    <div className="sss-scan-report-bar-container">
      <div style={{ backgroundColor: color }} className={`sss-scan-report-bar`}>
        <div className="sss-scan-report-bar-type">{type}</div>
        <div className="sss-scan-report-bar-number">{number}</div>
      </div>
    </div>
  );
};

const ScanReport = () => {
  return (
    <div className="sss-scan-report-screen-container">
      <div className="sss-scan-report-screen">
        <div className="sss-scan-report-header">
          <div className="">Scan Report</div>
        </div>
        <div className="sss-scan-report-body-container">
          <div className="sss-scan-report-body">
            <div className="sss-scan-report-body-header">
              <div className="sss-scan-report-body-header-title">
                Latest Scan
              </div>
              <div className="sss-scan-report-body-header-time">
                {"Tuesday  |  December 24th, 2024"}
              </div>
            </div>
            <div className="sss-scan-report-body-bars">
              {scanReportData.map((data) => {
                return (
                  <ScanReportBar
                    type={data.type}
                    number={data.number}
                    color={data.color}
                  />
                );
              })}
            </div>
            <div className="sss-scan-report-body-audit-stats">
              <div className="sss-scan-report-body-audit-title">
                Audit Statistics
              </div>
              <div className="sss-scan-report-body-audit-stats-table">
                {auditStats.map((data, index) => {
                  return (
                    <div
                      className={`sss-scan-report-body-audit-stats-table-row ${
                        index !== auditStats.length - 1 && "border-b"
                      }`}>
                      <div className="sss-scan-report-body-audit-stats-table-row-name">
                        {data.name}
                      </div>
                      <div className="sss-scan-report-body-audit-stats-table-row-value">
                        {data.value}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanReport;

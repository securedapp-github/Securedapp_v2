import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./ScanReport.css";
import { auditStats, scanReportData } from "./scanReport.data";
import { getReport, getScanHistoryData } from "../../functions";
import { getUserData } from "../../redux/auth/authSlice";
import { toast } from "react-toastify";
import { getScanHistory } from "../../redux/scanHistory/scanHistorySlice";

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

function formatDate(dateString) {
  const date = new Date(dateString);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);

  // Get the day of the week
  const weekday = formattedDate.split(",")[0];

  // Format the day with ordinal suffix
  const day = date.getDate();
  const dayWithSuffix =
    day +
    (day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th");

  // Get the month and year
  const monthYear = formattedDate.split(", ")[1];

  return `${weekday} | ${
    monthYear.split(" ")[0]
  } ${dayWithSuffix}, ${date.getFullYear()}`;
}

const ScanReport = ({ downloadId }) => {
  const auth = useSelector(getUserData);
  const scanHistory = useSelector(getScanHistory);
  const [history, setHistory] = useState(scanHistory.history);
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  var { id } = useParams();
  if (!id) {
    id = downloadId;
  }

  useEffect(() => {
    async function fetch() {
      !auth.user.email && navigate("/solidity-shield-scan/auth");
      await getScanHistoryData({ userEmail: auth.user.email, dispatch });
      setHistory(scanHistory.history);
      var latestScan = scanHistory.history.reduce((max, item) => {
        return item.id > max.id ? item : max;
      }, history[0]);
      if (auth.user.plan == 0 && Number(latestScan.id) != Number(id)) {
        !downloadId && toast("Upgrade to view the report");
        !downloadId && navigate("/solidity-shield-scan/overview");
      }
      const report = await getReport({ id: id, email: auth.user.email });
      setData(report);
      console.log(report);
    }
    fetch();
  }, [history]);

  return (
    <div id={`scan-report-${id}`} className="sss-scan-report-screen-container">
      <div className="sss-scan-report-screen">
        <div className="sss-scan-report-header">
          <div className="">Scan Report</div>
        </div>
        <div className="sss-scan-report-body-container">
          <div className="sss-scan-report-body">
            <div className="sss-scan-report-body-header">
              <div className="sss-scan-report-body-header-title">
                Solidity Shield Scan
              </div>
              <div className="sss-scan-report-body-header-time">
                {data && formatDate(data.date)}
              </div>
            </div>
            <div className="sss-scan-report-body-bars">
              {data &&
                Object.keys(data.findings).map((key) => {
                  return (
                    <ScanReportBar
                      type={
                        key === "optimization_issues"
                          ? "Gas Optimization"
                          : key === "informational_issues"
                          ? "Informational Issues"
                          : key === "high_issues"
                          ? "Critical"
                          : key === "medium_issues"
                          ? "Medium"
                          : key === "low_issues"
                          ? "Low"
                          : ""
                      }
                      number={data.findings[key]}
                      color={
                        key === "optimization_issues"
                          ? "#22EC8A"
                          : key === "informational_issues"
                          ? "#EFAB59"
                          : key === "high_issues"
                          ? "#22EC8A"
                          : key === "medium_issues"
                          ? "#22EC8A"
                          : key === "low_issues"
                          ? "#F8DAB5"
                          : ""
                      }
                    />
                  );
                })}
            </div>
            <div className="sss-scan-report-body-audit-stats">
              <div className="sss-scan-report-body-audit-title">
                Audit Statistics
              </div>
              {data && (
                <div className="sss-scan-report-body-audit-stats-table">
                  <div
                    className={`sss-scan-report-body-audit-stats-table-row ${"border-b"}`}
                  >
                    <div className="sss-scan-report-body-audit-stats-table-row-name">
                      Audit Score
                    </div>
                    <div className="sss-scan-report-body-audit-stats-table-row-value">
                      {data.score}
                    </div>
                  </div>
                  <div
                    className={`sss-scan-report-body-audit-stats-table-row ${"border-b"}`}
                  >
                    <div className="sss-scan-report-body-audit-stats-table-row-name">
                      Audit Hash
                    </div>
                    <div className="sss-scan-report-body-audit-stats-table-row-value">
                      {data.id}
                    </div>
                  </div>
                  <div
                    className={`sss-scan-report-body-audit-stats-table-row ${"border-b"}`}
                  >
                    <div className="sss-scan-report-body-audit-stats-table-row-name">
                      Number of Contracts
                    </div>
                    <div className="sss-scan-report-body-audit-stats-table-row-value">
                      {data.contracts}
                    </div>
                  </div>
                  <div
                    className={`sss-scan-report-body-audit-stats-table-row ${"border-b"}`}
                  >
                    <div className="sss-scan-report-body-audit-stats-table-row-name">
                      Lines of code scaneed
                    </div>
                    <div className="sss-scan-report-body-audit-stats-table-row-value">
                      {data.lines}
                    </div>
                  </div>
                  <div
                    className={`sss-scan-report-body-audit-stats-table-row ${"border-b"}`}
                  >
                    <div className="sss-scan-report-body-audit-stats-table-row-name">
                      Lines of Assembly
                    </div>
                    <div className="sss-scan-report-body-audit-stats-table-row-value">
                      {data.assembly_lines}
                    </div>
                  </div>
                  <div
                    className={`sss-scan-report-body-audit-stats-table-row ${"border-b"}`}
                  >
                    <div className="sss-scan-report-body-audit-stats-table-row-name">
                      ERC Standard used
                    </div>
                    <div className="sss-scan-report-body-audit-stats-table-row-value">
                      {data.ercs.join(", ")}
                    </div>
                  </div>
                  <div
                    className={`sss-scan-report-body-audit-stats-table-row ${"border-b"}`}
                  >
                    <div className="sss-scan-report-body-audit-stats-table-row-name">
                      Total Vulnerabilities found
                    </div>
                    <div className="sss-scan-report-body-audit-stats-table-row-value">
                      {Object.values(data.findings).reduce(
                        (accumulator, currentValue) => {
                          return accumulator + currentValue;
                        },
                        0
                      )}
                    </div>
                  </div>
                  <div
                    className={`sss-scan-report-body-audit-stats-table-row ${"border-b"}`}
                  >
                    <div className="sss-scan-report-body-audit-stats-table-row-name">
                      By SecureDApp
                    </div>
                    <div className="sss-scan-report-body-audit-stats-table-row-value">
                      <Link to={"/contact"}>Request Manual Audit</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanReport;

import ChartCard from "./ChartCard";
import "./ScanSummary.css";
import {
  getOverviewSelector,
  setDateFilter,
} from "../../redux/dashboard/scanSummarySlice";
import { getUserData } from "../../redux/auth/authSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CustomButton from "../common/CustomButton";
import { getScanHistory } from "../../functions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const scanSummaryTimeFilter = ["Monthly", "Weekly", "Today"];

const GradientCircularProgressbar = ({ value, text }) => {
  let gradientTransform = `rotate(${120})`;

  return (
    <div>
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient
            id={"circularGradient"}
            gradientTransform={gradientTransform}
          >
            <stop offset="0%" stopColor={"#EA7A9A"} />
            <stop offset="100%" stopColor={"#FAC7B6"} />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgressbarWithChildren
        value={value}
        circleRatio={0.75}
        strokeWidth={12}
        styles={buildStyles({
          rotation: 1 / 2 + 1 / 8,
          strokeLinecap: "butt",
          trailColor: "#F0F0F0",
          pathColor: "url(#circularGradient)",
        })}
      >
        <div className="sss-scan-summary-progress-value-container">
          <div className="sss-scan-summary-progress-value">{text}</div>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

const FigureComponent = ({ value, text }) => {
  return (
    <div className="sss-figure-component-container">
      <div className="sss-figure-component">
        <div className="sss-figure-component-figure">{value}</div>
        <div className="sss-figure-component-text">{text}</div>
      </div>
    </div>
  );
};

const ScanSummary = ({ data }) => {
  const { dateFilter, scanSummary } = useSelector(getOverviewSelector);
  const dispatch = useDispatch();

  return (
    <ChartCard>
      <div className="sss-overview-scan-summary-container">
        <div className="sss-overview-scan-summary">
          <div className="sss-overview-scan-summary-header">
            <div className="sss-overview-scan-summary-header-left">
              <div className="sss-overview-scan-summary-header-left-title">
                Scan Summary
              </div>
              <div className="sss-overview-scan-summary-header-left-desc">
                Lorem ipsum dolor sit amet, consectetur
              </div>
            </div>
            <div className="sss-overview-scan-summary-header-right">
              {scanSummaryTimeFilter.map((time) => {
                return (
                  <div
                    onClick={() => dispatch(setDateFilter(time))}
                    className="sss-overview-scan-summary-header-right-item-container"
                  >
                    <div
                      className={`sss-overview-scan-summary-header-right-item ${
                        time === dateFilter &&
                        "sss-scan-summary-selected-date-filter"
                      }`}
                    >
                      {time}
                    </div>
                    <div
                      className={`sss-scan-summary-date-filter-under ${
                        time === dateFilter &&
                        "sss-scan-summary-date-filter-under-selected"
                      }`}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="sss-scan-summary-body">
            <div className="sss-scan-summary-body-chart-container">
              <GradientCircularProgressbar
                value={scanSummary.percentageValue}
                text={`${scanSummary.percentageValue}%`}
              />
            </div>
            <div className="sss-scan-summary-body-result">
              <div className="sss-scan-summary-body-result-title">Issue</div>
              <div className="sss-scan-summary-body-result-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </div>
              <div className="sss-scan-summary-body-result-button">
                <CustomButton
                  text={"More Details"}
                  className={
                    "bg-[#FFEEF3] rounded-3xl text-[#EA7A9A] py-3 w-[150px]"
                  }
                />
              </div>
            </div>
          </div>
          <div className="sss-scan-summary-body-footer">
            {scanSummary.values.map((item) => [
              <FigureComponent value={item.value} text={item.text} />,
            ])}
          </div>
        </div>
      </div>
    </ChartCard>
  );
};

export default ScanSummary;

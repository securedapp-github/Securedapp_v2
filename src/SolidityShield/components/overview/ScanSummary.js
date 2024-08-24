import ChartCard from "./ChartCard";
import "./ScanSummary.css";
import {
  getScanSummarySelector,
  setDateFilter,
} from "../../redux/dashboard/scanSummarySlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CustomButton from "../common/CustomButton";

const scanSummaryTimeFilter = ["Monthly", "Weekly", "Today"];

const GradientCircularProgressbar = ({ value, text }) => {
  let gradientTransform = `rotate(${120})`;

  return (
    <div>
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient
            id={"circularGradient"}
            gradientTransform={gradientTransform}>
            <stop offset="0%" stopColor={"#12D576"} />
            <stop offset="100%" stopColor={"#6BFFB7"} />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgressbarWithChildren
        value={value}
        circleRatio={0.75}
        strokeWidth={12}
        styles={buildStyles({
          rotation: 1 / 2 + 1 / 8,
          pathTransition: "stroke-dashoffset 1s ease 0s",
          strokeLinecap: "butt",
          trailColor: "#F0F0F0",
          pathColor: "url(#circularGradient)",
        })}>
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

const ScanSummary = () => {
  const { dateFilter, scanSummary } = useSelector(getScanSummarySelector);
  const dispatch = useDispatch();

  return (
    <div className="flex-1 w-full">
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
              {/* <div className="sss-overview-scan-summary-header-right">
                {scanSummaryTimeFilter.map((time) => {
                  return (
                    <div
                      onClick={() => dispatch(setDateFilter(time))}
                      className="sss-overview-scan-summary-header-right-item-container">
                      <div
                        className={`sss-overview-scan-summary-header-right-item ${
                          time === dateFilter &&
                          "sss-scan-summary-selected-date-filter"
                        }`}>
                        {time}
                      </div>
                      <div
                        className={`sss-scan-summary-date-filter-under ${
                          time === dateFilter &&
                          "sss-scan-summary-date-filter-under-selected"
                        }`}></div>
                    </div>
                  );
                })}
              </div> */}
            </div>
            <div className="sss-scan-summary-body">
              <div className="sss-scan-summary-body-chart-container">
                <div className="sss-scan-summary-body-chart">
                  <GradientCircularProgressbar
                    value={scanSummary.percentageValue}
                    text={`${scanSummary.percentageValue}%`}
                  />
                </div>
              </div>
              <div className="sss-scan-summary-body-cards">
                {scanSummary.values.map((item) => [
                  <FigureComponent value={item.value} text={item.text} />,
                ])}
              </div>
              <div className="sss-scan-summary-body-result">
                <div className="sss-scan-summary-body-result-title">Issue</div>
                <div className="sss-scan-summary-body-result-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </div>
                <div className="sss-scan-summary-body-result-button">
                  <CustomButton
                    text={"More Details"}
                    className={
                      "bg-[#12D576] rounded-3xl text-[#ffffff] py-3 w-[150px]"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ChartCard>
    </div>
  );
};

export default ScanSummary;

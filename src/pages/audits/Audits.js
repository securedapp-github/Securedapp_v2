import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import Navbar from "../../components/navbar/Navbar";
import "./Audits.css";
import { auditChartsData, auditsCard1, auditsCard2 } from "./audits.data";

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
        value={value * 10}
        circleRatio={0.75}
        strokeWidth={12}
        styles={buildStyles({
          rotation: 1 / 2 + 1 / 8,
          pathTransition: "stroke-dashoffset 1s ease 0s",
          strokeLinecap: "butt",
          trailColor: "#F0F0F0",
          pathColor: "url(#circularGradient)",
        })}>
        <div className="audits-page-body-progress-value-container">
          <div className="audits-page-body-progress-value">{text}</div>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

const FigureComponent = ({ value, text, color }) => {
  return (
    <div
      style={{ border: `2px solid #C6C7F833` }}
      className="audits-page-body-figure-component-container">
      <div className="audits-page-body-figure-component">
        <div className="audits-page-body-figure-component-figure">{value}</div>
        <div className="audits-page-body-figure-component-text">{text}</div>
      </div>
    </div>
  );
};

const AuditsPageCard = ({ headers, details, children }) => {
  return (
    <div className="audits-page-card-container">
      <div className="audits-page-card">
        <div className="audits-page-card-headers">
          {headers.map((header, index) => {
            return (
              <div
                className={`audits-page-card-header ${
                  index === 0
                    ? "min-w-[150px] sm:min-w-[250px] md:min-w-[350px]"
                    : ""
                }`}>
                {header}
              </div>
            );
          })}
        </div>
        <div className="audits-page-card-body">
          {details && (
            <div className="audits-page-card-body-rows">
              {details.map((detail, index) => {
                return (
                  <div className="audits-page-card-body-row">
                    <div className="audits-page-card-body-row-topic">
                      {detail.topic}
                    </div>
                    <div className="audits-page-card-body-row-value">
                      {detail.value}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

const AuditsPage = () => {
  return (
    <div className="audits-page-container">
      <Navbar />
      <div className="audits-page">
        <div className="audits-page-header">
          <div className="audits-page-header-title">Audits</div>
          <div className="audits-page-header-description">
            Places we were interviewed
          </div>
        </div>
        <div className="audits-page-body">
          <div className="audits-page-body-search">
            <div className="audits-page-body-search-input">
              <input
                className="audits-page-body-search-input-box"
                placeholder="Search"
                onChange={() => {}}
                type="text"
              />
            </div>
          </div>
          <div className="audits-page-body-logo">
            <div className="audits-page-body-logo-image">
              <img
                src="/assets/images/audits-page-logo.svg"
                alt="Axie Infinity"
              />
            </div>
            <div className="audits-page-body-logo-desc">
              <div className="audits-page-body-logo-desc-title">
                Axie Infinity
              </div>
              <div className="audits-page-body-logo-desc-timeline">
                Date: 21 Aug 2024
              </div>
            </div>
          </div>
          <div className="audits-page-body-cards">
            <AuditsPageCard
              headers={auditsCard1.headers}
              details={auditsCard1.body}
            />
            <AuditsPageCard
              headers={auditsCard2.headers}
              details={auditsCard2.body}
            />
            <AuditsPageCard headers={["Safety Score"]}>
              <div className="audits-page-card-body-chart">
                <div className="audits-page-card-body-chart-left">
                  <GradientCircularProgressbar value={8.5} text={"85%"} />
                </div>
                <div className="audits-page-card-body-chart-right">
                  {auditChartsData.map((data) => {
                    return (
                      <FigureComponent value={data.number} text={data.text} />
                    );
                  })}
                </div>
              </div>
            </AuditsPageCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditsPage;

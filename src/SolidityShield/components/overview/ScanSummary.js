import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import ChartCard from "./ChartCard";
import {
  getOverviewSelector,
  setDateFilter,
} from "../../redux/dashboard/scanSummarySlice";
import { getUserData } from "../../redux/auth/authSlice";
import { getScanHistory } from "../../redux/scanHistory/scanHistorySlice";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CustomButton from "../common/CustomButton";
import { getScanHistoryData, getScanSummaryData } from "../../functions";
import {
  getCommonSelector,
  setScanNowModal,
  setSideBar,
} from "../../redux/commonSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const scanSummaryTimeFilter = ["Monthly", "Weekly", "Today"];

const GradientCircularProgressbar = ({ value, isNoScan }) => {
  let gradientTransform = `rotate(120)`;

  return (
    <div className="relative flex flex-col items-center justify-center my-2">
      <svg style={{ height: 0, width: 0, position: "absolute" }}>
        <defs>
          <linearGradient
            id="circularGradient"
            gradientTransform={gradientTransform}
          >
            <stop offset="0%" stopColor="#22C55E" />
            <stop offset="100%" stopColor="#4ADE80" />
          </linearGradient>
        </defs>
      </svg>
      <div className="w-52 h-52 sm:w-60 sm:h-60 relative flex items-center justify-center">
        <CircularProgressbarWithChildren
          value={isNoScan ? 0 : (value || 0) * 10}
          circleRatio={0.75}
          strokeWidth={10}
          styles={buildStyles({
            rotation: 1 / 2 + 1 / 8,
            pathTransition: "stroke-dashoffset 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            strokeLinecap: "round",
            trailColor: "#1E293B",
            pathColor: "url(#circularGradient)",
          })}
        >
          <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-[#0B132B]/90 border border-[#1E293B] shadow-inner flex flex-col items-center justify-center p-3 text-center transition-all">
            {isNoScan ? (
              <div className="flex flex-col items-center justify-center gap-1">
                <div className="w-9 h-9 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] mb-1">
                  <FontAwesomeIcon icon={faShieldHalved} className="text-base" />
                </div>
                <div className="text-xs font-bold text-[#FFFFFF] tracking-wide">
                  No scans yet
                </div>
                <div className="text-[11px] font-medium text-[#8B93A7]">
                  0 / 10 Score
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight">
                  {value || 0}
                </div>
                <div className="text-xs font-medium text-[#22C55E] mt-0.5">
                  out of 10
                </div>
              </div>
            )}
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <div className="text-xs font-bold text-[#8B93A7] uppercase tracking-wider mt-1">
        Audit Score
      </div>
    </div>
  );
};

const FigureComponent = ({ value, text, color }) => {
  return (
    <div
      style={{ borderColor: color ? `${color}40` : "#1E293B" }}
      className="w-full sm:w-[130px] bg-[#0F1729] border rounded-xl p-3 flex flex-col justify-between shadow-sm transition-transform hover:-translate-y-0.5"
    >
      <div
        style={{ color: color || "#22C55E" }}
        className="font-extrabold text-xl"
      >
        {value}
      </div>
      <div className="text-xs font-medium text-[#8B93A7] mt-1">{text}</div>
    </div>
  );
};

const ScanSummary = ({ firstTime }) => {
  const { dateFilter, scanSummary } = useSelector(getOverviewSelector);
  const scanHistory = useSelector(getScanHistory);
  const dispatch = useDispatch();
  const navigate = useRouter();
  const auth = useSelector(getUserData);

  useEffect(() => {
    const fetch = async () => {
      await getScanSummaryData({
        email: localStorage.getItem("UserEmail"),
        dispatch,
      });
    };
    fetch();
  }, [!scanSummary && scanSummary]);

  const hasNoScan = firstTime || !scanSummary?.percentageValue;

  return (
    <div className="flex-1 w-full">
      <ChartCard className="overflow-hidden border border-[var(--sss-color-border)] bg-[var(--sss-color-card)] rounded-2xl shadow-xl">
        <div className="p-5 sm:p-7 flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--sss-color-border)] pb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E]">
                <FontAwesomeIcon icon={faShieldHalved} className="text-base" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--sss-color-primary)] tracking-tight">
                  Scan Summary
                </h3>
                <p className="text-xs text-[var(--sss-color-muted)] mt-0.5">
                  Summary of your latest smart contract scan
                </p>
              </div>
            </div>
          </div>

          {/* Main Body */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-2">
            {/* Left Gauge Chart */}
            <div className="flex-1 flex items-center justify-center w-full">
              <GradientCircularProgressbar
                isNoScan={hasNoScan}
                value={scanSummary?.percentageValue || 0}
              />
            </div>

            {/* Right Summary / Result Action */}
            <div className="flex-1 w-full flex flex-col items-center md:items-start text-center md:text-left gap-4 bg-[#0B132B]/60 border border-[var(--sss-color-border)] rounded-xl p-5 sm:p-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--sss-color-muted)]">
                  {hasNoScan ? "Status" : "Audit Overview"}
                </span>
              </div>

              <h4 className="text-xl font-bold text-[var(--sss-color-primary)]">
                {hasNoScan ? "No Scans Found" : "Latest Audit Completed"}
              </h4>

              <p className="text-xs text-[var(--sss-color-muted)] leading-relaxed max-w-md">
                {hasNoScan
                  ? "Scan your smart contracts instantly to detect vulnerabilities, gas optimizations, and security compliance scores."
                  : scanSummary?.summary || "Your latest scan results are ready for review."}
              </p>

              {scanSummary?.values && scanSummary.values.length > 0 && !hasNoScan && (
                <div className="w-full flex flex-wrap items-center gap-2 mt-1">
                  {scanSummary.values.map((item, idx) => (
                    <FigureComponent
                      key={idx}
                      value={item.value}
                      text={item.name}
                      color={item.color}
                    />
                  ))}
                </div>
              )}

              <div className="w-full pt-2 flex justify-center md:justify-start">
                {hasNoScan ? (
                  <CustomButton
                    onClick={() =>
                      auth?.user?.email
                        ? dispatch(setScanNowModal(true))
                        : navigate.push("/solidity-shield-scan/auth")
                    }
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#22C55E] text-[#0A1120] font-bold hover:bg-[#16a34a] active:bg-[#16a34a] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#22C55E]/10"
                    text={"Scan Now"}
                  />
                ) : (
                  <CustomButton
                    text={"View Full Report"}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#22C55E] text-[#0A1120] font-bold hover:bg-[#16a34a] active:bg-[#16a34a] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#22C55E]/10"
                    onClick={() =>
                      navigate.push(
                        `/solidity-shield-scan/report?id=${
                          scanHistory.history.reduce((max, item) => {
                            return item.id > max.id ? item : max;
                          }, scanHistory.history[0]).id
                        }`
                      )
                    }
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </ChartCard>
    </div>
  );
};

export default ScanSummary;

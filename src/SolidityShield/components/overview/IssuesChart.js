import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import ChartCard from "./ChartCard";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import {
  getIssuesSelector,
  setDateFilter,
} from "../../redux/dashboard/issuesSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { getIssuesChartData } from "../../functions";
import { getUserData } from "../../redux/auth/authSlice";
import { setScanNowModal } from "../../redux/commonSlice";

const issuesTimeFilter = ["All", "Monthly", "Weekly", "Today"];
const issuesChartHeaderOptions = [
  "High level issues",
  "Medium level issues",
  "Low level issues",
];

const CustomAreaChart = ({ data, darkMode }) => (
  <ResponsiveContainer className="w-full text-xs" width="100%" height={300}>
    <AreaChart
      margin={{
        left: -20,
        top: 10,
        right: 10,
        bottom: 0,
      }}
      data={data}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22C55E" stopOpacity={0.4} />
          <stop offset="100%" stopColor="#22C55E" stopOpacity={0.0} />
        </linearGradient>
      </defs>
      <CartesianGrid stroke={darkMode ? "#1E293B" : "#E2E8F0"} strokeDasharray="3 3" />
      <XAxis dataKey="name" stroke={darkMode ? "#8B93A7" : "#64748B"} />
      <YAxis dataKey="value" stroke={darkMode ? "#8B93A7" : "#64748B"} />
      <Tooltip
        contentStyle={{
          backgroundColor: darkMode ? "#0F1729" : "#FFFFFF",
          borderColor: darkMode ? "#1E293B" : "#CBD5E1",
          color: darkMode ? "#FFFFFF" : "#0F172A",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}
        formatter={(value) => new Intl.NumberFormat("en").format(value)}
      />
      <Area
        type="monotone"
        dataKey="value"
        stroke="#22C55E"
        fill="url(#colorUv)"
        strokeWidth={3}
      />
    </AreaChart>
  </ResponsiveContainer>
);

const IssuesChart = () => {
  const { issuesData } = useSelector(getIssuesSelector);
  const dispatch = useDispatch();
  const navigate = useRouter();

  const auth = useSelector(getUserData);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleThemeSync = () => {
      if (typeof window !== "undefined") {
        const savedTheme = localStorage.getItem("theme");
        setDarkMode(savedTheme ? savedTheme === "dark" : true);
      }
    };
    handleThemeSync();
    window.addEventListener("storage", handleThemeSync);
    return () => window.removeEventListener("storage", handleThemeSync);
  }, []);

  useEffect(() => {
    async function fetch() {
      await getIssuesChartData({
        dispatch,
        email: localStorage.getItem("UserEmail"),
      });
    }
    fetch();
  }, []);

  const hasData = Array.isArray(issuesData) && issuesData.length > 0;

  return (
    <div className="flex-1 w-full">
      <ChartCard>
        <div className="sss-overview-issues-card-container">
          <div className="sss-overview-issues-card bg-[var(--sss-color-card)] border border-[var(--sss-color-border)] rounded-xl p-5">
            <div className="sss-overview-issues-card-header mb-4">
              <div className="sss-overview-issues-header-left">
                <div className="sss-overview-issues-header-left-title text-lg font-bold text-[var(--sss-color-primary)]">
                  Issues Trend
                </div>
                <div className="sss-overview-issues-header-left-desc text-xs text-[var(--sss-color-muted)]">
                  Vulnerability trends from your security scans
                </div>
              </div>
            </div>
            <div className="sss-overview-issues-card-body">
              {hasData ? (
                <div className="sss-overview-issues-card-chart-main">
                  <CustomAreaChart data={issuesData} darkMode={darkMode} />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center bg-[var(--sss-color-input-bg)] border border-[var(--sss-color-border)] rounded-xl gap-3">
                  <svg className="w-12 h-12 text-[var(--sss-color-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                  <div className="text-sm font-semibold text-[var(--sss-color-primary)]">
                    Run your first scan to see trends
                  </div>
                  <div className="text-xs text-[var(--sss-color-muted)]">
                    Vulnerability analytics will appear here after your initial security scan.
                  </div>
                  <button
                    onClick={() =>
                      auth?.user?.email
                        ? dispatch(setScanNowModal(true))
                        : navigate.push("/solidity-shield-scan/auth")
                    }
                    className="mt-2 px-4 py-2 bg-[#22C55E] text-[#0A1120] text-xs font-bold rounded-xl hover:bg-[#16a34a] transition-colors cursor-pointer"
                  >
                    Scan Now
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </ChartCard>
    </div>
  );
};

export default IssuesChart;

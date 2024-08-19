import ChartCard from "./ChartCard";
import "./IssuesChart.css";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { getOverviewSelector } from "../../redux/dashboard/scanSummarySlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const CustomAreaChart = () => {
  const { issuesChart, scanSummary } = useSelector(getOverviewSelector);
  const data = issuesChart;
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ff7f7f" stopOpacity={1} />
            <stop offset="95%" stopColor="#ff7f7f" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(value) => `${value / 1000}k`} />
        <Tooltip
          formatter={(value) => new Intl.NumberFormat("en").format(value)}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#ff7f7f"
          fill="url(#colorUv)"
          strokeWidth={3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

const IssuesChart = ({ data }) => {
  return (
    <ChartCard>
      <div className="sss-overview-issues-card-container">
        <div className="sss-overview-issues-card">
          <div className="sss-overview-issues-card-header">
            <div className="sss-overview-issues-header-left">
              <div className="sss-overview-issues-header-left-title">
                Issues
              </div>
              <div className="sss-overview-issues-header-left-desc">
                Lorem ipsum dolor sit amet, consectetur
              </div>
            </div>
          </div>
          <div className="sss-overview-issues-card-body">
            <div className="sss-overview-issues-card-chart-header"></div>
            <div className="sss-overview-issues-card-chart-main">
              <CustomAreaChart />
            </div>
          </div>
        </div>
      </div>
    </ChartCard>
  );
};

export default IssuesChart;

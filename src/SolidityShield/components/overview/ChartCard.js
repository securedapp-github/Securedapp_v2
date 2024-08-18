import "./ChartCard.css";

const ChartCard = ({ children }) => {
  return (
    <div className="sss-chart-card-container">
      <div className="sss-chart-card">{children}</div>
    </div>
  );
};

export default ChartCard;

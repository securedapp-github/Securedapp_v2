const Statitics = () => {
  return (
    <div className="statistics">
      <div className="grid grid-col grid-cols-1 lg:grid-cols-3 gap-4">
        <StatisticsCard title={"100+"} subtitle={"Projects Secured"} />
        <StatisticsCard title={"2400+"} subtitle={"Vulnerability detected"} />
        <StatisticsCard
          title={"$600 Millions+"}
          subtitle={"Digital Assets Protected"}
        />
      </div>
    </div>
  );
};

const StatisticsCard = ({ title, subtitle }) => {
  return (
    <div className="statistics-card">
      <div className="pt-2 text-2xl mg:text-3xl lg:text-4xl font-bold">
        {title}
      </div>
      <div className="statistics-card-subtitle">{subtitle}</div>
    </div>
  );
};

export default Statitics;

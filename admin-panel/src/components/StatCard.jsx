function StatCard({
  title,
  value,
  icon,
  change,
  changeType = "positive",
}) {
  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <div className="stat-icon">
          {icon}
        </div>
      </div>

      <div className="stat-card-content">
        <p>{title}</p>

        <h2>{value}</h2>

        {change && (
          <span
            className={`stat-change ${changeType}`}
          >
            {changeType === "positive"
              ? "↑"
              : "↓"}{" "}
            {change}
          </span>
        )}
      </div>
    </div>
  );
}

export default StatCard;
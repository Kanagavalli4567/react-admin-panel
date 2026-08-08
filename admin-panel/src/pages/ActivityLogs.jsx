function ActivityLogs() {
  const activities = [
    {
      id: 1,
      user: "Admin",
      action: "Added a new user",
      time: "10 minutes ago",
    },
    {
      id: 2,
      user: "Admin",
      action: "Updated product information",
      time: "30 minutes ago",
    },
    {
      id: 3,
      user: "Manager",
      action: "Updated order status",
      time: "1 hour ago",
    },
    {
      id: 4,
      user: "Admin",
      action: "Logged into dashboard",
      time: "2 hours ago",
    },
  ];

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Activity Logs</h1>
          <p>Track important admin activities.</p>
        </div>
      </div>

      <div className="content-card">
        <div className="timeline">
          {activities.map((activity) => (
            <div className="timeline-item" key={activity.id}>
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <strong>{activity.user}</strong>

                <p>{activity.action}</p>

                <small>{activity.time}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ActivityLogs;
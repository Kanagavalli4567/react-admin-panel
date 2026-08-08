import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";

function Analytics() {
  const { orders, users } = useContext(AdminContext);

  const revenue = orders.reduce(
    (sum, order) => sum + Number(order.amount || 0),
    0
  );

  const completedOrders = orders.filter(
    (order) => order.status === "Completed"
  ).length;

  const pendingOrders = orders.filter(
    (order) => order.status === "Pending"
  ).length;

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Analytics</h1>
          <p>View your business performance.</p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-icon">💰</span>

          <div>
            <p>Total Revenue</p>
            <h2>₹{revenue.toLocaleString()}</h2>
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-icon">👥</span>

          <div>
            <p>Total Users</p>
            <h2>{users.length}</h2>
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-icon">✅</span>

          <div>
            <p>Completed Orders</p>
            <h2>{completedOrders}</h2>
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-icon">⏳</span>

          <div>
            <p>Pending Orders</p>
            <h2>{pendingOrders}</h2>
          </div>
        </div>
      </div>

      <div className="analytics-card">
        <h2>Monthly Sales</h2>

        <div className="bar-chart">
          {[40, 65, 50, 80, 60, 90, 75, 95, 70, 85, 100, 80].map(
            (height, index) => (
              <div className="bar-wrapper" key={index}>
                <div
                  className="bar"
                  style={{ height: `${height}%` }}
                  title={`Month ${index + 1}`}
                ></div>

                <span>{index + 1}</span>
              </div>
            )
          )}
        </div>
      </div>

      <div className="analytics-card">
        <h2>Order Performance</h2>

        <div className="progress-item">
          <div>
            <span>Completed</span>
            <strong>{completedOrders}</strong>
          </div>

          <div className="progress">
            <div
              style={{
                width: `${
                  orders.length
                    ? (completedOrders / orders.length) * 100
                    : 0
                }%`,
              }}
            ></div>
          </div>
        </div>

        <div className="progress-item">
          <div>
            <span>Pending</span>
            <strong>{pendingOrders}</strong>
          </div>

          <div className="progress">
            <div
              style={{
                width: `${
                  orders.length
                    ? (pendingOrders / orders.length) * 100
                    : 0
                }%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
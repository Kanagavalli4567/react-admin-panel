import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";

function Dashboard() {
  const { users, products, orders } = useContext(AdminContext);

  const totalRevenue = orders.reduce(
    (total, order) => total + Number(order.amount || 0),
    0
  );

  const pendingOrders = orders.filter(
    (order) => order.status === "Pending"
  ).length;

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back! Here's what's happening today.</p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-icon">👥</span>
          <div>
            <p>Total Users</p>
            <h2>{users.length}</h2>
            <small className="success-text">↑ 12% this month</small>
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-icon">📦</span>
          <div>
            <p>Total Products</p>
            <h2>{products.length}</h2>
            <small className="success-text">↑ 8% this month</small>
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-icon">🛒</span>
          <div>
            <p>Total Orders</p>
            <h2>{orders.length}</h2>
            <small className="warning-text">
              {pendingOrders} pending
            </small>
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-icon">💰</span>
          <div>
            <p>Total Revenue</p>
            <h2>₹{totalRevenue.toLocaleString()}</h2>
            <small className="success-text">↑ 18% this month</small>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="content-card">
          <div className="card-header">
            <h2>Recent Orders</h2>
            <button className="text-btn">View All</button>
          </div>

          {orders.slice(0, 5).map((order) => (
            <div className="order-row" key={order.id}>
              <div>
                <strong>#{order.id}</strong>
                <p>{order.customer}</p>
              </div>

              <span className={`status ${order.status.toLowerCase()}`}>
                {order.status}
              </span>

              <strong>₹{order.amount}</strong>
            </div>
          ))}

          {orders.length === 0 && (
            <p className="empty-message">No orders available.</p>
          )}
        </div>

        <div className="content-card">
          <div className="card-header">
            <h2>Quick Actions</h2>
          </div>

          <div className="quick-actions">
            <button>➕ Add User</button>
            <button>📦 Add Product</button>
            <button>📊 View Analytics</button>
            <button>🎫 Support Tickets</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
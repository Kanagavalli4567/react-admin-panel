import { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";

function Orders() {
  const {
    orders,
    updateOrderStatus,
  } = useContext(AdminContext);

  const [selectedOrder, setSelectedOrder] = useState(null);

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Orders</h1>
          <p>Track and manage customer orders.</p>
        </div>
      </div>

      <div className="content-card">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>
                    <strong>#{order.id}</strong>
                  </td>

                  <td>{order.customer}</td>

                  <td>{order.date}</td>

                  <td>
                    ₹{Number(order.amount).toLocaleString()}
                  </td>

                  <td>
                    <select
                      value={order.status}
                      onChange={(e) =>
                        updateOrderStatus(
                          order.id,
                          e.target.value
                        )
                      }
                      className="status-select"
                    >
                      <option>Pending</option>
                      <option>Processing</option>
                      <option>Completed</option>
                      <option>Cancelled</option>
                    </select>
                  </td>

                  <td>
                    <button
                      className="view-btn"
                      onClick={() =>
                        setSelectedOrder(order)
                      }
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {orders.length === 0 && (
            <p className="empty-message">
              No orders available.
            </p>
          )}
        </div>
      </div>

      {selectedOrder && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Order Details</h2>

              <button
                onClick={() => setSelectedOrder(null)}
              >
                ✕
              </button>
            </div>

            <div className="order-details">
              <p>
                <strong>Order ID:</strong>{" "}
                #{selectedOrder.id}
              </p>

              <p>
                <strong>Customer:</strong>{" "}
                {selectedOrder.customer}
              </p>

              <p>
                <strong>Date:</strong>{" "}
                {selectedOrder.date}
              </p>

              <p>
                <strong>Amount:</strong> ₹
                {selectedOrder.amount}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {selectedOrder.status}
              </p>
            </div>

            <button
              className="primary-btn"
              onClick={() => setSelectedOrder(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Orders;
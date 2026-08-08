import { useState } from "react";

function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Order",
      message: "You received a new order.",
      read: false,
    },
    {
      id: 2,
      title: "New User",
      message: "A new user registered.",
      read: false,
    },
    {
      id: 3,
      title: "Payment Received",
      message: "Payment successfully received.",
      read: true,
    },
  ]);

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((item) =>
        item.id === id
          ? { ...item, read: true }
          : item
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications(
      notifications.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Notifications</h1>
          <p>Stay updated with recent activities.</p>
        </div>
      </div>

      <div className="content-card">
        {notifications.map((notification) => (
          <div
            className={`notification ${
              notification.read ? "read" : "unread"
            }`}
            key={notification.id}
          >
            <div className="notification-icon">
              🔔
            </div>

            <div className="notification-content">
              <strong>{notification.title}</strong>
              <p>{notification.message}</p>
            </div>

            <div className="notification-actions">
              {!notification.read && (
                <button
                  onClick={() =>
                    markAsRead(notification.id)
                  }
                >
                  Mark Read
                </button>
              )}

              <button
                onClick={() =>
                  deleteNotification(notification.id)
                }
              >
                🗑️
              </button>
            </div>
          </div>
        ))}

        {notifications.length === 0 && (
          <p className="empty-message">
            No notifications.
          </p>
        )}
      </div>
    </div>
  );
}

export default Notifications;
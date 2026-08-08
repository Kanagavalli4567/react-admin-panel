import { useLocation } from "react-router-dom";

function Navbar({ onMenuClick }) {
  const location = useLocation();

  // Convert URL into page name
  const getPageName = () => {
    const path = location.pathname;

    if (path === "/dashboard") {
      return "Dashboard";
    }

    if (path === "/users") {
      return "Users";
    }

    if (path === "/products") {
      return "Products";
    }

    if (path === "/orders") {
      return "Orders";
    }

    if (path === "/analytics") {
      return "Analytics";
    }

    if (path === "/messages") {
      return "Messages";
    }

    if (path === "/notifications") {
      return "Notifications";
    }

    if (path === "/support") {
      return "Support";
    }

    if (path === "/activity") {
      return "Activity Logs";
    }

    if (path === "/profile") {
      return "Profile";
    }

    if (path === "/settings") {
      return "Settings";
    }

    return "Admin Panel";
  };

  return (
    <header className="navbar">
      {/* Mobile menu button */}
      <button
        className="menu-button"
        onClick={onMenuClick}
      >
        ☰
      </button>

      {/* Page title */}
      <div className="navbar-title">
        <h2>{getPageName()}</h2>
      </div>

      {/* Right side */}
      <div className="navbar-right">
        {/* Search */}
        <button className="navbar-icon">
          🔍
        </button>

        {/* Notification */}
        <button className="navbar-icon">
          🔔
          <span className="notification-count">
            3
          </span>
        </button>

        {/* Profile */}
        <div className="navbar-profile">
          <div className="avatar">
            A
          </div>

          <div className="profile-text">
            <strong>Admin</strong>
            <small>Administrator</small>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
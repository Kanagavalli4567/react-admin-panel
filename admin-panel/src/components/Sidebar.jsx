import { NavLink, useNavigate } from "react-router-dom";

function Sidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  // Menu items
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "📊",
    },
    {
      name: "Users",
      path: "/users",
      icon: "👥",
    },
    {
      name: "Products",
      path: "/products",
      icon: "📦",
    },
    {
      name: "Orders",
      path: "/orders",
      icon: "🛒",
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: "📈",
    },
    {
      name: "Messages",
      path: "/messages",
      icon: "💬",
    },
    {
      name: "Notifications",
      path: "/notifications",
      icon: "🔔",
    },
    {
      name: "Support",
      path: "/support",
      icon: "🎫",
    },
    {
      name: "Activity Logs",
      path: "/activity",
      icon: "📝",
    },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <aside
        className={`sidebar ${
          isOpen ? "sidebar-open" : ""
        }`}
      >
        {/* Logo */}
        <div className="sidebar-logo">
          <div className="logo-icon">
            ⚡
          </div>

          <div>
            <h2>AdminPanel</h2>
            <small>Management System</small>
          </div>
        </div>

        {/* Menu */}
        <nav className="sidebar-menu">
          <p className="menu-title">
            MAIN MENU
          </p>

          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "menu-link active"
                  : "menu-link"
              }
              onClick={() => setIsOpen(false)}
            >
              <span className="menu-icon">
                {item.icon}
              </span>

              <span>{item.name}</span>
            </NavLink>
          ))}

          <p className="menu-title">
            ACCOUNT
          </p>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "menu-link active"
                : "menu-link"
            }
            onClick={() => setIsOpen(false)}
          >
            <span className="menu-icon">
              👤
            </span>

            <span>Profile</span>
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive
                ? "menu-link active"
                : "menu-link"
            }
            onClick={() => setIsOpen(false)}
          >
            <span className="menu-icon">
              ⚙️
            </span>

            <span>Settings</span>
          </NavLink>
        </nav>

        {/* Logout */}
        <div className="sidebar-bottom">
          <button
            className="logout-button"
            onClick={handleLogout}
          >
            <span>🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
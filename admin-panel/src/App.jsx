import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Components
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Analytics from "./pages/Analytics";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import Support from "./pages/Support";
import ActivityLogs from "./pages/ActivityLogs";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  return (
    <div className="admin-layout">
      <Sidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <div className="main-area">
        <Navbar
          onMenuClick={() =>
            setSidebarOpen(!sidebarOpen)
          }
        />

        <main className="main-content">
          <Routes>
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/users"
              element={<Users />}
            />

            <Route
              path="/products"
              element={<Products />}
            />

            <Route
              path="/orders"
              element={<Orders />}
            />

            <Route
              path="/analytics"
              element={<Analytics />}
            />

            <Route
              path="/messages"
              element={<Messages />}
            />

            <Route
              path="/notifications"
              element={<Notifications />}
            />

            <Route
              path="/support"
              element={<Support />}
            />

            <Route
              path="/activity"
              element={<ActivityLogs />}
            />

            <Route
              path="/profile"
              element={<Profile />}
            />

            <Route
              path="/settings"
              element={<Settings />}
            />

            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Protected Admin Area */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        />

        {/* Default page */}
        <Route
          path="/"
          element={
            <Navigate
              to="/dashboard"
              replace
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
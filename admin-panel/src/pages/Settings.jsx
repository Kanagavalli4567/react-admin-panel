import { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";

function Settings() {
  const { darkMode, setDarkMode } =
    useContext(AdminContext);

  const [activeTab, setActiveTab] =
    useState("general");

  const [emailNotifications, setEmailNotifications] =
    useState(true);

  const [twoFactor, setTwoFactor] =
    useState(false);

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Settings</h1>
          <p>Manage your admin panel preferences.</p>
        </div>
      </div>

      <div className="settings-container">
        <div className="settings-menu">
          <button
            className={
              activeTab === "general"
                ? "active"
                : ""
            }
            onClick={() => setActiveTab("general")}
          >
            ⚙️ General
          </button>

          <button
            className={
              activeTab === "notifications"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveTab("notifications")
            }
          >
            🔔 Notifications
          </button>

          <button
            className={
              activeTab === "security"
                ? "active"
                : ""
            }
            onClick={() => setActiveTab("security")}
          >
            🔐 Security
          </button>
        </div>

        <div className="settings-content">
          {activeTab === "general" && (
            <>
              <h2>General Settings</h2>

              <div className="setting-row">
                <div>
                  <strong>Dark Mode</strong>
                  <p>
                    Change the appearance of the dashboard.
                  </p>
                </div>

                <label className="switch">
                  <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={(e) =>
                      setDarkMode(e.target.checked)
                    }
                  />

                  <span className="slider"></span>
                </label>
              </div>
            </>
          )}

          {activeTab === "notifications" && (
            <>
              <h2>Notification Settings</h2>

              <div className="setting-row">
                <div>
                  <strong>Email Notifications</strong>
                  <p>
                    Receive notifications through email.
                  </p>
                </div>

                <label className="switch">
                  <input
                    type="checkbox"
                    checked={emailNotifications}
                    onChange={(e) =>
                      setEmailNotifications(
                        e.target.checked
                      )
                    }
                  />

                  <span className="slider"></span>
                </label>
              </div>
            </>
          )}

          {activeTab === "security" && (
            <>
              <h2>Security Settings</h2>

              <div className="setting-row">
                <div>
                  <strong>Two-Factor Authentication</strong>
                  <p>
                    Add an extra layer of security.
                  </p>
                </div>

                <label className="switch">
                  <input
                    type="checkbox"
                    checked={twoFactor}
                    onChange={(e) =>
                      setTwoFactor(e.target.checked)
                    }
                  />

                  <span className="slider"></span>
                </label>
              </div>

              <button className="primary-btn">
                Change Password
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Settings;
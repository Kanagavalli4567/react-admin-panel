import { useState } from "react";

function Profile() {
  const [name, setName] = useState("Admin User");
  const [email, setEmail] = useState("admin@gmail.com");

  const handleSave = (e) => {
    e.preventDefault();

    alert("Profile updated successfully!");
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>My Profile</h1>
          <p>Manage your personal information.</p>
        </div>
      </div>

      <div className="profile-grid">
        <div className="profile-card">
          <div className="large-avatar">
            A
          </div>

          <h2>{name}</h2>
          <p>Administrator</p>

          <span className="status active">
            Active
          </span>
        </div>

        <div className="content-card">
          <h2>Personal Information</h2>

          <form onSubmit={handleSave}>
            <label>Full Name</label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Email</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Role</label>

            <input
              value="Administrator"
              disabled
            />

            <button className="primary-btn">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
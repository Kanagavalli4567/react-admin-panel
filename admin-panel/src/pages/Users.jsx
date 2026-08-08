import { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";

function Users() {
  const {
    users,
    addUser,
    updateUser,
    deleteUser,
  } = useContext(AdminContext);

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "User",
    status: "Active",
  });

  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.email}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const openAddModal = () => {
    setEditingUser(null);

    setForm({
      name: "",
      email: "",
      role: "User",
      status: "Active",
    });

    setShowModal(true);
  };

  const openEditModal = (user) => {
    setEditingUser(user);

    setForm({
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
    });

    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingUser) {
      updateUser(editingUser.id, form);
    } else {
      addUser(form);
    }

    setShowModal(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUser(id);
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Users</h1>
          <p>Manage all registered users.</p>
        </div>

        <button className="primary-btn" onClick={openAddModal}>
          + Add User
        </button>
      </div>

      <div className="content-card">
        <div className="toolbar">
          <input
            type="text"
            placeholder="🔍 Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="user-info">
                      <div className="avatar">
                        {user.name.charAt(0)}
                      </div>

                      <strong>{user.name}</strong>
                    </div>
                  </td>

                  <td>{user.email}</td>

                  <td>
                    <span className="role-badge">
                      {user.role}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`status ${user.status.toLowerCase()}`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td>
                    <div className="action-buttons">
                      <button
                        className="edit-btn"
                        onClick={() => openEditModal(user)}
                      >
                        ✏️
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(user.id)}
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredUsers.length === 0 && (
            <p className="empty-message">
              No users found.
            </p>
          )}
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>
                {editingUser ? "Edit User" : "Add User"}
              </h2>

              <button onClick={() => setShowModal(false)}>
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <label>Name</label>

              <input
                type="text"
                value={form.name}
                placeholder="Enter name"
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
                required
              />

              <label>Email</label>

              <input
                type="email"
                value={form.email}
                placeholder="Enter email"
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
                required
              />

              <label>Role</label>

              <select
                value={form.role}
                onChange={(e) =>
                  setForm({
                    ...form,
                    role: e.target.value,
                  })
                }
              >
                <option>User</option>
                <option>Admin</option>
                <option>Manager</option>
              </select>

              <label>Status</label>

              <select
                value={form.status}
                onChange={(e) =>
                  setForm({
                    ...form,
                    status: e.target.value,
                  })
                }
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>

              <button className="primary-btn" type="submit">
                {editingUser ? "Update User" : "Add User"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;
import React, { useContext } from "react";
import { FiUser, FiTrash2, FiEye, FiSlash, FiCheckCircle, FiUsers } from "react-icons/fi";
import { AuthContext } from "../../context/AuthContext";
import "./ManageUsers.css";

const ManageUsers = () => {
  const { registeredUsers, updateUserStatus, deleteUser } = useContext(AuthContext);

  const handleToggleBlock = (email, currentStatus) => {
    const newStatus = currentStatus === "Active" ? "Blocked" : "Active";
    updateUserStatus(email, newStatus);
  };

  const handleDelete = (email) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUser(email);
    }
  };

  return (
    <div className="manage-users-page">
      <div className="mu-header">
        <h2>Manage Users</h2>
        <p>View, block, or remove registered users from the platform.</p>
      </div>

      <div className="mu-table-wrapper">
        {registeredUsers.length === 0 ? (
          <div className="mu-empty">
            <FiUsers size={48} />
            <h3>No users registered yet</h3>
            <p>Users will appear here once they sign up on the platform.</p>
          </div>
        ) : (
          <table className="mu-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Joined</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {registeredUsers.map((u, i) => (
                <tr key={u.email}>
                  <td>{i + 1}</td>
                  <td>
                    <div className="mu-name-cell">
                      <div className="mu-avatar"><FiUser /></div>
                      {u.name || "—"}
                    </div>
                  </td>
                  <td>{u.email}</td>
                  <td>
                    <span className={`mu-role ${u.role === "admin" ? "role-admin" : "role-user"}`}>
                      {u.role}
                    </span>
                  </td>
                  <td>
                    <span className={`mu-status ${u.status === "Active" ? "status-active" : "status-blocked"}`}>
                      {u.status || "Active"}
                    </span>
                  </td>
                  <td className="mu-joined">
                    {u.joinedAt ? new Date(u.joinedAt).toLocaleDateString("en-IN", {
                      day: "2-digit", month: "short", year: "numeric"
                    }) : "—"}
                  </td>
                  <td>
                    <div className="mu-actions">
                      <button className="mu-btn mu-view" title="View">
                        <FiEye />
                      </button>
                      {u.role !== "admin" && (
                        <>
                          <button
                            className={`mu-btn ${u.status === "Active" ? "mu-block" : "mu-unblock"}`}
                            title={u.status === "Active" ? "Block" : "Unblock"}
                            onClick={() => handleToggleBlock(u.email, u.status || "Active")}
                          >
                            {u.status === "Active" ? <FiSlash /> : <FiCheckCircle />}
                          </button>
                          <button
                            className="mu-btn mu-delete"
                            title="Delete"
                            onClick={() => handleDelete(u.email)}
                          >
                            <FiTrash2 />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ManageUsers;

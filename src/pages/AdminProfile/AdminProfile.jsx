import React, { useContext } from "react";
import { FiMail, FiShield, FiEdit } from "react-icons/fi";
import { AuthContext } from "../../context/AuthContext";
import profileImage from "../../assets/images/photo.jpeg";
import "./AdminProfile.css";

const AdminProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="admin-profile-page">
      <div className="ap-header">
        <h2>Admin Profile</h2>
        <p>View and manage your profile information.</p>
      </div>

      <div className="ap-card">
        <div className="ap-avatar-section">
          <img src={profileImage} alt="Admin" className="ap-avatar" />
          <div className="ap-name-group">
            <h3>{user?.name || "Admin"}</h3>
            <span className="ap-role-badge"><FiShield /> Admin</span>
          </div>
        </div>

        <div className="ap-divider" />

        <div className="ap-details">
          <div className="ap-field">
            <label>Full Name</label>
            <p>{user?.name || "Admin"}</p>
          </div>
          <div className="ap-field">
            <label><FiMail /> Email Address</label>
            <p>{user?.email || "admin@test.com"}</p>
          </div>
          <div className="ap-field">
            <label>Role</label>
            <p>Administrator</p>
          </div>
          <div className="ap-field">
            <label>Account Status</label>
            <p className="ap-status-active">● Active</p>
          </div>
        </div>

        <div className="ap-divider" />

        <div className="ap-actions">
          <button className="ap-edit-btn"><FiEdit /> Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;

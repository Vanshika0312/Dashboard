import React from "react";
import { FiFileText, FiUsers, FiUploadCloud, FiClock } from "react-icons/fi";
import "./AdminDashboard.css";

const stats = [
  { icon: <FiFileText />, label: "Total Papers", value: 24, color: "#6366f1", bg: "#eef2ff" },
  { icon: <FiUsers />, label: "Total Users", value: 8, color: "#0891b2", bg: "#e0f7fa" },
  { icon: <FiUploadCloud />, label: "Total Uploads", value: 31, color: "#059669", bg: "#ecfdf5" },
  { icon: <FiClock />, label: "Pending Approvals", value: 5, color: "#d97706", bg: "#fffbeb" },
];

const recentActivity = [
  { id: 1, action: "New paper uploaded", detail: "JEE Advanced 2024 Mock 1", time: "2 mins ago", type: "upload" },
  { id: 2, action: "New user registered", detail: "test@example.com", time: "15 mins ago", type: "user" },
  { id: 3, action: "Paper approved", detail: "NEET Full Syllabus Test", time: "1 hour ago", type: "approved" },
  { id: 4, action: "Paper deleted", detail: "CBSE Class 10 Maths 2023", time: "3 hours ago", type: "delete" },
  { id: 5, action: "User blocked", detail: "spam@user.com", time: "5 hours ago", type: "block" },
];

const typeColors = {
  upload: { color: "#6366f1", bg: "#eef2ff" },
  user: { color: "#0891b2", bg: "#e0f7fa" },
  approved: { color: "#059669", bg: "#ecfdf5" },
  delete: { color: "#ef4444", bg: "#fef2f2" },
  block: { color: "#d97706", bg: "#fffbeb" },
};

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="admin-dash-header">
        <div>
          <h2>Admin Dashboard</h2>
          <p>Welcome back, Admin! Here's what's happening today.</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div className="stat-card" key={i}>
            <div className="stat-icon" style={{ background: stat.bg, color: stat.color }}>
              {stat.icon}
            </div>
            <div className="stat-info">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="admin-section">
        <h3 className="section-title">Recent Activity</h3>
        <div className="activity-list">
          {recentActivity.map((item) => {
            const tc = typeColors[item.type];
            return (
              <div className="activity-item" key={item.id}>
                <div className="activity-dot" style={{ background: tc.bg, color: tc.color }}>
                  <span></span>
                </div>
                <div className="activity-body">
                  <span className="activity-action">{item.action}</span>
                  <span className="activity-detail">{item.detail}</span>
                </div>
                <span className="activity-time">{item.time}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

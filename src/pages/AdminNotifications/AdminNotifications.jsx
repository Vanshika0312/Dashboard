import React, { useState } from "react";
import { FiUploadCloud, FiUserPlus, FiCheckCircle, FiAlertCircle, FiTrash2 } from "react-icons/fi";
import "./AdminNotifications.css";

const initialNotifications = [
  { id: 1, type: "upload", icon: <FiUploadCloud />, title: "New Paper Uploaded", detail: "JEE Advanced 2024 Mock 1 was uploaded by Vanshika.", time: "2 minutes ago", read: false },
  { id: 2, type: "user", icon: <FiUserPlus />, title: "New User Registered", detail: "test@example.com has just created an account.", time: "15 minutes ago", read: false },
  { id: 3, type: "approved", icon: <FiCheckCircle />, title: "Paper Approved", detail: "NEET Full Syllabus Test has been approved and is now public.", time: "1 hour ago", read: true },
  { id: 4, type: "upload", icon: <FiUploadCloud />, title: "New Paper Uploaded", detail: "CBSE Class 12 Physics 2023 was uploaded by Admin.", time: "3 hours ago", read: true },
  { id: 5, type: "alert", icon: <FiAlertCircle />, title: "Paper Pending Review", detail: "JEE Full Syllabus Test is waiting for your approval.", time: "5 hours ago", read: false },
  { id: 6, type: "user", icon: <FiUserPlus />, title: "New User Registered", detail: "another@user.com has just created an account.", time: "Yesterday", read: true },
];

const typeColor = {
  upload: { color: "#6366f1", bg: "#eef2ff" },
  user: { color: "#0891b2", bg: "#e0f7fa" },
  approved: { color: "#059669", bg: "#ecfdf5" },
  alert: { color: "#d97706", bg: "#fffbeb" },
};

const AdminNotifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAllRead = () => setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  const deleteNotif = (id) => setNotifications((prev) => prev.filter((n) => n.id !== id));
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="admin-notif-page">
      <div className="an-header">
        <div>
          <h2>Notifications</h2>
          <p>{unreadCount > 0 ? `You have ${unreadCount} unread notification(s).` : "All caught up!"}</p>
        </div>
        {unreadCount > 0 && (
          <button className="an-mark-read" onClick={markAllRead}>Mark all as read</button>
        )}
      </div>

      <div className="an-list">
        {notifications.length === 0 && <p className="an-empty">No notifications yet.</p>}
        {notifications.map((n) => {
          const tc = typeColor[n.type];
          return (
            <div className={`an-item ${!n.read ? "an-unread" : ""}`} key={n.id}>
              <div className="an-icon" style={{ background: tc.bg, color: tc.color }}>{n.icon}</div>
              <div className="an-body">
                <span className="an-title">{n.title}</span>
                <span className="an-detail">{n.detail}</span>
                <span className="an-time">{n.time}</span>
              </div>
              <button className="an-delete" onClick={() => deleteNotif(n.id)} title="Remove"><FiTrash2 /></button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminNotifications;

import "./Sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FiHome, FiUpload, FiFileText, FiUsers, FiBell, FiUser, FiLogOut, FiX } from "react-icons/fi";
import { useContext } from "react";
import profileImage from "../../assets/images/photo.jpeg";
import { AuthContext } from "../../context/AuthContext";

const AdminSidebar = ({ isOpen, toggleSidebar }) => {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className={`sidebar ${!isOpen ? "closed" : ""}`}>
      <div className="sidebar-logo">
        <span className="logo-icon">A</span>
        <span className="logo-text">Admin Panel</span>
        <button className="close-sidebar-btn" onClick={toggleSidebar}>
          <FiX />
        </button>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <NavLink to="/admin" end className="nav-item">
            <FiHome className="nav-icon" />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/admin/upload" className="nav-item">
            <FiUpload className="nav-icon" />
            <span>Upload Paper</span>
          </NavLink>

          <NavLink to="/admin/papers" className="nav-item">
            <FiFileText className="nav-icon" />
            <span>Manage Papers</span>
          </NavLink>

          <NavLink to="/admin/users" className="nav-item">
            <FiUsers className="nav-icon" />
            <span>Manage Users</span>
          </NavLink>

          <NavLink to="/admin/notifications" className="nav-item">
            <FiBell className="nav-icon" />
            <span>Notifications</span>
          </NavLink>

          <NavLink to="/admin/profile" className="nav-item">
            <FiUser className="nav-icon" />
            <span>Profile</span>
          </NavLink>

          <li className="nav-item logout" onClick={handleLogout} style={{ cursor: "pointer" }}>
            <FiLogOut className="nav-icon" />
            <span>Logout</span>
          </li>
        </ul>
      </nav>

      <div className="sidebar-profile">
        <img src={profileImage} alt="Admin" className="profile-img" />
        <div className="profile-info">
          <h4>{user?.name || "Admin"}</h4>
          <p>{user?.email || "admin@test.com"}</p>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;

import "./Sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FiHome, FiFileText, FiFolder, FiBookOpen, FiUsers, FiBell, FiLogOut, FiChevronDown, FiX } from "react-icons/fi";
import { useState, useContext } from "react";
import profileImage from "../../assets/images/photo.jpeg";
import { AuthContext } from "../../context/AuthContext";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isMockPapersOpen, setIsMockPapersOpen] = useState(true);
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className={`sidebar ${!isOpen ? "closed" : ""}`}>
      <div className="sidebar-logo">
        <span className="logo-icon">W</span>
        <span className="logo-text">Welcome</span>
        <button className="close-sidebar-btn" onClick={toggleSidebar}>
          <FiX />
        </button>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/" className="nav-item">
            <FiHome className="nav-icon" />
            <span>Dashboard</span>
        </NavLink>
        <ul>
         
          <NavLink to="/test-series" className="nav-item">
            <FiFileText className="nav-icon" />
            <span>Test Series</span>
          </NavLink>

          <li className={`nav-item-group ${isMockPapersOpen ? "active" : ""}`}>
            <div className="nav-item-header" onClick={() => setIsMockPapersOpen(!isMockPapersOpen)}>
              <div className="nav-item-title">
                <FiFolder className="nav-icon" />
                <span>Mock Papers</span>
              </div>
              <FiChevronDown className="dropdown-icon" />
            </div>
            {isMockPapersOpen && (
              <ul className="sub-nav">
                <NavLink to="/mock-papers" className="sub-nav-item">
                  <span>Browse Papers</span>
                </NavLink>
              </ul>
            )}
          </li>

          <NavLink to="/exams" className="nav-item">
            <FiBookOpen className="nav-icon" />
            <span>Exams</span>
          </NavLink>
          <NavLink to="/community" className="nav-item">
            <FiUsers className="nav-icon" />
            <span>Community</span>
          </NavLink>
          <li className="nav-item logout" onClick={handleLogout} style={{ cursor: "pointer" }}>
            <FiLogOut className="nav-icon" />
            <span>Logout</span>
          </li>
        </ul>
      </nav>

      <div className="sidebar-profile">
        <img src={profileImage} alt={user?.name || "Vanshika Chauhan"} className="profile-img" />
        <div className="profile-info">
          <h4>{user?.name || "Vanshika Chauhan"}</h4>
          <p>{user?.email || "chauhanvanshika826@gmail.com"}</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
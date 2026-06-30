import "./Topbar.css";
import { FiMenu, FiBell, FiSearch, FiX } from "react-icons/fi";
import { useState } from "react";
import profileImage from "../../assets/images/photo.jpeg";

const Topbar = ({ toggleSidebar }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="menu-btn" onClick={toggleSidebar}>
          <FiMenu />
        </button>
      </div>
      <div className="topbar-center">
        {isSearchOpen ? (
          <div className="search-bar">
            <FiSearch className="search-icon" />
            <input type="text" placeholder="Search..." autoFocus />
            <button className="close-btn" onClick={() => setIsSearchOpen(false)}>
              <FiX />
            </button>
          </div>
        ) : (
          <nav className="topbar-nav">
            <a href="#">Upload New</a>
            <a href="#">Papers</a>
            <a href="#">Events <span className="chevron"></span></a>
            <button className="search-toggle" onClick={() => setIsSearchOpen(true)}>Search</button>
          </nav>
        )}
      </div>
      <div className="topbar-right">
        <div className="notification-wrapper">
          <button className="icon-btn notification-btn" onClick={() => setIsNotifOpen(!isNotifOpen)}>
            <FiBell />
            <span className="dot"></span>
          </button>
          {isNotifOpen && (
            <div className="notification-popup">
              <h4>Notifications</h4>
              <ul>
                <li>New paper uploaded by Vanshika</li>
                <li>System maintenance scheduled</li>
              </ul>
            </div>
          )}
        </div>
        <div className="sidebar-profile">
          <img src={profileImage}
           alt="Vanshika Chauhan"
           className="profile-img"
            />
            
        </div>
      </div>
    </header>
  );
};

export default Topbar;
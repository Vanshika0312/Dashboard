import { Outlet } from "react-router-dom";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";
import AdminSidebar from "../Sidebar/AdminSidebar";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Layout.css";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);
  const { user } = useContext(AuthContext);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="layout">
      {user?.role === 'admin' ? (
        <AdminSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      ) : (
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      )}
      
      {isSidebarOpen && window.innerWidth <= 768 && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}

      <div className={`main-content ${!isSidebarOpen ? "expanded" : ""}`}>
        <Topbar toggleSidebar={toggleSidebar} />
        <div className="page-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
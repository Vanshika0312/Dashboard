import React from "react";
import FilterSection from "../../components/FilterSection/FilterSection";
import DataTable from "../../components/DataTable/DataTable";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
      </div>
      
      <FilterSection />
      <DataTable />
    </div>
  );
};

export default Dashboard;

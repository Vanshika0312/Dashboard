import React, { useState, useContext } from "react";
import { FiSearch, FiEdit2, FiTrash2, FiFilter, FiFileText } from "react-icons/fi";
import { AuthContext } from "../../context/AuthContext";
import "./ManagePapers.css";

const ManagePapers = () => {
  const { papers, deletePaper } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const [filterSubject, setFilterSubject] = useState("All");

  const subjects = ["All", ...new Set(papers.map((p) => p.subject))];

  const filtered = papers.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filterSubject === "All" || p.subject === filterSubject;
    return matchSearch && matchFilter;
  });

  const handleDelete = (id) => {
    if (window.confirm("Delete this paper?")) deletePaper(id);
  };

  const statusClass = { Approved: "status-approved", Pending: "status-pending", Rejected: "status-rejected" };

  return (
    <div className="manage-papers-page">
      <div className="mp-header">
        <div>
          <h2>Manage Papers</h2>
          <p>Search, filter, edit and delete uploaded papers.</p>
        </div>
      </div>

      <div className="mp-toolbar">
        <div className="mp-search-box">
          <FiSearch className="mp-search-icon" />
          <input
            type="text"
            placeholder="Search papers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="mp-filter-box">
          <FiFilter />
          <select value={filterSubject} onChange={(e) => setFilterSubject(e.target.value)}>
            {subjects.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div className="mp-table-wrapper">
        {papers.length === 0 ? (
          <div className="mp-empty-state">
            <FiFileText size={48} />
            <h3>No papers uploaded yet</h3>
            <p>Go to Upload Paper to add your first paper.</p>
          </div>
        ) : (
          <table className="mp-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Paper Title</th>
                <th>Subject</th>
                <th>Board</th>
                <th>Class</th>
                <th>Year</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan="8" className="mp-empty">No papers match your search.</td></tr>
              ) : (
                filtered.map((p, i) => (
                  <tr key={p.id}>
                    <td>{i + 1}</td>
                    <td className="mp-title">{p.title}</td>
                    <td>{p.subject}</td>
                    <td>{p.board}</td>
                    <td>{p.class}</td>
                    <td>{p.year}</td>
                    <td><span className={`mp-status ${statusClass[p.status] || "status-approved"}`}>{p.status}</span></td>
                    <td>
                      <div className="mp-actions">
                        <button className="mp-btn-edit" title="Edit"><FiEdit2 /></button>
                        <button className="mp-btn-delete" title="Delete" onClick={() => handleDelete(p.id)}><FiTrash2 /></button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ManagePapers;

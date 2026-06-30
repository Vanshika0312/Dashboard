import React, { useState } from 'react';
import { FiUploadCloud, FiFile, FiTrash2, FiEdit2 } from 'react-icons/fi';
import './AdminUploads.css';

const AdminUploads = () => {
  const [papers, setPapers] = useState([
    { id: 1, title: 'JEE Advanced 2024 Mock 1', uploader: 'Admin', date: '2026-06-30' },
    { id: 2, title: 'NEET Full Syllabus Test', uploader: 'Vanshika', date: '2026-06-29' },
    { id: 2, title: 'JEE Full Syllabus Test', uploader: 'Vanshika', date: '2026-06-29'}
  ]);

  return (
    <div className="my-uploads-page">
      <div className="page-header-content">
        <h2>Manage Uploads</h2>
        <p>Upload, edit, delete, and view all papers across the platform.</p>
      </div>

      <div className="upload-area">
        <div className="upload-box">
          <FiUploadCloud className="upload-icon" />
          <h3>Upload a new paper</h3>
          <button className="browse-files-btn">Select File</button>
        </div>
      </div>

      <div className="uploads-list-section">
        <h3>All Papers</h3>
        <div className="uploads-list">
          {papers.map(paper => (
            <div className="upload-item" key={paper.id}>
              <div className="file-info-group">
                <div className="file-icon-box">
                  <FiFile />
                </div>
                <div className="file-details">
                  <h4>{paper.title}</h4>
                  <span>Uploaded by: {paper.uploader} • {paper.date}</span>
                </div>
              </div>
              <div className="file-actions">
                <button className="delete-btn" style={{color: '#9793e2', marginRight: '10px'}} title="Edit File">
                  <FiEdit2 />
                </button>
                <button className="delete-btn" title="Delete File">
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminUploads;

import React, { useState } from 'react';
import './MyUploads.css';
import { FiUploadCloud, FiFile, FiTrash2, FiCheckCircle } from 'react-icons/fi';

const MyUploads = () => {
  const [uploads, setUploads] = useState([
    { id: 1, name: 'Physics_Notes_Chapter1.pdf', size: '2.4 MB', date: '2026-06-28', status: 'completed' },
    { id: 2, name: 'Assignment_Math.docx', size: '1.1 MB', date: '2026-06-29', status: 'completed' },
    { id: 3, name: 'Biology_Diagrams.png', size: '4.5 MB', date: '2026-06-30', status: 'processing' },
  ]);

  const handleDelete = (id) => {
    setUploads(uploads.filter(file => file.id !== id));
  };

  return (
    <div className="my-uploads-page">
      <div className="page-header-content">
        <h2>My Uploads</h2>
        <p>Manage and organize your study materials and documents.</p>
      </div>

      <div className="upload-area">
        <div className="upload-box">
          <FiUploadCloud className="upload-icon" />
          <h3>Drag & Drop your files here</h3>
          <p>or</p>
          <button className="browse-files-btn">Browse Files</button>
          <span className="upload-hint">Supported formats: PDF, DOCX, PNG, JPG (Max 10MB)</span>
        </div>
      </div>

      <div className="uploads-list-section">
        <h3>Recent Uploads</h3>
        {uploads.length === 0 ? (
          <p className="no-uploads">No files uploaded yet.</p>
        ) : (
          <div className="uploads-list">
            {uploads.map(file => (
              <div className="upload-item" key={file.id}>
                <div className="file-info-group">
                  <div className="file-icon-box">
                    <FiFile />
                  </div>
                  <div className="file-details">
                    <h4>{file.name}</h4>
                    <span>{file.size} • Uploaded on {file.date}</span>
                  </div>
                </div>
                <div className="file-actions">
                  {file.status === 'completed' ? (
                    <span className="status completed"><FiCheckCircle /> Completed</span>
                  ) : (
                    <span className="status processing">Processing...</span>
                  )}
                  <button className="delete-btn" onClick={() => handleDelete(file.id)} title="Delete File">
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyUploads;

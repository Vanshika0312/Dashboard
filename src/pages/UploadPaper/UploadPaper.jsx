import React, { useState, useContext } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { AuthContext } from "../../context/AuthContext";
import "./UploadPaper.css";

const UploadPaper = () => {
  const { addPaper } = useContext(AuthContext);
  const [form, setForm] = useState({ title: "", subject: "", board: "", class: "", year: "", file: null });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPaper({
      title: form.title,
      subject: form.subject,
      board: form.board,
      class: form.class,
      year: form.year,
      fileName: form.file ? form.file.name : null,
    });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ title: "", subject: "", board: "", class: "", year: "", file: null });
  };

  return (
    <div className="upload-paper-page">
      <div className="up-header">
        <h2>Upload Paper</h2>
        <p>Fill in the details and upload a PDF to add a new paper.</p>
      </div>

      {submitted && (
        <div className="up-success">✅ Paper uploaded successfully! It now appears in Manage Papers.</div>
      )}

      <div className="up-form-card">
        <form onSubmit={handleSubmit} className="up-form">
          <div className="up-form-grid">
            <div className="up-form-group">
              <label>Paper Title</label>
              <input name="title" value={form.title} onChange={handleChange} placeholder="e.g. JEE Advanced 2024 Mock 1" required />
            </div>
            <div className="up-form-group">
              <label>Subject</label>
              <select name="subject" value={form.subject} onChange={handleChange} required>
                <option value="">Select Subject</option>
                {["Physics", "Chemistry", "Maths", "Biology", "English", "History"].map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="up-form-group">
              <label>Board</label>
              <select name="board" value={form.board} onChange={handleChange} required>
                <option value="">Select Board</option>
                {["CBSE", "ICSE", "JEE", "NEET", "State Board"].map((b) => <option key={b}>{b}</option>)}
              </select>
            </div>
            <div className="up-form-group">
              <label>Class</label>
              <select name="class" value={form.class} onChange={handleChange} required>
                <option value="">Select Class</option>
                {["9", "10", "11", "12"].map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div className="up-form-group">
              <label>Year</label>
              <select name="year" value={form.year} onChange={handleChange} required>
                <option value="">Select Year</option>
                {["2026","2025","2024", "2023", "2022", "2021", "2020"].map((y) => <option key={y}>{y}</option>)}
              </select>
            </div>
          </div>

          <div className="up-file-group">
            <label>Upload PDF</label>
            <div className="up-file-box">
              <FiUploadCloud className="up-file-icon" />
              <p>Drag &amp; drop your PDF here or click to browse</p>
              <input type="file" name="file" accept=".pdf" onChange={handleChange} />
              {form.file && <span className="up-file-name">📄 {form.file.name}</span>}
            </div>
          </div>

          <button type="submit" className="up-submit-btn">Upload Paper</button>
        </form>
      </div>
    </div>
  );
};

export default UploadPaper;

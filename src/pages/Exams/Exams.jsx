import React from 'react';
import "../TestSeries/TestSeries.css";

const Exams = () => {
  return (
    <div className="test-series-container">
      <h1>Exams PYQS</h1>
      <p>Welcome to the PYQs. Access your practice papers, and track your consistency.</p>

      <div className="test-series-grid">
        <div className="test-card">
          <div className="test-card-header">
            <span className="badge-live">Live</span>
            <h3>Class 12th Maths </h3>
          </div>
          <p>year- 2023</p>
          <div className="test-info">
            <span>80 Marks</span>
          </div>
          <button className="start-btn">Start Practice</button>
        </div>

        <div className="test-card">
          <div className="test-card-header">
            <h3>Class 10th Science</h3>
          </div>
          <p>Physics, Chemistry, Biology</p>
          <div className="test-info">
            <span>80 Marks</span>
          </div>
          <button className="start-btn">Start Practice</button>
        </div>

        <div className="test-card">
          <div className="test-card-header">
            <h3>CBSE Class 12 Maths</h3>
          </div>
          <p>Year-2024</p>
          <div className="test-info">
            <span>80 Marks</span>
          </div>
          <button className="start-btn">Start Practice</button>
        </div>

        
      </div>
    </div>
  );
};

export default Exams;

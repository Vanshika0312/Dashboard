import React from 'react';
import './TestSeries.css';

const TestSeries = () => {
  return (
    <div className="test-series-container">
      <h1>Test Series</h1>
      <p>Welcome to the Test Series. Access your mock tests, practice papers, and track your progress here.</p>
      
      <div className="test-series-grid">
        <div className="test-card">
          <div className="test-card-header">
            <span className="badge-live">Live</span>
            <h3>JEE Main Mock Test 1</h3>
          </div>
          <p>Physics, Chemistry, Mathematics</p>
          <div className="test-info">
            <span>90 Mins</span>
            <span>300 Marks</span>
          </div>
          <button className="start-btn">Start Test</button>
        </div>
        
        <div className="test-card">
          <div className="test-card-header">
            <h3>NEET Full Syllabus</h3>
          </div>
          <p>Physics, Chemistry, Biology</p>
          <div className="test-info">
            <span>180 Mins</span>
            <span>720 Marks</span>
          </div>
          <button className="start-btn">Start Test</button>
        </div>
        
        <div className="test-card">
          <div className="test-card-header">
            <h3>CBSE Class 12 Math</h3>
          </div>
          <p>Mathematics Board Pattern</p>
          <div className="test-info">
            <span>180 Mins</span>
            <span>80 Marks</span>
          </div>
          <button className="start-btn">Start Test</button>
        </div>
      </div>
    </div>
  );
};

export default TestSeries;

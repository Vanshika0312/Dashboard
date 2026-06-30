import React, { useState } from 'react';
import './MockPapers.css';
import { FiSearch, FiFilter, FiClock, FiFileText } from 'react-icons/fi';

const mockPapersData = [
  { id: 1, title: 'JEE Advanced 2024 Mock 1', subject: 'Physics, Chemistry, Math', duration: '3 Hours', questions: 90, difficulty: 'Hard' },
  { id: 2, title: 'NEET Full Syllabus Test', subject: 'Biology, Physics, Chemistry', duration: '3 Hours 20 Mins', questions: 200, difficulty: 'Medium' },
  { id: 3, title: 'CBSE Class 12 Math Sample Paper', subject: 'Mathematics', duration: '3 Hours', questions: 38, difficulty: 'Medium' },
  { id: 4, title: 'GATE CS & IT Practice Set', subject: 'Computer Science', duration: '3 Hours', questions: 65, difficulty: 'Hard' },
  { id: 5, title: 'SSC CGL Tier 1 Mock', subject: 'General Aptitude', duration: '1 Hour', questions: 100, difficulty: 'Easy' },
  { id: 6, title: 'UPSC Prelims GS Paper 1', subject: 'General Studies', duration: '2 Hours', questions: 100, difficulty: 'Hard' },
];

const MockPapers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPapers = mockPapersData.filter(paper => 
    paper.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    paper.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mock-papers-page">
      <div className="page-header-content">
        <h2>Browse Mock Papers</h2>
        <p>Explore our vast collection of practice tests to ace your exams.</p>
      </div>

      <div className="search-filter-section">
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Search papers by title or subject..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="filter-btn">
          <FiFilter /> Filters
        </button>
      </div>

      <div className="papers-grid">
        {filteredPapers.map(paper => (
          <div className="paper-card" key={paper.id}>
            <div className="paper-card-header">
              <span className={`difficulty-badge ${paper.difficulty.toLowerCase()}`}>
                {paper.difficulty}
              </span>
            </div>
            <div className="paper-card-body">
              <h3>{paper.title}</h3>
              <p className="paper-subject">{paper.subject}</p>
              <div className="paper-meta">
                <span><FiClock /> {paper.duration}</span>
                <span><FiFileText /> {paper.questions} Qs</span>
              </div>
            </div>
            <div className="paper-card-footer">
              <button className="start-test-btn">Start Test</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MockPapers;

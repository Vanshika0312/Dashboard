import "./DataTable.css";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { useState } from "react";

const DataTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Create 12 items for 2 pages
  const data = Array(12).fill(null).map((_, i) => ({
    question: `ISC Class XI Mid-term 2026 (Set ${i + 1})`,
    year: "2026",
    student: "Vanshika Chauhan",
    pages: "03",
    questions: "40",
    responses: "27"
  }));

  const totalPages = Math.ceil(data.length / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="table-card">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Sl. Number</th>
              <th>Question</th>
              <th>Year</th>
              <th>Student</th>
              <th>Pages</th>
              <th>Questions</th>
              <th>Responses</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, idx) => {
              const actualIdx = startIndex + idx;
              return (
                <tr key={actualIdx}>
                  <td>
                    <span className="sl-badge">{(actualIdx + 1).toString().padStart(2, '0')}</span>
                  </td>
                  <td className="question-col">{row.question}</td>
                  <td><span className="year-badge">{row.year}</span></td>
                  <td>{row.student}</td>
                  <td>{row.pages}</td>
                  <td>{row.questions}</td>
                  <td>{row.responses}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button 
          className="page-btn" 
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FiArrowLeft />
        </button>
        <button 
          className={`page-btn ${currentPage === 1 ? 'active' : ''}`}
          onClick={() => handlePageChange(1)}
        >1</button>
        <button 
          className={`page-btn ${currentPage === 2 ? 'active' : ''}`}
          onClick={() => handlePageChange(2)}
        >2</button>
        <span className="dots">...</span>
        <button className="page-btn">6</button>
        <button className="page-btn">7</button>
        <button className="page-btn">8</button>
        <button 
          className="next-btn"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <FiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default DataTable;

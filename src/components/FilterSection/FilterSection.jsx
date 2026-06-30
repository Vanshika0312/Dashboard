import "./FilterSection.css";

const FilterSection = () => {
  return (
    <div className="filter-card">
      <div className="filter-group">
        <label>Select type</label>
        <select>
          <option value="UP Board">Up Board</option>
          <option value="CBSE">CBSE</option>
          <option value="UK Board">UK Board</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Select Subject</label>
        <select>
          <option>English</option>
           <option>Science</option>
            <option>Maths</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Select Board</label>
        <select>
          <option>Board Exam</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Select year</label>
        <select>
          <option>2026</option>
          <option>2025</option>
          <option>2024</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Select class</label>
        <select>
          <option>VII</option>
          <option>VIII</option>
          <option>IX</option>
          <option>X</option>
          <option>XI</option>
          <option>XII</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSection;

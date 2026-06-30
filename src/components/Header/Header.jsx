import "./Header.css";

const Header = () => {
  return (
    <div className="page-header">
      <div className="header-titles">
        <h2>Mock Papers</h2>
        <p>Browse Papers</p>
      </div>
      <button className="primary-btn">My Uploads</button>
    </div>
  );
};

export default Header;

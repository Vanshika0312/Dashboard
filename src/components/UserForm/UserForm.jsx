import { FiUser, FiMail, FiPhone, FiPlus } from "react-icons/fi";
import "./UserForm.css";

function UserForm() {
  return (
    <div className="user-form-container">
      <div className="user-form-header">
        <h3>Add New Record</h3>
        <p>Enter the details below to create a new system entry.</p>
      </div>

      <form className="user-form">
        <div className="input-group">
          <FiUser className="input-icon" />
          <input type="text" placeholder="Full Name" />
        </div>

        <div className="input-group">
          <FiMail className="input-icon" />
          <input type="email" placeholder="Email Address" />
        </div>

        <div className="input-group">
          <FiPhone className="input-icon" />
          <input type="tel" placeholder="Phone Number" />
        </div>

        <button type="button" className="submit-btn">
          <FiPlus className="btn-icon" />
          Add Record
        </button>
      </form>
    </div>
  );
} 

export default UserForm;
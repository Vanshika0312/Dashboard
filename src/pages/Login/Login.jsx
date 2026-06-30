import React, { useState, useContext } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    const result = login(email, password);
    if (result.success) {
      if (result.role === 'admin') {
        // Admin always goes to the admin dashboard
        navigate('/admin', { replace: true });
      } else if (location.state?.from?.pathname && location.state.from.pathname !== '/login') {
        // Regular user goes back to where they came from
        navigate(from, { replace: true });
      } else {
        navigate('/', { replace: true });
      }
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <span className="logo-icon">W</span>
          <h2>Welcome</h2>
          <p>Enter your details to access your dashboard.</p>
        </div>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="auth-btn">Sign In</button>
        </form>

        <div className="auth-footer">
          {email === 'admin@test.com' ? (
            <p className="admin-hint"> Admin login — no registration required.</p>
          ) : (
            <p>Don't have an account? <Link to="/register">Register here</Link></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

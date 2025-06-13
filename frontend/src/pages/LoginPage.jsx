// LoginPage.jsx
import React from 'react';
import '../styles/auth.css';
import logo from '../assets/log.png';


const LoginPage = () => {
  return (
    <div className="auth-container">
      <img src={logo} alt="SmartChef Logo" className="auth-logo" />
      <h2 className="auth-title">Welcome Back to SmartChef</h2>
      <input type="email" placeholder="Email" className="auth-input" />
      <input type="password" placeholder="Password" className="auth-input" />
      <button className="auth-button">Login</button>
      <div className="auth-footer">
        Don't have an account? <a href="/signup">Sign Up</a>
      </div>
    </div>
  );
};

export default LoginPage;



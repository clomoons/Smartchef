// SignupPage.jsx
import React from 'react';
import '../styles/auth.css';
import logo from '../assets/log.png';

const SignupPage = () => {
  return (
    <div className="auth-container">
      <img src={logo} alt="SmartChef Logo" className="auth-logo" />
      <h2 className="auth-title">Create Your SmartChef Account</h2>
      <input type="email" placeholder="Email" className="auth-input" />
      <input type="password" placeholder="Password" className="auth-input" />
      <input type="password" placeholder="Confirm Password" className="auth-input" />
      <button className="auth-button">Sign Up</button>
      <div className="auth-footer">
        Already have an account? <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default SignupPage;


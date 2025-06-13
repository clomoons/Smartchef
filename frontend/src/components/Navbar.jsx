import React from 'react';
import '../styles/navbar.css';
import { FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">SmartChef</div>
      <div className="navbar-right">
        <a href="/" className="nav-link">Home</a>
        <a href="/recipes" className="nav-link">Recipes</a>
        <a href="/mood" className="nav-link">Mood Recipes</a>
        <a href="/signup" className="signup-button">
          Sign Up <FaArrowRight className="arrow-icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

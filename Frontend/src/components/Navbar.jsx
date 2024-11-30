// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/challenges">Challenges</Link>
      <Link to="/dashboard">Dashboard</Link>
      <button onClick={onLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;

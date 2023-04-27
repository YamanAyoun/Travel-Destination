import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <header>
      <h1><Link to="/">Home</Link></h1>
    </header>
  );
}

export default Navbar;

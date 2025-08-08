
import React from 'react';
import { Link } from 'react-router-dom';

const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#f5f5f5'
};

const linkStyle = {
  margin: '0 10px',
  textDecoration: 'none',
  color: 'black'
};

function Navbar() {
  return (
    <nav style={navbarStyle}>
      <h2>My Company</h2>
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/services" style={linkStyle}>Services</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;

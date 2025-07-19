import React from 'react';
import './Footer.css'; // Optional: create a separate CSS file if needed

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
      <p>
        Built with 💙 by <a href="https://github.com/DAyeni-Dev" target="_blank" rel="noopener noreferrer">Damilola Ayeni</a>
      </p>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Grid Smart Tech. All rights reserved.</p>
        <p>Reach Out: info@gridsmarttech.com</p>
      </div>
    </footer>
  );
};

export default Footer;
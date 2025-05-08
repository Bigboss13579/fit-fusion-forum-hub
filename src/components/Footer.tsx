
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-fitness-navy text-white py-4 text-center mt-8">
      <p>© {currentYear} Fitness Hub Community. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

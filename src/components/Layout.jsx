import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Layout component - Wraps pages with Navbar and Footer
 * Reduces duplication in route definitions
 */
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
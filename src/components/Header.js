import React from 'react';
import { Car, Menu } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Car size={32} />
            <span className="logo-text">CarShowcase</span>
          </div>
          
          <nav className="nav">
            <a href="#overview" className="nav-link">Overview</a>
            <a href="#gallery" className="nav-link">Gallery</a>
            <a href="#calculator" className="nav-link">Calculator</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          
          <button className="menu-btn">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

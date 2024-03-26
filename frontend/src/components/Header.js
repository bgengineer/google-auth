import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="nav-list">
          <li className="right"><Link to="/">Home</Link></li>
          <li className="right"><Link to="/signin">Sign In</Link></li>
          <li className="right"><Link to="/about">About</Link></li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <ul className="nav-items">
          <li><NavLink to="/" className={(navData) => (navData.isActive ? 'active' : '')}>Books</NavLink></li>
          <li><NavLink to="/categories" className={(navData) => (navData.isActive ? 'active' : '')}>Categories</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

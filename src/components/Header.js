import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import image from '../assets/images/user.png';

export default function Header() {
  return (
    <header id="header">
      <nav className="nav">
        <ul className="nav-items">
          <li><h1 id="title">Bookstore CMS</h1></li>
          <li><NavLink to="/" className={(navData) => (navData.isActive ? 'active' : '')}>Books</NavLink></li>
          <li><NavLink to="/categories" className={(navData) => (navData.isActive ? 'active' : '')}>Categories</NavLink></li>
        </ul>
        <img id="user-logo" src={image} alt="User" />
      </nav>
    </header>
  );
}

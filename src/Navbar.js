import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact Me' },
];

const Navbar = () => {
  return (
    <nav className="bg-dark navbar-dark">
      {navItems.map((item) => (
        <Link key={item.to} to={item.to}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default memo(Navbar);
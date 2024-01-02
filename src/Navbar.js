import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', background: '#333', color: '#fff' }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center' }}>
        <li style={{ marginRight: '20px' }}>
          <Link to="/login" style={{ textDecoration: 'none', color: '#fff' }}>
            Login
          </Link>
        </li>
        <li>
          <Link to="/chat" style={{ textDecoration: 'none', color: '#fff' }}>
            Chat
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/transactions">Transactions</Link>
        </li>
        <li>
          <Link to="/deposit-withdraw">Withdrawals</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

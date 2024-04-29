import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/employee">Employee</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

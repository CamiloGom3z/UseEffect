import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Counter">Contador</Link>
        </li>
        <li>
            <Link to="/Temporizador">Temporizador</Link>
        </li>
        <li>
            <Link to="/Reloj">Reloj</Link>
        </li>
        <li>
            <Link to="/Mostrarcapital">Mostrarcapital</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

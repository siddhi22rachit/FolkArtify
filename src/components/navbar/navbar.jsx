import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../assests/logo.png';

const Navbar = () => {
  const [menu, setMenu] = useState("");

  return (
    <div className='Navbar'>
      <div className='logo1'>
        <Link to='/'>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className='menu'>
        <ul>
          <li onClick={() => { setMenu("Furniture") }}><Link to='/Furniture'>Furniture </Link></li>
          <li onClick={() => { setMenu("Wall Decor") }}><Link to='/Wall_Decor'>Wall Decor </Link></li>
          <li onClick={() => { setMenu("MarbleHandicrafts") }}><Link to='/Marble_Handicrafts'>Marble Handicrafts </Link></li>
          <li onClick={() => { setMenu("Tableware") }}><Link to='/Tableware'>Tableware </Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;



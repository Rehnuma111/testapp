import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#060b26"}}>
  <div className="container-fluid">
    <a className="navbar-brand" to="#" style={{color: "white", fontWeight: "bold", fontFamily: "cursive"}}>Enigma</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/" style={{color: "white"}}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register" style={{color: "white"}}>Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact" style={{color: "white"}}>Contact Us</NavLink>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  );
}

export default Navbar;
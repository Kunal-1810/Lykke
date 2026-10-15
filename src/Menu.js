import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "./logo.png"; // change to your logo's real path/filename
import "./Menu.css";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  const linkClass = ({ isActive }) =>
    isActive ? "nav-pill active-css" : "nav-pill";

  return (
    <header className="top-bar1">
      <Link to="/" className="logo-link" onClick={closeMenu}>
        <img src={logo} alt="Travel Lykke - Home" className="logo-img" />
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? "✕" : "☰"}
      </button>

      <nav className={`nav-buttons ${open ? "open" : ""}`}>
        <NavLink to="/bookings" className={linkClass} onClick={closeMenu}>
          My Bookings
        </NavLink>
        <NavLink to="/login" className={linkClass} onClick={closeMenu}>
          Login
        </NavLink>
        <NavLink to="/about" className={linkClass} onClick={closeMenu}>
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Menu;
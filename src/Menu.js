import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

const linkClass = (base) => ({ isActive }) =>
  isActive ? `${base} active-css` : base;

const Menu = () => {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <div className="top-bar1">
      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? "✕" : "☰"}
      </button>

      <div className={`nav-buttons ${open ? "open" : ""}`}>
        <NavLink end to="/" className={linkClass("nav-link")} onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/bookings" className={linkClass("nav-link")} onClick={closeMenu}>
          My Bookings
        </NavLink>
        <NavLink to="/login" className={linkClass("nav-link")} onClick={closeMenu}>
          Login
        </NavLink>
        <NavLink to="/about" className={linkClass("nav-link")} onClick={closeMenu}>
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
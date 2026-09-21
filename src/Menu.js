import React from "react";
import { NavLink } from "react-router-dom";
import './Menu.css';

const linkClass = (base) => ({ isActive }) =>
  isActive ? `${base} active-css` : base;

const Menu = () => {
  return (
    <div className="top-bar1">
        <div className="nav-buttons">
          <NavLink end to="/" className={linkClass("nav-link")}>  </NavLink>
          <NavLink to="/bookings" className={linkClass("nav-link")}>  </NavLink>
          <NavLink to="/login" className={linkClass("nav-link")}>  </NavLink>
          <NavLink to="/about" className={linkClass("nav-link")}>  </NavLink>
        </div>
    </div>
  );
};

export default Menu;
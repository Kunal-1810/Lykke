import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "./images/logo.svg";
import { useAuth } from "./AuthContext";
import "./Menu.css";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const closeMenu = () => setOpen(false);

  const linkClass = ({ isActive }) =>
    isActive ? "nav-pill active-css" : "nav-pill";

  const handleLogout = () => {
    logout();
    closeMenu();
    navigate("/");
  };

  const firstName = user ? user.name.split(" ")[0] : "";

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
        {user && <span className="nav-greeting">Hi, {firstName}</span>}
        <NavLink to="/packages" className={linkClass} onClick={closeMenu}>
          Packages
        </NavLink>
        <NavLink to="/bookings" className={linkClass} onClick={closeMenu}>
          My Bookings
        </NavLink>
        {user ? (
          <button type="button" className="nav-pill nav-btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <NavLink to="/login" className={linkClass} onClick={closeMenu}>
            Login
          </NavLink>
        )}
        <NavLink to="/about" className={linkClass} onClick={closeMenu}>
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Menu;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on navigation
  const handleNav = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-group">
        <img
          src="/images/ayodhya-logo-removebg-preview.png"
          alt="Ayodhya Logo"
          className="navbar-logo"
        />
<h1 className="navbar-title">
  <span className="navbar-title-main">AYODHYA DHAM |</span><br />
  <span className="navbar-title-sub">राम लला</span>
</h1>
      </div>
      {/* Hamburger for mobile */}
      <button
        className="navbar-burger"
        aria-label="Menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </button>
      
      <ul className="navbar-links">
        <li onClick={() => handleNav("/")}>Home</li>
        <li onClick={() => handleNav("/livedarshan")}>Live Darshan</li>
        <li onClick={() => handleNav("/donation")}>Donate</li>
        <li onClick={() => handleNav("/gallery")}>Gallery</li>
        <li onClick={() => handleNav("/events")}>Events</li>
        <li onClick={() => handleNav("/contact")}>Contact</li>
        <li onClick={() => handleNav("/login")}>Login</li>
      </ul>
      
      <div className={`navbar-mobile-menu${menuOpen ? " open" : ""}`}>
        <ul>
          <li onClick={() => handleNav("/")}>Home</li>
          <li onClick={() => handleNav("/livedarshan")}>Live Darshan</li>
          <li onClick={() => handleNav("/donation")}>Donate</li>
          <li onClick={() => handleNav("/gallery")}>Gallery</li>
          <li onClick={() => handleNav("/events")}>Events</li>
          <li onClick={() => handleNav("/contact")}>Contact</li>
          <li onClick={() => handleNav("/login")}>Login</li>
        </ul>
      </div>
      {menuOpen && (
        <div className="navbar-mobile-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </nav>
  );
}

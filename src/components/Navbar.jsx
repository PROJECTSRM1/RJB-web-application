
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // --- Navigation handler ---
  const handleNav = (path) => {
    setMenuOpen(false);

    const sectionIds = ["livedarshan", "donation", "gallery", "events", "contact"];

    // Remove leading slash (in case you pass "/donation")
    const cleanPath = path.replace("/", "");

    if (sectionIds.includes(cleanPath)) {
      setTimeout(() => {
        const section = document.getElementById(cleanPath);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return; 
    }


    setTimeout(() => navigate(path), 100);
  };


  return (
    <nav className="navbar">
      <div className="navbar-group">
        <img
          src="/images/ayodhya-logo-removebg-preview.png"
          alt="Ayodhya Logo"
          className="navbar-logo"
          onClick={() => handleNav("/")}
        />
        <h1 className="navbar-title">
          <span className="navbar-title-main">AYODHYA DHAM |</span>
          <br />
          <span className="navbar-title-sub">राम लला</span>
        </h1>
      </div>

      {/* Burger for mobile */}
      <button
        className={`navbar-burger ${menuOpen ? "open" : ""}`}
        aria-label="Menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Desktop links */}
      <ul className="navbar-links">
        <li onClick={() => handleNav("/")}>Home</li>
        <li onClick={() => handleNav('livedarshan')}>Live Darshan</li>
        <li onClick={() => handleNav("/donation")}>Donate</li>
        <li onClick={() => handleNav("/gallery")}>Gallery</li>
        <li onClick={() => handleNav("/events")}>Events</li>
        <li onClick={() => handleNav("/contact")}>Contact</li>
        <li onClick={() => handleNav("/login")}>Login</li>
      </ul>

      {/* Mobile menu */}
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

      {/* Overlay */}
      {menuOpen && (
        <div
          className="navbar-mobile-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
}


import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-group">
        <img
          src="/images/ayodhya-logo-removebg-preview.png"
          alt="Ayodhya Logo"
          className="navbar-logo"
        />
        <h1 className="navbar-title">AYODHYA DHAM | राम लला</h1>
      </div>
      <ul className="navbar-links">
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/livedarshan")}>Live Darshan</li>
        <li onClick={() => navigate("/donation")}>Donate</li>
        <li onClick={() => navigate("/gallery")}>Gallery</li>
        <li onClick={() => navigate("/events")}>Events</li>
        <li onClick={() => navigate("/contact")}>Contact</li>
        <li onClick={() => navigate("/login")}>Login</li>
      </ul>
    </nav>
  );
}

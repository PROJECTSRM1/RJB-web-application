import React from "react";
import { NavLink } from "react-router-dom";
import "./HeaderFooter.css";

export default function Header() {
  return (
    <header className="contribute-header">
      <div className="contribute-top">
        <img src="/images/logo.png" alt="Logo" className="contribute-logo" />
      </div>

      <nav className="contribute-nav">
        <ul>
          <li><NavLink to="/contribute" >Home</NavLink></li>
          <li><NavLink to="*">Donation</NavLink></li>
          <li><NavLink to="/aarti">Free Aarti</NavLink></li>
          <li><NavLink to="/darshan">Free Sugam Darshan</NavLink></li>
          <li><NavLink to="/events">Event Participation</NavLink></li>
          <li><NavLink to="/transactions">Transaction History</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

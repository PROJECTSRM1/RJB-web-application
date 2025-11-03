import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import "./HeaderFooter.css";

export default function Footer() {
  return (
    <footer className="contribute-footer">
      <div className="footer-top">
        <Link to="/contact">Contact Us</Link>
        <Link to="/about">About Us</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/feedback">Feedback</Link>
      </div>
      <hr />
      <p>© 2025 Shri Ram Janmbhoomi Teerth Kshetra. All Rights Reserved.</p>
    </footer>
  );
}

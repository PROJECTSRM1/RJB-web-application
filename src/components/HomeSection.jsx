
import React from "react";
import "./HomeSection.css";

export default function HeroSection() {
  const heroImg = "https://triptovaranasi.in/wp-content/uploads/2024/01/Ayodhya-Tour-Package.png"; 

  return (
    <section
      id="hero"
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          
          <img
            src="/images/ayodhya-logo-removebg-preview.png" 
            alt="Ayodhya Logo"
            className="hero-logo"
          />
          
          <h1 className="hero-title">Shri Ram Janmbhoomi Teerth Kshetra</h1>
          <div className="hero-title-sanskrit">रामो विग्रहवान् धर्मः</div>
          {/* Contribute description */}
          <div className="hero-desc">
            You may voluntarily contribute here for Shri Ram Janmbhoomi Teerth Kshetra Trust
          </div>
          {/* Contribute button */}
          <a href="#donate" className="contribute-btn">CLICK TO CONTRIBUTE</a>
          
        </div>
      </div>
    </section>
  );
}

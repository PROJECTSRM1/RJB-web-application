

import React from "react";
import "./Navbar1.css";


const Navbar1= () => {
  return (
    <nav className="navbar1">



      <div className="navbar1-left">
        
        <h2 className="navbar1-title">Rama Janma Bhumi</h2>
      </div>



    
      <div className="navbar1-center">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
        />
      </div>



    
      <div className="navbar1-right">
        <select className="location-select">
          <option>All Locations</option>
          <option>Hyderabad</option>
          <option>Chennai</option>
          <option>Mumbai</option>
        </select>



        <div className="notification-icon">🔔</div>



        <div className="user-info">
          <div className="user-avatar">A</div>
          <div className="user-details">
            <span className="user-name">Admin</span>
            <span className="user-role">Super Admin</span>
          </div>
        </div>
      </div>
    </nav>
  );
};



export default Navbar1;
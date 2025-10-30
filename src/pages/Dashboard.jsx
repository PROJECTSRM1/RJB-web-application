
import React, { useState } from 'react';
import Navbar1 from '../components/Navbar1';
import Sidebar from '../components/Sidebar';
import { Shield, Car, Cpu, Radio } from "lucide-react";
import './Dashboard.css';

const Dashboard = () => {
  const [dashboardData] = useState({
    policeMovements: 4,
    vehicleScanning: 8,
    vr: 2,
    jioOffencing: 3,
  });
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (type) => {
    setSelectedCard(type === selectedCard ? null : type);
  };

  return (
    <div className="main-app">
      <Navbar1 />
      <div className="dashboard">
        <div className="dashboard-body">
          <Sidebar />
          <main className="main-content">
            <h2 className="welcome">Welcome Back! 👋</h2>
            <div className="cards">
              <div className={`card police ${selectedCard === "police" ? "active" : ""}`}
                   onClick={() => handleCardClick("police")}>
                <Shield size={36} className="icon" />
                <h3>Police Movements</h3>
                <p className="count">{dashboardData.policeMovements}</p>
                <span className="subtitle">Active Monitoring</span>
              </div>
              <div className={`card vehicle ${selectedCard === "vehicle" ? "active" : ""}`}
                   onClick={() => handleCardClick("vehicle")}>
                <Car size={36} className="icon" />
                <h3>Vehicle Scanning</h3>
                <p className="count">{dashboardData.vehicleScanning}</p>
                <span className="subtitle">Scans Today</span>
              </div>
              <div className={`card vr ${selectedCard === "vr" ? "active" : ""}`}
                   onClick={() => handleCardClick("vr")}>
                <Cpu size={36} className="icon" />
                <h3>VR</h3>
                <p className="count">{dashboardData.vr}</p>
                <span className="subtitle">Live Sessions</span>
              </div>
              <div className={`card jio ${selectedCard === "jio" ? "active" : ""}`}
                   onClick={() => handleCardClick("jio")}>
                <Radio size={36} className="icon" />
                <h3>Jio Offencing</h3>
                <p className="count">{dashboardData.jioOffencing}</p>
                <span className="subtitle">Active Connections</span>
              </div>
            </div>
            {selectedCard && (
              <div className="details-section fade-in">
                {/* Card details content */}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

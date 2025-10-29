

import React, { useState } from 'react';
import Navbar1 from '../components/Navbar1';
import Sidebar from '../components/Sidebar';
import './Dashboard.css';
import { Shield, Car, Cpu, Radio } from "lucide-react";

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
    <div className="dashboard">
      <Navbar1 />
      <div className="dashboard-body">
        <Sidebar />
        <main className="main-content">
          <h2 className="welcome">Welcome Back! 👋</h2>
          {/* Dashboard Cards */}
          <div className="cards">
            <div
              className={`card police ${selectedCard === "police" ? "active" : ""}`}
              onClick={() => handleCardClick("police")}
            >
              <Shield size={36} className="icon" />
              <h3>Police Movements</h3>
              <p className="count">{dashboardData.policeMovements}</p>
              <span className="subtitle">Active Monitoring</span>
            </div>
            <div
              className={`card vehicle ${selectedCard === "vehicle" ? "active" : ""}`}
              onClick={() => handleCardClick("vehicle")}
            >
              <Car size={36} className="icon" />
              <h3>Vehicle Scanning</h3>
              <p className="count">{dashboardData.vehicleScanning}</p>
              <span className="subtitle">Scans Today</span>
            </div>
            <div
              className={`card vr ${selectedCard === "vr" ? "active" : ""}`}
              onClick={() => handleCardClick("vr")}
            >
              <Cpu size={36} className="icon" />
              <h3>VR</h3>
              <p className="count">{dashboardData.vr}</p>
              <span className="subtitle">Live Sessions</span>
            </div>
            <div
              className={`card jio ${selectedCard === "jio" ? "active" : ""}`}
              onClick={() => handleCardClick("jio")}
            >
              <Radio size={36} className="icon" />
              <h3>Jio Offencing</h3>
              <p className="count">{dashboardData.jioOffencing}</p>
              <span className="subtitle">Active Connections</span>
            </div>
          </div>
          {/* Description Section */}
          {selectedCard && (
            <div className="details-section fade-in">
              {selectedCard === "police" && (
                <>
                  <h3>Police Movements</h3>
                  <p>
                    The Police Movements module tracks active patrols, personnel deployments,
                    and law enforcement activities across key areas. This ensures better situational awareness
                    and operational safety.
                  </p>
                </>
              )}
              {selectedCard === "vehicle" && (
                <>
                  <h3>Vehicle Scanning</h3>
                  <p>
                    Vehicle Scanning provides automated detection and tracking of vehicles entering or exiting
                    secure zones using AI-based systems for smarter surveillance.
                  </p>
                </>
              )}
              {selectedCard === "vr" && (
                <>
                  <h3>VR Module</h3>
                  <p>
                    The VR (Virtual Reality) module offers immersive training simulations and
                    interactive 3D visualization for enhanced operational readiness.
                  </p>
                </>
              )}
              {selectedCard === "jio" && (
                <>
                  <h3>Jio Offencing</h3>
                  <p>
                    Jio Offencing monitors network activity in restricted zones, preventing unauthorized
                    communication and ensuring data integrity in high-security areas.
                  </p>
                </>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

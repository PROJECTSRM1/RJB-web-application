
import React, { useState } from 'react';
import Navbar from '../components/Navbar1';
import Sidebar from '../components/Sidebar';
import './Settings.css';


const Settings = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [notifications, setNotifications] = useState(true);


  const handleSave = (e) => {
    e.preventDefault();
    alert('✅ Settings saved successfully!');
  };


  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-body">
        <Sidebar />
        <main className="main-content settings-container">
          <div className="settings-card">
            <h2> User Settings</h2>
            <p className="subtitle">Update your personal details and preferences below</p>


            <form className="settings-form" onSubmit={handleSave}>
              <label>
                Username
                <input
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  placeholder="Enter your username"
                />
              </label>


              <label>
                Email
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </label>


              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={e => setNotifications(e.target.checked)}
                />
                Enable Notifications
              </label>


              <button type="submit">Save Changes</button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};


export default Settings;


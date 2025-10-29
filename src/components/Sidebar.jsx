import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';


const Sidebar = () => {
  const navigate = useNavigate();


  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem('isAuthenticated');
      navigate('/');
    }
  };


  return (
    <aside className="sidebar">
      <div className="logo"></div>
      <ul className="menu">
        <li onClick={() => navigate('/dashboard')}>Dashboard</li>
        <li onClick={() => navigate('/settings')}>Settings</li>
        <li onClick={() => navigate('/support')}>Support Tickets</li>
        <li className="logout" onClick={handleLogout}>Logout</li>
      </ul>
    </aside>
  );
};


export default Sidebar;
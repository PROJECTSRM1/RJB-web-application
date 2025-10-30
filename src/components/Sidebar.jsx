
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const handleNav = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };
  const handleLogout = () => setShowConfirm(true);
  const confirmLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setShowConfirm(false);
    setDrawerOpen(false);
    navigate('/');
  };
  const cancelLogout = () => setShowConfirm(false);

  return (
    <>
      
      <button
        className="burger mobile-only"
        aria-label="Menu"
        onClick={() => setDrawerOpen(true)}
      >
        <span />
        <span />
        <span />
      </button>

      <aside className="sidebar sidebar-drawer desktop-only">
        <ul className="menu">
          <li onClick={() => handleNav('/dashboard')}>Dashboard</li>
          <li onClick={() => handleNav('/settings')}>Settings</li>
          <li onClick={() => handleNav('/support')}>Support Tickets</li>
          <li className="logout" onClick={handleLogout}>Logout</li>
        </ul>
      </aside>
      {/* Mobile Drawer */}
      <aside className={`sidebar sidebar-drawer drawer mobile-only${drawerOpen ? ' open' : ''}`}>
        <ul className="menu">
          <li onClick={() => handleNav('/dashboard')}>Dashboard</li>
          <li onClick={() => handleNav('/settings')}>Settings</li>
          <li onClick={() => handleNav('/support')}>Support Tickets</li>
          <li className="logout" onClick={handleLogout}>Logout</li>
        </ul>
      </aside>
      {drawerOpen && <div className="drawer-overlay" onClick={() => setDrawerOpen(false)} />}

   
      {showConfirm && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-title">Confirm Logout</div>
            <div className="modal-desc">Are you sure you want to logout?</div>
            <div className="modal-actions">
              <button className="modal-btn modal-cancel" onClick={cancelLogout}>Cancel</button>
              <button className="modal-btn modal-confirm" onClick={confirmLogout}>Logout</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Sidebar;

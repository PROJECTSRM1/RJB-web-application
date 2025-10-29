
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import EventsSection from './components/Sections/EventsSection';
import HomeSection from './components/HomeSection';
import GallerySection from './components/Sections/GallerySection';
import DonationSection from './components/Sections/DonationSection';
import DarshanTimingsSection from './components/Sections/DarshanTimingsSection';
import AyodhyaFooter from './components/AyodhyaFooter';

import Login from './pages/Login';
import Signup from './pages/Signup';
import RecoverPassword from './pages/RecoverPassword';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import SupportTickets from './pages/SupportTickets';

import './App.css';

function isAuthenticated() {
  // Check for a valid logged-in email
  return !!localStorage.getItem('email');
}

function MainSections() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <DonationSection />
      <DarshanTimingsSection />
      <EventsSection />
      <GallerySection />
      <AyodhyaFooter />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth pages */}
        <Route path="/" element={<MainSections />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/recover" element={<RecoverPassword />} />

        {/* Protected pages that require login */}
        <Route
          path="/dashboard"
          element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/settings"
          element={isAuthenticated() ? <Settings /> : <Navigate to="/login" />}
        />
        <Route
          path="/support"
          element={isAuthenticated() ? <SupportTickets /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;

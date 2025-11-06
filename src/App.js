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
import SecondLayout from "./layouts/SecondLayout";

import ContributePage from "./pages/ContibutePage";
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import FeedbackPage from './pages/FeedbackPage';
import EventParticipation from './pages/EventParticipation';
import TransactionHistory from './pages/TransactionHistory';
import Aarti from "./pages/Aarti";
import SughamDarshan from "./pages/SughamDarshan";
import DonationPage from "./pages/DonationPage";



import DonationReceiptAlert from "./pages/DonationReceiptAlert";
import DonationReceiptCorrections from "./pages/DonationReceiptCorrections";



import './App.css';

function isAuthenticated() {
return !!localStorage.getItem("email");
}

function MainSections() {
return (
<> <Navbar /> <HomeSection /> <DonationSection /> <DarshanTimingsSection /> <EventsSection /> <GallerySection /> <AyodhyaFooter />
</>
);
}

function App() {
return ( <Router> <Routes>
<Route path="/" element={<MainSections />} />

```
    {/* SecondLayout routes */}
    <Route element={<SecondLayout />}>
      <Route path="/events" element={<EventParticipation />} />
      <Route path="/transactions" element={<TransactionHistory />} />
      <Route path="/contribute" element={<ContributePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="/aarti" element={<Aarti />} />
      <Route path="/darshan" element={<SughamDarshan />} />
    </Route>

    {/* Donation main tab route */}
    <Route path="/donate" element={<DonationPage />} />

    
    <Route path="/donation-receipt" element={<DonationReceiptAlert />} />
    <Route path="/donation-corrections" element={<DonationReceiptCorrections />} />



    {/* Auth routes */}
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/recover" element={<RecoverPassword />} />

    {/* Protected routes */}
    <Route
      path="/dashboard"
      element={isAuthenticated() ? <Dashboard /> : <Navigate to="/dashboard" />}
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

import React, { useState } from "react";
import DonationTabs from "../components/DonationForm/DonationTabs";
import DonationIndian from "../components/DonationForm/DonationIndian";
import DonationNonIndian from "../components/DonationForm/DonationNonIndian";
import "../components/DonationForm/DonationForm.css";
import Header from "../components/Header";  // ✅ Include header for navigation
import Footer from "../components/Footer"; 

const DonationPage = () => {
  const [donorType, setDonorType] = useState("indian");

  return (
    <>
      <Header />
      <div className="donation-page">
        <h2 className="section-title">Donation</h2>
        <hr className="orange-line" />

        <DonationTabs donorType={donorType} setDonorType={setDonorType} />

        {donorType === "indian" ? <DonationIndian /> : <DonationNonIndian />}
      </div>
      <Footer />
    </>
  );
};

export default DonationPage;

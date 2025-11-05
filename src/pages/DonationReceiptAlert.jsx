import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header"; // ✅ Import Header
import Footer from "../components/Footer"; // ✅ Import Footer
import "../styles/DonationReceiptAlert.css";

const DonationReceiptAlert = () => {
  const navigate = useNavigate();

  const handleNo = () => {
    navigate(-1); // Go back
  };

  return (
    <>
      <Header /> {/* ✅ Header added */}

      <div className="alert-page">
        <div className="alert-box">
          <div className="alert-header">
            <span className="alert-icon">⚠️</span>
            <span className="alert-title">Alert</span>
          </div>

          <div className="alert-content">
            <p>Dear Devotee,</p>
            <p>
              Donation Receipt Service is only for those donors who made
              donations through direct deposits into the trust bank account.
            </p>
            <p>You will be redirected to Donation Receipt (Self Service) Page.</p>
            <p>Do you wish to continue?</p>
          </div>

          <div className="alert-buttons">
            <button className="no-btn" onClick={handleNo}>
              No
            </button>
            <button className="yes-btn">
              Yes
            </button>
          </div>
        </div>
      </div>

      <Footer /> {/* ✅ Footer added */}
    </>
  );
};

export default DonationReceiptAlert;

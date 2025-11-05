import React from "react";
import Header from "../components/Header"; // keep as per your structure
import Footer from "../components/Footer"; // ✅ use your existing footer
import "./DonationReceiptCorrections.css";

const DonationReceiptCorrections = () => {
  return (
    <>
      <Header />
      <div className="corrections-page">
        <h2 className="corrections-title">Donation Receipt Corrections</h2>

        <div className="corrections-overlay">
          <div className="corrections-modal">
            <div className="modal-header">
              <span className="modal-title">Alert</span>
              <button className="modal-close">×</button>
            </div>

            <div className="modal-body">
              <p>No Data Found</p>
            </div>

            <div className="modal-footer">
              <button className="ok-btn">OK</button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Footer comes here */}
      <Footer />
    </>
  );
};

export default DonationReceiptCorrections;

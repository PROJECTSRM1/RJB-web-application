import React from "react";

import "./ContributePage.css";

export default function ContributePage() {
  return (
    <div className="contribute-page">
   
      {/* --- Hero Section --- */}
      <div className="contribute-hero">
        <img
          src="https://online.srjbtkshetra.org/assets/images/verimag.png"
          alt="Temple"
          className="contribute-hero-img"
        />
      </div>

      {/* --- Floating Chat Button --- */}
      <button className="chat-btn">Chat With<br />Hanu</button>
      <section className="latest-updates">
      <h2 className="updates-title">Latest Updates</h2>
      <div className="updates-content">
        <ul>
          <li>
            We are pleased to announce the launch of NextGen Online Services – Donations, Donation Receipt and Aarti. Services like Darshan/Hundi and Accommodation will be made available shortly.
          </li>
          <li>
            Devotees can make online donations towards the trust using the Donation Service, with Mobile/OTP authentication. Donors can view and download donation receipts in the Transaction History Section.
          </li>
          <li>
            For donations made through Direct Deposit into the trust bank account, donors can utilize the 'Donation Receipt' Service, with Mobile/OTP authentication process to raise donation receipt requests and download receipts instantly.
          </li>
        </ul>

        <ul>
          <li>
            Donation Receipt Service is not applicable for donations made through NextGen Online Services System. Donation Receipt Service is also not applicable for the donations made through during Mass Collection Drive/Nidhi Samarpan Abhiyaan between 15th Jan 2021 to 31st March 2021.
          </li>
          <li>
            This Trust is now registered under the Foreign Contribution Regulation Act (FCRA), 2010. Hence, Donations from outside India are now acceptable.
          </li>
          <li>
            Shri Ram Janmbhoomi Teerth Kshetra does not authorize any agents for online bookings.
          </li>
        </ul>
      </div>
    </section>
    </div>
  );
}

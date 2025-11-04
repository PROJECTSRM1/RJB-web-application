import React from "react";

const DonationTabs = ({ donorType, setDonorType }) => {
  return (
    <div className="donor-type-section">
      <b>Donar Type</b>
      <label className="donor-label">
        <input
          type="radio"
          name="donorType"
          value="indian"
          checked={donorType === "indian"}
          onChange={() => setDonorType("indian")}
        />
        Indian
      </label>
      <label className="donor-label">
        <input
          type="radio"
          name="donorType"
          value="nonindian"
          checked={donorType === "nonindian"}
          onChange={() => setDonorType("nonindian")}
        />
        Non-Indian
      </label>
    </div>
  );
};

export default DonationTabs;

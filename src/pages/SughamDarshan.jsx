import React, { useState } from "react";
import "../styles/SughamDarshan.css";

const SughamDarshan = () => {
  const [formData, setFormData] = useState({
    bookingType: "",
    devotees: "",
    date: "",
    slot: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Proceeding with your booking!");
  };

  const handleClear = () => {
    setFormData({ bookingType: "", devotees: "", date: "", slot: "" });
  };

  return (
    
    <div className="darshan-container">
      {/* 🔶 Header Section */}
      <div className="section-header">Ramlala & Ram Darbar Darshan</div>

      {/* 🔸 Instructions */}
      <div className="instructions-section">
        <h3><strong>Important Instructions:</strong></h3>
        <ul>
          <li>Fields marked <span className="required">*</span> are mandatory.</li>
          <li>Aarti and Darshan are completely free and non-chargeable.</li>
          <li>Aadhaar and Passport will be considered as valid ID proofs for Indian and Non-Indian Devotees respectively.</li>
          <li>No Separate Sugam Darshan Pass is required for <b>children below 10 years</b> of age.</li>
          <li>The <b>Physical copy of the ID Proof</b> declared at the time of Sugam Darshan Booking is mandatory for entry into the Temple.</li>
          <li>If any devotee cancels their Sugam Darshan booking, those slots are available for others.</li>
          <li><b>Partial Cancellation</b> is not allowed.</li>
          <li>Devotees can cancel their Sugam Darshan Passes till <b>24 hours before</b> via Home → Transaction History → Select Sugam Darshan.</li>
          <li>Devotees should visit the Temple only in Indian traditional clothes (Men: Dhoti Kurta / Kurta Pajama | Women: Saree / Punjabi Dress with Dupatta).</li>
          <li>Devotees will be able to have Sugam Darshan of Lord “Maryada Purushottam” Shri Ram from near the sanctum sanctorum (Garbhgrih).</li>
          <li>Please note, Tatkal Darshan is available for all slots today until 9 PM.</li>
          <li>Devotees can get Wheelchair assistance from the Temple entry gate with valid medical proof.</li>
        </ul>
      </div>

      {/* 🔸 Darshan Booking Form */}
      <h2 className="darshan-title">Darshan</h2>

      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-row two-columns">
          <div className="form-group">
            <label className="form-label">
              Booking Type (बुकिंग का प्रकार) <span className="required">*</span>
            </label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="bookingType"
                  value="normal"
                  checked={formData.bookingType === "normal"}
                  onChange={handleChange}
                />
                Ramlala & Ram Darbar Darshan (Nishulk)
              </label>
              <label>
                <input
                  type="radio"
                  name="bookingType"
                  value="tatkal"
                  checked={formData.bookingType === "tatkal"}
                  onChange={handleChange}
                />
                Ramlala & Ram Darbar Darshan (Nishulk) – Tatkal
              </label>
              <p className="note">
                (Tatkal Darshan is only available for all slots today until 9 PM)
              </p>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              No. of Devotees (श्रद्धालु की संख्या) <span className="required">*</span>
            </label>
            <select
              name="devotees"
              value={formData.devotees}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select Devotees</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>

        <div className="form-row two-columns">
          <div className="form-group">
            <label className="form-label">
              Date (तिथि) <span className="required">*</span>
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Slot (समय)</label>
            <select
              name="slot"
              value={formData.slot}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">Select Time Slot</option>
              <option value="6am-9am">6 AM – 9 AM</option>
              <option value="9am-12pm">9 AM – 12 PM</option>
              <option value="12pm-3pm">12 PM – 3 PM</option>
              <option value="3pm-6pm">3 PM – 6 PM</option>
            </select>
          </div>
        </div>

        <div className="button-row">
          <button type="button" className="btn-clear" onClick={handleClear}>
            Clear
          </button>
          <button type="submit" className="btn-proceed">
            Proceed
          </button>

        </div>
      </form>
    </div>
  );
};

export default SughamDarshan;
 

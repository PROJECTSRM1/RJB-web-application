import React, { useState } from "react";
import "../styles/Aarthi.css";


const Aarti = () => {
  const [formData, setFormData] = useState({
    bookingType: "",
    devotees: "",
    date: "",
    aartiType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Aarti Booking Submitted Successfully!");
  };

  const handleReset = () => {
    setFormData({ bookingType: "", devotees: "", date: "", aartiType: "" });
  };

  return (
    <div className="aarti-container">
      <div className="section-header">Ramlala & Ram Darbar Aarti</div>

      <div className="instructions-section">
        <h3 className="sub-heading">Important Instructions:</h3>
        <ul>
          <li>Fields marked <span className="required">*</span> are mandatory.</li>
          <li>Aarti and Darshan are completely free and non-chargeable.</li>
          <li>
            Aadhaar and Passport are valid ID proofs for Indian and Non-Indian devotees respectively.
          </li>
          <li>
            No separate Aarti Pass is required for <b>children below 10 years</b> of age.
          </li>
          <li>
            The <b>physical copy of the ID proof</b> declared at the time of Sugam Darshan  booking is mandatory for entry into the Temple on Sugam darshan Date.
          </li> 
          <li>If any devotee cancels their Sugam Darshan booking, those slots are available for other devotees.</li>
          <li><b>Partial Cancellation</b> is not allowed.</li>
          <li>Devotees can cancel their Sugam Darshan Passes till <b>24 hours before</b> via Home → Transaction History → Select Sugam Darshan.</li>
          <li>
            Devotees should visit the Temple only in Indian traditional clothes. Men should wear Dhoti Kurta / Kurta Pajama and Women should wear a Saree, or a Punjabi Dress with a Dupatta, or a Churidar with a Dupatta.
          </li>
          <li>Devotees will be able to have Sugam Darshan of Lord “Maryada Purushottam” Shri Ram from near the sanctum sanctorum (Garbhgrih).</li>

          <li>
            Tatkal Aarti bookings open <b>12 hours before</b> the scheduled Aarti time.
          </li>
          <li>
            Devotees can get the wheelchair assistance from Temple entry gate. Devotee must carry original medical proof to avail the facility.
          </li>
        </ul>
      </div>

      <h2 className="aarti-title">Aarti Booking</h2>

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
                />{" "}
                Ramlala Aarti
              </label>
              <label>
                <input
                  type="radio"
                  name="bookingType"
                  value="tatkal"
                  checked={formData.bookingType === "tatkal"}
                  onChange={handleChange}
                />{" "}
                Ramlala Aarti - Tatkal
              </label>
              <p className="note">
                (Tatkal Aarti bookings open 12 hrs before the scheduled Aarti time. Please check timings.)
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
            <label className="form-label">
              Aarti Type (आरती प्रकार) <span className="required">*</span>
            </label>
            <select
              name="aartiType"
              value={formData.aartiType}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select Aarti Type</option>
              <option value="morning">Morning Aarti</option>
              <option value="noon">Noon Aarti</option>
              <option value="evening">Evening Aarti</option>
            </select>
          </div>
        </div>

        <div className="button-row">
          <button type="button" className="btn-clear" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" className="btn-proceed">
            Proceed
          </button>
        </div>
      </form>
    </div>
  );
};

export default Aarti;



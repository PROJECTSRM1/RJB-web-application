import React, { useState } from "react";
// import "./DonationForm.css"; // (optional if you have separate CSS)

const DonationIndian = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    purpose: "",
    pan: "",
    amount: "",
    address1: "",
    country: "",
    state: "",
    district: "",
    pincode: "",
    email: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); 
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.purpose) newErrors.purpose = "Please select purpose";
    if (!formData.amount) newErrors.pan = "Donar pan required";
    if (!formData.amount) newErrors.amount = "Donation amount required";
    if (!formData.address1) newErrors.address1 = "Address Line 1 required";
    if (!formData.country) newErrors.country = "Country required";
    if (!formData.state) newErrors.state = "State required";
    if (!formData.district) newErrors.district = "District required";
    if (!formData.pincode) newErrors.pincode = "Pincode required";
    if (!formData.email) newErrors.email = "Email required";
    if (!formData.mobile) newErrors.mobile = "Mobile number required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    alert("Donation submitted successfully!");
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      purpose: "",
      pan: "",
      amount: "",
      address1: "",
      country: "",
      state: "",
      district: "",
      pincode: "",
      email: "",
      mobile: "",
    });
    setErrors({});
  };

  return (
    <div className="donation-form">
      <form onSubmit={handleSubmit}>
        <div>
          <input type="checkbox" id="useProfile" />
          <label >
            Use Devotee Details and Address same as in My Profile.
          </label>
        </div>
          <br />
        {/* ======= Row 1 ======= */}
        <div className="form-row">
          <div className="form-group">
            <label>Full Name of Donor / Institute / Organization*</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter Donor Name"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <small className="error">{errors.fullName}</small>}
          </div>

          <div className="form-group">
            <label>Purpose Of Donation*</label>
            <select
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
            >
              <option value="">Select Purpose of Donation</option>
              <option>Mandir Renovation/Repair</option>
              <option>Anna Ksetra</option>
              <option>Gau sewa</option>
              <option>General Donation</option>
              <option>Bhog Prasad, Shringar and Pooja</option>
            </select>
            {errors.purpose && <small className="error">{errors.purpose}</small>}
          </div>

         <div className="form-group">
         <label>Donor PAN Number*</label>
         <input
          type="text"
          name="pan"
          placeholder="Enter PAN Number"
          value={formData.pan}
          onChange={handleChange}
         />
         {errors.pan && <small className="error">{errors.pan}</small>}
         </div>

        </div>

        {/* ======= Row 2 ======= */}
        <div className="form-row">
          <div className="form-group">
            <label>Donation Amount (₹)*</label>
            <input
              type="text"
              name="amount"
              placeholder="Enter Donation Amount"
              value={formData.amount}
              onChange={handleChange}
            />
            {errors.amount && <small className="error">{errors.amount}</small>}
          </div>
        </div>

        <hr className="orange-line" />

        {/* ======= Address Section ======= */}
        <div className="form-row">
          <div className="form-group">
            <label>Address Line 1*</label>
            <input
              type="text"
              name="address1"
              placeholder="House/Flat No., Apartment Name"
              value={formData.address1}
              onChange={handleChange}
            />
            {errors.address1 && <small className="error">{errors.address1}</small>}
          </div>
          <div className="form-group">
            <label>Address Line 2</label>
            <input
              type="text"
              placeholder="Street Address, Landmark (Optional)"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Country*</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="">Select Country</option>
              <option>India</option>
            </select>
            {errors.country && <small className="error">{errors.country}</small>}
          </div>

          <div className="form-group">
            <label>State*</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
            >
              <option value="">Select State</option>
              <option>Uttar Pradesh</option>
              <option>Telangana</option>
              <option>Andhra Pradesh</option>
            </select>
            {errors.state && <small className="error">{errors.state}</small>}
          </div>

          <div className="form-group">
            <label>District*</label>
            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
            >
              <option value="">Select District</option>
              <option>Ayodhya</option>
              <option>Lucknow</option>
              <option>Hyderabad</option>
            </select>
            {errors.district && <small className="error">{errors.district}</small>}
          </div>

          <div className="form-group">
            <label>Pincode*</label>
            <input
              type="text"
              name="pincode"
              placeholder="Enter Pincode"
              value={formData.pincode}
              onChange={handleChange}
            />
            {errors.pincode && <small className="error">{errors.pincode}</small>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email ID*</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email ID"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <small className="error">{errors.email}</small>}
          </div>
          <div className="form-group">
            <label>Mobile Number*</label>
            <input
              type="text"
              name="mobile"
              placeholder="Enter Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
            />
            {errors.mobile && <small className="error">{errors.mobile}</small>}
          </div>
        </div>

        {/* ======= Buttons ======= */}
        <div className="button-row">
          <button type="button" className="reset-btn" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" className="submit-btn">
            Donate
          </button>
        </div>
      </form>

      {/* ======= Note Section ======= */}
      <div className="note-section">
        <h3>Note</h3>
        <ul>
          <li>Donation is accepted in Indian Rupees only.</li>
          <li>
            50% of the Voluntary Contribution for the purpose of
            renovation/repair of Mandir, to Shri Ram Janmbhoomi Teerth Kshetra
            are eligible for deduction under sec 80G(2)(b), subject to other
            conditions mentioned under section 80G of the Income Tax Act 1961.
          </li>
          <li>To receive 80G certificate PAN number entry is mandatory.</li>
          <li>Donation made to the trust shall not be refunded in any case.</li>
        </ul>
      </div>
    </div>
  );
};

export default DonationIndian;

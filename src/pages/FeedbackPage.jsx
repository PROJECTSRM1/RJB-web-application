import React, { useState } from "react";
import "./FeedbackPage.css";

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    loginProcess: "",
    paymentExperience: "",
    communication: "",
    overallExperience: "",
    suggestions: "",
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback Submitted:", formData);
  };

  return (
    <div className="feedback-page">
      <h2>Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-row">
          <div className="input-group">
            <label>Name<span>*</span></label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>E-mail ID<span>*</span></label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Mobile Number<span>*</span></label>
            <input
              type="text"
              value={formData.mobile}
              onChange={(e) => handleChange("mobile", e.target.value)}
              required
            />
          </div>
        </div>

        <div className="feedback-section">
          <h3>Login Process</h3>
          <div className="emoji-group">
            {["Delighted", "Satisfied", "Not Satisfied"].map((option) => (
              <button
                type="button"
                key={option}
                className={`emoji-btn ${
                  formData.loginProcess === option ? "active" : ""
                }`}
                onClick={() => handleChange("loginProcess", option)}
              >
                <span className={`emoji ${option.replace(" ", "").toLowerCase()}`} />
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="feedback-section">
          <h3>Booking Process</h3>
          <div className="sub-section">
            <label>Payment Experience</label>
            <div className="emoji-group">
              {["Delighted", "Satisfied", "Not Satisfied"].map((option) => (
                <button
                  type="button"
                  key={option}
                  className={`emoji-btn ${
                    formData.paymentExperience === option ? "active" : ""
                  }`}
                  onClick={() => handleChange("paymentExperience", option)}
                >
                  <span className={`emoji ${option.replace(" ", "").toLowerCase()}`} />
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="sub-section">
            <label>Communication Channels (SMS, E-mail)</label>
            <div className="emoji-group">
              {["Delighted", "Satisfied", "Not Satisfied"].map((option) => (
                <button
                  type="button"
                  key={option}
                  className={`emoji-btn ${
                    formData.communication === option ? "active" : ""
                  }`}
                  onClick={() => handleChange("communication", option)}
                >
                  <span className={`emoji ${option.replace(" ", "").toLowerCase()}`} />
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="feedback-section">
          <h3>Overall Website Experience</h3>
          <div className="emoji-group">
            {["Delighted", "Satisfied", "Not Satisfied"].map((option) => (
              <button
                type="button"
                key={option}
                className={`emoji-btn ${
                  formData.overallExperience === option ? "active" : ""
                }`}
                onClick={() => handleChange("overallExperience", option)}
              >
                <span className={`emoji ${option.replace(" ", "").toLowerCase()}`} />
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="feedback-section">
          <h3>Suggestions / Improvements (If Any)</h3>
          <textarea
            value={formData.suggestions}
            onChange={(e) => handleChange("suggestions", e.target.value)}
          ></textarea>
        </div>

        <div className="button-row">
          <button type="reset" className="reset-btn">
            RESET
          </button>
          <button type="submit" className="submit-btn">
            SUBMIT
          </button>
        </div>
      </form>

     
    </div>
  );
}

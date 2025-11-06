import React from "react";

const DonationNonIndian = () => {
  return (
    <div className="donation-form">
       <p className="done">
        Donation option through cheque/Money Transfer
      </p>
      <p className="info-text">
        This Trust is registered under the Foreign Contribution Regulation Act (FCRA), 2010. 
        Devotees holding Non-Indian Passports can now voluntarily contribute towards the objectives 
        of Shri Ram Janmbhoomi Teerth Kshetra Trust.
      </p>
     
      <div> Shri Ram Janmabhoomi Teerth Kshetra FCRA Bank Details are:</div>
      <div className="bank-section">
       
        <div className="bank-details">
          <img
            src="https://mews.in/wp-content/uploads/2021/05/SBI-LOGO-HISTORY.jpg"
            alt="SBI"
            className="bank-logo"
          />
          <p><strong>A/c Name:</strong> Shri Ram Janmbhoomi Teerth Kshetra</p>
          <p><strong>A/c No.:</strong> 42162875158</p>
          <p><strong>IFSC Code:</strong> SBIN0000691</p>
          <p><strong>SWIFT Code:</strong> SBININBB104</p>
          <p><strong>Branch:</strong> New Delhi Main Branch, Sansad Marg, New Delhi - 110001</p>
        </div>
        <div className="lab">
        <h3  className="col">If you need any assistance, please fill the form below!</h3>
        <form className="assist-form">
         
          <div className="form-group">
            <label>Name*</label>
            <input type="text" placeholder="Enter Name" />
          </div>
          <div className="form-group">
            <label>Email ID*</label>
            <input type="email" placeholder="Enter Email ID" />
          </div>
          <div className="form-group">
            <label>Mobile Number*</label>
            <input type="text" placeholder="Enter Mobile Number" />
          </div>
          <div className="form-group">
            <label>Citizenship*</label>
            <select>
              <option>Select Country</option>
               <option>India</option>
                
            </select>
          </div>
          <div className="sumit">
          <button type="submit" className="submit-btn">Submit</button></div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default DonationNonIndian;

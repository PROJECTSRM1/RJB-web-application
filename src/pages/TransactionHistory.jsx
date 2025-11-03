import React, { useState } from "react";
import "../styles/TransactionHistory.css";


const TransactionHistory = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [searchResult, setSearchResult] = useState("");


  const handleSearch = () => {
    if (selectedOption === "") {
      setSearchResult("Please select an option to search.");
    } else {
      setSearchResult(`No ${selectedOption.toLowerCase()} records found.`);
    }
  };


  return (
    <div className="transaction-container">
      <h2 className="transaction-title">Transaction History</h2>


      <div className="transaction-controls">
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="">Select Option</option>
          <option value="Donation">Donation</option>
          <option value="Free Aarthi">Free Aarthi</option>
          <option value="Free Sugam Darshan">Free Sugam Darshan</option>
          <option value="Event Participation">Event Participation</option>
        </select>


        <button onClick={handleSearch}>Search</button>
      </div>


      {searchResult && <p className="search-result">{searchResult}</p>}
    </div>
  );
};


export default TransactionHistory;
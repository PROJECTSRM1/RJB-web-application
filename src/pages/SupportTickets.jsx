import React, { useState } from 'react';
import Navbar from '../components/Navbar1';
import Sidebar from '../components/Sidebar';
import './SupportTickets.css';


const SupportTickets = () => {
  const sample = [
    { id: 1, customerId: 101, orderId: 'ORD-2025-001', description: 'Payment issue', createdDate: '2025-10-25', isActive: true },
    { id: 2, customerId: 102, orderId: 'ORD-2025-002', description: 'Receipt update', createdDate: '2025-10-26', isActive: false },
    { id: 3, customerId: 103, orderId: 'ORD-2025-003', description: 'Darshan timing', createdDate: '2025-10-27', isActive: true },
  ];


  const [tickets, setTickets] = useState(sample);


  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this ticket?")) {
      setTickets(tickets.filter(t => t.id !== id));
    }
  };


  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-body">
        <Sidebar />
        <main className="main-content support-content">
          <div className="header-section">
            <h2> Support Tickets</h2>
            <p>Track, manage, and resolve customer issues efficiently</p>
          </div>


          <div className="table-wrapper">
            <table className="tickets-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Customer</th>
                  <th>Order ID</th>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
  {tickets.map(t => (
    <tr key={t.id}>
      <td data-label="ID">{t.id}</td>
      <td data-label="Customer">{t.customerId}</td>
      <td data-label="Order ID">{t.orderId}</td>
      <td data-label="Description">{t.description}</td>
      <td data-label="Date">{t.createdDate}</td>
      <td data-label="Status">
        {t.isActive ? (
          <span className="status-active">Active</span>
        ) : (
          <span className="status-closed">Closed</span>
        )}
      </td>
      <td data-label="Action">
        <button className="delete-btn" onClick={() => handleDelete(t.id)}>
          🗑 Delete
        </button>
      </td>
    </tr>
  ))}
</tbody>

            </table>
            {tickets.length === 0 && <p className="no-results">No tickets available.</p>}
          </div>
        </main>
      </div>
    </div>
  );
};


export default SupportTickets;


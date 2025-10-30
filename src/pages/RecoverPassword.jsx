
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/auth.css';

const RecoverPassword = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setSuccess('');
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    const idx = users.findIndex(u => u.email === form.email);
    if (idx === -1) {
      setError('Email not found');
      return;
    }
    users[idx].password = form.password;
    localStorage.setItem('users', JSON.stringify(users));
    setSuccess('Password updated successfully!');
    setTimeout(() => navigate('/login'), 1800);
  }

  return (
    <div className="auth-page login-page">
      <div className="auth-box">
        <h3>Recover Password</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Your registered email"
            required
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="New password"
            required
            value={form.password}
            onChange={handleChange}
          />
          <button type="submit">Reset Password</button>
        </form>
        <div className="extra-links">
          <Link to="/login">Back to Login</Link>
        </div>
        {error && <div style={{color:'red'}}>{error}</div>}
        {success && <div style={{color:'green'}}>{success}</div>}
      </div>
    </div>
  );
};

export default RecoverPassword;


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
    fetch('http://localhost:4000/api/users/recover', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    }).then(res => res.json())
      .then(data => {
        if (data.error) setError(data.error);
        else {
          setSuccess(data.message);
          setTimeout(() => navigate('/login'), 1800);
        }
      });
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

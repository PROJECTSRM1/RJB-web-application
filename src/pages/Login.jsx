

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    fetch(`https://localhost:7171/api/signup/${encodeURIComponent(email)}`)
      .then(res => {
        if(res.status === 404) return null;
        return res.json();
      })
      .then(user => {
        console.log("User from backend:", user);
        if(user && user.email === email && user.password === password){
          localStorage.setItem('email', email);
          navigate('/dashboard');
        } else {
          alert('Invalid credentials');
        }
      })
      .catch(() => alert('Network/server error'));
  };

  return (
    <div className="auth-page login-page">
      <div className="auth-box">
        <h3>LOGIN</h3>
        <p>Enter your email and password to login:</p>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="E-mail" required value={email} onChange={e=>setEmail(e.target.value)} />
          <input type="password" placeholder="Password" required value={password} onChange={e=>setPassword(e.target.value)} />
          <button type="submit">LOGIN</button>
        </form>
        <div className="extra-links">
          <Link to="/signup">Don't have an account? Signup</Link> 
          <span> <Link to="/recover">Forgot Password?</Link> </span>
        </div>
      </div>
    </div>
  );
};

export default Login;

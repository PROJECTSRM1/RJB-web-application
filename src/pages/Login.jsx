
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('email', email);
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  }

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

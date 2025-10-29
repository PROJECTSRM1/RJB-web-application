
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/auth.css';

const Signup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    fetch('https://localhost:7171/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        name: firstname + " " + lastname, // combine for .NET API
        email, 
        password 
      })
    })
    .then(res => res.json())
    .then(data => {
      if(data.message === "Email already exists" || data.message === "All fields are required") {
        alert(data.message);
      } else if (data.message === "User registered successfully") {
        alert('Account created successfully. Please login.');
        navigate('/login');
      } else {
        alert('Unknown error');
      }
    });
  }

  return (
    <div className="auth-page signup-page">
      <div className="auth-box">
        <h4>SIGN UP</h4>
        <p>Please fill in the information below:</p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="First Name" required value={firstname} onChange={e=>setFirstname(e.target.value)} />
          <input type="text" placeholder="Last Name" required value={lastname} onChange={e=>setLastname(e.target.value)} />
          <input type="email" placeholder="E-Mail" required value={email} onChange={e=>setEmail(e.target.value)} />
          <input type="password" placeholder="Password" required value={password} onChange={e=>setPassword(e.target.value)} />
          <button type="submit">Create Account</button>
        </form>
        <div className="extra-links">
          <Link to="/login">Already have an account? Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;

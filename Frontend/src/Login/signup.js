import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
    <div className="login-container">
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <Link to="/otppage">
        <button type="submit" className="login-button">
          SignUp
        </button>
        </Link>

        <div className="signup-link">
          <p>Already have an account? </p>
          <Link to="/login">
          <button>LogIn</button>
          </Link>
        </div>
      </form>
    </div>
    
    </>
  )
}

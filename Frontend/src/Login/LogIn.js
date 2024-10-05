import React , { useState,useEffect }from 'react'
// import {Link } from "react-router-dom";
import "./LoginForm.css"; 
import { Link } from 'react-router-dom';

export default function LogIn() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <>
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
          <div className="forgot-password">
            <a href="/*">Lost your password?</a>
          </div>
        </div>

        <div className="rememberMe">
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <button type="submit" className="login-button">
          LOGIN
        </button>

        <div className="signup-link">
          <p>Don't have an account? </p>
          <Link to="/signup">
          <button>Create account</button>
          </Link>
        </div>
      </form>
    </div>
    
    </>
  )
}

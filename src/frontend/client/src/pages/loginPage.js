// frontend/src/components/LoginPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

import './loginPage.css';

const LoginPage = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
  };

  return (
    <div className="login-page">
      <h1 className="login-heading">Login on StreamVid</h1>
      <form onSubmit={handleLogin}>
        <div className="input-container">
          <label htmlFor="emailOrUsername">Enter Email or Username</label>
          <input
            type="text"
            id="emailOrUsername"
            value={emailOrUsername}
            onChange={(e) => setEmailOrUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="button-container">
          <button type="submit" className="login-button">Login</button>
          <Link to="/" className="register-button">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

// frontend/src/components/LoginPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { useNavigate } from 'react-router-dom';

import './loginPage.css';

  const LoginPage = () => {
    const [email, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8000/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        if (response.headers.get('content-type').includes('application/json')) {
          const errorData = await response.json();
          throw new Error(errorData.message);
        } else {
          const errorText = await response.text(); // Get the response text
          throw new Error(`Server error: Non-JSON response received - ${errorText}`);
        }
      }
  
      const data = await response.json();
      console.log(data);
      
      // Redirect to a different page after successful login
      navigate("/home")
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };
  
  return (
    <div className="login-page">
      <h1 className="login-heading">Login on StreamVid</h1>
      <form onSubmit={handleLogin}>
        <div className="input-container">
          <label htmlFor="email">Enter Email or Username</label>
          <input
            type="text"
            id="email"
            value={email}
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

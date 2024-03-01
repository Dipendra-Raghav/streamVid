import React, { useState } from 'react';
import { Link} from 'react-router-dom'; // Import Link and useHistory
import { useNavigate } from 'react-router-dom';

import './registerPage.css';

const RegisterPage = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');
  const [coverImage, setCoverImage] = useState('');

  const navigate = useNavigate(); // Access the history object

  const handleRegister = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      const formData = new FormData();
      formData.append('fullName', fullName);
      formData.append('username', username);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('avatar', avatar);
      formData.append('coverImage', coverImage);

      const response = await fetch('http://localhost:8000/api/v1/users/register', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (response.ok) { // Check for successful response (status code 200)
        console.log(data.message); // Log success message
        navigate("/login");// Redirect to login page using history object
      } else {
        // Handle errors in the response
        console.error('Error:', response.status, data.message || 'Registration failed');
        // Display appropriate error messages to the user
      }
    } catch (error) {
      console.error('Error:', error);
      // Display generic error message to the user
    }
  };

  return (
    <div className="register-page">
      <h1 className="register-heading">Register on StreamVid</h1>
      <form onSubmit={handleRegister}>
        <div className="input-container">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div className="input-container">
          <label htmlFor="avatar">Avatar</label>
          <input
            type="file"
            id="avatar"
            onChange={(e) => setAvatar(e.target.files[0])}
            accept="image/*"
          />
        </div>
        <div className="input-container">
          <label htmlFor="coverImage">Cover Image</label>
          <input
            type="file"
            id="coverImage"
            onChange={(e) => setCoverImage(e.target.files[0])}
            accept="image/*"
          />
        </div>
        <div className="button-container">
          <button type="submit" className="register-button">Register</button>
          <Link to="/login" className="login-button">Login</Link> 
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './homePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleUploadButtonClick = () => {
    navigate('/uploadVideo');
  };

  return (
    <div className="home-page">
      <h1 className="heading">Hola Amigo - Kese ho thiko</h1>
      <div className="floating-button" onClick={handleUploadButtonClick}>
        +
      </div>
    </div>
  );
};

export default HomePage;

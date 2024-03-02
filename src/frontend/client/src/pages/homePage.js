import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './homePage.css';

const HomePage = () => {
  const [videos, setVideos] = useState([]); // Initialize videos state as an empty array
  const navigate = useNavigate();

  useEffect(() => {
    fetchVideos(); // Fetch videos when the component mounts
    const interval = setInterval(fetchVideos, 1120000); // Fetch videos every minute
    return () => clearInterval(interval); // Cleanup function to clear the interval
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/videos/getVideos');
      if (!response.ok) {
        throw new Error('Failed to fetch videos');
      }
      const responseData = await response.json();
      const videosData = responseData.data.videos; // Access the videos array within the data object
      setVideos(videosData);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };
  

  const handleUploadButtonClick = () => {
    navigate('/uploadVideo');
  };

  return (
    <div className="home-page">
      <div className="floating-button" onClick={handleUploadButtonClick}>
        +
      </div>
      <div className="video-list">
        {videos.map(video => (
          <div key={video._id.$oid} className="video-item">
            <a href={video.videoFile} target="_blank" rel="noopener noreferrer">
              <img src={video.thumbnail} alt={video.title} />
            </a>
            <h3>{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )};
  

export default HomePage;

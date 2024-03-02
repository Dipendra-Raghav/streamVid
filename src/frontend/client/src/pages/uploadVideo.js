import React, { useState } from 'react';
import './uploadVideo.css';
import { useNavigate } from 'react-router-dom';


const UploadVideo = () => {
  const [video, setVideo] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [title, setTitle] = useState('');
  const navigate = useNavigate();


  const handleVideoChange = (event) => {
    setVideo(event.target.files[0]);
  };
  const handleThumbnailChange = (event) => {
    setThumbnail(event.target.files[0]);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };


  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('video', video);
      formData.append('thumbnail',thumbnail);
      formData.append('title', title);

      const response = await fetch('http://localhost:8000/api/v1/videos/uploadVideo', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        // Handle successful upload
        console.log('Video uploaded successfully');
        navigate("/home")
      } else {
        // Handle upload error
        console.error('Error uploading video');
      }
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  return (
    <div className="upload-page">
      <h1 className="heading">Upload your video</h1>
      <div className="upload-box">
        <input type="file" accept="video/*" onChange={handleVideoChange} />
      </div>
      <div className="upload-box">
        <input type="file" accept="image/*" onChange={handleThumbnailChange} />
      </div>
      <div className="title-field">
        <input type="text" placeholder="Enter Title for the video" value={title} onChange={handleTitleChange} />
      </div>
      <button className="upload-button" onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadVideo;

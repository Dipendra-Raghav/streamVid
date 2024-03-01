import React from 'react';
import RegisterPage from './pages/registerPage.js';
import HomePage from './pages/homePage.js';
import LoginPage from './pages/loginPage.js'; // Import the login page component
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; // Import necessary components for routing

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Add a default route to redirect to the register page if the path is not found */}
          <Route path="/home" element={<HomePage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

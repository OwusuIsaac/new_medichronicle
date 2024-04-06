import React from 'react';
import './HomePage.css'; // Ensure the CSS file is correctly referenced
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="welcome-container">
      <h1>Welcome to MediChronicle</h1>
      <p>Your health records, simplified.</p>
      <Link to="/register">Register</Link>
      <Link to="/login">Log in</Link>
    </div>
  );
};

export default HomePage;

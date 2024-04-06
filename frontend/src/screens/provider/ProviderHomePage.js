import React from 'react';
import './ProviderHomePage.css'; // Importing the CSS file for styling

function ProviderHomePage() {
  return (
    <div className="doctors-page">
      <h1>Meet Our Doctors</h1>
      <div className="doctor-list">
        <div className="doctor-item">
          <h2>Dr. Jane Doe</h2>
          <p>Specialization: Cardiology</p>
        </div>
        {/* Add more doctors here */}
      </div>
    </div>
  );
}

export default ProviderHomePage;

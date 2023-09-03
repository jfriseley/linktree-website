import React from 'react';
import './BusinessCard.css';

const BusinessCard = () => {
    const imageStyle = {
        width: '40px', // Set the desired width (adjust as needed)
        height: 'auto', // Maintain aspect ratio
        cursor: 'pointer',
        marginRight: '20px',
      };
  return (
    <div className="business-card">
        <div class="text-container">
      <h1>Jenna "Ciaran" Riseley</h1>
      <p>Software Development Engineer at Amazon</p>
      <p>
        The background you're looking at is a visualisation of the weights of a neural network I trained to detect aircraft.
      </p>
      </div>
      <div >
      <img src={require("./assets/In-White-96.png")}
        alt="LinkedIn"
        style = {imageStyle}
        onClick={() => window.open('https://www.linkedin.com/in/jenna-riseley-076054123/', '_blank')}
      />
         <img
        src={require("./assets/twitter-64.png")} // Replace with the path to your second image
        alt="Twitter"
        style={imageStyle}
        onClick={() => window.open('https://twitter.com/ciaran_uwu/', '_blank')}
      />
               <img
        src={require("./assets/facebook-64.png")} // Replace with the path to your second image
        alt="Twitter"
        style={imageStyle}
        onClick={() => window.open('https://www.facebook.com/jenna.riseley/', '_blank')}
      />
      </div>

    </div>
  );
};

export default BusinessCard;
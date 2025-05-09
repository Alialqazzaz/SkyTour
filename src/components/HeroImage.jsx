import React from 'react';
import planeImage from '../assets/image/plane-orange.jpg';

function HeroImage() {
  return (
    <div
      className="hero-image"
      style={{ backgroundImage: `url(${planeImage})` }}
    >
      <div className="hero-text-container">
        <h1 className="hero-text">Travel Around World</h1>
      </div>
    </div>
  );
}

export default HeroImage;

import React from 'react';
import './creater.css';
import image1 from '../assests/design1.avif'




function creater() {
  return (
    <div className="feature-section">
      <div className="image-container1">
        <img src= {image1} alt="Feature" />
      </div>
      <div className="content-container">
        <h2>Timeless Masterpieces Created by India's Highly Acclaimed Master Artisans</h2>
        <ul>
          <li className='symbol' > Curated from across the country</li>
          <li className='symbol'>  Premium quality at affordable prices</li>
          <li className='symbol'>Guaranteed Authenticity</li>
          <li className='symbol'>Each design a legacy for generations</li>
        </ul>
      </div>
    </div>
  );
}

export default creater;

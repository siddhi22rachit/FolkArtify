import React from 'react';
import './components.css'; 
import imagesData from '../assests/types'; 

const components = () => {
  return (
    <div className="container">
      <div className="centered">
        <h1>It's All Here!</h1>
        <h2>Check out our complete range of craft works</h2>
      </div>
      <div className="image-container">
        {imagesData.map((image, i) => (
          <img key={i} src={ image.filename} alt={`Image ${i + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default components;

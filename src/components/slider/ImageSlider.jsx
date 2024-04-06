import React,{ useState, useEffect  }from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import images from '../assests/Slider1';


const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <AwesomeSlider selected={currentIndex}> 
      {images.map((image, index) => (
       <div key={index} data-src={image.url}  alt={`Slide ${index + 1}`}>
       </div>
      ))}
    </AwesomeSlider>
  );
};

export default ImageSlider;






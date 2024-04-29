import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import "../styles/Carousel.css";

function ImageCarousel({ folderPath }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [currentImages, setCurrentImages] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  useEffect(() => {
    const startIndex = Math.max(1, currentIndex <= 6 ? currentIndex : currentIndex - 5);
    const endIndex = Math.min(startIndex + 4, 58);

    const tempImages = [];
    for (let i = startIndex; i <= endIndex; i++) {
      const index = i <= 9 ? `0${i}` : i;
      tempImages.push(`BH2024-1-${index}.jpg`);
    }

    setCurrentImages(tempImages);
  }, [currentIndex, folderPath]);

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex >= 58 ? 1 : prevIndex + 1));
  };  

  return (
    <div className="carousel-container">
      <div className="carousel">
        {currentImages.length > 0 && currentImages.map((imageName, index) => (
          <div key={index}>
            <img src={`${folderPath}/${imageName}`} alt={`Slide ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </div>
    </div>
  );  
}

ImageCarousel.propTypes = {
  folderPath: PropTypes.string.isRequired,
};

export default ImageCarousel;

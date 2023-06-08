import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Carrousel.css';

export default function Carrousel({ pictures }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carrousel">
      <div className="carrouselContainer">
        <img src={pictures[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
        <FontAwesomeIcon className="carrousselArrow carrouselArrowLeft" icon={faArrowLeft} onClick={previousSlide} />
        <FontAwesomeIcon className="carrousselArrow carrouselArrowRight" icon={faArrowRight} onClick={nextSlide} />
      </div>
    </div>
  );
}
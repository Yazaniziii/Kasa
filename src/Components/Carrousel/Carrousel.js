import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Carrousel.css';

export default function Carrousel({ pictures }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

  // Vérifie si le tableau "pictures" contient plus d'une image pour afficher les flèches et la numérotation
  const showArrowsAndNumber = pictures.length > 1; 

  return (
    <div className="carrousel">
      <div className="carrouselContainer">
        <img src={pictures[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
        {/* Affiche la numérotation uniquement si la condition est vraie */}
        {showArrowsAndNumber && (
          <div className="slideNumber">{currentImageIndex + 1} / {pictures.length}</div>
        )}
        {/* Affiche la flèche précédente uniquement si la condition est vraie */}
        {showArrowsAndNumber && (
          <FontAwesomeIcon className="carrousselArrow carrouselArrowLeft" icon={faChevronLeft} onClick={previousSlide} />
        )}
        {/* Affiche la flèche suivante uniquement si la condition est vraie */}
        {showArrowsAndNumber && (
          <FontAwesomeIcon className="carrousselArrow carrouselArrowRight" icon={faChevronRight} onClick={nextSlide} />
        )}
      </div>
    </div>
  );
}

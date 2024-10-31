import React, { useState } from 'react';
import './carrosel.scss';

function Carrossel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carrossel">
      <button onClick={handlePrev} className="prev-btn">◀</button>
      <div className="carrossel-content">
        <div className="image-wrapper" key={currentIndex}>
          <img src={items[currentIndex].image} alt={items[currentIndex].legend} className="carrossel-image" />
          <p>{items[currentIndex].legend}</p>
        </div>
      </div>
      <button onClick={handleNext} className="next-btn">▶</button>
    </div>
  );
}

export default Carrossel;
import React, { useState } from "react";

const PetCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      nextSlide();
    }

    if (touchStart - touchEnd < -150) {
      prevSlide();
    }
  }

  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 5000)
  //   return () => clearInterval(interval)
  // }, [])

  return (
    <div className="carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button className="carousel-btn prev" onClick={prevSlide}>←</button>
      <div className="carousel-content">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`Pet image ${index + 1}`}
            className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
            style={{
              opacity: index === currentIndex ? 1 : 0,
              transform: `translateX(${(index - currentIndex) * 100}%)`
            }}
          />
        ))}
      </div>
      <button className="carousel-btn next" onClick={nextSlide}>→</button>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PetCarousel;
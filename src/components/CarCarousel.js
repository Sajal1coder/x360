import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import './CarCarousel.css';

const CarCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [is360ViewOpen, setIs360ViewOpen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  
  // Car images with 3D object as first item
  const carImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: '3D Interactive Car Model',
      is3D: true // This marks the first image as 3D object
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Luxury Sports Car - Side View',
      is3D: false
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Luxury Sports Car - Rear View',
      is3D: false
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Luxury Sports Car - Interior View',
      is3D: false
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carImages.length) % carImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // 360° View functions
  const open360View = () => {
    setIs360ViewOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const close360View = () => {
    setIs360ViewOpen(false);
    document.body.style.overflow = 'auto';
    setRotation(0);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - startX;
    const newRotation = rotation + (deltaX * 0.5);
    setRotation(newRotation);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
          <ChevronLeft size={24} />
        </button>
        
        <div className="carousel-track">
          <div 
            className="carousel-slides"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carImages.map((image, index) => (
              <div key={image.id} className="carousel-slide">
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="carousel-image"
                />
                {/* 360° View button only on 3D object (first image) */}
                {image.is3D && index === currentSlide && (
                  <button className="carousel-360-btn" onClick={open360View}>
                    <RotateCcw size={20} />
                    <span>360° View</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>
          <ChevronRight size={24} />
        </button>
      </div>
      
      <div className="carousel-dots">
        {carImages.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* 360° View Modal */}
      {is360ViewOpen && (
        <div className="view-360-modal">
          <div className="view-360-overlay" onClick={close360View} />
          <div className="view-360-content">
            <button className="close-btn" onClick={close360View}>
              ×
            </button>
            
            <div className="view-360-header">
              <h3>360° Car View</h3>
              <p>Drag to rotate the car and explore every angle</p>
            </div>
            
            <div 
              className="view-360-container"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <div 
                className="car-360-image"
                style={{ 
                  transform: `rotateY(${rotation}deg)`,
                  cursor: isDragging ? 'grabbing' : 'grab'
                }}
              >
                <img 
                  src={carImages[0].url} 
                  alt="360° Car View"
                  draggable={false}
                />
              </div>
              
              <div className="rotation-indicator">
                <div className="rotation-circle">
                  <div 
                    className="rotation-pointer"
                    style={{ transform: `rotate(${rotation}deg)` }}
                  />
                </div>
                <span className="rotation-text">{Math.round(rotation % 360)}°</span>
              </div>
            </div>
            
            <div className="view-360-controls">
              <button 
                className="reset-btn"
                onClick={() => setRotation(0)}
              >
                Reset View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarCarousel;

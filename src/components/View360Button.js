import React, { useState } from 'react';
import { RotateCcw, X } from 'lucide-react';
import './View360Button.css';

const View360Button = () => {
  const [is360ViewOpen, setIs360ViewOpen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const open360View = () => {
    setIs360ViewOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const close360View = () => {
    setIs360ViewOpen(false);
    document.body.style.overflow = 'auto';
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

  // Sample 360 car image - in a real app, this would be a series of images for 360 view
  const car360Image = 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';

  return (
    <>
      <button className="view-360-btn" onClick={open360View}>
        <RotateCcw size={24} />
        <span>360° View</span>
      </button>

      {is360ViewOpen && (
        <div className="view-360-modal">
          <div className="view-360-overlay" onClick={close360View} />
          <div className="view-360-content">
            <button className="close-btn" onClick={close360View}>
              <X size={24} />
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
                  src={car360Image} 
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
    </>
  );
};

export default View360Button;

import React from 'react';
import { Calendar, Gauge, DollarSign, Car } from 'lucide-react';
import './CarOverview.css';

const CarOverview = () => {
  const carDetails = {
    model: 'BMW M4 Competition',
    year: 2024,
    mileage: '15 km/l',
    price: '₹85,00,000',
    features: [
      'Twin-Turbo V6 Engine',
      'All-Wheel Drive',
      'Carbon Fiber Interior',
      'Premium Sound System',
      'Advanced Safety Features',
      'Adaptive Suspension'
    ],
    specifications: {
      engine: '3.0L Twin-Turbo I6',
      power: '503 HP',
      torque: '650 Nm',
      transmission: '8-Speed Automatic',
      topSpeed: '290 km/h',
      acceleration: '3.9 seconds (0-100 km/h)'
    }
  };

  return (
    <div className="car-overview">
      <div className="grid grid-2">
        {/* Main Details Card */}
        <div className="card overview-card">
          <div className="car-header">
            <h3 className="car-model">{carDetails.model}</h3>
            <div className="car-price">{carDetails.price}</div>
          </div>
          
          <div className="car-stats">
            <div className="stat-item">
              <div className="stat-icon">
                <Calendar size={20} />
              </div>
              <div className="stat-content">
                <span className="stat-label">Year</span>
                <span className="stat-value">{carDetails.year}</span>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon">
                <Gauge size={20} />
              </div>
              <div className="stat-content">
                <span className="stat-label">Mileage</span>
                <span className="stat-value">{carDetails.mileage}</span>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon">
                <DollarSign size={20} />
              </div>
              <div className="stat-content">
                <span className="stat-label">Price</span>
                <span className="stat-value">{carDetails.price}</span>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon">
                <Car size={20} />
              </div>
              <div className="stat-content">
                <span className="stat-label">Model</span>
                <span className="stat-value">{carDetails.model}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Card */}
        <div className="card features-card">
          <h4 className="card-title">Key Features</h4>
          <ul className="features-list">
            {carDetails.features.map((feature, index) => (
              <li key={index} className="feature-item">
                <span className="feature-bullet">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Specifications Card */}
      <div className="card specifications-card">
        <h4 className="card-title">Technical Specifications</h4>
        <div className="specifications-grid">
          {Object.entries(carDetails.specifications).map(([key, value]) => (
            <div key={key} className="spec-item">
              <span className="spec-label">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
              <span className="spec-value">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarOverview;

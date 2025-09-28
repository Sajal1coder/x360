import React, { useState, useEffect } from 'react';
import { Calculator, Users, Clock, TrendingUp } from 'lucide-react';
import './PriceCalculator.css';

const PriceCalculator = () => {
  const [numberOfInvites, setNumberOfInvites] = useState(50);
  const [eventDuration, setEventDuration] = useState(24); // in months
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const [pricePerMonth, setPricePerMonth] = useState(0);

  // Calculate price based on number of invites and duration
  useEffect(() => {
    // Base price calculation formula
    const basePrice = numberOfInvites * 500; // ₹500 per invite
    const durationMultiplier = eventDuration / 12; // yearly basis
    const total = basePrice * durationMultiplier;
    const monthly = total / eventDuration;
    
    setCalculatedPrice(total);
    setPricePerMonth(monthly);
  }, [numberOfInvites, eventDuration]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleInvitesChange = (e) => {
    setNumberOfInvites(parseInt(e.target.value));
  };

  const handleDurationChange = (e) => {
    setEventDuration(parseInt(e.target.value));
  };

  return (
    <div className="price-calculator">
      <div className="calculator-container">
        <div className="calculator-header">
          <div className="header-icon">
            <Calculator size={32} />
          </div>
          <div className="header-content">
            <h3>Event Price Calculator</h3>
            <p>Calculate your event pricing based on invites and duration</p>
          </div>
        </div>

        <div className="calculator-form">
          {/* Number of Invites */}
          <div className="form-group">
            <label className="form-label">
              <Users size={20} />
              Number of Invites
            </label>
            <div className="slider-container">
              <input
                type="range"
                min="10"
                max="500"
                value={numberOfInvites}
                onChange={handleInvitesChange}
                className="slider invites-slider"
              />
              <div className="slider-labels">
                <span>10</span>
                <span className="current-value">{numberOfInvites.toLocaleString()}</span>
                <span>500</span>
              </div>
            </div>
          </div>

          {/* Event Duration */}
          <div className="form-group">
            <label className="form-label">
              <Clock size={20} />
              Duration of Event
            </label>
            <div className="slider-container">
              <input
                type="range"
                min="1"
                max="84"
                value={eventDuration}
                onChange={handleDurationChange}
                className="slider duration-slider"
              />
              <div className="slider-labels">
                <span>1 Month</span>
                <span className="current-value">{eventDuration} Months</span>
                <span>84 Months</span>
              </div>
            </div>
          </div>

          {/* Price Display */}
          <div className="price-display">
            <div className="monthly-price">
              <TrendingUp size={24} />
              <div className="price-content">
                <span className="price-amount">{formatPrice(pricePerMonth)}</span>
                <span className="price-period">per month</span>
              </div>
            </div>
            
            <div className="total-breakdown">
              <div className="breakdown-item">
                <span className="breakdown-label">Total Amount:</span>
                <span className="breakdown-value">{formatPrice(calculatedPrice)}</span>
              </div>
              <div className="breakdown-item">
                <span className="breakdown-label">Per Invite Cost:</span>
                <span className="breakdown-value">₹500</span>
              </div>
              <div className="breakdown-item">
                <span className="breakdown-label">Duration:</span>
                <span className="breakdown-value">{eventDuration} Months</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button className="calculate-btn">
            <Calculator size={20} />
            Get Detailed Quote
          </button>

          {/* Disclaimer */}
          <div className="calculator-disclaimer">
            <p>* Pricing may vary based on additional services and customization requirements.</p>
            <p>** Final pricing will be confirmed after consultation with our team.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;

import React from 'react';
import Header from './components/Header';
import CarCarousel from './components/CarCarousel';
import CarOverview from './components/CarOverview';
import PriceCalculator from './components/PriceCalculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      <main>
        {/* Hero Section with Car Carousel */}
        <section className="hero-section">
          <div className="container">
            <h1 className="hero-title">Discover Your Perfect Car</h1>
            <p className="hero-subtitle">Experience luxury and performance with our premium car collection</p>
            <CarCarousel />
          </div>
        </section>

        {/* Car Overview Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Car Overview</h2>
            <CarOverview />
          </div>
        </section>

        {/* Price Calculator Section */}
        <section className="section calculator-section">
          <div className="container">
            <h2 className="section-title">Event Price Calculator</h2>
            <PriceCalculator />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

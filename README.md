# Car Showcase X360

A modern React.js application showcasing car details with interactive features including image carousel, 360° view, and an event price calculator.

## Features

### 🚗 Car Showcase
- **Image Carousel**: Smooth navigation through multiple car images with arrow controls and dot indicators
- **360° View Button**: Interactive modal with drag-to-rotate functionality for exploring car from all angles
- **Car Overview**: Comprehensive display of car specifications including model, year, mileage, and price
- **Modern UI**: Beautiful gradient designs with responsive layout

### 💰 Price Calculator
- **Dynamic Pricing**: Real-time calculation based on two parameters:
  - Number of Invites (10-500)
  - Duration of Event (1-84 months)
- **Interactive Sliders**: Smooth range inputs with visual feedback
- **Price Breakdown**: Detailed cost analysis with per-month and total pricing
- **Professional Design**: Clean, modern interface inspired by financial calculators

### 🎨 Design Features
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI Components**: Card-based layout with smooth animations
- **Gradient Themes**: Beautiful color schemes throughout the application
- **Interactive Elements**: Hover effects, transitions, and smooth animations

## Technology Stack

- **React.js 18.2.0**: Modern React with hooks and functional components
- **CSS3**: Custom styling with flexbox, grid, and animations
- **Lucide React**: Beautiful, customizable icons
- **Framer Motion**: Smooth animations and transitions
- **Modern JavaScript**: ES6+ features and best practices

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd x360
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

## Project Structure

```
src/
├── components/
│   ├── Header.js              # Navigation header
│   ├── CarCarousel.js         # Image carousel component
│   ├── View360Button.js       # 360° view modal
│   ├── CarOverview.js         # Car specifications display
│   ├── PriceCalculator.js     # Event price calculator
│   └── *.css                  # Component-specific styles
├── App.js                     # Main application component
├── App.css                    # Global application styles
├── index.js                   # React DOM entry point
└── index.css                  # Global CSS reset and utilities
```

## Components Overview

### CarCarousel
- Displays multiple car images in a responsive carousel
- Navigation with previous/next arrows
- Dot indicators for direct slide access
- Smooth CSS transitions

### View360Button
- Opens an interactive modal for 360° car viewing
- Drag-to-rotate functionality with mouse events
- Rotation indicator with degree display
- Reset button to return to original view

### CarOverview
- Displays key car information (model, year, mileage, price)
- Technical specifications grid
- Key features list
- Responsive card layout

### PriceCalculator
- Interactive sliders for invites and duration
- Real-time price calculation
- Professional pricing breakdown
- Mobile-responsive design

## Customization

### Adding New Car Images
Update the `carImages` array in `CarCarousel.js`:
```javascript
const carImages = [
  {
    id: 1,
    url: 'your-image-url',
    alt: 'Image description'
  },
  // Add more images...
];
```

### Modifying Price Calculation
Update the calculation logic in `PriceCalculator.js`:
```javascript
const basePrice = numberOfInvites * 500; // Change base rate
const durationMultiplier = eventDuration / 12; // Modify duration logic
```

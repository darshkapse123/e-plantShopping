
import React from 'react';
import './App.css';

function App() {
  const handleGetStarted = () => {
    window.location.href = '#plants';
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Welcome to Paradise Nursery</h1>

        <p>
          Bring nature home! Discover beautiful indoor plants
          and make your living space greener.
        </p>

        <button onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;

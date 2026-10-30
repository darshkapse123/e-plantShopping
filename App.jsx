
import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';

function App() {
  const [showProducts, setShowProducts] = useState(false);

  if (showProducts) {
    return <ProductList />;
  }

  return (
    <div className="background-image">
      <div className="landing-content">
        <h1>Welcome to Paradise Nursery</h1>
        <p>Bring nature home with our beautiful collection of plants.</p>

        <button onClick={() => setShowProducts(true)}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;

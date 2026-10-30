import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from './CartSlice';
import './ProductList.css';

const plants = [
  { name: 'Aloe Vera', category: 'Air Purifying', price: 150, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
  { name: 'Snake Plant', category: 'Air Purifying', price: 250, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400' },
  { name: 'Peace Lily', category: 'Air Purifying', price: 300, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400' },
  { name: 'Spider Plant', category: 'Air Purifying', price: 180, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400' },
  { name: 'Areca Palm', category: 'Air Purifying', price: 350, image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400' },
  { name: 'Rubber Plant', category: 'Air Purifying', price: 280, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400' },
  { name: 'Jade Plant', category: 'Low Maintenance', price: 120, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
  { name: 'ZZ Plant', category: 'Low Maintenance', price: 220, image: 'https://images.unsplash.com/photo-1597055181300-0c8f3e9c4b5e?w=400' },
  { name: 'Money Plant', category: 'Low Maintenance', price: 100, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400' },
  { name: 'Pothos', category: 'Low Maintenance', price: 160, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
  { name: 'Succulent', category: 'Low Maintenance', price: 90, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400' },
  { name: 'Cactus', category: 'Low Maintenance', price: 130, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
  { name: 'Rose', category: 'Flowering Plants', price: 200, image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=400' },
  { name: 'Orchid', category: 'Flowering Plants', price: 450, image: 'https://images.unsplash.com/photo-1566907225472-7c2f4c972c7a?w=400' },
  { name: 'Hibiscus', category: 'Flowering Plants', price: 180, image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=400' },
  { name: 'Anthurium', category: 'Flowering Plants', price: 320, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400' },
  { name: 'Jasmine', category: 'Flowering Plants', price: 150, image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=400' },
  { name: 'Petunia', category: 'Flowering Plants', price: 140, image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=400' },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem({ ...plant, cost: plant.price }));
    setAddedToCart((previous) => ({
      ...previous,
      [plant.name]: true,
    }));
  };

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>
        <div>
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">
            Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})
          </Link>
        </div>
      </nav>

      <h1 className="page-title">Our Plants</h1>

      {categories.map((category) => (
        <section className="product-list" key={category}>
          <h2>{category}</h2>

          <div className="plant-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div className="plant-card" key={plant.name}>
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>₹{plant.price}</p>

                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedToCart[plant.name]}
                  >
                    {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
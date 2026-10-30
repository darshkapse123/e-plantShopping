
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

const plantCategories = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { id: 1, name: 'Snake Plant', price: 25, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee' },
      { id: 2, name: 'Peace Lily', price: 30, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee' },
      { id: 3, name: 'Spider Plant', price: 18, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6' },
      { id: 4, name: 'Areca Palm', price: 35, image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78' },
      { id: 5, name: 'Boston Fern', price: 22, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e' },
      { id: 6, name: 'Rubber Plant', price: 28, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09' }
    ]
  },
  {
    category: 'Aromatic Plants',
    plants: [
      { id: 7, name: 'Lavender', price: 20, image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec' },
      { id: 8, name: 'Rosemary', price: 15, image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662' },
      { id: 9, name: 'Mint', price: 12, image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1' },
      { id: 10, name: 'Basil', price: 14, image: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733' },
      { id: 11, name: 'Jasmine', price: 24, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e' },
      { id: 12, name: 'Lemon Balm', price: 16, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6' }
    ]
  },
  {
    category: 'Decorative Plants',
    plants: [
      { id: 13, name: 'Monstera', price: 40, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b' },
      { id: 14, name: 'Fiddle Leaf Fig', price: 45, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09' },
      { id: 15, name: 'Calathea', price: 32, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411' },
      { id: 16, name: 'Pothos', price: 19, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e' },
      { id: 17, name: 'ZZ Plant', price: 27, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6' },
      { id: 18, name: 'Succulent', price: 10, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a' }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-page">
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/plants">Plants</a>
          <a href="/cart">
            Cart 🛒 ({cartCount})
          </a>
        </div>
      </nav>

      <header className="product-header">
        <h1>Our Beautiful Plants</h1>
        <p>Bring nature home with Paradise Nursery.</p>
      </header>

      {plantCategories.map((category) => (
        <section className="plant-category" key={category.category}>
          <h2>{category.category}</h2>

          <div className="plant-grid">
            {category.plants.map((plant) => {
              const added = cartItems.some(
                item => item.id === plant.id
              );

              return (
                <div className="plant-card" key={plant.id}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                  />

                  <h3>{plant.name}</h3>
                  <p>${plant.price.toFixed(2)}</p>

                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={added}
                  >
                    {added ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;

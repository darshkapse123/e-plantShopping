import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({
      name: item.name,
      quantity: item.quantity + 1,
    }));
  };

  const handleDecrement = (item) => {
    dispatch(updateQuantity({
      name: item.name,
      quantity: item.quantity - 1,
    }));
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.cost * item.quantity,
    0
  );

  return (
    <div>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>
        <div>
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})</Link>
        </div>
      </nav>

      <div className="cart-container">
        <h1>Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div>
            <p>Your cart is empty.</p>
            <Link to="/plants">Continue Shopping</Link>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div className="cart-item" key={item.name}>
                <img src={item.image} alt={item.name} />

                <div>
                  <h3>{item.name}</h3>
                  <p>Unit Price: ₹{item.cost}</p>
                  <p>Amount: ₹{item.cost * item.quantity}</p>

                  <button onClick={() => handleDecrement(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item)}>+</button>

                  <button
                    onClick={() => dispatch(removeItem(item.name))}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            <h2>Total: ₹{totalAmount}</h2>

            <button onClick={() => alert('Coming Soon!')}>
              Checkout
            </button>

            <Link to="/plants">Continue Shopping</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;
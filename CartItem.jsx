
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeItem,
  updateQuantity
} from './CartSlice';
import './CartItem.css';

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    state => state.cart.items
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart-page">
      <nav className="cart-navbar">
        <h2>Paradise Nursery</h2>
        <div>
          <a href="/">Home</a>
          <a href="/plants">Plants</a>
          <a href="/cart">Cart 🛒</a>
        </div>
      </nav>

      <h1>Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty!</h2>
          <a href="/plants">Continue Shopping</a>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div className="cart-card" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>Unit Price: ${item.price.toFixed(2)}</p>
                  <p>
                    Total: $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        handleQuantityChange(
                          item.id,
                          item.quantity - 1
                        )
                      }
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        handleQuantityChange(
                          item.id,
                          item.quantity + 1
                        )
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="delete-button"
                    onClick={() => handleRemove(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>
              Total Amount: ${totalAmount.toFixed(2)}
            </h2>

            <button
              onClick={() => alert('Coming Soon!')}
            >
              Checkout
            </button>

            <a href="/plants">Continue Shopping</a>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;

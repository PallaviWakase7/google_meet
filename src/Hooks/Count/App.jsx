import React, { useState } from 'react';

function ShoppingCart() {
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    setPrice(price + 10); // Assuming each item costs 10
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setPrice(price - 10); // Decrease the price when reducing quantity
    }
  };

  const printThankYou = () => {
    alert('Thank you for visiting!');
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>Quantity: {quantity}</p>
      <p>Total Price: ${price}</p>
      <button onClick={increaseQuantity}>Increase Quantity</button>
      <button onClick={decreaseQuantity}>Decrease Quantity</button>
      <button onClick={printThankYou}>Print Thank You</button>
    </div>
  );
}

export default ShoppingCart;
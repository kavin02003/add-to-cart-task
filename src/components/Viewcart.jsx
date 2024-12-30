import React, { useContext, useEffect, useState } from 'react';
import './Viewcart.css';
import { cartContext } from '../App';
import apples from '../images/fresh-red-apples-on-wooden-260nw-2503264777.webp'

const Viewcart = () => {
  const { cart, setCart } = useContext(cartContext);

  const [total, setTotal] = useState(0);

  useEffect(() => {

    setTotal(cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0));
  }, [cart]);

  const removeCart = (id) => {
    setCart(cart.filter((c) => c.id !== id));
  };

  const incrementQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 < 1 ? 1 : item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <>
      <h1 className='cart-heading'>Cart Products</h1>
      <div className='cart-container'>
        {cart.map((product) => (
          <div className='cart-product' key={product.id}>
            <div className="img">
              <img src={apples} alt={product.name} />
            </div>
            <div className="cart-product-details">
              <h3>{product.name}</h3>
              <p>Price Rs: {product.price}</p>
              <div className="quantity-controls">
                <button className='buttonSize' onClick={() => incrementQuantity(product.id)}>+</button>
                <span>Quantity: {product.quantity}</span>
                <button className='buttonSize' onClick={() => decrementQuantity(product.id)}>-</button>
              </div>
              <p>Subtotal Rs: {product.price * product.quantity}</p>
            </div>
            <button className='btnRemove' onClick={() => removeCart(product.id)}>Remove from Cart</button>
          </div>
        ))}
      </div>
      <h2 className='cart-amt'>Total Amount Rs: {total}</h2>
    </>
  );
};

export default Viewcart;


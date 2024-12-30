import React, { useContext} from 'react';
import './Product.css';
import { cartContext } from '../App';
import apples from '../images/fresh-red-apples-on-wooden-260nw-2503264777.webp'


const Product = ({ user }) => {
  const { cart, setCart } = useContext(cartContext);





  const addCart = () => {
    const existingProduct = cart.find((item) => item.id === user.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === user.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, {...user, quantity: 1} ]);
    }
  };

  return (
    <div className='product'>
      <div className="img">
        <img src={apples} alt={user.name} width="50" height="50" />
      </div>
      <div className="details">
           <h3>{user.name}</h3>
           <p>Price Rs:{user.price}</p> 
        <button onClick={addCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;




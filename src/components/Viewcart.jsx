import React, { useContext, useEffect, useState } from 'react'
import './Viewcart.css'
import { cartContext } from '../App';

const Viewcart = () => {

  const {cart,setCart} = useContext(cartContext)
 
  const [total,setTotal] = useState(0);
  useEffect(()=>{
     setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.amt),0))
  },[cart]) 

  const removeCart=(id)=>{
     setCart(cart.filter((c)=> c.id !== id))
  };

  return (
    <>
    <h1 className='cart-heading'>Cart products</h1>
    <div className='cart-container'>
      {
        cart.map((product)=>(
          <div className='cart-product' key={product.id}>
          <div className="img">
            <img src={product.pic} alt={product.name} />
          </div>
          <div className="cart-product-details">
            <h3>{product.name}</h3>
            <p>Price Rs:{product.amt}</p>
          </div>
          <button className='btnRemove' onClick={() => removeCart(product.id)}>Remove from Cart</button>
      </div>
        ))
      }
    </div>
    <h2 className='cart-amt'>Total Amount Rs:{total}</h2>
    </>
  )
}

export default Viewcart;

import React, { useContext } from 'react'
import './Product.css'
import { cartContext } from '../App';


const Product = ({product}) => {
    
    const {cart,setCart} = useContext(cartContext); 

    const addCart=()=>{
      if(!cart.some((item)=>item.id === product.id)){
      setCart([...cart,product])
      }
      else{
        alert("product is already added")
      }
    };

  return (
    <>
    <div className='product'>
        <div className="img">
            <img src={product.pic} alt={product.name}/>
        </div>
        <div className="details">
            <h3>{product.name}</h3>
            <p>Price Rs:{product.amt}</p>
            <button onClick={addCart}>Add to Cart</button>
            {/* {
              cart.includes(product)?(<button className='btnRemove' onClick={removeCart}>Remove from Cart</button>):
              (<button onClick={addCart}>Add to Cart</button>)
            } */}
        </div>
    </div>
    </>
  )
}

export default Product



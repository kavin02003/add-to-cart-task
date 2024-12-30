import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import { cartContext } from '../App'
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
   
  const {cart} = useContext(cartContext)
    
  return (
    <div className='navbar'>
      <Link  className="logo" to={"/"} >Food Cart</Link>
      {/* <div className="logo">Food Cart</div> */}
      <ul>
      <li>
            <Link className='link-line' to={"/addProducts"} >Add Products</Link>
        </li>
        <li>
            <Link className='link-line' to={"/"} >Home</Link>
        </li>
        <li>
            <Link to={"/Cart"} ><span className='cart-count'>{cart.length}</span><FaShoppingCart /></Link>
        </li>
      </ul>
    </div>
  )
}

export default Header

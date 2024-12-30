import React, {useContext } from 'react'
// import data from '../products.json'
import Product from './Product'
import './Home.css'
import { cartContext } from '../App'


const Home = () => {
    // const [products] = useState(data)

    const {users} = useContext(cartContext)

      


  return (
    <div className='product-container'>
      {users.map((user)=>(
        <Product key={user.id} user={user}/>
      ))}
    </div> 
  )
}

export default Home;

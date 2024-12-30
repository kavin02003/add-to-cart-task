import React, { useContext, useState} from 'react'
import axios from 'axios'
import { cartContext } from './App';
import './Formdata.css'

const Formdata = () => {
   const [productname,setProductname] = useState("");
   const [price,setPrice] = useState("");
   const [selectedimage,setSelectedimage] = useState(null);

   const {users} = useContext(cartContext)


   const handleSubmit = (e) =>{
    if(productname && price){
    e.preventDefault();

    
    axios.post("https://676e5ab6df5d7dac1cca6368.mockapi.io/todos",{
        name:productname,
        price:price,
    })
    .then(res=>
        console.log('response:',res.data))
    .catch(error => {
        console.error('Error:', error);
      });

      setPrice("")
      setProductname("")

   }
}
     
  return (
    <div>
      <form  className='formdata-form' action="" onSubmit={handleSubmit}>
      <label className='formdata-productnames' >Product name:</label>
      <input className='formdata-inputbox1' placeholder='Product-Name...' type="text" value={productname} onChange={(e)=>setProductname(e.target.value)} /><br/><br/>
      <label className='formdata-productnames' >Product Price:</label>
      <input className='formdata-inputbox1' placeholder='Product-Price...' type="text" value={price} onChange={(e)=>setPrice(e.target.value)}/><br/><br/>
      <button type='submit' className='formdata-button'>SUBMIT</button>
      </form><br/><br/>

      <h1>Product List</h1><br/>
      <ul>
        {users.map((user)=>(
          <li className='formdata-list' key={user.id}>
            <p>Product-ID : {user.id}</p>
            <p>Product-Name : {user.name}</p>
            <p>Product-Price : Rs {user.price}</p> 
          </li>
        ))
          
        }
        </ul>
    </div>
  )
      
}

export default Formdata


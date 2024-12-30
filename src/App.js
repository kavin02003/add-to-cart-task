import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Viewcart from './components/Viewcart';
import { createContext, useState , useEffect } from 'react';
import Formdata from './Formdata';
import axios from 'axios'

export const cartContext = createContext()

function App() {

  const [cart,setCart] = useState([]);

   const [quantity,setQuantity] = useState(0)

   const [users, setUsers] = useState([]);
    
      useEffect(() => {
       axios.get('https://676e5ab6df5d7dac1cca6368.mockapi.io/todos')
         .then((res) => {
           setUsers(res.data);
         })
         .catch((error) => {
            console.log(error)
         });
     }, []);

  return (
    <cartContext.Provider value={{cart,setCart,quantity,setQuantity,users,setUsers}}  >
      <BrowserRouter>
            <div>
              <Header/>
              <div className='container'>
                  <Routes>
                       <Route path='/addProducts' element={<Formdata/>}/>
                       <Route path='/' element={<Home/>}/>
                       <Route path='/Cart' element={<Viewcart/>}/>
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
    </cartContext.Provider>
  
  );
}

export default App;

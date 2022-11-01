import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { darkTheme, lightTheme } from './redux/themeSlice';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ShoppingCart from './pages/ShoppingCart';
import AddProduct from './pages/AddProduct';
import ProductDetails from './pages/ProductDetails';

function App() {
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   let hour = new Date().getHours();
  //   if(hour < 6 || hour > 17){
  //     dispatch(darkTheme())
  //   }else{
  //     dispatch(lightTheme())
  //   }
  // },[])
  return (
    <Router>
      
        <Routes>
          <Route element={<Home />} exact path='/' />
          <Route element={<Login />} path='/login' />
          <Route element={<SignUp />} path='/register' />
          <Route element={<ShoppingCart />} path='/cart' />
          <Route element={<AddProduct />} path='/addproduct' />
          <Route element={<ProductDetails />} path='/details' />
        </Routes>
      
      </Router>
  )
}

export default App
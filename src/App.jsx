import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from './components/pages/Contact';
import Navabar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer';
import Cart from './components/cart/Cart';
import ProductList from './components/pages/ProductList';
import Details from './components/pages/Details'
import Modal from './components/pages/Modal';
import {KindeProvider} from "@kinde-oss/kinde-auth-react";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <KindeProvider
        clientId="4f4da7bedba2486196448a51f3f6dacd"
        domain="https://shopfusion01.kinde.com"
        redirectUri="http://localhost:3000"
        logoutUri="http://localhost:3000"
>
    <Navabar/>
    <Routes>
      <Route path='/' element={<ProductList/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/details' element={<Details/>}/>
    </Routes>
    </KindeProvider>
    <Modal/>
    <Footer/>
    </BrowserRouter>
    </>
    
  )
}

export default App
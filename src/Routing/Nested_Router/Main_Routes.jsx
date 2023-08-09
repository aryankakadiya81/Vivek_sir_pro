import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contect from './Contect';
import Nav from './Nav';
import Product from './Product';
import Pro_product from './Pro_product';

const Main_Routes = () => {
  return (
    <BrowserRouter>
    <Nav></Nav>
    <div className='select-none underline hover:scale-110 mx-52'>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path='/Product' element={<Product></Product>}></Route>
            <Route path='/Proproduct' element={<Pro_product></Pro_product>}></Route>
          </Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contect" element={<Contect />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Main_Routes

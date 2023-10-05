import React from 'react'
import Product from './Product'
import Cart from './Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'

const Export = () => {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Product></Product>}></Route>
        <Route path='/Cart' element={<Cart></Cart>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Export

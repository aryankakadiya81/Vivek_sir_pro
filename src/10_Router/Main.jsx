import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Nav from './Nav'

const Main = () => {
  return (
   <BrowserRouter>
   <Nav></Nav>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/About' element={<About />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
        </Routes>
   </BrowserRouter>
  )
}

export default Main

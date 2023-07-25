import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contect from './Contect';
import Nav from './Nav';


const Main_Routes = () => {
  

  return (
    <BrowserRouter>
      <Nav></Nav>
      <div className='select-none mx-52'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contect" element={<Contect />}></Route>
        </Routes>
      </div>
      
    </BrowserRouter>
  )
}

export default Main_Routes

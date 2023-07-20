import React from 'react';
import { Routes, Route, BrowserRouter, HashRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contect from './Contect';
import Nav from './Nav';

const Main_Routes = () => {
  return (
    <HashRouter>
      <Nav></Nav>
      <div className='select-none underline hover:scale-110 mx-52'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contect" element={<Contect />}></Route>
        </Routes>
      </div>
    </HashRouter>
  )
}

export default Main_Routes

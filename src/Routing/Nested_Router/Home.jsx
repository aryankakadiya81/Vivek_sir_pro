import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='font-bold text-6xl text-left my-40'>
      Home Page
      <div>
        <Link to={`Product`}>Product</Link>
        <Link to={`Proproduct`}>Pro_product</Link>
      </div>
      <Outlet></Outlet>
    </div>
  )
}

export default Home


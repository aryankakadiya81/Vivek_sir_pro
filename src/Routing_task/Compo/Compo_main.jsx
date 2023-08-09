import React from 'react'
import Section1 from './Section1/Section1'
import Section2 from './Section1/Section2'
import Section3 from './Section1/Section3'
import { Link, Outlet } from 'react-router-dom'

const Compo_main = () => {
  return (
    <>

      <div>
        <Link to={``}>Section1</Link>
        <Link to={`sec2`}>Section2</Link>
        <Link to={`sec3`}>Section3</Link>

      </div>
      <Outlet/> 
    </>
  )
}

export default Compo_main

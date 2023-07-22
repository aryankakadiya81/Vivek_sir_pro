import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <Link className='px-2 no-underline text-black' to='/'>Home</Link>
      <Link className='px-2 no-underline text-black' to='/About'>About</Link>
      <Link className='px-2 no-underline text-black' to='/Contact'>Contact</Link>
    </div>
  )
}

export default Nav
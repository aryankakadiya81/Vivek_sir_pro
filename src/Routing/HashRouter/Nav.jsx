import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <div className='flex justify-around mx-96 px-56 select-none'>
        <div className='mt-2 hover:scale-110'>
          <Link to='/'>
            <button className='border-2 font-bold border-black m-2 p-1 hover:text-white hover:bg-black'>Home</button>
          </Link>
        </div>

        <div className='mt-2 hover:scale-110'>

          <Link to='/About'><button className='border-2 font-bold border-black m-2 p-1 hover:text-white hover:bg-black'>About</button></Link>
        </div>

        <div className='mt-2 hover:scale-110'>

          <Link to='/Contect'><button className='border-2 font-bold border-black m-2 p-1 hover:text-white hover:bg-black'>Contact</button></Link>

        </div>
      </div>

    </>
  )
}

export default Nav

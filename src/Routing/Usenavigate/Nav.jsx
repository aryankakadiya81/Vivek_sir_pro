import React from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  let Navi = useNavigate();
  return (
    <>
      <div className='flex justify-around mx-96 px-56'>
        <div className='mt-2 hover:scale-110'>
          <button className='border-2 font-bold bg-black text-white border-black m-2 p-1 hover:text-black hover:bg-white' onClick={() => { Navi("/") }}>Home</button>
        </div>

        <div className='mt-2 hover:scale-110'>

          <button className='border-2 font-bold bg-black text-white border-black m-2 p-1 hover:text-black hover:bg-white' onClick={() => { Navi("/About") }}>About</button>
        </div>

        <div className='mt-2 hover:scale-110'>

          <button className='border-2 font-bold bg-black text-white border-black m-2 p-1 hover:text-black hover:bg-white' onClick={() => { Navi("/Contect") }}>Contact</button>

        </div>
      </div>

    </>
  )
}

export default Nav

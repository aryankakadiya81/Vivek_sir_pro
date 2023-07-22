import React from 'react'
import { useNavigate } from 'react-router-dom';

const Contect = () => {
  const nav = useNavigate()
 
  return (
    <>
      <div className='font-bold text-6xl text-right my-40'>
        Contact Page
      </div>
      <div className='flex justify-center'>
        <button className='border-2 font-bold border-black m-2 p-1 hover:text-white hover:bg-black' onClick={()=>{nav("/")}}>Next</button>
        </div>

    </>
  )
}

export default Contect

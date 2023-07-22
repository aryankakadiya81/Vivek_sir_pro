import React from 'react';
import { useNavigate } from 'react-router-dom';


const About = () => {
  const nav = useNavigate();
  
  return (
    <>
      <div className='font-bold text-6xl text-center my-40'>
        About Page
      </div>
      <div className='flex justify-center'>
      <button className='border-2 font-bold border-black m-2 p-1 hover:text-white hover:bg-black' onClick={()=>{nav("/Contect")}}>Next</button>
      </div>
    </>
  )
}

export default About

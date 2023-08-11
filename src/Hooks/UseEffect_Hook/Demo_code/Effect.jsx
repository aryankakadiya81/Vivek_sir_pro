import React, { useEffect, useState } from 'react'

const Effect = () => {
    // useEffect(() => {

    // },[])
    let [click,setClick] = useState();

    useEffect(()=>{
        alert(`Use Effect ${click}`);
    })
  return (
    <div>
      <button onClick={() => {setClick('Subscribe')}}>Subscribe</button><br/>
      <button onClick={() => {setClick('to')}}>to</button><br/>
      <button onClick={() => {setClick('Drop')}}>Drop</button><br/>
      <h1 className='text-2xl'>{click}</h1>

    </div>
  )
}

export default Effect

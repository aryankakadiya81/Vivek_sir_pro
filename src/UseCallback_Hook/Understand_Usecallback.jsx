import React, { useState } from 'react';
import Count12 from './Count';
import Count13 from './Count1';
import { useCallback } from 'react';

const Understand_Usecallback = () => {

  let [Count, setCount] = useState(0);
  let [Count1, setCount1] = useState(0);

  let Countupdation = useCallback(() => {
    // console.log("count_update");
    setCount(Count + 1);
  }, [Count]);

  let Countdecre = useCallback(() => {
    // console.log("count_update");
    setCount(Count - 1);
  }, [Count]);

  let Count1updation = useCallback(() => {
    // console.log("count1_update");
    setCount1(Count1 + 2);
  }, [Count1]);
  let Count1decre = useCallback(() => {
    // console.log("count1_update");
    setCount1(Count1 - 2);
  }, [Count1]);

  return (
    <>
      <div className='text-2xl'>
        <div className='flex justify-center'>
          <div className='font-bold'>Even + Odd : </div>
          <div className='ms-5'>{Count} + {Count1} = {Count+Count1}</div>
        </div>

        <div className='text-center mt-10 mb-3'>Odd</div>
        <div className='flex justify-center'>
          <button className='border-2 border-black p-1 hover:text-white hover:bg-black font-semibold' onClick={Countdecre}>-</button>
          <Count12 value={Count}></Count12>
          <button className='border-2 border-black p-1 hover:text-white hover:bg-black font-semibold' onClick={Countupdation}>+</button>
        </div>

        <div className='text-center mt-10 mb-3'>Even</div>
        <div className='flex justify-center'>
          <button className='border-2 border-black p-1 hover:text-white hover:bg-black font-semibold' onClick={Count1decre}>-</button>
          <Count13 value={Count1}></Count13>
          <button className='border-2 border-black p-1 hover:text-white hover:bg-black font-semibold' onClick={Count1updation}>+</button>
        </div>
      </div>
    </>
  )
}

export default Understand_Usecallback;

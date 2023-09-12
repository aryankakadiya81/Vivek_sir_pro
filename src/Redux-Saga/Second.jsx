import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_CART } from './Store/Action';

const Second = () => {
    let Data = useSelector(Data => Data.CART_DATA);
    let Dispatch = useDispatch()
  return (
    <div>
      {Data.length}
      <div><button onClick={() => {Dispatch(CLEAR_CART())}}>Clear</button></div>
    </div>
  )
}

export default Second

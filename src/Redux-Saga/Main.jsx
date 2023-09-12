import React from 'react';
import { ADD_TO_CART, REMOVE_FROM_CART } from './Store/Action';
import { useDispatch, useSelector } from 'react-redux';


const Main = () => {
  let MAINDATA = useSelector(DATA => DATA.CART_DATA)
  let Dispatch = useDispatch();
  let Product = {
    name: "Iphone",
    id:1
  }
  // console.log(MAINDATA)
  return (
    <div>
      <div><button onClick={() => { Dispatch(ADD_TO_CART(Product)) }}>Add</button></div>

      
      <div>
        {
          MAINDATA.map((ele) => {
            return (
              <>
                <div>{ele.name}</div>
                <div><button onClick={() => {Dispatch(REMOVE_FROM_CART(Product,Product.id))}}>Btn</button></div>
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default Main

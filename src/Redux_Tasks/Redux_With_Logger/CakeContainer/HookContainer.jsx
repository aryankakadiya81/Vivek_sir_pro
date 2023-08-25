import React from 'react'
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'
import {buyCake} from '../Redux/Cake/CakeActions'

const HookContainer = () => {

    let numofCakes = useSelector((state) => state.numofCakes)
    let dispatch = useDispatch()
  return (
    <div className="text-center mt-56">
      <h2 className="text-4xl font-semibold">Num of Cakes = {numofCakes}</h2>
      <button className="border border-black mt-5 px-5 py-2" onClick={() => {dispatch(buyCake())}}>BUY_CAKE</button>
    </div>
  )
}

export default HookContainer 

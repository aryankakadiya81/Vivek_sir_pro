// import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Increment, Decrement } from './Number/Action';


const Container = () => {
    let Numbers = useSelector(state => state.Numbers);
    let Dispatch = useDispatch()
    return (
        <>
            <div className='text-6xl justify-between mx-96 mt-44 flex'>
            
            <button onClick={() => { Dispatch(Decrement()) }}>-</button>
            <div>{Numbers}</div>
            
            <button onClick={() => { Dispatch(Increment()) }}>+</button>
            </div>

        </>
    )
}

export default Container

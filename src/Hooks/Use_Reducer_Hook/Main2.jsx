import React from 'react'
import { useReducer } from 'react'

const initialSatate = {
     firstCounter:0
}
const reducer = (state , action) => {
     switch(action.type){
          case 'increment':
               return {firstCounter:state.firstCounter+1}
          case 'decrement':
               return {firstCounter:state.firstCounter-1}
          case 'reset':
               return initialSatate
          default:
               return state
     }
}

const Main2 = () => {

     const [count , dispatch] = useReducer(reducer  , initialSatate)

  return (
    <div>
          <div>Count - {count.firstCounter}</div>
          <button onClick={() => dispatch({type : 'increment'})}>Increment</button>
          <button onClick={() => dispatch({type : 'decrement'})}>Decriment</button>
          <button onClick={() => dispatch({type : 'reset'})}>Reset</button>
    </div>
  )
}

export default Main2
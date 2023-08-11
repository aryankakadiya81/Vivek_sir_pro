import React from 'react'
import { useReducer } from 'react'


const Main = () => {
     const initialSatate = 0;
     const reducer = (state, action) => {
          switch (action) {
               case 'increment':
                    return state + 1
               case 'decrement':
                    return state - 1
               case 'reset':
                    return initialSatate
               default:
                    return state
          }
     }


     const [count, dispatch] = useReducer(reducer, initialSatate)

     return (
          <div>
               <div>Count - {count}</div>
               <button onClick={() => dispatch('increment')}>Increment</button>
               <button onClick={() => dispatch('decrement')}>Decriment</button>
               <button onClick={() => dispatch('reset')}>Reset</button>
          </div>
     )
}

export default Main;
import React from 'react';
import { Decrese, Increse } from './Type';

let infi = {
    Numbers:20
}

const Reducer = (state = infi , action) => {
  switch(action.type)
  {
    case Increse: return{
        ...state,
        Numbers : state.Numbers + 1
    }
    case Decrese: return{
        ...state,
        Numbers : state.Numbers - 1
    }
    default : return state
  }
}

export default Reducer

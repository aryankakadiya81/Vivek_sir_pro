// import React from 'react';
import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART, EDIT_DATA } from './Type';


const Reducer = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return [...data,action.data];
    }

    case REMOVE_TO_CART: {
      data = data.filter((el)=>{return (el.id !== action.id)});

      return [...data];
    }
    case EDIT_DATA: {
      // data = data.filter((el)=>{if(el.id === action.id){el.id = action.id,el.Name = action.Name,el.Age = action.Age} return true})
      return [...data];
    }


    case EMPTY_CART: {
      data.length = 0;
      data = [];
      return [...data];
    }

    

    default: return data;
  }
}

// data.length = data.length ? data.length - 1 : [];

export default Reducer

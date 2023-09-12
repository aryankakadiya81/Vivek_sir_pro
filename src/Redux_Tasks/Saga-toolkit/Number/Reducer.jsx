// import React from 'react';
import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from './Type';


const Reducer = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return [action.data, ...data];
    }

    case REMOVE_TO_CART: {
      data.length = data.length ? data.length - 1 : [];
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

export default Reducer

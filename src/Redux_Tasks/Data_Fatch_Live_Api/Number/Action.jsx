// import React from 'react'
import { ADD_TO_CART, REMOVE_TO_CART,EMPTY_CART} from "../Type";


export let ADDTOCART = (data) => {
  return {
    type: ADD_TO_CART,
    data
  }
}

export let REMOVETOCART = (data) => {
    return {
      type: REMOVE_TO_CART,
      data
    }
  }

  export let EMPTYCART = (data) => {
    return {
      type: EMPTY_CART,
      data
    }
  }


// import React from 'react'
import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART, EDIT_DATA } from "./Type";


export let ADDTOCART = (data) => {
  return {
    type: ADD_TO_CART,
    data
  }
}

export let REMOVETOCART = (id, data) => {
  return {
    type: REMOVE_TO_CART,
    id,
    data
  }
}

export let EDITDATA = (id,Name,Age,data) => {
  return {
    type: EDIT_DATA,
    id,
    Name,
    Age,
    data
  }
}


export let EMPTYCART = (data) => {
  return {
    type: EMPTY_CART,
    data
  }
}



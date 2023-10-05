import { combineReducers } from "redux";

// import { SAMPLE_DATA } from "./Sample/Reducer";
import { PRODUCT_DATA } from "./Product/Reducer";
import {CART_DATA} from './CartData/Reducer'

export default combineReducers({PRODUCT_DATA,CART_DATA})
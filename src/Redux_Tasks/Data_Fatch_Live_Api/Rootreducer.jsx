import { combineReducers } from "redux";
import Reducer from "./Number/Reducer";
import {PRODUCTLIST} from "./Product/Action";


export default combineReducers({PRODUCTLIST,Reducer});
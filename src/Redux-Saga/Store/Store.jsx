import {createStore} from 'redux';
import RootReducer from './RootReducer';
let Store = createStore(RootReducer)

export default Store;
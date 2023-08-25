import {createStore , applyMiddleware} from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import cakeReducer from './Cake/CakeReducer';

let store = createStore(cakeReducer,applyMiddleware(logger));


export default store
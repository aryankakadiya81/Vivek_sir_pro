// import {createStore} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import Saga from './Product/Saga';
import createSagaMiddleware from 'redux-saga'
import RootReducer from './RootReducer';

let MiddleSaga = createSagaMiddleware();
let Store = configureStore({reducer:RootReducer,middleware:()=>[MiddleSaga]});
MiddleSaga.run(Saga)
export default Store;
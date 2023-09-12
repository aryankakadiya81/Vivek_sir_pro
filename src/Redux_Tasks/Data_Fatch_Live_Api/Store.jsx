// import {createStore} from 'redux';
import Rootreducer from './Rootreducer';
import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import Saga from './Product/Saga';
// import Reducer from './Number/Reducer';

// let Store = createStore(Rootreducer);

let Create = createSagaMiddleware()

let Store = configureStore({
    reducer: Rootreducer,
    middleware: () => [Create]
})

Create.run(Saga);

export default Store;
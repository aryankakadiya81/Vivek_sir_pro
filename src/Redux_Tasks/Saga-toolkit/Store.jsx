import {createStore} from 'redux';
import Rootreducer from './Rootreducer';
// import Reducer from './Number/Reducer';

let Store = createStore(Rootreducer);

export default Store;
import {createStore} from 'redux';
import Reducer from './Number/Reducer';

let Store = createStore(Reducer);

export default Store;
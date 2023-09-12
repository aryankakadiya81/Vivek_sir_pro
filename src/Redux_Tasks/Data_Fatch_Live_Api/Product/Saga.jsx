import {takeEvery} from 'redux-saga/effects'
import { PRODUCT_LIST } from '../Type';

function* getProducts(){
     console.log("call api here");
     let data = yield fetch('http://localhost:3002/aryan');
     data = yield data.json()
     console.log("action called" , data);
}


function* Saga() {
  yield takeEvery(PRODUCT_LIST , getProducts)
}

export default Saga
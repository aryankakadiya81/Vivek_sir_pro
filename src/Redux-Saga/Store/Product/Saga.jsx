import { takeEvery, put} from "redux-saga/effects"
// import { GET_PRODUCT } from "./Action";

function* importData() {
    
    let DATA = yield fetch("http://localhost:3003/products");
    DATA = yield DATA.json();
    // console.log("Aryan", DATA);
    yield put({type:"SET_PRODUCT",DATA:DATA})
}

function* Search_Pro(DATA){

    let Result = yield fetch(`http://localhost:3003/products?q=${DATA.Que}`)
    Result = yield Result.json();
    yield put({type:"SET_PRODUCT",DATA:Result})

}
function* Saga() {
    yield takeEvery("GET_PRODUCT", importData);
    yield takeEvery("SEARCH_PRODUCT", Search_Pro);

}

export default Saga
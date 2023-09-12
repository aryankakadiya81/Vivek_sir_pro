import { createStore, applyMiddleware } from "redux";
// import userReducer from "./Async/Usereducer";
// import UserReduser from "./AA/UserReducer";
import rootReducer from "./rootReducer";
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

let store = createStore(rootReducer, applyMiddleware(logger, thunk))

export default store
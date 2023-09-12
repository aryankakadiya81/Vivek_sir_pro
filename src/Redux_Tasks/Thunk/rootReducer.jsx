import { combineReducers } from "redux";
import UserReduser from "./AA/UserReducer";

const rootReducer  = combineReducers({
    user : UserReduser
})

export default rootReducer
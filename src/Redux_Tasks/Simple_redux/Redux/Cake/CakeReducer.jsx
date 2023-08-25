import { BUY_CAKE } from "./CakeType";

let initialState = {
    numofCakes : 10
}

let cakeReducer = (state = initialState , action) =>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numofCakes:state.numofCakes-1
        }
        default:return state
    }
}

export default cakeReducer
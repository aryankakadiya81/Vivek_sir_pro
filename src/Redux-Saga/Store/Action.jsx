export let ADD_TO_CART = (DATA) => {
    // console.log("Action Called",DATA);
    return {
        type:"ADD_TO_CART",
        DATA
    };
}

export let REMOVE_FROM_CART = (DATA,id) => {
    return {
        type:"REMOVE_FROM_CART",
        id,
        DATA
    };
}

export let CLEAR_CART = () => {
    return{
        type: "CLEAR_CART",
        
    }
}

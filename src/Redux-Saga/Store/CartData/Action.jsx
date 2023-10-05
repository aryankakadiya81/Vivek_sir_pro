export let ADD_TO_CART = (Itm) => {
    return{
        type:"ADD_TO_CART",
        Itm
    }
}

export let REMOVE_FROM_CART = (Id) => {
    return{
        type:"REMOVE_FROM_CART",
        Id
    }
}

export let CLEAR_CART = () => {
    return{
        type:"CLEAR_CART",
    }
}

export let CART_TOTAL = (Total) => {
    return{
        type:"CART_TOTAL",
        Total
    }
}
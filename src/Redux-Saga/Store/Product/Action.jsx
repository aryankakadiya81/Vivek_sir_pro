export let GET_PRODUCT = () => {
//    console.log("getproduct")
    return {
        type: "GET_PRODUCT",
        DATA:[]
    }
}

// export let ADD_TO_CART = (DATA) => {
//     return {
//         type: "ADD_TO_CART",
//         DATA
//     }
// }

export let SEARCH_PRODUCT = (Que) => {
    return {
        type: "SEARCH_PRODUCT",
        Que
        
    }
}


// export let ADD_TO_CART = (Itm) => {
//     return {
//         type: "ADD_TO_CART",
//         Itm
        
//     }
// }
// export let SET_PRODUCT = (DATA) => {
//     return {
//         type: "SET_PRODUCT",
//         DATA
//     }
// }

export let CLEAR_PRODUCT  = () => {
    return {
        type: "CLEAR_PRODUCT"
    }
}

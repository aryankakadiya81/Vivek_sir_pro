// import React from 'react'

export let CART_DATA = (DATA = [], Action) => {
    switch (Action.type) {
        case "ADD_TO_CART":
            return [...DATA,Action.Itm];
        case "REMOVE_FROM_CART":
            DATA = DATA.filter((ele)=>{return (ele.id !== Action.Id)});
            return [...DATA];
        case "CLEAR_CART":
            DATA = [];
            // DATA.length = 0;
            return [...DATA]
        default:
            return [...DATA];

    }
}



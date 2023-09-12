export let CART_DATA = (DATA = [], Action) => {
    switch(Action.type)
    {
        case "ADD_TO_CART":
            // console.log("ADD");
            // ...DATA,
            return [...DATA,Action.DATA];

        case "REMOVE_FROM_CART":
            DATA = DATA.filter((ele)=>{return(ele.id !== Action.id)})
            return DATA;

        case "CLEAR_CART":
            DATA = [];
            return DATA;
        default :
            return DATA;
         
    }
}


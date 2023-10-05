export let PRODUCT_DATA = (DATA = [], Action) => {
    switch (Action.type) {
        case "GET_PRODUCT":
            // console.log("ADD");
            // ...DATA,
            return [...Action.DATA];


        case "SET_PRODUCT":
            return [...Action.DATA];



        case "CLEAR_PRODUCT":
            DATA = [];
            return [...DATA];
        default:
            return [...DATA];

    }
}


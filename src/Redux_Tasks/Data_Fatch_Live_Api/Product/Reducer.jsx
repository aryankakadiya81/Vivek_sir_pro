import { PRODUCT_LIST } from "../Type";

const Reducer1 = (data = [], action) => {
     switch (action.type) {
          case PRODUCT_LIST:
               // console.log("PRODUCT_LIST", action);
               return [action.data];
          default: return []
     }
}

export default Reducer1
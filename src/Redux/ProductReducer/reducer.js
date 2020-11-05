import {GETALLPRODUCTFAILURE,GETALLPRODUCTREQUEST,GETALLPRODUCTSUCCESS} from './actionTypes';

export const initState = {
    productData: [],
    error: ""
}

const reducer = (state = initState, action) => {
    switch (action.type) {
    case GETALLPRODUCTREQUEST:
        return {
            ...state,
            error: "",
          };
    case GETALLPRODUCTFAILURE:
        return {
            ...state,
            error: "Something went wrong",
          };
    case GETALLPRODUCTSUCCESS:
        return {
            ...state,
            error: "",
            productData: action.payload
          };
    default:
      return state;
    }
}

export default reducer
import {
  GET_ALL_PRODUCT_FAILURE,
  GET_ALL_PRODUCT_REQUEST,
  GET_ALL_PRODUCT_SUCCESS,
  GET_SEARCH_PRODUCT_SUCCESS,
  GET_SEARCH_PRODUCT_FAILURE,
  GET_SEARCH_PRODUCT_REQUEST,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_SUCCESS
} from "./actionTypes";

export const initState = {
  productData: [],
  error: "",
  searchData: [],
  requestedProduct: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT_REQUEST:
      return {
        ...state,
        error: "",
      };
    case GET_ALL_PRODUCT_FAILURE:
      return {
        ...state,
        error: "Something went wrong",
      };
    case GET_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        error: "",
        productData: action.payload,
      };
    case GET_SEARCH_PRODUCT_REQUEST:
      return {
        ...state,
        error: "",
      };
    case GET_SEARCH_PRODUCT_FAILURE:
      return {
        ...state,
        error: "Something went wrong",
      };
    case GET_SEARCH_PRODUCT_SUCCESS:
      return {
        ...state,
        error: "",
        searchData: action.payload,
      };
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        error: "",
      };
    case GET_PRODUCT_FAILURE:
      return {
        ...state,
        error: "Something went wrong",
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        error: "",
        requestedProduct: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

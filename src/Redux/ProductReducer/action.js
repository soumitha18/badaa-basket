import {
  GETALLPRODUCTFAILURE,
  GETALLPRODUCTREQUEST,
  GETALLPRODUCTSUCCESS,
} from "./actionTypes";
import axios from "axios";

export const getAllProductRequest = () => ({
  type: GETALLPRODUCTREQUEST,
});

export const getAllProductFailure = () => ({
  type: GETALLPRODUCTFAILURE,
});

export const getAllProductSuccess = (payload) => ({
  type: GETALLPRODUCTSUCCESS,
  payload,
});

export const getAllProduct = () => (dispatch) => {
  dispatch(getAllProductRequest());
  axios
    .get("http://localhost:5000/getallproducts")
    .then((res) => dispatch(getAllProductSuccess(res.data)))
    .catch((err) => dispatch(getAllProductFailure()));
};

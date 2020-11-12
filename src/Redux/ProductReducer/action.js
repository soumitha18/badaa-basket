import {
  GET_ALL_PRODUCT_FAILURE,
  GET_ALL_PRODUCT_REQUEST,
  GET_ALL_PRODUCT_SUCCESS,
  GET_SEARCH_PRODUCT_REQUEST,
  GET_SEARCH_PRODUCT_FAILURE,
  GET_SEARCH_PRODUCT_SUCCESS,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_SUCCESS
} from "./actionTypes";

import axios from "axios";

export const getAllProductRequest = () => ({
  type: GET_ALL_PRODUCT_REQUEST,
});

export const getAllProductFailure = () => ({
  type: GET_ALL_PRODUCT_FAILURE,
});

export const getAllProductSuccess = (payload) => ({
  type: GET_ALL_PRODUCT_SUCCESS,
  payload,
});

export const getAllProduct = () => (dispatch) => {
  dispatch(getAllProductRequest());
  axios
    .get("http://localhost:5000/getallproducts")
    .then((res) => dispatch(getAllProductSuccess(res.data)))
    .catch(() => dispatch(getAllProductFailure()));
};

export const getSearchProductRequest = () => ({
  type: GET_SEARCH_PRODUCT_REQUEST
})

export const getSearchProductFailure = () => ({
  type: GET_SEARCH_PRODUCT_FAILURE
})

export const getSearchProductSuccess = (payload) => ({
  type: GET_SEARCH_PRODUCT_SUCCESS,
  payload
})

export const getSearchProduct = (data) => (dispatch) => {
  dispatch(getSearchProductRequest())
  axios
    .get(`http://localhost:5000/searchproduct?name=${data}`)
    .then(res => dispatch(getSearchProductSuccess(res.data)))
    .catch(() => dispatch(getSearchProductFailure()))
}

export const getProductRequest = () => ({
  type: GET_PRODUCT_REQUEST,
});

export const getProductFailure = () => ({
  type: GET_PRODUCT_FAILURE,
});

export const getProductSuccess = (payload) => ({
  type: GET_PRODUCT_SUCCESS,
  payload,
});

export const getProduct = (title, data,sortVal="") => (dispatch) => {
  dispatch(getProductRequest());
  axios
    .get(`http://localhost:5000/getproducts?${title}=${data}&sort=${sortVal}`)
    .then((res) => dispatch(getProductSuccess(res.data)))
    .catch(() => dispatch(getProductFailure()));
};
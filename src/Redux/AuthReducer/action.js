import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  AUTH_REQUEST
} from "./actionTypes";

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});
export const loginFailure = (payload) => ({
  type: LOGIN_FAILURE,
  payload,
});
export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const login = (payload) => (dispatch) => {
  dispatch(loginRequest());
  axios
    .post("http://localhost:5000/login", payload)
    .then((res) => dispatch(loginSuccess(res.data.user["name"])))
    .catch((err) => dispatch(loginFailure(err.response.data)));
};

export const signUpRequest = () => ({
  type: SIGNUP_REQUEST,
});
export const signUpFailure = (payload) => ({
  type: SIGNUP_FAILURE,
  payload,
});
export const signUpSuccess = (payload) => ({
  type: SIGNUP_SUCCESS,
  payload,
});

export const signUp = (payload) => (dispatch) => {
  dispatch(signUpRequest());
  axios
    .post("http://localhost:5000/register", payload)
    .then((res) => dispatch(signUpSuccess(res.data["name"])))
    .catch((err) => dispatch(signUpFailure(err.response.data)));
};

export const authRequest = () => ({
  type: AUTH_REQUEST
})

export const authFailure = (payload) => ({
  type: AUTH_FAILURE,
  payload
})

export const authSuccess = (payload) => ({
  type: AUTH_SUCCESS,
  payload
})

export const auth = (payload) => (dispatch) => {
  dispatch(authRequest())
  axios.post("http://localhost:5000/adduserdetails", payload)
    .then(res => dispatch(authSuccess(res.data["name"])))
    .catch(err => dispatch(authFailure(err.response.data)))
}
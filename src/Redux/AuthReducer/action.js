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
  AUTH_REQUEST,
  EDIT_FAILURE,
  EDIT_REQUEST,
  EDIT_SUCCESS,
  LOGOUT
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
    .then((res) => dispatch(loginSuccess(res.data.user)))
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
  axios.post("http://localhost:5000/register", payload)
    .then((res) => dispatch(signUpSuccess(res.data)))
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
    .then(res => dispatch(authSuccess(res.data)))
    .catch(err => dispatch(authFailure(err.response.data)))
}

export const logoutSuccess = () => ({
  type: LOGOUT
})

export const logout = () => (dispatch) => {
  dispatch(logoutSuccess())
}

export const editRequest = () => ({
  type: EDIT_REQUEST
})

export const editFailure = () => ({
  type: EDIT_FAILURE
})

export const editSuccess = (payload) => ({
  type: EDIT_SUCCESS,
  payload
})

export const editing = (payload) => (dispatch) => {
  dispatch(editRequest())
  axios.post(`http://localhost:5000/edituserdetails`, payload)
    .then(res => dispatch(editSuccess(res.data)))
    .catch(() => dispatch(editFailure()))
}
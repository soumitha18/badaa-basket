import axios from "axios";
import {
  LOGINFAILURE,
  LOGINREQUEST,
  LOGINSUCCESS,
  SIGNUPREQUEST,
  SIGNUPFAILURE,
  SIGNUPSUCCESS,
} from "./actionTypes";

export const loginRequest = () => ({
  type: LOGINREQUEST,
});
export const loginFailure = (payload) => ({
  type: LOGINFAILURE,
  payload,
});
export const loginSuccess = (payload) => ({
  type: LOGINSUCCESS,
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
  type: SIGNUPREQUEST,
});
export const signUpFailure = (payload) => ({
  type: SIGNUPFAILURE,
  payload,
});
export const signUpSuccess = (payload) => ({
  type: SIGNUPSUCCESS,
  payload,
});

export const signUp = (payload) => (dispatch) => {
  dispatch(signUpRequest());
  axios
    .post("http://localhost:5000/register", payload)
    .then((res) => dispatch(signUpSuccess(res.data["name"])))
    .catch((err) => dispatch(signUpFailure(err.response.data)));
};

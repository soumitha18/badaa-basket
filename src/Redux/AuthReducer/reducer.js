import {
    LOGINFAILURE,
    LOGINREQUEST,
    LOGINSUCCESS,
    SIGNUPREQUEST,
    SIGNUPFAILURE,
    SIGNUPSUCCESS,
  } from "./actionTypes";

export const initState = {
    userName: "",
    error: "",
    isAuth: false
}

const reducer = (state = initState, action) => {
    switch (action.type) {
    case LOGINREQUEST:
        return {
            ...state,
            error: "",
            userName: ""
          };
    case LOGINFAILURE:
        return {
            ...state,
            error: action.payload
          };
    case LOGINSUCCESS:
        return {
            ...state,
            error: "",
            userName: action.payload,
            isAuth: true
          };
    case SIGNUPREQUEST:
        return {
            ...state,
            error: "",
            userName: ""
          };
    case SIGNUPFAILURE:
        return {
            ...state,
            error: action.payload
          };
    case SIGNUPSUCCESS:
        return {
            ...state,
            error: "",
            userName: action.payload,
            isAuth: true
          };
    default:
      return state;
    }
}

export default reducer
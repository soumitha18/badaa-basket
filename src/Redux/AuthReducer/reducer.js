import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  AUTH_FAILURE,
  AUTH_REQUEST,
  AUTH_SUCCESS
} from "./actionTypes";

export const initState = {
  userName: "",
  error: "",
  isAuth: false
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        error: "",
        userName: ""
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: "",
        userName: action.payload,
        isAuth: true
      };
    case SIGNUP_REQUEST:
      return {
        ...state,
        error: "",
        userName: ""
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        error: "",
        userName: action.payload,
        isAuth: true
      };
    case AUTH_REQUEST:
      return {
        ...state,
        error: "",
        userName: ""
      }
    case AUTH_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case AUTH_SUCCESS:
      return {
        ...state,
        error: "",
        userName: action.payload,
        isAuth: true
      }
    default:
      return state;
  }
}

export default reducer
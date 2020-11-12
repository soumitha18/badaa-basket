import { loadData, saveData } from "../localStorage";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  AUTH_FAILURE,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  LOGOUT,
  EDIT_FAILURE,
  EDIT_REQUEST,
  EDIT_SUCCESS
} from "./actionTypes";

export const initState = {
  user: loadData("user") || {},
  error: "",
  isAuth: loadData("isAuth") ||  false
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        error: "",
        user: ""
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case LOGIN_SUCCESS:
      saveData("user", action.payload)
      return {
        ...state,
        error: "",
        user: action.payload,
        isAuth: true
      };
    case SIGNUP_REQUEST:
      return {
        ...state,
        error: "",
        user: ""
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
        user: action.payload,
        isAuth: true
      };
    case AUTH_REQUEST:
      return {
        ...state,
        error: "",
        user: ""
      }
    case AUTH_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case AUTH_SUCCESS:
      saveData("user", action.payload)
      saveData("isAuth", true)
      return {
        ...state,
        error: "",
        user: action.payload,
        isAuth: true
      }
      case LOGOUT:
        saveData("user", {})
      saveData("isAuth", false)
      return {
        ...state,
        isAuth: false,
        user: {}
      }
    case EDIT_FAILURE:
      return {
        ...state,
        err: "Something Went Wrong"
      }
      case EDIT_REQUEST:
        return {
          ...state,
          err: ""
        }
        case EDIT_SUCCESS:
          return {
            ...state,
        user: action.payload
      }
    default:
      return state;
  }
}

export default reducer
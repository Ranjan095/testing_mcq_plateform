import Cookies from "js-cookie";
import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
} from "./authType";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  fullName: Cookies.get("fullName") || "",
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    /** FOR USER LOGIN */
    case LOGIN_USER_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        fullName: payload?.fullName,
      };
    }
    case LOGIN_USER_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    /** FOR USER LOGOUOT */
    case LOGOUT_USER_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case LOGOUT_USER_SUCCESS: {
      return { ...state, isLoading: false, fullName: "", isError: false };
    }
    case LOGOUT_USER_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    default:
      return state;
  }
};

import axios from "axios";
import { baseURL } from "../../utils/baseURL";
import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
} from "./authType";
import {
  toastLoading,
  toastSuccess,
  toastUpdate,
} from "../../react-toastify/ReactToastify";

/** FOR LOGIN USER */
export const loginUser = (input, navigate, location) => async (dispatch) => {
  dispatch({ type: LOGIN_USER_REQUEST });
  const toastId = toastLoading("login....");
  return axios
    .post(`${baseURL}/user/login`, input, { withCredentials: true })
    .then((res) => {
      //   console.log(res);
      dispatch({ type: LOGIN_USER_SUCCESS, payload: res?.data });
      toastUpdate(toastId, "success", "Login successful!");
      navigate(location.state?.from?.pathname || "/", { replace: true });
    })
    .catch((err) => {
      const errorMessage = err?.response?.data?.error;
      console.log(err);
      dispatch({ type: LOGIN_USER_FAILURE });
      toastUpdate(toastId, "error", errorMessage);
    });
};

/** FOR LOGOUT USER */
export const logoutUser = (navigate) => async (dispatch) => {
  dispatch({ type: LOGOUT_USER_REQUEST });
  const toastId = toastLoading("Loading...");
  return axios
    .post(`${baseURL}/user/logout`, {}, { withCredentials: true })
    .then((res) => {
      //   console.log(res);
      dispatch({ type: LOGOUT_USER_SUCCESS });
      toastUpdate(toastId, "success", "Logout successfull!");
      navigate("/");
    })
    .catch((err) => {
      const errorMessage = err?.response?.data?.error;
      console.log(err);
      dispatch({ type: LOGOUT_USER_FAILURE });
      toastUpdate(toastId, "error", errorMessage);
    });
};

/** FOR SIGNUP USER */
export const signUpUser = (data) => (dispatch) => {};

import axios from "axios";
import { baseURL } from "../../utils/baseURL";
import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
} from "./authType";
import {
  toastLoading,
  toastSuccess,
  toastUpdate,
} from "../../react-toastify/ReactToastify";

/** FOR LOGIN USER */
export const loginUser = (input, navigate, location) => (dispatch) => {
  dispatch({ type: LOGIN_USER_REQUEST });
  const toastId = toastLoading("login....");
  return axios
    .post(`${baseURL}/user/login`, input, { withCredentials: true })
    .then((res) => {
      console.log(res);
      dispatch({ type: LOGIN_USER_SUCCESS, payload: res?.data });
      toastUpdate(toastId, "success", "Login successful!");
      navigate(location.state?.from?.pathname || "/signUp", { replace: true });
    })
    .catch((err) => {
      const errorMessage = err?.response?.data?.error;
      console.log(err);
      dispatch({ type: LOGIN_USER_FAILURE });
      toastUpdate(toastId, "error", errorMessage);
    });
};

/** FOR SIGNUP USER */
export const signUpUser = (data) => (dispatch) => {};

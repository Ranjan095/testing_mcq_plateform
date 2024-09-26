import axios from "axios";
import {
  USER_TEST_GET_BY_TEST_ID_ERROR,
  USER_TEST_GET_BY_TEST_ID_REQUEST,
  USER_TEST_GET_BY_TEST_ID_SUCCESS,
  USER_TEST_GET_ERROR,
  USER_TEST_GET_REQUEST,
  USER_TEST_GET_SUCCESS,
} from "./testType";
import { baseURL } from "../../utils/baseURL";
import {
  toastError,
  toastLoading,
  toastUpdate,
} from "../../react-toastify/ReactToastify";

export const userGetAllTest = () => async (dispatch, getState) => {
  const { isSuccess } = getState().testReducer;

  // If the tests have already been fetched, return early to avoid re-fetching
  if (isSuccess) {
    console.log("Tests already fetched, skipping API call.");
    return;
  }
  dispatch({ type: USER_TEST_GET_REQUEST });
  const toastId = toastLoading("getting test...");
  return axios
    .get(`${baseURL}/user/test`, { withCredentials: true })
    .then((res) => {
      console.log(res?.data);
      dispatch({ type: USER_TEST_GET_SUCCESS, payload: res?.data });
      toastUpdate(toastId, "success", "fetched test successfully");
    })
    .catch((err) => {
      const errorMessage = err?.response?.data?.error;
      console.log(err);
      dispatch({ type: USER_TEST_GET_ERROR });
      toastUpdate(toastId, "error", errorMessage);
    });
};

/** GET TEST BY ID */

export const getTestById = (testId) => async (dispatch) => {
  dispatch({ type: USER_TEST_GET_BY_TEST_ID_REQUEST });
  // const tostId = toastLoading("Loading test...");
  return axios
    .get(`${baseURL}/user/test/${testId}`, { withCredentials: true })
    .then((res) => {
      dispatch({ type: USER_TEST_GET_BY_TEST_ID_SUCCESS, payload: res?.data });
      // toastUpdate(tostId, "success", "fetched test successfully");
    })
    .catch((err) => {
      const errorMessage = err?.response?.data?.error;
      dispatch({ type: USER_TEST_GET_BY_TEST_ID_ERROR });
      toastError(errorMessage);
    });
};

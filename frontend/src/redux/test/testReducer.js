import {
  GET_ALL_SOLVED_TEST_ERROR,
  GET_ALL_SOLVED_TEST_REQUEST,
  GET_ALL_SOLVED_TEST_SUCCESS,
  USER_TEST_GET_BY_TEST_ID_ERROR,
  USER_TEST_GET_BY_TEST_ID_REQUEST,
  USER_TEST_GET_BY_TEST_ID_SUCCESS,
  USER_TEST_GET_ERROR,
  USER_TEST_GET_REQUEST,
  USER_TEST_GET_SUCCESS,
} from "./testType";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  userTest: [],
  adminTest: [],
  solvedTest: [],
  singleTest: null,
};

export const testReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    /** FOR USER TEST */
    case USER_TEST_GET_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case USER_TEST_GET_SUCCESS: {
      return { ...state, isLoading: false, isSuccess: true, userTest: payload };
    }
    case USER_TEST_GET_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }

    /** FOR  GETTING TEST BY TEST ID - USER */
    case USER_TEST_GET_BY_TEST_ID_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case USER_TEST_GET_BY_TEST_ID_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        singleTest: payload,
      };
    }
    case USER_TEST_GET_BY_TEST_ID_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    /** FOR GET ALL SOLVED TEST */
    case GET_ALL_SOLVED_TEST_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case GET_ALL_SOLVED_TEST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        solvedTest: payload,
      };
    }
    case GET_ALL_SOLVED_TEST_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    default:
      return state;
  }
};

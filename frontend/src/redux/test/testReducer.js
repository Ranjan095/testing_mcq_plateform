import {
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
    default:
      return state;
  }
};

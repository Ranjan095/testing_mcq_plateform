import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleSolvetTest } from "../../redux/test/testAction";
import TestResultCard from "./TestResultCard";

const TestResultSinglePage = () => {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((store) => store.authReducer);
  const { singleTestId } = useParams();

  const { isLoading, singleSolvedTest } = useSelector(
    (store) => store.testReducer
  );
  // console.log(singleSolvedTest);

  useEffect(() => {
    if (accessToken && singleTestId) {
      dispatch(getSingleSolvetTest(accessToken, singleTestId));
    }
  }, [accessToken, singleTestId]);

  return isLoading ? (
    <h1 className="text-3xl font-bold">Loading...</h1>
  ) : (
    <TestResultCard {...singleSolvedTest} />
  );
};

export default TestResultSinglePage;

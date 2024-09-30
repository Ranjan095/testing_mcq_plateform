import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSolveTest } from "../../redux/test/testAction";
import TestResultCard from "./TestResultCard";

const TestResult = () => {
  const dispatch = useDispatch();

  const { solvedTest, isLoading } = useSelector((store) => store.testReducer);
  const { accessToken } = useSelector((store) => store.authReducer);


  useEffect(() => {
    dispatch(getAllSolveTest(accessToken));
  }, []);
  return isLoading ? (
    <h1>Loading Test Result...</h1>
  ) : (
    <div className="m-2">
      <h1 className="text-3xl text-primary font-bold text-center">
        Test Result
      </h1>
      <div className="grid md:grid-cols-2">
        {solvedTest?.map((ele) => (
          <TestResultCard key={ele._id} {...ele} />
        ))}
      </div>
    </div>
  );
};

export default TestResult;

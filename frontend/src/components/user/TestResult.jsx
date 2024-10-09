import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSolveTest } from "../../redux/test/testAction";
import TestResultCard from "./TestResultCard";
import { Link } from "react-router-dom";

const TestResult = () => {
  const dispatch = useDispatch();

  const { solvedTest, isLoading } = useSelector((store) => store.testReducer);
  const { accessToken } = useSelector((store) => store.authReducer);

  console.log(solvedTest);

  useEffect(() => {
    dispatch(getAllSolveTest(accessToken));
  }, []);
  return isLoading ? (
    <h1 className="text-3xl font-bold text-center mt-2">Loading Test Result...</h1>
  ) : (
    <div className="m-2">
      <h1 className="text-3xl text-primary font-bold text-center">
        Test Result
      </h1>
      {/** TEST RESULT */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {solvedTest?.map((ele) => {
          const score = ele?.score;
          const questions = ele?.testId?.questions?.length;
          return (
            <div key={ele._id} className="my-2">
              <Link to={`/test-result/${ele?._id}`}>
                <div className=" flex flex-col justify-center rounded-md items-center md:w-[200px] h-[100px] bg-indigo-500 text-white mx-2">
                  <h1 className="font-bold text-tab">{ele?.testId?.testName}</h1>
                  <h1>
                    Solved Date :{" "}
                    {new Date(ele?.dateSolved).toLocaleDateString()}
                  </h1>
                  <h1 className={`${""}`}>
                    Score :{" "}
                    <b
                      className={`${
                        score >= questions / 2
                          ? "text-green-800"
                          : "text-red-800 "
                      } text-2xl`}
                    >{`${score} / ${questions}`}</b>
                  </h1>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestResult;

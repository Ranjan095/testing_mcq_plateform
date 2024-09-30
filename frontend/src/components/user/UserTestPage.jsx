import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTestById, submitTest } from "../../redux/test/testAction";
import UserTestCards from "./UserTestCards";

const UserTestPage = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const { testId } = useParams();
  const [state, setState] = useState({
    testId,
    answers: [],
  });

  const { singleTest, isLoading } = useSelector((store) => store.testReducer);
  const { accessToken } = useSelector((store) => store?.authReducer);
  // console.log(singleTest)

  const handleSubmitTest = (e) => {
    e.preventDefault();
    dispatch(submitTest(state,navigate,accessToken));
  };

  const filterDuplicate = (obj, answers) => {
    const arr = [...answers]; // Clone the answers array to avoid direct mutation

    // Find the index of the object with the same questionId
    const index = arr.findIndex((ele) => ele.questionId === obj.questionId);

    // If found, replace the existing object with the new one
    if (index !== -1) {
      arr[index] = obj;
    } else {
      // If not found, push the new object to the array
      arr.push(obj);
    }

    return arr; // Return the updated array
  };

  const handleQuestion = (questionId, selectedAnswer) => {
    const obj = {
      questionId,
      selectedAnswer,
    };
    setState({ ...state, answers: filterDuplicate(obj, state?.answers) });
  };

  useEffect(() => {
    dispatch(getTestById(testId,accessToken));
  }, []);

  return isLoading ? (
    <h1 className="text-2xl font-bold">Loading Test....</h1>
  ) : (
    <div className="text-center my-4">
      <form onSubmit={handleSubmitTest}>
        <div className="text-center py-4">
          <h1 className="text-2xl font-semibold text-error">
            {singleTest?.testName}
          </h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 ">
            {singleTest?.questions.map((ele, i) => (
              <UserTestCards
                no={i + 1}
                key={ele?._id}
                {...ele}
                handleQuestion={handleQuestion}
              />
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="p-2 bg-green-500 rounded-md font-bold text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserTestPage;

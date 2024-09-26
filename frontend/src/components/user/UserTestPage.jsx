import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTestById } from "../../redux/test/testAction";
import UserTestCards from "./UserTestCards";



const UserTestPage = () => {
  const dispatch = useDispatch();
  const { testId } = useParams();

  const { singleTest, isLoading } = useSelector((store) => store.testReducer);
  // console.log(singleTest)

  useEffect(() => {
    dispatch(getTestById(testId));
  }, []);

  return isLoading ? (
    <h1 className="text-2xl font-bold">Loading....</h1>
  ) : (
    <div className="text-center">
      <h1 className="text-2xl font-semibold">{singleTest?.testName}</h1>
      <div>
        {singleTest?.questions.map((ele,i) => (
          <UserTestCards no={i+1} key={ele?._id} {...ele} />
        ))}
      </div>
    </div>
  );
};

export default UserTestPage;
